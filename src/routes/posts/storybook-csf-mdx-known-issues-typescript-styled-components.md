---
title: Adventures with Storybook, TypeScript, and Styled Components
slug: storybook-csf-mdx-known-issues-typescript-styled-components
description: A collection of known issues and workarounds for Storybook with CSF stories, MDX docs, TypeScript, and Styled Components.
date: 2022-08-09
featuredImage: /images/2022/08/storybook-ui-example.png
---

<time class="block text-teal-600 italic mb-4" datetime={date}>Aug 9, 2022</time>

# {title}

![Storybook UI example](/images/2022/08/storybook-ui-example.png)

Storybook is an amazing tool for building documentation that lives alongside a component library. It makes a lot of big promises, such as automatically generating documentation based on PropTypes or TypeScript type definitions, UI controls for changing props and previewing those changes, automatic code snippets, and more. Storybook offers zero-config TypeScript support and supports most JavaScript frameworks, including React, Vue, Svelte, Angular, and more.

However, supporting all of those different tools comes with a cost: introducing hundreds of edge cases that are extremely difficult and time-consuming to troubleshoot. In this post, I aim to describe some of the pain points I've faced when building a component library and docs site using TypeScript, Styled Components, and [Storybook with CSF stories and MDX docs](https://github.com/storybookjs/storybook/blob/master/addons/docs/docs/recipes.md#csf-stories-with-mdx-docs). I've spent untold hours scouring GitHub issues. This post is my attempt to round up some of the biggest head-scratchers I encountered in a central, easy-to-find place and hopefully augment Storybook's documentation on known issues.

## Table of contents

## Statically analyzable 🤔

The first important concept you should be aware of when using Storybook is that a lot of the underlying tooling relies on your source code and configuration files being "statically analyzable." This means that these tools simply read the code, but do not evaluate it. For instance, let's say you are attempting to extend a [TS config file](https://www.typescriptlang.org/tsconfig#extends):

```json
{
  "extends": "../path/to/tsconfig.json",
  "files": ["src"]
}
```

Storybook will not be able to evaluate, or even load, the TS config you are extending. You must explicitly configure TypeScript in your Storybook project.

### Automatic story source only works with inline named exports for CSF stories

Another example where the static concept applies is automatic story source. Have you ever hit the dreaded "No code available," even though your story preview renders fine?

![Storybook UI showing 'No code available' instead of 'Show code' button](/images/2022/08/no-code-available.png)

In order for Storybook to pull your story's source code, you _must_ use inline named exports for stories:

```jsx
// do this
export const BasicUsage = () => {
  return <>Hello world!</>
}

// NOT this
const BasicUsage = () => {
  return <>Hello world!</>
}
export { BasicUsage }
```

The second example will result in "No code available" instead of the "Show code" button. So, if you are someone who likes to keep all of your exports at the bottom of the file, tough luck. I couldn't find anything on GitHub for this _specific_ issue, but this concept also applies to the [CSF default export](https://storybook.js.org/docs/react/api/csf#default-export). There _is_ a GitHub issue that describes how [naming a variable before exporting it as a default also results in "No code available."](https://github.com/storybookjs/storybook/issues/11702)

---

## Limitations with ArgsTable

Now, I will talk about some issues I've encountered when using ArgsTable with TypeScript, Styled Components, and Storybook with CSF and MDX.

> ArgsTable issues can be challenging to troubleshoot because the `react-docgen` and `react-docgen-typescript` output can be cached between builds. To empty the cache, try the following:
>
> 1. Start Storybook with `--no-manager-cache`.
> 2. If that doesn't work, try deleting `node_modules/.cache/storybook` in your project.

### The component's variable name must match its displayName - #15401

GitHub issue: https://github.com/storybookjs/storybook/issues/15401

This applies if you are using `react-docgen-typescript` to generate the ArgsTable (the default config if you are using TypeScript.) If the name of the variable assigned to the component does not match its `displayName` exactly, props won't be pulled into the ArgsTable. Instead, you'll get "No inputs found for this component."

```jsx
// THIS DOESN'T WORK
export const MyComponent = (props) => {
  return <div {...props} />
}
MyComponent.displayName = 'FancyComponent' // doesn't match `MyComponent`

// THIS WORKS - displayName is inferred
export const MyComponent = (props) => {
  return <div {...props} />
}

// THIS WORKS TOO
export const MyComponent = (props) => {
  return <div {...props} />
}
MyComponent.displayName = 'MyComponent' // displayName matches
```

