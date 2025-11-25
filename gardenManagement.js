const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 10;
let action;

if (temperature >=80){
    action = "Watering on";
}else{
    action = "Watering off";
}
console.log(action);

if (timeOfDay === "evening"|| timeOfDay === "night"){
    action = "Lights on";
}else{
    action = "Lights off";
}
console.log(action);

while (soilMoisture < 40) {
    console.log(soilMoisture);
    soilMoisture += 5;
}

console.log(40);