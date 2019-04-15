var rocketLaunch1 = document.getElementById("rockLaunch1");
var money = 0;
var fuel = 100

document.getElementById("money").innerHTML = money;
var rocketLaunch1 = function() {
  fuel = fuel - 100;
  money = money + 1000;
rockLaunch1.textContent = "Test";
};
var game = {
  money:money,
  rocketLaunch1:rocketLaunch1,
  fuel:fuel,
  
}

game.rocketLaunch1.addEventListener("click", rockLaunch1);
