(function () {

  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);



  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var itemAdder = this;


    itemAdder.toBuy = ShoppingListCheckOffService.getFoodToBuy();

    itemAdder.boughtFood = function (itemIndex) {

      ShoppingListCheckOffService.boughtFood(itemIndex);

      itemAdder.everythingIsBought = ShoppingListCheckOffService.getFoodBought1();
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {

    var showList = this;
    showList.bought = ShoppingListCheckOffService.getFoodBought();

  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuy = [
      { name: "milk", quantity: 4 },
      { name: "chips", quantity: 6 },
      { name: "apples", quantity: 10 },
      { name: "chocolate", quantity: 7 },
      { name: "water", quantity: 5 }
    ];



    var bought = [];
    var everythingIsBought = false;

    service.boughtFood = function (itemIdex) {

      var item = {
        name: toBuy[itemIdex].name,
        quantity: toBuy[itemIdex].quantity
      };

      bought.push(item);
      toBuy.splice(itemIdex, 1);

      if(toBuy.length <=0 ) {

        everythingIsBought = true;

      }
    };


    service.getFoodToBuy = function () {
      return toBuy;
    };

    service.getFoodBought = function () {

      return bought;
    };

    service.getFoodBought1 = function () {

      return everythingIsBought;
    };

  }

})();
