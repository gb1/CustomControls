sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("shambles.demo.controller.Master", {

        onInit: function () {
            var datePicker = this.getView().byId("scDateTime");
            datePicker.setDateDisplayType("short")
          }

    });
});
