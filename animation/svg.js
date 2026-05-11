const playBtn = document.getElementById("pause-play");
const element = document.querySelector("polygon");

// progress function, will mostly return a float
const getProgress = ({ elapsed, total }) => Math.min(elapsed / total, 1);

// easeInOut for proper acceleration and deceleration
const easeInOut = (progress) =>
  (progress *= 2) < 1
    ? 0.5 * Math.pow(progress, 5)
    : 0.5 * ((progress -= 2) * Math.pow(progress, 4) + 2);

// points
const shapes = {
  play: [8, 6, 22, 15, 22, 15, 8, 24],
  stop: [8, 8, 22, 8, 22, 22, 8, 22],
};

// where we should move - from which shape to which
let isStopped = true;

const buildShapeTransition = (stoppedStatus) => {
  const { play, stop } = shapes;
  return stoppedStatus
    ? { startShape: stop, endShape: play }
    : { startShape: play, endShape: stop };
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
  const { play, stop } = shapes;
  let { startShape, endShape } = buildShapeTransition(isStopped);

  const points = startShape.map((start, index) => {
    const end = endShape[index];
    const distance = end - start;
    const point = start + easing * distance;
    return point;
  });

  element.setAttribute("points", points.join(" "));
  if (progress < 1) requestAnimationFrame(playOrStop);
  if (progress >= 1) {
    isStopped = !isStopped;
    time.start = null;
  }
};

playBtn.addEventListener("click", (e) => {
  requestAnimationFrame(playOrStop);
});
