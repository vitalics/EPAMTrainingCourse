var calendar = function () {
    var moment;
    var MAXDAY;
    var month;
    var year;
    var day;
    var monthNames;
    var days;
    var monthLength;
    var dayCounter;
    var isHaveWeek6 = false;
    var isActiveItem = false;
    var activeItem;

    /* Render functions */
    Init();
    RenderHtml();
    FillCalendar(month, year);
    CreateEvents();

    function Init() {
        moment = new Date();

        days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        day = moment.getDate();
        var currentDaysNumber = moment.getDay() + 1;
        if (currentDaysNumber > 7) {
            currentDaysNumber = 0;
        }

        month = (isNaN(month) || month == null) ? moment.getMonth() : month;
        year = (isNaN(year) || year == null) ? moment.getFullYear() : year;

        monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        monthLength = GetDaysInMonth(month, year);

        MAXDAY = days.length;
    }

    function RenderHtml() {
        var calendar = document.querySelector('.calendar');
        var calendarMonth = CreateDivAndAppend(calendar, 'calendar-mounth mounth');

        calendarMonth = document.querySelector('.calendar-mounth');

        var monthPrev = CreateDivAndAppend(calendarMonth, 'mounth__prev');
        var monthYear = CreateDivAndAppend(calendarMonth, 'mounth-mounthYear');
        var monthNext = CreateDivAndAppend(calendarMonth, 'mounth__next');

        var monthYear = document.querySelector('.mounth-mounthYear');

        var monthYear_month = CreateDivAndAppend(monthYear, 'mounthYear__mounth');
        var monthYear_year = CreateDivAndAppend(monthYear, 'mounthYear__year');

        var calendarWeekday = CreateDivAndAppend(calendar, 'calendar-weekday weekday');

        calendarWeekday = document.querySelector('.calendar-weekday');

        var calendarWeek = CreateDivAndAppend(calendar, 'calendar-week week');
        calendarWeek = document.querySelector('.calendar-week');

        var weekdayItem;
        var week1 = CreateDivAndAppend(calendarWeek, 'week1 week--days');
        week1 = document.querySelector('.week1');

        var week2 = CreateDivAndAppend(calendarWeek, 'week2 week--days');
        week2 = document.querySelector('.week2');

        var week3 = CreateDivAndAppend(calendarWeek, 'week3 week--days');
        week3 = document.querySelector('.week3');

        var week4 = CreateDivAndAppend(calendarWeek, 'week4 week--days');
        week4 = document.querySelector('.week4');

        var week5 = CreateDivAndAppend(calendarWeek, 'week5 week--days');
        week5 = document.querySelector('.week5');

        var week6 = CreateDivAndAppend(calendarWeek, 'week6 week--days');
        week6 = document.querySelector('.week6');

        var week_item;

        for (var index = 0; index < MAXDAY; index++) {
            weekdayItem = CreateDivAndAppend(calendarWeekday, 'weekday__item');
            week_item = CreateDivAndAppend(week1, 'week1__item item');
            week_item = CreateDivAndAppend(week2, 'week2__item item');
            week_item = CreateDivAndAppend(week3, 'week3__item item');
            week_item = CreateDivAndAppend(week4, 'week4__item item');
            week_item = CreateDivAndAppend(week5, 'week5__item item');
            week_item = CreateDivAndAppend(week6, 'week6__item item');
        }
    }

    function CreateDivAndAppend(parent, className) {
        var DIV = document.createElement('div');
        DIV.className = `${className}`;
        return parent.appendChild(DIV);
    }

    function ClearCalendarByWeek(week) {
        for (var index = 0; index < MAXDAY; index++) {
            document.querySelectorAll(`${week}`)[index].innerHTML = '';
            dayCounter++;
        }
    }

    function ClearCalendar() {
        document.querySelector('.mounthYear__year').innerHTML = '';
        document.querySelector('.mounthYear__mounth').innerHTML = '';
        dayCounter = 1;

        while (dayCounter < monthLength) {
            ClearCalendarByWeek('.week1__item');
            ClearCalendarByWeek('.week2__item');
            ClearCalendarByWeek('.week3__item');
            ClearCalendarByWeek('.week4__item');
            ClearCalendarByWeek('.week5__item');
            ClearCalendarByWeek('.week6__item');
        }
        dayCounter = 1;
    }

    function GetDaysInMonth(currentMonthAsNumber, year) {
        var monthLength = new Date(year, currentMonthAsNumber, 0).getDate()
        return monthLength;
    }

    function GetStartingDayOfWeek(month, year) {
        var firstDay = new Date(year, month, 1).getDay();
        return firstDay;
    }



    function FillCalendar(month, year) {
        document.querySelector('.mounthYear__year').innerHTML = year;
        document.querySelector('.mounthYear__mounth').innerHTML = monthNames[month];
        for (var index = 0; index < days.length; index++) {
            document.querySelectorAll('.weekday__item')[index].innerHTML = days[index];
        }

        var startingDay = GetStartingDayOfWeek(month, year);

        dayCounter = 1;
        // find number of days in month
        monthLength = GetDaysInMonth(month + 1, year);

        while (dayCounter < monthLength) {

            FillCalendarByWeek('.week1__item', startingDay, dayCounter);
            FillCalendarByWeek('.week2__item', 0, dayCounter);
            FillCalendarByWeek('.week3__item', 0, dayCounter);
            FillCalendarByWeek('.week4__item', 0, dayCounter);
            FillCalendarByWeek('.week5__item', 0, dayCounter);
            FillCalendarByWeek('.week6__item', 0, dayCounter);
        }
        IsHaveWeek6(month, year);
        dayCounter = 1;
    }
    String.prototype.replaceAll = function (search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };

    function FillCalendarByWeek(week, startingDayOfWeek, startingDateForFill) {

        for (var index = startingDayOfWeek; index < MAXDAY; index++) {
            if (dayCounter == moment.getDate()) {
                //document.querySelectorAll(`${week}`)[index].className += " item--active"
            }
            if (startingDateForFill > monthLength) {
                break;
            }
            document.querySelectorAll(`${week}`)[index].innerHTML = startingDateForFill;

            startingDateForFill++;
            dayCounter++;
        }
    }
    function IsHaveWeek6(month, year) {
        var isHaveWeek6 = false;
        var week6 = document.querySelector('.week6');
        monthLength = GetDaysInMonth(month + 1, year);
        var startingDay = GetStartingDayOfWeek(month, year);
        if ((startingDay == 7 && (monthLength == 30 || monthLength == 31)) || (startingDay == 6 && (monthLength == 30 || monthLength == 31))) {
            if (week6.className.includes('week6--hidden')) {
                week6.className = week6.className.replaceAll('week6--hidden', '');
            }
            isHaveWeek6 = true;
            return isHaveWeek6
        }
        else {
            week6.className += ' week6--hidden';
            isHaveWeek6 = false;
            return isHaveWeek6;
        }
    }

    function IsHaveStringInSubstring(string, substring) {
        if (string.indexOf(substring) !== -1) {
            return true;
        }
        else {
            return false;
        }
    }

    function CreateEvents() {
        var monthNext = document.querySelector('.mounth__next').addEventListener('click', NextMonth);
        var monthPrev = document.querySelector('.mounth__prev').addEventListener('click', PrevMonth);
        for (var index = 1; index < MAXDAY; index++) {
            var week = document.querySelectorAll(`.week${index}`)[0].addEventListener('click', СhoosenDay);
        }

        function NextMonth(event) {
            if (month >= 11) {
                month = 0;
                ClearCalendar();
                FillCalendar(month, ++year);
            }
            else {
                ClearCalendar();
                FillCalendar(++month, year);
            }
        }
        function PrevMonth(event) {
            if (month <= 0) {
                month = 11;
                ClearCalendar();
                FillCalendar(month, --year);
            }
            else {
                ClearCalendar();
                FillCalendar(--month, year);
            }
        }
        function СhoosenDay(event) {
            var target = event.target;
            day = target.innerHTML;
            if (isActiveItem) {
                activeItem.className = activeItem.className.replaceAll(' item--active', ' ');
                target.className += ' item--active';
            }
            if (day == '' && IsHaveStringInSubstring(target.className, "week1__item")) {
                isActiveItem = true;
                target.className = target.className.replaceAll('item--active', '');

                PrevMonth();
            }
            if (day == '' && (IsHaveStringInSubstring(target.className, "week5__item") || IsHaveStringInSubstring(target.className, "week6__item"))) {
                isActiveItem = true;
                target.className = target.className.replaceAll('item--active', '');

                NextMonth();
            }
            if (!isActiveItem && IsHaveStringInSubstring(target.className, ' item--active')) {
                isActiveItem = false;
                target.className = target.className.replaceAll('item--active', '');
            }
            else {
                isActiveItem = true;
                if (!IsHaveStringInSubstring(target.className, 'item--active')) {
                    target.className += ' item--active';


                }
                activeItem = target;
            }
            dataPicker.value = month + 1 + '/' + target.innerHTML + '/' + year;
            return month + 1 + '/' + target.innerHTML + '/' + year;
        }
    }

};
calendar();
var dataPicker = document.querySelector('.datapicker');
