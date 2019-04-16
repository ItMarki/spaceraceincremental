
var game = {
  money:0,
  fuel:150,
  fuelCost:3
};
function rockLaunch1() {
  game.money += game.fuel*10
  game.fuel = 0;
  document.getElementById("money").innerHTML = floor(game.money);
  document.getElementById("fuel").innerHTML = floor(game.fuel);
};
function buyFuel(fuelBought) {
  if (game.money >=game.fuelCost*fuelBought && game.fuel < 150) {
  game.money -= game.fuelCost*fuelBought
  game.fuel += 100
  game.fuelCost += 0.1;
  }
  document.getElementById("money").innerHTML = floor(game.money);
  document.getElementById("fuel").innerHTML = floor(game.fuel);
};

document.getElementById("money").innerHTML = floor(game.money);
document.getElementById("fuel").innerHTML = floor(game.fuel);
