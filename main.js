var count = 0;
var winNum = 0;
var inverseText = "";
var userText = "";

var grid = makeGrid(4,4);
var randomizedMoves = new Stack();
var userMoves = new Stack();
var game = false;

mode();

function checkWin(){ 
    console.log("count is " + count);
    if (count == -1*winNum || count == 0){
        window.requestAnimationFrame(()=>{
            window.requestAnimationFrame(()=>{alert("Congratulations, you won!"); deleteGrid(); grid = makeGrid(grid.length+1, grid[0].length+1); if(game){
                randomizeGrid();
            }})
        });
    }
}

function mode(){
    game = !game;
    const div = document.getElementById("buttons");
    const div2 = document.getElementById("inverseDiv");
    if(game){
        div.style.display = "none";
        div2.style.display = "none";
        randomizeGrid();
    }else{
        div.style.display = "block";
        div2.style.display = "block";
    }
}

function clickSquare(row, column, user){
    pair = new Array(row, column);

    count += grid[row][column].changeColor();
    tempText = "(" + row + ", " + column + ")";

    if(!randomizedMoves.search(pair)){
        randomizedMoves.add(pair);
    }
    if(user && !userMoves.search(pair)){
        userMoves.add(pair);
    }

    if(row != 0){
        count += grid[row-1][column].changeColor();
    }
    if(row != grid.length-1){
        count += grid[row+1][column].changeColor();
    }
    if(column != 0){
        count += grid[row][column-1].changeColor();
    }
    if(column != grid[row].length-1){
        count += grid[row][column+1].changeColor();
    }

    window.requestAnimationFrame(()=>{
        window.requestAnimationFrame(()=>{displayInverse();displayMoves();})
    });
    if(user){
        checkWin();
    }
}

function makeGrid(rows, columns){
    const gridArray = new Array(rows);
    const grid = document.getElementById("grid");
    grid.style.overflow = "hidden";
    winNum = rows * columns;
    console.log(winNum);
    for (let i = 0; i < rows; i++){
        const row = new Array(columns);
        const div = document.createElement("div");
        div.id = "div" + i;
        div.style.display = "flex";
        div.style.justifyContent = "center";
        grid.appendChild(div);
        for(let j = 0; j < columns; j++){
            const circle = new Circle(j*50, i*50, i,j, rows*i + j);
            row[j]=circle;
        }
        gridArray[i] = row;
    }
    return gridArray;
}

function resetGrid(newGrid){
    count = 0;
    randomizedMoves.clear();
    userMoves.clear();
    updateMoves("");
    updateInverse("");
    if (!newGrid){
        for (let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[0].length; j++){
                grid[i][j].reset();
            }
        }
    }
}

function displayInverse(){
    updateInverse(randomizedMoves.toString());
}

function updateInverse(string){
    inverseText = string;
    document.getElementById("inverse").innerHTML = inverseText;
}

function displayMoves(){
    updateMoves(userMoves.toString());
}

function updateMoves(string){
    userText = string;
    document.getElementById("moveList").innerHTML = userText;
}

function randomizeGrid(){
    resetGrid(false);
    for (i = 0; i < 2 * grid.length; i++){
        row = Math.floor(Math.random() * (grid.length));
        column = Math.floor(Math.random() * (grid[0].length));
        clickSquare(row, column, false);
    }
}

function deleteGrid(){
    resetGrid(true);
    for(i = 0; i < grid.length; i++){
        const div = document.getElementById("div"+i);
        div.remove();
    }
}

function setGrid(){
        var row = prompt("Please enter a row number:");
        if(row == null || row ==""){
            return;
        }else{
            var column = prompt("Please enter a column number:");
            if(column == null || column == ""){
                return;
            }else{
                deleteGrid();
                grid = makeGrid(row,column);
            }
        }
}