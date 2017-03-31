function Calendar(month, year) {
    var _month;
    var _year;

    _month = month;
    _year = year;

    this.getMonth = function () {
        return _month;
    }
    this.getYear = function () {
        return _year;
    }

    this.setMonth = function (month) {
        _month = month;
    }

    this.setYear = function (year) {
        _year = year;
    }

    this.getMonthName = function () {
        var monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthList[_month];
    }

    this.getWeekday = function (localisation) {
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return days;
    }

    this.getDaysInMonth = function () {
        var date = new Date(_year, _month, 1);
        var days = [];
        while (date.getMonth() === _month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    }

    this.getStartingDayOfWeek = function () {
        var firstDay = new Date(_year, _month, 1).getDay();
        return firstDay;
    }
}