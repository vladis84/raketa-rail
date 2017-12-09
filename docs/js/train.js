"use strict";

$(function () {
    moment.locale('ru');

    var departureCalendar = new Pikaday({
        field : $('#departure-date')[0],
        format : 'DD.MM.YYYY',
        firstDay : 1,
        minDate : new Date(),
        maxDate : moment().add(60, 'days').toDate(),
        numberOfMonths : 2,
        i18n : {
            months : moment.months(),
            weekdays : moment.weekdays(),
            weekdaysShort : moment.weekdaysShort()
        }
    });

    $('.js-departure-icon').click(function () {
        departureCalendar.show();
    });

    $('.js-swap').click(function () {
        var departure = document.querySelector('#departure');
        var departureCode = document.querySelector('#departure-code');
        var arrival = document.querySelector('#arrival');
        var arrivalCode = document.querySelector('#arrival-code');

        var itinerary = {
            departureName : departure.value,
            departureCode : departureCode.value,
            arrivalName : arrival.value,
            arrivalCode : arrivalCode.value
        };

        departure.value = itinerary.arrivalName;
        departureCode.value = itinerary.arrivalCode;
        arrival.value = itinerary.departureName;
        arrivalCode.value = itinerary.departureCode;
    });

    $('.js-interval-type').click(function () {
        var $intervalType = $('#interval-type');
        var intervalTypeList = JSON.parse($(this).attr('data-interval-list'));
        var currentInterval = $intervalType.val();

        if (currentInterval == 'departure') {
            $intervalType.val('arrival');
            $(this).text(intervalTypeList.arrival);
        }
        else {
            $intervalType.val('departure');
            $(this).text(intervalTypeList.departure);
        }
    }).click();
});


