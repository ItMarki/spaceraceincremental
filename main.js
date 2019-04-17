
var game = {
  money:0,
  fuel:150,
  fuelCost:3,
  fuelMax:150
};
function rockLaunch1() {
  game.money += game.fuel*10
  game.fuel = 0;
  document.getElementById("money").innerHTML = game.money;
  document.getElementById("fuel").innerHTML = game.fuel;
};
function buyFuel() {
  if (game.money >=game.fuelCost*game.fuelMax) {
    if (game.fuel === 0) {
  game.money -= game.fuelCost*game.fuelMax;
  game.fuel += game.fuelMax;
  game.fuelCost += 0.0002*game.fuelMax;
    }
  }
  document.getElementById("money").innerHTML = game.money;
  document.getElementById("fuel").innerHTML = game.fuel;
  document.getElementById("fuelCost").innerHTML = game.fuelCost;
};
function bugFix() {
  game.fuelCost = Math.floor(game.fuelCost*100)/100;
  document.getElementById("fuelCost").innerHTML = game.fuelCost;
}
window.setInterval(function(){
	bugFix();
}, 100);
document.getElementById("money").innerHTML = game.money;
document.getElementById("fuel").innerHTML = game.fuel;
document.getElementById("fuelCost").innerHTML = game.fuelCost;
