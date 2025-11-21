
//Declaring variables for HTML elements
let workCurrentHours = document.getElementById("work-current-hours");
let workPreviousHours = document.getElementById("work-previous-hours");
let playCurrentHours = document.getElementById("play-current-hours");
let playPreviousHours = document.getElementById("play-previous-hours");
let studyCurrentHours = document.getElementById("study-current-hours");
let studyPreviousHours = document.getElementById("study-previous-hours");
let exerciseCurrentHours = document.getElementById("exercise-current-hours");
let exercisePreviousHours = document.getElementById("exercise-previous-hours");
let socialCurrentHours = document.getElementById("social-current-hours");
let socialPreviousHours = document.getElementById("social-previous-hours");
let selfCareCurrentHours = document.getElementById("self-care-current-hours");
let selfCarePreviousHours = document.getElementById("self-care-previous-hours");

// Declaring buttons to change relevant html elements
let dailyBtn = document.getElementById("daily-btn");
let weeklyBtn = document.getElementById("weekly-btn");
let monthlyBtn = document.getElementById("monthly-btn");
// Created Bools to work functionality for active buttons being constantly highlighted
let dailyBtnActive = true;
let weeklyBtnActive = false;
let monthlyBtnActive = false;
//fetching data from json file
fetch('./data.json').then(response => {
    return response.json()
}).then(data => {
    //When first live served, it will default to show data for daily.
    workCurrentHours.innerText = data[0].timeframes.daily.current + "hrs";
    workPreviousHours.innerText = "Yesterday - " + data[0].timeframes.daily.previous + "hrs";

    playCurrentHours.innerText = data[1].timeframes.daily.current + "hrs";
    playPreviousHours.innerText = "Yesterday - " + data[1].timeframes.daily.previous + "hrs";

    studyCurrentHours.innerText = data[2].timeframes.daily.current + "hrs";
    studyPreviousHours.innerText = "Yesterday - " + data[2].timeframes.daily.previous + "hrs";

    exerciseCurrentHours.innerText = data[3].timeframes.daily.current + "hrs";
    exercisePreviousHours.innerText = "Yesterday - " + data[3].timeframes.daily.previous + "hrs";

    socialCurrentHours.innerText = data[4].timeframes.daily.current + "hrs";
    socialPreviousHours.innerText = "Yesterday - " + data[4].timeframes.daily.previous + "hrs";

    selfCareCurrentHours.innerText = data[5].timeframes.daily.current + "hrs";
    selfCarePreviousHours.innerText = "Yesterday - " + data[5].timeframes.daily.previous + "hrs";
    //function for daily button to display daily hours data to the page and re-setting bools for button active functionality. 
    dailyBtn.addEventListener("click", function () {

        dailyBtnActive = true;
        weeklyBtnActive = false;
        monthlyBtnActive = false;

        workCurrentHours.innerText = data[0].timeframes.daily.current + "hrs";
        workPreviousHours.innerText = "Yesterday - " + data[0].timeframes.daily.previous + "hrs";

        playCurrentHours.innerText = data[1].timeframes.daily.current + "hrs";
        playPreviousHours.innerText = "Yesterday - " + data[1].timeframes.daily.previous + "hrs";

        studyCurrentHours.innerText = data[2].timeframes.daily.current + "hrs";
        studyPreviousHours.innerText = "Yesterday - " + data[2].timeframes.daily.previous + "hrs";

        exerciseCurrentHours.innerText = data[3].timeframes.daily.current + "hrs";
        exercisePreviousHours.innerText = "Yesterday - " + data[3].timeframes.daily.previous + "hrs";

        socialCurrentHours.innerText = data[4].timeframes.daily.current + "hrs";
        socialPreviousHours.innerText = "Yesterday - " + data[4].timeframes.daily.previous + "hrs";

        selfCareCurrentHours.innerText = data[5].timeframes.daily.current + "hrs";
        selfCarePreviousHours.innerText = "Yesterday - " + data[5].timeframes.daily.previous + "hrs";
        // These if and else statement are for the active button function
        if (!dailyBtnActive)
            dailyBtn.classList.remove('active');
        else
            dailyBtn.classList.add('active');
        if (!weeklyBtnActive)
            weeklyBtn.classList.remove('active');
        else
            weeklyBtn.classList.add('active');
        if (!monthlyBtnActive)
            monthlyBtn.classList.remove('active')
        else
            monthlyBtn.classList.add('active')
    });
    // functionality for the weekly button to display weekly content
    weeklyBtn.addEventListener("click", function () {

        dailyBtnActive = false;
        weeklyBtnActive = true;
        monthlyBtnActive = false;
       
        workCurrentHours.innerText = data[0].timeframes.weekly.current + "hrs";
        workPreviousHours.innerText = "Last Week - " + data[0].timeframes.weekly.previous + "hrs";

        playCurrentHours.innerText = data[1].timeframes.weekly.current + "hrs";
        playPreviousHours.innerText = "Last Week - " + data[1].timeframes.weekly.previous + "hrs";

        studyCurrentHours.innerText = data[2].timeframes.weekly.current + "hrs";
        studyPreviousHours.innerText = "Last Week - " + data[2].timeframes.weekly.previous + "hrs";

        exerciseCurrentHours.innerText = data[3].timeframes.weekly.current + "hrs";
        exercisePreviousHours.innerText = "Last Week - " + data[3].timeframes.weekly.previous + "hrs";

        socialCurrentHours.innerText = data[4].timeframes.weekly.current + "hrs";
        socialPreviousHours.innerText = "Last Week - " + data[4].timeframes.weekly.previous + "hrs";

        selfCareCurrentHours.innerText = data[5].timeframes.weekly.current + "hrs";
        selfCarePreviousHours.innerText = "Last Week - " + data[5].timeframes.weekly.previous + "hrs";

        if (!dailyBtnActive) {
            dailyBtn.classList.remove('active');
        }
        else {
            dailyBtn.classList.add('active');
        }
        if (!weeklyBtnActive)
            weeklyBtn.classList.remove('active');
        else
            weeklyBtn.classList.add('active');
        if (!monthlyBtnActive)
            monthlyBtn.classList.remove('active')
        else
            monthlyBtn.classList.add('active')
    });
    // function to display monthly content when clicking monthly button.
    monthlyBtn.addEventListener("click", function () {

        dailyBtnActive = false;
        weeklyBtnActive = false;
        monthlyBtnActive = true;
        
        workCurrentHours.innerText = data[0].timeframes.monthly.current + "hrs";
        workPreviousHours.innerText = "Last Month - " + data[0].timeframes.monthly.previous + "hrs";

        playCurrentHours.innerText = data[1].timeframes.monthly.current + "hrs";
        playPreviousHours.innerText = "Last Month - " + data[1].timeframes.monthly.previous + "hrs";

        studyCurrentHours.innerText = data[2].timeframes.monthly.current + "hrs";
        studyPreviousHours.innerText = "Last Month - " + data[2].timeframes.monthly.previous + "hrs";

        exerciseCurrentHours.innerText = data[3].timeframes.monthly.current + "hrs";
        exercisePreviousHours.innerText = "Last Month - " + data[3].timeframes.monthly.previous + "hrs";

        socialCurrentHours.innerText = data[4].timeframes.monthly.current + "hrs";
        socialPreviousHours.innerText = "Last Month - " + data[4].timeframes.monthly.previous + "hrs";

        selfCareCurrentHours.innerText = data[5].timeframes.monthly.current + "hrs";
        selfCarePreviousHours.innerText = "Last Month - " + data[5].timeframes.monthly.previous + "hrs";

        if (!dailyBtnActive) {
            dailyBtn.classList.remove('active');
        }
        else {
            dailyBtn.classList.add('active');
        }
        if (!weeklyBtnActive)
            weeklyBtn.classList.remove('active');
        else
            weeklyBtn.classList.add('active');
        if (!monthlyBtnActive)
            monthlyBtn.classList.remove('active')
        else
            monthlyBtn.classList.add('active')
    });
});