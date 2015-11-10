var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function ($scope, $q, homeService, teamService) {
    var promise1 = teamService.getTeamData('utahjazz');
    var promise2 = teamService.getTeamData('losangeleslakers');
    var promise3 = teamService.getTeamData('miamiheat');

    $q.all([promise1, promise2, promise3]).then(function(data){
      $scope.jazz = ['Utah Jazz', 'images/jazz-logo.png', data[0]];
      $scope.lakers = ['Los Angeles Lakers', 'images/lakers-logo.png', data[1]];
      $scope.heat = ['Miami Heat', 'images/heat-logo.png', data[2]];
    })
});
