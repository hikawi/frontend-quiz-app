# Frontend Mentor - Frontend quiz app solution

This is a solution to the [Frontend quiz app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/frontend-quiz-app-BE7xkzXQnU). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Frontend quiz app solution](#frontend-mentor---frontend-quiz-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [Logs](#logs)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- Select a quiz subject
- Select a single answer from each question from a choice of four
- See an error message when trying to submit an answer without making a selection
- See if they have made a correct or incorrect choice when they submit an answer
- Move on to the next question after seeing the question result
- See a completed state with the score after the final question
- Play again to choose another subject
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Navigate the entire app only using their keyboard
- **Bonus**: Change the app's theme between light and dark

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- [Vue](https://vuejs.org/)
- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)

### Logs

<details>
<summary>Day 1</summary>

There's a bonus challenge this time, which is the dark mode - light mode switcher. This time I'd like to try making a multi-page application, instead of reusing the same page and swapping out elements depending on state. I also want to practice this kinda of app with Vue. The first roadblock that has been struggling me is that the "theme state" does not persist through pages. I've tried Vue's reactivity stores, and Astro's nanostores, none of which worked, or I'm just not using them correctly.

Taking a break, and learning that there's a package called `@nanostores/persistent` that can persist the store's state to local storage. Tried implementing and it just doesn't seem to work at all and I'm losing my mind. What is wrong with me? All I want is a server-rendered page, but the HTML tag has the `dark` class when the theme is set to dark, that's it. It sometimes works but there's a flash of the wrong theme before it gets the right one.

A long time has passed again, and it seems like `@nanostores/persistent` really does persist through pages, but there's some problem with the way I'm using it that it causes not just a flash of the wrong theme, but a hydration mismatch between server and client also. Turns out, the solution is just using an inline-script straight in Astro, that forces the theme to be set correctly before the DOM is even started to be rendered. Below is a snippet of code that should be put in a `<head>` component to make it work. That's it. That's really it. **Of course**, if the user is malicious and tries changing the theme in local storage, make sure to check that before doing anything. I'm thanking everything that it's over!!

```html
<!-- Courtesy of Kevin Zuniga Cuellar -->
<script is:inline>
  const theme = (() => {
    if (localStorage.getItem("theme")) return localStorage.getItem("theme");
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  })();

  document.documentElement.classList.toggle("dark", theme === "dark");
  window.localStorage.setItem("theme", theme);
</script>
```

Next roadblock is the fact that even though nanostores does persist some data through pages, there's a hydration mismatch on any component that uses nanostores. Why is there a problem with literally every single thing I want to use? I tried Vue's pinia, but that does not persist through page changes. The issue with `@nanostores/persistance` is that hydration mismatch is technically a bug, but it's not on the library. It's the way the server's data does not match up with the client's `localStorage`, so there is always a mismatch. I'm checking more to see if Pinia can be used, or is there a way to let nanostores hydrate correctly,... tomorrow.

</details>

### What I learned

### Continued development

### Useful resources

- [Applying Dark mode in Astro](https://www.kevinzunigacuellar.com/blog/dark-mode-in-astro/) - The killer here.
- [Astro Dark Mode, using persistent nanostores](https://bepyan.me/en/post/astro-darkmode/) - Another article with the similar solution.

## Author

- Website - [frilly.dev](https://www.frilly.dev)
- Frontend Mentor - [@hikawi](https://www.frontendmentor.io/profile/hikawi)
