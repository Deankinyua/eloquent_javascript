import { getProgress } from "./helpers.js";

// The functions here animate circles. CX is the cx value of the circle
const deviation = 25;

const easeOut = (progress) => Math.pow(--progress, 5) + 1;

const getCX = (element) => Number(element.getAttribute("cx"));

// This is the blur
const blur = (start, gaussian) => {
  const time = {
    start,
    total: 800,
  };

  const blurFace = (now) => {
    time.elapsed = now - time.start;
    const progress = deviation - deviation * getProgress(time);
    gaussian.setAttribute("stdDeviation", `${progress}, 0`);
    if (progress) requestAnimationFrame(blurFace);
  };

  requestAnimationFrame(blurFace);
};

const animateCartoonHead = (
  targetElementIndex,
  finalCXValues,
  elementsAnimatingOrder,
  startCXValues,
  gaussianBlurElement,
) => {
  let index = targetElementIndex;
  const finalPosition = finalCXValues[index];
  const targetElement = elementsAnimatingOrder[index];
  const currentPosition = getCX(targetElement);
  const distance = currentPosition - finalPosition;
  const startX = startCXValues[index];

  const time = {
    start: performance.now(),
    total: 700,
  };

  const animateFace = (now) => {
    time.elapsed = now - time.start;

    const progress = getProgress(time);
    const easing = easeOut(progress) * distance;
    const cx = startX - easing;

    targetElement.setAttribute("cx", cx);

    if (progress < 1) {
      requestAnimationFrame(animateFace);
    } else {
      index += 1;

      if (index < 3) {
        animateCartoonHead(
          index,
          finalCXValues,
          elementsAnimatingOrder,
          startCXValues,
        );
      } else {
        console.log("done");
      }
    }
  };

  if (index < 1) blur(time.start, gaussianBlurElement);

  requestAnimationFrame(animateFace);
};

export default animateCartoonHead;
