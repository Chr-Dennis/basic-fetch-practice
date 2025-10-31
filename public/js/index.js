// Oh, hi o/ welcome to the assignment o7


// Variable declaration
// ~~~~~~~~~~~~~~~~~~~~~~~~~
const btnAllUsers = document.getElementById("btnAllUsers");
const btnUnder10 = document.getElementById("btnUnder10");
const btnReset = document.getElementById("btnReset");
let userData = [];
// ~~~~~~~~~~~~~~~~~~~~~~~~~


// Function construction
// ~~~~~~~~~~~~~~~~~~~~~~~~~
// Fetch data from hosted JSON
async function getUserData() {
    const refURL = "https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json";
    try {
        const response = await fetch(refURL);
        userData = await response.json();
        console.log("userData has been fetched");
        
    } catch (error) {
        console.error(error);
    }
    return(userData);
}

getUserData();


// Reset results to remove user cards
function resetUserCards() {
    const main = document.querySelector("main");
    main.innerText = "";
}


// Create HTML elements displaying desired JSON data
function createAllUserCards(allUsers) {
    resetUserCards();
    for (let i = 0; i < allUsers.length; i++) {
        // create user card
        const div = document.createElement("div");
        const main = document.querySelector("main");
        div.className = "user-card"
        main.append(div);
        // add user first and last name to card
        const h2 = document.createElement("h2");
        h2.id = "userName";
        h2.className = "user-name"
        h2.innerText = `${allUsers[i].firstName} ${allUsers[i].lastName}`;
        div.append(h2);
        // add user email to card
        const email = document.createElement("p");
        email.id = "userEmail";
        email.className = "user-email";
        email.innerText = `${allUsers[i].email}`;
        div.append(email);
        // add user company to card
        const company = document.createElement("p");
        company.id = "userCompany";
        company.className = "user-company";
        company.innerText = `${allUsers[i].companyName}`;
        div.append(company);
        // add user tenure to card
        const tenure = document.createElement("p");
        tenure.id = "userTenure";
        tenure.className = "user-tenure";
        tenure.innerText = `${allUsers[i].yearsEmployed} years`;
        div.append(tenure);
    }
}


// Create HTML elements displaying filtered JSON data
function filterUsersUnder10(allUsers) {
    resetUserCards();
    const usersUnder10 = allUsers.filter((emp) => emp.yearsEmployed < 10);
    createAllUserCards(usersUnder10);
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~


// Functionality 
// ~~~~~~~~~~~~~~~~~~~~~~~~~
// generate info cards for all users
btnAllUsers.addEventListener("click", async function(){
    createAllUserCards(userData);
});


// generate info cards for all users employed less than 10 years
btnUnder10.addEventListener("click", function(){
    filterUsersUnder10(userData);
});


// reset and remove info cards
btnReset.addEventListener("click", function() {
    resetUserCards();
});
// ~~~~~~~~~~~~~~~~~~~~~~~~~