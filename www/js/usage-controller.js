angular.module('starter')

.controller('UsageCtrl', function($scope, $stateParams, Chats) {
  // $scope.chat = Chats.get($stateParams.chatId);

    // code to create a data set that looks like data: [[5, 2], [6, 3], [8, 2]]
    var windDirection, windSpeed, windDirectionJSON, windSpeedJSON, windDataJSON;
    windDirection = "[0,15,30,45,60,75,90,105,120,135,150,165,180,195,210,225,240,255,270,285,300,315,330,345,360]";
    windSpeed = "[3,2,1,0,0,3,6,9,12,11,12,10,9,10,8,10,2,4,6,8,10,12,10,8]";
    windDirectionJSON = JSON.parse(windDirection);
    windSpeedJSON = JSON.parse(windSpeed);
    windDataJSON = [];
    for (i = 0; i < windDirectionJSON.length; i++) {
        windDataJSON.push([ windDirectionJSON[i], windSpeedJSON[i] ]);
    }
    windDataJSON.sort(function(a,b) { return a[0] - b[0]; });
    $scope.data = windDataJSON;
});
