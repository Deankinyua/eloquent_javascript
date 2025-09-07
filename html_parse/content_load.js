let img = document.getElementById("img");

const myElement = document.getElementById("demo");
myElement.style.color = "red";

function ready() {
  alert("DOM is ready");

  // image is not yet loaded (unless was cached), so the size is 0x0
  alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
}

document.addEventListener("DOMContentLoaded", ready);
