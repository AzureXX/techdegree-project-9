
var bell= document.querySelector(".bell")
var bellDot= document.querySelector(".bell-dot")
var alertP = document.querySelector('.alert');
var alertClose = document.querySelector('.alert-close');
var send = document.querySelector('.send');
var userSearch = document.querySelector('.user-search');
var userMessage = document.querySelector('.user-message');
var buttonHourly = document.querySelector('#hourly');
var buttonDaily = document.querySelector('#daily');
var buttonWeekly = document.querySelector('#weekly');
var buttonMonthly = document.querySelector('#monthly');
var divHourly = document.querySelector('#tc-hourly');
var divDaily = document.querySelector('#tc-daily');
var divWeekly = document.querySelector('#tc-weekly');
var divMonthly = document.querySelector('#tc-monthly');
var emailNotification = document.querySelector('#emailnotification');
var publicProfile = document.querySelector('#publicprofile');
var timeZone = document.querySelector('.select');

// localstorage.getItem(emailNotification.checked);
// localstorage.getItem(publicProfile.checked);
// localstorage.setItem(emailNotification.checked);
// localstorage.setItem(publicProfile.checked);

bell.addEventListener("click", () => {
  bellDot.style.display ="none";
  alert("You have 10 emails");
  alert("You are just awesome")
});
alertClose.addEventListener("click", () => {
  alertP.remove();
});

send.addEventListener("click", (event) => {
  event.preventDefault();
  if (userSearch.value === ""|| userMessage.value === "" ) {
    alert("You need to fill user and message")
  } else {
    alert("Succesfully sent")
  }
})

var hourly = document.getElementById("traffic-chart-hourly").getContext('2d');
var myChart = new Chart(hourly, {
    type: 'line',
    data: {
      labels: ["00:00-03:00","03:00-06:00","06:00-09:00","09:00-12:00","12:00-15:00","15:00-18:00","18:00-21:00","21:00-00:00"],
      datasets: [{
          label: 'users',
          data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 2250],
          backgroundColor: [
              'rgba(226, 227, 244, 0.7)'

          ],
          borderColor: [
              'rgba(226, 227, 244, 1)'

          ],
          borderWidth: 1
      }]

    },
    options: {
      legend: {
            display: false,

        }
    }
});

var daily = document.getElementById("traffic-chart-daily").getContext('2d');
var myChart = new Chart(daily,   {
    type: 'line',
    data: {
      labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      datasets: [{
          label: 'users',
          data: [0, 750, 1250, 1000, 1500, 2000, 1500],
          backgroundColor: [
              'rgba(226, 227, 244, 0.7)'

          ],
          borderColor: [
              'rgba(226, 227, 244, 1)'

          ],
          borderWidth: 1
      }]

    },
    options: {
      legend: {
            display: false,

        }
    }
});

var weekly = document.getElementById("traffic-chart-weekly").getContext('2d');
var myChart = new Chart(weekly,  {
    type: 'line',
    data: {
      labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
      datasets: [{
          label: 'users',
          data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750],
          backgroundColor: [
              'rgba(226, 227, 244, 0.7)'

          ],
          borderColor: [
              'rgba(226, 227, 244, 1)'

          ],
          borderWidth: 1
      }]

    },
    options: {
      legend: {
            display: false,

        }
    }
});

var monthly = document.getElementById("traffic-chart-monthly").getContext('2d');
var myChart = new Chart(monthly,  {
    type: 'line',
    data: {
      labels: ["January", "Ferbruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [{
          label: 'users',
          data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
          backgroundColor: [
              'rgba(226, 227, 244, 0.7)'

          ],
          borderColor: [
              'rgba(226, 227, 244, 1)'

          ],
          borderWidth: 1
      }]

    },
    options: {
      legend: {
            display: false,

        }
    }
});


buttonHourly.addEventListener("click", () => {
  divHourly.style.display = "block";
  divDaily.style.display = "none";
  divWeekly.style.display = "none";
  divMonthly.style.display = "none";
});


buttonDaily.addEventListener("click", () => {
  divHourly.style.display = "none";
  divDaily.style.display = "block";
  divWeekly.style.display = "none";
  divMonthly.style.display = "none";
});

buttonWeekly.addEventListener("click", () => {
  divHourly.style.display = "none";
  divDaily.style.display = "none";
  divWeekly.style.display = "block";
  divMonthly.style.display = "none";
});

buttonMonthly.addEventListener("click", () => {
  divHourly.style.display = "none";
  divDaily.style.display = "none";
  divWeekly.style.display = "none";
  divMonthly.style.display = "block";
});


var cty = document.getElementById("daily-traffic").getContext('2d');
var dailyTraffic = new Chart(cty, {
    type: 'bar',
    data: {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [{
          label: 'users',
          data: [75, 100, 175, 125, 225, 200, 100],
          backgroundColor: [
              'rgba(116, 118, 186, 1)',
              'rgba(116, 118, 186, 1)',
              'rgba(116, 118, 186, 1)',
              'rgba(116, 118, 186, 1)',
              'rgba(116, 118, 186, 1)',
              'rgba(116, 118, 186, 1)',
              'rgba(116, 118, 186, 1)'
          ],
          borderColor: [
            'rgba(116, 118, 186, 1)',
            'rgba(116, 118, 186, 1)',
            'rgba(116, 118, 186, 1)',
            'rgba(116, 118, 186, 1)',
            'rgba(116, 118, 186, 1)',
            'rgba(116, 118, 186, 1)',
            'rgba(116, 118, 186, 1)'
          ],
          borderWidth: 1
      }]

    },
    options: {
      legend: {
            display: false,
        }

    }
});

var ctz = document.getElementById("mobile-users").getContext('2d');
var mobileUsers = new Chart(ctz, {
    type: 'doughnut',
    data: {
      labels: ["Phone", "Tablet", "Desktop"],
      datasets: [{
          label: '# of Votes',
          data: [15, 15, 70],
          backgroundColor: [
              'rgba(145, 199, 148, 1)',
              'rgba(130, 175, 189, 1)',
              'rgba(116, 118, 186, 1)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1
      }]

    },
    options: {
      legend: {
            display: true,
        }
    }
});


// emailNotification.addEventListener("click", => {
//   localstorage.setItem(emailNotification.checked);
// });
//
// publicProfile.addEventListener("click", => {
//   localstorage.setItem(publicProfile.checked);
// });
