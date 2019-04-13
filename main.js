var getRockLaunch1 = document.getElementById("rockLaunch1");
var money = 0;
document.getElementById("money").innerHTML = money;
var rockLaunch1 = function() {
  var fuel = 100;
  if (fuel > 0) {
      fuel -= 1;
      money += 10
      }
getRockLaunch1.textContent = "Test";
};

getRockLaunch1.addEventListener("click", rockLaunch1);
