var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [],
        datasets: [{
            label: "",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            fill: false,
            data: [],
        }],
        
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: -50,
                    suggestedMax: 50
                },
                scaleLabel: {
                    display: true,
                    labelString: 'degrees Celsius'
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'time'
                }
            }],
        }
    }
});