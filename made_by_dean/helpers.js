const getProgress = ({ elapsed, total }) => Math.min(elapsed / total, 1);
const getCX = (element) => Number(element.getAttribute("cx"));
const getCY = (element) => Number(element.getAttribute("cy"));
const getLineY1 = (element) => Number(element.getAttribute("y1"));

const easeInOut = (progress) =>
  (progress *= 2) < 1
    ? 0.5 * Math.pow(progress, 5)
    : 0.5 * ((progress -= 2) * Math.pow(progress, 4) + 2);

const easeOut = (progress) => Math.pow(--progress, 5) + 1;

const getNewCyPoint = (goingUp, circle, circlePositions, easingFunc) => {
  let { finalCy, startCy } = circlePositions;
  let currentCy = getCY(circle);

  const distanceCy = goingUp ? currentCy - finalCy : finalCy - currentCy;
  const easing = easingFunc * distanceCy;
  const newCyPoint = goingUp ? startCy - easing : currentCy + easing;

  return newCyPoint;
};

const changeFaceSizeAndPosition = (
  goingUp,
  face,
  faceSize,
  facePositions,
  eyes,
  eyePositions,
  upperBodyParts,
  easingFunc,
) => {
  let { small, big } = faceSize;

  let newCyPoint = getNewCyPoint(goingUp, face, facePositions, easingFunc);
  let newCyEyePoint = getNewCyPoint(goingUp, eyes[0], eyePositions, easingFunc);

  let difference = (big - small) * easingFunc;
  let newRadius = goingUp ? small + difference : big - difference;

  let neckPosition = newCyPoint + newRadius;

  face.setAttribute("r", `${newRadius}`);
  face.setAttribute("cy", `${newCyPoint}`);

  upperBodyParts.forEach((part) => {
    part.setAttribute("y1", `${neckPosition}`);
  });

  eyes.forEach((eye) => {
    eye.setAttribute("cy", `${newCyEyePoint}`);
  });
};

export {
  easeOut,
  easeInOut,
  getProgress,
  getCX,
  getCY,
  getLineY1,
  changeFaceSizeAndPosition,
};
