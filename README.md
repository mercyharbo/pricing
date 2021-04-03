# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard
- **Bonus**: Complete the challenge with just HTML and CSS

### Screenshot

![image](https://user-images.githubusercontent.com/64808015/113463742-9040e080-941f-11eb-8137-0b1190ba16ae.png)


### Links

- Solution URL: https://github.com/mercyharbo/pricing/
- Live Site URL: https://mercyharbo.github.io/pricing/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript 

### What I learned

The HTML & CSS is get done using CSS-Grid and Flexbox to make it more flexible and easy on the mobile as well, I got to learn a little about the forEach statement in JavaScript.

To see how you can add code snippets, see below:

```html
     <div class="pricing-grid">
      <div class="basic-grid price">
        <p> Basic </p>
        <p class="dollar-sign"> &dollar; <span class="amount"> </span></p>
        <hr>
        <p> 500 GB Storage </p>
        <hr>
        <p> 2 Users Allowed </p>
        <hr>
        <p> Send up to 3 GB </p>
        <hr>
        <button class="bg-color"> Learn More </button>
      </div>

```
```css
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    ' . pro-grid .'
    ' basic-grid pro-grid master-grid'
    ' . pro-grid .';
  column-gap: 2%;
  padding: 0 5%;
  width: 100%;
  position: relative;
}

}
```
```js
const monthly = [19.99, 24.99, 39.99];
const annually = [199.99, 249.99, 399.99];

let priceSwitch = document.querySelector(".slider");
priceSwitch.addEventListener("click", pricingToggle);

}
```
### Continued development

I want to continue to develop in the forEach statement and also more with my JavaScript in general and I think doing more projects that has to do with it can help me improve more in the coming days, weeks, and months.

## Author

- Frontend Mentor - [@mercyharbo](https://www.frontendmentor.io/profile/mercyharbo)
- Twitter - [@codewithmercy](https://www.twitter.com/codewithmercy)

## Acknowledgments

I want to give credit to https://github.com/Ifycode for helping with the JavaScript, she was able to make things clear to me by explaining how it works without getting tired.
