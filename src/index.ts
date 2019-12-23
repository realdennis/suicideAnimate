const suicideAnimate: (animationObj: Animation) => Animation = animationObj => {
  // Once the animate object get finish, it'll remove by itself.
  animationObj instanceof Animation &&
    animationObj.addEventListener("finish", () => {
      const effect = animationObj.effect;
      /**
       * Why check instanceof KeyframeEffect?
       * It might be GroupEffect and sequencesEffect in the future,
       * but seems we do not know the interface of these,
       * so, we only handle KeyframeEffect to remove itself.
       */

      effect instanceof KeyframeEffect && effect?.target?.remove();
      // effect.target may be null for animation do not target a specific element.
    });

  return animationObj;
};
export default suicideAnimate;
