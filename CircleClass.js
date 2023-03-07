class Circle {
    constructor(x, y, row, column, id){
        this.color = 1;
        this.row = row;
        this.column = column;
        this.id = id;

        const button = document.createElement('button');
        button.id = "button" + id;
        button.style.width = "50px";
        button.style.height = "50px";
        button.style.background = "#0095DD";
        button.style.position = "relative";
        button.addEventListener("click", ()=> {clickSquare(this.row, this.column, true)})
        document.getElementById("div" + row).appendChild(button);
    }

    reset(){
        const button = document.getElementById("button" + this.id);
        button.style.background = "#0095DD";
        this.color = 1;
    }

    changeColor() {
        const button = document.getElementById("button" + this.id);
        if (this.color == 1){
            button.style.background = "#e8e337";
            this.color = -1;
        }else{
            button.style.background = "#0095DD";
            this.color = 1;
        }
        return this.color;
    }

    delete(){
        const button = document.getElementById("button" + this.id);
        button.remove();
        this.delete;
    }
}