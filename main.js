
var game = {
  money:0,
  fuel: {
  amount:150,
  cost:3,
  max:150,
  },
  up1Cost:2500
};
function rockLaunch1() {
  game.money += game.fuel.amount*10
  game.fuel.amount = 0;
  document.getElementById("money").innerHTML = game.money;
  document.getElementById("fuel").innerHTML = game.fuel.amount;
};
function buyFuel() {
  if (game.money >=game.fuel.cost*game.fuel.max) {
    if (game.fuel.amount === 0) {
  game.money -= game.fuel.cost*game.fuel.max;
  game.fuel.amount += game.fuel.max;
  game.fuel.cost += 0.0005*game.fuel.max;
    }
  }
  document.getElementById("money").innerHTML = game.money;
  document.getElementById("fuel").innerHTML = game.fuel.amount;
  document.getElementById("fuelCost").innerHTML = game.fuel.cost;
};
function upgrade1() {
	if (game.money >= game.up1Cost) {
	game.fuel.max = Math.floor(game.fuel.max*1.1);
	game.money -= game.up1Cost;
	game.up1Cost = game.up1Cost*1.3;
document.getElementById("upgrade1Cost").innerHTML = game.up1Cost;
	}
};
function bugFix() {
  game.fuel.cost = Math.round(game.fuel.cost*100)/100;
  document.getElementById("fuelCost").innerHTML = game.fuel.cost;
};
window.setInterval(function(){
	bugFix();
}, 100);
document.getElementById("money").innerHTML = game.money;
document.getElementById("fuel").innerHTML = game.fuel.amount;
document.getElementById("fuelCost").innerHTML = game.fuel.cost;
document.getElementById("fuelMax").innerHTML = game.fuel.max;
document.getElementById("upgrade1Cost").innerHTML = game.up1Cost;
