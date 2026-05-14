const getProgress = ({ elapsed, total }) => Math.min(elapsed / total, 1);

export { getProgress };
