function FirstCtrl ($scope, $firebase){
    var ref = new Firebase ('https://chatteapp.firebaseio.com/');
    $scope.messages = $firebase(ref);
    
    $scope.addMessage = function(e){
        if (e.KeyCode != 13) return,
            $scope.messages.$add({from: $scope.name, body: $scope.msg});
            $scope.messages = '';
        };
    }
