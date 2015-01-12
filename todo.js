angular.module("Application", [])
    .controller("todoCtrl", function($scope) {
        
        //sets up placeholder todo
        $scope.todos = [{
            text: 'Create my first Todo',
            done: true
        }, {
            text: 'Replace batteries in smoke alarm',
            done: false
        }];

        //Counts total # of todos
        $scope.getTotalTodos = function () {
        	return $scope.todos.length;
        };

        //Adds new todos
        $scope.addTodo = function () {
        	$scope.todos.push({text:$scope.formTodoText, done:false})
        	$scope.formTodoText = '';
        };

        //Clears completed todos
        $scope.clearCompleted = function () {
        	$scope.todos = _.filter($scope.todos, function(todo) {
        		return !todo.done;
        	});
        };
    });
