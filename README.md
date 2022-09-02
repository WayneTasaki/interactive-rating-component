<div align="center" width="50%"><img src="/src/images/screenshot.png"></img></div>
<h1 align="center">Interactive Rating Component</h1>

<div align="center">
  <h3>
    <a href="https://waynetasaki.github.io/interactive-rating-component/>🌐 Live Site </a>  |  
    <a href="#"> Solution </a> | 
    <a href="https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI"> Challenge </a> 
  </h3>
</div>
<div align="center">
   Solution for a challenge from  <a href="https://www.frontendmentor.io/" target="_blank">frontendmentor.io</a>.
</div>
<br>

## About This Project

<p>This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!


The challenge is to build out this interactive rating component and get it looking as close to the design as possible. You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.
<br>
<br>
Your users should be able to:
1. Select and submit a number rating
2. See the "Thank you" card state after submitting a rating
3. See hover and focus states for all interactive elements on the page
<br>
<br>



## Built with

<p>React</p>

## What I learned
- Having just learned the basics of React, I decided to choose this project as the first thing to build using my newfound skills. I know this was absolutely overkill, but not only was it a great opportunity to put what I learned into practice, I also found it a bit funny that I'd use React to build something like this. This would have been completed in under a day had I used vanilla JavaScript, but instead it took a few days.
- I went above and beyond what was required for this project because I wanted to try out a bunch of React features. I used the useState hook to track the rating value, whether or not a rating was selected at all to prevent the submit button from being clicked, as well as to conditionally render components. I used Create Context and useContext to pass the rating value down to other components and React-Transition-Group which enabled me to add css classes with transition animations to components on mount and unmount.
