angular.module('sampleapp', [])

.controller('main', function($scope) {
   $scope.data = {text: ''};
})

.directive('textareaCounter', function() {
   return {
      restrict: 'E',
      templateUrl: 'textarea-counter.html',
      require: 'ngModel',
      scope: {
         text: '=ngModel'
      },
      link: function(scope, element, attrs, ngModel) {
         scope.maxLength = parseInt(attrs.maxLength, 10);
         scope.model = ngModel;

         scope.model.$validators.maxlength = function(modelValue, viewValue) {
            return (scope.text.length <= scope.maxLength);
         }
      }
   }
})
