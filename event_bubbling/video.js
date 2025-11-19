// The content inside the opening and closing <video></video>
// tags is shown as a fallback in browsers that don't support the element.

const btn = document.querySelector("#display-video-btn");
const box = document.querySelector("#video-container");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));

video.addEventListener("click", (event) => {
  // This will stop the event from bubbling upwards to the div element
  event.stopPropagation();
  video.play();
});

// when clicked hide the box and its inner video element
box.addEventListener("click", () => box.classList.add("hidden"));
