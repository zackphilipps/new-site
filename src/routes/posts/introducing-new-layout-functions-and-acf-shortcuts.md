---
title: Introducing New Layout Functions and ACF Shortcuts
slug: introducing-new-layout-functions-and-acf-shortcuts
description:
date: 2015-03-09
---

# {title}

Hello all! If you're an avid [Scratch Theme for WordPress](//scratchtheme.com) user, this post applies to you. If you use WordPress to develop websites, and you're not using Scratch yet, my only question is... why not?!

I just wanted to announce the release of [v1.2](//scratchtheme.com/changelog) and bring some important and awesome features to your attention. So, here goes!

### New Layout Functions

If you've taken a look at the _advanced_ section of the Scratch Docs, you know all about [Layout Functions](https://scratchtheme.com/docs/advanced/#layout-functions). They're great for plugging posts within The Loop into a CSS grid, or plugging sub-fields within an ACF Repeater into a CSS grid. Scratch features 1-6 column Layout Functions, as well as some flexible functions that allow you to completely fill the space in the last row with whatever number of posts or sub-fields is left over. One of the issues with Layout Functions was that sometimes you had to give your posts or sub-fields (let's call the space they take up "cells") a `height`. Until now.

With the new Layout Functions, each row of cells is wrapped in a `div.clearfix`. This means no more unnecessary heights. Everything just works!

In addition, the means of declaring said layouts is now easier. Don't worry; you can still use the old Layout Functions and they will work well enough. But with the new functions, you don't have to declare `$count` or `$blocks` anymore. Here's an example using an ACF Repeater:

```
<?php
  scratch_layout_declare('repeater', 4);
  while(has_sub_field('repeater')) {
    scratch_layout_start();
?>
  <!-- Content goes here. -->
<?php
    scratch_layout_end();
  }
?>
```

The full function to declare the layout looks like this (parameters below):

```php
scratch_layout_declare($args, $columns, $flex = true, $offset = null, $option = null)
```

#### Parameters

**$args**

- (array) `WP_Query` arguments
- (string) ACF `$field_name`

**$columns**

- (int) Number of columns to build to (if `4`, `four_columns_flex()` will be used)
- (string) `custom` (`custom_columns()` will be used)

**$flex**

- (bool) Whether or not to use the layout functions ending in `_flex`

**$offset**

- (string) Offset to use, if any \*Only applicable for 2 and 3 column layouts
  - `1:2`
  - `2:1`
  - `1:1:2`
  - `1:2:1`
  - `2:1:1`

**$option**

- (mixed) ACF option, if any:

```php
get_field($field_name, $option)
```

Feel free to look around [layout-declarations.php](https://github.com/zackphilipps/scratch-theme/blob/master/core/php/layout-declarations.php) if you fancy a more hands-on learning experience.

### ACF Shortcuts

Let's say you wanted to build a button with a href and title set by ACF. This is pretty common. You'd have to type all of this out:

```
<?php if(get_field('link_text')) { ?>
  <p>
    <a class="button"
       href="<?php the_field('link_href'); ?>"
       title="<?php the_field('link_text'); ?>">
      <?php the_field('link_text'); ?>
    </a>
  </p>
<?php } ?>
```

What if you could produce all of this with a one-liner? Well, you can. You could've written this on your own pretty easily. But, if you haven't yet for some reason, Scratch provides this:

```php
scratch_button($href, $title, $classes = null, $option = null)
```

This is just one of the many ACF Shortcuts now baked into Scratch. For more, visit [acf-shortcuts.php](https://github.com/zackphilipps/scratch-theme/blob/master/core/php/acf-shortcuts.php).

### Layouts Page Template

To play around with this, create a new page in WordPress and set its template to "Layouts". With Scratch, you can now add robust layouts on the fly, including sliders, hero units, staggered columns, and more. In addition, you have full control over [layouts/layout-\*.php](https://github.com/zackphilipps/scratch-theme/tree/master/layouts) and [\_layouts.scss](https://github.com/zackphilipps/scratch-theme/blob/master/scss/_layouts.scss) for customization.

~~ACF does not currently support editing the field groups themselves, but as per this post, that feature should be in the roadmap.~~

**Update:** Editing the field groups from the Custom Fields screen is now possible through [synchronized JSON](https://www.advancedcustomfields.com/resources/synchronized-json/)!

### Conclusion

Hopefully some of this got you more excited about working with Scratch and ACF. I know it's definitely saving hours of mine and my coworkers' time building great websites for clients whose demands are steadily growing.

---

#### Related Posts

- [A WordPress Development Workflow for Small Teams in 2015](https://zackphilipps.dev/posts/a-wordpress-development-workflow-for-small-teams-in-2015/)
