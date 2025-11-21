// Link to give access to the json file data!

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

// Declaring Links to change html elements
let dailyBtn = document.getElementById("daily-btn");
let weeklyBtn = document.getElementById("weekly-btn");
let monthlyBtn = document.getElementById("monthly-btn");
let dailyBtnActive = true;
let weeklyBtnActive = false;
let monthlyBtnActive = false;


fetch('./data.json').then(response => {
    return response.json()
}).then(data => {

    workCurrentHours.innerText = data[0].timeframes.daily.current + "hrs";
    workPreviousHours.innerText ="Yesterday - " + data[0].timeframes.daily.previous + "hrs";

    playCurrentHours.innerText = data[1].timeframes.daily.current + "hrs";
    playPreviousHours.innerText ="Yesterday - " + data[1].timeframes.daily.previous + "hrs";

    studyCurrentHours.innerText = data[2].timeframes.daily.current + "hrs";
    studyPreviousHours.innerText ="Yesterday - " + data[2].timeframes.daily.previous + "hrs";

    exerciseCurrentHours.innerText = data[3].timeframes.daily.current + "hrs";
    exercisePreviousHours.innerText ="Yesterday - " + data[3].timeframes.daily.previous + "hrs";

    socialCurrentHours.innerText = data[4].timeframes.daily.current + "hrs";
    socialPreviousHours.innerText ="Yesterday - " + data[4].timeframes.daily.previous + "hrs";

    selfCareCurrentHours.innerText = data[5].timeframes.daily.current + "hrs";
    selfCarePreviousHours.innerText ="Yesterday - " + data[5].timeframes.daily.previous + "hrs";
    
    
    // let list = document.getElementsByTagName("button");
    // for(let i = 0; i < list.length; i++)
    // {
    //     list[i].addEventListener("click", function() {
    //         let active = document.getElementsByClassName("active");
    //         active[0].className = current[0].className.replace("active", "");
    //         this.className += "active";
    //     });
    // }
    console.log(dailyBtnActive)
    if(!dailyBtnActive)
    {
        dailyBtn.classList.remove('active');
    }
    else
    {
        dailyBtn.classList.add('active');
    }

    // Add function to disable daily btn and keep highlighted
    dailyBtn.addEventListener("click", function(){


        dailyBtnActive = true;
        weeklyBtnActive = false;
        monthlyBtnActive =false;

        console.log(dailyBtnActive);

        workCurrentHours.innerText = data[0].timeframes.daily.current + "hrs";
        workPreviousHours.innerText ="Yesterday - " + data[0].timeframes.daily.previous + "hrs";
    
        playCurrentHours.innerText = data[1].timeframes.daily.current + "hrs";
        playPreviousHours.innerText ="Yesterday - " + data[1].timeframes.daily.previous + "hrs";
    
        studyCurrentHours.innerText = data[2].timeframes.daily.current + "hrs";
        studyPreviousHours.innerText ="Yesterday - " + data[2].timeframes.daily.previous + "hrs";
    
        exerciseCurrentHours.innerText = data[3].timeframes.daily.current + "hrs";
        exercisePreviousHours.innerText ="Yesterday - " + data[3].timeframes.daily.previous + "hrs";
    
        socialCurrentHours.innerText = data[4].timeframes.daily.current + "hrs";
        socialPreviousHours.innerText ="Yesterday - " + data[4].timeframes.daily.previous + "hrs";
    
        selfCareCurrentHours.innerText = data[5].timeframes.daily.current + "hrs";
        selfCarePreviousHours.innerText ="Yesterday - " + data[5].timeframes.daily.previous + "hrs";
        console.log(dailyBtnActive)
    if(!dailyBtnActive)
        dailyBtn.classList.remove('active');
    else
        dailyBtn.classList.add('active');
    if(!weeklyBtnActive)
        weeklyBtn.classList.remove('active');
    else    
        weeklyBtn.classList.add('active');
    if(!monthlyBtnActive)
        monthlyBtn.classList.remove('active')
    else
        monthlyBtn.classList.add('active')
    });
    console.log(data[0].timeframes.weekly.previous + "hrs")
    weeklyBtn.addEventListener("click", function(){
        
        dailyBtnActive = false;
        weeklyBtnActive = true;
        monthlyBtnActive =false;
        // weeklyBtn.style.color = "white";
        // dailyBtn.style.color = "#7078C9";
        // monthlyBtn.style.color = "#7078C9";
        // dailyBtn.document.style.setProperty("--nav-link-hover" , "white")
        workCurrentHours.innerText = data[0].timeframes.weekly.current + "hrs";
        workPreviousHours.innerText ="Last Week - " + data[0].timeframes.weekly.previous + "hrs";

        playCurrentHours.innerText = data[1].timeframes.weekly.current + "hrs";
        playPreviousHours.innerText ="Last Week - " + data[1].timeframes.weekly.previous + "hrs";
    
        studyCurrentHours.innerText = data[2].timeframes.weekly.current + "hrs";
        studyPreviousHours.innerText ="Last Week - " + data[2].timeframes.weekly.previous + "hrs";
    
        exerciseCurrentHours.innerText = data[3].timeframes.weekly.current + "hrs";
        exercisePreviousHours.innerText ="Last Week - " + data[3].timeframes.weekly.previous + "hrs";
    
        socialCurrentHours.innerText = data[4].timeframes.weekly.current + "hrs";
        socialPreviousHours.innerText ="Last Week - " + data[4].timeframes.weekly.previous + "hrs";
    
        selfCareCurrentHours.innerText = data[5].timeframes.weekly.current + "hrs";
        selfCarePreviousHours.innerText ="Last Week - " + data[5].timeframes.weekly.previous + "hrs";
        console.log(dailyBtnActive)
    if(!dailyBtnActive)
    {
        dailyBtn.classList.remove('active');
    }
    else
    {
        dailyBtn.classList.add('active');
    }
    if(!weeklyBtnActive)
        weeklyBtn.classList.remove('active');
    else    
        weeklyBtn.classList.add('active');
    if(!monthlyBtnActive)
        monthlyBtn.classList.remove('active')
    else
        monthlyBtn.classList.add('active')
    });
    monthlyBtn.addEventListener("click", function(){

        dailyBtnActive = false;
        weeklyBtnActive = false;
        monthlyBtnActive =true;
        // dailyBtn.style.color = "#7078C9";
        // weeklyBtn.style.color = "#7078C9";
        // monthlyBtn.style.color = "white"
        workCurrentHours.innerText = data[0].timeframes.monthly.current + "hrs";
        workPreviousHours.innerText ="Last Month - " + data[0].timeframes.monthly.previous + "hrs";

        playCurrentHours.innerText = data[1].timeframes.monthly.current + "hrs";
        playPreviousHours.innerText ="Last Month - " + data[1].timeframes.monthly.previous + "hrs";

        studyCurrentHours.innerText = data[2].timeframes.monthly.current + "hrs";
        studyPreviousHours.innerText ="Last Month - " + data[2].timeframes.monthly.previous + "hrs";
    
        exerciseCurrentHours.innerText = data[3].timeframes.monthly.current + "hrs";
        exercisePreviousHours.innerText ="Last Month - " + data[3].timeframes.monthly.previous + "hrs";
    
        socialCurrentHours.innerText = data[4].timeframes.monthly.current + "hrs";
        socialPreviousHours.innerText ="Last Month - " + data[4].timeframes.monthly.previous + "hrs";
    
        selfCareCurrentHours.innerText = data[5].timeframes.monthly.current + "hrs";
        selfCarePreviousHours.innerText ="Last Month - " + data[5].timeframes.monthly.previous + "hrs";

        console.log(dailyBtnActive)
    if(!dailyBtnActive)
    {
        dailyBtn.classList.remove('active');
    }
    else
    {
        dailyBtn.classList.add('active');
    }
    if(!weeklyBtnActive)
        weeklyBtn.classList.remove('active');
    else    
        weeklyBtn.classList.add('active');
    if(!monthlyBtnActive)
        monthlyBtn.classList.remove('active')
    else
        monthlyBtn.classList.add('active')
    });  
});
//creating eventListeners for a tags to toggle daily, weekly, and monthly. (if button pressed, disable btn and keep highlighted).

