import animateCartoonHead from "./head_animation.js";
import { getProgress, getCX } from "./helpers.js";

const line_1 = document.querySelector(".line-1");
const line_2 = document.querySelector(".line-2");
const line_3 = document.querySelector(".line-3");
const line_4 = document.querySelector(".line-4");
const line_5 = document.querySelector(".line-5");
const gaussian = document.querySelector("feGaussianBlur");
const face = document.getElementById("cartoon-face");
const eye_1 = document.getElementById("eye-1");
const eye_2 = document.getElementById("eye-2");

const easeInOut = (progress) =>
  (progress *= 2) < 1
    ? 0.5 * Math.pow(progress, 5)
    : 0.5 * ((progress -= 2) * Math.pow(progress, 4) + 2);

// Concerned with the head ----------------------
const startCXValues = [getCX(face), getCX(eye_1), getCX(eye_2)];
const finalCXValues = [70, 66.5, 73.5];
const headElementsAnimatingOrder = [face, eye_1, eye_2];
let initialHeadElementIndex = 0;
// -------------------------------------------

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
      : animateCartoonHead(
          initialHeadElementIndex,
          finalCXValues,
          headElementsAnimatingOrder,
          startCXValues,
          gaussian,
        );
  }
};

// we should have a function animateCartoonBody
requestAnimationFrame(showLineAnimations);
