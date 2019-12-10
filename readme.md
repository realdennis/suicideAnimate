# suicide animate

It a plugin of the element animate api, since `element.animate()` will return object, so I made a middleware like function to do the duplicate event register..

Once the animate finish, element will killed by itself.

## What's the use scenario?

If you control only one or two element's animate method, you will not need this, but if you try to **dynamic generate element and do some animate and destroy it**, you must need this to save time to store the dynamic element variable and event.

## Usage

It also return `animation object`, the only one thing special is it'll remove when animation state `finish`.

```javascript
import suicideAnimate from 'https://unpkg.com/suicide-animate/suicideAnimate.js'
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

animationObj.onfinish = function(){
    console.log("you can also do something you want like standard usage;");
}
```


## Multiple element usage

In this case, you will not need to register event & remove the element again and again.
```javascript
[el1, el2, el3, el4].forEach(el =>
  suicideAnimate(
    el.animate(
      [{ transform: "translateY(0px)" }, { transform: "translateY(-300px)" }],
      {
        duration: 1000
      }
    )
  )
);
```

## Installation

```sh
$ yarn add suicide-animate
```

## License
MIT © 2019 realdennis