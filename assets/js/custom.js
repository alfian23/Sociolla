$(document).ready(function (){
    $("#province").select2();
    $("#devision").select2();
});


//AngularJS

var contactPost = angular.module("contact",[]);
contactPost.controller("contactCtrl", function ($scope, $http) {
    $scope.showOne = function () {
        $scope.one = false;
        $scope.two = false;
    };
    $scope.submitComp = function () {
        $http.post("server_comp.php", {data: $scope.contactText}).success(function (data) {
            data : $scope.data;
            console.log(data);
            $scope.one = true;
            $scope.two = false;
            $scope.terkirim = data;
            $scope.contactText = null;
        }).error(function () {
            $scope.one = false;
            $scope.two = true;
            $scope.terkirim = "Data gagal terkirim ke server ";
        });
    };
    
    $scope.resetComp = function (){
        $scope.contactText = "";
                $scope.one = false;
        $scope.two = false;
    };
    
    $scope.askSubmit = function (){
        $scope.one          = false;
        $scope.two          = false;
        $scope.askSucces    = false;
        $scope.askFailed    = false;
        $http.post("server_ask.php",{data : $scope.askText}).success(function (data){
            data    : $scope.data;
            $scope.askSucces = true;
            $scope.askTerkirim = data;
            $scope.askText = null;
        }).error(function (){
            $scope.askSucces    = false;
            $scope.askFailed    = true;
        });
    };
});