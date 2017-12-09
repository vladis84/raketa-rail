(function () {
    function sortOffers (compareFunction) {
        var offers = $.makeArray($('.js-train'));

        offers.sort(compareFunction);

        $('.js-sort-content').html($(offers));
    };


    var compareDescFunction = function (sortAttribute) {

        return function (a, b) {
            var
                aValue = parseInt($(a).data(sortAttribute)),
                bValue = parseInt($(b).data(sortAttribute));

            if (aValue < bValue) {
                return -1;
            }

            if (aValue > bValue) {
                return 1;
            }
            // a должно быть равным b
            return 0;
        }
    };

    var compareAscFunction = function (sortAttribute) {
        return function (a, b) {
            var
                aValue = parseInt($(a).data(sortAttribute)),
                bValue = parseInt($(b).data(sortAttribute));

            if (aValue < bValue) {
                return 1;
            }

            if (aValue > bValue) {
                return -1;
            }

            // a должно быть равным b
            return 0;
        }
    };

    $(document).ready(function () {
        $('.rail-table .sortable').click(function () {
            var
                $sortTitle          = $(this),
                $sortIcon           = $sortTitle.find('i.fa'),
                sortAttribute       = $sortTitle.data('sort-attribute-name'),
                prevSortedAttribute = $sortTitle.parent().data('sorted-by');

            var orderBy = $sortIcon.attr('class').replace(/fa\srkt-sort-*/, '');

            if (prevSortedAttribute != sortAttribute) {
                $('.js-train-list i.fa').removeAttr('class').addClass('fa rkt-sort');
            }

            if (!orderBy || orderBy == 'desc') {
                sortOffers(compareAscFunction(sortAttribute));
                $sortIcon.removeAttr('class').addClass('fa rkt-sort-asc');
            }
            else {
                sortOffers(compareDescFunction(sortAttribute));
                $sortIcon.removeAttr('class').addClass('fa rkt-sort-desc');
            }

        });
    });
})();


