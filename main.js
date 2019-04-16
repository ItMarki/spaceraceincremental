
var game = {
  money:0,
  fuel:150,
  fuelCost:3
};
function rockLaunch1() {
  game.money += game.fuel*10
  game.fuel = 0;
  document.getElementById("money").innerHTML = game.money;
  document.getElementById("fuel").innerHTML = game.fuel;
};
function buyFuel(fuelBought) {
  if (game.money >=game.fuelCost*fuelBought) {
  game.money -= game.fuelCost*fuelBought
  game.fuel += fuelBought
  game.fuelCost += 0.001 * fuelBought;
  }
  document.getElementById("money").innerHTML = game.money;
  document.getElementById("fuel").innerHTML = game.fuel;
};
function errorFix() {
  game.money = round(game.money);
  game.fuel = round(game.fuel);
  document.getElementById("money").innerHTML = game.money;
  document.getElementById("fuel").innerHTML = game.fuel;
};
document.getElementById("money").innerHTML = game.money;
document.getElementById("fuel").innerHTML = game.fuel;
window.setInterval(function() {
  errorFix();
  
  
}, 1000);
