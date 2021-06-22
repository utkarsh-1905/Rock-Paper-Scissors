//workflow of rps

function rps(userChoice) {

     var userInput = userChoice.id;
     console.log(userInput);

     var botInput = randChoice();
     console.log(botInput);

     var chooseWinner = res(userInput,botInput);
     console.log(chooseWinner);

     var showResMes = rpsResMes(chooseWinner.userRes);
     console.log(showResMes);

     frontEndGraphics(showResMes.message,userInput,botInput,showResMes.color,chooseWinner.userRes,chooseWinner.botRes);
}


//to generate a bot choice
function randChoice() {
     return ['rock','paper','scissors'][ Math.floor(Math.random()*3)];
}

//to choose the winner
function res(a,b) {
     var resDatabase = {
          'rock' :  {'scissors': 1, 'rock' : 0.5 , 'paper' : 0 },

          'paper' : {'scissors' : 0 , 'paper' : 0.5 , 'rock' : 1},

          'scissors' : {'paper' : 1 , 'rock' : 0 , 'scissors' : 0.5 }, 
          
     };

     var userRes = resDatabase[a][b];
     var botRes = resDatabase[b][a];

     return {userRes,botRes};
}

//to find result message
function rpsResMes(us) {
    
     if (us==1)
     return {'message' : 'YOU WIN' , 'color' : 'green' }
     else if (us==0.5)
     return {'message' : 'YOU TIED' , 'color' : 'yellow' }
     else
     return {'message' : 'YOU LOST' , 'color' : 'red'}

}

//to display result on screen
function frontEndGraphics(mesg,ui,bi,clr,u,b) {
    
    
     document.getElementById('rock').remove();
     document.getElementById('paper').remove();
     document.getElementById('scissors').remove();
     document.getElementById('choi').remove();
     
    
     var Humandiv = document.createElement('div');
     var Msgdiv = document.createElement('div');
     var Botdiv = document.createElement('div');
   
   
     var imgDB = {
          'rock' : 'Images/rock.png',
          'paper' : 'Images/paper.jpg',
          'scissors' : 'Images/scissor.png',
     };
    
    
     Humandiv.innerHTML = "<img src = '" + imgDB[ui] + "' width=200  height =200 style = 'box-shadow:4px 4px 25px "+clrpickr(u)+ " 'margin:5px' ; >";
     Msgdiv.innerHTML = "<h2 style='color:"+clr+"' 'text-shadow:5px 5px 15px "+clr+"';>"+mesg+"</h2>";
     Botdiv.innerHTML = "<img src = '"+imgDB[bi]+"' width=200 height=200 style = 'box-shadow:4px 4px 25px "+clrpickr(b)+ " 'margin:5px' ; >";
   
   
     document.getElementById('flexbox-img').appendChild(Humandiv);
     document.getElementById('flexbox-img').appendChild(Msgdiv);
     document.getElementById('flexbox-img').appendChild(Botdiv);
}

function clrpickr(cpkr){
     if(cpkr===1)
     return 'green';
     else if(cpkr===0.5)
     return 'yellow';
     else
     return 'red';
}