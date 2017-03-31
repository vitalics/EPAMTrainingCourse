function DOMCreator() {

    this.calendarCreator = function (monthLength) {
        calendar = document.querySelector('.calendar');
        dataPicker = document.querySelector('.datapicker');

        var calendarMonth = createDivAndAppend(calendar, 'calendar-mounth mounth');

        calendarMonth = document.querySelector('.calendar-mounth');

        var monthPrev = createDivAndAppend(calendarMonth, 'mounth__prev');
        var monthYear = createDivAndAppend(calendarMonth, 'mounth-mounthYear');
        var monthNext = createDivAndAppend(calendarMonth, 'mounth__next');

        var monthYear = document.querySelector('.mounth-mounthYear');

        var monthYear_month = createDivAndAppend(monthYear, 'mounthYear__mounth');
        var monthYear_year = createDivAndAppend(monthYear, 'mounthYear__year');

        var calendarWeekday = createDivAndAppend(calendar, 'calendar-weekday weekday');

        calendarWeekday = document.querySelector('.calendar-weekday');

        var calendarWeek = createDivAndAppend(calendar, 'calendar-week week');
        calendarWeek = document.querySelector('.calendar-week');

        var week__item;
        var weekdayItem;

        for (var index = 0; index < 7; index++) {
            weekdayItem = createDivAndAppend(calendarWeekday, 'weekday__item');
        }
        for (var index = 0; index < monthLength; index++) {
            week_item = createDivAndAppend(calendarWeek, 'week__item item');
        }
    }

    function createDivAndAppend(parent, className) {
        var DIV = document.createElement('div');
        DIV.className = `${className}`;
        return parent.appendChild(DIV);
    }
}