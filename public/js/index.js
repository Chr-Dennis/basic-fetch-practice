
const btnAllUsers = document.getElementById("btnAllUsers");
const btnUnder10 = document.getElementById("btnUnder10");
const btnReset = document.getElementById("btnReset");

async function getUserData() {
    const refURL = "https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json";
    try {
        const response = await fetch(refURL);
        const userData = await response.json();
        console.log(userData);

    } catch (error) {
        console.error(error);
    }
}



btnAllUsers.addEventListener("click", function(){
    console.log("All Users button clicked");
    userData.forEach(function(emp) {
        const div = document.createElement("div");
        div.className = "user-card";
    });
});

btnUnder10.addEventListener("click", function(){console.log("All Users Under 10 Years button clicked")});

function createAllUserCards(userData) {
    getUserData();
    for (let i = 0; i < 500; i++) {
        const div = document.createElement("div");
        const main = document.querySelector("main");
        main.append(div);
        const h2 = document.createElement("h2");
        h2.innerText = `${userData[i].firstName} + " " + ${userData[i].lastName}`;
        div.append(h2);
    }
}


// Reset results to remove user cards
function resetUserCards() {
    const userCards = document.getElementsByClassName("user-card")
    for (let i = 0; i < userCards.length; i++) {
        userCards[i].remove();
    }
}