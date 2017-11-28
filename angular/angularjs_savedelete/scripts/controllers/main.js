'use strict'; //makes sure js interpreter interprets in "strict mode"

angular.module('todoListApp') //removing blank [] allows this to add to module, NOT make a new one that would overwrite
.controller('mainCtrl', function($scope, dataService) {

    $scope.addTodo = function() {
        var todo = {name: "This is a new todo."};
        $scope.todos.push(todo); //pushes new variable todo into the todos array
    };

    $scope.helloWorld = dataService.helloWorld;

    dataService.getTodos(function(response) {
        console.log(response.data)
        $scope.todos = response.data
    });

    $scope.deleteTodo = function(todo, $index) {
        dataService.deleteTodo(todo);
        $scope.todos.splice($index, 1); //splice current index in array (current todo)
    };

    $scope.saveTodo = function(todo) {
        dataService.saveTodo(todo);
    };
})
