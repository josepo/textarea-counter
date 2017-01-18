angular.module('sampleapp', [])

.directive('textareaCounter', function() {
   return {
      restrict: 'E',
      templateUrl: 'textarea-counter.html'
   }
})
