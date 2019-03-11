// Rover Object Goes Here
// ======================

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
}

var test= "rhffrfflfrff";
console.log("Orders: ", test);
// ======================

function turnLeft(rover){
  switch (rover.direction){
    case "N":
       rover.direction = "W";
       break;
    case "E":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "S";
    break;
    default:
    break;
  }
  console.log("turnLeft was called!"); 
}

function turnRight(rover){
  switch (rover.direction){
    case "N":
       rover.direction = "E";
       break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
    break;
    default:
    break;
  
  }
  console.log("turnRight was called!");
}

function moveForward(rover){
  if (rover.direction == "N"){
    rover.y -= 1;
  }
  else if (rover.direction == "E"){
    rover.x += 1;
  }
  else if (rover.direction == "S"){
    rover.y += 1;
  }
  else if (rover.direction == "W"){
    rover.x -= 1;
  }
  console.log("moveForward was called");
  outSide(rover);
}

function moveBackwards(rover){
  if (rover.direction == "N"){
    rover.y += 1;
  }
  else if (rover.direction == "E"){
    rover.x -= 1;
  }
  else if (rover.direction == "S"){
    rover.y -= 1;
  }
  else if (rover.direction == "W"){
    rover.x += 1;
  }
  console.log("moveBackwards was called");
  outSide(rover);
}

//función para hacer volver al robot cuando sale del grid.
function outSide(rover){
  if (rover.y > 10) {
    rover.y -= 1;
    console.log("That movement would be outside the grid");
  }
  else if (rover.x > 10) {
    rover.x -= 1;
    console.log("That movement would be outside the grid");
  }
  else if (rover.y < 0) {
    rover.y += 1;
    console.log("That movement would be outside the grid");
  }
  else if (rover.x < 0) {
    rover.x += 1;
    console.log("That movement would be outside the grid");
  }
  else{}
  
}

//Prueba para error de test
/*for (var i = 0; i < test.length; i++) {
  if (test[i]== "f"){
    moveForward(rover);
  }
  else if (test[i]== "b"){
    moveBackwards(rover);
  }
  else if (test[i]== "l"){
    turnLeft(rover);
    moveForward(rover);
  }
  else if (test[i]== "r"){
    turnRight(rover);
    moveForward(rover);
  }
  else {
    console.log("Wrong move was called");
  }

console.log(rover.direction);
console.log(rover.x);
console.log(rover.y);
rover.travelLog.push(rover.x);
rover.travelLog.push(rover.y);
}*/


function start(test){
for (var i = 0; i < test.length; i++) {
  if (test[i]== "f"){
    moveForward(rover);
  }
  else if (test[i]== "b"){
    moveBackwards(rover);
  }
  else if (test[i]== "l"){
    turnLeft(rover);
    moveForward(rover);
  }
  else if (test[i]== "r"){
    turnRight(rover);
    moveForward(rover);
  }
  else {
    console.log("Wrong move was called");
  }

console.log(rover.direction);
console.log(rover.x);
console.log(rover.y);
rover.travelLog.push(rover.x);
rover.travelLog.push(rover.y);
}
}
start(test);

var j= 0;
console.log("Tracking of rover");
console.log("Position:" + [j]);
console.log("X: 0 Y: 0");

for (var i = 0; i < rover.travelLog.length; i++){
  console.log("Position:" + [j+1]);
  console.log("X: "+rover.travelLog[i] +" Y: "+rover.travelLog[i+1]);
  i= i+1;
  j+=1;
}




