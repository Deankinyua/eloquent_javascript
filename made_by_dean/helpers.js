const getProgress = ({ elapsed, total }) => Math.min(elapsed / total, 1);
const getCX = (element) => Number(element.getAttribute("cx"));
const getCY = (element) => Number(element.getAttribute("cy"));
const getLineY1 = (element) => Number(element.getAttribute("y1"));

export { getProgress, getCX, getCY, getLineY1 };
