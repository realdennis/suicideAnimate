# suicide animate

It a plugin of the element animate api, since `element.animate()` will return object, so I made a middleware like function to do the duplicate event register..

Once the animate finish, element will killed by itself.

## What's the use scenario?

If you control only one or two element's animate method, you will not need this, but if you try to **dynamic generate element and do some animate and destroy it**, you must need this to save time to store the dynamic element variable and event.

## Usage

It also return `animation object`, the only one thing special is it'll remove when animation state `finish`.

```javascript
import suicideAnimate from './suicide-animate.js'
const animationObj = suicideAnimate(document.getElementById("tunnel").animate(
  [
    // keyframes
    { transform: "translateY(0px)" },
    { transform: "translateY(-300px)" }
  ],
  {
    // timing options
    duration: 1000,
  }
));

animationObj.onpause = function(){
    console.log("you can also do something you want like standard usage;");
}
animationObj.onfinish = function(){
    console.log("you can also do something you want like standard usage;");
}
```


## Before suicide animate

```javascript
const animationObj = document.getElementById("tunnel").animate(
  [
    // keyframes
    { transform: "translateY(0px)" },
    { transform: "translateY(-300px)" }
  ],
  {
    // timing options
    duration: 1000,
  }
);
animationObj.onfinish = function() {
  document.getElementById("tunnel").remove();
};
```