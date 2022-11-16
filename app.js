// JavaScript source code
document.getElementById("pt").style.display ="none";
var mato1 = document.getElementById("mato");
mato1.style.position = "absolute";
var point = 0;

//ここだよをクリックすると　こうなる
function touch(){

  var ranX = Math.round( Math.random()*(window.innerWidth-100) )
  var ranY = Math.round( Math.random()*(window.innerHeight-100) )

  mato1.style.left = ranX + "px";
  mato1.style.top = ranY+ "px";

  point ++;

}

//時間制限
let count = 10;
const countUp = () => {
  console.log(count--);
  console.log(window.innerHeight);
  document.getElementById("time").textContent = count;

  if (count == -1){
    document.getElementById("mato").style.display ="none";
    document.getElementById("time").style.display ="none";
    document.getElementById("pt").textContent = "result:"+point + " click";
    document.getElementById("pt").style.display ="block";

  }
}
  
setInterval(countUp, 1000);


