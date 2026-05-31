const shapesBackIcon = {
  start: [28, 10, 11, 18, 11, 18, 28, 26],
  end: [22, 10, 8, 15, 8, 21, 22, 26],
};

const shapesNextIcon = {
  start: [8, 10, 25, 18, 25, 18, 8, 26],
  end: [14, 10, 28, 15, 28, 21, 14, 26],
};

const getProgress = ({ elapsed, total }) => Math.min(elapsed / total, 1);

const easeInOut = (progress) =>
  (progress *= 2) < 1
    ? 0.5 * Math.pow(progress, 5)
    : 0.5 * ((progress -= 2) * Math.pow(progress, 4) + 2);

const returnPolygonShapes = (buttonType, isStarting) => {
  if (buttonType === "back") {
    return isStarting
      ? { startPolygon: shapesBackIcon.start, endPolygon: shapesBackIcon.end }
      : { startPolygon: shapesBackIcon.end, endPolygon: shapesBackIcon.start };
  }
  if (buttonType === "next") {
    return isStarting
      ? { startPolygon: shapesNextIcon.start, endPolygon: shapesNextIcon.end }
      : { startPolygon: shapesNextIcon.end, endPolygon: shapesNextIcon.start };
  }
};

const returnPolygonPoints = (startShape, endShape, easingFunc) => {
  return startShape.map((start, index) => {
    const end = endShape[index];
    const distance = end - start;
    const point = start + easingFunc * distance;
    return point;
  });
};

export { easeInOut, getProgress, returnPolygonPoints, returnPolygonShapes };
