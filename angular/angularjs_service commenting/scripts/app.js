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
    this.saveConsole = function() {
        console.log('You clicked save and nothing happened!')
    }
    this.deleteConsole = function() {
        console.log('The delete button has no power here!')
    }
})
