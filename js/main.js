var ctx = document.getElementById("traffic-chart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["16-22", "23-39", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
      datasets: [{
          label: 'users',
          data: [0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)'

          ],
          borderColor: [
              'rgba(255,99,132,1)'

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

var cty = document.getElementById("daily-traffic").getContext('2d');
var myChart = new Chart(cty, {
    type: 'bar',
    data: {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [{
          label: 'users',
          data: [75, 100, 175, 125, 225, 200, 100],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
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
var myChart = new Chart(ctz, {
    type: 'doughnut',
    data: {
      labels: ["Phone", "Tablet", "Desktop"],
      datasets: [{
          label: '# of Votes',
          data: [15, 15, 70],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
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
