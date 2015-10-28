/**
 * Created by chenyao on 15/10/26.
 */
angular.module("sportsStore")
.controller("cartSummaryCtrl", function ($scope, cart) {
        $scope.cartData = cart.getProducts();

        $scope.total = function(){
            var total = 0;
            for(var i= 0,len = $scope.cartData.length;i<len;i++){
                total += $scope.cartData[i].count * $scope.cartData[i].price;
            }
            return total;
        }

        $scope.remove = function(id){
            cart.removeProduct(id);
        }
    })