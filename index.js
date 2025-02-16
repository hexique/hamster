let one_click = 1;
let balance = 0;
let chance = 0;
let extra_income = 0
let passive_income = 0;

let upgrade_cost = 10;
let passive_cost = 100;
let luck_cost = 500;
let extra_cost = 2000;

openNav()
function tap(){
    balance += one_click;
    if(Math.random() < chance) {
        balance += one_click * 100;
        console.log(chance)
    }
    console.log(balance)
    if(extra_income != 0){
        document.getElementById("passive-label").textContent = `Passive income: ${passive_income}$/sec`;
    }
    document.getElementById("balance").textContent = `${balance}`;
    passive_income += extra_income;
}

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
} 

function upgrade() {
    if(balance < upgrade_cost) return;
    balance -= upgrade_cost;
    upgrade_cost = Math.floor(upgrade_cost * 1.5)
    one_click += 1;
    document.getElementById("balance").textContent = `${balance}`;
    document.getElementById("one-click-label").textContent = `Income: ${one_click}$/click`;
    document.getElementById("upgradeBtn").textContent = `Upgrade ${upgrade_cost}$`;
}

function addPassive(){
    console.log(`${passive_income}`)
    balance += passive_income;
    document.getElementById("balance").textContent = `${balance}`;
}

function passive(){
    if(balance < passive_cost) return;
    console.log(`${passive_cost}`)
    passive_income++;
    balance -= passive_cost;
    passive_cost = Math.floor(passive_cost * 1.2)
    document.getElementById("balance").textContent = `${balance}`;
    document.getElementById("passive-label").textContent = `Passive income: ${passive_income}$/sec`;
    document.getElementById("passiveBtn").textContent = `Passive income ${passive_cost}$`;
}

function luck(){
    if(balance < luck_cost) return;
    balance -= luck_cost
    chance *= 1.3;
    luck_cost = Math.floor(luck_cost * 1.3);
    if(chance == 0) chance += 0.01;
    document.getElementById("luck-label").textContent = `Chance: ${Math.floor(chance * 10000) / 100}%`;
    document.getElementById("luckBtn").textContent = `Luck ${luck_cost}$`;
    document.getElementById("balance").textContent = `${balance}`;
}

function extra(){
    if(balance < extra_cost) return;
    balance -= extra_cost;
    extra_cost *= 1.5;
    extra_income++;
    document.getElementById("extra-label").textContent = `Super click: ${extra_income}%`;
    document.getElementById("extraBtn").textContent = `Super click ${extra_cost}$`;
    console.log(`Extra income ${extra_income}`);
    document.getElementById("balance").textContent = `${balance}`;
}

function win(){
    if(balance < 50000) return;
    let result = confirm("Congratulations! You won! Do you want to toggle hacks?");
    if(result) {
        passive_cost = 0;
        luck_cost = 0;
        extra_cost = 0;
        upgrade_cost = 0;
        extra_cost = 0;
        document.getElementById("extraBtn").textContent = `Super click ${luck_cost}$`;
        document.getElementById("luckBtn").textContent = `Luck ${luck_cost}$`;
        document.getElementById("passiveBtn").textContent = `Passive income ${passive_cost}$`;
        document.getElementById("upgradeBtn").textContent = `Upgrade ${upgrade_cost}$`;
        document.getElementById("balance").textContent = `${balance}`;
    }
}

let passive_interval = setInterval(addPassive, 1000);
passive_interval.clearTimeout()