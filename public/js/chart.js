var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
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
    options: {
        tooltips: {
            enabled: true,
            mode: 'single',
            callbacks: {
                label: function(tooltipItems) { 
                    return ' ' + tooltipItems.yLabel + ' °C ' + descArray[tooltipItems.index]
                }
            }
        },
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
            }]
        }
    }
});