/**
 * Created by gmeszaros on 8/5/2014.
 */
angular.module('FlowDesigner', ['Svg.Directive', 'Hammer.Directive', 'Common.Directive'])
    .constant("types", {
        text: 'Text',
        bool: 'Bool',
        int: 'Number'
    })
    .constant("status", {
        notrun: 'notrun',
        running: 'running',
        failed: 'failed',
        succeeded: 'succeeded'
    })
    .constant("direction", {
        notrun: 'input',
        running: 'output'
    })
    .directive('designer', ["$timeout", function ($timeout) {
        return{
            restrict: "AE",
            transclude: false,
            replace: true,
            templateUrl: 'templates/designer.tmpl.html',
            scope: {
                autoSize: '=',
                items: '=',
                selectedChanged: '&'
            },
            controller: 'designerCtrl',
            link: function ($scope, element, attrs) {
                $scope.size = {
                    width: element.width(),
                    height: element.height()
                };
            }
        };
    }]);