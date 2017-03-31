// calendar();
var moment = new Date();

var calendar2 = new Calendar(moment.getMonth(), moment.getFullYear());
console.log(calendar2.getDaysInMonth().length);
domCreator = new DOMCreator();
domCreator.calendarCreator(calendar2.getDaysInMonth() + 1);

calendarRender = new CalendarRender(calendar2.getMonthName(), calendar2.getYear());
calendarRender.fillYear();
calendarRender.fillMonth();

calendarRender.fillWeekDays(calendar2.getWeekday());
calendarRender.fillDays(calendar2.getStartingDayOfWeek(), calendar2.getDaysInMonth().length);