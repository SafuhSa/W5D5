const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
class Game {
    constructor(){
      this.towers = [[3,2,1],[],[]];
    }
  
    promptMove(cb){
      console.log("vhkvk");
      this.towers.forEach(tower => console.log(tower));
      reader.question("where you want to move Ex:(2,1) ",(res) => {
        let answer = res.split(",");
        let startTowerIdx = parseInt(answer[0]);
        let endTowerIdx = parseInt(answer[1]);
        cb(startTowerIdx,endTowerIdx);
      });
      
    }
    isvalidMove(start,to){
      let start_array = this.towers[start];
      if (start_array.length > 0){
      let start_value = start_array[start_array.length-1];
      let to_array = this.towers[to];
      let to_value = to_array[to_array.length-1];
    
      return start_value > to_value;
      }
    } 
    move(startTowerIdx, endTowerIdx){
      if (this.isvalidMove(startTowerIdx,endTowerIdx)){
        this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop);
      }
    }
    
    isWon(){
      return this.towers[0].length === 0 && (this.towers[1].length === 3 || this.towers[2].length === 3);
    }
  
    run() {

      // until a two towers are empty
        // get move from  player
        //check for valid move
        // make move on Towers
          
          this.promptMove(move.bind(this));
    }
  }
  
  const game = new Game();
  game.run();