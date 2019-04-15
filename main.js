
var game = {
  money:0,
  fuel:100,
  fuelCost:3
};
function rockLaunch1() {
  game.money += game.fuel*10
  game.fuel = 0;
  document.getElementById("money").innerHTML = game.money;
  document.getElementById("fuel").innerHTML = game.fuel;
};
function buyFuel() {
  game.money -= game.fuelCost*100
  game.fuel =100
  document.getElementById("money").innerHTML = game.money;
  document.getElementById("fuel").innerHTML = game.fuel;
};
document.getElementById("money").innerHTML = game.money;

