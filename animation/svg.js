const playBtn = document.getElementById("pause-play");
const polygon_1 = document.getElementById("polygon-1");
const polygon_2 = document.getElementById("polygon-2");

// progress function, will mostly return a float
const getProgress = ({ elapsed, total }) => Math.min(elapsed / total, 1);

// easeInOut for proper acceleration and deceleration
const easeInOut = (progress) =>
  (progress *= 2) < 1
    ? 0.5 * Math.pow(progress, 5)
    : 0.5 * ((progress -= 2) * Math.pow(progress, 4) + 2);

// points
const polygon_1_shapes = {
  pause: [11, 10, 15, 10, 15, 26, 11, 26],
  play: [11, 10, 11, 18, 11, 18, 11, 26],
};

const polygon_2_shapes = {
  pause: [21, 10, 25, 10, 25, 26, 21, 26],
  play: [11, 10, 28, 18, 28, 18, 11, 26],
};

// where we should move - from which shape to which
let isPaused = true;

const buildShapeTransition = (stoppedStatus, shapes) => {
  return stoppedStatus
    ? {
        startShapePolygon_1: polygon_1_shapes.pause,
        endShapePolygon_1: polygon_1_shapes.play,
        startShapePolygon_2: polygon_2_shapes.pause,
        endShapePolygon_2: polygon_2_shapes.play,
      }
    : {
        startShapePolygon_1: polygon_1_shapes.play,
        endShapePolygon_1: polygon_1_shapes.pause,
        startShapePolygon_2: polygon_2_shapes.play,
        endShapePolygon_2: polygon_2_shapes.pause,
      };
};

const time = {
  start: null,
  total: 500,
};

const playOrStop = (now) => {
  if (!time.start) time.start = now;
  time.elapsed = now - time.start;

  const progress = getProgress(time);
  const easing = easeInOut(progress);

  let {
    startShapePolygon_1,
    endShapePolygon_1,
    startShapePolygon_2,
    endShapePolygon_2,
  } = buildShapeTransition(isPaused);

  const points_1 = startShapePolygon_1.map((start, index) => {
    const end = endShapePolygon_1[index];
    const distance = end - start;
    const point = start + easing * distance;
    return point;
  });

  const points_2 = startShapePolygon_2.map((start, index) => {
    const end = endShapePolygon_2[index];
    const distance = end - start;
    const point = start + easing * distance;
    return point;
  });

  polygon_1.setAttribute("points", points_1.join(" "));
  polygon_2.setAttribute("points", points_2.join(" "));

  if (progress < 1) requestAnimationFrame(playOrStop);
  if (progress >= 1) {
    isPaused = !isPaused;
    time.start = null;
  }
};

playBtn.addEventListener("click", (e) => {
  requestAnimationFrame(playOrStop);
});
