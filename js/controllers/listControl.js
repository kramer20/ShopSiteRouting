(function() {
    'use strict';
    
    angular
    .module('shopSite')
    //function to create new item and push to list
    .controller('listControl', function bikeItem() {
       var vm = this;

       vm.testing = "432423 234 423 423 4234 23";

       var teeShirt = {
       	name: "shirt1",
       	price:200,
       }

       var teeShirt2 = {
       	name:"shirt2",
       	price:200,
       }

       vm.data = [teeShirt,teeShirt2];
      
    })
})();