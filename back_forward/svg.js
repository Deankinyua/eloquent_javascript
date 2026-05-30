import { animateControlButton } from "./back_forward_animation.js";

const backIcon = document.getElementById("back-icon");
const backTargetPolygon = document.getElementById("back-polygon-2");
const nextIcon = document.getElementById("next-icon");
const nextTargetPolygon = document.getElementById("next-polygon-2");

backIcon.addEventListener("click", () => {
  animateControlButton("back", true, backTargetPolygon);
});

nextIcon.addEventListener("click", () => {
  animateControlButton("next", true, nextTargetPolygon);
});
