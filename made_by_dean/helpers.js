const getProgress = ({ elapsed, total }) => Math.min(elapsed / total, 1);
const getCX = (element) => Number(element.getAttribute("cx"));

export { getProgress, getCX };
