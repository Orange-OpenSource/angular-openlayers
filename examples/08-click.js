angular.module('example', [aol.moduleName, 'hljs']).controller('ExempleClick', function (aol, $scope) {
   var self = this;

   $scope.myAolModel = new aol.models.Map();

   $scope.myAolModel.callbacks['singleclick'] = function (pEvt) {
      //test if ctrl key is used
      if (!pEvt.originalEvent.ctrlKey) {
         //Get coordinates from corresponding event.
         var lCoordinates = pEvt.coordinate;

         console.log("singleclick catched on aol.Model.Map() at lCoordinates=", lCoordinates, ", run alert on each corresponding Feature");

         //search Feature available at this point.
         var lOlMap = pEvt.map;
         lOlMap.forEachFeatureAtPixel(pEvt.pixel, function (pFeature, pLayer) {
            console.log("alert is triggered with content : \"singleclick catched on with satanic properties : pFeature.values_.properties=666\"");
            alert("singleclick catched on with satanic properties : pFeature.values_.properties=" + pFeature.values_.properties);
         });
      } else {
         console.log("ctrl + singleclick catched on aol.Model.Map()");
      }
   };

});