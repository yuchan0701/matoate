// JavaScript source code
document.getElementById("pt").style.display ="none";
var mato1 = document.getElementById("mato");
mato1.style.position = "absolute";

var point = 0;


//����������N���b�N����Ɓ@�����Ȃ�
function touch(){



var ranX = Math.round( Math.random()*1000 )
var ranY = Math.round( Math.random()*800 )

mato1.style.left = ranX + "px";
mato1.style.top = ranY + "px";

point ++;


}

//���Ԑ���
let count = 10;
  const countUp = () => {
    console.log(count--);
    document.getElementById("time").textContent = count;

    if (count == -1){
        document.getElementById("mato").style.display ="none";
        document.getElementById("time").style.display ="none";
        document.getElementById("pt").textContent = "result:"+point + " click";
        document.getElementById("pt").style.display ="block";

    }

  }
  setInterval(countUp, 1000);


