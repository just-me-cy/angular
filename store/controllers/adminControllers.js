/**
 * Created by chenyao on 15/10/27.
 */
angular.module("sportsStoreAdmin")
    .constant("authUrl","http://localhost:5500/users/login")
    .constant("ordersUrl","http://localhost:5500/order")
.controller("authCtrl", function ($scope, $http, $location, authUrl) {
        $scope.authenticate = function (usr, pass) {
            $http.post(authUrl,{
                username:usr,
                password:pass
            },{
                withCredentials:true
            }).success(function (data) {
                $location.path("/main");
            }).error(function (error) {
                $scope.authenticationError = error;
            })
        }
    })
.controller("mainCtrl", function ($scope) {
        $scope.screens = ["Products","Orders"];

        $scope.current = $scope.screens[0];

        $scope.setScreen = function (index) {
            $scope.current = $scope.screens[index];
        }

        $scope.getScreen = function(){
            return $scope.current == "Products"? "/views/adminProducts.html" : "/views/adminOrders.html";
        }
    })
.controller("ordersCtrl",function($scope,$http,ordersUrl){
        $http.get(ordersUrl,{withCredentials:true})
            .success(function(data){
            $scope.orders = data;
            })
            .error(function (error) {
                $scope.error = error;
            })

        $scope.selectedOrder;

        $scope.selectOrder = function(order){
            $scope.selectedOrder = order;
        }

        $scope.calcTotal= function (order) {
            var total = 0;
            for(var i= 0,len=order.products.length;i<len;i++){
                total += order.products[i].count * order.products[i].price;
            }
            return total;
        }
    })