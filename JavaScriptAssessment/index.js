const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const rowNum = 10, colNum = 10;

class Field 
{
    constructor() {
        this._field = Array(rowNum).fill().map(() => Array(colNum));
        this._locationX = 0;
        this._locationY = 0;
    }

generateField(percentage) {
    for (let y = 0; y < rowNum; y++) {
        for (let x = 0; x < colNum; x++) {
            const prob = Math.random();
            this._field[y][x] = prob > percentage ? fieldCharacter : hole;
        }
    }
 
  
// Set the "hat" location
// make sure the "hat" is not at the starting point

/*
let hat = '^';
    console.log(hat [1][1]);
    */

//let hat = new hat(rowNum=1, colNum=1);

/*let hat = '^';
for (let_locationX = 0; locationY = 2;)
{stars += "*";}*/

 /*const hat = [
 [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
 ];*/
//let hat = [1][1];
//let hat = [ {x:1,y:1}];

/*
let hat = '^';
for (let x = 1; 1<Field;)
{ for (let y = 0; y <= x; y++)
    { hat += '^';}

console.log(hat);
hat = '^';
*/

//Set the "Character" position before the game starts

}



runGame() {
    let playing = true;
    console.log("Start Game");
    //print the field
 
    playing = ({pathCharacter}) => {
        if (pathCharacter === 11) {
            
        }else if (pathCharacter === 13) {
          //  if (this.generateField[this.])
        }
    }


//this.pathCharacter.x ++;
//this.render();
   


    this.print();
    this.askQuestion();
}

print() {
    const displayString = this._field.map(row => {
        return row.join('');
    }).join('\n');

    console.log(displayString);
}

askQuestion() {

    const direction = prompt('Which way?').toUpperCase();
    switch (direction) {
        case 0:
            text = "game over";
            break;
        case 1:
            text = "game win";
            break;
        default:
            text = "";
    }

        
    //    document.addEventListener('*', this.pathCharacter);}

            //implement your codes here
        //check if direction is U, D, L, R
        //check for boundaries
        //check if character falls into a hole - game over
        //check if character gets the hat - game win
    }
}





//Create an instance of Field Class Object
const myfield = new Field();
myfield.generateField(0.3);
myfield.runGame();

