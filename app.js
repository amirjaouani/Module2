(function (){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy= this;

  toBuy.itemName = "";
  toBuy.itemQuantity = "";

  toBuy.itemList = [
    {itemName : 'milk', itemQuantity : 3},
    {itemName : 'chips', itemQuantity : 20},
    {itemName : 'apples', itemQuantity : 10}
  ];

  toBuy.addItemToBoughtList = function (item) {
    ShoppingListCheckOffService.addItemToBoughtList(item.itemName, item.itemQuantity);
  };

  toBuy.removeItem = function (itemIndex) {
      console.log(itemIndex);
      ShoppingListCheckOffService.removeItem(itemIndex);
  };

  }


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  bought.name="";
  bought.items = ShoppingListCheckOffService.getItems();
}

function ShoppingListCheckOffService() {
  var service = this;


  var items = [];

  service.addItemToBoughtList = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };


  service.removeItem = function (itemIdex) {
      items.splice(itemIdex, 1);
    };

  service.getItems = function () {
    return items;
  };
}

})();
