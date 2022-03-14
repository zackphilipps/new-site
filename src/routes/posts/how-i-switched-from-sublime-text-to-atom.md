---
title: How I Switched from Sublime Text to Atom
slug: how-i-switched-from-sublime-text-to-atom
description:
date: 2016-08-01
---

# {title}

![Atom screenshot](/images/2016/08/Screen-Shot-2016-08-01-at-13-26-04.png)

([Atom Material Dark](https://atom.io/themes/atom-material-ui) with [Panda Syntax](https://panda.siamak.work/) and [Mononoki](https://madmalik.github.io/mononoki/) typeface)

When I first discovered Sublime Text, I fell in love with its configurability and the availability of packages to extend its features. When Atom first came out, I tried it for a little bit, but quickly became frustrated because there were still some kinks that needed resolved.

Fast forward about 2 years to when I start my new job at [Element Three.](https://elementthree.com) The whole dev team is using Atom, so I figure I'll give it another shot.

There was definitely an adjustment period. But, after a few weeks, I realized that Atom did everything Sublime did, except better! And more!

---

![Atom logo](/images/2016/08/atom-logo-1.jpg)

Right off the bat Atom comes with default packages, which you can disable. I immediately disabled the `wrap-guide` package because I couldn't take the line running through my code, and I don't ascribe to the 80-character preference. But this in itself is an improvement over Sublime. Here are some more.

#### Out-of-the-box Improvements over Sublime

1. Better default theme and syntax highlighting
1. More intuitive Settings panel
1. Spell-check
1. Markdown preview, which renders all the expensive markdown writing apps out there totally useless
1. Git integration, eliminating the need for [GitGutter.](https://github.com/jisaacks/GitGutter) Atom will indicate changes to your `git` projects by changing the color of file/directory names and the line numbers in your files
1. Better autocomplete suggestions, since it will search your entire project for matches to what you are typing as opposed to just the file you are in at the moment
1. [SelectUntil](https://github.com/xavi-/sublime-selectuntil) behavior by default
1. [SideBarEnhancements](https://github.com/titoBouzout/SideBarEnhancements) behavior by default
1. [Atom's package manager](https://github.com/atom/apm) is bundled. No more having to press control-backtick, finding that code snippet online, and pasting it in the console 🔥
1. Thriving developer community that is responsible for all of this awesomeness

#### Major adjustments

In fact, most of what I had to adjust to with Atom was keybindings. I had a few custom ones set up in Sublime that I struggled with in Atom. This is because I was adding them incorrectly. (They're case sensitive.)

As mentioned in [A Front End Developer's Sublime Text Setup,](https://zackphilipps.com/a-front-end-developers-sublime-text-setup/) I had been used to using `shift-cmd-d` to **delete** lines and `alt-cmd-d` to **duplicate** lines. Well, I added my keybindings like so:

```
'atom-workspace atom-text-editor:not([mini])':
  'shift-cmd-D': 'unset!'
  'shift-cmd-D': 'editor:delete-line'
  'alt-cmd-D': 'editor:duplicate-lines'
```

_Delete line_ worked, but not _duplicate line._ It's because Atom was expecting me to type `alt-cmd-shift-D` because I had entered it as a capital `D`. This is the correct way:

```
'atom-workspace atom-text-editor:not([mini])':
  'shift-cmd-D': 'unset!'
  'shift-cmd-D': 'editor:delete-line'
  'alt-cmd-d': 'editor:duplicate-lines'
```

The other big thing to get used to was the behavior of the `tab` key. In Sublime, you could use `tab` (much like a terminal) to expand snippets and use suggested autocompletions. In Atom, it seems like the `return` key is more reliable for autocomplete, while `tab` still works for snippets. Kinda weird.

^ that may just be because I am using Emmet, which in Sublime, allows `tab` to expand all of its abbreviations. I ended up adding another keybinding. Emmet's default keybinding is `ctrl+e` to expand abbreviations; I changed it to `cmd-e` since I wasn't using it for anything else and it's more intuitive to my fingers.

---

Now, on to the fun stuff: packages! I was able to find a replacement for every package I loved in Sublime, and all of these either matched or surpassed their predecessors.

I was also able to create [my first Atom package.](https://atom.io/packages/zp-acf-snippets) Thanks to [apm](https://github.com/atom/apm), it was incredibly easy to publish.

#### Packages

[Atom Beautify](https://atom.io/packages/atom-beautify) – Beautify HTML, CSS, JavaScript, PHP, Python, Ruby, Java, C, C++, C#, Objective-C, CoffeeScript, TypeScript, Coldfusion, SQL, and more in Atom.

This replaced _JavaScript Beautify_ and _SassBeautify_ from my Sublime setup. As you can see, it handles a lot more languages than that.

[Emmet](https://emmet.io/) – Another time-saving package providing many useful HTML snippets.

[File Icons](https://atom.io/packages/file-icons) – Assign file extension icons and colors for improved visual grepping.

[Language Blade](https://atom.io/packages/language-blade) – Syntax highlighter for the Blade templating engine used in Laravel.

[Language Twig](https://atom.io/packages/language-twig) – Twig support for Atom.

[Less Than Slash](https://atom.io/packages/less-than-slash) – Adds automatic closing of HTML tags when less-than, slash (`</`) is typed.

[Markdown Writer](https://atom.io/packages/markdown-writer) – Make Atom a better Markdown editor and an easier static blogging tool.

I like this one because it makes Atom behave more like Ghost. I can press `cmd-b` to make my markdown text bold, `cmd-k` to insert a hyperlink, and so on.

[Split Diff](https://atom.io/packages/split-diff) – A split pane diff tool.

![Demo Split Diff](/images/2016/08/split-diff2.gif)

[Sync Settings](https://atom.io/packages/sync-settings) – Synchronize package settings, keymap and installed packages across devices.

[Tree View Autoresize](https://atom.io/packages/tree-view-autoresize) – Autoresize the tree view when opening/closing folders.

![Demo Tree View Autoresize](/images/2016/08/tree-view-autoresize.gif)

[ZP ACF Snippets](https://atom.io/packages/zp-acf-snippets) – This is a collection of Atom snippets for the Advanced Custom Fields WordPress plugin. Based on the [Advanced Custom Fields Snippets for Sublime Text](https://github.com/iamhexcoder/acf_snippets) package.

**Update:** I have since added several more useful packages to my stack, including [atom-html-preview](https://atom.io/packages/atom-html-preview), [autocomplete-paths](https://atom.io/packages/autocomplete-paths), [git-time-machine](https://atom.io/packages/git-time-machine), [hyperlink-hyperclick](https://atom.io/packages/hyperlink-hyperclick), [merge-conflicts](https://atom.io/packages/merge-conflicts), [sublime-block-comment](https://atom.io/packages/sublime-block-comment), more languages, and linters.
