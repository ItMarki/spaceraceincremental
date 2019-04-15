var getRockLaunch1 = document.getElementById("rockLaunch1");
var money = 0;
var fuel = 100
document.getElementById("money").innerHTML = money;
var rockLaunch1 = function() {
  fuel = fuel - 100;
  money = money + 1000;
getRockLaunch1.textContent = "Test";
};

getRockLaunch1.addEventListener("click", rockLaunch1);
updateDisplay: function() {
  document.getElementById('money').value = money;
};
