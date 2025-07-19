# 🛠️ How to Contribute Without Breaking Everything

So, you want to contribute? Lovely! Nobody loves newbies more than me!! This guide walks you through the sacred ritual of forking, editing, pushing, and pull-requesting like a responsible contributor (who you will become).

---

## 🍴 Step 1: Fork It

Unless you’ve somehow got write access (unlikely), you'll need to fork the repo. Go to the GitHub page and hit that **Fork** button.

> **⚠️ NOTE:** In this tutorial I do not explain on how to use [GitHub Desktop](https://desktop.github.com/download/), if you would like to use github desktop please go to [Contributung For Dummies](./) we are using [Git SCM](https://git-scm.com/downloads). Please download it.

Then clone your forked repostitory to your machine (NOT the `https://github.com/DuckQuack001/oakridgenucpowplant`):
```bash
git clone https://github.com/yourusername/this-repo.git
cd this-repo
````

Congratulations, you've just made a clone of someone else’s hard work.

---

## 🧭 Step 2: Figure Out Where the Hell It Went

Use the command line to find out where you just cloned your project to.

If you're on a UNIX based system (Linux, macOS), try:
```bash
pwd  # Shows your current directory
```

If you're on Windows, try:
```bash
echo %cd%  # Shows your current directory
```

Still lost? Watch a YouTube tutorial on how to clone something from GitHub.

---

## 🖋️ Step 3: Make Your Grand Changes

You’ll be editing stuff like `index.html`, which looks a bit like this:

```html
<section id="game-description">
  <h2>Welcome to the Team</h2>
  <p>This is where you'd put your new content.</p>
</section>
```

Do your edits **inside** the `<section>` tags. Think of them as of containers. Don’t move them around, unless you're absolutely sure what you're doing.

Focus on content and not on redesigning the entire layout unless you really, and I mean really know what you're doing (and even then, maybe don't).

---

## 💾 Step 4: Commit!

1. **Create a new branch:**

```bash
git checkout -b update-name  # Try to give a name that corresponds with what you've done
```

2. **Stage and commit:**

```bash
git add .
git commit -m "Fix typos"  # Give a brief and meaningful names to your commits
```

Also, please write a meaningful commit message. `Stuff` or `fixed` are **not meaningful.**

---

## 📤 Step 5: Push It To Your Fork

```bash
git push origin update-name
```

Your local changes are now on your forked repository!

---

## 🔁 Step 6: Make a Pull Request

1. Go to your forked repo on GitHub.
2. It’ll likely say that there were changes — click the **Compare & Pull Request** button.
4. Fill out the form:

   * **Title:** What you changed (e.g. “Fix grammar in About section”).
   * **Description:** Why you changed it, what it affects, any side effects (hopefully none).

Click submit. Done! Now await for review, usually takes some time.

---

## 🧽 PR Hygiene Checklist

* [ ] Clear and specific title.
* [ ] You explained what/why.
* [ ] No layout explosions on mobile.
* [ ] No broken links.
* [ ] Valid HTML (please no `<p><div><span><table>` madness).
* [ ] You spell-checked your thing. We don't want any drmands.

---

## 🔍 What Happens Next?

Your PR will be reviewed. By a human maintainer. Fix anything they point out. Don’t take it personally because it’s just code.

---

## 🆘 Got Questions?

Ask in the Discord or if you're feeling formal, open an issue on GitHub. We'll pretend to be helpful, hehe.

---

Thanks for contributing! (or reading this far)
