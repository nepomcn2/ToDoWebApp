'use strict';

angular.module("todoListApp")
.service('dataService', function($http) {
    this.helloWorld = function() {
        console.log("This is the data service's method!!")
    }

    this.getTodos = function(callback) {
        $http.get('scripts/mock/todos.json')
        .then(callback)
    }

    //below, delete to do is a parameter
        this.deleteTodo = function(todo) {
            console.log("The " + todo.name + " has been exterminated!")
            //will DELETE to database
        }

    //below, save to do is a parameter
        this.saveTodo = function(todo) {
            console.log("The " + todo.name + " todo has been saved by their lord and savior JC")
            //will SAVE/POST to database
        }
})
