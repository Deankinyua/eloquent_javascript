const line_1 = document.querySelector(".line-1");
const line_2 = document.querySelector(".line-2");
const line_3 = document.querySelector(".line-3");
const line_4 = document.querySelector(".line-4");
const line_5 = document.querySelector(".line-5");
const gaussian = document.querySelector("feGaussianBlur");
const face = document.getElementById("cartoon-face");
const eye_1 = document.getElementById("eye-1");
const eye_2 = document.getElementById("eye-2");

const easeOut = (progress) => Math.pow(--progress, 5) + 1;

const getProgress = ({ elapsed, total }) => Math.min(elapsed / total, 1);

const easeInOut = (progress) =>
  (progress *= 2) < 1
    ? 0.5 * Math.pow(progress, 5)
    : 0.5 * ((progress -= 2) * Math.pow(progress, 4) + 2);

// It seems the vertical centre y will never change
const getX = (element) => Number(element.getAttribute("cx"));

// Lock the start value of X, haha closures
const startXValues = [getX(face), getX(eye_1), getX(eye_2)];
const finalXValues = [70, 66.5, 73.5];
const animatingOrder = [face, eye_1, eye_2];
let currentlyAnimatingHeadElementIndex = 0;

const deviation = 25;

const blur = (start) => {
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

const animateCartoonHead = () => {
  const index = currentlyAnimatingHeadElementIndex;
  const finalPosition = finalXValues[index];
  const targetElement = animatingOrder[index];
  const currentPosition = getX(targetElement);
  const distance = currentPosition - finalPosition;
  const startX = startXValues[index];

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
      currentlyAnimatingHeadElementIndex += 1;

      if (currentlyAnimatingHeadElementIndex < 3) {
        animateCartoonHead();
      } else {
        console.log("done");
      }
    }
  };

  if (currentlyAnimatingHeadElementIndex < 1) blur(time.start);

  requestAnimationFrame(animateFace);
};

const time = {
  start: performance.now(),
  total: 1500,
};

let currentlyAnimatingElementIndex = 0;

let line_1_coordinates = { x1: 70, y1: 80, x2: 70, y2: 105 };
let line_2_coordinates = { x1: 70, y1: 80, x2: 60, y2: 95 };
let line_3_coordinates = { x1: 70, y1: 105, x2: 60, y2: 120 };
let line_4_coordinates = { x1: 70, y1: 80, x2: 80, y2: 95 };
let line_5_coordinates = { x1: 70, y1: 105, x2: 80, y2: 120 };

const line_coordinates = [
  line_5_coordinates,
  line_3_coordinates,
  line_1_coordinates,
  line_2_coordinates,
  line_4_coordinates,
];

const line_elements = [line_5, line_3, line_1, line_2, line_4, line_5];

let setAnimationCoordinates = (
  targetElement,
  targetElementCoordinates,
  easingFunc,
) => {
  let { x1, y1, x2, y2 } = targetElementCoordinates;

  const x_distance = x2 - x1;
  const x_point = x1 + easingFunc * x_distance;
  const y_distance = y2 - y1;
  const y_point = y1 + easingFunc * y_distance;

  targetElement.setAttribute("x1", `${x1}`);
  targetElement.setAttribute("y1", `${y1}`);
  targetElement.setAttribute("x2", `${x_point}`);
  targetElement.setAttribute("y2", `${y_point}`);
};

const getEasingFunc = (time, now) => {
  if (!time.start) time.start = now;
  time.elapsed = now - time.start;
  const progress = getProgress(time);
  const easing = easeInOut(progress);

  return { easing, progress };
};

const showLineAnimations = (now) => {
  let { easing, progress } = getEasingFunc(time, now);

  let index = currentlyAnimatingElementIndex;

  const line = line_elements[index];
  const coordinates = line_coordinates[index];

  setAnimationCoordinates(line, coordinates, easing);

  if (progress < 1) {
    requestAnimationFrame(showLineAnimations);
  } else {
    time.start = null;
    currentlyAnimatingElementIndex += 1;

    currentlyAnimatingElementIndex < 5
      ? requestAnimationFrame(showLineAnimations)
      : animateCartoonHead();
  }
};

requestAnimationFrame(showLineAnimations);
