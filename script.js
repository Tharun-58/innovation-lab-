let rand= Math.floor(Math.random()*100+1);
console.log(rand);
let attempt=0;

function guessGame(){
let input=document.getElementById("num").value;
    if(rand==input){
        document.writeln("You won! \nYour Attempt: "+attempt);
        
    }
    else if(rand>input){
        document.getElementById("res").innerText="Too Low!";
        attempt++;
    }
    else if(rand<input){
        document.getElementById("res").innerText="Too High!";
        attempt++;
    }
}