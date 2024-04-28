
var joined=document.getElementById("joined");
var Visited=document.getElementById("visited");
var Inp=document.getElementById("Inprogress")
var Tp=document.getElementById("TP");

function join(){
    joined.style.display="flex";
    Visited.style.display="none";
    Inp.style.display="none";
    Tp.style.display="none";
    console.log("hello")
}
function visit(){
    joined.style.display="none";
    Inp.style.display="none";
    Tp.style.display="none";
    Visited.style.display="flex";
   console.log("................")
   
}
function INP(){
    joined.style.display="none";
    Visited.style.display="none";
    Tp.style.display="none";
    Inp.style.display="flex";
    
}
function tp(){
    joined.style.display="none";
    Visited.style.display="none";
    Inp.style.display="none";
    Tp.style.display="flex";
}