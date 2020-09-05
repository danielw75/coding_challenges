function make2DArray(cols, rows) {

  //	Build grid structure w/ even columns and rows
  let arr = new Array(cols);

  for (let i = 0; i < arr.length; i++) {
  	arr[i] = new Array(rows);
  }
  return arr;
}

let grid;
let cols;
let rows;
// Set resolution for cell size
let resolution = 40;

function setup() {
	createCanvas(800, 800);

	cols = width/resolution;
	rows = height/resolution;

	//	2D Array
	grid = make2DArray(cols, rows);

	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			
			grid[i][j] = floor(random(2));
		}
	}
}

function draw() {
	background(0);

	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			
			let x = i * resolution;
			let y = j * resolution;	

			if (grid[i][j] == 1) {
				fill(255);
				stroke(0);
				rect(x, y, resolution - 1, resolution - 1);
			}
		}
	}
}