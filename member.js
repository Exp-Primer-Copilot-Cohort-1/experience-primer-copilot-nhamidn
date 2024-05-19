function skillsMember() {
  return {
    restrict: 'E',
    scope: {
      member: '='
    },
    templateUrl: 'member.html',
    link: function(scope, element, attrs) {
      scope.skills = ['JavaScript', 'HTML', 'CSS'];
    }
  };
}