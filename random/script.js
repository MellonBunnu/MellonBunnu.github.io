var autoclickers = 0;
var clickamount = 0;
function buttonpress() {
  document.getElementById("button").innerHTML ="you clicked me!";
}

function reset() {
  document.getElementById("button").innerHTML ="wowie did u know i am a thing";
}

function clicker(){
  clickamount = clickamount + autoclickers;
  document.getElementById("clicker").innerHTML = clickamount;
}

function autoclicker(){
  if (autoclickers == 0) {
    var intervalID = setInterval(clicker, 1000, 'Parameter 1', 'Parameter 2');
  }
else {
  autoclickers++;
}
}

function buyac() 
{
if(clickamount > 49) {
  autoclicker();
  }
else 
{
 document.getElementById("acbuy").innerHTML="not enough clicks"; 
 setTimeout(function(){
    document.getElementById("acbuy").innerHTML ="autoclicker";
}, 2000);
}
}

function click() {
  clickamount++;
  document.getElementById("clicker").innerHTML = clickamount;
}