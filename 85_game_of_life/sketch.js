function make2DArray(cols, rows) {

  //	Build grid structure w/ even columns and rows
  let arr = new Array(cols);

  for (let i = 0; i < arr.length; i++) {
  	arr[i] = new Array(rows);
  }
  return arr;
}

//	Variables of grid
let grid;

function setup() {

	//	Define Grid 2D Array
	grid = make2DArray(10, 10);

	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			//	Fill it w/ 0s and 1s
			grid[i][j] = floor(random(2));
		}
	}
}