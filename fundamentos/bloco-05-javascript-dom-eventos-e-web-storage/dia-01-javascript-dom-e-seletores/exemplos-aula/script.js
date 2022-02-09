let headerColor = document.getElementById("header-container");
headerColor.style.backgroundColor = "rgb(8, 182, 92)";

let emergencySection = document.querySelector(".emergency-tasks");
emergencySection.style.backgroundColor = "rgb(254, 176, 146)";

let noEmergencySection = document.querySelector(".no-emergency-tasks");
noEmergencySection.style.backgroundColor = "rgb(255, 228, 94)";


let emergencyTitles = document.querySelectorAll(".emergency-tasks h3");
for (let i = 0; i < emergencyTitles.length; i++) {
  emergencyTitles[i].style.backgroundColor = "rgb(162, 0, 251)";
}

let noEmergencyTitles = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i < noEmergencyTitles.length; i++) {
  noEmergencyTitles[i].style.backgroundColor = "black";
}

let footerColor = document.getElementById("footer-container");
footerColor.style.backgroundColor = "rgb(8, 40, 40)";


