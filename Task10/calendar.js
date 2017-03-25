var calendar = (function () {
    var moment = new Date();

    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    var currentDaysNumber = moment.getDay() + 1;
    if (currentDaysNumber > 7) {
        currentDaysNumber = 0;
    }

    var month = (isNaN(month) || month == null) ? moment.getMonth() : month;
    var year = (isNaN(year) || year == null) ? moment.getFullYear() : year;

    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var currentMonthAsNumber = moment.getMonth();

    var monthLength = GetDaysInMonth(month + 1, year);

    var MAXDAY = days.length;
    var counter = 1;

    var currentDay = moment.getDay();

    FillCalendar(month, year);

    function GetDaysInMonth(currentMonthAsNumber, year) {
        var monthLength = new Date(year, currentMonthAsNumber, 0).getDate()
        return monthLength;
    }

    function GetStartingDayOfWeek() {
        var firstDay = new Date((new Date().getFullYear(), 0, 1));
        var startingDay = firstDay.getDay();
        return startingDay;
    }
    function GetCurrentWeek() {
        prefixes = [1, 2, 3, 4, 5];

        return prefixes[0 | moment.getDate() / 7];
    }

    function weekAndDay() {
        days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            prefixes = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

        return prefixes[0 | date.getDate() / 7] + ' ' + days[date.getDay()];

    }

    function FillCalendar(month, year) {
        document.querySelector('.mounthYear__year').innerHTML = year;
        document.querySelector('.mounthYear__mounth').innerHTML = monthNames[month];
        console.log(monthNames[month]);
        for (var index = 0; index < days.length; index++) {
            document.querySelectorAll('.weekday__item')[index].innerHTML = days[index];
        }

        var startingDay = GetStartingDayOfWeek();

        // find number of days in month


        while (counter < monthLength) {

            FillCalendarByWeek('.week1__item', startingDay - 1, counter);

            FillCalendarByWeek('.week2__item', 0, counter);
            FillCalendarByWeek('.week3__item', 0, counter);
            FillCalendarByWeek('.week4__item', 0, counter);

            FillCalendarByWeek('.week5__item', 0, counter);
        }
    }

    function FillCalendarByWeek(week, startingDayOfWeek, startingDateForFill) {

        for (var index = startingDayOfWeek; index < MAXDAY; index++) {
            if (counter == moment.getDate()) {
                document.querySelectorAll(`${week}`)[index].className += " item--active"
            }
            document.querySelectorAll(`${week}`)[index].innerHTML = startingDateForFill;
            if (startingDateForFill >= monthLength) {
                break;
            }
            startingDateForFill++;
            counter++;
        }
    }

    return calendar;
})();
function PrevMonth() {
    console.log('prev');
}
function NextMonth() {
    console.log('next');
}
