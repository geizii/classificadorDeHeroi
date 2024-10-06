let hero = "Link";
let experiencePoints = 8000;

if (experiencePoints <= 1000) {
    console.log("Sua classificação é Ferro");
} else if(experiencePoints > 1001 && experiencePoints <= 2000) {
    console.log("Sua classificação é Bronze");
} else if(experiencePoints > 2001 && experiencePoints <= 5000) {
    console.log("Sua classificação é Prata");
} else if(experiencePoints > 6001 && experiencePoints <= 7000) {
    console.log("Sua classificação é Ouro");
} else if(experiencePoints > 7001 && experiencePoints <= 8000) {
    console.log("Sua classificação é Platina");
} else if(experiencePoints > 8001 && experiencePoints <= 9000) {
    console.log("Sua classificação é Diamante");
} else if(experiencePoints > 9001 && experiencePoints <= 10000) {
    console.log("Sua classificação é Ascendente");
} else if(experiencePoints > 10001 && experiencePoints <= 11000) {
    console.log("Sua classificação é Imortal");
} 

console.log("O heroi de nome " + hero + " está no nível de " + experiencePoints);