// * You cannnot use this import statements unless you declared
// * type="module" in your script

import { create, createReportList } from "canvas";
import { name, draw, reportArea, reportPerimeter } from "./module/square.js";
import person from "./module/default.js";

console.log(person.body.ears);

let myCanvas = create("myCanvas", document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
// reportArea(square1.length, reportList);
// reportPerimeter(square1.length, reportList);

// Use the default
let square2 = randomSquare(myCanvas.ctx);
