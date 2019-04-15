var rockLaunch1 = document.getElementById("rockLaunch1");
var money = 0;
var fuel = 100

document.getElementById("money").innerHTML = money;
var rockLaunch1 = function() {
  fuel = fuel - 100;
  money = money + 1000;
rockLaunch1.textContent = "Test";
};
var game = {
  money = money,
  rockLaunch1 = rockLaunch1,
  fuel = fuel,
  
}

rockLaunch1.addEventListener("click", rockLaunch1);
