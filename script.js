// 🚗 script.js
// Shows: parameters, return values, scope, and animation control

let driveCount = 0; // global variable

// Function with parameters & return value
function calculateSpeed(distance, time) {
  return distance / time; // speed = distance / time
}

// Function to log messages
function logMessage(msg) {
  console.log(msg);
}

// Local vs global scope demo
function trackDrives() {
  let localMsg = "Tracking this drive..."; // local variable
  logMessage(localMsg);

  driveCount++;
  return driveCount;
}

// Toggle driving animation
function toggleDrive(car) {
  car.classList.toggle("drive");
}

const button = document.getElementById("driveBtn");
const car = document.getElementById("car");

button.addEventListener("click", () => {
  toggleDrive(car);

  // Demo functions
  let speed = calculateSpeed(100, 2); // 100 km in 2 hours
  logMessage(`Speed: ${speed} km/h`);

  let trips = trackDrives();
  logMessage(`Drive button pressed ${trips} times`);
});
