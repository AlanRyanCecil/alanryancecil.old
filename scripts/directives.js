angular.module('mainApp')

    .directive('none', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'style/circle.html',
            link: function (scope, elem, attr) {
                
            }
        }
    })