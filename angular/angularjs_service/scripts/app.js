angular.module("todoListApp", [])

.controller('mainCtrl', function($scope, dataService) {
    $scope.helloConsole = dataService.helloConsole


    $scope.todos = [
        {"name": "Adopt two Maine Coons"},
        {"name": "Name them appropriately"},
        {"name": "Give up all semblance of an independent life"},
        {"name": "Consider life choices"},
        {"name": "Adopt dogs"},
        {"name": "Invite Kenny over"}
    ]
})
.service('dataService', function() {
    this.helloConsole = function() {
        console.log('This is the hello console service!')
    }
})
