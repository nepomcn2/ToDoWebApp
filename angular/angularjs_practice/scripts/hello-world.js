angular.module('todoListApp')
//we won't add a blank array because we want this to look at existing app, not create new module by having additional parameter
//since we call on app.js with 'todoListapp', app.js must loaded before hello-world.js in index.html
.directive('helloWorld', function() { //first parameter = name of directive, second is call-back function, returning object
    return {
        template: "This is the hello world directive!", //template key
        restrict: "E" //restrict tells how directive should be used: restricts template to be used as an element only
    }
})
