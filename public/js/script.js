function adamAjax() {
    $.ajax({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/forecast?id=2759794&appid=d4daeba3e355348ac9050efcae9375ca',
        success: function(response) {
            console.log(response.list[0].dt_txt)
            document.getElementById("ajaxTest").innerHTML = response.list[0].dt_txt
        },
        error: function() {
            console.log(response)
        }
    })
}

function moscowAjax() {
    $.ajax({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/forecast?id=5601538&appid=d4daeba3e355348ac9050efcae9375ca',
        success: function(response) {
            console.log(response)
        },
        error: function() {
            console.log(response)
        }
    })
}

function newYorkAjax() {
    $.ajax({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/forecast?id=5128581&appid=d4daeba3e355348ac9050efcae9375ca',
        success: function(response) {
            console.log(response)
        },
        error: function() {
            console.log(response)
        }
    })
}