const getProgress = ({ elapsed, total }) => Math.min(elapsed / total, 1);

const easeOut = (progress) => Math.pow(--progress, 5) + 1;

// It seems the vertical centre y will never change
// cx is 100
const getX = () => Number(circle.getAttribute("cx"));

const [gaussian, circle] = document.querySelectorAll("feGaussianBlur, circle");
const startX = getX();
const deviation = 25;

const blur = (start) => {
  const time = {
    start,
    total: 800,
  };

  const tick = (now) => {
    time.elapsed = now - time.start;
    const progress = deviation - deviation * getProgress(time);
    gaussian.setAttribute("stdDeviation", `${progress}, 0`);
    if (progress) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

const move = () => {
  // the distance the circle should move
  const distance = window.innerWidth - 2 * startX;
  console.log(getX());
  const backwards = getX() > startX;

  const time = {
    start: performance.now(),
    total: 2000,
  };

  const tick = (now) => {
    time.elapsed = now - time.start;

    const progress = getProgress(time);
    const easing = easeOut(progress) * distance;
    const delta = backwards ? distance - easing : easing;
    const cx = startX + delta;

    circle.setAttribute("cx", cx);
    progress < 1 ? requestAnimationFrame(tick) : console.log("done");
  };

  blur(time.start);
  requestAnimationFrame(tick);
};

move();
