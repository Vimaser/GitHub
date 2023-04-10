//Floyd Feske III FRI 04/07/23 SUDOKU 
let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],
              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],
              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]]; 

              const array1to9 =  [1,2,3,4,5,6,7,8,9];

              let subGrid = [9, 3, 4, 5, 1, 7, 6, 8, 1];


getRow(puzzle, 8);
// -> [ 3,2,8,1,9,6,5,4,7 ]
function getRow (grid, rowIndex) {
    let row = grid[rowIndex];
    console.log("A row.", row);
    return row;
  }
       

getRow(puzzle, 0);
// -> [ 8,9,5,7,4,2,1,3,6 ]

/* function getRow (grid, rowIndex) {
    let row = grid[rowIndex];
    console.log("A Row", row);
    return row;    
} */
//The code returns both answers, I doubled them.

getColumn(puzzle, 0);
// -> [ 8,2,4,9,5,6,1,7,3 ]
function getColumn(grid, colIndex) {
    let column = [];
    for (let i = 0; i < grid.length; i++){
        column.push(grid[i][colIndex]);
    }
    console.log("A Column", column);
    return column;
}
getColumn(puzzle, 8);
// -> [ 6,5,2,8,4,1,3,9,7 ]
/* function getColumn(grid, colIndex) {
    let column = [];
    for (let i = 0; i < grid.length; i++){
        //column.push(grid[i][colIndex]);
    }
    console.log("A Column", column);
    return column;
} */

getGrid(puzzle, 0, 0);
// -> [ 8,9,5,2,7,1,4,6,3 ]
function getGrid(grid, x, y){
    x*=3;
    y*=3;
        let subGrid = [];
        for (let i = x; i < x + 3; i++) {
            for (let j = y; j < y + 3; j++) {
                subGrid.push(grid[i][j]);
        }
    }
    console.log("subgrid", subGrid);
    return subGrid;                
}
// This grabs the values from column 0 and row 1 (second from the top left)
getGrid(puzzle, 0,1);
// -> [ 7,4,2,9,6,3,5,8,1 ]
function getGrid(grid, x, y){
    x*=3;
    y*=3;
        let subGrid = [];
        for (let i = x; i < x + 3; i++) {
            for (let j = y; j < y + 3; j++) {
                subGrid.push(grid[i][j]);
        }
    }
    console.log("subgrid", subGrid);
    return subGrid;                
}

includes1to9([1,2,3,4,5,6,7,8,9]) // => true
includes1to9([1,1,2,3,4,5,6,7,8]) // => false (no 9)

function includes1to9 (val){
    if (val >= 1 || val <= 9){
        return val;
    }
}
let subGridChecker = subGrid.filter(includes1to9);

function includes1to9 (arr){
    if (arr.length === 9){
        console.log("valid subgrid", arr);
                return true;
    } else {
        console.log("invalid subgrid", arr);
            return false;
    }}
    
    getRow(puzzle,4);
    getColumn(puzzle,4);
    getGrid(puzzle, 1, 0);
    includes1to9(subGridChecker);


 let p0zzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

sudokuIsValid(p0zzle);
// => true
function sudokuIsValid(p0zzle) {
}
const isValid = sudokuIsValid(p0zzle);
console.log(isValid);

let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 8,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

sudokuIsValid(p8zzle);
// => false */
function sudokuIsValid(p8zzle) {
}
const isValid = sudokuIsValid(p8zzle);
console.log(isValid);

function getRow(p0zzle, row){
    return p0zzle[row]
}

function getColummn(p0zzle, col){
let colArr = [];

for (let i = 0; i < p0zzle.length; i++) {
    colArr.push(p0zzle[i][col]);
}
return colArr;
}

function getSection(p0zzle, x, y) {
x*=3;
y*=3;

let section = [];
for (let i = x; i < x + 3; i++){
    for (let j = y; j < y + 3; j++){
        section.push(p0zzle[i][j])
    }
    return section;
}}

function includes1to9(arr) {
for (let i = 1; i<= arr.length; i++){
    if (arr.indexOf(i) === -1){
        return false;
    }
}
return true;
}

function sudokuIsValid(p0zzle) {
let checks = [];

for (let i = 0; i < 9; i++){
    checks.push(getRow(p0zzle, i));
    checks.push(getColumn(p0zzle, i));
}

for (let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        checks.push(getSection(p0zzle, i, j));
    }
}
for(let i = 0; i < checks.length; i++){
    if(!includes1to9(checks[i])) { return false; }
}
return true;
}



/* let p0zzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];
 
let puzzleCopy = [[ 8,9,5,7,4,2,1,3,6 ],
                  [ 2,7,1,9,6,3,4,8,5 ],
                  [ 4,6,3,5,8,1,7,9,2 ],
                  [ 9,3,4,6,1,7,2,5,8 ],
                  [ 5,1,7,2,3,8,9,6,4 ],
                  [ 6,8,2,4,5,9,3,7,1 ],
                  [ 1,5,9,8,7,4,6,2,3 ],
                  [ 7,4,6,3,2,5,8,1,9 ],
                  [ 3,2,8,1,9,6,5,4,7 ]];

let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 8,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

isSame(p0zzle, p8zzle);
// => false

isSame(p0zzle, puzzleCopy);
// => true */
