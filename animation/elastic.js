const element = document.querySelector(".elastic");

const easeOutElastic = (progress) =>
  Math.pow(2, -10 * progress) * Math.sin((progress - 0.1) * 5 * Math.PI) + 1;

const time = {
  start: performance.now(),
  total: 10000,
};

const tick = (now) => {
  time.elapsed = now - time.start;
  const progress = time.elapsed / time.total;
  const value = easeOutElastic(progress);
  element.style.transform = `scale(${value}) rotate(${value}turn)`;
  if (progress < 1) requestAnimationFrame(tick);
};

requestAnimationFrame(tick);
