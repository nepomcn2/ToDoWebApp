angular.module("todoListApp", []) //what we name our app and the second parameter, empty array
//second parameter provides unknowns

.controller('mainCtrl', function($scope) {
    $scope.helloWorld = function() {
        console.log("Hello there! This is the helloWorld controller function, in the mainCtrl!");
    }
 <!-- scope refers to where the controller can act, we input it into the list div, so that is the scope -->

    $scope.todos = [                        <!-- todos is the variable -->
        {"name": "Adopt two Maine Coons"},
        {"name": "Name them appropriately"},
        {"name": "Give up all semblance of an independent life"},
        {"name": "Spend all money on cat items"},
        {"name": "Consider life choice"},
        {"name": "Adopt dogs"}
    ]

    $scope.learningNgChange = function() {
        console.log("an input changed!")
    }
})


.controller('coolCtrl', function($scope) {
    $scope.whoAmI = function() {
        console.log("hello there, this is the coolCtrl function!");
    }

    <!-- the helloWorld below will override the interited helloWorld from mainCtrl -->
    $scope.helloWorld = function() {
        console.log("this is not the main controller");
    }
})

.controller('imASibling', function($scope) {
    $scope.foobar = "Well well well";
    //etc
});
