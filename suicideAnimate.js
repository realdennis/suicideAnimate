function suicideAnimate(animationObj) {
  // Once the animate object get finish, it'll remove by itself.
  animationObj &&
    animationObj.addEventListener &&
    animationObj.addEventListener("finish", function() {
      animationObj.effect &&
        animationObj.effect.target &&
        animationObj.effect.target.remove &&
        animationObj.effect.target.remove();
    });
  return animationObj;
}
export default suicideAnimate;
