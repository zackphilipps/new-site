---
title: A Front End Developer’s Sublime Text Setup
slug: a-front-end-developers-sublime-text-setup
description:
date: 2015-03-27
---

# {title}

This post – as well as my other post [A Front End Developer’s Daily App Stack](https://zackphilipps.dev/posts/a-front-end-developers-daily-app-stack/) – is 100% inspired by [A Designer’s Sublime Text Setup](https://medium.com/design-notes/a-designers-sublime-text-setup-e3963f8d79da).

If you're following along, as a prerequisite you should definitely upgrade to [Sublime Text 3](https://www.sublimetext.com/3) if you haven't already, and likewise [install Package Control](https://packagecontrol.io/installation).

---

### Theme & Color Scheme

![Theme and color scheme](/images/2015/03/Screen-Shot-2015-03-27-at-12-28-43.png)

Having started with [Flatland](https://github.com/thinkpixellab/flatland), I am currently using [Predawn](https://github.com/jamiewilson/predawn). I love it so much... It has a color scheme built in, and even its own icon set and dock icon, as well as suggested settings and packages! I owe my entire Sublime setup to Jamie Wilson and [Mathias Bynens](https://github.com/mathiasbynens/dotfiles).

---

### Key Bindings

Like [Matej Latin](https://medium.com/@matejlatin), I had also been using Brackets for a while before I switched to Sublime. I also had a lot of difficulty adjusting to the new keybindings for _Duplicate Line_ and _Delete Line_. To emulate this in Sublime, simply navigate to Preferences > Key Bindings – User and add this:

```json
[
  { "keys": ["super+d"], "command": "duplicate_line" },
  {
    "keys": ["super+shift+d"],
    "command": "run_macro_file",
    "args": { "file": "Packages/Default/Delete Line.sublime-macro" }
  }
]
```

However I actually have all of my Sublime preferences synced with my entire development team at work (more on that later – has its pros and cons), and one of them really liked the _Quick Add Next_ default behavior of `command+D`, so I got used to this instead:

```json
{ "keys": ["super+alt+d"], "command": "duplicate_line" }
```

To make that work, I had to go to _System Preferences > Keyboard > Shortcuts > Launchpad & Dock_ and uncheck the box for _Turn Dock Hiding On/Off_.

I'm also a huge fan of [snippets](https://sublimetext.info/docs/en/extensibility/snippets.html), so I wanted a handy shortcut to pop open a list of snippets. This did the trick:

```json
{ "keys": ["ctrl+s"], "command": "show_overlay", "args": { "overlay": "command_palette", "text": "Snippet: " } }
```

I also have the package [FixMyJS](https://addyosmani.com/blog/fixmyjs/) installed, so the shortcut to use that is:

```json
{ "keys": ["alt+super+j"], "command": "fix" }
```

So to recap, and for the sake of quick updating in the future, my entire keybindings file looks like this:

```json
[
  {
    "keys": ["super+shift+d"],
    "command": "run_macro_file",
    "args": { "file": "Packages/Default/Delete Line.sublime-macro" }
  },
  { "keys": ["ctrl+s"], "command": "show_overlay", "args": { "overlay": "command_palette", "text": "Snippet: " } },
  { "keys": ["alt+super+j"], "command": "fix" },
  { "keys": ["super+alt+d"], "command": "duplicate_line" }
]
```

---

### Preferences

My preferences are a combination of Mathias's and Jamie's preferences with a few little tweaks of my own. My tweaks are mostly typography-related (I use 14 pt. with a bottom line padding of 4 because I like to be able to see my code), but I also have `find_selected_text` set to `true` (another Brackets-inspo'd behavior). I've also implemented [Ben Frain's top tip to stop hyphens from separating words](https://benfrain.com/top-tips-selection-unrelated-front-end-developer-tips). Here's my entire preferences file:

```json
{
  "close_windows_when_empty": false,
  "color_scheme": "Packages/Predawn/predawn.tmTheme",
  "default_encoding": "UTF-8",
  "default_line_ending": "unix",
  "detect_indentation": false,
  "draw_indent_guides": true,
  "draw_minimap_border": true,
  "draw_white_space": "all",
  "enable_tab_scrolling": false,
  "ensure_newline_at_eof_on_save": false,
  "file_exclude_patterns": [".DS_Store", "Desktop.ini", "*.pyc", "._*", "Thumbs.db", ".Spotlight-V100", ".Trashes"],
  "find_selected_text": true,
  "folder_exclude_patterns": [".git", "node_modules"],
  "font_size": 14,
  "highlight_modified_tabs": true,
  "hot_exit": false,
  "ignored_packages": ["Vintage"],
  "indent_guide_options": ["draw_active"],
  "line_padding_bottom": 4,
  "match_brackets": true,
  "match_brackets_angle": true,
  "open_files_in_new_window": false,
  "overlay_scroll_bars": "enabled",
  "remember_open_files": false,
  "show_encoding": true,
  "show_line_endings": true,
  "sidebar_default": true,
  "tab_size": 2,
  "tabs_small": true,
  "theme": "predawn.sublime-theme",
  "translate_tabs_to_spaces": false,
  "trim_trailing_white_space_on_save": true,
  "word_separators": "./\\()\"':,.;<>~!@#$%^&*|+=[]{}`~?",
  "word_wrap": true
}
```

---

### Packages

[ACF Snippets](https://github.com/smilledge/acf-sublime-snippets) – For [Advanced Custom Fields for WordPress](https://advancedcustomfields.com). I ❤️ it. With the baked-in PHP snippet, I can now type `php`, tab, `ifgf`, tab, and then type in the field name as opposed to typing `<?php if(get_field('field_name')): ?>` which is very awkward.

[Color Highlighter](https://github.com/Monnoroch/ColorHighlighter) – Unobtrusively previews hexadecimal color values by underlaying the selected hex codes in different styles.

[Emmet](https://emmet.io/) – Another time-saving package, as now I can type `!`, `tab` as opposed to (along with MANY MANY others):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

[FixMyJS](https://addyosmani.com/blog/fixmyjs/) – Just click the link and read Addy's post.

[GitGutter](https://github.com/jisaacks/GitGutter) – This is both part of [Mathias's dotfiles](https://github.com/mathiasbynens/dotfiles) and suggested by Jamie. It's amazing.

[Handlebars](https://github.com/daaain/Handlebars) – Handlebars syntax support.

[JavaScript Beautify](https://github.com/enginespot/js-beautify-sublime) – Automatically formats my JS just the way I like every time I hit _Save._

[Package Syncing](https://github.com/csch0/SublimeText-Package-Syncing) – Suggested by Matej and loved by many. Uses Dropbox to sync your Sublime preferences across devices. This is what we use at work so we all have the same ST3 setup. Referenced in the post about [my daily app stack](https://zackphilipps.dev/posts/a-front-end-developers-daily-app-stack/).

[Sass](https://packagecontrol.io/packages/Sass) – Sass syntax support.

[SassBeautify](https://github.com/badsyntax/SassBeautify) – Automatically formats my SCSS just the way I like every time I hit _Save._

[SelectUntil](https://github.com/xavi-/sublime-selectuntil) – Lets me press `cmd+shift+L` to get a cursor on each line I've selected. This way I can bulk edit multiple lines where the characters are all different but the lengths are the same. Useful for editing file/directory structures I've copied from the command line where find & replace just doesn't cut it.

[SideBarEnhancements](https://github.com/titoBouzout/SideBarEnhancements) – Recommended by Jamie and loved by many. Lets me do a million things when I right-click files/folders in ST3's sidebar as opposed to virtually nothing.

[WordPress](https://github.com/purplefish32/sublime-text-2-wordpress) – If you work with a lot of WP sites, this is indispensable.

---

#### Related Posts

- [A Front End Developer’s Daily App Stack](https://zackphilipps.dev/posts/a-front-end-developers-daily-app-stack/)
- [A WordPress Development Workflow for Small Teams in 2015](https://zackphilipps.dev/posts/a-wordpress-development-workflow-for-small-teams-in-2015/)
- [How I Use Chrome to Run a Web Design Business](https://zackphilipps.dev/posts/how-i-use-chrome-to-run-a-web-design-business/)
