(function(angular) {
	'use strict';

	/**
	 * MyTodoMvc Module
	 *
	 * 应用程序的主要的模块
	 */
	var app = angular.module('myApp', ['ngRoute']);

	//配置路由
	app.config(["$routeProvider", function($routeProvider) {

		$routeProvider.when('#/:status', {
				templateUrl: "main_tpl",
				controller: "WerController",
			})
			.otherwise({
				redirectTo: '/'
			})

	}]);

	// 	var app = angular.module('app', ['app.controllers', 'app.services', 'ngRoute']);
	//
	//   app.config(['$routeProvider', function($routeProvider) {
	//     $routeProvider
	//       .when('/:status?', {
	//         templateUrl: 'main_tmpl',
	//         controller: 'MainController'
	//       });
	//   }]);
	//
	// })(angular);


	// 注册一个主要的控制器
	app.controller("WerController", ["$scope", "$location", "$routeParams", function($scope, $location, $routeParams) {

		// 文本框需要一个模型
		$scope.text = '';

		$scope.todos = [];


		// 每一个任务的结构 { id: 1, text: '学习', completed: true }
		var todo1 = {
			id: 0.1,
			text: "吃饭",
			completed: false
		};
		var todo2 = {
			id: 0.22,
			text: "睡觉",
			completed: false
		};
		var todo3 = {
			id: 0.3,
			text: "打豆豆",
			completed: true
		};
		$scope.todos = [todo1, todo2, todo3];

		// 添加todo
		$scope.submitTodo = function() {
			if ($scope.text === '') {
				return;
			}
			var todo = {
				id: Math.random(),
				text: $scope.text,
				completed: false,
			};
			$scope.todos.push(todo);
			$scope.text = '';
		};

		// 删除已完成
		// $scope.remove = function(id) {
		// 	for (var i = 0; i < $scope.todos.length; i++) {
		// 		if ($scope.todos[i].id == id) {
		// 			$scope.todos.splice(i, 1);
		// 		}
		// 	}
		// 	return scope.tods;
		// };
		//
		$scope.clear = function() {
			var result = [];
			for (var i = 0; i < $scope.todos.length; i++) {
				if (!$scope.todos[i].completed) {
					result.push($scope.todos[i]);
				}
			}
			$scope.todos = result;
		};





		//双击编辑 抢座位的原理
		// var currentEditingId = -1;
		$scope.currentEditingId = -1;
		$scope.editing = function(id) {
			$scope.currentEditingId = id;
		};

		//
		$scope.save = function() {
			currentEditingId = -1;
		};

		//切换全部选择状态
		var now = true;
		$scope.toggleAll = function() {
			for (var i = 0; i < $scope.todos.length; i++) {
				$scope.todos[i].completed = now;
			}
			now = !now;
		};


		// 清除已完成
		// var activeList = []
		$scope.clear = function() {
			for (var i = 0; i < $scope.todos.length; i++) {
				if ($scope.todos[i].completed === 'true') {
					$scope.todos.splice(i, 1);
				}
			}
		};

		// 路由的方案
		// var status = $routeParams.status;
		//
		// switch (status) {
		// 	case "active":
		// 		$scope.selector = {
		// 			completed: false
		// 		};
		// 		break;
		// 	case "completed":
		// 		$scope.selector = {
		// 			completed: true
		// 		};
		// 		break;
		// 	default:
		// 		$scope.selector = {};
		// 		break;
		//
		// }
		switch ($routeParams.status) {
			case 'active':
				$scope.selector = {
					completed: false
				};
				break;
			case 'completed':
				$scope.selector = {
					completed: true
				};
				break;
			default:
				$scope.selector = {};
				break;
		}

		//  wtach监听方案

		// $scope.$location = $location;
		// $scope.$watch("$location.path()", function() {
		// 	{
		// 		//切换锚点
		// 		console.log($location.path());
		// 		switch ($location.path()) {
		// 			case "/active":
		// 				$scope.selector = {
		// 					completed: false
		// 				};
		// 				break;
		// 			case "/completed":
		// 				$scope.selector = {
		// 					completed: true
		// 				};
		// 				break;
		// 			default:
		// 				$scope.selector = {};
		// 				break;
		// 		}
		// 	}
		// });



	}]);




})(angular);
