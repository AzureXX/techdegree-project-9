var ctx = document.getElementById("traffic-chart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {

    },
    options: {

    }
});

var cty = document.getElementById("daily-traffic").getContext('2d');
var myChart = new Chart(cty, {
    type: 'bar',
    data: {

    },
    options: {

    }
});

var ctz = document.getElementById("mobile-users").getContext('2d');
var myChart = new Chart(ctz, {
    type: 'doughnut',
    data: {

    },
    options: {

    }
});
