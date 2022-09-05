import './App.css';
import { useState } from 'react';


function App() {

  function left(){
    newBoard(1)
  }
  function right(){
    newBoard(2)
  }
  function down(){
    newBoard(3)
  }
  function up(){
    newBoard(4)
  }
  function update(){
    updateBoard(true)
  }
  function newBoard(direction){
    var bool = false
    var b = [...board]
    if(direction === 1){
      for(var i = 0; i < 4; i++){
        var j = 1;
        var here = 0;
        while(j < 4){
          if(b[i][j] !== 0){
            if(b[i][here] === 0){
              b[i][here] = b[i][j];
              b[i][j] = 0;
              here--;
              bool = true
            }
            else if(b[i][here] === b[i][j]){
              b[i][here] = b[i][j] * 2;
              b[i][j] = 0;
              bool = true
            }
            else if(here+1 !== j){
              b[i][here+1] = b[i][j];
              b[i][j] = 0;
              bool = true
            }
            here++;
          }
          j++;
        }
      }
    }
    else if(direction === 2){
      for(i = 0; i < 4; i++){
        j = 2;
        here = 3;
        while(j >= 0){
          if(b[i][j] !== 0){
            if(b[i][here] === 0){
              b[i][here] = b[i][j];
              b[i][j] = 0;
              here++;
              bool = true
            }
            else if(b[i][here] === b[i][j]){
              b[i][here] = b[i][j] * 2;
              b[i][j] = 0;
              bool = true
            }
            else if(here-1 !== j){
              b[i][here-1] = b[i][j];
              b[i][j] = 0;
              bool = true
            }
            here--;
          }
          j--;
        }
      }
    }
    else if(direction === 3){
      for(i = 0; i < 4; i++){
        j = 2;
        here = 3;
        while(j >= 0){
          if(b[j][i] !== 0){
            if(b[here][i] === 0){
              b[here][i] = b[j][i];
              b[j][i] = 0;
              here++;
              bool = true
            }
            else if(b[here][i] === b[j][i]){
              b[here][i] = b[j][i] * 2;
              b[j][i] = 0;
              bool = true
            }
            else if(here-1 !== j){
              b[here-1][i] = b[j][i];
              b[j][i] = 0;
              bool = true
            }
            here--;
          }
          j--;
        }
      }
    }
    else if(direction === 4 ){
      for(i = 0; i < 4; i++){
        j = 1;
        here = 0;
        while(j < 4){
          if(b[j][i] !== 0){
            if(b[here][i] === 0){
              b[here][i] = b[j][i];
              b[j][i] = 0;
              here--;
              bool = true
            }
            else if(b[here][i] === b[j][i]){
              b[here][i] = b[j][i] * 2;
              b[j][i] = 0;
              bool = true
            }
            else if(here+1 !== j){
              b[here+1][i] = b[j][i];
              b[j][i] = 0;
              bool = true
            }
            here++;
          }
          j++;
        }
      }
    }
    setboard(b)
      //setboard([[3,4,5,6],[5,6,7,8],[7,8,9,0],[2,3,4,5]])
    updateBoard(bool) 
    
  }
  function updateBoard(bool){
    var b = [...board]
    if(bool){
      var count = 0;
      for(let i = 0; i < 4; i++){
          for(let j = 0; j < 4; j++){
              if(b[i][j] === 0){
                  count++;
              }
          }
      }
      var percentage = 1 - 1.0/count
      var times = 1
      for(let i = 0; i < 4; i++){
          for(let j = 0; j < 4; j++){
              if(b[i][j] === 0 && (Math.random()) > percentage && times === 1){
                  times--
                  if(Math.floor(Math.random() * 5) > 1)
                      b[i][j] = 2
                  else
                      b[i][j] = 4
              }
              else if(b[i][j] === 0)
                  percentage -= 1.0/count
          }
      }
    }
    
    //console.log("updateBoard")
    setboard(b)
    //setboard([[3,4,5,6],[3,2,1,3],[4,5,6,7],[0,9,8,7]])
    console.log(board)
  }
  function resetBoard(){
    setboard([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]])
  }

  
  const[board, setboard] = useState([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]])

  return (
  <>
  <div class="grid-container">
    <div class="grid-item1">{board[0][0]}</div>
    <div class="grid-item2">{board[0][1]}</div>
    <div class="grid-item3">{board[0][2]}</div>
    <div class="grid-item4">{board[0][3]}</div>
    <div class="grid-item5">{board[1][0]}</div>
    <div class="grid-item6">{board[1][1]}</div>
    <div class="grid-item7">{board[1][2]}</div>
    <div class="grid-item8">{board[1][3]}</div>
    <div class="grid-item9">{board[2][0]}</div>
    <div class="grid-item10">{board[2][1]}</div>
    <div class="grid-item11">{board[2][2]}</div>
    <div class="grid-item12">{board[2][3]}</div>
    <div class="grid-item13">{board[3][0]}</div>
    <div class="grid-item14">{board[3][1]}</div>
    <div class="grid-item15">{board[3][2]}</div>
    <div class="grid-item16">{board[3][3]}</div></div>
    <button onClick = {update} > Play</button>
    <button onClick = {left} > Left</button>
    <button onClick = {right} > Right</button>
    <button onClick = {down} > Down</button>
    <button onClick = {up} > Up</button>
    <button onClick = {resetBoard} > Reset</button>
  </>
  );
}

export default App;
