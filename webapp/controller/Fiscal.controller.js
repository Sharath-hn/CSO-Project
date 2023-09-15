sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/routing/History"
  ], function(Controller, MessageToast, History) {
    "use strict";
  
    return Controller.extend("your.controller.Fiscal", {
      onSubmit: function() {
        // Get the selected fiscal year
        var selectedYear = this.getView().byId("fiscalYearSelect").getSelectedKey();
  
        // Check if a fiscal year is selected
        if (!selectedYear) {
          MessageToast.show("Please select a fiscal year.");
          return;
        }
  
        // Construct the target route based on the selected fiscal year
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("viewPage", {
          fiscalYear: selectedYear
        });
      }
    });
  });
  