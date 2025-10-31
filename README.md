# basic-fetch-practice
This project allows exploration on basic fetch API execution while also requiring a call upon all experience so far to fully create a project from scratch. 

## Approach
I wanted to build an HTML skeleton first to have points for connecting the Javascript muscles and the CSS skin. I got the HTML construction lined out pretty quickly, and in trying to play with basic layout, I began to go down the styling rabbit hole at the wrong stage of development. I was able to pin some things down, like design color palette, but I realized that it will do no good to make everything look nice if it doesn't do the most important part of the project: call the API and represent the data. I shifted gears and focused heavily on the JS construction. I had a large majority of this aspect of the project finished, but I ran into isues with variable scope and async timing. Thankfully, with the guidance of Code:You's mentorship and lessons, I was able to get everything lined out to display the data required. Afterwards, I played with the styling to settle on a design and worked from there, building mobile-first for a responsive experience almost regardless of device size. CSS had it's challenges with alignments and edges, but thankfully the repititions finally seem to be kicking in!

## Overview
In this assignment, we will practice using the fetch API by making a callout to a statically hosted JSON file and using the returned data. In this case, the JSON file contains a list of objects representing users and we will be dynamically creating "cards" for user containing information about them.

For further practice, try to incorporate using ES6 modules where appropriate.

Visit the Data
Navigate to the JSON file to get an idea of how the data is structured. You spent the first week of this module focused on Objects, so this file shouldn't look like a foreign language to you.

You will make your request to the following https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json

Note
Every user unfortunately has a unique company name. This was an oversight when generating the mock data.
We won't be using every key in the objects, but we will be using most of them.

Requirements
Requirement	Description
Must be responsive	Use a layout system and media queries to ensure that the page looks responsive across many devices and screen sizes.
Dynamically create, add, and remove HTML elements.	Every "User Card" will be created and removed via your JavaScript.
Fetch and use the returned data.	You will use the data fetched to to populate your dynamically created "User Cards."
Create two buttons to get and handle data.	You will create buttons that perform actions. The first fetches all the data and creates the "User Cards." The second fetches all the data, but filters out any User who has been employed at their company for 10 years or more. Generate cards for the remaining users and display them.
Create a button to clear the cards	This button will remove all the cards from page.
By now you should have a solid grasp on how to create a project, so it is up to you to fulfill these requirements without step-by-step directions. You should, however, name this project basic-fetch-practice

Once you have finished, submit the link to you GitHub repository.

## Usage
Simply fork the repo, change into the public directory, and launch index.html with Live Server.

## Example Code

<pre>

function filterUsersUnder10(allUsers) {
    resetUserCards();
    const usersUnder10 = allUsers.filter((emp) => emp.yearsEmployed < 10);
    createAllUserCards(usersUnder10);
}

</pre>

<pre>
  .user-name {
        font-size: 1.5em;
        text-align: center;
        text-wrap: balance;
        width: 100%;
        height: 100%;
        padding: 0px;
        grid-column: 1 / 2;
        justify-self: center;
        align-items: center;
        border-top: none;
        border-top-right-radius: 0px;
        border-top-left-radius: 0px;
        border-bottom-right-radius: 25px;
        border-bottom-left-radius: 0px;
    }
</pre>

## Acknowledgements
Thank you of course to the Code:You team and classmates for the helpful review and comments, and thanks to the YouTube channels BroCode, Web Dev Simplified, and FreeCodeCamp for their wonderfully helpful instructional videos.
