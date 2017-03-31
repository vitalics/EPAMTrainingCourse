function CalendarRender(month, year) {

    this.fillYear = function () {
        document.querySelector('.mounthYear__year').innerHTML = year;
    }
    this.fillMonth = function () {
        document.querySelector('.mounthYear__mounth').innerHTML = month;
    }
    this.fillWeekDays = function (days) {
        for (var index = 0; index < days.length; index++) {
            document.querySelectorAll('.weekday__item')[index].innerHTML = days[index];
        }
    }
    this.fillDays = function (startingDay, days) {
        var counter = 1;
        console.log(days);
        for (var index = startingDay; index < days + startingDay; index++) {
            document.querySelectorAll('.week__item')[counter - 1].innerHTML = counter;
            counter++;
        }
    }

    this.RenderEvents = function () { }
}