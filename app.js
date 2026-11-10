const typeChart = {
    fire: { strongAgainst: ["grass"], weakAgainst: ["water"] },
    water: { strongAgainst: ["fire"], weakAgainst: ["electric"] },
    electric: { strongAgainst: ["water"], weakAgainst: ["grass"] },
    grass: { strongAgainst: ["electric"], weakAgainst: ["fire"] }
};


const attackerOptions = document.getElementById("attacker");
const defenderOptions = document.getElementById("defender");

const result = document.getElementById("result");

function checkMatchup() {
    const attacker = attackerOptions.value;
    const defender = defenderOptions.value;


    const attackerEntry = typeChart[attacker];


    if (attackerEntry.strongAgainst.includes(defender)) {
        result.innerText = "Super Effective 2x Damage";
    } else if (attackerEntry.weakAgainst.includes(defender)) {
        result.innerText = "Not Very Effective 0.5x Damage";
    } else {
        result.innerText = "Normal Damage 1x Damage";
    }
}


attackerOptions.addEventListener("change", checkMatchup);
defenderOptions.addEventListener("change", checkMatchup);