### Styled Components + TypeScript: The main component name will show up as "Story" or "undefined" unless the component is a named export in a .tsx file - #18029

GitHub issue: https://github.com/storybookjs/storybook/issues/18029

> The actual solution is here: [#11933 (comment)](https://github.com/storybookjs/storybook/issues/11933#issuecomment-829475230)

This applies if your component has subcomponents, so your ArgsTable renders a tab UI.

![Example of 'Story' showing on the main tab instead of the component name](/images/2022/08/story-tab.png)

As the heading suggests, make sure your component has a named export. The other key is to make sure your file has a `.tsx` extension _even if there is no JSX in it,_ as is common with Styled Components.

```jsx
// MyComponent.tsx
import styled from 'styled-components'

export const MyComponent = styled.div``
```

It's also a good idea to adhere to the aforementioned `export` constraints and `displayName` constraints. See [Table of Contents](#table-of-contents).

### Styled Components: If using JS and PropTypes, ArgsTable won't pull props - #11933

GitHub issue: [#11933 (comment)](https://github.com/storybookjs/storybook/issues/11933#issuecomment-862310626)

If you're like me, you have both TS and JS in your codebase and you're incrementally rewriting in TS. So, you might have some Styled Components that are written in JS. As far as I know, there is no way to automatically pull PropTypes for a Styled Component into ArgsTable. So, at this point, your options are:

1. Rewrite your component in TS (again, make sure you adhere to all of the previously mentioned constraints)
2. Export the "pure" or "unwrapped" component separately, as demonstrated here: [#11933 (comment)](https://github.com/storybookjs/storybook/issues/11933#issuecomment-862339869)

### Styled Components + TypeScript 🔥 Tip: Add a propFilter to exclude third-party props

Riffing on [@alexbchr's solution](https://github.com/storybookjs/storybook/issues/11933#issuecomment-829475230) mentioned above, here is a complete example of modifying [Storybook's TypeScript config](https://storybook.js.org/docs/react/configure/typescript) to exclude unwanted props from ArgsTable once you've fixed all the other issues. 😅

```js
// .storybook/main.js
const excludedProps = ['as', 'forwardedAs', 'theme', 'ref']

module.exports = {
  // ...
  typescript: {
    reactDocgenTypescriptOptions: {
      propFilter: (prop) =>
        (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true) && excludedProps.indexOf(prop.name) < 0,
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true
    }
  }
}
```

### ArgsTable won't pull props for HOCs - #9023

GitHub issue: https://github.com/storybookjs/storybook/issues/9023

This is similar to [the issue above](#styled-components-if-using-js-and-proptypes-argstable-wont-pull-props---11933), and [the workaround](https://github.com/storybookjs/storybook/issues/9023#issuecomment-560377577) is similar as well. If your HOC adds props, good luck!

---

## Conclusion

In summary:

- It's a good idea to write your stories in CSF, that way you get proper linting and IntelliSense. If you need extra documentation to go along with your stories, try the [CSF stories + MDX docs recipe.](https://github.com/storybookjs/storybook/blob/master/addons/docs/docs/recipes.md#csf-stories-with-mdx-docs)
- Always use _inline, named exports_ for your components and stories.
- Make sure your components' `displayName`s match their file/variable names exactly. This is good practice anyway, and in most cases, you don't even have to specify a `displayName`.
- If you aren't already, now is a great time to start writing your components in TypeScript.
- Make sure files for TS Styled Components end in `.tsx` rather than `.ts` _even if there is no JSX._
- Exclude `as`, `forwardedAs`, `theme`, and `ref` from all ArgsTables using a global `propFilter`, but be aware that you will need to re-provide some default Storybook TypeScript config such as `shouldExtractLiteralValuesFromEnum` and `shouldRemoveUndefinedFromOptional`.
- Refer to [documented workarounds for HOCs](https://github.com/storybookjs/storybook/issues/9023#issuecomment-560377577).

Hopefully this serves as a guide for you to create your own Storybook docs templates, or at least a helpful bookmark! If you've read this, tried everything, and are still scratching your head, I've opened a [GitHub discussion here.](https://github.com/storybookjs/storybook/discussions/18915) ✌️

### Version info

These are the specific versions of the tools I was using at the time of this post:

- Storybook v6.4
  - [Essential addons](https://storybook.js.org/docs/react/essentials/introduction)
  - MDX 1
  - `builder: 'webpack5'`
  - `babelModeV7: true`
- React v17
- Node v16.16
- TypeScript v4.7
- Styled Components v5.3
