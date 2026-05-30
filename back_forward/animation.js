const shapesBackIcon = {
  start: [26, 10, 14, 18, 14, 18, 26, 26],
  end: [22, 10, 11, 16, 11, 20, 22, 26],
};

const shapesNextIcon = {
  start: [11, 10, 23, 18, 23, 18, 11, 26],
  end: [15, 10, 26, 16, 26, 20, 15, 26],
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
