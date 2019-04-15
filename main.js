var rocketLaunch1 = document.getElementById("rockLaunch1");
var game = {
  money:0,
  fuel:100
  
};
function rockLaunch1() {
  game.money = game.money + (game.fuel*10);
  game.fuel = 0;
  document.getElementById("money").innerHTML = game.money;
}


