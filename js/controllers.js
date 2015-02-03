var sha1App = angular.module('sha1App', []);

sha1App.controller('Sha1AppCtrl', function ($scope) {
  $scope.message = '';
  $scope.sha1='';
  $scope.sha256='';
  $scope.sha512='';
  $scope.md5='';
  $scope.change = function() {
        $scope.sha1=CryptoJS.SHA1($scope.message);
        $scope.sha256=CryptoJS.SHA256($scope.message);
        $scope.sha512=CryptoJS.SHA512($scope.message);
        $scope.md5=CryptoJS.MD5($scope.message);
        $("#qrcode" ).empty();
        new QRCode(document.getElementById("qrcode"),$scope.message);
      };
});
