var rocketLaunch1 = document.getElementById("rockLaunch1");
var game = {
  money:0,
  fuel:100
  
};

document.getElementById("money").innerHTML = game.money;
var rocketLaunch1 = function() {
  game.fuel = game.fuel - 100;
  game.money = game.money + 1000;
rockLaunch1.textContent = "Test";
};


rocketLaunch1.addEventListener("click", rockLaunch1);
