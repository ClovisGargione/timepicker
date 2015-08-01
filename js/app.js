/**
 * Created by c_r_s_000 on 01/08/2015.
 */
var app = angular.module('app', []);

app.controller('appController',function($scope){
$scope.time = null;

});


app.controller('timepickerController', function($scope, $element){
    $scope.mostraFrame = false;
    $scope.hora = 000;
    $scope.minutos = 000;
    $scope.time = "";

    $scope.abreFrame = function(){

        if($scope.time != "" && !$scope.mostraFrame) {
            $scope.hora = parseInt($scope.time.substring(0, 2));
            $scope.minutos = parseInt($scope.time.substring(3, 5));
        }

        $scope.mostraFrame = true;

    };

    $scope.fechaFrame = function(){

        if($scope.hora<10 && $scope.mostraFrame){
            $scope.hora = "0"+$scope.hora;
        }
        if($scope.minutos<10 && $scope.mostraFrame){
            $scope.minutos = "0"+$scope.minutos;

        }
        if($scope.mostraFrame) {
            $scope.time = "";
            $scope.time = $scope.hora + ":" + $scope.minutos;
        }
        $scope.mostraFrame = false;
    };

    $scope.inserirMascara = function(){
        $scope.time = $scope.time.replace(/[^0-9]+/g,"");
        if($scope.time.length  > 2){
            $scope.time = $scope.time.substring(0,2)+":"+$scope.time.substring(2,4);
        }


        if($scope.time.length === 2 ){
          var val = parseInt($scope.time.substring(0,1));
            if(val == 2){
                $scope.time = $scope.time.replace(/[^0-3]+/g, "");
            }
            if(val < 2){
                $scope.time = $scope.time.replace(/[^0-9]+/g, "");
            }


        }


        if($scope.time.length === 1) {
            $scope.time = $scope.time.replace(/[^0-2]+/g, "");
        }

        if($scope.time.length === 4) {
           var pos =   parseInt($scope.time.substring(3,5));
            if(pos > 5){
                $scope.time = $scope.time.replace(/[^0-5]+/g, "");
            }
        }

    };

    $scope.maisHoras = function(){
        if( $scope.hora < 23){
            $scope.hora =  $scope.hora + 1;

        }
    };

    $scope.menosHoras = function(){
        if( $scope.hora > 0){
            $scope.hora =  $scope.hora - 1;

        }
    };

    $scope.maisMinutos = function(){
        if( $scope.minutos < 59){
            $scope.minutos =  $scope.minutos + 1;

        }
    };

    $scope.menosMinutos = function(){
        if( $scope.minutos > 0){
            $scope.minutos =  $scope.minutos - 1;

        }
    };



});

app.filter('counterValue', function(){
    return function(value){
       var retorno = "";
        var valueInt = parseInt(value);
            if(value => 0 && value < 10){
            retorno = "0"+ valueInt;

            }
        if(value > 9){
            var val = valueInt;
             retorno = valueInt;
        }

        return retorno;
    }
});


app.directive('timepicker', function(){
    return{
        restrict:'AE',
        scope:{
            time:"="
        },
        link: function(scope, element, attrs, ctrl){

        },
        templateUrl:"template/timepicker.html",
        controller:"timepickerController"

    };
});