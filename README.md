# ONPS Wiki

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/DuckQuack001/oakridgenucpowplant?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/DuckQuack001/oakridgenucpowplant?style=for-the-badge)


Hey there! Thanks for wanting to improve the Oakridge Nuclear Power Station wiki. This guide will show you the important stuff and help you to contribute without accidentally breaking anything important.

## 🎯 Quick Start

Before attempting anything, let us brief you. This wiki is basically a knowledge base for nuclear power station procedures, and we want to keep it accurate and helpful for everyone who uses it. Don't worry though as the contributing is pretty straightforward once you know what's what.

## 📂 What You Can (and Can't) Touch

To maximise the chances of your PR being accepted, only modify the files you're permitted to. Think of it as a shared workspace where organisation matters.

### 🟢 Safe to Edit

**Content Pages:**
- `index.html` - This is your main landing page with all the navigation links
- `prestart.html`, `startup.html`, `shutdown.html` - The actual procedure pages that people come here to read
- Any other HTML files that follow the same pattern

**Images:**
- Anything in the `images/` folder - just make sure you're using `.webp` or `.png` files
- Keep images related to the game and make sure they're not huge file sizes

**Styling:**
- `style.css` - Feel free to improve the layout or fix broken styles, but try not to completely redesign everything. Just make sure to notify @ShrimpQuack of the change.

### 🔴 Hands Off (For Now)

**Core Scripts:**
- `script.js` - This handles important functionality, so ping @ShrimpQuack before you mess with it
- `Middleware.js` - This is routing stuff that keeps the site working properly, if you touch it in your PR there is a 99.100% chance it will be rejected

**Structure:**
- Don't rearrange the header or footer components
- Avoid adding random scripts or plugins without talking to someone first
- Don't delete files unless you're really sure about it

## If Your New To Git/GitHub

Yes, this stuff is complex, dont worry you can figure this out. to understand the terms like `push`, `fetch`, `pull` etc... we recomend reading [this artical](https://webtuu.com/blog/04/a-laymans-introduction-to-git).
great, now that you have read that, you should understand the basic terms of git and git related stuff. to see how to contribute, check out the [How To Contribute For Dummies ](./Contributing-For-Dummies.md) file

## ✏️ Making Your First Edit (Or How Not To Break Everything)

For the full ritual (Novel), check out the [CONTRIBUTING_GUIDE.md](./CONTRIBUTING_GUIDE.md).

*This README is starting to look like a giant novel. So I moved the boring but necessary bit to a separate file because nobody needs a novel to learn how to submit a pull request.*

## 📖 Writing Guidelines

Good writing makes all the difference when people are trying to learn procedures or find information quickly. Some guidelines are below.

### 🎯 Voice and Style

* **Talk Directly to the Reader:**
Use "you" when writing instructions. Instead of "operators should check the pressure," write "you should check the pressure." This makes guides feel more personal.

* **Keep It Conversational:**
You don't need to sound like a textbook. Professional doesn't mean boring. Write like you're explaining something to a colleague who's standing right next to you.

### 🏷️ Formatting Standards

* **Headers and Titles:**
Use Title Case for headings (like "Pre-Start Guide" or "Emergency Situations"). This keeps everything looking consistent and makes navigation easier.

* **Break Things Up:**
Long walls of text are hard to read, especially when someone's trying to follow a procedure or act fast. Use shorter paragraphs and break up complex ideas into chunks.

* **Technical Terms:**
When you use terminology, give a quick explanation or context. Not everyone has the same level of experience, and a brief clarification can save someone A LOT of confusion. Don't just say ECCS, give a meaning or a link to a page with meaning!

## 🆘 Getting Help

Stuck on something? Everyone needs help sometimes, and there are a few ways to get unstuck.

### 🏷️ Where to Ask

**Technical Issues:**
If you're having trouble with the code side of things, open an Issue in the repository or reach out to @ShrimpQuack on Discord. Be specific about what you're trying to do and what's going wrong.

**Content Questions:**
Not sure if your changes fit the site's goals? Ask! Open an Issue and ask. It's better to check than to spend time on something that might not work out.

### 🏷️ Common Gotchas

**HTML Syntax:**
If you're new to editing HTML, focus on changing the text content rather than the structural tags. When in doubt, look at how similar content is formatted on other pages.

**Image Problems:**
Remember that only `.webp` and `.png` files work, and they should be compressed to keep the site loading quickly. Large image files can make pages painfully slow to load.

## License

This project is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/).

---
---
---
---
---

*This section is for the hosting service and doesn't need to be edited by content contributors.*

---
name: HTML Starter
slug: html-starter-with-analytics
description: HTML5 template with analytics and advanced routing configuration.
deployUrl: https://vercel.com/new/clone?repository-url=https://github.com/vercel/examples/tree/main/solutions/html&project-name=html
relatedTemplates:
  - nextjs-boilerplate
---

# HTML Starter

This is a starter HTML5 templates which is configured with Vercel Analytics (through a `script` tag), advanced routing with [Vercel Edge Middleware](https://vercel.com/docs/concepts/functions/edge-middleware), as well as some basic styles

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/examples/tree/main/solutions/html&project-name=html)
