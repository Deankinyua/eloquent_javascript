import { getProgress, getCY, getLineY1 } from "./helpers.js";

const easeInOut = (progress) =>
  (progress *= 2) < 1
    ? 0.5 * Math.pow(progress, 5)
    : 0.5 * ((progress -= 2) * Math.pow(progress, 4) + 2);

let setLineCoordinates = (
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

const getNewCyPoint = (goingUp, face, facePositions, easingFunc) => {
  let { finalCy, startCy } = facePositions;
  let currentCy = getCY(face);

  const distanceCy = goingUp ? currentCy - finalCy : finalCy - currentCy;
  const easing = easingFunc * distanceCy;
  const newCyPoint = goingUp ? startCy - easing : currentCy + easing;

  return newCyPoint;
};

const setNewRadius = (
  goingUp,
  face,
  faceSizes,
  facePositions,
  upperBodyParts,
  easingFunc,
) => {
  let { small, big } = faceSizes;

  let newCyPoint = getNewCyPoint(goingUp, face, facePositions, easingFunc);

  // let finalNeckPosition = goingUp ? 75 : 80;
  // let currentNeckPosition = getLineY1(neck);
  // let differenceCY = (finalCY - currentCY) * easingFunc;
  // let differenceNeck = (finalNeckPosition - currentNeckPosition) * easingFunc;

  let difference = (big - small) * easingFunc;

  let newRadius = goingUp ? small + difference : big - difference;

  // let newCyPoint =
  //   goingUp
  //     ? currentCY - difference
  //     : currentCY + difference;

  let neckPosition = newCyPoint + newRadius;

  face.setAttribute("r", `${newRadius}`);
  face.setAttribute("cy", `${newCyPoint}`);

  upperBodyParts.forEach((part) => {
    part.setAttribute("y1", `${neckPosition}`);
  });
};

const scaleFace = (
  animationDirection,
  faceAnimation,
  eye1Animation,
  eye2Animation,
  upperBodyParts,
) => {
  const {
    face,
    faceCyValues: { smallCy, bigCy },
    faceSize,
  } = faceAnimation;

  let goingUp = animationDirection === "up";

  const facePositions = goingUp
    ? { finalCy: bigCy, startCy: smallCy }
    : { finalCy: smallCy, startCy: bigCy };

  const time = {
    start: performance.now(),
    total: 1000,
  };

  const animate = (now) => {
    time.elapsed = now - time.start;
    const progress = getProgress(time);
    const easing = easeInOut(progress);

    setNewRadius(
      goingUp,
      face,
      faceSize,
      facePositions,
      upperBodyParts,
      easing,
    );

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      goingUp
        ? setTimeout(() => {
            scaleFace(
              "down",
              faceAnimation,
              eye1Animation,
              eye2Animation,
              upperBodyParts,
            );
          }, 1000)
        : console.log("nothing");
    }
  };

  requestAnimationFrame(animate);
};

export { easeInOut, setLineCoordinates, scaleFace };
