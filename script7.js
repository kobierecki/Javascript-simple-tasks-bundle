//W KTORYM ROKU 1 STYCZNIA BEDZIE NIEDZIELA

function sunday2040(year){
    for (year; year <= 2040; year++) {
        var day = new Date(year, 0, 1);
        if (day.getDay() === 0) {
            console.log('To rok ' + year);
        }
    }
}

sunday2040(2014);