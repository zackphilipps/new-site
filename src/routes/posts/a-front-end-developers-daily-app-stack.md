---
title: A Front End Developer’s Daily App Stack
slug: a-front-end-developers-daily-app-stack
description:
date: 2015-03-09
---

# {title}

![Switching Apps](/images/2015/03/Screen-Shot-2015-03-13-at-19-47-11-1.png)

All of the Mac apps I can't develop websites – or live – without.

#### Chrome Beta

Maybe it's just what I'm used to, but Chrome's developer tools seem unparalleled to me. Even with the fact that Safari looks incredible on Yosemite (even better in full-screen mode), I still have to use Chrome. I really look forward to the day when Google brings Material Design to desktop Chrome. I think that would look and feel much better on Yosemite.

I have to make the distinction with "Beta" here, because using the beta version ensures that I'm at least one step ahead of what my clients are using. This makes troubleshooting errors due to browser updates a more preemptive process for me. I don't like to use Canary, the bleeding-edge version, because key components of it can break from time to time and impede my workflow.

Of course within Chrome or any browser, there's a whole slew of other stuff you can talk about like extensions and the web apps you use, but [I'll save that for another post.](https://zackphilipps.dev/posts/how-i-use-chrome-to-run-a-web-design-business/)

#### Transmit

Wow, it's simply the best FTP client out there. Period. It's great for Mac users because it's only available for Mac (:P), and actually looks and behaves like a Finder window.

Why is it the best? It's simple to configure and use, you can save and sync connections on all your devices via Dropbox, and you can't beat the ability to double-click files on a remote server and have them automatically open up for editing in your favorite text editor. Then, when you save your edits, the remote file is automatically overwritten, eliminate the painfully endless loop of dragging and dropping. Oh, and it's extremely fast. (Obviously not as fast as just using the command line, but hey, take what you can get.)

#### Sublime Text

I love to customize things, which makes me greatly appreciate any software that lets me do it. Sublime is extremely customizable, and it's easy! You can set your own preferences and key-bindings. Plus, there is a huge, thriving community of developers that have made packages, themes, and color schemes for Sublime. I can and should talk about [my Sublime setup in another post](https://zackphilipps.dev/posts/a-front-end-developers-sublime-text-setup).

Sublime is also the fastest-launching text editor I have ever used. I hated waiting on Brackets / Edge Code to open up when I used them.

#### iTerm

iTerm is great because it's basically Mac OS's Terminal with several simple improvements. I love the fact that I can just quit the app and know it will automatically log me out of all my sessions. This makes shutting down my Mac a breeze (`ctrl+option+cmd+eject`).

The glue that holds Sublime and iTerm together though, and the main reason I use them, is [Mathias's dotfiles](https://github.com/mathiasbynens/dotfiles). Having set those up, I can type `s path/to/directory` to open an entire project in Sublime. I can also type in `emptytrash` to "Empty the Trash on all mounted volumes and the main HDD, and also clear Apple’s System Logs to improve shell startup speed", and then `cleanup` to recursively remove all `.DS_Store` files. I can also simply type `update` to single-commandedly get OS X Software Updates, and update installed Ruby gems, Homebrew, npm, and their installed packages. These are just a few of the aliases I use frequently that I have Mathias (and contributors to his GitHub repo) to thank for. Not to mention the awesome OSX, iTerm, and Sublime preferences and settings that are configured automatically upon executing `.osx`.

#### MAMP

I use this to develop WordPress websites locally. I use it because I must! It's a pretty elegant solution.

#### Messages

One of the few native Mac OS apps I use, the Yosemite version is pretty much indispensable. I can send and receive iMessages and SMS messages right from my computer, which is obviously AWESOME because typing on a keyboard is way faster than texting. There is also the ability to integrate other chat services, and I've set up Google Hangouts with mine. Messages and Mailbox have (almost) eliminated the need for me to ever open Gmail in the browser.

#### Slack

Slack is amazing. It's the perfect service to use for a work chatroom. It's even better for developers and designers because it makes file-sharing extremely easy, and it supports Markdown for your code-sharing needs. Plus, it has tons of subtle UI components that make it a delight to use.

#### Mailbox

Having already been using Mailbox on my iPhone and iPad, I was ecstatic to learn that the beta version for Mac OS was available to download. I love the magic mouse touch integrations, and I also love the keyboard shortcuts. I can respond to emails so much faster, and the design of the app is clean, minimal, and focus-oriented. The only caveat I've seen so far in the desktop app is that the search feature is a little lacking sometimes. That's why I occasionally find myself opening Gmail in a browser to find something that's particularly buried in the archives. That doesn't stop me from using Mailbox. It's still in beta after all.

#### Sunrise

I need Sunrise in my life because the design and UI of Google Calendars is god awful. Sunrise is beautiful and frees up precious tab space in my browser. Enough said.

#### Clear

Just like Mailbox, I had already been using Clear on my iPhone and iPad and loved it to death. The touch gestures make to-do lists fun, and the app translates well on desktop. I use it for my personal task list, since it's not meant to be a solution for project management.

## Background Apps

These are apps that I rarely ever open (because I don't have to), but I use them daily nonetheless.

#### 1Password

As a web developer, I have hundreds of login credentials to keep track of (and create) for myself and my clients. 1Password makes it simple to create strong passwords because it takes care of remembering them for you. After you install the app and browser extension, you can use the (brilliant) `cmd+\` shortcut to instantly log in to any service. You can also store addresses and credit cards to make checkout processes a little easier.

It's also a safer alternative to browser Autofill or iCloud keychains because all of your credentials are stored in a "vault" that requires a master passphrase to unlock. The vault locks automatically after a specified duration of inactive time. In addition, if you're like me and didn't get the app via the Mac App Store, you can sync your vault across all devices using Dropbox, provided you've installed on each device.

#### Dropbox

I use Dropbox because it provides an easy way to sync my 1Password vault, my Sublime preferences, and my Transmit favorites. For all other files I could use an alternative service, but Dropbox wins because it integrates with the essentials. Most of my clients also share files this way.

#### Spectacle

Spectacle was the best free Mac OS window manager I could find. I really enjoy the keyboard shortcuts and the fact that you can customize them. I frequently use `ctrl+option+cmd+→` (or `←`) to move apps between monitors, as well as `ctrl+option+cmd+F` to make windows take up the entire screen without entering full-screen mode.

#### CopyClip

It's a clipboard manager. Keeps track of things I `cmd+C` from any app, and provides a nice list of my history accessible via the Mac OS toolbar. Need it!

#### Screenmailer

Without this, I would never be able to teach my clients how to manage their websites. Screenmailer lives in my OSX menu bar, and when I'm ready to record my screen, I click its icon and click "Record". When I'm done, I stop the recording, and click a button to copy its newly-generated URL to my clipboard. [Here's a screenmailer video of me writing this post.](https://www.screenmailer.com/v/a4tg7NBsKarkTwY)

---

#### Related Posts

- [A WordPress Development Workflow for Small Teams in 2015](https://zackphilipps.dev/posts/a-wordpress-development-workflow-for-small-teams-in-2015/)
- [A Front End Developer's Sublime Text Setup](https://zackphilipps.dev/posts/a-front-end-developers-sublime-text-setup/)
- [How I Use Chrome to Run a Web Design Business](https://zackphilipps.dev/posts/how-i-use-chrome-to-run-a-web-design-business/)
