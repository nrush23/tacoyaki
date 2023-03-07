class Stack {
    constructor() {
        this.items = new Array();
    }

    reverse(){
        this.items = this.items.reverse();
    }

    search(pair){
        if(!this.isEmpty()){
            for(var i = 0; i < this.items.length; i++){
                var temp = this.items[i];
                if(pair[0] == temp[0] && pair[1] == temp[1]){
                    this.items.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }
    
    add(element) {
        return this.items.push(element);
    }
    
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    peek() {
        return this.items[this.items.length - 1];
    }
    
    isEmpty(){
       return this.items.length == 0;
    }
   
    size(){
        return this.items.length;
    }
 
    clear(){
        this.items = [];
    }

    copy(){
        var copy = new Stack();
        for(i = 0; i < this.items.length; i++){
            copy.add(this.items[i]);
        }
        return copy;
    }

    toString(){
        var string ="";
        for(var i = 0; i < this.items.length; i++){
            string = string.concat("(" + this.items[i] + ")\n");
        }
        return string;
    }
}