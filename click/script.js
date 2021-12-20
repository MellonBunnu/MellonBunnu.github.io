let count = 0;
let cps = 0;
let clicks = 1;
let scale = 0;
let firstLevelAMOUNT = 0;



document.getElementById("cookies").innerHTML = count+" Cookies";

function Clicked() {
  count+=clicks;
  scale+=0.1; // scale+=0.01;
  let word = " Cookies";
  document.getElementById("cookies").innerHTML = "";
  let cookieCount = document.getElementById("cookies").innerHTML = count+word;
};

function firstLevel() {
  if (count >= 100) {
    clicks+=1
    count-=100
    let word = " Cookies";
    let cookieCount = document.getElementById("cookies").innerHTML = count+word;
    firstLevelAMOUNT+=1
    document.getElementById("firstLevel").innerHTML = firstLevelAMOUNT+" bought!";
  }
  else {
    alert("You do not have enough cookies!")
  }
};