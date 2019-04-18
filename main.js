
var game = {
  money:0,
  moneyPerFuel:10,
  fuel: {
  amount:150,
  cost:3,
  max:150,
  scaleDown:1
  },
  up1Cost:2500,
  up2Cost:4000,
  up3Cost:6000
};
function rockLaunch1() {
	
		window.setInterval(function() {
			if (game.fuel.amount > 0) {
		game.money += game.moneyPerFuel;
		game.fuel.amount -= 1;
		
  document.getElementById("money").innerHTML = game.money;
  document.getElementById("fuel").innerHTML = game.fuel.amount;
			}
		}, 40);
	
};


function buyFuel() {
  if (game.money >=game.fuel.cost*game.fuel.max) {
    if (game.fuel.amount === 0) {
  game.money -= game.fuel.cost*game.fuel.max;
  game.fuel.amount += game.fuel.max;
  game.fuel.cost += 0.0005*game.fuel.max*game.fuel.scaleDown;
    }
  }
	if (game.money < game.fuel.cost*game.fuel.max) {
		
		var halp = Math.floor(game.money/game.fuel.cost);
		game.fuel.amount += halp;
		game.money-=game.fuel.cost*halp;
		halp = 0;
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
document.getElementById("money").innerHTML = game.money;
document.getElementById("upgrade1Cost").innerHTML = game.up1Cost;
		document.getElementById("fuelMax").innerHTML = game.fuel.max;
	}
};
function upgrade2() {
	if (game.money >= game.up2Cost) {
	game.fuel.cost -= 1;
	game.fuel.scaleDown = 0.9*game.fuel.scaleDown;
	game.money -= game.up2Cost;
	game.up2Cost = game.up2Cost*1.7;
document.getElementById("money").innerHTML = game.money;
document.getElementById("upgrade2Cost").innerHTML = game.up2Cost;
		document.getElementById("fuelCost").innerHTML = game.fuel.cost
	}
};

function upgrade3() {
	if (game.money >= game.up3Cost) {
		game.moneyPerFuel = game.moneyPerFuel*1.25;
		game.money -= game.up3Cost
		game.up3Cost = game.up3Cost*2
		document.getElementById("money").innerHTML = game.money;
		document.getElementById("upgrade3Cost").innerHTML = game.up3Cost;
		document.getElementById("moneyPerFuel").innerHTML = game.moneyPerFuel;
	}
};
function bugFix() {
  game.fuel.cost = Math.round(game.fuel.cost*100)/100;
  game.money = Math.round(game.money*100)/100;
	game.fuel.amount = Math.round(game.fuel.amount);
  document.getElementById("fuelCost").innerHTML = game.fuel.cost;
	document.getElementById("money").innerHTML = game.money;
document.getElementById("fuel").innerHTML = game.fuel.amount;
};
window.setInterval(function(){
	bugFix();
}, 100);
document.getElementById("money").innerHTML = game.money;
document.getElementById("fuel").innerHTML = game.fuel.amount;
document.getElementById("fuelCost").innerHTML = game.fuel.cost;
document.getElementById("fuelMax").innerHTML = game.fuel.max;
document.getElementById("upgrade1Cost").innerHTML = game.up1Cost;
document.getElementById("upgrade2Cost").innerHTML = game.up2Cost;
document.getElementById("upgrade3Cost").innerHTML = game.up3Cost;
