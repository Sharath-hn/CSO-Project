sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/m/Table",
  "sap/m/Text",
  "sap/m/Input",
  "sap/m/MessageToast",
  "sap/m/OverflowToolbar",
  "sap/m/OverflowToolbarButton",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageBox",


], function (Controller, Filter, MessageBox, Table, MessageToast, Text, Input, OverflowToolbar, JSONModel, OverflowToolbarButton,) {
  "use strict";
  var that;
  return Controller.extend("com.brsr.controller.View1", {
    onInit: function () {

      // In your controller file (e.g., MyController.controller.js)






      that = this;
      this.toggleVBoxVisibility(false);


      var oYearModel = new JSONModel({
        years: [
          { key: "2023", text: "2023" },
          { key: "2024", text: "2024" },
          { key: "2026", text: "2026" },
          { key: "2030", text: "2030" }
        ]
      });
      this.getView().setModel(oYearModel, "yearModel");

      // Wait for the view to be fully initialized
      this.getView().attachAfterInit(function () {
        // Get the Year dropdown
        var oYearDropdown = this.getView().byId("yearDropdown");

        // Check if the control exists before attaching the event handler
        if (oYearDropdown) {
          oYearDropdown.attachChange(this.onYearSelectChange.bind(this));
        }
      }.bind(this));
    },


    toggleVBoxVisibility: function (isVisible) {
      var oVBox = this.getView().byId("myVBox");
      oVBox.setVisible(isVisible);

    },
    onSubmitFilter: function (oEvent) {
      var oYearDropdown = this.getView().byId("yearDropdown");
      var selectedYear = oYearDropdown.getSelectedKey();

      if (selectedYear) {
        // Year is selected, show the VBox and its contents
        this.toggleVBoxVisibility(true);

        
      this.Table4(selectedYear);
      this.Table3(selectedYear);  
      this.Table1(selectedYear);  
      this.Table2(selectedYear);
      this.Table5(selectedYear);
      this.Table6(selectedYear);
      this.Table7(selectedYear);
      this.Table8(selectedYear);
      this.Table13(selectedYear);
      this.Table15(selectedYear);
      this.Table14(selectedYear);

      }
    },



    Table4: function (selectedYear) {
      var oODataModel = this.getView().getModel("Catalog");
      var oTable4 = this.getView().byId("Table4");
    
      // Define filters and sort property for Table4
      var filters = [
        new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
        new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
        new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
        new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "19a")
      ];
    
      var sortProperty = "number"; 
    
      // Define the path for Table4
      var pathTable4 = "/qualitative_data_sectionABC_Table4"; // Adjust the path if needed
    
      console.log("Table4 Filters:", filters); // Log the filters
      console.log("Table4 Sort Property:", sortProperty); // Log the sort property
      console.log("Table4 Path:", pathTable4); // Log the path
    
      oODataModel.read(pathTable4, {
        filters: filters,
        sorters: [new sap.ui.model.Sorter(sortProperty, false)],
        success: function (data, response) {
          console.log("Table4 Read Success:", data); // Log the success data
    
          // Now, let's add the data items for Table4
          var aItems = [];
    
          for (var i = 0; i < data.results.length; i++) {
            // Create a ColumnListItem with cells
            var oItem234 = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: data.results[i].locations }), // Bind to 'locations' property
                new sap.m.Input({
                  value: data.results[i].number,
                  editable: "{Catalog>/edit/editable}" // Bind the editable property to your model
                }),
              ]
            });
    
            aItems.push(oItem234);
          }
    
          // Clear existing items and add the new ones to Table4
          oTable4.removeAllItems();
          for (var j = 0; j < aItems.length; j++) {
            oTable4.addItem(aItems[j]);
          }
    
          // If Table4 is still empty, add static rows
          if (oTable4.getItems().length === 0) {
            var r23 = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: "National" }),
                new sap.m.Input({
                  editable: "{Catalog>/edit/editable}" // Bind the editable property to your model
                }),
              ]
            });
    
            var r24 = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: "International" }),
                new sap.m.Input({
                  editable: "{Catalog>/edit/editable}" // Bind the editable property to your model
                }),
              ]
            });
    
            // Add the static rows
            oTable4.addItem(r23);
            oTable4.addItem(r24);
          }
    
          // Make Table4 visible
          oTable4.setVisible(true);
        },
        error: function (error) {
          console.log("Table4 Read Error:", error); // Log the error
    
          // Handle the case when there is an error in reading data for Table4
          // You can add code here to display an error message or handle the error in a suitable way.
        }
      });
    },


Table3: function (selectedYear) {
  var oODataModel = this.getView().getModel("Catalog");
  var oTable3 = this.getView().byId("Table3");

  // Define filters and sort property for Table3
  var filters = [
    new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
    new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
    new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
    new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "18")
  ];

  var sortProperty = "location"; // Replace with your desired sort property

  // Define the path for Table3
  var pathTable3 = "/qualitative_data_sectionABC_Table3"; // Adjust the path if needed

  
  oODataModel.read(pathTable3, {
    filters: filters,
    sorters: [new sap.ui.model.Sorter(sortProperty, false)],
    success: function (data, response) {
      console.log("Table3 Read Success:", data); // Log the success data

      // Now, let's add the data items for Table3
      var aItems = [];

      for (var i = 0; i < data.results.length; i++) {
        // Create a ColumnListItem with cells for Table3
        var oItem1 = new sap.m.ColumnListItem({
          cells: [
            new sap.m.Text({ text: data.results[i].location }),
            new sap.m.Input({ value: data.results[i].numberOfPlants, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].numberOfOffices, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].total, editable: "{Catalog>/edit/editable}" }),
          ]
        });

        aItems.push(oItem1);
      }

      // Clear existing items and add the new ones to Table3
      oTable3.removeAllItems();
      for (var j = 0; j < aItems.length; j++) {
        oTable3.addItem(aItems[j]);
      }

      // If Table3 is still empty, add static rows
      if (oTable3.getItems().length === 0) {
        var oItemNational1 = new sap.m.ColumnListItem({
          cells: [
            new sap.m.Text({ text: "National" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" })
          ]
        });

        var oItemInternational2 = new sap.m.ColumnListItem({
          cells: [
            new sap.m.Text({ text: "International" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" })
          ]
        });

        // Add the static rows
        oTable3.addItem(oItemNational1);
        oTable3.addItem(oItemInternational2);
      }

      // Make Table3 visible
      oTable3.setVisible(true);
    },
    error: function (error) {
      console.log("Table3 Read Error:", error); // Log the error

      // Handle the case when there is an error in reading data for Table3
      // You can add code here to display an error message or handle the error in a suitable way.
    }
  });
},

Table1: function (selectedYear) {
  var oODataModel = this.getView().getModel("Catalog");
  var oTable1 = this.getView().byId("Table1");

  // Define filters and sort property for Table1
  var filters = [
    new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
    new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
    new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
    new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "16")
  ];

  var sortProperty = "sr_no"; // Replace with your desired sort property

  // Define the path for Table1
  var pathTable1 = "/qualitative_data_sectionABC_Table1"; // Adjust the path if needed

  console.log("Table1 Filters:", filters); // Log the filters
  console.log("Table1 Sort Property:", sortProperty); // Log the sort property
  console.log("Table1 Path:", pathTable1); // Log the path

  oODataModel.read(pathTable1, {
    filters: filters,
    sorters: [new sap.ui.model.Sorter(sortProperty, false)],
    success: function (data, response) {
      console.log("Table1 Read Success:", data); // Log the success data

      // Now, let's add the data items for Table1
      var aItems = [];

      for (var i = 0; i < data.results.length; i++) {
        // Create a ColumnListItem with cells
        var oItemk = new sap.m.ColumnListItem({
          cells: [
            new sap.m.Input({ value: data.results[i].sr_no, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].descriptionOfMainActivity, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].descriptionOfBusinessActivity, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].percentageOfTurnoverOfTheEntity, editable: "{Catalog>/edit/editable}" }),
          ]
        });

        aItems.push(oItemk);
      }

      // Clear existing items and add the new ones to Table1
      oTable1.removeAllItems();
      for (var j = 0; j < aItems.length; j++) {
        oTable1.addItem(aItems[j]);
      }


       // If Table3 is still empty, add static rows
       if (oTable1.getItems().length === 0) {
        var R = new sap.m.ColumnListItem({
          cells: [
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" })
          ]
        });

        
        oTable1.addItem(R);
        
      }

      // Make Table1 visible
      oTable1.setVisible(true);
    },
    error: function (error) {
      console.log("Table1 Read Error:", error); // Log the error

      // Handle the case when there is an error in reading data for Table1
      // You can add code here to display an error message or handle the error in a suitable way.
    }
  });

},
Table2: function (selectedYear) {
  var oODataModel = this.getView().getModel("Catalog");
  var oTable2 = this.getView().byId("Table2");

  // Define filters and sort property for Table1
  var filters = [
    new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
    new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
    new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
    new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "17")
  ];

  var sortProperty = "sr_no"; // Replace with your desired sort property

  // Define the path for Table1
  var pathTable1 = "/qualitative_data_sectionABC_Table1"; // Adjust the path if needed

  console.log("Table1 Filters:", filters); // Log the filters
  console.log("Table1 Sort Property:", sortProperty); // Log the sort property
  console.log("Table1 Path:", pathTable1); // Log the path

  oODataModel.read(pathTable1, {
    filters: filters,
    sorters: [new sap.ui.model.Sorter(sortProperty, false)],
    success: function (data, response) {
      console.log("Table1 Read Success:", data); // Log the success data

      // Now, let's add the data items for Table1
      var aItems = [];

      for (var i = 0; i < data.results.length; i++) {
        // Create a ColumnListItem with cells
        var oItemk = new sap.m.ColumnListItem({
          cells: [
            new sap.m.Input({ value: data.results[i].sr_no, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].nameOfProductOrService, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].nicCode, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].totalTurnoverContribute, editable: "{Catalog>/edit/editable}" }),
          ]
        });

        aItems.push(oItemk);
      }

      // Clear existing items and add the new ones to Table1
      oTable2.removeAllItems();
      for (var j = 0; j < aItems.length; j++) {
        oTable2.addItem(aItems[j]);
      }


       // If Table3 is still empty, add static rows
       if (oTable2.getItems().length === 0) {
        var K = new sap.m.ColumnListItem({
          cells: [
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" })
          ]
        });

        
        oTable2.addItem(K);
        
      }

      // Make Table1 visible
      oTable2.setVisible(true);
    },
    error: function (error) {
      console.log("Table2 Read Error:", error); // Log the error

      // Handle the case when there is an error in reading data for Table1
      // You can add code here to display an error message or handle the error in a suitable way.
    }
  });

},

Table7: function (selectedYear) {
  var oODataModel = this.getView().getModel("Catalog");
  var oTable7 = this.getView().byId("Table7");

  // Define filters and sort property for Table7
  var filters = [
    new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
    new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
    new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
    new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "21")
  ];

  var sortProperty = "name"; // Replace with your desired sort property

  // Define the path for Table7
  var pathTable7 = "/qualitative_data_sectionABC_Table7"; // Adjust the path if needed

  console.log("Table7 Filters:", filters); // Log the filters
  console.log("Table7 Sort Property:", sortProperty); // Log the sort property
  console.log("Table7 Path:", pathTable7); // Log the path

  oODataModel.read(pathTable7, {
    filters: filters,
    sorters: [new sap.ui.model.Sorter(sortProperty, false)],
    success: function (data, response) {
      console.log("Table7 Read Success:", data); // Log the success data

      // Now, let's add the data items for Table7
      var aItems = [];

      for (var i = 0; i < data.results.length; i++) {
        // Create a ColumnListItem with cells
        var oItemk = new sap.m.ColumnListItem({
          cells: [
            new sap.m.Text({ text: data.results[i].name, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].total, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].numberOfFemale, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].percentageOfFemale, editable: "{Catalog>/edit/editable}" }),
          ]
        });

        aItems.push(oItemk);
      }

      // Clear existing items and add the new ones to Table7
      oTable7.removeAllItems();
      for (var j = 0; j < aItems.length; j++) {
        oTable7.addItem(aItems[j]);
      }

      if (oTable7.getItems().length === 0) {
        var S = new sap.m.ColumnListItem({
          cells: [
            new sap.m.Text({ text: "Board of Directors" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" })
          ]
        });

        var S1 = new sap.m.ColumnListItem({
          cells: [
            new sap.m.Text({ text: "Key Management Personnel" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" })
          ]
        });

        oTable7.addItem(S);
        oTable7.addItem(S1);
      }
      oTable7.setVisible(true);
    },
    error: function (error) {
      console.log("Table7 Read Error:", error); // Log the error

      // Handle the case when there is an error in reading data for Table7
      // You can add code here to display an error message or handle the error in a suitable way.
    }
  });
},


Table8: function (selectedYear) {
  var oODataModel = this.getView().getModel("Catalog");
  var oTable8 = this.getView().byId("Table8");

  // Define filters and sort property for Table8
  var filters = [
    new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
    new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
    new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
    new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "22")
  ];

  var sortProperty = "type"; // Replace with your desired sort property

  // Define the path for Table8
  var pathTable8 = "/qualitative_data_sectionABC_Table8"; // Adjust the path if needed

  console.log("Table8 Filters:", filters); // Log the filters
  console.log("Table8 Sort Property:", sortProperty); // Log the sort property
  console.log("Table8 Path:", pathTable8); // Log the path

  oODataModel.read(pathTable8, {
    filters: filters,
    sorters: [new sap.ui.model.Sorter(sortProperty, false)],
    success: function (data, response) {
      console.log("Table8 Read Success:", data); // Log the success data

      // Now, let's add the data items for Table8
      var aItems = [];

      for (var i = 0; i < data.results.length; i++) {
        // Create a ColumnListItem with cells
        var oItemk = new sap.m.ColumnListItem({
          cells: [
            new sap.m.Text({ text: data.results[i].type }),
            new sap.m.Input({ value: data.results[i].maleTurnoverRateInCurrentFY, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].femaleTurnoverRateInCurrentFY, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].totalTurnoverRateInCurrentFY, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].maleTurnoverRateInPreviousFY, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].femaleTurnoverRateInPreviousFY, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].totalTurnoverRateInPreviousFY, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].maleTurnoverRateInYearPriorToPreviousFY, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].femaleTurnoverRateInYearPriorToPreviousFY, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].totalTurnoverRateInYearPriorToPreviousFY, editable: "{Catalog>/edit/editable}" }),
          ]
        });

        aItems.push(oItemk);
      }

      // Clear existing items and add the new ones to Table8
      oTable8.removeAllItems();
      for (var j = 0; j < aItems.length; j++) {
        oTable8.addItem(aItems[j]);
      }
      if (oTable8.getItems().length === 0) {
        var c = new sap.m.ColumnListItem({
          cells: [
            new sap.m.Text({ text: "Permanent Employees" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          ]
        });

        var c1 = new sap.m.ColumnListItem({
          cells: [
            new sap.m.Text({ text: "Permanent Workers" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          ]
        });

        oTable8.addItem(c);
        oTable8.addItem(c1);
      }
      oTable8.setVisible(true);
    },
    error: function (error) {
      console.log("Table8 Read Error:", error); // Log the error

      // Handle the case when there is an error in reading data for Table8
      // You can add code here to display an error message or handle the error in a suitable way.
    }
  });
},

Table9: function (selectedYear) {
  var oODataModel = this.getView().getModel("Catalog");
  var oTable9 = this.getView().byId("Table9");

  // Define filters and sort property for Table8
  var filters = [
    new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
    new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
    new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
    new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "23")
  ];

  var sortProperty = "sr_no"; // Replace with your desired sort property

  // Define the path for Table8
  var pathTable8 = "/qualitative_data_sectionABC_Table9"; // Adjust the path if needed

  
  oODataModel.read(pathTable8, {
    filters: filters,
    sorters: [new sap.ui.model.Sorter(sortProperty, false)],
    success: function (data, response) {
      console.log("Table8 Read Success:", data); // Log the success data

      
      var aItems = [];

      for (var i = 0; i < data.results.length; i++) {
        // Create a ColumnListItem with cells
        var oItem = new sap.m.ColumnListItem({
          cells: [
            new sap.m.Input({ value: data.results[i].sr_no, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].name, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].type, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].percentageOfShares, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].participationStatus, editable: "{Catalog>/edit/editable}" }),
          ]
        });

        aItems.push(oItem);
      }

      // Clear existing items and add the new ones to Table9
      oTable9.removeAllItems();
      for (var j = 0; j < aItems.length; j++) {
        oTable9.addItem(aItems[j]);
      }

      if (oTable9.getItems().length === 0) {
        var a12 = new sap.m.ColumnListItem({
          cells: [
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          ]
        });
        oTable9.addItem(a12);
      }

      oTable9.setVisible(true);
    },
    error: function (error) {
      console.log("Table9 Read Error:", error); // Log the error

      // Handle the case when there is an error in reading data for Table9
      // You can add code here to display an error message or handle the error in a suitable way.
    }
  });
},

Table11: function (selectedYear) {
  var oODataModel = this.getView().getModel("Catalog");
  var oTable11 = this.getView().byId("Table11");

  // Define filters and sort property for Table8
  var filters = [
    new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
    new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
    new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
    new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "26")
  ];

  var sortProperty = "sr_no"; // Replace with your desired sort property

  // Define the path for Table8
  var pathTable8 = "/qualitative_data_sectionABC_Table11"; // Adjust the path if needed

  console.log("Table8 Filters:", filters); // Log the filters
  console.log("Table8 Sort Property:", sortProperty); // Log the sort property
  console.log("Table8 Path:", pathTable8); // Log the path

  oODataModel.read(pathTable8, {
    filters: filters,
    sorters: [new sap.ui.model.Sorter(sortProperty, false)],
    success: function (data, response) {
      console.log("Table8 Read Success:", data); // Log the success data

      // Now, let's add the data items for Table8
      var aItems = [];


      for (var i = 0; i < data.results.length; i++) {
        // Create a ColumnListItem with cells
        var oItem = new sap.m.ColumnListItem({
          cells: [
            new sap.m.Text({ text: data.results[i].sr_no, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].issue, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].type, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].rationale, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].approach, editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ value: data.results[i].financialImplications, editable: "{Catalog>/edit/editable}" }),
          ]
        });

        aItems.push(oItem);
      }

      // Clear existing items and add the new ones to Table11
      oTable11.removeAllItems();
      for (var j = 0; j < aItems.length; j++) {
        oTable11.addItem(aItems[j]);
      }

      if (oTable11.getItems().length === 0) {
        var a12 = new sap.m.ColumnListItem({
          cells: [
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          ]
        });
        oTable11.addItem(a12);
      }

      oTable11.setVisible(true);
    },
    error: function (error) {
      console.log("Table11 Read Error:", error); // Log the error

      // Handle the case when there is an error in reading data for Table11
      // You can add code here to display an error message or handle the error in a suitable way.
    }
  });
},



      
  
      Table5: function (selectedYear) {
        var oODataModel = this.getView().getModel("Catalog");
        var oTable5 = this.getView().byId("Table5");
    
        // Define filters and sort property for Table5
        var filters = [
            new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
            new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
            new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
            new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "20a")
        ];
    
        var sortProperty = "sr_no"; // Replace with your desired sort property
    
        // Define the path for Table5
        var pathTable5 = "/qualitative_data_sectionABC_Table5"; // Adjust the path if needed
    
        oODataModel.read(pathTable5, {
            filters: filters,
            sorters: [new sap.ui.model.Sorter(sortProperty, false)],
            success: function (data, response) {
                console.log("Table5 Read Success:", data); // Log the success data
    
                // Now, let's add the data items for Table5
                var aItems = [];
    
                for (var i = 0; i < data.results.length; i++) {
                    // Create a ColumnListItem with cells for Table5
                    var oItem1 = new sap.m.ColumnListItem({
                        cells: [
                            new sap.m.Text({ text: data.results[i].type }), // Static text
                            new sap.m.Text({ text: data.results[i].sr_no }), // Static text
                            new sap.m.Text({ text: data.results[i].particulars }), // Static text
                            new sap.m.Input({ value: data.results[i].total, editable: "{Catalog>/edit/editable}" }),
                            new sap.m.Input({ value: data.results[i].numberOfMale, editable: "{Catalog>/edit/editable}" }),
                            new sap.m.Input({ value: data.results[i].percentageOfMale, editable: "{Catalog>/edit/editable}" }),
                            new sap.m.Input({ value: data.results[i].numberOfFemale, editable: "{Catalog>/edit/editable}" }),
                            new sap.m.Input({ value: data.results[i].percentageOfFemale, editable: "{Catalog>/edit/editable}" }),
                        ]
                    });
    
                    aItems.push(oItem1);
                }
    
                // Clear existing items and add the new ones to Table5
                oTable5.removeAllItems();
                for (var j = 0; j < aItems.length; j++) {
                    oTable5.addItem(aItems[j]);
                }
    
                // If Table5 is still empty, add static rows
                if (oTable5.getItems().length === 0) {
                    var h2 = new sap.m.ColumnListItem({
                        cells: [
                            new sap.m.Text({ text: "Employees" }), // Static text
                            new sap.m.Text({ text: "1" }), // Static text
                            new sap.m.Text({ text: "Permanent (D)" }), // Static text
                            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                        ]
                    });
    
                    var h3 = new sap.m.ColumnListItem({
                        cells: [
                            new sap.m.Text({ text: "Employees" }), // Static text
                            new sap.m.Text({ text: "2" }), // Static text
                            new sap.m.Text({ text: "Other than Permanent (E)" }), // Static text
                            new sap.m.Text({ editable: "{Catalog>/edit/editable}" }),
                            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                        ]
                    });
    
                    var h4 = new sap.m.ColumnListItem({
                        cells: [
                            new sap.m.Text({ text: "Employees" }), // Static text
                            new sap.m.Text({ text: "3" }), // Static text
                            new sap.m.Text({ text: "Total employees (D + E)" }), // Static text
                            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                        ]
                    });
    
                    var h5 = new sap.m.ColumnListItem({
                        cells: [
                            new sap.m.Text({ text: "Workers" }), // Static text
                            new sap.m.Text({ text: "4" }), // Static text
                            new sap.m.Text({ text: "Permanent (F)" }), // Static text
                            new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                  new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                  new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                  new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                  new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                ]
                              });

                              var h6 = new sap.m.ColumnListItem({
                                cells: [
                                  new sap.m.Text({ text: "DIFFERENTLY ABLED WORKERS" }),
                                  new sap.m.Text({ text: "5" }),
                                  new sap.m.Text({ text: "Total employees(F + G)" }),
                                  new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                  new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                  new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                  new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                  new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                ]
                              });
                              var h7 = new sap.m.ColumnListItem({
                                cells: [
                                  new sap.m.Text({ text: "DIFFERENTLY ABLED WORKERS" }),
                                  new sap.m.Text({ text: "6" }),
                                  new sap.m.Text({ text: "Permanent(D)" }),
                                  new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                  new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                  new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                  new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                  new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                ]
                              });
                    
                              // Add the static rows
                              oTable5.addItem(h2);
                              oTable5.addItem(h3);
                              oTable5.addItem(h4);
                    
                    
                              oTable5.addItem(h5);
                    
                              oTable5.addItem(h6);
                    
                              oTable5.addItem(h7);
                    
                    
                            }
                    
                          
                            oTable5.setVisible(true);
                          },
                          error: function (error) {
                            console.log("Table5 Read Error:", error); 
                    
                           
                          }
                        });
      },
                        Table6: function (selectedYear) {
                          var oODataModel = this.getView().getModel("Catalog");
                          var oTable6 = this.getView().byId("Table6");
                        
                          // Define filters and sort property for Table6
                          var filters = [
                            new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
                            new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
                            new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
                            new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "20b")
                          ];
                        
                          var sortProperty = "sr_no"; // Replace with your desired sort property
                        
                          // Define the path for Table6
                          var pathTable6 = "/qualitative_data_sectionABC_Table6"; // Adjust the path if needed
                        
                          oODataModel.read(pathTable6, {
                            filters: filters,
                            sorters: [new sap.ui.model.Sorter(sortProperty, false)],
                            success: function (data, response) {
                              console.log("Table6 Read Success:", data); // Log the success data
                        
                              // Now, let's add the data items for Table6
                              var aItems = [];
                        
                              for (var i = 0; i < data.results.length; i++) {
                                // Create a ColumnListItem with cells for Table6
                                var oItem1 = new sap.m.ColumnListItem({
                                  cells: [
                                    new sap.m.Text({ text: data.results[i].type }), // Static text
                                    new sap.m.Text({ text: data.results[i].sr_no }), // Static text
                                    new sap.m.Text({ text: data.results[i].particulars }), // Static text
                                    new sap.m.Input({ value: data.results[i].total, editable: "{Catalog>/edit/editable}" }),
                                    new sap.m.Input({ value: data.results[i].numberOfMale, editable: "{Catalog>/edit/editable}" }),
                                    new sap.m.Input({ value: data.results[i].percentageOfMale, editable: "{Catalog>/edit/editable}" }),
                                    new sap.m.Input({ value: data.results[i].numberOfFemale, editable: "{Catalog>/edit/editable}" }),
                                    new sap.m.Input({ value: data.results[i].percentageOfFemale, editable: "{Catalog>/edit/editable}" }),
                                  ]
                                });
                        
                                aItems.push(oItem1);
                              }
                        
                              // Clear existing items and add the new ones to Table6
                              oTable6.removeAllItems();
                              for (var j = 0; j < aItems.length; j++) {
                                oTable6.addItem(aItems[j]);
                              }
                        
                              // If Table6 is still empty, add static rows
                              if (oTable6.getItems().length === 0) {
                                var z2 = new sap.m.ColumnListItem({
                                  cells: [
                                    new sap.m.Text({ text: "DIFFERENTLY ABLED EMPLOYEES" }), // Static text
                                    new sap.m.Text({ text: "1" }), // Static text
                                    new sap.m.Text({ text: "Permanent (D)" }), // Static text
                                    new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                    new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),  
                                    new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                    new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                    new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                  ]
                                });
                        
                                var z3 = new sap.m.ColumnListItem({
                                  cells: [
                                    new sap.m.Text({ text: "DIFFERENTLY ABLED EMPLOYEES" }), // Static text
                                    new sap.m.Text({ text: "2" }), // Static text
                                    new sap.m.Text({ text: "Other than Permanent (E)" }), // Static text
                                    new sap.m.Text({ editable: "{Catalog>/edit/editable}" }),
                                    new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                    new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                    new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                    new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                  ]
                                });
                        
                                var z4 = new sap.m.ColumnListItem({
                                  cells: [
                                    new sap.m.Text({ text: "DIFFERENTLY ABLED EMPLOYEES" }), // Static text
                                    new sap.m.Text({ text: "3" }), // Static text
                                    new sap.m.Text({ text: "Total differently abled employees(D + E)" }),
                                    new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                    new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                    new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                    new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                    new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                                  ]
                                });
                        
                                // Add the static rows
                                oTable6.addItem(z2);
                                oTable6.addItem(z3);
                                oTable6.addItem(z4);
                              }
                        
                              // Make Table6 visible
                              oTable6.setVisible(true);
                            },
                            error: function (error) {
                              console.log("Table6 Read Error:", error); // Log the error
                        
                              // Handle the case when there is an error in reading data for Table6
                              // You can add code here to display an error message or handle the error in a suitable way.
                            }
                          });
                        
                        



/*

      //var oODataModel = this.getView().getModel("Catalog");
      var oODataModel = this.getOwnerComponent().getModel("Catalog");
      var oTable = this.getView().byId("Table2");

      // Create ColumnListItems
      var A71 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" })
        ]
      });

      // Check if the table already has items
      if (oTable.getItems().length < 1) {
        console.log("Success Callback Executed");

        // Add "National" item
        oTable.addItem(A71);
        console.log("Added National Item");
      }

      oTable.setVisible(true);

      // Define filters and sort property
      var filters = [
        new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
        new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
        new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
        new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "17")
      ];

      var sortProperty = "sr_no"; // Replace with your desired sort property

      // Perform OData read operation with filters and sorting
      var pathBf = "/qualitative_data_sectionABC_Table2"; // Adjust the path if needed

      console.log("Filters:", filters); // Log the filters
      console.log("Sort Property:", sortProperty); // Log the sort property
      console.log("Path:", pathBf); // Log the path



      oODataModel.read(pathBf, {
        filters: filters,
        sorters: [new sap.ui.model.Sorter(sortProperty, false)],
        success: function (data, response) {
          console.log("Read Success:", data); // Log the success data
          // Handle success if needed
        },
        error: function (error) {
          console.log("Read Error:", error); // Log the error
        }
      });

      var oODataModel = this.getView().getModel("Catalog");
      var oTable = this.getView().byId("Table1");

      // Create ColumnListItems
      var A73 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" })
        ]
      });

      // Check if the table already has items
      if (oTable.getItems().length < 1) {
        console.log("Success Callback Executed");

        // Add "National" item
        oTable.addItem(A73);
        console.log("Added National Item");
      }

      oTable.setVisible(true);

      // Define filters and sort property
      var filters = [
        new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
        new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
        new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
        new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "16")
      ];

      var sortProperty = "sr_no"; // Replace with your desired sort property

      // Perform OData read operation with filters and sorting
      var pathBf = "/qualitative_data_sectionABC_Table1"; // Adjust the path if needed

      console.log("Filters:", filters); // Log the filters
      console.log("Sort Property:", sortProperty); // Log the sort property
      console.log("Path:", pathBf); // Log the path

      oODataModel.read(pathBf, {
        filters: filters,
        sorters: [new sap.ui.model.Sorter(sortProperty, false)],
        success: function (data, response) {
          console.log("Read Success:", data); // Log the success data
          // Handle success if needed
        },
        error: function (error) {
          console.log("Read Error:", error); // Log the error
        }
      });
    


      var oODataModel = this.getOwnerComponent().getModel("Catalog");
      var oTable = this.getView().byId("Table4");

      // Create ColumnListItems
      var oItemNational = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "National" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

        ]
      });

      var oItemInternational = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "International" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

        ]
      });

      // Check if the table already has items
      if (oTable.getItems().length < 1) {
        console.log("Success Callback Executed");

        // Add "National" item
        oTable.addItem(oItemNational);
        console.log("Added National Item");

        // Add "International" item
        oTable.addItem(oItemInternational);
        console.log("Added International Item");
      }
      oTable.setVisible(true);
      // Define filters and sort property
      var filters = [
        new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
        new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
        new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
        new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "19a")
      ];

      var sortProperty = "locations"; // Replace with your desired sort property

      // Perform OData read operation with filters and sorting
      var pathBf = "/qualitative_data_sectionABC_Table4"; // Adjust the path if needed

      console.log("Filters:", filters); // Log the filters
      console.log("Sort Property:", sortProperty); // Log the sort property
      console.log("Path:", pathBf); // Log the path

      oODataModel.read(pathBf, {
        filters: filters,
        sorters: [new sap.ui.model.Sorter(sortProperty, false)],
        success: function (data, response) {
          console.log("Read Success:", data); // Log the success data
          // Handle success if needed
        },
        error: function (error) {
          console.log("Read Error:", error); // Log the error
        }
      });

      var oODataModel = this.getView().getModel("Catalog");
      var oTable = this.getView().byId("Table3");

      // Create ColumnListItems
      var oItemNational1 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "National" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" })
        ]
      });

      var oItemInternational2 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "International" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" })
        ]
      });

      // Check if the table already has items
      if (oTable.getItems().length < 1) {
        console.log("Success Callback Executed");

        // Add "National" item
        oTable.addItem(oItemNational1);
        console.log("Added National Item");

        // Add "International" item
        oTable.addItem(oItemInternational2);
        console.log("Added International Item");
      }
      oTable.setVisible(true);
      // Define filters and sort property
      var filters = [
        new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
        new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
        new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
        new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "18")
      ];

      var sortProperty = "location"; // Replace with your desired sort property

      // Perform OData read operation with filters and sorting
      var pathBf = "/qualitative_data_sectionABC_Table3"; // Adjust the path if needed

      console.log("Filters:", filters); // Log the filters
      console.log("Sort Property:", sortProperty); // Log the sort property
      console.log("Path:", pathBf); // Log the path

      oODataModel.read(pathBf, {
        filters: filters,
        sorters: [new sap.ui.model.Sorter(sortProperty, false)],
        success: function (data, response) {
          console.log("Read Success:", data); // Log the success data
          // Handle success if needed
        },
        error: function (error) {
          console.log("Read Error:", error); // Log the error
        }
      });



      var oODataModel = this.getView().getModel("Catalog");
      var oTable = this.getView().byId("Table5");

      // Create ColumnListItems
      // For oItemType
      // Get a reference to your OData model and the table
      var oODataModel = this.getView().getModel("Catalog");
      var oTable = this.getView().byId("Table5");

      // Create ColumnListItems
      var oItemEmployees = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Input({ value: "Employees", editable: false }), // Static text
          new sap.m.Input({ value: "1", editable: false }), // Static text
          new sap.m.Input({ value: "Permanent (D)", editable: false }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
        ]
      });

      // Create another item (you can customize it as needed)
      var oItemEmployees1 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Input({ value: "Employees", editable: false }),
          new sap.m.Input({ value: "2", editable: false }),
          new sap.m.Input({ value: "Other than Permanent (E)", editable: false }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
        ]
      });
      var oItemEmployees2 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Input({ value: "Employees", editable: false }),
          new sap.m.Input({ value: "3", editable: false }),
          new sap.m.Input({ value: "Total employees (D + E)", editable: false }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
        ]
      });
      var oItemEmployees3 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Input({ value: "Workers", editable: false }),
          new sap.m.Input({ value: "4", editable: false }),
          new sap.m.Input({ value: "Permanent (F)", editable: false }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
        ]
      });
      var oItemEmployees4 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Input({ value: "Workers", editable: false }),
          new sap.m.Input({ value: "5", editable: false }),
          new sap.m.Input({ value: "Total employees(F + G)", editable: false }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
        ]
      });
      var oItemEmployees5 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Input({ value: "Workers", editable: false }),
          new sap.m.Input({ value: "6", editable: false }),
          new sap.m.Input({ value: "Permanent(D)", editable: false }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
        ]
      });

      // Check if the table already has items
      if (oTable.getItems().length < 1) {
        console.log("Success Callback Executed");

        oTable.addItem(oItemEmployees);
        console.log("Added Employees Item");

        oTable.addItem(oItemEmployees1);
        console.log("Added Employees Item");


        oTable.addItem(oItemEmployees2);
        console.log("Added Employees Item");
        oTable.addItem(oItemEmployees3);
        console.log("Added Employees Item");

        oTable.addItem(oItemEmployees4);
        console.log("Added Employees Item");


        oTable.addItem(oItemEmployees5);
        console.log("Added Employees Item");

      }
      oTable.setVisible(true);

      // Define filters and sort property
      var filters = [
        new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
        new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
        new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
        new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "20a")
      ];

      var sortProperty = "sr_no"; // Replace with your desired sort property

      // Perform OData read operation with filters and sorting
      var pathBf = "/qualitative_data_sectionABC_Table5"; // Adjust the path if needed

      console.log("Filters:", filters); // Log the filters
      console.log("Sort Property:", sortProperty); // Log the sort property
      console.log("Path:", pathBf); // Log the path

      oODataModel.read(pathBf, {
        filters: filters,
        sorters: [new sap.ui.model.Sorter(sortProperty, false)],
        success: function (data, response) {
          console.log("Read Success:", data); // Log the success data
          // Handle success if needed
        },
        error: function (error) {
          console.log("Read Error:", error); // Log the error
        }
      });

      var oODataModel = this.getView().getModel("Catalog");
      var oTable = this.getView().byId("Table7");

      // Create ColumnListItems
      var b = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "Board of Directors", editable: false }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" })
        ]
      });

      var b1 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "Key Management Personnel" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" })
        ]
      });

      // Check if the table already has items
      if (oTable.getItems().length < 1) {
        console.log("Success Callback Executed");

        // Add "National" item
        oTable.addItem(b);
        console.log("Added National Item");

        // Add "International" item
        oTable.addItem(b1);
        console.log("Added International Item");
      }
      oTable.setVisible(true);
      // Define filters and sort property
      var filters = [
        new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
        new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
        new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
        new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "21")
      ];

      var sortProperty = "name"; // Replace with your desired sort property

      // Perform OData read operation with filters and sorting
      var pathBf = "/qualitative_data_sectionABC_Table7"; // Adjust the path if needed

      console.log("Filters:", filters); // Log the filters
      console.log("Sort Property:", sortProperty); // Log the sort property
      console.log("Path:", pathBf); // Log the path

      oODataModel.read(pathBf, {
        filters: filters,
        sorters: [new sap.ui.model.Sorter(sortProperty, false)],
        success: function (data, response) {
          console.log("Read Success:", data); // Log the success data
          // Handle success if needed
        },
        error: function (error) {
          console.log("Read Error:", error); // Log the error
        }
      });

      var oODataModel = this.getView().getModel("Catalog");
      var oTable = this.getView().byId("Table6");

      var oODataModel = this.getView().getModel("Catalog");
      var oTable = this.getView().byId("Table6");

      // Create ColumnListItems
      var oItema = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Input({ value: "DIFFERENTLY ABLED EMPLOYEES", editable: false }),
          new sap.m.Input({ value: "1", editable: false }),
          new sap.m.Input({ value: "Permanent (D)", editable: false }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
        ]
      });

      // Create another item (you can customize it as needed)
      var oItema1 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Input({ value: "DIFFERENTLY ABLED EMPLOYEES", editable: false }),
          new sap.m.Input({ value: "2", editable: false }),
          new sap.m.Input({ value: "Other than Permanent (E)", editable: false }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
        ]
      });
      var oItema2 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Input({ value: "DIFFERENTLY ABLED EMPLOYEES", editable: false }),
          new sap.m.Input({ value: "3", editable: false }),
          new sap.m.Input({ value: "Total employees (D + E)", editable: false }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
        ]
      });
      var oItema3 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Input({ value: "DIFFERENTLY ABLED WORKERS", editable: false }),
          new sap.m.Input({ value: "4", editable: false }),
          new sap.m.Input({ value: "Permanent (F)", editable: false }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
        ]
      });
      var oItema4 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Input({ value: "DIFFERENTLY ABLED WORKERS", editable: false }),
          new sap.m.Input({ value: "5", editable: false }),
          new sap.m.Input({ value: "Total employees(F + G)", editable: false }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
        ]
      });
      var oItema5 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Input({ value: "DIFFERENTLY ABLED WORKERS", editable: false }),
          new sap.m.Input({ value: "6", editable: false }),
          new sap.m.Input({ value: "Permanent(D)", editable: false }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
        ]
      });

      // Check if the table already has items
      if (oTable.getItems().length < 1) {
        console.log("Success Callback Executed");

        oTable.addItem(oItema);
        console.log("Added Employees Item");

        oTable.addItem(oItema1);
        console.log("Added Employees Item");


        oTable.addItem(oItema2);
        console.log("Added Employees Item");
        oTable.addItem(oItema3);
        console.log("Added Employees Item");

        oTable.addItem(oItema4);
        console.log("Added Employees Item");


        oTable.addItem(oItema5);
        console.log("Added Employees Item");

      }


      // Make the table visible
      oTable.setVisible(true);

      // Define filters and sort property
      var filters = [
        new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
        new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
        new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
        new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "20b")
      ];

      var sortProperty = "sr_no"; // Replace with your desired sort property

      // Perform OData read operation with filters and sorting
      var pathBf = "/qualitative_data_sectionABC_Table6"; // Adjust the path if needed

      console.log("Filters:", filters); // Log the filters
      console.log("Sort Property:", sortProperty); // Log the sort property
      console.log("Path:", pathBf); // Log the path

      oODataModel.read(pathBf, {
        filters: filters,
        sorters: [new sap.ui.model.Sorter(sortProperty, false)],
        success: function (data, response) {
          console.log("Read Success:", data); // Log the success data
          // Handle success if needed
        },
        error: function (error) {
          console.log("Read Error:", error); // Log the error
        }
      });




      var oODataModel = this.getView().getModel("Catalog");
      var oTable = this.getView().byId("Table8");

      // Create ColumnListItems
      var c = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "Permanent Employees" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
        ]
      });

      var c1 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "Permanent Workers" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
        ]
      });

      // Check if the table already has items
      if (oTable.getItems().length < 1) {
        console.log("Success Callback Executed");

        // Add "National" item
        oTable.addItem(c);
        console.log("Added National Item");

        // Add "International" item
        oTable.addItem(c1);
        console.log("Added International Item");
      }
      oTable.setVisible(true);
      // Define filters and sort property
      var filters = [
        new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
        new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
        new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
        new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "22")
      ];

      var sortProperty = "type"; // Replace with your desired sort property

      // Perform OData read operation with filters and sorting
      var pathBf = "/qualitative_data_sectionABC_Table8"; // Adjust the path if needed

      console.log("Filters:", filters); // Log the filters
      console.log("Sort Property:", sortProperty); // Log the sort property
      console.log("Path:", pathBf); // Log the path

      oODataModel.read(pathBf, {
        filters: filters,
        sorters: [new sap.ui.model.Sorter(sortProperty, false)],
        success: function (data, response) {
          console.log("Read Success:", data); // Log the success data
          // Handle success if needed
        },
        error: function (error) {
          console.log("Read Error:", error); // Log the error
        }
      });


      var oODataModel = this.getView().getModel("Catalog");
      var oTable = this.getView().byId("Table9");

      // Create ColumnListItems
      var a12 = new sap.m.ColumnListItem({
        cells: [

          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

        ]
      });


      // Check if the table already has items
      if (oTable.getItems().length < 1) {
        console.log("Success Callback Executed");

        // Add "National" item
        oTable.addItem(a12);
        console.log("Added National Item");


      }
      oTable.setVisible(true);
      // Define filters and sort property
      var filters = [
        new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
        new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
        new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
        new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "23")
      ];

      var sortProperty = "sr_no"; // Replace with your desired sort property

      // Perform OData read operation with filters and sorting
      var pathBf = "/qualitative_data_sectionABC_Table9"; // Adjust the path if needed

      console.log("Filters:", filters); // Log the filters
      console.log("Sort Property:", sortProperty); // Log the sort property
      console.log("Path:", pathBf); // Log the path

      oODataModel.read(pathBf, {
        filters: filters,
        sorters: [new sap.ui.model.Sorter(sortProperty, false)],
        success: function (data, response) {
          console.log("Read Success:", data); // Log the success data
          // Handle success if needed
        },
        error: function (error) {
          console.log("Read Error:", error); // Log the error
        }
      });



      var oODataModel = this.getView().getModel("Catalog");
      var oTable = this.getView().byId("Table11");

      // Create ColumnListItems
      var a50 = new sap.m.ColumnListItem({
        cells: [

          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
        ]
      });


      // Check if the table already has items
      if (oTable.getItems().length < 1) {
        console.log("Success Callback Executed");

        // Add "National" item
        oTable.addItem(a50);
        console.log("Added National Item");


      }
      oTable.setVisible(true);
      // Define filters and sort property
      var filters = [
        new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
        new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
        new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
        new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "26")
      ];

      var sortProperty = "sr_no"; // Replace with your desired sort property

      // Perform OData read operation with filters and sorting
      var pathBf = "/qualitative_data_sectionABC_Table11"; // Adjust the path if needed

      console.log("Filters:", filters); // Log the filters
      console.log("Sort Property:", sortProperty); // Log the sort property
      console.log("Path:", pathBf); // Log the path

      oODataModel.read(pathBf, {
        filters: filters,
        sorters: [new sap.ui.model.Sorter(sortProperty, false)],
        success: function (data, response) {
          console.log("Read Success:", data); // Log the success data
          // Handle success if needed
        },
        error: function (error) {
          console.log("Read Error:", error); // Log the error
        }
      });


      var oODataModel = this.getView().getModel("Catalog");
      var oTable = this.getView().byId("Table14");

      // Create ColumnListItems
      var a122 = new sap.m.ColumnListItem({
        cells: [

          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          ,

        ]
      });


      // Check if the table already has items
      if (oTable.getItems().length < 1) {
        console.log("Success Callback Executed");

        // Add "National" item
        oTable.addItem(a122);
        console.log("Added National Item");


      }
      oTable.setVisible(true);
      // Define filters and sort property
      var filters = [
        new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
        new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
        new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "B"),
        new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "11")
      ];

      var sortProperty = "p1"; // Replace with your desired sort property

      // Perform OData read operation with filters and sorting
      var pathBf = "/qualitative_data_sectionABC_Table14"; // Adjust the path if needed

      console.log("Filters:", filters); // Log the filters
      console.log("Sort Property:", sortProperty); // Log the sort property
      console.log("Path:", pathBf); // Log the path

      oODataModel.read(pathBf, {
        filters: filters,
        sorters: [new sap.ui.model.Sorter(sortProperty, false)],
        success: function (data, response) {
          console.log("Read Success:", data); // Log the success data
          // Handle success if needed
        },
        error: function (error) {
          console.log("Read Error:", error); // Log the error
        }
      });







      var oODataModel = this.getView().getModel("Catalog");
      var oTable = this.getView().byId("Table10");

      // Create ColumnListItems
      var d = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "Communities" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

        ]
      });

      var d1 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "Investors (other than shareholders" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

        ]
      });
      var d2 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "Shareholders" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

        ]
      });
      var d3 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "Employees and workers" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

        ]
      });
      var d4 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "Customers" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

        ]
      });
      var d5 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "Value Chain Partners" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

        ]
      });
      var d6 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "Other (please specify)" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

        ]
      });

      // Check if the table already has items
      if (oTable.getItems().length < 1) {
        console.log("Success Callback Executed");

        // Add "National" item
        oTable.addItem(d);
        console.log("Added National Item");

        // Add "International" item
        oTable.addItem(d1);
        console.log("Added International Item");
        oTable.addItem(d2);
        console.log("Added International Item");
        oTable.addItem(d3);
        console.log("Added International Item");
        oTable.addItem(d4);
        console.log("Added International Item");
        oTable.addItem(d5);
        console.log("Added International Item");
        oTable.addItem(d6);
        console.log("Added International Item");
      }
      oTable.setVisible(true);
      // Define filters and sort property
      var filters = [
        new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
        new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
        new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
        new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "25")
      ];

      var sortProperty = "name"; // Replace with your desired sort property

      // Perform OData read operation with filters and sorting
      var pathBf = "/qualitative_data_sectionABC_Table10"; // Adjust the path if needed

      console.log("Filters:", filters); // Log the filters
      console.log("Sort Property:", sortProperty); // Log the sort property
      console.log("Path:", pathBf); // Log the path

      oODataModel.read(pathBf, {
        filters: filters,
        sorters: [new sap.ui.model.Sorter(sortProperty, false)],
        success: function (data, response) {
          console.log("Read Success:", data); // Log the success data
          // Handle success if needed
        },
        error: function (error) {
          console.log("Read Error:", error); // Log the error
        }
      });

      var oODataModel = this.getView().getModel("Catalog");
      var oTable = this.getView().byId("Table12");

      // Create ColumnListItems
      var f = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "1. a. Whether your entity's policy/policies cover each principle and its core elements of the NGRBCs. (Yes/No)" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

        ]
      });

      var f1 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "1. b. Has the policy been approved by the Board? (Yes/No)" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

        ]
      });
      var f2 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "1. c. Web Link of the Policies, if available" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
        ]
      });
      var f3 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "2. Whether the entity has translated the policy into procedures. (Yes / No)" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

        ]
      });
      var f4 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "3. Do the enlisted policies extend to your value chain partners? (Yes/No)" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

        ]
      });
      var f5 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "4. Name of the national and international codes/certifications/labels/ standards (e.g. Forest Stewardship Council, Fairtrade, Rainforest Alliance, Trustea) standards (e.g. SA 8000, OHSAS, ISO, BIS) adopted by your entity and mapped to each principle" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

        ]
      });
      var f6 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "5. Specific commitments, goals and targets set by the entity with defined timelines, if any.", }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

        ]
      });
      var f7 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "6. Performance of the entity against the specific commitments, goals and targets along-with reasons in case the same are not met", }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

        ]
      });

      // Check if the table already has items
      if (oTable.getItems().length < 1) {
        console.log("Success Callback Executed");

        // Add "National" item
        oTable.addItem(f);
        console.log("Added National Item");

        // Add "International" item
        oTable.addItem(f1);
        console.log("Added International Item");
        oTable.addItem(f2);
        console.log("Added International Item");
        oTable.addItem(f3);
        console.log("Added International Item");
        oTable.addItem(f4);
        console.log("Added International Item");
        oTable.addItem(f5);
        console.log("Added International Item");
        oTable.addItem(f6);
        console.log("Added International Item");
        oTable.addItem(f7);
        console.log("Added International Item");
      }
      oTable.setVisible(true);
      // Define filters and sort property
      var filters = [
        new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
        new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
        new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "B"),
        new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "1")
      ];

      var sortProperty = "questions"; // Replace with your desired sort property

      // Perform OData read operation with filters and sorting
      var pathBf = "/qualitative_data_sectionABC_Table12"; // Adjust the path if needed

      console.log("Filters:", filters); // Log the filters
      console.log("Sort Property:", sortProperty); // Log the sort property
      console.log("Path:", pathBf); // Log the path

      oODataModel.read(pathBf, {
        filters: filters,
        sorters: [new sap.ui.model.Sorter(sortProperty, false)],
        success: function (data, response) {
          console.log("Read Success:", data); // Log the success data
          // Handle success if needed
        },
        error: function (error) {
          console.log("Read Error:", error); // Log the error
        }
      });






      var oODataModel = this.getView().getModel("Catalog");
      var oTable = this.getView().byId("Table13");

      // Create ColumnListItems
      var e = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "Performance against above policies and follow up action" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

        ]
      });

      var e1 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "Compliance with statutory requirements of relevance to the principles, and, rectification of any non-compliances" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

        ]
      });

      // Check if the table already has items
      if (oTable.getItems().length < 1) {
        console.log("Success Callback Executed");

        // Add "National" item
        oTable.addItem(e);
        console.log("Added National Item");

        // Add "International" item
        oTable.addItem(e1);

      }
      oTable.setVisible(true);
      // Define filters and sort property
      var filters = [
        new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
        new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
        new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "B"),
        new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "10")
      ];

      var sortProperty = "p1review"; // Replace with your desired sort property

      // Perform OData read operation with filters and sorting
      var pathBf = "/qualitative_data_sectionABC_Table13"; // Adjust the path if needed

      console.log("Filters:", filters); // Log the filters
      console.log("Sort Property:", sortProperty); // Log the sort property
      console.log("Path:", pathBf); // Log the path

      oODataModel.read(pathBf, {
        filters: filters,
        sorters: [new sap.ui.model.Sorter(sortProperty, false)],
        success: function (data, response) {
          console.log("Read Success:", data); // Log the success data
          // Handle success if needed
        },
        error: function (error) {
          console.log("Read Error:", error); // Log the error
        }
      });


      var oODataModel = this.getView().getModel("Catalog");
      var oTable = this.getView().byId("Table15");

      // Create ColumnListItems
      var g = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "the entity does not consider the Principles material to its business (Yes/No" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),

          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),


        ]
      });

      var g1 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "The entity is not at a stage where it is in a position to formulate and implement the policies on specified principles (Yes/No)" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),



        ]
      });

      var g11 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "The entity does not have the financial or/human and technical resources available for the task (Yes/No)" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),



        ]
      });

      var g2 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "It is planned to be done in the next financial year (Yes/No)" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),



        ]
      });

      var g3 = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Text({ text: "Any other reason (please specify)" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
          new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),



        ]
      });

      // Check if the table already has items
      if (oTable.getItems().length < 1) {
        console.log("Success Callback Executed");

        // Add "National" item
        oTable.addItem(g);
        console.log("Added National Item");

        // Add "International" item
        oTable.addItem(g1);
        oTable.addItem(g11);
        console.log("Added National Item");

        // Add "International" item
        oTable.addItem(g2);
        oTable.addItem(g3);
        console.log("Added National Item");




      }
      oTable.setVisible(true);
      // Define filters and sort property
      var filters = [
        new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
        new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
        new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "B"),
        new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "12")
      ];

      var sortProperty = "questions"; // Replace with your desired sort property

      // Perform OData read operation with filters and sorting
      var pathBf = "/qualitative_data_sectionABC_Table15"; // Adjust the path if needed

      console.log("Filters:", filters); // Log the filters
      console.log("Sort Property:", sortProperty); // Log the sort property
      console.log("Path:", pathBf); // Log the path

      oODataModel.read(pathBf, {
        filters: filters,
        sorters: [new sap.ui.model.Sorter(sortProperty, false)],
        success: function (data, response) {
          console.log("Read Success:", data); // Log the success data
          // Handle success if needed
        },
        error: function (error) {
          console.log("Read Error:", error); // Log the error
        }
      });








      var elementsConfig = [
        {
          id: "Table1",
          entitySet: "/qualitative_data_sectionABC_Table1",
          filters: [
            new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
            new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
            new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
            new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "16")
          ],
          sortProperty: "sr_no"
        },
        {
          id: "Table2",
          entitySet: "/qualitative_data_sectionABC_Table2",
          filters: [
            new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
            new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
            new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
            new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "17")
          ],
          sortProperty: "sr_no"
        },
        {
          id: "Table3",
          entitySet: "/qualitative_data_sectionABC_Table3",
          filters: [
            new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
            new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
            new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
            new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "18")
          ],
          sortProperty: "location"
        },
        {
          id: "Table4",
          entitySet: "/qualitative_data_sectionABC_Table4",
          filters: [
            new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
            new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
            new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
            new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "19a")
          ],
          sortProperty: "locations"


        },
        {
          id: "Table5",
          entitySet: "/qualitative_data_sectionABC_Table5",
          filters: [
            new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
            new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
            new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
            new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "20a")
          ],
          sortProperty: "sr_no"
        },
        {
          id: "Table6",
          entitySet: "/qualitative_data_sectionABC_Table6",
          filters: [
            new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
            new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
            new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
            new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "20b")
          ],
          sortProperty: "sr_no"
        },
        {
          id: "Table7",
          entitySet: "/qualitative_data_sectionABC_Table7",
          filters: [
            new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
            new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
            new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
            new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "21")
          ],
          sortProperty: "name"
        },
        {
          id: "Table8",
          entitySet: "/qualitative_data_sectionABC_Table8",
          filters: [
            new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
            new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
            new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
            new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "22")
          ],
          sortProperty: "type"
        },
        {
          id: "Table9",
          entitySet: "/qualitative_data_sectionABC_Table9",
          filters: [
            new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
            new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
            new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
            new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "23")
          ],
          sortProperty: "sr_no"
        },
        {
          id: "Table10",
          entitySet: "/qualitative_data_sectionABC_Table10",
          filters: [
            new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
            new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
            new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
            new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "25")
          ],
          sortProperty: "name"
        },
        {
          id: "Table11",
          entitySet: "/qualitative_data_sectionABC_Table11",
          filters: [
            new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
            new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
            new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
            new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "26")
          ],
          sortProperty: "sr_no"
        },
        {
          id: "Table12",
          entitySet: "/qualitative_data_sectionABC_Table11",
          filters: [
            new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
            new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
            new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "B"),
            new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "1")
          ],
          sortProperty: "questions"
        },
        {
          id: "Table13",
          entitySet: "/qualitative_data_sectionABC_Table11",
          filters: [
            new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
            new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
            new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "B"),
            new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "10")
          ],
          sortProperty: "subjectFoReview"
        },
        {
          id: "Table14",
          entitySet: "/qualitative_data_sectionABC_Table11",
          filters: [
            new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
            new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
            new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "B"),
            new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "11")
          ],
          sortProperty: "p1"
        },
        {
          id: "Table15",
          entitySet: "/qualitative_data_sectionABC_Table11",
          filters: [
            new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
            new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
            new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "B"),
            new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "12")
          ],
          sortProperty: "questions"
        },
*/
        



var textAreas = [
  {
    
    id: "textArea1",
    entitySet: "/qualitative_data_sectionABC",
    filters: [
      new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
      new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
      new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "A"),
      new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "1")
    ],
    sortProperty: "answer"
  },
  {
    id: "textArea2",
    entitySet: "/qualitative_data_sectionABC",
    filters: [
      new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
      new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
      new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "A"),
      new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "2")
    ],
    sortProperty: "answer"
  },
  {
    id: "textArea3",
    entitySet: "/qualitative_data_sectionABC",
    filters: [
      new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
      new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
      new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "A"),
      new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "3")
    ],
    sortProperty: "answer"
  },
  {
    id: "textArea4",
    entitySet: "/qualitative_data_sectionABC",
    filters: [
      new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
      new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
      new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "A"),
      new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "4")
    ],
    sortProperty: "answer"
  },
  {
    id: "textArea5",
    entitySet: "/qualitative_data_sectionABC",
    filters: [
      new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
      new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
      new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "A"),
      new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "5")
    ],
    sortProperty: "answer"
  },
  {
    id: "textArea6",
    entitySet: "/qualitative_data_sectionABC",
    filters: [
      new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
      new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
      new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "A"),
      new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "6")
    ],
    sortProperty: "answer"
  },
  {
    id: "textArea7",
    entitySet: "/qualitative_data_sectionABC",
    filters: [
      new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
      new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
      new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "A"),
      new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "7")
    ],
    sortProperty: "answer"
  },
  {
    id: "textArea8",
    entitySet: "/qualitative_data_sectionABC",
    filters: [
      new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
      new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
      new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "A"),
      new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "8")
    ],
    sortProperty: "answer"
  },
  {
    id: "textArea9",
    entitySet: "/qualitative_data_sectionABC",
    filters: [
      new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
      new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
      new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "A"),
      new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "9")
    ],
    sortProperty: "answer"
  },
  {
    id: "textArea10",
    entitySet: "/qualitative_data_sectionABC",
    filters: [
      new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
      new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
      new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "A"),
      new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "10")
    ],
    sortProperty: "answer"
  },
  {
    id: "textArea11",
    entitySet: "/qualitative_data_sectionABC",
    filters: [
      new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
      new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
      new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "A"),
      new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "11")
    ],
    sortProperty: "answer"
  },
  {
    id: "textArea12",
    entitySet: "/qualitative_data_sectionABC",
    filters: [
      new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
      new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
      new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "A"),
      new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "12")
    ],
    sortProperty: "answer"
  },
  {
    id: "textArea13",
    entitySet: "/qualitative_data_sectionABC",
    filters: [
      new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
      new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
      new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "A"),
      new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "13")
    ],
    sortProperty: "answer"
  },
  {
    id: "textArea14",
    entitySet: "/qualitative_data_sectionABC",
    filters: [
      new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
      new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
      new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "A"),
      new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "14")
    ],
    sortProperty: "answer"
  },
  {
    id: "textArea15",
    entitySet: "/qualitative_data_sectionABC",
    filters: [
      new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
      new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
      new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "A"),
      new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "15")
    ],
    sortProperty: "answer"
  },

  {
    id: "textArea16",
    entitySet: "/qualitative_data_sectionABC",
    filters: [
      new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
      new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
      new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "A"),
      new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "19a")
    ],
    sortProperty: "answer"
  },
  {
    id: "textArea17",
    entitySet: "/qualitative_data_sectionABC",
    filters: [
      new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
      new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
      new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "A"),
      new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "19b")
    ],
    sortProperty: "answer"
  },
  {
    id: "textArea18",
    entitySet: "/qualitative_data_sectionABC",
    filters: [
      new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
      new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
      new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "A"),
      new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "20")
    ],
    sortProperty: "answer"
  },
  {
    id: "textArea19",
    entitySet: "/qualitative_data_sectionABC",
    filters: [
      new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
      new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
      new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "A"),
      new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "24a")
    ],
    sortProperty: "answer"
  },
  {
    id: "textArea20",
    entitySet: "/qualitative_data_sectionABC",
    filters: [
      new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
      new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
      new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "A"),
      new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "24b")
    ],
    sortProperty: "answer"
  },
  {
    id: "textArea21",
    entitySet: "/qualitative_data_sectionABC",
    filters: [
      new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
      new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
      new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "A"),
      new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "24c")
    ],
    sortProperty: "answer"
  },
  {
    id: "textArea22",
    entitySet: "/qualitative_data_sectionABC",
    filters: [
      new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
      new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
      new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "B"),
      new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "7")
    ],
    sortProperty: "answer"
  },
  {
    id: "textArea23",
    entitySet: "/qualitative_data_sectionABC",
    filters: [
      new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
      new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
      new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "B"),
      new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "8")
    ],
    sortProperty: "answer"
  },
  {
    id: "textArea24",
    entitySet: "/qualitative_data_sectionABC",
    filters: [
      new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
      new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
      new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "B"),
      new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "9")
    ],
    sortProperty: "answer"
  },
];
  

function updateTextArea(textAreaConfig) {
  var oTextArea = this.getView().byId(textAreaConfig.id);
  var oModel = this.getView().getModel("Catalog"); 

  // Perform a read operation to fetch data (e.g., text for the TextArea) from the model
  oModel.read("/qualitative_data_sectionABC", {
    filters: textAreaConfig.filters,
    success: function (data, response) {
      if (data.results.length > 0) {
        var newText = data.results[0].answer;

        // Update the value of the TextArea
        oTextArea.setValue(newText);
      }
    },
    error: function (error) {
      console.log("TextArea Read Error:", error); // Log the error
    }
  });
}

// Loop through the TextArea configurations and update each TextArea
for (var i = 0; i < textAreas.length; i++) {
  updateTextArea.call(this, textAreas[i]);
}




















      // that.Table2(selectedYear);























      that.ehsdata(selectedYear);
      that._status(selectedYear);
      that._getQ3Table(selectedYear);
      that._getQ4Table(selectedYear);
      that._statushr(selectedYear);
      that._getQ3TableHR(selectedYear);
      that._getQ14Table(selectedYear);
      that._getQ15Table(selectedYear);
      that._getQ17Table(selectedYear);
      that._getQ18Table(selectedYear);
      that._getQ19Table(selectedYear);
      that._getQ20Table(selectedYear);
      that._getQ21Table(selectedYear);
      that.quantitativeHr(selectedYear);
      that.ehsdata1(selectedYear);
      that.ehstable1(selectedYear, "tableq12");
      that.ehstable2(selectedYear, "tableq13");
      that.ehstable3(selectedYear, "tableq14");
      that.ehstable4(selectedYear, "tableq16");
      that.quantitativeEHS(selectedYear);
      that._statusf(selectedYear);
      that._getQ3fTable(selectedYear);
      that.quantitativef(selectedYear);
      that.ehsdata2(selectedYear);
      that.ehstable1c(selectedYear, "tableq1a");
      that.ehstable2c(selectedYear, "tableq3a");
      that.ehstable3c(selectedYear, "tableq6a");
      that.ehstable4c(selectedYear, "tableq7a");
      that.ehstable5c(selectedYear, "tableq8a");
      that.quantitativec(selectedYear);
      that.ehsdata3(selectedYear);
      that.quantitativep(selectedYear);

    },
    quantitativep: function (fiscalyear) {
      var oODataModel = this.getView().getModel("Catalog");
      var inputMaterialTable = this.getView().byId("idInputMaterialTable");

      inputMaterialTable.removeAllItems();
      var detailsConcentrationTable = this.getView().byId("idDetailsConcentrationTable");

      detailsConcentrationTable.removeAllItems();
      oODataModel.read("/qualitative_data_Procurement(up__fiscalYear='" + fiscalyear + "',up__businessFunction='Procurement',principle='8',indicator='Essential',questionID='4')/principle8_essential_4", {
        success: function (oData) {
          let aItems = [];
          for (let i = 0; i < oData.results.length; i++) {
            let oItem = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: oData.results[i].sourceOfInputMaterial }),
                new sap.m.Input({ value: oData.results[i].valueForCurrentFinancialYear, editable: false }),
                new sap.m.Input({ value: oData.results[i].valueForPreviousFinancialYear, editable: false }),
              ]
            });
            if (oData.results[i].position === 0) {
              aItems[0] = oItem;
            }
            else if (oData.results[i].position === 1) {
              aItems[1] = oItem;
            }
          }
          for (let i = 0; i < aItems.length; i++)
            inputMaterialTable.addItem(aItems[i]);

        },
        error: function (oError) {
          that.getView().setBusy(false);

        }
      });


      oODataModel.read("/qualitative_data_Procurement(up__fiscalYear='" + fiscalyear + "',up__businessFunction='Procurement',principle='1',indicator='Essential',questionID='9')/principle1_essential_9", {
        success: function (oData) {
          let aItems = [];
          for (let i = 0; i < oData.results.length; i++) {
            let oItem = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: oData.results[i].parameter }),
                new sap.m.Text({ text: oData.results[i].metrics }),
                new sap.m.Input({ value: oData.results[i].valueForCurrentFinancialYear, editable: false }),
                new sap.m.Input({ value: oData.results[i].valueForPreviousFinancialYear, editable: false }),
              ]
            });
            if (oData.results[i].position === 0) {
              aItems[0] = oItem;
            }
            else if (oData.results[i].position === 1) {
              aItems[1] = oItem;
            }
            else if (oData.results[i].position === 2) {
              aItems[2] = oItem;
            }
            else if (oData.results[i].position === 3) {
              aItems[3] = oItem;
            }
            else if (oData.results[i].position === 4) {
              aItems[4] = oItem;
            }
            else if (oData.results[i].position === 5) {
              aItems[5] = oItem;
            }
            else if (oData.results[i].position === 6) {
              aItems[6] = oItem;
            }
            else if (oData.results[i].position === 7) {
              aItems[7] = oItem;
            }
            else if (oData.results[i].position === 8) {
              aItems[8] = oItem;
            }
            else if (oData.results[i].position === 9) {
              aItems[9] = oItem;
            }
          }
          for (let i = 0; i < aItems.length; i++)
            detailsConcentrationTable.addItem(aItems[i]);
          that.getView().setBusy(false);

        },
        error: function (oError) {
          that.getView().setBusy(false);
          debugger;
        }
      });

    },
    ehsdata3: function (fyear) {
      var oODataModel = this.getView().getModel("Catalog");
      var Filter1 = new sap.ui.model.Filter("fiscalYear", sap.ui.model.FilterOperator.EQ, fyear);
      var Filter2 = new sap.ui.model.Filter("businessFunction", sap.ui.model.FilterOperator.EQ, 'Procurement');

      oODataModel.read("/qualitative_data", {
        urlParameters: {
          "$expand": "Procurement",
        },
        filters: [Filter1, Filter2],
        success: function (Data, response) {

          that.getView().byId("id_answ1p").setValue(Data.results[0].Procurement.results[0].answer);
          that.getView().byId("id_answ2p").setValue(Data.results[0].Procurement.results[1].answer);
          that.getView().byId("id_answ3p").setValue(Data.results[0].Procurement.results[2].answer);
          that.getView().byId("id_answ4p").setValue(Data.results[0].Procurement.results[3].answer);
          that.getView().byId("id_answ5p").setValue(Data.results[0].Procurement.results[4].answer);


        },
        error: function (Error) {
          MessageBox.warning("Error while reading Data.");
        }
      });
    },

    quantitativec: function (fiscalyear) {
      var monetary = this.getView().byId("idMonetaryTable");
      monetary.removeAllItems();
      var nonMonetary = this.getView().byId("idNonMonetaryTable");
      nonMonetary.removeAllItems();
      var oTable = this.getView().byId("idTable");
      oTable.removeAllItems();
      var oTable1 = this.getView().byId("idTable1");
      oTable1.removeAllItems();
      var idQuestionsTable = this.getView().byId("idQuestionsTable");
      idQuestionsTable.removeAllItems();
      var oODataModel = this.getView().getModel("Catalog");
      oODataModel.read("/qualitative_data_Legal_Compliance(up__fiscalYear='" + fiscalyear + "',up__businessFunction='Legal_Compliance',principle='1',indicator='Essential',questionID='2')/principle1_essential_2", {
        success: function (oData) {
          let aItems = [];
          let aItems1 = [];
          for (let i = 0; i < oData.results.length; i++) {
            if (oData.results[i].type === "Monetary") {
              let oItem = new sap.m.ColumnListItem({
                cells: [
                  new sap.m.Text({ text: oData.results[i].typeOfPaidAmount }),
                  new sap.m.Input({ value: oData.results[i].ngrbcPrinciple, editable: false }),
                  new sap.m.Input({ value: oData.results[i].nameOfInstitutions, editable: false }),
                  new sap.m.Input({ value: oData.results[i].amountInINR, editable: false }),
                  new sap.m.Input({ value: oData.results[i].briefOfTheCase, editable: false }),
                  new sap.m.Input({ value: oData.results[i].hasAnAppealBeen, editable: false }),
                ]
              });
              if (oData.results[i].position === 0) {
                aItems[0] = oItem;
              }
              if (oData.results[i].position === 1) {
                aItems[1] = oItem;
              }
              if (oData.results[i].position === 2) {
                aItems[2] = oItem;
              }

            }
            if (oData.results[i].type === "Non-Monetary") {
              let oItem = new sap.m.ColumnListItem({
                cells: [
                  new sap.m.Text({ text: oData.results[i].typeOfPaidAmount }),
                  new sap.m.Input({ value: oData.results[i].ngrbcPrinciple, editable: false }),
                  new sap.m.Input({ value: oData.results[i].nameOfInstitutions, editable: false }),
                  new sap.m.Input({ value: oData.results[i].amountInINR, editable: false }),
                  new sap.m.Input({ value: oData.results[i].briefOfTheCase, editable: false }),
                  new sap.m.Input({ value: oData.results[i].hasAnAppealBeen, editable: false }),
                ]
              });
              if (oData.results[i].position === 0) {
                aItems1[0] = oItem;
              }
              if (oData.results[i].position === 1) {
                aItems1[1] = oItem;
              }
            }
          }
          for (let i = 0; i < aItems.length; i++)
            monetary.addItem(aItems[i]);

          for (let i = 0; i < aItems1.length; i++)
            nonMonetary.addItem(aItems1[i]);
        },
        error: function (oError) {
          debugger;
        }

      });

      oODataModel.read("/qualitative_data_Legal_Compliance(up__fiscalYear='" + fiscalyear + "',up__businessFunction='Legal_Compliance',principle='1',indicator='Essential',questionID='5')/principle1_essential_5", {
        success: function (oData) {
          let aItems = [];
          for (let i = 0; i < oData.results.length; i++) {
            let oItem = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: oData.results[i].typeOfWorkers }),
                new sap.m.Input({ value: oData.results[i].valueForCurrentFinancialYear, editable: false }),
                new sap.m.Input({ value: oData.results[i].valueForPreviousFinancialYear, editable: false }),
              ]
            });
            if (oData.results[i].position === 0) {
              aItems[0] = oItem;
            }
            if (oData.results[i].position === 1) {
              aItems[1] = oItem;
            }
            if (oData.results[i].position === 2) {
              aItems[2] = oItem;
            }
            if (oData.results[i].position === 3) {
              aItems[3] = oItem;
            }
          }
          for (let i = 0; i < aItems.length; i++)
            oTable.addItem(aItems[i]);
        },
        error: function (oError) {
          debugger;
        }

      });

      oODataModel.read("/qualitative_data_Legal_Compliance(up__fiscalYear='" + fiscalyear + "',up__businessFunction='Legal_Compliance',principle='1',indicator='Essential',questionID='6')/principle1_essential_6", {
        success: function (oData) {
          let aItems = [];
          for (let i = 0; i < oData.results.length; i++) {
            let oItem = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: oData.results[i].detailsOfComplaints }),
                new sap.m.Input({ value: oData.results[i].numberForCurrentFinancialYear, editable: false }),
                new sap.m.Input({ value: oData.results[i].remarksForCurrentFinancialYear, editable: false }),
                new sap.m.Input({ value: oData.results[i].numberForPreviousFinancialYear, editable: false }),
                new sap.m.Input({ value: oData.results[i].remarksForPreviousFinancialYear, editable: false }),
              ]
            });

            if (oData.results[i].position === 0) {
              aItems[0] = oItem;
            }
            if (oData.results[i].position === 1) {
              aItems[1] = oItem;
            }

          }

          for (let i = 0; i < aItems.length; i++)
            oTable1.addItem(aItems[i]);
          that.getView().setBusy(false);
        },
        error: function (oError) {
          debugger;
        }

      });


      oODataModel.read("/qualitative_data_Legal_Compliance(up__fiscalYear='" + fiscalyear + "',up__businessFunction='Legal_Compliance',principle='9',indicator='Essential',questionID='7a')", {
        success: function (oData) {
          let oItem = new sap.m.ColumnListItem({
            cells: [
              new sap.m.Text({ text: "Number of instances of data breaches" }),
              new sap.m.Input({ value: oData.answer, editable: false }),
            ]
          });
          idQuestionsTable.addItem(oItem);
        },
        error: function (oError) {
          debugger;
        }

      });


      oODataModel.read("/qualitative_data_Legal_Compliance(up__fiscalYear='" + fiscalyear + "',up__businessFunction='Legal_Compliance',principle='9',indicator='Essential',questionID='7b')", {
        success: function (oData) {
          let oItem = new sap.m.ColumnListItem({
            cells: [
              new sap.m.Text({ text: "Percentage of data breaches involving personally identifiable information of customers" }),
              new sap.m.Input({ value: oData.answer, editable: false }),
            ]
          });
          idQuestionsTable.addItem(oItem);
        },
        error: function (oError) {
          debugger;
        }

      });

      oODataModel.read("/qualitative_data_Legal_Compliance(up__fiscalYear='" + fiscalyear + "',up__businessFunction='Legal_Compliance',principle='9',indicator='Essential',questionID='7c')", {
        success: function (oData) {
          let oItem = new sap.m.ColumnListItem({
            cells: [
              new sap.m.Text({ text: "Impact, if any, of the data breaches" }),
              new sap.m.Input({ value: oData.answer, editable: false }),
            ]
          });
          idQuestionsTable.addItem(oItem);
        },
        error: function (oError) {
          debugger;
        }

      });

    },
    ehsdata2: function (fyear) {
      var oODataModel = this.getView().getModel("Catalog");
      var Filter1 = new sap.ui.model.Filter("fiscalYear", sap.ui.model.FilterOperator.EQ, fyear);
      var Filter2 = new sap.ui.model.Filter("businessFunction", sap.ui.model.FilterOperator.EQ, 'Legal_Compliance');

      oODataModel.read("/qualitative_data", {
        urlParameters: {
          "$expand": "Legal_Compliance",
        },
        filters: [Filter1, Filter2],
        success: function (Data, response) {

          that.getView().byId("id_answ2c").setValue(Data.results[0].Legal_Compliance.results[1].answer);
          that.getView().byId("id_answ4c").setValue(Data.results[0].Legal_Compliance.results[3].answer);
          that.getView().byId("id_answ5c").setValue(Data.results[0].Legal_Compliance.results[4].answer);


        },
        error: function (Error) {
          that.getView().setBusy(false);
          MessageBox.warning("Error while reading Data.");
        }
      });
    },

    ehstable1c: function (fyear, tid) {
      var oODataModel = this.getView().getModel("Catalog");

      var Filte1 = new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, fyear);
      var Filte2 = new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, 'Legal_Compliance');
      var Filte3 = new sap.ui.model.Filter("principle", sap.ui.model.FilterOperator.EQ, '1');
      var Filte4 = new sap.ui.model.Filter("indicator", sap.ui.model.FilterOperator.EQ, 'Essential');
      var Filte5 = new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, '3E');
      oODataModel.read("/qualitative_data_Legal_Compliance", {
        urlParameters: {
          "$expand": "principle1_essential_3",
        },
        filters: [Filte1, Filte2, Filte3, Filte4, Filte5],
        success: function (Data, response) {
          var oModel1 = new JSONModel();
          oModel1.setData(Data.results[0].principle1_essential_3);
          that.getView().byId(tid).setModel(oModel1, "oModel1");
        },
        error: function (Error) {
          that.getView().setBusy(false);
          MessageBox.warning("Error while reading Data.");
        }
      });

    },

    ehstable2c: function (fyear, tid) {
      var oODataModel = this.getView().getModel("Catalog");

      var Filte1 = new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, fyear);
      var Filte2 = new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, 'Legal_Compliance');
      var Filte3 = new sap.ui.model.Filter("principle", sap.ui.model.FilterOperator.EQ, '1');
      var Filte4 = new sap.ui.model.Filter("indicator", sap.ui.model.FilterOperator.EQ, 'Essential');
      var Filte5 = new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, '6E');
      oODataModel.read("/qualitative_data_Legal_Compliance", {
        filters: [Filte1, Filte2, Filte3, Filte4, Filte5],
        success: function (Data, response) {

          that.getView().byId(tid).getItems()[0].getCells()[1].setValue(Data.results[0].principle1_essential_6_cur_yr_number_directors);
          that.getView().byId(tid).getItems()[0].getCells()[2].setValue(Data.results[0].principle1_essential_6_cur_yr_remark_directors);
          that.getView().byId(tid).getItems()[0].getCells()[3].setValue(Data.results[0].principle1_essential_6_cur_yr_number_kmps);
          that.getView().byId(tid).getItems()[0].getCells()[4].setValue(Data.results[0].principle1_essential_6_cur_yr_remarks_kmps);
          that.getView().byId(tid).getItems()[1].getCells()[1].setValue(Data.results[0].principle1_essential_6_prv_yr_number_directors);
          that.getView().byId(tid).getItems()[1].getCells()[2].setValue(Data.results[0].principle1_essential_6_prv_yr_remark_directors);
          that.getView().byId(tid).getItems()[1].getCells()[3].setValue(Data.results[0].principle1_essential_6_prv_yr_number_kmps);
          that.getView().byId(tid).getItems()[1].getCells()[4].setValue(Data.results[0].principle1_essential_6_prv_yr_remarks_kmps);

        },
        error: function (Error) {
          that.getView().setBusy(false);
          MessageBox.warning("Error while reading Data.");
        }
      });

    },

    ehstable3c: function (fyear, tid) {
      var oODataModel = this.getView().getModel("Catalog");

      var Filte1 = new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, fyear);
      var Filte2 = new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, 'Legal_Compliance');
      var Filte3 = new sap.ui.model.Filter("principle", sap.ui.model.FilterOperator.EQ, '7');
      var Filte4 = new sap.ui.model.Filter("indicator", sap.ui.model.FilterOperator.EQ, 'Essential');
      var Filte5 = new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, '1E');
      oODataModel.read("/qualitative_data_Legal_Compliance", {
        urlParameters: {
          "$expand": "principle7_essential_1",
        },
        filters: [Filte1, Filte2, Filte3, Filte4, Filte5],
        success: function (Data, response) {
          var oModel1 = new JSONModel();
          oModel1.setData(Data.results[0].principle7_essential_1);
          that.getView().byId(tid).setModel(oModel1, "oModel1");
        },
        error: function (Error) {
          that.getView().setBusy(false);
          MessageBox.warning("Error while reading Data.");
        }
      });

    },

    ehstable4c: function (fyear, tid) {
      var oODataModel = this.getView().getModel("Catalog");

      var Filte1 = new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, fyear);
      var Filte2 = new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, 'Legal_Compliance');
      var Filte3 = new sap.ui.model.Filter("principle", sap.ui.model.FilterOperator.EQ, '7');
      var Filte4 = new sap.ui.model.Filter("indicator", sap.ui.model.FilterOperator.EQ, 'Essential');
      var Filte5 = new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, '2E');
      oODataModel.read("/qualitative_data_Legal_Compliance", {
        urlParameters: {
          "$expand": "principle7_essential_2",
        },
        filters: [Filte1, Filte2, Filte3, Filte4, Filte5],
        success: function (Data, response) {
          var oModel1 = new JSONModel();
          oModel1.setData(Data.results[0].principle7_essential_2);
          that.getView().byId(tid).setModel(oModel1, "oModel1");
        },
        error: function (Error) {
          that.getView().setBusy(false);
          MessageBox.warning("Error while reading Data.");
        }
      });

    },

    ehstable5c: function (fyear, tid) {

      var oODataModel = this.getView().getModel("Catalog");
      var Filte1 = new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, fyear);
      var Filte2 = new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, 'Legal_Compliance');
      var Filte3 = new sap.ui.model.Filter("principle", sap.ui.model.FilterOperator.EQ, '7');
      var Filte4 = new sap.ui.model.Filter("indicator", sap.ui.model.FilterOperator.EQ, 'Leadership');
      var Filte5 = new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, '1L');
      oODataModel.read("/qualitative_data_Legal_Compliance", {
        urlParameters: {
          "$expand": "principle7_leadership_1",
        },
        filters: [Filte1, Filte2, Filte3, Filte4, Filte5],
        success: function (Data, response) {
          var oModel1 = new JSONModel();
          oModel1.setData(Data.results[0].principle7_leadership_1);
          that.getView().byId(tid).setModel(oModel1, "oModel1");
        },
        error: function (Error) {
          that.getView().setBusy(false);
          MessageBox.warning("Error while reading Data.");
        }
      });

    },
    quantitativef: function (fiscalyear) {
      var rDTable = this.getView().byId("idRDTable");
      rDTable.removeAllItems();
      var turnoverTable = this.getView().byId("idTurnoverTable");
      turnoverTable.removeAllItems();
      var accountTable = this.getView().byId("idAccountTable");
      accountTable.removeAllItems();
      var oODataModel = this.getView().getModel("Catalog");
      oODataModel.read("/qualitative_data_Finance(up__fiscalYear='" + fiscalyear + "',up__businessFunction='Finance',principle='2',indicator='Essential',questionID='1')/principle2_essential_1", {
        success: function (oData) {
          let aItems = [];
          for (let i = 0; i < oData.results.length; i++) {
            let oItem = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: oData.results[i].typeOfInvestment }),
                new sap.m.Input({ value: oData.results[i].valueForCurrentFinancialYear, editable: false }),
                new sap.m.Input({ value: oData.results[i].valueForPreviousFinancialYear, editable: false }),
                new sap.m.Input({ value: oData.results[i].detailsOfImprovements, editable: false }),
              ]
            });
            if (oData.results[i].position === 0) {
              aItems[0] = oItem;
            }
            else if (oData.results[i].position === 1) {
              aItems[1] = oItem;
            }
          }
          for (let i = 0; i < aItems.length; i++)
            rDTable.addItem(aItems[i]);

        },
        error: function (oError) {
          that.getView().setBusy(false);
          debugger;
        }
      });

      oODataModel.read("/qualitative_data_Finance(up__fiscalYear='" + fiscalyear + "',up__businessFunction='Finance',principle='9',indicator='Essential',questionID='2')/principle9_essential_2", {
        success: function (oData) {
          let aItems = [];
          for (let i = 0; i < oData.results.length; i++) {
            let oItem = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: oData.results[i].nameOfProductOrService }),
                new sap.m.Input({ value: oData.results[i].percentageOfTotalTurnOver, editable: false }),
              ]
            });
            if (oData.results[i].position === 0) {
              aItems[0] = oItem;
            }
            else if (oData.results[i].position === 1) {
              aItems[1] = oItem;
            }
            else if (oData.results[i].position === 2) {
              aItems[2] = oItem;
            }
          }
          for (let i = 0; i < aItems.length; i++)
            turnoverTable.addItem(aItems[i]);

        },
        error: function (oError) {
          that.getView().setBusy(false);
          debugger;
        }
      });

      oODataModel.read("/qualitative_data_Finance(up__fiscalYear='" + fiscalyear + "',up__businessFunction='Finance',principle='1',indicator='Essential',questionID='8')/principle1_essential_8", {
        success: function (oData) {
          for (let i = 0; i < oData.results.length; i++) {
            let oItem = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: oData.results[i].type }),
                new sap.m.Input({ value: oData.results[i].valueForCurrentFinancialYear, editable: false }),
                new sap.m.Input({ value: oData.results[i].valueForPreviousFinancialYear, editable: false }),
              ]
            });
            accountTable.addItem(oItem);
            that.getView().setBusy(false);
          }

        },
        error: function (oError) {
          that.getView().setBusy(false);
          debugger;
        }
      });

    },
    _statusf: function (fiscalyear) {
      var oODataModel = this.getView().getModel("Catalog");
      var Filter1 = new sap.ui.model.Filter("fiscalYear", sap.ui.model.FilterOperator.EQ, fiscalyear);
      var Filter2 = new sap.ui.model.Filter("businessFunction", sap.ui.model.FilterOperator.EQ, 'Finance');
      var pathBf = "/qualitative_data";
      oODataModel.read(pathBf, {
        urlParameters: {
          "$expand": "Finance",
        },
        filters: [Filter1, Filter2],
        success: function (data) {
          that.getView().byId("id_answ1f").setValue(data.results[0].Finance.results[0].answer);
          that.getView().byId("id_answ2f").setValue(data.results[0].Finance.results[1].answer);
          that.getView().byId("id_answ4f").setValue(data.results[0].Finance.results[3].answer);
          that.getView().byId("id_answ5f").setValue(data.results[0].Finance.results[4].answer);
          that.getView().byId("id_answ6f").setValue(data.results[0].Finance.results[5].answer);







        },
        error: function (error) {
          console.log(error);
        }
      });

    },
    _getQ3fTable: function (fiscalyear) {
      var oODataModel = this.getView().getModel("Catalog");
      var pathBf = "/qualitative_data_Finance(up__fiscalYear='" + fiscalyear + "',up__businessFunction='Finance',principle='4',indicator='Essential',questionID='2E')/principle4_essential_2";
      var table = this.getView().byId("_IDGenTable1f");
      oODataModel.read(pathBf, {
        success: function (data) {

          for (let i = 0; i < data.results.length; i++) {
            var oItem = new sap.m.ColumnListItem({
              cells: [new sap.m.TextArea({ maxLength: 1500, value: data.results[i].stakeholder_group, editable: false, wrapping: "Hard" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].identifies_as_vulnerable_marginalized_group, editable: false, wrapping: "Hard" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].channels_of_communication, editable: false, wrapping: "Hard" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].frequency_of_engagement, editable: false, wrapping: "Hard" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].purpose_scope_of_engagement, editable: false, wrapping: "Hard" })
              ]
            })
            table.addItem(oItem);
          }


        },
        error: function (data) {
          console.log(error);

        }
      });

    },
    quantitativeEHS: function (fiscalyear) {
      var pFiscalYear = String(parseInt(fiscalyear) - 1);
      var oODataModel = this.getView().getModel("Catalog");
      oODataModel.read("/ehs_energyConsumption?$filter=zyear eq '" + fiscalyear + "' or zyear eq '" + pFiscalYear + "'", {
        success: function (oData) {
          that.getView().byId("table1").setVisible(true);
          let oTable1Data = {};
          for (let i = 0; i < oData.results.length; i++) {
            if (oData.results[i].zyear === pFiscalYear) {
              oTable1Data.previousYear = oData.results[i];
            }
            else if (oData.results[i].zyear === fiscalyear) {
              oTable1Data.currentYear = oData.results[i];
            }

          }
          let oTable1Model = new JSONModel(oTable1Data);
          that.getView().setModel(oTable1Model, "oTable1");
        },
        error: function (oError) {
          debugger;
        }
      });

      oODataModel.read("/ehs_waterDisclosures?$filter=zyear eq '" + fiscalyear + "' or zyear eq '" + pFiscalYear + "'", {
        success: function (oData) {
          that.getView().byId("table2").setVisible(true);
          let oTable1Data = {};
          for (let i = 0; i < oData.results.length; i++) {
            if (oData.results[i].zyear === pFiscalYear) {
              oTable1Data.previousYear = oData.results[i];
            }
            else if (oData.results[i].zyear === fiscalyear) {
              oTable1Data.currentYear = oData.results[i];
            }

          }
          let oTable1Model = new JSONModel(oTable1Data);
          that.getView().setModel(oTable1Model, "oTable2");
        },
        error: function (oError) {
          debugger;
        }
      });

      oODataModel.read("/ehs_waterDischarged?$filter=zyear eq '" + fiscalyear + "' or zyear eq '" + pFiscalYear + "'", {
        success: function (oData) {
          that.getView().byId("table3").setVisible(true);
          let oTable1Data = {};
          for (let i = 0; i < oData.results.length; i++) {
            if (oData.results[i].zyear === pFiscalYear) {
              oTable1Data.previousYear = oData.results[i];
            }
            else if (oData.results[i].zyear === fiscalyear) {
              oTable1Data.currentYear = oData.results[i];
            }

          }
          let oTable1Model = new JSONModel(oTable1Data);
          that.getView().setModel(oTable1Model, "oTable3");
        },
        error: function (oError) {
          debugger;
        }
      });

      oODataModel.read("/ehs_airEmission?$filter=zyear eq '" + fiscalyear + "' or zyear eq '" + pFiscalYear + "'", {
        success: function (oData) {
          that.getView().byId("table4").setVisible(true);
          let oTable1Data = {};
          for (let i = 0; i < oData.results.length; i++) {
            if (oData.results[i].zyear === pFiscalYear) {
              oTable1Data.previousYear = oData.results[i];
            }
            else if (oData.results[i].zyear === fiscalyear) {
              oTable1Data.currentYear = oData.results[i];
            }

          }
          let oTable1Model = new JSONModel(oTable1Data);
          that.getView().setModel(oTable1Model, "oTable4");
        },
        error: function (oError) {
          debugger;
        }
      });

      oODataModel.read("/ehs_ghgEmission?$filter=zyear eq '" + fiscalyear + "' or zyear eq '" + pFiscalYear + "'", {
        success: function (oData) {
          that.getView().byId("table5").setVisible(true);
          let oTable1Data = {};
          for (let i = 0; i < oData.results.length; i++) {
            if (oData.results[i].zyear === pFiscalYear) {
              oTable1Data.previousYear = oData.results[i];
            }
            else if (oData.results[i].zyear === fiscalyear) {
              oTable1Data.currentYear = oData.results[i];
            }

          }
          let oTable1Model = new JSONModel(oTable1Data);
          that.getView().setModel(oTable1Model, "oTable5");
        },
        error: function (oError) {
          debugger;
        }
      });

      oODataModel.read("/ehs_wasteManagement?$filter=zyear eq '" + fiscalyear + "' or zyear eq '" + pFiscalYear + "'", {
        success: function (oData) {
          that.getView().byId("table6").setVisible(true);
          let oTable1Data = {};
          for (let i = 0; i < oData.results.length; i++) {
            if (oData.results[i].zyear === pFiscalYear) {
              oTable1Data.previousYear = oData.results[i];
            }
            else if (oData.results[i].zyear === fiscalyear) {
              oTable1Data.currentYear = oData.results[i];
            }

          }
          let oTable1Model = new JSONModel(oTable1Data);
          that.getView().setModel(oTable1Model, "oTable6");
        },
        error: function (oError) {
          debugger;
        }
      });

      oODataModel.read("/ehs_scope3emission?$filter=zyear eq '" + fiscalyear + "' or zyear eq '" + pFiscalYear + "'", {
        success: function (oData) {
          that.getView().byId("table7").setVisible(true);
          let oTable1Data = {};
          for (let i = 0; i < oData.results.length; i++) {
            if (oData.results[i].zyear === pFiscalYear) {
              oTable1Data.previousYear = oData.results[i];
            }
            else if (oData.results[i].zyear === fiscalyear) {
              oTable1Data.currentYear = oData.results[i];
            }

          }
          let oTable1Model = new JSONModel(oTable1Data);
          that.getView().setModel(oTable1Model, "oTable7");
        },
        error: function (oError) {
          debugger;
        }
      });

      oODataModel.read("/ehs_safetyRelatedIncidents?$filter=zyear eq '" + fiscalyear + "' or zyear eq '" + pFiscalYear + "'", {
        success: function (oData) {
          that.getView().byId("table8").setVisible(true);
          let oTable1Data = {};
          for (let i = 0; i < oData.results.length; i++) {
            if (oData.results[i].zyear === pFiscalYear) {
              oTable1Data.previousYear = oData.results[i];
            }
            else if (oData.results[i].zyear === fiscalyear) {
              oTable1Data.currentYear = oData.results[i];
            }

          }
          let oTable1Model = new JSONModel(oTable1Data);
          that.getView().setModel(oTable1Model, "oTable8");
        },
        error: function (oError) {
          debugger;
        }
      });

      oODataModel.read("/ehs_detailsOfComplaints?$filter=zyear eq '" + fiscalyear + "' or zyear eq '" + pFiscalYear + "'", {
        success: function (oData) {
          that.getView().byId("table9").setVisible(true);
          let oTable1Data = {};
          for (let i = 0; i < oData.results.length; i++) {
            if (oData.results[i].zyear === pFiscalYear) {
              oTable1Data.previousYear = oData.results[i];
            }
            else if (oData.results[i].zyear === fiscalyear) {
              oTable1Data.currentYear = oData.results[i];
            }

          }
          let oTable1Model = new JSONModel(oTable1Data);
          that.getView().setModel(oTable1Model, "oTable9");
        },
        error: function (oError) {
          debugger;
        }
      });
    },
    ehsdata1: function (fyear) {
      var oODataModel = this.getView().getModel("Catalog");
      var Filter1 = new sap.ui.model.Filter("fiscalYear", sap.ui.model.FilterOperator.EQ, fyear);
      var Filter2 = new sap.ui.model.Filter("businessFunction", sap.ui.model.FilterOperator.EQ, 'EHS');

      oODataModel.read("/qualitative_data", {
        urlParameters: {
          "$expand": "EHS",
        },
        filters: [Filter1, Filter2],
        success: function (Data, response) {

          that.getView().byId("id_answ1ehs").setValue(Data.results[0].EHS.results[0].answer);
          that.getView().byId("id_answ2ehs").setValue(Data.results[0].EHS.results[1].answer);
          that.getView().byId("id_answ3ehs").setValue(Data.results[0].EHS.results[2].answer);
          that.getView().byId("id_answ4ehs").setValue(Data.results[0].EHS.results[3].answer);
          that.getView().byId("id_answ5ehs").setValue(Data.results[0].EHS.results[4].answer);
          that.getView().byId("id_answ6ehs").setValue(Data.results[0].EHS.results[5].answer);
          that.getView().byId("id_answ7ehs").setValue(Data.results[0].EHS.results[6].answer);
          that.getView().byId("id_answ8ehs").setValue(Data.results[0].EHS.results[7].answer);
          that.getView().byId("id_answ9ehs").setValue(Data.results[0].EHS.results[8].answer);
          that.getView().byId("id_answ10ehs").setValue(Data.results[0].EHS.results[9].answer);
          that.getView().byId("id_answ11ehs").setValue(Data.results[0].EHS.results[10].answer);
          that.getView().byId("id_answ15ehs").setValue(Data.results[0].EHS.results[14].answer);
          that.getView().byId("id_answ17ehs").setValue(Data.results[0].EHS.results[16].answer);


        },
        error: function (Error) {
          that.getView().setBusy(false);
          MessageBox.warning("Error while reading Data.");
        }
      });
    },
    ehstable1: function (fyear, tid) {

      var oODataModel = this.getView().getModel("Catalog");
      var Filte1 = new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, fyear);
      var Filte2 = new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, 'EHS');
      var Filte3 = new sap.ui.model.Filter("principle", sap.ui.model.FilterOperator.EQ, '6');
      var Filte4 = new sap.ui.model.Filter("indicator", sap.ui.model.FilterOperator.EQ, 'Essential');
      var Filte5 = new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, '11E');
      oODataModel.read("/qualitative_data_EHS", {
        urlParameters: {
          "$expand": "principle6_essential_11",
        },
        filters: [Filte1, Filte2, Filte3, Filte4, Filte5],
        success: function (Data, response) {
          var oModel1 = new JSONModel();
          oModel1.setData(Data.results[0].principle6_essential_11);
          that.getView().byId(tid).setModel(oModel1, "oModel1");
        },
        error: function (Error) {
          that.getView().setBusy(false);
          MessageBox.warning("Error while reading Data.");
        }
      });

    },

    ehstable2: function (fyear, tid) {

      var oODataModel = this.getView().getModel("Catalog");
      var Filte1 = new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, fyear);
      var Filte2 = new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, 'EHS');
      var Filte3 = new sap.ui.model.Filter("principle", sap.ui.model.FilterOperator.EQ, '6');
      var Filte4 = new sap.ui.model.Filter("indicator", sap.ui.model.FilterOperator.EQ, 'Essential');
      var Filte5 = new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, '12E');
      oODataModel.read("/qualitative_data_EHS", {
        urlParameters: {
          "$expand": "principle6_essential_12",
        },
        filters: [Filte1, Filte2, Filte3, Filte4, Filte5],
        success: function (Data, response) {
          var oModel1 = new JSONModel();
          oModel1.setData(Data.results[0].principle6_essential_12);
          that.getView().byId(tid).setModel(oModel1, "oModel1");
        },
        error: function (Error) {
          that.getView().setBusy(false);
          MessageBox.warning("Error while reading Data.");
        }
      });

    },

    ehstable3: function (fyear, tid) {

      var oODataModel = this.getView().getModel("Catalog");
      var Filte1 = new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, fyear);
      var Filte2 = new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, 'EHS');
      var Filte3 = new sap.ui.model.Filter("principle", sap.ui.model.FilterOperator.EQ, '6');
      var Filte4 = new sap.ui.model.Filter("indicator", sap.ui.model.FilterOperator.EQ, 'Essential');
      var Filte5 = new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, '13E');
      oODataModel.read("/qualitative_data_EHS", {
        urlParameters: {
          "$expand": "principle6_essential_13",
        },
        filters: [Filte1, Filte2, Filte3, Filte4, Filte5],
        success: function (Data, response) {
          var oModel1 = new JSONModel();
          oModel1.setData(Data.results[0].principle6_essential_13);
          that.getView().byId(tid).setModel(oModel1, "oModel1");
        },
        error: function (Error) {
          that.getView().setBusy(false);
          MessageBox.warning("Error while reading Data.");
        }
      });

    },

    ehstable4: function (fyear, tid) {

      var oODataModel = this.getView().getModel("Catalog");
      var Filte1 = new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, fyear);
      var Filte2 = new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, 'EHS');
      var Filte3 = new sap.ui.model.Filter("principle", sap.ui.model.FilterOperator.EQ, '6');
      var Filte4 = new sap.ui.model.Filter("indicator", sap.ui.model.FilterOperator.EQ, 'Leadership');
      var Filte5 = new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, '4L');
      oODataModel.read("/qualitative_data_EHS", {
        urlParameters: {
          "$expand": "principle6_leadership_4",
        },
        filters: [Filte1, Filte2, Filte3, Filte4, Filte5],
        success: function (Data, response) {
          var oModel1 = new JSONModel();
          oModel1.setData(Data.results[0].principle6_leadership_4);
          that.getView().byId(tid).setModel(oModel1, "oModel1");
        },
        error: function (Error) {
          that.getView().setBusy(false);
          MessageBox.warning("Error while reading Data.");
        }
      });

    },

    quantitativeHr: function (fiscalyear) {
      var oODataModel = this.getView().getModel("Catalog");
      var TableSegment = this.getView().byId("idTableSegment");
      TableSegment.removeAllItems();
      var PEmpTable = this.getView().byId("idPEmpTable");
      PEmpTable.removeAllItems();
      var NPEmpTable = this.getView().byId("idNPEmpTable");
      NPEmpTable.removeAllItems();
      var WorkerTable = this.getView().byId("idWorkerTable");
      WorkerTable.removeAllItems();
      var NonWorkerTable = this.getView().byId("idNonWorkerTable");
      NonWorkerTable.removeAllItems();
      var RetireBenfTable = this.getView().byId("idRetireBenfTable");
      RetireBenfTable.removeAllItems();
      var MembershipEmpTable = this.getView().byId("idMembershipEmpTable");
      MembershipEmpTable.removeAllItems();
      var MembershipWorTable = this.getView().byId("idMembershipWorTable");
      MembershipWorTable.removeAllItems();
      var RateofWorkAndLeaveTable = this.getView().byId("idRateofWorkAndLeaveTable");
      RateofWorkAndLeaveTable.removeAllItems();
      var PEmpTrainingTable = this.getView().byId("idPEmpTrainingTable");
      PEmpTrainingTable.removeAllItems();
      var WorkTrainingTable = this.getView().byId("idWorkTrainingTable");
      WorkTrainingTable.removeAllItems();
      var PerEmpTable = this.getView().byId("idPerEmpTable");
      PerEmpTable.removeAllItems();
      var PerWorkTable = this.getView().byId("idPerWorkTable");
      PerWorkTable.removeAllItems();
      var EmpHumanRightTable = this.getView().byId("idEmpHumanRightTable");
      EmpHumanRightTable.removeAllItems();
      var WorkHumanRightTable = this.getView().byId("idWorkHumanRightTable");
      WorkHumanRightTable.removeAllItems();
      var PEmpWageTable = this.getView().byId("idPEmpWageTable");
      PEmpWageTable.removeAllItems();
      var WorkWageTable = this.getView().byId("idWorkWageTable");
      WorkWageTable.removeAllItems();
      var WageTable = this.getView().byId("idWageTable");
      WageTable.removeAllItems();
      var ComplaintTable = this.getView().byId("idComplaintTable");
      ComplaintTable.removeAllItems();
      var AssessmentsTable = this.getView().byId("idAssessmentsTable");
      AssessmentsTable.removeAllItems();
      var SpendTable = this.getView().byId("idSpendTable");
      SpendTable.removeAllItems();
      var GrossWageTable = this.getView().byId("idGrossWageTable");
      GrossWageTable.removeAllItems();
      var CompFiledTable = this.getView().byId("idCompFiledTable");
      CompFiledTable.removeAllItems();
      var JobCreationTable = this.getView().byId("idJobCreationTable");
      JobCreationTable.removeAllItems();
      oODataModel.read("/qualitative_data_HR(up__fiscalYear='" + fiscalyear + "',up__businessFunction='HR',principle='1',indicator='Essential',questionID='1')/principle1_essential_1", {
        success: function (oData) {
          let aItems = [];
          for (let i = 0; i < oData.results.length; i++) {
            let oItem = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: oData.results[i].segment }),
                new sap.m.Input({ value: oData.results[i].numberOfTrainingPrograms, editable: false }),
                new sap.m.Input({ value: oData.results[i].topicsCoveredUnderTraining, editable: false }),
                new sap.m.Input({ value: oData.results[i].percentageOfPersonsInRespectiveCategory, editable: false }),
              ]
            });
            if (oData.results[i].position === 0) {
              aItems[0] = oItem;
            }
            else if (oData.results[i].position === 1) {
              aItems[1] = oItem;
            }
            else if (oData.results[i].position === 2) {
              aItems[2] = oItem;
            }
            else if (oData.results[i].position === 3) {
              aItems[3] = oItem;
            }
          }
          for (let i = 0; i < aItems.length; i++)
            TableSegment.addItem(aItems[i]);
        },
        error: function (oError) {
          debugger;
        }
      });
      oODataModel.read("/qualitative_data_HR(up__fiscalYear='" + fiscalyear + "',up__businessFunction='HR',principle='3',indicator='Essential',questionID='1a')/principle3_essential_1a", {
        success: function (oData) {
          let aItems = [];
          let aItems1 = [];
          for (let i = 0; i < oData.results.length; i++) {
            if (oData.results[i].type === "Permanent employees") {
              let oItem = new sap.m.ColumnListItem({
                cells: [
                  new sap.m.Text({ text: oData.results[i].category }),
                  new sap.m.Input({ value: oData.results[i].total, editable: false }),
                  new sap.m.Input({ value: oData.results[i].numberOfHealthInsurance, editable: false }),
                  new sap.m.Input({ value: oData.results[i].percentageOfHealthInsurance, editable: false }),
                  new sap.m.Input({ value: oData.results[i].numberOfAccidentInsurance, editable: false }),
                  new sap.m.Input({ value: oData.results[i].percentageOfAccidentInsurance, editable: false }),
                  new sap.m.Input({ value: oData.results[i].numberOfMaternityBenefits, editable: false }),
                  new sap.m.Input({ value: oData.results[i].percentageOfMaternityBenefits, editable: false }),
                  new sap.m.Input({ value: oData.results[i].numberOfPaternityBenefits, editable: false }),
                  new sap.m.Input({ value: oData.results[i].percentageOfPaternityBenefits, editable: false }),
                  new sap.m.Input({ value: oData.results[i].numberOfDayCareFacilities, editable: false }),
                  new sap.m.Input({ value: oData.results[i].percentageOfDayCareFacilities, editable: false }),
                ]
              });
              if (oData.results[i].position === 0) {
                aItems[0] = oItem;
              }
              else if (oData.results[i].position === 1) {
                aItems[1] = oItem;
              }
              else if (oData.results[i].position === 2) {
                aItems[2] = oItem;
              }
            }
            else
              if (oData.results[i].type === "Other than Permanent employees") {
                let oItem = new sap.m.ColumnListItem({
                  cells: [
                    new sap.m.Text({ text: oData.results[i].category }),
                    new sap.m.Input({ value: oData.results[i].total, editable: false }),
                    new sap.m.Input({ value: oData.results[i].numberOfHealthInsurance, editable: false }),
                    new sap.m.Input({ value: oData.results[i].percentageOfHealthInsurance, editable: false }),
                    new sap.m.Input({ value: oData.results[i].numberOfAccidentInsurance, editable: false }),
                    new sap.m.Input({ value: oData.results[i].percentageOfAccidentInsurance, editable: false }),
                    new sap.m.Input({ value: oData.results[i].numberOfMaternityBenefits, editable: false }),
                    new sap.m.Input({ value: oData.results[i].percentageOfMaternityBenefits, editable: false }),
                    new sap.m.Input({ value: oData.results[i].numberOfPaternityBenefits, editable: false }),
                    new sap.m.Input({ value: oData.results[i].percentageOfPaternityBenefits, editable: false }),
                    new sap.m.Input({ value: oData.results[i].numberOfDayCareFacilities, editable: false }),
                    new sap.m.Input({ value: oData.results[i].percentageOfDayCareFacilities, editable: false }),
                  ]
                });
                if (oData.results[i].position === 0) {
                  aItems1[0] = oItem;
                }
                else if (oData.results[i].position === 1) {
                  aItems1[1] = oItem;
                }
                else if (oData.results[i].position === 2) {
                  aItems1[2] = oItem;
                }
              }
          }
          for (let i = 0; i < aItems.length; i++)
            PEmpTable.addItem(aItems[i]);
          for (let i = 0; i < aItems1.length; i++)
            NPEmpTable.addItem(aItems1[i]);
        },
        error: function (oError) {
          debugger;
        }
      });
      oODataModel.read("/qualitative_data_HR(up__fiscalYear='" + fiscalyear + "',up__businessFunction='HR',principle='3',indicator='Essential',questionID='1b')/principle3_essential_1b", {
        success: function (oData) {
          let aItems = [];
          let aItems1 = [];
          for (let i = 0; i < oData.results.length; i++) {
            if (oData.results[i].type === "Permanent workers") {
              let oItem = new sap.m.ColumnListItem({
                cells: [
                  new sap.m.Text({ text: oData.results[i].category }),
                  new sap.m.Input({ value: oData.results[i].total, editable: false }),
                  new sap.m.Input({ value: oData.results[i].numberOfHealthInsurance, editable: false }),
                  new sap.m.Input({ value: oData.results[i].percentageOfHealthInsurance, editable: false }),
                  new sap.m.Input({ value: oData.results[i].numberOfAccidentInsurance, editable: false }),
                  new sap.m.Input({ value: oData.results[i].percentageOfAccidentInsurance, editable: false }),
                  new sap.m.Input({ value: oData.results[i].numberOfMaternityBenefits, editable: false }),
                  new sap.m.Input({ value: oData.results[i].percentageOfMaternityBenefits, editable: false }),
                  new sap.m.Input({ value: oData.results[i].numberOfPaternityBenefits, editable: false }),
                  new sap.m.Input({ value: oData.results[i].percentageOfPaternityBenefits, editable: false }),
                  new sap.m.Input({ value: oData.results[i].numberOfDayCareFacilities, editable: false }),
                  new sap.m.Input({ value: oData.results[i].percentageOfDayCareFacilities, editable: false }),
                ]
              });

              if (oData.results[i].position === 0) {
                aItems[0] = oItem;
              }
              else if (oData.results[i].position === 1) {
                aItems[1] = oItem;
              }
              else if (oData.results[i].position === 2) {
                aItems[2] = oItem;
              }
            }
            else
              if (oData.results[i].type === "Other than Permanent workers") {
                let oItem = new sap.m.ColumnListItem({
                  cells: [
                    new sap.m.Text({ text: oData.results[i].category }),
                    new sap.m.Input({ value: oData.results[i].total, editable: false }),
                    new sap.m.Input({ value: oData.results[i].numberOfHealthInsurance, editable: false }),
                    new sap.m.Input({ value: oData.results[i].percentageOfHealthInsurance, editable: false }),
                    new sap.m.Input({ value: oData.results[i].numberOfAccidentInsurance, editable: false }),
                    new sap.m.Input({ value: oData.results[i].percentageOfAccidentInsurance, editable: false }),
                    new sap.m.Input({ value: oData.results[i].numberOfMaternityBenefits, editable: false }),
                    new sap.m.Input({ value: oData.results[i].percentageOfMaternityBenefits, editable: false }),
                    new sap.m.Input({ value: oData.results[i].numberOfPaternityBenefits, editable: false }),
                    new sap.m.Input({ value: oData.results[i].percentageOfPaternityBenefits, editable: false }),
                    new sap.m.Input({ value: oData.results[i].numberOfDayCareFacilities, editable: false }),
                    new sap.m.Input({ value: oData.results[i].percentageOfDayCareFacilities, editable: false }),
                  ]
                });
                if (oData.results[i].position === 0) {
                  aItems1[0] = oItem;
                }
                else if (oData.results[i].position === 1) {
                  aItems1[1] = oItem;
                }
                else if (oData.results[i].position === 2) {
                  aItems1[2] = oItem;
                }
              }
          }
          for (let i = 0; i < aItems.length; i++)
            WorkerTable.addItem(aItems[i]);
          for (let i = 0; i < aItems.length; i++)
            NonWorkerTable.addItem(aItems1[i]);
        },
        error: function (oError) {
          debugger;
        }
      });
      oODataModel.read("/qualitative_data_HR(up__fiscalYear='" + fiscalyear + "',up__businessFunction='HR',principle='3',indicator='Essential',questionID='2')/principle3_essential_2", {
        success: function (oData) {
          let aItems = [];
          for (let i = 0; i < oData.results.length; i++) {
            let oItem = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: oData.results[i].benefits }),
                new sap.m.Input({ value: oData.results[i].currentFYEmployees, editable: false }),
                new sap.m.Input({ value: oData.results[i].currentFYWorkers, editable: false }),
                new sap.m.Input({ value: oData.results[i].currentFYauthority, editable: false }),
                new sap.m.Input({ value: oData.results[i].previousFYEmployees, editable: false }),
                new sap.m.Input({ value: oData.results[i].previousFYWorkers, editable: false }),
                new sap.m.Input({ value: oData.results[i].previousFYauthority, editable: false }),
              ]
            });
            if (oData.results[i].position === 0) {
              aItems[0] = oItem;
            }
            else if (oData.results[i].position === 1) {
              aItems[1] = oItem;
            }
            else if (oData.results[i].position === 2) {
              aItems[2] = oItem;
            }
            else if (oData.results[i].position === 3) {
              aItems[3] = oItem;
            }
          }
          for (let i = 0; i < aItems.length; i++)
            RetireBenfTable.addItem(aItems[i]);
        },
        error: function (oError) {
          debugger;
        }
      });

      oODataModel.read("/qualitative_data_HR(up__fiscalYear='" + fiscalyear + "',up__businessFunction='HR',principle='3',indicator='Essential',questionID='5')/principle3_essential_5", {
        success: function (oData) {
          let aItems = [];
          for (let i = 0; i < oData.results.length; i++) {
            let oItem = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: oData.results[i].gender }),
                new sap.m.Input({ value: oData.results[i].permanentEmployeesReturnToWorkRate, editable: false }),
                new sap.m.Input({ value: oData.results[i].permanentEmployeesRetentionRate, editable: false }),
                new sap.m.Input({ value: oData.results[i].permanentWorkersReturnToWorkRate, editable: false }),
                new sap.m.Input({ value: oData.results[i].permanentWorkersRetentionRate, editable: false }),
              ]
            });
            if (oData.results[i].position === 0) {
              aItems[0] = oItem;
            }
            else if (oData.results[i].position === 1) {
              aItems[1] = oItem;
            }
            else if (oData.results[i].position === 2) {
              aItems[2] = oItem;
            }
          }
          for (let i = 0; i < aItems.length; i++)
            RateofWorkAndLeaveTable.addItem(aItems[i]);
        },
        error: function (oError) {
          debugger;
        }
      });

      oODataModel.read("/qualitative_data_HR(up__fiscalYear='" + fiscalyear + "',up__businessFunction='HR',principle='3',indicator='Essential',questionID='7')/principle3_essential_7", {
        success: function (oData) {
          let aItems = [];
          let aItems1 = [];
          for (let i = 0; i < oData.results.length; i++) {
            let oItem = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: oData.results[i].category }),
                new sap.m.Input({ value: oData.results[i].currentFYTotalEmployees, editable: false }),
                new sap.m.Input({ value: oData.results[i].currentFYTotalEmployeesPartOfUnions, editable: false }),
                new sap.m.Input({ value: oData.results[i].currentFYPercentage, editable: false }),
                new sap.m.Input({ value: oData.results[i].previousFYTotalEmployees, editable: false }),
                new sap.m.Input({ value: oData.results[i].previousFYTotalEmployeesPartOfUnions, editable: false }),
                new sap.m.Input({ value: oData.results[i].previousFYPercentage, editable: false }),
              ]
            });
            if (oData.results[i].position === 0) {
              aItems[0] = oItem;
            }
            else if (oData.results[i].position === 1) {
              aItems[1] = oItem;
            }

            else if (oData.results[i].position === 2) {
              aItems1[0] = oItem;
            }
            else if (oData.results[i].position === 3) {
              aItems1[1] = oItem;
            }

            for (let i = 0; i < aItems.length; i++)
              MembershipWorTable.addItem(aItems[i]);
            for (let i = 0; i < aItems1.length; i++)
              MembershipEmpTable.addItem(aItems1[i]);

          }
        },
        error: function (oError) {
          debugger;
        }
      });


      oODataModel.read("/qualitative_data_HR(up__fiscalYear='" + fiscalyear + "',up__businessFunction='HR',principle='3',indicator='Essential',questionID='8')/principle3_essential_8", {
        success: function (oData) {
          let aItems = [];
          let aItems1 = [];
          for (let i = 0; i < oData.results.length; i++) {
            if (oData.results[i].type === "Employees") {
              let oItem = new sap.m.ColumnListItem({
                cells: [
                  new sap.m.Text({ text: oData.results[i].category }),
                  new sap.m.Input({ value: oData.results[i].currentFYTotal, editable: false }),
                  new sap.m.Input({ value: oData.results[i].currentFYNumberHealthSafetyMeasures, editable: false }),
                  new sap.m.Input({ value: oData.results[i].currentFYPercentageHealthSafetyMeasures, editable: false }),
                  new sap.m.Input({ value: oData.results[i].currentFYNumberSkillUpgradation, editable: false }),
                  new sap.m.Input({ value: oData.results[i].currentFYPercentageSkillUpgradation, editable: false }),
                  new sap.m.Input({ value: oData.results[i].previousFYTotal, editable: false }),
                  new sap.m.Input({ value: oData.results[i].previousFYNumberHealthSafetyMeasures, editable: false }),
                  new sap.m.Input({ value: oData.results[i].previousFYPercentageHealthSafetyMeasures, editable: false }),
                  new sap.m.Input({ value: oData.results[i].previousFYNumberSkillUpgradation, editable: false }),
                  new sap.m.Input({ value: oData.results[i].previousFYPercentageSkillUpgradation, editable: false }),
                ]
              });
              if (oData.results[i].position === 0) {
                aItems[0] = oItem;
              }
              else if (oData.results[i].position === 1) {
                aItems[1] = oItem;
              }
              else if (oData.results[i].position === 2) {
                aItems[2] = oItem;
              }

            } else
              if (oData.results[i].type === "Workers") {
                let oItem = new sap.m.ColumnListItem({
                  cells: [
                    new sap.m.Text({ text: oData.results[i].category }),
                    new sap.m.Input({ value: oData.results[i].currentFYTotal, editable: false }),
                    new sap.m.Input({ value: oData.results[i].currentFYNumberHealthSafetyMeasures, editable: false }),
                    new sap.m.Input({ value: oData.results[i].currentFYPercentageHealthSafetyMeasures, editable: false }),
                    new sap.m.Input({ value: oData.results[i].currentFYNumberSkillUpgradation, editable: false }),
                    new sap.m.Input({ value: oData.results[i].currentFYPercentageSkillUpgradation, editable: false }),
                    new sap.m.Input({ value: oData.results[i].previousFYTotal, editable: false }),
                    new sap.m.Input({ value: oData.results[i].previousFYNumberHealthSafetyMeasures, editable: false }),
                    new sap.m.Input({ value: oData.results[i].previousFYPercentageHealthSafetyMeasures, editable: false }),
                    new sap.m.Input({ value: oData.results[i].previousFYNumberSkillUpgradation, editable: false }),
                    new sap.m.Input({ value: oData.results[i].previousFYPercentageSkillUpgradation, editable: false }),
                  ]
                });
                if (oData.results[i].position === 0) {
                  aItems1[0] = oItem;
                }
                else if (oData.results[i].position === 1) {
                  aItems1[1] = oItem;
                }
                else if (oData.results[i].position === 2) {
                  aItems1[2] = oItem;
                }

              }
            for (let i = 0; i < aItems.length; i++)
              PEmpTrainingTable.addItem(aItems[i]);
            for (let i = 0; i < aItems1.length; i++)
              WorkTrainingTable.addItem(aItems1[i]);
          }
        },
        error: function (oError) {
          debugger;
        }
      });


      oODataModel.read("/qualitative_data_HR(up__fiscalYear='" + fiscalyear + "',up__businessFunction='HR',principle='3',indicator='Essential',questionID='9')/principle3_essential_9", {
        success: function (oData) {
          let aItems = [];
          let aItems1 = [];
          for (let i = 0; i < oData.results.length; i++) {
            if (oData.results[i].type === "Employees") {
              let oItem = new sap.m.ColumnListItem({
                cells: [
                  new sap.m.Text({ text: oData.results[i].category }),
                  new sap.m.Input({ value: oData.results[i].currentFYTotal, editable: false }),
                  new sap.m.Input({ value: oData.results[i].currentFYNumber, editable: false }),
                  new sap.m.Input({ value: oData.results[i].currentFYPercentage, editable: false }),
                  new sap.m.Input({ value: oData.results[i].previousFYTotal, editable: false }),
                  new sap.m.Input({ value: oData.results[i].previousFYNumber, editable: false }),
                  new sap.m.Input({ value: oData.results[i].previousFYPercentage, editable: false }),
                ]
              });
              if (oData.results[i].position === 0) {
                aItems[0] = oItem;
              }
              else if (oData.results[i].position === 1) {
                aItems[1] = oItem;
              }
              else if (oData.results[i].position === 2) {
                aItems[2] = oItem;
              }

            } else
              if (oData.results[i].type === "Workers") {
                let oItem = new sap.m.ColumnListItem({
                  cells: [
                    new sap.m.Text({ text: oData.results[i].category }),
                    new sap.m.Input({ value: oData.results[i].currentFYTotal, editable: false }),
                    new sap.m.Input({ value: oData.results[i].currentFYNumber, editable: false }),
                    new sap.m.Input({ value: oData.results[i].currentFYPercentage, editable: false }),
                    new sap.m.Input({ value: oData.results[i].previousFYTotal, editable: false }),
                    new sap.m.Input({ value: oData.results[i].previousFYNumber, editable: false }),
                    new sap.m.Input({ value: oData.results[i].previousFYPercentage, editable: false }),
                  ]
                });
                if (oData.results[i].position === 0) {
                  aItems1[0] = oItem;
                }
                else if (oData.results[i].position === 1) {
                  aItems1[1] = oItem;
                }
                else if (oData.results[i].position === 2) {
                  aItems1[2] = oItem;
                }
              }
          }
          for (let i = 0; i < aItems.length; i++)
            PerEmpTable.addItem(aItems[i]);
          for (let i = 0; i < aItems1.length; i++)
            PerWorkTable.addItem(aItems1[i]);
        },
        error: function (oError) {
          debugger;
        }
      });

      oODataModel.read("/qualitative_data_HR(up__fiscalYear='" + fiscalyear + "',up__businessFunction='HR',principle='5',indicator='Essential',questionID='1')/principle5_essential_1", {
        success: function (oData) {
          let aItems = [];
          let aItems1 = [];
          for (let i = 0; i < oData.results.length; i++) {
            if (oData.results[i].type === "Employees") {
              let oItem = new sap.m.ColumnListItem({
                cells: [
                  new sap.m.Text({ text: oData.results[i].category }),
                  new sap.m.Input({ value: oData.results[i].currentFYTotal, editable: false }),
                  new sap.m.Input({ value: oData.results[i].currentFYNumber, editable: false }),
                  new sap.m.Input({ value: oData.results[i].currentFYPercentage, editable: false }),
                  new sap.m.Input({ value: oData.results[i].previousFYTotal, editable: false }),
                  new sap.m.Input({ value: oData.results[i].previousFYNumber, editable: false }),
                  new sap.m.Input({ value: oData.results[i].previousFYPercentage, editable: false }),
                ]
              });
              if (oData.results[i].position === 0) {
                aItems[0] = oItem;
              }
              else if (oData.results[i].position === 1) {
                aItems[1] = oItem;
              }
              else if (oData.results[i].position === 2) {
                aItems[2] = oItem;
              }

            } else
              if (oData.results[i].type === "Workers") {
                let oItem = new sap.m.ColumnListItem({
                  cells: [
                    new sap.m.Text({ text: oData.results[i].category }),
                    new sap.m.Input({ value: oData.results[i].currentFYTotal, editable: false }),
                    new sap.m.Input({ value: oData.results[i].currentFYNumber, editable: false }),
                    new sap.m.Input({ value: oData.results[i].currentFYPercentage, editable: false }),
                    new sap.m.Input({ value: oData.results[i].previousFYTotal, editable: false }),
                    new sap.m.Input({ value: oData.results[i].previousFYNumber, editable: false }),
                    new sap.m.Input({ value: oData.results[i].previousFYPercentage, editable: false }),
                  ]
                });

                if (oData.results[i].position === 0) {
                  aItems1[0] = oItem;
                }
                else if (oData.results[i].position === 1) {
                  aItems1[1] = oItem;
                }
                else if (oData.results[i].position === 2) {
                  aItems1[2] = oItem;
                }
              }
          }
          for (let i = 0; i < aItems.length; i++)
            EmpHumanRightTable.addItem(aItems[i]);
          for (let i = 0; i < aItems1.length; i++)
            WorkHumanRightTable.addItem(aItems1[i]);
        },
        error: function (oError) {
          debugger;
        }
      });

      oODataModel.read("/qualitative_data_HR(up__fiscalYear='" + fiscalyear + "',up__businessFunction='HR',principle='5',indicator='Essential',questionID='2')/principle5_essential_2", {
        success: function (oData) {
          let aItems = [];
          let aItems1 = [];
          for (let i = 0; i < oData.results.length; i++) {
            if (oData.results[i].type === "Employees") {
              let oItem = new sap.m.ColumnListItem({
                cells: [
                  new sap.m.Text({ text: oData.results[i].subType + " " + oData.results[i].category }),
                  new sap.m.Input({ value: oData.results[i].currentFYTotal, editable: false }),
                  new sap.m.Input({ value: oData.results[i].currentFYNumberEqualToMinimumWage, editable: false }),
                  new sap.m.Input({ value: oData.results[i].currentFYPercentageEqualToMinimumWage, editable: false }),
                  new sap.m.Input({ value: oData.results[i].currentFYNumberMoreThanMinimumWage, editable: false }),
                  new sap.m.Input({ value: oData.results[i].currentFYPercentageMoreThanMinimumWage, editable: false }),
                  new sap.m.Input({ value: oData.results[i].previousFYTotal, editable: false }),
                  new sap.m.Input({ value: oData.results[i].previousFYNumberEqualToMinimumWage, editable: false }),
                  new sap.m.Input({ value: oData.results[i].previousFYPercentageEqualToMinimumWage, editable: false }),
                  new sap.m.Input({ value: oData.results[i].previousFYNumberMoreThanMinimumWage, editable: false }),
                  new sap.m.Input({ value: oData.results[i].previousFYPercentageMoreThanMinimumWage, editable: false }),
                ]
              });
              if (oData.results[i].position === 0) {
                aItems[0] = oItem;
              }
              else if (oData.results[i].position === 1) {
                aItems[1] = oItem;
              }
              else if (oData.results[i].position === 2) {
                aItems[2] = oItem;
              }
              else if (oData.results[i].position === 3) {
                aItems[3] = oItem;
              }

            } else
              if (oData.results[i].type === "Workers") {
                let oItem = new sap.m.ColumnListItem({
                  cells: [
                    new sap.m.Text({ text: oData.results[i].subType + " " + oData.results[i].category }),
                    new sap.m.Input({ value: oData.results[i].currentFYTotal, editable: false }),
                    new sap.m.Input({ value: oData.results[i].currentFYNumberEqualToMinimumWage, editable: false }),
                    new sap.m.Input({ value: oData.results[i].currentFYPercentageEqualToMinimumWage, editable: false }),
                    new sap.m.Input({ value: oData.results[i].currentFYNumberMoreThanMinimumWage, editable: false }),
                    new sap.m.Input({ value: oData.results[i].currentFYPercentageMoreThanMinimumWage, editable: false }),
                    new sap.m.Input({ value: oData.results[i].previousFYTotal, editable: false }),
                    new sap.m.Input({ value: oData.results[i].previousFYNumberEqualToMinimumWage, editable: false }),
                    new sap.m.Input({ value: oData.results[i].previousFYPercentageEqualToMinimumWage, editable: false }),
                    new sap.m.Input({ value: oData.results[i].previousFYNumberMoreThanMinimumWage, editable: false }),
                    new sap.m.Input({ value: oData.results[i].previousFYPercentageMoreThanMinimumWage, editable: false }),
                  ]
                });
                if (oData.results[i].position === 0) {
                  aItems1[0] = oItem;
                }
                else if (oData.results[i].position === 1) {
                  aItems1[1] = oItem;
                }
                else if (oData.results[i].position === 2) {
                  aItems1[2] = oItem;
                }
                else if (oData.results[i].position === 3) {
                  aItems1[3] = oItem;
                }

              }
          }
          for (let i = 0; i < aItems.length; i++)
            PEmpWageTable.addItem(aItems[i]);
          for (let i = 0; i < aItems.length; i++)
            WorkWageTable.addItem(aItems1[i]);
        },
        error: function (oError) {
          debugger;
        }
      });

      oODataModel.read("/qualitative_data_HR(up__fiscalYear='" + fiscalyear + "',up__businessFunction='HR',principle='5',indicator='Essential',questionID='3')/principle5_essential_3", {
        success: function (oData) {
          let aItems = [];
          for (let i = 0; i < oData.results.length; i++) {
            let oItem = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: oData.results[i].type }),
                new sap.m.Input({ value: oData.results[i].maleNumber, editable: false }),
                new sap.m.Input({ value: oData.results[i].maleMedianRemuneration, editable: false }),
                new sap.m.Input({ value: oData.results[i].femaleNumber, editable: false }),
                new sap.m.Input({ value: oData.results[i].femaleMedianRemuneration, editable: false }),
              ]
            });
            if (oData.results[i].position === 0) {
              aItems[0] = oItem;
            }
            else if (oData.results[i].position === 1) {
              aItems[1] = oItem;
            }
            else if (oData.results[i].position === 2) {
              aItems[2] = oItem;
            }
            else if (oData.results[i].position === 3) {
              aItems[3] = oItem;
            }
          }
          for (let i = 0; i < aItems.length; i++)
            WageTable.addItem(aItems[i]);
        },
        error: function (oError) {
          debugger;
        }
      });

      oODataModel.read("/qualitative_data_HR(up__fiscalYear='" + fiscalyear + "',up__businessFunction='HR',principle='5',indicator='Essential',questionID='6')/principle5_essential_6", {
        success: function (oData) {
          let aItems = [];
          for (let i = 0; i < oData.results.length; i++) {
            let oItem = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: oData.results[i].type }),
                new sap.m.Input({ value: oData.results[i].currentFYComplaintsFiled, editable: false }),
                new sap.m.Input({ value: oData.results[i].currentFYComplaintsPending, editable: false }),
                new sap.m.Input({ value: oData.results[i].currentFYComplaintsRemarks, editable: false }),
                new sap.m.Input({ value: oData.results[i].previousFYComplaintsFiled, editable: false }),
                new sap.m.Input({ value: oData.results[i].previousFYComplaintsPending, editable: false }),
                new sap.m.Input({ value: oData.results[i].previousFYComplaintsRemarks, editable: false }),
              ]
            });
            if (oData.results[i].position === 0) {
              aItems[0] = oItem;
            }
            else if (oData.results[i].position === 1) {
              aItems[1] = oItem;
            }
            else if (oData.results[i].position === 2) {
              aItems[2] = oItem;
            }
            else if (oData.results[i].position === 3) {
              aItems[3] = oItem;
            }
            else if (oData.results[i].position === 4) {
              aItems[4] = oItem;
            }
            else if (oData.results[i].position === 5) {
              aItems[5] = oItem;
            }

          }
          for (let i = 0; i < aItems.length; i++)
            ComplaintTable.addItem(aItems[i]);
        },
        error: function (oError) {
          debugger;
        }
      });

      oODataModel.read("/qualitative_data_HR(up__fiscalYear='" + fiscalyear + "',up__businessFunction='HR',principle='5',indicator='Essential',questionID='10')/principle5_essential_10", {
        success: function (oData) {
          let aItems = [];
          for (let i = 0; i < oData.results.length; i++) {
            let oItem = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: oData.results[i].type }),
                new sap.m.Input({ value: oData.results[i].percentage, editable: false }),
              ]
            });
            if (oData.results[i].position === 0) {
              aItems[0] = oItem;
            }
            else if (oData.results[i].position === 1) {
              aItems[1] = oItem;
            }
            else if (oData.results[i].position === 2) {
              aItems[2] = oItem;
            }
            else if (oData.results[i].position === 3) {
              aItems[3] = oItem;
            }
            else if (oData.results[i].position === 4) {
              aItems[4] = oItem;
            }
            else if (oData.results[i].position === 5) {
              aItems[5] = oItem;
            }

          }
          for (let i = 0; i < aItems.length; i++)
            AssessmentsTable.addItem(aItems[i]);
        },
        error: function (oError) {
          debugger;
        }
      });

      oODataModel.read("/qualitative_data_HR(up__fiscalYear='" + fiscalyear + "',up__businessFunction='HR',principle='3',indicator='Essential',questionID='1c')/principle3_essential_1c", {
        success: function (oData) {
          for (let i = 0; i < oData.results.length; i++) {
            let oItem = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: oData.results[i].type }),
                new sap.m.Input({ value: oData.results[i].valueForCurrentFinancialYear, editable: false }),
                new sap.m.Input({ value: oData.results[i].valueForPreviousFinancialYear, editable: false }),
              ]
            });

            SpendTable.addItem(oItem);
          }
        },
        error: function (oError) {
          debugger;
        }
      });

      oODataModel.read("/qualitative_data_HR(up__fiscalYear='" + fiscalyear + "',up__businessFunction='HR',principle='5',indicator='Essential',questionID='3b')/principle5_essential_3b", {
        success: function (oData) {
          for (let i = 0; i < oData.results.length; i++) {
            let oItem = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: oData.results[i].type }),
                new sap.m.Input({ value: oData.results[i].valueForCurrentFinancialYear, editable: false }),
                new sap.m.Input({ value: oData.results[i].valueForPreviousFinancialYear, editable: false }),
              ]
            });

            GrossWageTable.addItem(oItem);
          }
        },
        error: function (oError) {
          debugger;
        }
      });

      oODataModel.read("/qualitative_data_HR(up__fiscalYear='" + fiscalyear + "',up__businessFunction='HR',principle='5',indicator='Essential',questionID='7')/principle5_essential_7", {
        success: function (oData) {
          let aItems = [];
          for (let i = 0; i < oData.results.length; i++) {
            let oItem = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: oData.results[i].type }),
                new sap.m.Input({ value: oData.results[i].valueForCurrentFinancialYear, editable: false }),
                new sap.m.Input({ value: oData.results[i].valueForPreviousFinancialYear, editable: false }),
              ]
            });
            if (oData.results[i].position === 0) {
              aItems[0] = oItem;
            }
            else if (oData.results[i].position === 1) {
              aItems[1] = oItem;
            }
            else if (oData.results[i].position === 2) {
              aItems[2] = oItem;
            }

          }
          for (let i = 0; i < aItems.length; i++)
            CompFiledTable.addItem(aItems[i]);
        },
        error: function (oError) {
          debugger;
        }
      });


      oODataModel.read("/qualitative_data_HR(up__fiscalYear='" + fiscalyear + "',up__businessFunction='HR',principle='8',indicator='Essential',questionID='5')/principle8_essential_5", {
        success: function (oData) {
          let aItems = [];
          for (let i = 0; i < oData.results.length; i++) {
            let oItem = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: oData.results[i].location }),
                new sap.m.Input({ value: oData.results[i].valueForCurrentFinancialYear, editable: false }),
                new sap.m.Input({ value: oData.results[i].valueForPreviousFinancialYear, editable: false }),
              ]
            });
            if (oData.results[i].position === 0) {
              aItems[0] = oItem;
            }
            else if (oData.results[i].position === 1) {
              aItems[1] = oItem;
            }
            else if (oData.results[i].position === 2) {
              aItems[2] = oItem;
            }
            else if (oData.results[i].position === 3) {
              aItems[3] = oItem;
            }

          }
          for (let i = 0; i < aItems.length; i++)
            JobCreationTable.addItem(aItems[i]);
        },
        error: function (oError) {
          debugger;
        }
      });
    },
    _getQ3TableHR: function (fiscalyear) {
      var oODataModel = this.getView().getModel("Catalog");
      // var pathBf = "/qualitative_data_quality_assurance(up__fiscalYear='" +that.fiscalyear+ "',up__businessFunction='Quality%20Assurance',principle='2',indicator='Leadership',questionID='1L')/principle2_leadership_1";
      var Filte1 = new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, fiscalyear);
      var Filte2 = new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, 'HR');
      var Filte3 = new sap.ui.model.Filter("principle", sap.ui.model.FilterOperator.EQ, '3');
      var Filte4 = new sap.ui.model.Filter("indicator", sap.ui.model.FilterOperator.EQ, 'Essential');
      var Filte5 = new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, '6E');
      oODataModel.read("/qualitative_data_HR", {
        urlParameters: {
          "$expand": "principle3_essential_6",
        },
        filters: [Filte1, Filte2, Filte3, Filte4, Filte5],
        success: function (data, response) {
          console.log(data);
          var table3 = data.results[0].principle3_essential_6.results[0];

          that.getView().byId("_IDGenTable1hr").getItems()[0].getCells()[1].setValue(table3.permanent_workers);
          that.getView().byId("_IDGenTable1hr").getItems()[1].getCells()[1].setValue(table3.other_than_permanent_workers);
          that.getView().byId("_IDGenTable1hr").getItems()[2].getCells()[1].setValue(table3.permanent_employees);
          that.getView().byId("_IDGenTable1hr").getItems()[3].getCells()[1].setValue(table3.other_than_permanent_employees);

        },
        error: function (error) {
          console.log(error);

        }
      });

    },
    _getQ14Table: function (fiscalyear) {
      var oODataModel = this.getView().getModel("Catalog");
      var pathBf = "/qualitative_data_HR(up__fiscalYear='" + fiscalyear + "',up__businessFunction='HR',principle='8',indicator='Essential',questionID='1E')/principle8_essential_1";
      var table2 = this.getView().byId("_IDGenTable2hr");

      oODataModel.read(pathBf, {
        success: function (data, response) {

          for (let i = 0; i < data.results.length; i++) {
            var oItem = new sap.m.ColumnListItem({
              cells: [new sap.m.TextArea({ maxLength: 1500, value: data.results[i].name_brief_details_of_project, wrapping: "Hard", editable: false, width: "100%" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].sia_notification_no, wrapping: "Hard", editable: false, width: "100%" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].date, wrapping: "Hard", editable: false, width: "100%" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].conducted_by_independent_external_agency, wrapping: "Hard", editable: false, width: "100%" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].results_communicated_in_public_domain, wrapping: "Hard", editable: false, width: "100%" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].relevant_web_link, wrapping: "Hard", editable: false, width: "100%" })
              ]
            })
            table2.addItem(oItem);
          }

        },
        error: function (error) {
          console.log(error);

        }
      });

    },
    _getQ15Table: function (fiscalyear) {
      var oODataModel = this.getView().getModel("Catalog");
      var pathBf = "/qualitative_data_HR(up__fiscalYear='" + fiscalyear + "',up__businessFunction='HR',principle='8',indicator='Essential',questionID='2E')/principle8_essential_2";
      var table3 = this.getView().byId("_IDGenTable3");

      oODataModel.read(pathBf, {
        success: function (data, response) {

          for (let i = 0; i < data.results.length; i++) {
            var oItem = new sap.m.ColumnListItem({
              cells: [new sap.m.TextArea({ maxLength: 1500, value: data.results[i].sr_no, wrapping: "Hard", editable: false, width: "100%" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].name_of_project, wrapping: "Hard", editable: false, width: "100%" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].state, wrapping: "Hard", editable: false, width: "100%" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].district, wrapping: "Hard", editable: false, width: "100%" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].no_of_project_affected_families, wrapping: "Hard", editable: false, width: "100%" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].percentage_of_pafs_covered_by_rnr, wrapping: "Hard", editable: false, width: "100%" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].amounts_paid_to_pafs, wrapping: "Hard", editable: false, width: "100%" })
              ]
            })
            table3.addItem(oItem);
          }

        },
        error: function (error) {
          console.log(error);

        }
      });

    },
    _getQ17Table: function (fiscalyear) {
      var oODataModel = this.getView().getModel("Catalog");
      var pathBf = "/qualitative_data_HR(up__fiscalYear='" + fiscalyear + "',up__businessFunction='HR',principle='8',indicator='Leadership',questionID='1L')/principle8_leadership_1";
      var table4 = this.getView().byId("_IDGenTable4");

      oODataModel.read(pathBf, {
        success: function (data, response) {

          for (let i = 0; i < data.results.length; i++) {
            var oItem = new sap.m.ColumnListItem({
              cells: [new sap.m.TextArea({ maxLength: 1500, value: data.results[i].details_of_negative_social_impact, wrapping: "Hard", width: "100%", editable: false }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].corrective_actions_taken, wrapping: "Hard", width: "100%", editable: false })
              ]
            })
            table4.addItem(oItem);
          }


        },
        error: function (error) {
          console.log(error);

        }
      });

    },
    _getQ18Table: function (fiscalyear) {
      var oODataModel = this.getView().getModel("Catalog");
      var pathBf = "/qualitative_data_HR(up__fiscalYear='" + fiscalyear + "',up__businessFunction='HR',principle='8',indicator='Leadership',questionID='2L')/principle8_leadership_2";
      var table5 = this.getView().byId("_IDGenTable5");

      oODataModel.read(pathBf, {
        success: function (data, response) {

          for (let i = 0; i < data.results.length; i++) {
            var oItem = new sap.m.ColumnListItem({
              cells: [new sap.m.TextArea({ maxLength: 1500, value: data.results[i].sr_no, wrapping: "Hard", editable: false, width: "100%" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].state, wrapping: "Hard", editable: false, width: "100%" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].aspirational_district, wrapping: "Hard", editable: false, width: "100%" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].amount_spent, wrapping: "Hard", editable: false, width: "100%" })
              ]
            })
            table5.addItem(oItem);

          }



        },
        error: function (error) {
          console.log(error);

        }
      });

    },
    _getQ19Table: function (fiscalyear) {
      var oODataModel = this.getView().getModel("Catalog");
      var pathBf = "/qualitative_data_HR(up__fiscalYear='" + fiscalyear + "',up__businessFunction='HR',principle='8',indicator='Leadership',questionID='4L')/principle8_leadership_4";
      var table6 = this.getView().byId("_IDGenTable6");

      oODataModel.read(pathBf, {
        success: function (data, response) {

          for (let i = 0; i < data.results.length; i++) {
            var oItem = new sap.m.ColumnListItem({
              cells: [new sap.m.TextArea({ maxLength: 1500, value: data.results[i].sr_no, editable: false, wrapping: "Hard", width: "100%" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].intellectual_property_based_on_traditional_knowledge, wrapping: "Hard", editable: false, width: "100%" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].owned_acquired, wrapping: "Hard", editable: false, width: "100%" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].benefit_shared, wrapping: "Hard", editable: false, width: "100%" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].basis_of_calculationg_benefits_shared, wrapping: "Hard", editable: false, width: "100%" })
              ]
            })
            table6.addItem(oItem);
          }
        },
        error: function (error) {
          console.log(error);

        }
      });

    },
    _getQ20Table: function (fiscalyear) {
      var oODataModel = this.getView().getModel("Catalog");
      var pathBf = "/qualitative_data_HR(up__fiscalYear='" + fiscalyear + "',up__businessFunction='HR',principle='8',indicator='Leadership',questionID='5L')/principle8_leadership_5";
      var table7 = this.getView().byId("_IDGenTable7");

      oODataModel.read(pathBf, {
        success: function (data, response) {

          for (let i = 0; i < data.results.length; i++) {
            var oItem = new sap.m.ColumnListItem({
              cells: [new sap.m.TextArea({ maxLength: 1500, value: data.results[i].name_of_authority, wrapping: "Hard", width: "100%", editable: false }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].brief_of_case, wrapping: "Hard", width: "100%", editable: false }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].corrective_actions_taken, wrapping: "Hard", width: "100%", editable: false })
              ]
            })
            table7.addItem(oItem);
          }


        },
        error: function (error) {
          console.log(error);

        }
      });

    },
    _getQ21Table: function (fiscalyear) {
      var oODataModel = this.getView().getModel("Catalog");
      var pathBf = "/qualitative_data_HR(up__fiscalYear='" + fiscalyear + "',up__businessFunction='HR',principle='8',indicator='Leadership',questionID='6L')/principle8_leadership_6";
      var table8 = this.getView().byId("_IDGenTable8");

      oODataModel.read(pathBf, {
        success: function (data, response) {

          for (let i = 0; i < data.results.length; i++) {
            var oItem = new sap.m.ColumnListItem({
              cells: [new sap.m.TextArea({ maxLength: 1500, value: data.results[i].sr_no, wrapping: "Hard", width: "100%", editable: false }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].csr_project, wrapping: "Hard", width: "100%", editable: false }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].no_of_persons_benefitted, wrapping: "Hard", width: "100%", editable: false }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].percentage_of_beneficiaries, wrapping: "Hard", width: "100%", editable: false })
              ]
            })
            table8.addItem(oItem);


          }



        },
        error: function (error) {
          console.log(error);

        }
      });

    },
    _statushr: function (fiscalyear) {
      var oODataModel = this.getView().getModel("Catalog");
      var Filter1 = new sap.ui.model.Filter("fiscalYear", sap.ui.model.FilterOperator.EQ, fiscalyear);
      var Filter2 = new sap.ui.model.Filter("businessFunction", sap.ui.model.FilterOperator.EQ, 'HR');
      var pathBf = "/qualitative_data";
      oODataModel.read(pathBf, {
        urlParameters: {
          "$expand": "HR",
        },
        filters: [Filter1, Filter2],
        success: function (data) {

          that.getView().byId("id_answ1hr").setValue(data.results[0].HR.results[0].answer);
          that.getView().byId("id_answ2hr").setValue(data.results[0].HR.results[1].answer);
          that.getView().byId("id_answ4hr").setValue(data.results[0].HR.results[3].answer);
          that.getView().byId("id_answ5hr").setValue(data.results[0].HR.results[4].answer);
          that.getView().byId("id_answ6hr").setValue(data.results[0].HR.results[5].answer);
          that.getView().byId("id_answ7hr").setValue(data.results[0].HR.results[6].answer);
          that.getView().byId("id_answ8hr").setValue(data.results[0].HR.results[7].answer);
          that.getView().byId("id_answ9hr").setValue(data.results[0].HR.results[8].answer);
          that.getView().byId("id_answ10").setValue(data.results[0].HR.results[9].answer);
          that.getView().byId("id_answ11").setValue(data.results[0].HR.results[10].answer);
          that.getView().byId("id_answ12").setValue(data.results[0].HR.results[11].answer);
          that.getView().byId("id_answ13").setValue(data.results[0].HR.results[12].answer);
          that.getView().byId("id_answ16").setValue(data.results[0].HR.results[15].answer);


        },
        error: function (error) {
          console.log(error);
        }
      });

    },
    _status: function (fiscalyear) {
      var oODataModel = this.getView().getModel("Catalog");
      var Filter1 = new sap.ui.model.Filter("fiscalYear", sap.ui.model.FilterOperator.EQ, fiscalyear);
      var Filter2 = new sap.ui.model.Filter("businessFunction", sap.ui.model.FilterOperator.EQ, 'Quality_Assurance');
      var pathBf = "/qualitative_data";
      oODataModel.read(pathBf, {
        urlParameters: {
          "$expand": "quality_assurance",
        },
        filters: [Filter1, Filter2],
        success: function (data) {
          that.getView().byId("id_answ1q").setValue(data.results[0].quality_assurance.results[0].answer);
          that.getView().byId("id_answ2q").setValue(data.results[0].quality_assurance.results[1].answer);
          that.getView().byId("id_answ5").setValue(data.results[0].quality_assurance.results[4].answer);
          that.getView().byId("id_answ6").setValue(data.results[0].quality_assurance.results[5].answer);
          that.getView().byId("id_answ7").setValue(data.results[0].quality_assurance.results[6].answer);
          that.getView().byId("id_answ8").setValue(data.results[0].quality_assurance.results[7].answer);
          that.getView().byId("id_answ9").setValue(data.results[0].quality_assurance.results[8].answer);

        },
        error: function (error) {
          console.log(error);
        }
      });

    },
    _getQ3Table: function (fiscalyear) {
      var oODataModel = this.getView().getModel("Catalog");
      var oTable3 = this.getView().byId("_IDGenTable1");
      var pathBf = "/qualitative_data_quality_assurance(up__fiscalYear='" + fiscalyear + "',up__businessFunction='Quality_Assurance',principle='2',indicator='Leadership',questionID='1L')/principle2_leadership_1";
      oODataModel.read(pathBf, {
        success: function (data) {
          for (let i = 0; i < data.results.length; i++) {
            let oItem = new sap.m.ColumnListItem({
              cells: [new sap.m.TextArea({ maxLength: 1500, value: data.results[i].nic_code, editable: false, wrapping: "Hard" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].name_of_product_or_service, editable: false, wrapping: "Hard" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].total_turnover_contributed, editable: false, wrapping: "Hard" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].boundry_of_life_cycle_assessment, editable: false, wrapping: "Hard" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].conducted_by_independent_external_agency, editable: false, wrapping: "Hard" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].results_communicated_in_public_domain, editable: false, wrapping: "Hard" })
              ]

            })
            oTable3.addItem(oItem);

          }

        },
        error: function (error) {
          console.log(error);

        }
      });

    },
    _getQ4Table: function (fiscalyear) {
      var oODataModel = this.getView().getModel("Catalog");
      var oTable4 = this.getView().byId("_IDGenTable2");
      var pathBf = "/qualitative_data_quality_assurance(up__fiscalYear='" + fiscalyear + "',up__businessFunction='Quality_Assurance',principle='2',indicator='Leadership',questionID='2L')/principle2_leadership_2";
      oODataModel.read(pathBf, {
        success: function (data) {
          for (let i = 0; i < data.results.length; i++) {
            let oItem = new sap.m.ColumnListItem({
              cells: [new sap.m.TextArea({ maxLength: 1500, value: data.results[i].name_of_product_or_service, editable: false, wrapping: "Hard", width: "100%" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].description_of_risk_or_concern, editable: false, wrapping: "Hard", width: "100%" }),
              new sap.m.TextArea({ maxLength: 1500, value: data.results[i].action_taken, editable: false, wrapping: "Hard", width: "100%" })
              ]

            })
            oTable4.addItem(oItem);

          }

        },
        error: function (error) {
          console.log(error);

        }
      });

    },
    /////EHS Data Fetch//////////////

    ehsdata: function (fyear) {
      var oODataModel = this.getView().getModel("Catalog");
      var Filter1 = new sap.ui.model.Filter("fiscalYear", sap.ui.model.FilterOperator.EQ, fyear);
      var Filter2 = new sap.ui.model.Filter("businessFunction", sap.ui.model.FilterOperator.EQ, 'IT');
      oODataModel.read("/qualitative_data", {
        urlParameters: {
          "$expand": "IT",
        },
        filters: [Filter1, Filter2],
        success: function (Data, response) {

          that.getView().byId("id_answ1").setValue(Data.results[0].IT.results[0].answer);
          that.getView().byId("id_answ2").setValue(Data.results[0].IT.results[1].answer);
          that.getView().byId("id_answ3").setValue(Data.results[0].IT.results[2].answer);
          that.getView().byId("id_answ4").setValue(Data.results[0].IT.results[3].answer);
        },
        error: function (Error) {
          that.getView().setBusy(false);
          MessageBox.warning("Error while reading Data.");
        }
      });
    },

    toggleVBoxVisibility: function (visible) {
      var oVBox = this.getView().byId("myVBox");
      oVBox.setVisible(visible);

      // You can also hide individual elements within the VBox if needed
      var elementsToHide = ["Table1", "Table2", "textForQuestion1", "textForQuestion2"];
      elementsToHide.forEach(function (elementId) {
        var element = this.getView().byId(elementId);
        if (element) {
          element.setVisible(visible);
        }
      }, this);

    },
    onAdd1: function (oEvent) {
      var oItem = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Input(),
          new sap.m.Input(),
          new sap.m.Input(),
          new sap.m.Input()
        ]
      });

      var oTable = this.getView().byId("Table1");
      oTable.addItem(oItem);


    },
    deleteRow1: function (oEvent) {
      var oTable = this.getView().byId("Table1");
      oTable.removeItem(oEvent.getParameter("listItem"));

    },

    onAdd2: function (oEvent) {
      var oItem = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Input(),
          new sap.m.Input(),
          new sap.m.Input(),

          new sap.m.Input()
        ]
      });

      var oTable = this.getView().byId("Table2");
      oTable.addItem(oItem);



    },
    deleteRow2: function (oEvent) {
      var oTable = this.getView().byId("Table2");
      oTable.removeItem(oEvent.getParameter("listItem"));
    },


    onAdd3: function (oEvent) {
      var oItem = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Input(),
          new sap.m.Input(),
          new sap.m.Input(),
          new sap.m.Input(),
          new sap.m.Input()
        ]
      });

      var oTable = this.getView().byId("Table9");
      oTable.addItem(oItem);



    },
    deleteRow3: function (oEvent) {
      var oTable = this.getView().byId("Table9");
      oTable.removeItem(oEvent.getParameter("listItem"));
    },


    onAdd4: function (oEvent) {
      var oItem = new sap.m.ColumnListItem({
        cells: [
          new sap.m.Input(),
          new sap.m.Input(),
          new sap.m.Input(),
          new sap.m.Input(),
          new sap.m.Input(),
          new sap.m.Input()
        ]
      });

      var oTable = this.getView().byId("Table11");
      oTable.addItem(oItem);



    },
    deleteRow4: function (oEvent) {
      var oTable = this.getView().byId("Table11");
      oTable.removeItem(oEvent.getParameter("listItem"));
    },


    handleTotalChange: function (oEvent) {

      var sTotal = parseFloat(oEvent.getParameter("value")) || 0; // Use 0 if not a valid number
      var oCatalogModel = this.getView().getModel("Catalog");
      var sB = parseFloat(oCatalogModel.getProperty("/numberOfMale"));

      console.log('Total:', sTotal);
      console.log('Number of Male:', sB);

      // Update the Catalog model with the new calculated percentage
      oCatalogModel.setProperty("/percentageOfMale", ((sB / sTotal) * 100).toFixed(2) + '%');
    },







    onSaveDraftPress: function () {
      var oYearDropdown = this.getView().byId("yearDropdown");
      var selectedYear = oYearDropdown.getSelectedKey();


      var that = this;
      var Name = this.Name;
      var UserEmail = this.UserEmail;
      var textAreaValue1 = this.getView().byId("textArea1").getValue();
      var textAreaValue2 = this.getView().byId("textArea2").getValue();
      var textAreaValue3 = this.getView().byId("textArea3").getValue();
      var textAreaValue4 = this.getView().byId("textArea4").getValue();
      var textAreaValue5 = this.getView().byId("textArea5").getValue();
      var textAreaValue6 = this.getView().byId("textArea6").getValue();
      var textAreaValue7 = this.getView().byId("textArea7").getValue();
      var textAreaValue8 = this.getView().byId("textArea8").getValue();
      var textAreaValue9 = this.getView().byId("textArea9").getValue();
      var textAreaValue10 = this.getView().byId("textArea10").getValue();
      var textAreaValue11 = this.getView().byId("textArea11").getValue();
      var textAreaValue12 = this.getView().byId("textArea12").getValue();
      var textAreaValue13 = this.getView().byId("textArea13").getValue();
      var textAreaValue14 = this.getView().byId("textArea14").getValue();
      var textAreaValue15 = this.getView().byId("textArea15").getValue();
      var textAreaValue16 = this.getView().byId("textArea16").getValue();
      var textAreaValue17 = this.getView().byId("textArea17").getValue();

      var textAreaValue19 = this.getView().byId("textArea19").getValue();
      var textAreaValue20 = this.getView().byId("textArea20").getValue();
      var textAreaValue21 = this.getView().byId("textArea21").getValue();
      var textAreaValue22 = this.getView().byId("textArea22").getValue();
      var textAreaValue23 = this.getView().byId("textArea23").getValue();
      var textAreaValue24 = this.getView().byId("textArea24").getValue();

      var abcArr = []



      if (textAreaValue22 == "") {
        textAreaValue22 = "NA";
      }

      var o = {
        "section": "B",
        "questionID": "7",
        "answer": textAreaValue22
      };

      abcArr.push(o)
      console.log("abcArr:", abcArr);

      if (textAreaValue23 == "") {
        textAreaValue23 = "NA";
      }

      var i = {
        "section": "B",
        "questionID": "8",
        "answer": textAreaValue23
      };

      abcArr.push(i)
      console.log("abcArr:", abcArr);

      if (textAreaValue24 == "") {
        textAreaValue24 = "NA";
      }

      var j = {
        "section": "B",
        "questionID": "9",
        "answer": textAreaValue24
      };

      abcArr.push(j)
      console.log("abcArr:", abcArr);


      if (textAreaValue1 == "") {
        textAreaValue1 = "NA";
      }

      var q1 = {
        "section": "A",
        "questionID": "1",
        "answer": textAreaValue1
      };

      abcArr.push(q1);

      console.log("abcArr:", abcArr);

      if (textAreaValue2 == "") {
        textAreaValue2 = "NA";
      }

      var q2 = {
        "section": "A",
        "questionID": "2",
        "answer": textAreaValue2
      };

      abcArr.push(q2);

      console.log("abcArr:", abcArr);
      if (textAreaValue3 == "") {
        textAreaValue3 = "NA";
      }

      var q3 = {
        "section": "A",
        "questionID": "3",
        "answer": textAreaValue3
      };

      abcArr.push(q3);

      console.log("abcArr:", abcArr);

      if (textAreaValue4 == "") {
        textAreaValue4 = "NA";
      }

      var q4 = {
        "section": "A",
        "questionID": "4",
        "answer": textAreaValue4
      };

      abcArr.push(q4);

      console.log("abcArr:", abcArr);


      if (textAreaValue5 == "") {
        textAreaValue5 = "NA";
      }

      var q5 = {
        "section": "A",
        "questionID": "5",
        "answer": textAreaValue5
      };

      abcArr.push(q5);

      console.log("abcArr:", abcArr);
      if (textAreaValue6 == "") {
        textAreaValue6 = "NA";
      }

      var q6 = {
        "section": "A",
        "questionID": "6",
        "answer": textAreaValue6
      };

      abcArr.push(q6);

      console.log("abcArr:", abcArr);

      if (textAreaValue7 == "") {
        textAreaValue7 = "NA";
      }

      var q7 = {
        "section": "A",
        "questionID": "7",
        "answer": textAreaValue7
      };

      abcArr.push(q7);

      console.log("abcArr:", abcArr);

      if (textAreaValue8 == "") {
        textAreaValue8 = "NA";
      }

      var q8 = {
        "section": "A",
        "questionID": "8",
        "answer": textAreaValue8
      };

      abcArr.push(q8);

      console.log("abcArr:", abcArr);

      if (textAreaValue9 == "") {
        textAreaValue9 = "NA";
      }

      var q9 = {
        "section": "A",
        "questionID": "9",
        "answer": textAreaValue9
      };

      abcArr.push(q9);

      console.log("abcArr:", abcArr);

      if (textAreaValue10 == "") {
        textAreaValue10 = "NA";
      }

      var q10 = {
        "section": "A",
        "questionID": "10",
        "answer": textAreaValue10
      };

      abcArr.push(q10);

      console.log("abcArr:", abcArr);

      if (textAreaValue11 == "") {
        textAreaValue11 = "NA";
      }

      var q11 = {
        "section": "A",
        "questionID": "11",
        "answer": textAreaValue11
      };

      abcArr.push(q11);

      console.log("abcArr:", abcArr);

      if (textAreaValue12 == "") {
        textAreaValue12 = "NA";
      }

      var q12 = {
        "section": "A",
        "questionID": "12",
        "answer": textAreaValue12
      };

      abcArr.push(q12);

      console.log("abcArr:", abcArr);

      if (textAreaValue13 == "") {
        textAreaValue13 = "NA";
      }

      var q13 = {
        "section": "A",
        "questionID": "13",
        "answer": textAreaValue13
      };

      abcArr.push(q13);
      console.log("abcArr:", abcArr);
      //24a
      if (textAreaValue19 == "") {
        textAreaValue19 = "NA";
      }

      var q24a = {
        "section": "A",
        "questionID": "24a",
        "answer": textAreaValue19
      };

      abcArr.push(q24a);
      console.log("abcArr:", abcArr);

      //24b
      if (textAreaValue20 == "") {
        textAreaValue20 = "NA";
      }

      var q24b = {
        "section": "A",
        "questionID": "24b",
        "answer": textAreaValue20
      };

      abcArr.push(q24b);
      console.log("abcArr:", abcArr);
      //24c
      if (textAreaValue21 == "") {
        textAreaValue21 = "NA";
      }

      var q24c = {
        "section": "A",
        "questionID": "24c",
        "answer": textAreaValue21
      };

      abcArr.push(q24c);
      console.log("abcArr:", abcArr);



      if (textAreaValue14 == "") {
        textAreaValue14 = "NA";
      }

      var q14 = {
        "section": "A",
        "questionID": "14",
        "answer": textAreaValue14
      };

      abcArr.push(q14);
      console.log("abcArr:", abcArr);


      if (textAreaValue15 == "") {
        textAreaValue15 = "NA";
      }

      var q15 = {
        "section": "A",
        "questionID": "15",
        "answer": textAreaValue15
      };

      abcArr.push(q15);
      console.log("abcArr:", abcArr);

      if (textAreaValue16 == "") {
        textAreaValue16 = "NA";
      }

      var q19b = {
        "section": "A",
        "questionID": "19b",
        "answer": textAreaValue16
      };

      abcArr.push(q19b);
      console.log("abcArr:", abcArr);



      if (textAreaValue17 == "") {
        textAreaValue17 = "NA";

        var q19c = {
          "section": "A",
          "questionID": "19c",
          "answer": textAreaValue17
        };

        abcArr.push(q19c);
        console.log("abcArr:", abcArr);

      }

      console.log("Creating q18 object");
      var Table3 = this.getView().byId("Table3").getItems();
      // Rest of the code...

      var Table3 = this.getView().byId("Table3").getItems();
      // Rest of the code...



      var q18 = {
        "section": "A",
        "questionID": "18",
        "Table3": []
      };

      // Check if Table3 has data and structure as expected
      if (Table3 && Table3.length >= 2) {
        q18.Table3.push({
          "location": "National",
          "numberOfPlants": Table3[0].getAggregation("cells")[1].getProperty("value"),
          "numberOfOffices": Table3[0].getAggregation("cells")[2].getProperty("value"),
          "total": Table3[0].getAggregation("cells")[3].getProperty("value"),
        });

        q18.Table3.push({
          "location": "International",
          "numberOfPlants": Table3[1].getAggregation("cells")[1].getProperty("value"),
          "numberOfOffices": Table3[1].getAggregation("cells")[2].getProperty("value"),
          "total": Table3[1].getAggregation("cells")[3].getProperty("value"),
        });




        abcArr.push(q18);
        console.log("abcArr:", abcArr);
      } else {
        console.log("Table3 is empty or does not have the expected structure.");
      }


      var Table4 = this.getView().byId("Table4").getItems();

      var q19a = {
        "section": "A",
        "questionID": "19a",
        "Table4": [
          {
            "locations": "National (No. of States)",
            "number": Table4[0].getAggregation("cells")[1].getProperty("value")
          },
          {
            "locations": "International (No. of Countries)",
            "number": Table4[1].getAggregation("cells")[1].getProperty("value")
          }
        ]
      };
      abcArr.push(q19a);
      console.log("abcArr:", abcArr);
      // You can add more data from Table4 by extending the array above.




      var Table5 = this.getView().byId("Table5").getItems();
      console.log("Table5:", Table5)
      console.log(Table5);




      let q20a = {
        "section": "A",
        "questionID": "20a",
        "Table5": [
          {
            "type": "EMPLOYEES",
            "sr_no": "1",
            "particulars": "Permanent (D)",
            "total": Table5[0].getAggregation("cells")[1].getProperty("value"),
            "numberOfMale": Table5[0].getAggregation("cells")[2].getProperty("value"),
            "percentageOfMale": Table5[0].getAggregation("cells")[3].getProperty("value"),
            "numberOfFemale": Table5[0].getAggregation("cells")[4].getProperty("value"),
            "percentageOfFemale": Table5[0].getAggregation("cells")[5].getProperty("value")
          },
          {
            "type": "EMPLOYEES",
            "sr_no": "2",
            "particulars": "Other than Permanent (E)",
            "total": Table5[1].getAggregation("cells")[1].getProperty("value"),
            "numberOfMale": Table5[1].getAggregation("cells")[2].getProperty("value"),
            "percentageOfMale": Table5[1].getAggregation("cells")[3].getProperty("value"),
            "numberOfFemale": Table5[1].getAggregation("cells")[4].getProperty("value"),
            "percentageOfFemale": Table5[1].getAggregation("cells")[5].getProperty("value"),
          },
          {
            "type": "EMPLOYEES",
            "sr_no": "3",
            "particulars": "Total employees (D + E)",
            "total": Table5[2].getAggregation("cells")[1].getProperty("value"),
            "numberOfMale": Table5[2].getAggregation("cells")[2].getProperty("value"),
            "percentageOfMale": Table5[2].getAggregation("cells")[3].getProperty("value"),
            "numberOfFemale": Table5[2].getAggregation("cells")[4].getProperty("value"),
            "percentageOfFemale": Table5[2].getAggregation("cells")[5].getProperty("value"),
          },
          {
            "type": "WORKERS",
            "sr_no": "4",
            "particulars": "Permanent (F)",
            "total": Table5[3].getAggregation("cells")[1].getProperty("value"),
            "numberOfMale": Table5[3].getAggregation("cells")[2].getProperty("value"),
            "percentageOfMale": Table5[3].getAggregation("cells")[3].getProperty("value"),
            "numberOfFemale": Table5[3].getAggregation("cells")[4].getProperty("value"),
            "percentageOfFemale": Table5[3].getAggregation("cells")[5].getProperty("value"),
          },
          {
            "type": "WORKERS",
            "sr_no": "5",
            "particulars": "Other than Permanent (G)",
            "total": Table5[4].getAggregation("cells")[1].getProperty("value"),
            "numberOfMale": Table5[4].getAggregation("cells")[2].getProperty("value"),
            "percentageOfMale": Table5[4].getAggregation("cells")[3].getProperty("value"),
            "numberOfFemale": Table5[4].getAggregation("cells")[4].getProperty("value"),
            "percentageOfFemale": Table5[4].getAggregation("cells")[5].getProperty("value"),
          },
          {
            "type": "WORKERS",
            "sr_no": "6",
            "particulars": "Total employees (F + G)",
            "total": Table5[5].getAggregation("cells")[1].getProperty("value"),
            "numberOfMale": Table5[5].getAggregation("cells")[2].getProperty("value"),
            "percentageOfMale": Table5[5].getAggregation("cells")[3].getProperty("value"),
            "numberOfFemale": Table5[5].getAggregation("cells")[4].getProperty("value"),
            "percentageOfFemale": Table5[5].getAggregation("cells")[5].getProperty("value"),
          }
        ]
      };

      abcArr.push(q20a);
      console.log("abcArr:", abcArr);

      var Table6 = this.getView().byId("Table6").getItems();
      console.log("Table6:", Table6)
      console.log(Table6);

      let q20b = {
        "section": "A",
        "questionID": "20b",
        "Table6": [
          {
            "type": "DIFFERENTLY ABLED EMPLOYEES",
            "sr_no": "1",
            "particulars": "Permanent (D)",
            "total": Table6[0].getAggregation("cells")[1].getProperty("value"),
            "numberOfMale": Table6[0].getAggregation("cells")[2].getProperty("value"),
            "percentageOfMale": Table6[0].getAggregation("cells")[3].getProperty("value"),
            "numberOfFemale": Table6[0].getAggregation("cells")[4].getProperty("value"),
            "percentageOfFemale": Table6[0].getAggregation("cells")[5].getProperty("value"),
          },
          {
            "type": "DIFFERENTLY ABLED EMPLOYEES",
            "sr_no": "2",
            "particulars": "Other than Permanent (E)",
            "total": Table6[1].getAggregation("cells")[1].getProperty("value"),
            "numberOfMale": Table6[1].getAggregation("cells")[2].getProperty("value"),
            "percentageOfMale": Table6[1].getAggregation("cells")[3].getProperty("value"),
            "numberOfFemale": Table6[1].getAggregation("cells")[4].getProperty("value"),
            "percentageOfFemale": Table6[1].getAggregation("cells")[5].getProperty("value"),
          },
          {
            "type": "DIFFERENTLY ABLED EMPLOYEES",
            "sr_no": "3",
            "particulars": "Total differently abled employees (D + E)",
            "total": Table6[2].getAggregation("cells")[1].getProperty("value"),
            "numberOfMale": Table6[2].getAggregation("cells")[2].getProperty("value"),
            "percentageOfMale": Table6[2].getAggregation("cells")[3].getProperty("value"),
            "numberOfFemale": Table6[2].getAggregation("cells")[4].getProperty("value"),
            "percentageOfFemale": Table6[2].getAggregation("cells")[5].getProperty("value"),
          },
          {
            "type": "DIFFERENTLY ABLED WORKERS",
            "sr_no": "4",
            "particulars": "Permanent (F)",
            "total": Table6[3].getAggregation("cells")[1].getProperty("value"),
            "numberOfMale": Table6[3].getAggregation("cells")[2].getProperty("value"),
            "percentageOfMale": Table6[3].getAggregation("cells")[3].getProperty("value"),
            "numberOfFemale": Table6[3].getAggregation("cells")[4].getProperty("value"),
            "percentageOfFemale": Table6[3].getAggregation("cells")[5].getProperty("value"),
          },
          {
            "type": "DIFFERENTLY ABLED WORKERS",
            "sr_no": "5",
            "particulars": "Other than Permanent (G)",
            "total": Table6[4].getAggregation("cells")[1].getProperty("value"),
            "numberOfMale": Table6[4].getAggregation("cells")[2].getProperty("value"),
            "percentageOfMale": Table6[4].getAggregation("cells")[3].getProperty("value"),
            "numberOfFemale": Table6[4].getAggregation("cells")[4].getProperty("value"),
            "percentageOfFemale": Table6[4].getAggregation("cells")[5].getProperty("value"),
          },
          {
            "type": "DIFFERENTLY ABLED WORKERS",
            "sr_no": "6",
            "particulars": "Total differently abled workers (F + G)",
            "total": Table6[5].getAggregation("cells")[1].getProperty("value"),
            "numberOfMale": Table6[5].getAggregation("cells")[2].getProperty("value"),
            "percentageOfMale": Table6[5].getAggregation("cells")[3].getProperty("value"),
            "numberOfFemale": Table6[5].getAggregation("cells")[4].getProperty("value"),
            "percentageOfFemale": Table6[5].getAggregation("cells")[5].getProperty("value"),
          }
        ]
      };

      abcArr.push(q20b);
      console.log("abcArr:", abcArr);

      var Table7 = this.getView().byId("Table7").getItems();
      console.log("Table7:", Table7);

      let q21 = {
        "section": "A",
        "questionID": "21",
        "Table7": [
          {
            "name": "Board of Directors",
            "total": Table7[0].getAggregation("cells")[1].getProperty("value"),
            "numberOfFemale": Table7[0].getAggregation("cells")[2].getProperty("value"),
            "percentageOfFemale": Table7[0].getAggregation("cells")[3].getProperty("value"),
          },
          {
            "name": "Key Management Personnel",
            "total": Table7[1].getAggregation("cells")[1].getProperty("value"),
            "numberOfFemale": Table7[1].getAggregation("cells")[2].getProperty("value"),
            "percentageOfFemale": Table7[1].getAggregation("cells")[3].getProperty("value"),
          }
        ]
      };

      abcArr.push(q21);
      console.log("abcArr:", abcArr);


      var Table8 = this.getView().byId("Table8").getItems();
      let q22 = {
        "section": "A",
        "questionID": "22",
        "Table8": [
          {
            "type": "Permanent Employees",
            "maleTurnoverRateInCurrentFY": Table8[0].getAggregation("cells")[1].getProperty("value"),
            "femaleTurnoverRateInCurrentFY": Table8[0].getAggregation("cells")[2].getProperty("value"),

            "maleTurnoverRateInPreviousFY": Table8[0].getAggregation("cells")[3].getProperty("value"),
            "femaleTurnoverRateInPreviousFY": Table8[0].getAggregation("cells")[4].getProperty("value"),
            "totalTurnoverRateInPreviousFY": Table8[0].getAggregation("cells")[5].getProperty("value"),
            "maleTurnoverRateInYearPriorToPreviousFY": Table8[0].getAggregation("cells")[6].getProperty("value"),
            "femaleTurnoverRateInYearPriorToPreviousFY": Table8[0].getAggregation("cells")[7].getProperty("value"),
            "totalTurnoverRateInYearPriorToPreviousFY": Table8[0].getAggregation("cells")[8].getProperty("value"),
          },
          {
            "type": "Permanent Workers",
            "maleTurnoverRateInCurrentFY": Table8[1].getAggregation("cells")[1].getProperty("value"),
            "femaleTurnoverRateInCurrentFY": Table8[1].getAggregation("cells")[2].getProperty("value"),

            "maleTurnoverRateInPreviousFY": Table8[1].getAggregation("cells")[3].getProperty("value"),
            "femaleTurnoverRateInPreviousFY": Table8[1].getAggregation("cells")[4].getProperty("value"),
            "totalTurnoverRateInPreviousFY": Table8[1].getAggregation("cells")[5].getProperty("value"),
            "maleTurnoverRateInYearPriorToPreviousFY": Table8[1].getAggregation("cells")[6].getProperty("value"),
            "femaleTurnoverRateInYearPriorToPreviousFY": Table8[1].getAggregation("cells")[7].getProperty("value"),
            "totalTurnoverRateInYearPriorToPreviousFY": Table8[1].getAggregation("cells")[8].getProperty("value"),
          }
        ]
      };

      abcArr.push(q22);
      console.log("abcArr:", abcArr);


      var Table10 = this.getView().byId("Table10").getItems();

      let q25 = {
        "section": "A",
        "questionID": "25",
        "Table10": [
          {
            "name": "Communities",
            "status": Table10[0].getAggregation("cells")[1].getProperty("value"),
            "currentFYComplaintsFiled": Table10[0].getAggregation("cells")[2].getProperty("value"),
            "currentFYComplaintsPending": Table10[0].getAggregation("cells")[3].getProperty("value"),
            "currentFYComplaintsRemarks": Table10[0].getAggregation("cells")[4].getProperty("value"),
            "previousFYComplaintsFiled": Table10[0].getAggregation("cells")[5].getProperty("value"),
            "previousFYComplaintsPending": Table10[0].getAggregation("cells")[6].getProperty("value"),
            "previousFYComplaintsRemarks": Table10[0].getAggregation("cells")[7].getProperty("value"),
          },
          {
            "name": "Investors (other than shareholders)",
            "status": Table10[1].getAggregation("cells")[1].getProperty("value"),
            "currentFYComplaintsFiled": Table10[1].getAggregation("cells")[2].getProperty("value"),
            "currentFYComplaintsPending": Table10[1].getAggregation("cells")[3].getProperty("value"),
            "currentFYComplaintsRemarks": Table10[1].getAggregation("cells")[4].getProperty("value"),
            "previousFYComplaintsFiled": Table10[1].getAggregation("cells")[5].getProperty("value"),
            "previousFYComplaintsPending": Table10[1].getAggregation("cells")[6].getProperty("value"),
            "previousFYComplaintsRemarks": Table10[1].getAggregation("cells")[7].getProperty("value"),
          },
          {
            "name": "Shareholders",
            "status": Table10[2].getAggregation("cells")[1].getProperty("value"),
            "currentFYComplaintsFiled": Table10[2].getAggregation("cells")[2].getProperty("value"),
            "currentFYComplaintsPending": Table10[2].getAggregation("cells")[3].getProperty("value"),
            "currentFYComplaintsRemarks": Table10[2].getAggregation("cells")[4].getProperty("value"),
            "previousFYComplaintsFiled": Table10[2].getAggregation("cells")[5].getProperty("value"),
            "previousFYComplaintsPending": Table10[2].getAggregation("cells")[6].getProperty("value"),
            "previousFYComplaintsRemarks": Table10[2].getAggregation("cells")[7].getProperty("value"),
          },
          {
            "name": "Employees and workers",
            "status": Table10[3].getAggregation("cells")[1].getProperty("value"),
            "currentFYComplaintsFiled": Table10[3].getAggregation("cells")[2].getProperty("value"),
            "currentFYComplaintsPending": Table10[3].getAggregation("cells")[3].getProperty("value"),
            "currentFYComplaintsRemarks": Table10[3].getAggregation("cells")[4].getProperty("value"),
            "previousFYComplaintsFiled": Table10[3].getAggregation("cells")[5].getProperty("value"),
            "previousFYComplaintsPending": Table10[3].getAggregation("cells")[6].getProperty("value"),
            "previousFYComplaintsRemarks": Table10[3].getAggregation("cells")[7].getProperty("value"),
          },
          {
            "name": "Customers",
            "status": Table10[4].getAggregation("cells")[1].getProperty("value"),
            "currentFYComplaintsFiled": Table10[4].getAggregation("cells")[2].getProperty("value"),
            "currentFYComplaintsPending": Table10[4].getAggregation("cells")[3].getProperty("value"),
            "currentFYComplaintsRemarks": Table10[4].getAggregation("cells")[4].getProperty("value"),
            "previousFYComplaintsFiled": Table10[4].getAggregation("cells")[5].getProperty("value"),
            "previousFYComplaintsPending": Table10[4].getAggregation("cells")[6].getProperty("value"),
            "previousFYComplaintsRemarks": Table10[4].getAggregation("cells")[7].getProperty("value"),
          },
          {
            "name": "Value Chain Partners",
            "status": Table10[5].getAggregation("cells")[1].getProperty("value"),
            "currentFYComplaintsFiled": Table10[5].getAggregation("cells")[2].getProperty("value"),
            "currentFYComplaintsPending": Table10[5].getAggregation("cells")[3].getProperty("value"),
            "currentFYComplaintsRemarks": Table10[5].getAggregation("cells")[4].getProperty("value"),
            "previousFYComplaintsFiled": Table10[5].getAggregation("cells")[5].getProperty("value"),
            "previousFYComplaintsPending": Table10[5].getAggregation("cells")[6].getProperty("value"),
            "previousFYComplaintsRemarks": Table10[5].getAggregation("cells")[7].getProperty("value"),
          },
          {
            "name": "Other (please specify)",
            "status": Table10[6].getAggregation("cells")[1].getProperty("value"),
            "currentFYComplaintsFiled": Table10[6].getAggregation("cells")[2].getProperty("value"),
            "currentFYComplaintsPending": Table10[6].getAggregation("cells")[3].getProperty("value"),
            "currentFYComplaintsRemarks": Table10[6].getAggregation("cells")[4].getProperty("value"),
            "previousFYComplaintsFiled": Table10[6].getAggregation("cells")[5].getProperty("value"),
            "previousFYComplaintsPending": Table10[6].getAggregation("cells")[6].getProperty("value"),
            "previousFYComplaintsRemarks": Table10[6].getAggregation("cells")[7].getProperty("value"),
          }
        ]
      };

      abcArr.push(q25);

      console.log("abcArr:", abcArr);

      var Table12 = this.getView().byId("Table12").getItems();

      var q11 = {
        "section": "B",
        "questionID": "1",
        "Table12": [
          {
            "questions": "1. a. Whether your entity’s policy/policies cover each principle and its core elements of the NGRBCs. (Yes/No)",
            "p1": Table12[0].getAggregation("cells")[1].getProperty("value"),
            "p2": Table12[0].getAggregation("cells")[2].getProperty("value"),
            "p3": Table12[0].getAggregation("cells")[3].getProperty("value"),
            "p4": Table12[0].getAggregation("cells")[4].getProperty("value"),
            "p5": Table12[0].getAggregation("cells")[5].getProperty("value"),
            "p6": Table12[0].getAggregation("cells")[6].getProperty("value"),
            "p7": Table12[0].getAggregation("cells")[7].getProperty("value"),
            "p8": Table12[0].getAggregation("cells")[8].getProperty("value"),
            "p9": Table12[0].getAggregation("cells")[9].getProperty("value")
          },
          {
            "questions": "1. b. Has the policy been approved by the Board? (Yes/No)",

            "p1": Table12[1].getAggregation("cells")[1].getProperty("value"),
            "p2": Table12[1].getAggregation("cells")[2].getProperty("value"),
            "p3": Table12[1].getAggregation("cells")[3].getProperty("value"),
            "p4": Table12[1].getAggregation("cells")[4].getProperty("value"),
            "p5": Table12[1].getAggregation("cells")[5].getProperty("value"),
            "p6": Table12[1].getAggregation("cells")[6].getProperty("value"),
            "p7": Table12[1].getAggregation("cells")[7].getProperty("value"),
            "p8": Table12[1].getAggregation("cells")[8].getProperty("value"),
            "p9": Table12[1].getAggregation("cells")[9].getProperty("value")
          },


          {
            "questions": "1. c. Web Link of the Policies, if available",
            "p1": Table12[2].getAggregation("cells")[1].getProperty("value"),
            "p2": Table12[2].getAggregation("cells")[2].getProperty("value"),
            "p3": Table12[2].getAggregation("cells")[3].getProperty("value"),
            "p4": Table12[2].getAggregation("cells")[4].getProperty("value"),
            "p5": Table12[2].getAggregation("cells")[5].getProperty("value"),
            "p6": Table12[2].getAggregation("cells")[6].getProperty("value"),
            "p7": Table12[2].getAggregation("cells")[7].getProperty("value"),
            "p8": Table12[2].getAggregation("cells")[8].getProperty("value"),
            "p9": Table12[2].getAggregation("cells")[9].getProperty("value")
          },
          {
            "questions": "2. Whether the entity has translated the policy into procedures. (Yes / No)",
            "p1": Table12[3].getAggregation("cells")[1].getProperty("value"),
            "p2": Table12[3].getAggregation("cells")[2].getProperty("value"),
            "p3": Table12[3].getAggregation("cells")[3].getProperty("value"),
            "p4": Table12[3].getAggregation("cells")[4].getProperty("value"),
            "p5": Table12[3].getAggregation("cells")[5].getProperty("value"),
            "p6": Table12[3].getAggregation("cells")[6].getProperty("value"),
            "p7": Table12[3].getAggregation("cells")[7].getProperty("value"),
            "p8": Table12[3].getAggregation("cells")[8].getProperty("value"),
            "p9": Table12[3].getAggregation("cells")[9].getProperty("value")
          },
          {
            "questions": "3. Do the enlisted policies extend to your value chain partners? (Yes/No)",
            "p1": Table12[4].getAggregation("cells")[1].getProperty("value"),
            "p2": Table12[4].getAggregation("cells")[2].getProperty("value"),
            "p3": Table12[4].getAggregation("cells")[3].getProperty("value"),
            "p4": Table12[4].getAggregation("cells")[4].getProperty("value"),
            "p5": Table12[4].getAggregation("cells")[5].getProperty("value"),
            "p6": Table12[4].getAggregation("cells")[6].getProperty("value"),
            "p7": Table12[4].getAggregation("cells")[7].getProperty("value"),
            "p8": Table12[4].getAggregation("cells")[8].getProperty("value"),
            "p9": Table12[4].getAggregation("cells")[9].getProperty("value")
          },
          {
            "questions": "4. Name of the national and international codes/certifications/labels/standards (e.g. Forest Stewardship Council, Fairtrade, Rainforest Alliance, Trustea) standards (e.g. SA 8000, OHSAS, ISO, BIS) adopted by your entity and mapped to each principle",
            "p1": Table12[5].getAggregation("cells")[1].getProperty("value"),
            "p2": Table12[5].getAggregation("cells")[2].getProperty("value"),
            "p3": Table12[5].getAggregation("cells")[3].getProperty("value"),
            "p4": Table12[5].getAggregation("cells")[4].getProperty("value"),
            "p5": Table12[5].getAggregation("cells")[5].getProperty("value"),
            "p6": Table12[5].getAggregation("cells")[6].getProperty("value"),
            "p7": Table12[5].getAggregation("cells")[7].getProperty("value"),
            "p8": Table12[5].getAggregation("cells")[8].getProperty("value"),
            "p9": Table12[5].getAggregation("cells")[9].getProperty("value")
          },
          {
            "questions": "5. Specific commitments, goals, and targets set by the entity with defined timelines, if any", "p1": "Yes",
            "p1": Table12[6].getAggregation("cells")[1].getProperty("value"),
            "p2": Table12[6].getAggregation("cells")[2].getProperty("value"),
            "p3": Table12[6].getAggregation("cells")[3].getProperty("value"),
            "p4": Table12[6].getAggregation("cells")[4].getProperty("value"),
            "p5": Table12[6].getAggregation("cells")[5].getProperty("value"),
            "p6": Table12[6].getAggregation("cells")[6].getProperty("value"),
            "p7": Table12[6].getAggregation("cells")[7].getProperty("value"),
            "p8": Table12[6].getAggregation("cells")[8].getProperty("value"),
            "p9": Table12[6].getAggregation("cells")[9].getProperty("value")
          },
          {
            "questions": "6. Performance of the entity against the specific commitments, goals, and targets along with reasons in case the same are not met",
            "p1": Table12[7].getAggregation("cells")[1].getProperty("value"),
            "p2": Table12[7].getAggregation("cells")[2].getProperty("value"),
            "p3": Table12[7].getAggregation("cells")[3].getProperty("value"),
            "p4": Table12[7].getAggregation("cells")[4].getProperty("value"),
            "p5": Table12[7].getAggregation("cells")[5].getProperty("value"),
            "p6": Table12[7].getAggregation("cells")[6].getProperty("value"),
            "p7": Table12[7].getAggregation("cells")[7].getProperty("value"),
            "p8": Table12[7].getAggregation("cells")[8].getProperty("value"),
            "p9": Table12[7].getAggregation("cells")[9].getProperty("value")

          }
        ]
      };

      abcArr.push(q11);

      console.log("abcArr:", abcArr);

      var Table13 = this.getView().byId("Table13").getItems();
      var q12 = {
        "section": "B",
        "questionID": "10",
        "Table13": [
          {
            "subjectFoReview": "Performance against above policies and follow-up action",
            "p1review": Table13[0].getAggregation("cells")[1].getProperty("value"),
            "p2review": Table13[0].getAggregation("cells")[2].getProperty("value"),
            "p3review": Table13[0].getAggregation("cells")[3].getProperty("value"),
            "p4review": Table13[0].getAggregation("cells")[4].getProperty("value"),
            "p5review": Table13[0].getAggregation("cells")[5].getProperty("value"),
            "p6review": Table13[0].getAggregation("cells")[6].getProperty("value"),
            "p7review": Table13[0].getAggregation("cells")[7].getProperty("value"),
            "p8review": Table13[0].getAggregation("cells")[8].getProperty("value"),
            "p9review": Table13[0].getAggregation("cells")[9].getProperty("value"),
            "p1frequency": Table13[0].getAggregation("cells")[10].getProperty("value"),
            "p2frequency": Table13[0].getAggregation("cells")[11].getProperty("value"),
            "p3frequency": Table13[0].getAggregation("cells")[12].getProperty("value"),
            "p4frequency": Table13[0].getAggregation("cells")[13].getProperty("value"),
            "p5frequency": Table13[0].getAggregation("cells")[14].getProperty("value"),
            "p6frequency": Table13[0].getAggregation("cells")[15].getProperty("value"),
            "p7frequency": Table13[0].getAggregation("cells")[16].getProperty("value"),
            "p8frequency": Table13[0].getAggregation("cells")[17].getProperty("value"),
            "p9frequency": Table13[0].getAggregation("cells")[18].getProperty("value")
          },

          {
            "subjectFoReview": "Compliance with statutory requirements of relevance to the principles, and rectification of any non-compliances",
            "p1review": Table13[1].getAggregation("cells")[1].getProperty("value"),
            "p2review": Table13[1].getAggregation("cells")[2].getProperty("value"),
            "p3review": Table13[1].getAggregation("cells")[3].getProperty("value"),
            "p4review": Table13[1].getAggregation("cells")[4].getProperty("value"),
            "p5review": Table13[1].getAggregation("cells")[5].getProperty("value"),
            "p6review": Table13[1].getAggregation("cells")[6].getProperty("value"),
            "p7review": Table13[1].getAggregation("cells")[7].getProperty("value"),
            "p8review": Table13[1].getAggregation("cells")[8].getProperty("value"),
            "p9review": Table13[1].getAggregation("cells")[9].getProperty("value"),
            "p1frequency": Table13[1].getAggregation("cells")[10].getProperty("value"),
            "p2frequency": Table13[1].getAggregation("cells")[11].getProperty("value"),
            "p3frequency": Table13[1].getAggregation("cells")[12].getProperty("value"),
            "p4frequency": Table13[1].getAggregation("cells")[13].getProperty("value"),
            "p5frequency": Table13[1].getAggregation("cells")[14].getProperty("value"),
            "p6frequency": Table13[1].getAggregation("cells")[15].getProperty("value"),
            "p7frequency": Table13[1].getAggregation("cells")[16].getProperty("value"),
            "p8frequency": Table13[1].getAggregation("cells")[17].getProperty("value"),
            "p9frequency": Table13[1].getAggregation("cells")[18].getProperty("value")
          }
        ]
      };


      abcArr.push(q12);

      console.log("abcArr:", abcArr);

      var Table15 = this.getView().byId("Table15").getItems();
      var q13 = {

        "section": "B",
        "questionID": "12",
        "Table15": [
          {
            "questions": "The entity does not consider the Principles material to its business (Yes/No)",
            "p1": Table15[0].getAggregation("cells")[1].getProperty("value"),
            "p2": Table15[0].getAggregation("cells")[2].getProperty("value"),
            "p3": Table15[0].getAggregation("cells")[3].getProperty("value"),
            "p4": Table15[0].getAggregation("cells")[4].getProperty("value"),
            "p5": Table15[0].getAggregation("cells")[5].getProperty("value"),
            "p6": Table15[0].getAggregation("cells")[6].getProperty("value"),
            "p7": Table15[0].getAggregation("cells")[7].getProperty("value"),
            "p8": Table15[0].getAggregation("cells")[8].getProperty("value"),
            "p9": Table15[0].getAggregation("cells")[9].getProperty("value")
          },
          {
            "questions": "The entity does not have the financial or human and technical resources available for the task (Yes/No)",
            "p1": Table15[2].getAggregation("cells")[1].getProperty("value"),
            "p2": Table15[2].getAggregation("cells")[2].getProperty("value"),
            "p3": Table15[2].getAggregation("cells")[3].getProperty("value"),
            "p4": Table15[2].getAggregation("cells")[4].getProperty("value"),
            "p5": Table15[2].getAggregation("cells")[5].getProperty("value"),
            "p6": Table15[2].getAggregation("cells")[6].getProperty("value"),
            "p7": Table15[2].getAggregation("cells")[7].getProperty("value"),
            "p8": Table15[2].getAggregation("cells")[8].getProperty("value"),
            "p9": Table15[2].getAggregation("cells")[9].getProperty("value")
          },
          {
            "questions": "It is planned to be done in the next financial year (Yes/No)",
            "p1": Table15[3].getAggregation("cells")[1].getProperty("value"),
            "p2": Table15[3].getAggregation("cells")[2].getProperty("value"),
            "p3": Table15[3].getAggregation("cells")[3].getProperty("value"),
            "p4": Table15[3].getAggregation("cells")[4].getProperty("value"),
            "p5": Table15[3].getAggregation("cells")[5].getProperty("value"),
            "p6": Table15[3].getAggregation("cells")[6].getProperty("value"),
            "p7": Table15[3].getAggregation("cells")[7].getProperty("value"),
            "p8": Table15[3].getAggregation("cells")[8].getProperty("value"),
            "p9": Table15[3].getAggregation("cells")[9].getProperty("value")
          },
          {
            "questions": "Any other reason (please specify)",
            "p1": Table15[4].getAggregation("cells")[1].getProperty("value"),
            "p2": Table15[4].getAggregation("cells")[2].getProperty("value"),
            "p3": Table15[4].getAggregation("cells")[3].getProperty("value"),
            "p4": Table15[4].getAggregation("cells")[4].getProperty("value"),
            "p5": Table15[4].getAggregation("cells")[5].getProperty("value"),
            "p6": Table15[4].getAggregation("cells")[6].getProperty("value"),
            "p7": Table15[4].getAggregation("cells")[7].getProperty("value"),
            "p8": Table15[4].getAggregation("cells")[8].getProperty("value"),
            "p9": Table15[4].getAggregation("cells")[9].getProperty("value")
          },

        ]
      };
      abcArr.push(q13);

      console.log("abcArr:", abcArr);


      var oTable2 = this.getView().byId("Table2");

      // Get the table items (rows) for Table2
      var aTable2Items = oTable2.getItems();

      // Create an array to store the data from Table2
      var aTable2Data = [];

      // Loop through the table items of Table2 and extract the data
      for (var i = 0; i < aTable2Items.length; i++) {
        var oItem = aTable2Items[i];
        var oRowData2 = {};

        // Assuming you want to map specific properties from the table cells

        // Corrected the property names and added missing properties
        if (oItem.getCells()[0].getValue() !== "") {
          oRowData2.sr_no = oItem.getCells()[0].getValue();
        } else {
          oRowData2.sr_no = "NA";
        }

        if (oItem.getCells()[1].getValue() !== "") {
          oRowData2.nameOfProductOrService = oItem.getCells()[1].getValue();
        } else {
          oRowData2.nameOfProductOrService = "NA";
        }

        if (oItem.getCells()[2].getValue() !== "") {
          oRowData2.nicCode = oItem.getCells()[2].getValue();
        } else {
          oRowData2.nicCode = "NA";
        }

        if (oItem.getCells()[3].getValue() !== "") {
          oRowData2.totalTurnoverContributed = oItem.getCells()[3].getValue();
        } else {
          oRowData2.totalTurnoverContributed = "NA";
        }

        // Add the row data to the array for Table2
        aTable2Data.push(oRowData2);
      }

      var q17 = {
        section: "A",
        questionID: "17",
        Table2: aTable2Data
      };

      abcArr.push(q17);

      console.log("abcArr:", abcArr);



      var oTable = this.getView().byId("Table1");
      var aTableItems = oTable.getItems();
      var Table1Data = [];

      for (var i = 0; i < aTableItems.length; i++) {
        var oItem = aTableItems[i];
        var oRowData = {};

        // Assuming you want to map specific properties from the table cells
        if (oItem.getCells()[0].getValue() !== "") {
          oRowData.sr_no = oItem.getCells()[0].getValue();
        } else {
          oRowData.sr_no = "NA";
        }

        if (oItem.getCells()[1].getValue() !== "") {
          oRowData.descriptionOfMainActivity = oItem.getCells()[1].getValue();
        } else {
          oRowData.descriptionOfMainActivity = "NA";
        }

        // Change the index to [2] for descriptionOfBusinessActivity
        if (oItem.getCells()[2].getValue() !== "") {
          oRowData.descriptionOfBusinessActivity = oItem.getCells()[2].getValue();
        } else {
          oRowData.descriptionOfBusinessActivity = "NA";
        }

        // Change the index to [3] for percentageOfTurnoverOfTheEntity
        if (oItem.getCells()[3].getValue() !== "") {
          oRowData.percentageOfTurnoverOfTheEntity = oItem.getCells()[3].getValue();
        } else {
          oRowData.percentageOfTurnoverOfTheEntity = "NA";
        }

        Table1Data.push(oRowData);
      }

      var q16 = {
        section: "A",
        questionID: "16",
        Table1: Table1Data
      };

      abcArr.push(q16);

      console.log("abcArr:", abcArr);

      var oTable = this.getView().byId("Table9");

      var aTableItems = oTable.getItems();

      // Create an array to store the data from the table
      var Table9Data = [];

      // Loop through the table items and extract the data
      for (var i = 0; i < aTableItems.length; i++) {
        var oItem = aTableItems[i];

        // Create an object to represent a row of data
        var oRowData3 = {};

        // Assuming you want to map specific properties from the table cells
        if (oItem.getCells()[0].getValue() !== "") {
          oRowData3.type = oItem.getCells()[0].getValue();
        } else {
          oRowData3.type = "NA";
        }

        if (oItem.getCells()[1].getValue() !== "") {
          oRowData3.percentageOfShares = oItem.getCells()[1].getValue();
        } else {
          oRowData3.percentageOfShares = "NA";
        }

        if (oItem.getCells()[2].getValue() !== "") {
          oRowData3.participationStatus = oItem.getCells()[2].getValue();
        } else {
          oRowData3.participationStatus = "NA";
        }

        Table9Data.push(oRowData3);
      }

      var q231 = {
        section: "A",
        questionID: "23",
        Table9: Table9Data
      };
      abcArr.push(q231);

      console.log("abcArr:", abcArr);


      var oTable11 = this.getView().byId("Table11");
      var aTable11Items = oTable11.getItems();
      var Table11Data = [];

      for (var i = 0; i < aTable11Items.length; i++) {
        var oItem = aTable11Items[i];
        var oRowData4 = {
          "sr_no": oItem.getCells()[0].getValue() || "NA",
          "issue": oItem.getCells()[1].getValue() || "NA",
          "type": oItem.getCells()[2].getValue() || "NA",
          "rationale": oItem.getCells()[3].getValue() || "NA",
          "approach": oItem.getCells()[4].getValue() || "NA",
          "financialImplications": oItem.getCells()[5].getValue() || "NA"
        };

        Table11Data.push(oRowData4);
      }


      var q231 = {
        section: "A",
        questionID: "26",
        Table11: Table11Data
      };
      abcArr.push(q231);

      console.log("abcArr:", abcArr);


      var oTable14 = this.getView().byId("Table14");
      var aTable14Items = oTable14.getItems(); // Corrected variable name

      var Table14Data = [];

      for (var i = 0; i < aTable14Items.length; i++) {
        var oItem = aTable14Items[i];
        var oRowData5 = {
          "p1": oItem.getCells()[0].getValue() || "NA",
          "p2": oItem.getCells()[1].getValue() || "NA",
          "p3": oItem.getCells()[2].getValue() || "NA",
          "p4": oItem.getCells()[3].getValue() || "NA",
          "p5": oItem.getCells()[4].getValue() || "NA",
          "p6": oItem.getCells()[5].getValue() || "NA",
          "p7": oItem.getCells()[6].getValue() || "NA", // Corrected cell index
          "p8": oItem.getCells()[7].getValue() || "NA", // Corrected cell index
          "p9": oItem.getCells()[8].getValue() || "NA"  // Corrected cell index
        };

        Table14Data.push(oRowData5);
      }

      var q221 = {
        section: "B",
        questionID: "11",
        Table14: Table14Data
      };
      abcArr.push(q221);

      console.log("abcArr:", abcArr);


      let obj = {
        "fiscalYear": selectedYear,
        "businessFunction": "sectionABC",
        "creator_email": UserEmail,
        "creator_name": Name,
        "status": "Draft",
        "sectionABC": abcArr

      };

      sap.m.MessageBox.confirm("Do you want to save?", {
        actions: [sap.m.MessageBox.Action.OK, sap.m.MessageBox.Action.CANCEL],
        emphasizedAction: sap.m.MessageBox.Action.OK,
        onClose: function (sAction) {
          if (sAction === "OK") {
            var oBusy = new sap.m.BusyDialog();
            oBusy.open();


            var oODataModel = that.getView().getModel("Catalog");

            oODataModel.create("/qualitative_data", obj, {
              success: function (odata) {
                oBusy.close();

                sap.m.MessageBox.success("Draft Saved", {
                  icon: sap.m.MessageBox.Icon.SUCCESS,
                  title: "SUCCESS",
                  actions: [sap.m.MessageBox.Action.OK],
                  initialFocus: sap.m.MessageBox.Action.OK,
                  onClose: function (Action) {
                    // Handle success message onClose if needed
                  }
                });
              },
              error: function (error) {
                oBusy.close();
                console.error(error);
                // Handle the error
              }

            });
          }
        }
      });
      oModel.refresh();

    },

    onSubmitPress: function () {
      var oYearDropdown = this.getView().byId("yearDropdown");
      var selectedYear = oYearDropdown.getSelectedKey();
      var that = this;
      var Name = this.Name;
      var UserEmail = this.UserEmail;
      var textAreaValue1 = this.getView().byId("textArea1").getValue();
      var textAreaValue2 = this.getView().byId("textArea2").getValue();
      var textAreaValue3 = this.getView().byId("textArea3").getValue();
      var textAreaValue4 = this.getView().byId("textArea4").getValue();
      var textAreaValue5 = this.getView().byId("textArea5").getValue();
      var textAreaValue6 = this.getView().byId("textArea6").getValue();
      var textAreaValue7 = this.getView().byId("textArea7").getValue();
      var textAreaValue8 = this.getView().byId("textArea8").getValue();
      var textAreaValue9 = this.getView().byId("textArea9").getValue();
      var textAreaValue10 = this.getView().byId("textArea10").getValue();
      var textAreaValue11 = this.getView().byId("textArea11").getValue();
      var textAreaValue12 = this.getView().byId("textArea12").getValue();
      var textAreaValue13 = this.getView().byId("textArea13").getValue();
      var textAreaValue14 = this.getView().byId("textArea14").getValue();
      var textAreaValue15 = this.getView().byId("textArea15").getValue();
      var textAreaValue16 = this.getView().byId("textArea16").getValue();
      var textAreaValue17 = this.getView().byId("textArea17").getValue();

      var textAreaValue19 = this.getView().byId("textArea19").getValue();
      var textAreaValue20 = this.getView().byId("textArea20").getValue();
      var textAreaValue21 = this.getView().byId("textArea21").getValue();
      var textAreaValue22 = this.getView().byId("textArea22").getValue();
      var textAreaValue23 = this.getView().byId("textArea23").getValue();
      var textAreaValue24 = this.getView().byId("textArea24").getValue();



      var abcArr = []

      if (textAreaValue22 == "") {
        textAreaValue22 = "NA";
      }

      var o = {
        "section": "B",
        "questionID": "7",
        "answer": textAreaValue22
      };

      abcArr.push(o)
      console.log("abcArr:", abcArr);

      if (textAreaValue23 == "") {
        textAreaValue23 = "NA";
      }

      var i = {
        "section": "B",
        "questionID": "8",
        "answer": textAreaValue23
      };

      abcArr.push(i)
      console.log("abcArr:", abcArr);

      if (textAreaValue24 == "") {
        textAreaValue24 = "NA";
      }

      var j = {
        "section": "B",
        "questionID": "9",
        "answer": textAreaValue24
      };

      abcArr.push(j)
      console.log("abcArr:", abcArr);


      if (textAreaValue1 == "") {
        textAreaValue1 = "NA";
      }

      var q1 = {
        "section": "A",
        "questionID": "1",
        "answer": textAreaValue1
      };

      abcArr.push(q1);

      console.log("abcArr:", abcArr);

      if (textAreaValue2 == "") {
        textAreaValue2 = "NA";
      }

      var q2 = {
        "section": "A",
        "questionID": "2",
        "answer": textAreaValue2
      };

      abcArr.push(q2);

      console.log("abcArr:", abcArr);
      if (textAreaValue3 == "") {
        textAreaValue3 = "NA";
      }

      var q3 = {
        "section": "A",
        "questionID": "3",
        "answer": textAreaValue3
      };

      abcArr.push(q3);

      console.log("abcArr:", abcArr);

      if (textAreaValue4 == "") {
        textAreaValue4 = "NA";
      }

      var q4 = {
        "section": "A",
        "questionID": "4",
        "answer": textAreaValue4
      };

      abcArr.push(q4);

      console.log("abcArr:", abcArr);


      if (textAreaValue5 == "") {
        textAreaValue5 = "NA";
      }

      var q5 = {
        "section": "A",
        "questionID": "5",
        "answer": textAreaValue5
      };

      abcArr.push(q5);

      console.log("abcArr:", abcArr);
      if (textAreaValue6 == "") {
        textAreaValue6 = "NA";
      }

      var q6 = {
        "section": "A",
        "questionID": "6",
        "answer": textAreaValue6
      };

      abcArr.push(q6);

      console.log("abcArr:", abcArr);

      if (textAreaValue7 == "") {
        textAreaValue7 = "NA";
      }

      var q7 = {
        "section": "A",
        "questionID": "7",
        "answer": textAreaValue7
      };

      abcArr.push(q7);

      console.log("abcArr:", abcArr);

      if (textAreaValue8 == "") {
        textAreaValue8 = "NA";
      }

      var q8 = {
        "section": "A",
        "questionID": "8",
        "answer": textAreaValue8
      };

      abcArr.push(q8);

      console.log("abcArr:", abcArr);

      if (textAreaValue9 == "") {
        textAreaValue9 = "NA";
      }

      var q9 = {
        "section": "A",
        "questionID": "9",
        "answer": textAreaValue9
      };

      abcArr.push(q9);

      console.log("abcArr:", abcArr);

      if (textAreaValue10 == "") {
        textAreaValue10 = "NA";
      }

      var q10 = {
        "section": "A",
        "questionID": "10",
        "answer": textAreaValue10
      };

      abcArr.push(q10);

      console.log("abcArr:", abcArr);

      if (textAreaValue11 == "") {
        textAreaValue11 = "NA";
      }

      var q11 = {
        "section": "A",
        "questionID": "11",
        "answer": textAreaValue11
      };

      abcArr.push(q11);

      console.log("abcArr:", abcArr);

      if (textAreaValue12 == "") {
        textAreaValue12 = "NA";
      }

      var q12 = {
        "section": "A",
        "questionID": "12",
        "answer": textAreaValue12
      };

      abcArr.push(q12);

      console.log("abcArr:", abcArr);

      if (textAreaValue13 == "") {
        textAreaValue13 = "NA";
      }

      var q13 = {
        "section": "A",
        "questionID": "13",
        "answer": textAreaValue13
      };

      abcArr.push(q13);
      console.log("abcArr:", abcArr);
      //24a
      if (textAreaValue19 == "") {
        textAreaValue19 = "NA";
      }

      var q24a = {
        "section": "A",
        "questionID": "24a",
        "answer": textAreaValue19
      };

      abcArr.push(q24a);
      console.log("abcArr:", abcArr);

      //24b
      if (textAreaValue20 == "") {
        textAreaValue20 = "NA";
      }

      var q24b = {
        "section": "A",
        "questionID": "24b",
        "answer": textAreaValue20
      };

      abcArr.push(q24b);
      console.log("abcArr:", abcArr);
      //24c
      if (textAreaValue21 == "") {
        textAreaValue21 = "NA";
      }

      var q24c = {
        "section": "A",
        "questionID": "24c",
        "answer": textAreaValue21
      };

      abcArr.push(q24c);
      console.log("abcArr:", abcArr);



      if (textAreaValue14 == "") {
        textAreaValue14 = "NA";
      }

      var q14 = {
        "section": "A",
        "questionID": "14",
        "answer": textAreaValue14
      };

      abcArr.push(q14);
      console.log("abcArr:", abcArr);


      if (textAreaValue15 == "") {
        textAreaValue15 = "NA";
      }

      var q15 = {
        "section": "A",
        "questionID": "15",
        "answer": textAreaValue15
      };

      abcArr.push(q15);
      console.log("abcArr:", abcArr);

      if (textAreaValue16 == "") {
        textAreaValue16 = "NA";
      }

      var q19b = {
        "section": "A",
        "questionID": "19b",
        "answer": textAreaValue16
      };

      abcArr.push(q19b);
      console.log("abcArr:", abcArr);



      if (textAreaValue17 == "") {
        textAreaValue17 = "NA";

        var q19c = {
          "section": "A",
          "questionID": "19c",
          "answer": textAreaValue17
        };

        abcArr.push(q19c);
        console.log("abcArr:", abcArr);

      }


      console.log("Creating q18 object");
      var Table3 = this.getView().byId("Table3").getItems();
      // Rest of the code...

      var Table3 = this.getView().byId("Table3").getItems();
      // Rest of the code...



      var q18 = {
        "section": "A",
        "questionID": "18",
        "Table3": []
      };

      // Check if Table3 has data and structure as expected
      if (Table3 && Table3.length >= 2) {
        q18.Table3.push({
          "location": "National",
          "numberOfPlants": Table3[0].getAggregation("cells")[1].getProperty("value"),
          "numberOfOffices": Table3[0].getAggregation("cells")[2].getProperty("value"),
          "total": Table3[0].getAggregation("cells")[3].getProperty("value"),
        });

        q18.Table3.push({
          "location": "International",
          "numberOfPlants": Table3[1].getAggregation("cells")[1].getProperty("value"),
          "numberOfOffices": Table3[1].getAggregation("cells")[2].getProperty("value"),
          "total": Table3[1].getAggregation("cells")[3].getProperty("value"),
        });




        abcArr.push(q18);
        console.log("abcArr:", abcArr);
      } else {
        console.log("Table3 is empty or does not have the expected structure.");
      }


      var Table4 = this.getView().byId("Table4").getItems();

      var q19a = {
        "section": "A",
        "questionID": "19a",
        "Table4": [
          {
            "locations": "National (No. of States)",
            "number": Table4[0].getAggregation("cells")[1].getProperty("value")
          },
          {
            "locations": "International (No. of Countries)",
            "number": Table4[1].getAggregation("cells")[1].getProperty("value")
          }
        ]
      };
      abcArr.push(q19a);
      console.log("abcArr:", abcArr);
      // You can add more data from Table4 by extending the array above.




      var Table5 = this.getView().byId("Table5").getItems();
      console.log("Table5:", Table5)
      console.log(Table5);




      let q20a = {
        "section": "A",
        "questionID": "20a",
        "Table5": [
          {
            "type": "EMPLOYEES",
            "sr_no": "1",
            "particulars": "Permanent (D)",
            "total": Table5[0].getAggregation("cells")[1].getProperty("value"),
            "numberOfMale": Table5[0].getAggregation("cells")[2].getProperty("value"),
            "percentageOfMale": Table5[0].getAggregation("cells")[3].getProperty("value"),
            "numberOfFemale": Table5[0].getAggregation("cells")[4].getProperty("value"),
            "percentageOfFemale": Table5[0].getAggregation("cells")[5].getProperty("value")
          },
          {
            "type": "EMPLOYEES",
            "sr_no": "2",
            "particulars": "Other than Permanent (E)",
            "total": Table5[1].getAggregation("cells")[1].getProperty("value"),
            "numberOfMale": Table5[1].getAggregation("cells")[2].getProperty("value"),
            "percentageOfMale": Table5[1].getAggregation("cells")[3].getProperty("value"),
            "numberOfFemale": Table5[1].getAggregation("cells")[4].getProperty("value"),
            "percentageOfFemale": Table5[1].getAggregation("cells")[5].getProperty("value"),
          },
          {
            "type": "EMPLOYEES",
            "sr_no": "3",
            "particulars": "Total employees (D + E)",
            "total": Table5[2].getAggregation("cells")[1].getProperty("value"),
            "numberOfMale": Table5[2].getAggregation("cells")[2].getProperty("value"),
            "percentageOfMale": Table5[2].getAggregation("cells")[3].getProperty("value"),
            "numberOfFemale": Table5[2].getAggregation("cells")[4].getProperty("value"),
            "percentageOfFemale": Table5[2].getAggregation("cells")[5].getProperty("value"),
          },
          {
            "type": "WORKERS",
            "sr_no": "4",
            "particulars": "Permanent (F)",
            "total": Table5[3].getAggregation("cells")[1].getProperty("value"),
            "numberOfMale": Table5[3].getAggregation("cells")[2].getProperty("value"),
            "percentageOfMale": Table5[3].getAggregation("cells")[3].getProperty("value"),
            "numberOfFemale": Table5[3].getAggregation("cells")[4].getProperty("value"),
            "percentageOfFemale": Table5[3].getAggregation("cells")[5].getProperty("value"),
          },
          {
            "type": "WORKERS",
            "sr_no": "5",
            "particulars": "Other than Permanent (G)",
            "total": Table5[4].getAggregation("cells")[1].getProperty("value"),
            "numberOfMale": Table5[4].getAggregation("cells")[2].getProperty("value"),
            "percentageOfMale": Table5[4].getAggregation("cells")[3].getProperty("value"),
            "numberOfFemale": Table5[4].getAggregation("cells")[4].getProperty("value"),
            "percentageOfFemale": Table5[4].getAggregation("cells")[5].getProperty("value"),
          },
          {
            "type": "WORKERS",
            "sr_no": "6",
            "particulars": "Total employees (F + G)",
            "total": Table5[5].getAggregation("cells")[1].getProperty("value"),
            "numberOfMale": Table5[5].getAggregation("cells")[2].getProperty("value"),
            "percentageOfMale": Table5[5].getAggregation("cells")[3].getProperty("value"),
            "numberOfFemale": Table5[5].getAggregation("cells")[4].getProperty("value"),
            "percentageOfFemale": Table5[5].getAggregation("cells")[5].getProperty("value"),
          }
        ]
      };

      abcArr.push(q20a);
      console.log("abcArr:", abcArr);

      var Table6 = this.getView().byId("Table6").getItems();
      console.log("Table6:", Table6)
      console.log(Table6);

      let q20b = {
        "section": "A",
        "questionID": "20b",
        "Table6": [
          {
            "type": "DIFFERENTLY ABLED EMPLOYEES",
            "sr_no": "1",
            "particulars": "Permanent (D)",
            "total": Table6[0].getAggregation("cells")[1].getProperty("value"),
            "numberOfMale": Table6[0].getAggregation("cells")[2].getProperty("value"),
            "percentageOfMale": Table6[0].getAggregation("cells")[3].getProperty("value"),
            "numberOfFemale": Table6[0].getAggregation("cells")[4].getProperty("value"),
            "percentageOfFemale": Table6[0].getAggregation("cells")[5].getProperty("value"),
          },
          {
            "type": "DIFFERENTLY ABLED EMPLOYEES",
            "sr_no": "2",
            "particulars": "Other than Permanent (E)",
            "total": Table6[1].getAggregation("cells")[1].getProperty("value"),
            "numberOfMale": Table6[1].getAggregation("cells")[2].getProperty("value"),
            "percentageOfMale": Table6[1].getAggregation("cells")[3].getProperty("value"),
            "numberOfFemale": Table6[1].getAggregation("cells")[4].getProperty("value"),
            "percentageOfFemale": Table6[1].getAggregation("cells")[5].getProperty("value"),
          },
          {
            "type": "DIFFERENTLY ABLED EMPLOYEES",
            "sr_no": "3",
            "particulars": "Total differently abled employees (D + E)",
            "total": Table6[2].getAggregation("cells")[1].getProperty("value"),
            "numberOfMale": Table6[2].getAggregation("cells")[2].getProperty("value"),
            "percentageOfMale": Table6[2].getAggregation("cells")[3].getProperty("value"),
            "numberOfFemale": Table6[2].getAggregation("cells")[4].getProperty("value"),
            "percentageOfFemale": Table6[2].getAggregation("cells")[5].getProperty("value"),
          },
          {
            "type": "DIFFERENTLY ABLED WORKERS",
            "sr_no": "4",
            "particulars": "Permanent (F)",
            "total": Table6[3].getAggregation("cells")[1].getProperty("value"),
            "numberOfMale": Table6[3].getAggregation("cells")[2].getProperty("value"),
            "percentageOfMale": Table6[3].getAggregation("cells")[3].getProperty("value"),
            "numberOfFemale": Table6[3].getAggregation("cells")[4].getProperty("value"),
            "percentageOfFemale": Table6[3].getAggregation("cells")[5].getProperty("value"),
          },
          {
            "type": "DIFFERENTLY ABLED WORKERS",
            "sr_no": "5",
            "particulars": "Other than Permanent (G)",
            "total": Table6[4].getAggregation("cells")[1].getProperty("value"),
            "numberOfMale": Table6[4].getAggregation("cells")[2].getProperty("value"),
            "percentageOfMale": Table6[4].getAggregation("cells")[3].getProperty("value"),
            "numberOfFemale": Table6[4].getAggregation("cells")[4].getProperty("value"),
            "percentageOfFemale": Table6[4].getAggregation("cells")[5].getProperty("value"),
          },
          {
            "type": "DIFFERENTLY ABLED WORKERS",
            "sr_no": "6",
            "particulars": "Total differently abled workers (F + G)",
            "total": Table6[5].getAggregation("cells")[1].getProperty("value"),
            "numberOfMale": Table6[5].getAggregation("cells")[2].getProperty("value"),
            "percentageOfMale": Table6[5].getAggregation("cells")[3].getProperty("value"),
            "numberOfFemale": Table6[5].getAggregation("cells")[4].getProperty("value"),
            "percentageOfFemale": Table6[5].getAggregation("cells")[5].getProperty("value"),
          }
        ]
      };

      abcArr.push(q20b);
      console.log("abcArr:", abcArr);

      var Table7 = this.getView().byId("Table7").getItems();
      console.log("Table7:", Table7);

      let q21 = {
        "section": "A",
        "questionID": "21",
        "Table7": [
          {
            "name": "Board of Directors",
            "total": Table7[0].getAggregation("cells")[1].getProperty("value"),
            "numberOfFemale": Table7[0].getAggregation("cells")[2].getProperty("value"),
            "percentageOfFemale": Table7[0].getAggregation("cells")[3].getProperty("value"),
          },
          {
            "name": "Key Management Personnel",
            "total": Table7[1].getAggregation("cells")[1].getProperty("value"),
            "numberOfFemale": Table7[1].getAggregation("cells")[2].getProperty("value"),
            "percentageOfFemale": Table7[1].getAggregation("cells")[3].getProperty("value"),
          }
        ]
      };

      abcArr.push(q21);
      console.log("abcArr:", abcArr);


      var Table8 = this.getView().byId("Table8").getItems();
      let q22 = {
        "section": "A",
        "questionID": "22",
        "Table8": [
          {
            "type": "Permanent Employees",
            "maleTurnoverRateInCurrentFY": Table8[0].getAggregation("cells")[1].getProperty("value"),
            "femaleTurnoverRateInCurrentFY": Table8[0].getAggregation("cells")[2].getProperty("value"),

            "maleTurnoverRateInPreviousFY": Table8[0].getAggregation("cells")[3].getProperty("value"),
            "femaleTurnoverRateInPreviousFY": Table8[0].getAggregation("cells")[4].getProperty("value"),
            "totalTurnoverRateInPreviousFY": Table8[0].getAggregation("cells")[5].getProperty("value"),
            "maleTurnoverRateInYearPriorToPreviousFY": Table8[0].getAggregation("cells")[6].getProperty("value"),
            "femaleTurnoverRateInYearPriorToPreviousFY": Table8[0].getAggregation("cells")[7].getProperty("value"),
            "totalTurnoverRateInYearPriorToPreviousFY": Table8[0].getAggregation("cells")[8].getProperty("value"),
          },
          {
            "type": "Permanent Workers",
            "maleTurnoverRateInCurrentFY": Table8[1].getAggregation("cells")[1].getProperty("value"),
            "femaleTurnoverRateInCurrentFY": Table8[1].getAggregation("cells")[2].getProperty("value"),

            "maleTurnoverRateInPreviousFY": Table8[1].getAggregation("cells")[3].getProperty("value"),
            "femaleTurnoverRateInPreviousFY": Table8[1].getAggregation("cells")[4].getProperty("value"),
            "totalTurnoverRateInPreviousFY": Table8[1].getAggregation("cells")[5].getProperty("value"),
            "maleTurnoverRateInYearPriorToPreviousFY": Table8[1].getAggregation("cells")[6].getProperty("value"),
            "femaleTurnoverRateInYearPriorToPreviousFY": Table8[1].getAggregation("cells")[7].getProperty("value"),
            "totalTurnoverRateInYearPriorToPreviousFY": Table8[1].getAggregation("cells")[8].getProperty("value"),
          }
        ]
      };

      abcArr.push(q22);
      console.log("abcArr:", abcArr);


      var Table10 = this.getView().byId("Table10").getItems();

      let q25 = {
        "section": "A",
        "questionID": "25",
        "Table10": [
          {
            "name": "Communities",
            "status": Table10[0].getAggregation("cells")[1].getProperty("value"),
            "currentFYComplaintsFiled": Table10[0].getAggregation("cells")[2].getProperty("value"),
            "currentFYComplaintsPending": Table10[0].getAggregation("cells")[3].getProperty("value"),
            "currentFYComplaintsRemarks": Table10[0].getAggregation("cells")[4].getProperty("value"),
            "previousFYComplaintsFiled": Table10[0].getAggregation("cells")[5].getProperty("value"),
            "previousFYComplaintsPending": Table10[0].getAggregation("cells")[6].getProperty("value"),
            "previousFYComplaintsRemarks": Table10[0].getAggregation("cells")[7].getProperty("value"),
          },
          {
            "name": "Investors (other than shareholders)",
            "status": Table10[1].getAggregation("cells")[1].getProperty("value"),
            "currentFYComplaintsFiled": Table10[1].getAggregation("cells")[2].getProperty("value"),
            "currentFYComplaintsPending": Table10[1].getAggregation("cells")[3].getProperty("value"),
            "currentFYComplaintsRemarks": Table10[1].getAggregation("cells")[4].getProperty("value"),
            "previousFYComplaintsFiled": Table10[1].getAggregation("cells")[5].getProperty("value"),
            "previousFYComplaintsPending": Table10[1].getAggregation("cells")[6].getProperty("value"),
            "previousFYComplaintsRemarks": Table10[1].getAggregation("cells")[7].getProperty("value"),
          },
          {
            "name": "Shareholders",
            "status": Table10[2].getAggregation("cells")[1].getProperty("value"),
            "currentFYComplaintsFiled": Table10[2].getAggregation("cells")[2].getProperty("value"),
            "currentFYComplaintsPending": Table10[2].getAggregation("cells")[3].getProperty("value"),
            "currentFYComplaintsRemarks": Table10[2].getAggregation("cells")[4].getProperty("value"),
            "previousFYComplaintsFiled": Table10[2].getAggregation("cells")[5].getProperty("value"),
            "previousFYComplaintsPending": Table10[2].getAggregation("cells")[6].getProperty("value"),
            "previousFYComplaintsRemarks": Table10[2].getAggregation("cells")[7].getProperty("value"),
          },
          {
            "name": "Employees and workers",
            "status": Table10[3].getAggregation("cells")[1].getProperty("value"),
            "currentFYComplaintsFiled": Table10[3].getAggregation("cells")[2].getProperty("value"),
            "currentFYComplaintsPending": Table10[3].getAggregation("cells")[3].getProperty("value"),
            "currentFYComplaintsRemarks": Table10[3].getAggregation("cells")[4].getProperty("value"),
            "previousFYComplaintsFiled": Table10[3].getAggregation("cells")[5].getProperty("value"),
            "previousFYComplaintsPending": Table10[3].getAggregation("cells")[6].getProperty("value"),
            "previousFYComplaintsRemarks": Table10[3].getAggregation("cells")[7].getProperty("value"),
          },
          {
            "name": "Customers",
            "status": Table10[4].getAggregation("cells")[1].getProperty("value"),
            "currentFYComplaintsFiled": Table10[4].getAggregation("cells")[2].getProperty("value"),
            "currentFYComplaintsPending": Table10[4].getAggregation("cells")[3].getProperty("value"),
            "currentFYComplaintsRemarks": Table10[4].getAggregation("cells")[4].getProperty("value"),
            "previousFYComplaintsFiled": Table10[4].getAggregation("cells")[5].getProperty("value"),
            "previousFYComplaintsPending": Table10[4].getAggregation("cells")[6].getProperty("value"),
            "previousFYComplaintsRemarks": Table10[4].getAggregation("cells")[7].getProperty("value"),
          },
          {
            "name": "Value Chain Partners",
            "status": Table10[5].getAggregation("cells")[1].getProperty("value"),
            "currentFYComplaintsFiled": Table10[5].getAggregation("cells")[2].getProperty("value"),
            "currentFYComplaintsPending": Table10[5].getAggregation("cells")[3].getProperty("value"),
            "currentFYComplaintsRemarks": Table10[5].getAggregation("cells")[4].getProperty("value"),
            "previousFYComplaintsFiled": Table10[5].getAggregation("cells")[5].getProperty("value"),
            "previousFYComplaintsPending": Table10[5].getAggregation("cells")[6].getProperty("value"),
            "previousFYComplaintsRemarks": Table10[5].getAggregation("cells")[7].getProperty("value"),
          },
          {
            "name": "Other (please specify)",
            "status": Table10[6].getAggregation("cells")[1].getProperty("value"),
            "currentFYComplaintsFiled": Table10[6].getAggregation("cells")[2].getProperty("value"),
            "currentFYComplaintsPending": Table10[6].getAggregation("cells")[3].getProperty("value"),
            "currentFYComplaintsRemarks": Table10[6].getAggregation("cells")[4].getProperty("value"),
            "previousFYComplaintsFiled": Table10[6].getAggregation("cells")[5].getProperty("value"),
            "previousFYComplaintsPending": Table10[6].getAggregation("cells")[6].getProperty("value"),
            "previousFYComplaintsRemarks": Table10[6].getAggregation("cells")[7].getProperty("value"),
          }
        ]
      };

      abcArr.push(q25);

      console.log("abcArr:", abcArr);

      var Table12 = this.getView().byId("Table12").getItems();

      var q11 = {
        "section": "B",
        "questionID": "1",
        "Table12": [
          {
            "questions": "1. a. Whether your entity’s policy/policies cover each principle and its core elements of the NGRBCs. (Yes/No)",
            "p1": Table12[0].getAggregation("cells")[1].getProperty("value"),
            "p2": Table12[0].getAggregation("cells")[2].getProperty("value"),
            "p3": Table12[0].getAggregation("cells")[3].getProperty("value"),
            "p4": Table12[0].getAggregation("cells")[4].getProperty("value"),
            "p5": Table12[0].getAggregation("cells")[5].getProperty("value"),
            "p6": Table12[0].getAggregation("cells")[6].getProperty("value"),
            "p7": Table12[0].getAggregation("cells")[7].getProperty("value"),
            "p8": Table12[0].getAggregation("cells")[8].getProperty("value"),
            "p9": Table12[0].getAggregation("cells")[9].getProperty("value")
          },
          {
            "questions": "1. b. Has the policy been approved by the Board? (Yes/No)",

            "p1": Table12[1].getAggregation("cells")[1].getProperty("value"),
            "p2": Table12[1].getAggregation("cells")[2].getProperty("value"),
            "p3": Table12[1].getAggregation("cells")[3].getProperty("value"),
            "p4": Table12[1].getAggregation("cells")[4].getProperty("value"),
            "p5": Table12[1].getAggregation("cells")[5].getProperty("value"),
            "p6": Table12[1].getAggregation("cells")[6].getProperty("value"),
            "p7": Table12[1].getAggregation("cells")[7].getProperty("value"),
            "p8": Table12[1].getAggregation("cells")[8].getProperty("value"),
            "p9": Table12[1].getAggregation("cells")[9].getProperty("value")
          },


          {
            "questions": "1. c. Web Link of the Policies, if available",
            "p1": Table12[2].getAggregation("cells")[1].getProperty("value"),
            "p2": Table12[2].getAggregation("cells")[2].getProperty("value"),
            "p3": Table12[2].getAggregation("cells")[3].getProperty("value"),
            "p4": Table12[2].getAggregation("cells")[4].getProperty("value"),
            "p5": Table12[2].getAggregation("cells")[5].getProperty("value"),
            "p6": Table12[2].getAggregation("cells")[6].getProperty("value"),
            "p7": Table12[2].getAggregation("cells")[7].getProperty("value"),
            "p8": Table12[2].getAggregation("cells")[8].getProperty("value"),
            "p9": Table12[2].getAggregation("cells")[9].getProperty("value")
          },
          {
            "questions": "2. Whether the entity has translated the policy into procedures. (Yes / No)",
            "p1": Table12[3].getAggregation("cells")[1].getProperty("value"),
            "p2": Table12[3].getAggregation("cells")[2].getProperty("value"),
            "p3": Table12[3].getAggregation("cells")[3].getProperty("value"),
            "p4": Table12[3].getAggregation("cells")[4].getProperty("value"),
            "p5": Table12[3].getAggregation("cells")[5].getProperty("value"),
            "p6": Table12[3].getAggregation("cells")[6].getProperty("value"),
            "p7": Table12[3].getAggregation("cells")[7].getProperty("value"),
            "p8": Table12[3].getAggregation("cells")[8].getProperty("value"),
            "p9": Table12[3].getAggregation("cells")[9].getProperty("value")
          },
          {
            "questions": "3. Do the enlisted policies extend to your value chain partners? (Yes/No)",
            "p1": Table12[4].getAggregation("cells")[1].getProperty("value"),
            "p2": Table12[4].getAggregation("cells")[2].getProperty("value"),
            "p3": Table12[4].getAggregation("cells")[3].getProperty("value"),
            "p4": Table12[4].getAggregation("cells")[4].getProperty("value"),
            "p5": Table12[4].getAggregation("cells")[5].getProperty("value"),
            "p6": Table12[4].getAggregation("cells")[6].getProperty("value"),
            "p7": Table12[4].getAggregation("cells")[7].getProperty("value"),
            "p8": Table12[4].getAggregation("cells")[8].getProperty("value"),
            "p9": Table12[4].getAggregation("cells")[9].getProperty("value")
          },
          {
            "questions": "4. Name of the national and international codes/certifications/labels/standards (e.g. Forest Stewardship Council, Fairtrade, Rainforest Alliance, Trustea) standards (e.g. SA 8000, OHSAS, ISO, BIS) adopted by your entity and mapped to each principle",
            "p1": Table12[5].getAggregation("cells")[1].getProperty("value"),
            "p2": Table12[5].getAggregation("cells")[2].getProperty("value"),
            "p3": Table12[5].getAggregation("cells")[3].getProperty("value"),
            "p4": Table12[5].getAggregation("cells")[4].getProperty("value"),
            "p5": Table12[5].getAggregation("cells")[5].getProperty("value"),
            "p6": Table12[5].getAggregation("cells")[6].getProperty("value"),
            "p7": Table12[5].getAggregation("cells")[7].getProperty("value"),
            "p8": Table12[5].getAggregation("cells")[8].getProperty("value"),
            "p9": Table12[5].getAggregation("cells")[9].getProperty("value")
          },
          {
            "questions": "5. Specific commitments, goals, and targets set by the entity with defined timelines, if any", "p1": "Yes",
            "p1": Table12[6].getAggregation("cells")[1].getProperty("value"),
            "p2": Table12[6].getAggregation("cells")[2].getProperty("value"),
            "p3": Table12[6].getAggregation("cells")[3].getProperty("value"),
            "p4": Table12[6].getAggregation("cells")[4].getProperty("value"),
            "p5": Table12[6].getAggregation("cells")[5].getProperty("value"),
            "p6": Table12[6].getAggregation("cells")[6].getProperty("value"),
            "p7": Table12[6].getAggregation("cells")[7].getProperty("value"),
            "p8": Table12[6].getAggregation("cells")[8].getProperty("value"),
            "p9": Table12[6].getAggregation("cells")[9].getProperty("value")
          },
          {
            "questions": "6. Performance of the entity against the specific commitments, goals, and targets along with reasons in case the same are not met",
            "p1": Table12[7].getAggregation("cells")[1].getProperty("value"),
            "p2": Table12[7].getAggregation("cells")[2].getProperty("value"),
            "p3": Table12[7].getAggregation("cells")[3].getProperty("value"),
            "p4": Table12[7].getAggregation("cells")[4].getProperty("value"),
            "p5": Table12[7].getAggregation("cells")[5].getProperty("value"),
            "p6": Table12[7].getAggregation("cells")[6].getProperty("value"),
            "p7": Table12[7].getAggregation("cells")[7].getProperty("value"),
            "p8": Table12[7].getAggregation("cells")[8].getProperty("value"),
            "p9": Table12[7].getAggregation("cells")[9].getProperty("value")

          }
        ]
      };

      abcArr.push(q11);

      console.log("abcArr:", abcArr);

      var Table13 = this.getView().byId("Table13").getItems();
      var q12 = {
        "section": "B",
        "questionID": "10",
        "Table13": [
          {
            "subjectFoReview": "Performance against above policies and follow-up action",
            "p1review": Table13[0].getAggregation("cells")[1].getProperty("value"),
            "p2review": Table13[0].getAggregation("cells")[2].getProperty("value"),
            "p3review": Table13[0].getAggregation("cells")[3].getProperty("value"),
            "p4review": Table13[0].getAggregation("cells")[4].getProperty("value"),
            "p5review": Table13[0].getAggregation("cells")[5].getProperty("value"),
            "p6review": Table13[0].getAggregation("cells")[6].getProperty("value"),
            "p7review": Table13[0].getAggregation("cells")[7].getProperty("value"),
            "p8review": Table13[0].getAggregation("cells")[8].getProperty("value"),
            "p9review": Table13[0].getAggregation("cells")[9].getProperty("value"),
            "p1frequency": Table13[0].getAggregation("cells")[10].getProperty("value"),
            "p2frequency": Table13[0].getAggregation("cells")[11].getProperty("value"),
            "p3frequency": Table13[0].getAggregation("cells")[12].getProperty("value"),
            "p4frequency": Table13[0].getAggregation("cells")[13].getProperty("value"),
            "p5frequency": Table13[0].getAggregation("cells")[14].getProperty("value"),
            "p6frequency": Table13[0].getAggregation("cells")[15].getProperty("value"),
            "p7frequency": Table13[0].getAggregation("cells")[16].getProperty("value"),
            "p8frequency": Table13[0].getAggregation("cells")[17].getProperty("value"),
            "p9frequency": Table13[0].getAggregation("cells")[18].getProperty("value")
          },

          {
            "subjectFoReview": "Compliance with statutory requirements of relevance to the principles, and rectification of any non-compliances",
            "p1review": Table13[1].getAggregation("cells")[1].getProperty("value"),
            "p2review": Table13[1].getAggregation("cells")[2].getProperty("value"),
            "p3review": Table13[1].getAggregation("cells")[3].getProperty("value"),
            "p4review": Table13[1].getAggregation("cells")[4].getProperty("value"),
            "p5review": Table13[1].getAggregation("cells")[5].getProperty("value"),
            "p6review": Table13[1].getAggregation("cells")[6].getProperty("value"),
            "p7review": Table13[1].getAggregation("cells")[7].getProperty("value"),
            "p8review": Table13[1].getAggregation("cells")[8].getProperty("value"),
            "p9review": Table13[1].getAggregation("cells")[9].getProperty("value"),
            "p1frequency": Table13[1].getAggregation("cells")[10].getProperty("value"),
            "p2frequency": Table13[1].getAggregation("cells")[11].getProperty("value"),
            "p3frequency": Table13[1].getAggregation("cells")[12].getProperty("value"),
            "p4frequency": Table13[1].getAggregation("cells")[13].getProperty("value"),
            "p5frequency": Table13[1].getAggregation("cells")[14].getProperty("value"),
            "p6frequency": Table13[1].getAggregation("cells")[15].getProperty("value"),
            "p7frequency": Table13[1].getAggregation("cells")[16].getProperty("value"),
            "p8frequency": Table13[1].getAggregation("cells")[17].getProperty("value"),
            "p9frequency": Table13[1].getAggregation("cells")[18].getProperty("value")
          }
        ]
      };


      abcArr.push(q12);

      console.log("abcArr:", abcArr);

      var Table15 = this.getView().byId("Table15").getItems();
      var q13 = {

        "section": "B",
        "questionID": "12",
        "Table15": [
          {
            "questions": "The entity does not consider the Principles material to its business (Yes/No)",
            "p1": Table15[0].getAggregation("cells")[1].getProperty("value"),
            "p2": Table15[0].getAggregation("cells")[2].getProperty("value"),
            "p3": Table15[0].getAggregation("cells")[3].getProperty("value"),
            "p4": Table15[0].getAggregation("cells")[4].getProperty("value"),
            "p5": Table15[0].getAggregation("cells")[5].getProperty("value"),
            "p6": Table15[0].getAggregation("cells")[6].getProperty("value"),
            "p7": Table15[0].getAggregation("cells")[7].getProperty("value"),
            "p8": Table15[0].getAggregation("cells")[8].getProperty("value"),
            "p9": Table15[0].getAggregation("cells")[9].getProperty("value")
          },
          {
            "questions": "The entity does not have the financial or human and technical resources available for the task (Yes/No)",
            "p1": Table15[2].getAggregation("cells")[1].getProperty("value"),
            "p2": Table15[2].getAggregation("cells")[2].getProperty("value"),
            "p3": Table15[2].getAggregation("cells")[3].getProperty("value"),
            "p4": Table15[2].getAggregation("cells")[4].getProperty("value"),
            "p5": Table15[2].getAggregation("cells")[5].getProperty("value"),
            "p6": Table15[2].getAggregation("cells")[6].getProperty("value"),
            "p7": Table15[2].getAggregation("cells")[7].getProperty("value"),
            "p8": Table15[2].getAggregation("cells")[8].getProperty("value"),
            "p9": Table15[2].getAggregation("cells")[9].getProperty("value")
          },
          {
            "questions": "It is planned to be done in the next financial year (Yes/No)",
            "p1": Table15[3].getAggregation("cells")[1].getProperty("value"),
            "p2": Table15[3].getAggregation("cells")[2].getProperty("value"),
            "p3": Table15[3].getAggregation("cells")[3].getProperty("value"),
            "p4": Table15[3].getAggregation("cells")[4].getProperty("value"),
            "p5": Table15[3].getAggregation("cells")[5].getProperty("value"),
            "p6": Table15[3].getAggregation("cells")[6].getProperty("value"),
            "p7": Table15[3].getAggregation("cells")[7].getProperty("value"),
            "p8": Table15[3].getAggregation("cells")[8].getProperty("value"),
            "p9": Table15[3].getAggregation("cells")[9].getProperty("value")
          },
          {
            "questions": "Any other reason (please specify)",
            "p1": Table15[4].getAggregation("cells")[1].getProperty("value"),
            "p2": Table15[4].getAggregation("cells")[2].getProperty("value"),
            "p3": Table15[4].getAggregation("cells")[3].getProperty("value"),
            "p4": Table15[4].getAggregation("cells")[4].getProperty("value"),
            "p5": Table15[4].getAggregation("cells")[5].getProperty("value"),
            "p6": Table15[4].getAggregation("cells")[6].getProperty("value"),
            "p7": Table15[4].getAggregation("cells")[7].getProperty("value"),
            "p8": Table15[4].getAggregation("cells")[8].getProperty("value"),
            "p9": Table15[4].getAggregation("cells")[9].getProperty("value")
          },

        ]
      };
      abcArr.push(q13);

      console.log("abcArr:", abcArr);


      var oTable2 = this.getView().byId("Table2");

      // Get the table items (rows) for Table2
      var aTable2Items = oTable2.getItems();

      // Create an array to store the data from Table2
      var aTable2Data = [];

      // Loop through the table items of Table2 and extract the data
      for (var i = 0; i < aTable2Items.length; i++) {
        var oItem = aTable2Items[i];
        var oRowData2 = {};

        // Assuming you want to map specific properties from the table cells

        // Corrected the property names and added missing properties
        if (oItem.getCells()[0].getValue() !== "") {
          oRowData2.sr_no = oItem.getCells()[0].getValue();
        } else {
          oRowData2.sr_no = "NA";
        }

        if (oItem.getCells()[1].getValue() !== "") {
          oRowData2.nameOfProductOrService = oItem.getCells()[1].getValue();
        } else {
          oRowData2.nameOfProductOrService = "NA";
        }

        if (oItem.getCells()[2].getValue() !== "") {
          oRowData2.nicCode = oItem.getCells()[2].getValue();
        } else {
          oRowData2.nicCode = "NA";
        }

        if (oItem.getCells()[3].getValue() !== "") {
          oRowData2.totalTurnoverContributed = oItem.getCells()[3].getValue();
        } else {
          oRowData2.totalTurnoverContributed = "NA";
        }

        // Add the row data to the array for Table2
        aTable2Data.push(oRowData2);
      }

      var q17 = {
        section: "A",
        questionID: "17",
        Table2: aTable2Data
      };

      abcArr.push(q17);

      console.log("abcArr:", abcArr);



      var oTable = this.getView().byId("Table1");
      var aTableItems = oTable.getItems();
      var Table1Data = [];

      for (var i = 0; i < aTableItems.length; i++) {
        var oItem = aTableItems[i];
        var oRowData = {};

        // Assuming you want to map specific properties from the table cells
        if (oItem.getCells()[0].getValue() !== "") {
          oRowData.sr_no = oItem.getCells()[0].getValue();
        } else {
          oRowData.sr_no = "NA";
        }

        if (oItem.getCells()[1].getValue() !== "") {
          oRowData.descriptionOfMainActivity = oItem.getCells()[1].getValue();
        } else {
          oRowData.descriptionOfMainActivity = "NA";
        }

        // Change the index to [2] for descriptionOfBusinessActivity
        if (oItem.getCells()[2].getValue() !== "") {
          oRowData.descriptionOfBusinessActivity = oItem.getCells()[2].getValue();
        } else {
          oRowData.descriptionOfBusinessActivity = "NA";
        }

        // Change the index to [3] for percentageOfTurnoverOfTheEntity
        if (oItem.getCells()[3].getValue() !== "") {
          oRowData.percentageOfTurnoverOfTheEntity = oItem.getCells()[3].getValue();
        } else {
          oRowData.percentageOfTurnoverOfTheEntity = "NA";
        }

        Table1Data.push(oRowData);
      }

      var q16 = {
        section: "A",
        questionID: "16",
        Table1: Table1Data
      };

      abcArr.push(q16);

      console.log("abcArr:", abcArr);

      var oTable = this.getView().byId("Table9");

      var aTableItems = oTable.getItems();

      // Create an array to store the data from the table
      var Table9Data = [];

      // Loop through the table items and extract the data
      for (var i = 0; i < aTableItems.length; i++) {
        var oItem = aTableItems[i];

        // Create an object to represent a row of data
        var oRowData3 = {};

        // Assuming you want to map specific properties from the table cells
        if (oItem.getCells()[0].getValue() !== "") {
          oRowData3.type = oItem.getCells()[0].getValue();
        } else {
          oRowData3.type = "NA";
        }

        if (oItem.getCells()[1].getValue() !== "") {
          oRowData3.percentageOfShares = oItem.getCells()[1].getValue();
        } else {
          oRowData3.percentageOfShares = "NA";
        }

        if (oItem.getCells()[2].getValue() !== "") {
          oRowData3.participationStatus = oItem.getCells()[2].getValue();
        } else {
          oRowData3.participationStatus = "NA";
        }

        Table9Data.push(oRowData3);
      }

      var q231 = {
        section: "A",
        questionID: "23",
        Table9: Table9Data
      };
      abcArr.push(q231);

      console.log("abcArr:", abcArr);


      var oTable11 = this.getView().byId("Table11");
      var aTable11Items = oTable11.getItems();
      var Table11Data = [];

      for (var i = 0; i < aTable11Items.length; i++) {
        var oItem = aTable11Items[i];
        var oRowData4 = {
          "sr_no": oItem.getCells()[0].getValue() || "NA",
          "issue": oItem.getCells()[1].getValue() || "NA",
          "type": oItem.getCells()[2].getValue() || "NA",
          "rationale": oItem.getCells()[3].getValue() || "NA",
          "approach": oItem.getCells()[4].getValue() || "NA",
          "financialImplications": oItem.getCells()[5].getValue() || "NA"
        };

        Table11Data.push(oRowData4);
      }


      var q231 = {
        section: "A",
        questionID: "26",
        Table11: Table11Data
      };
      abcArr.push(q231);

      console.log("abcArr:", abcArr);


      var oTable14 = this.getView().byId("Table14");
      var aTable14Items = oTable14.getItems(); // Corrected variable name

      var Table14Data = [];

      for (var i = 0; i < aTable14Items.length; i++) {
        var oItem = aTable14Items[i];
        var oRowData5 = {
          "p1": oItem.getCells()[0].getValue() || "NA",
          "p2": oItem.getCells()[1].getValue() || "NA",
          "p3": oItem.getCells()[2].getValue() || "NA",
          "p4": oItem.getCells()[3].getValue() || "NA",
          "p5": oItem.getCells()[4].getValue() || "NA",
          "p6": oItem.getCells()[5].getValue() || "NA",
          "p7": oItem.getCells()[6].getValue() || "NA", // Corrected cell index
          "p8": oItem.getCells()[7].getValue() || "NA", // Corrected cell index
          "p9": oItem.getCells()[8].getValue() || "NA"  // Corrected cell index
        };

        Table14Data.push(oRowData5);
      }

      var q221 = {
        section: "B",
        questionID: "11",
        Table14: Table14Data
      };
      abcArr.push(q221);

      console.log("abcArr:", abcArr);

      let obj = {
        "fiscalYear": selectedYear,
        "businessFunction": "sectionABC",
        "creator_email": UserEmail,
        "creator_name": Name,
        "status": "Submitted",
        "sectionABC": abcArr

      };

      sap.m.MessageBox.confirm("Do you want to Submit", {
        actions: [sap.m.MessageBox.Action.OK, sap.m.MessageBox.Action.CANCEL],
        emphasizedAction: sap.m.MessageBox.Action.OK,
        onClose: function (sAction) {
          if (sAction == "OK") {
            var oBusy = new sap.m.BusyDialog();

            oBusy.open();
            var oODataModel = that.getView().getModel("Catalog");

            oODataModel.create("/qualitative_data", obj, {
              success: function (odata) {
                oBusy.close();

                sap.m.MessageBox.success("Submitted", {
                  icon: sap.m.MessageBox.Icon.SUCCESS,
                  title: "SUCCESS",
                  actions: [sap.m.MessageBox.Action.OK],
                  initialFocus: sap.m.MessageBox.Action.OK,

                  onClose: function (Action) {
                    // Handle success message onClose if needed
                  }
                });
              },
              error: function (error) {
                oBusy.close();
                console.error(error);
                // Handle the error
              }
            });
          }
        }
      });




    },
    OBJtoXML: function (obj) {
      var that = this;
      var xml = '';
      for (var prop in obj) {
        xml += obj[prop] instanceof Array ? '' : "<" + prop + ">";
        if (obj[prop] instanceof Array) {
          for (var array in obj[prop]) {
            xml += "<" + prop + ">";
            xml += that.OBJtoXML(new Object(obj[prop][array]));
            xml += "</" + prop + ">";
          }
        } else if (typeof obj[prop] == "object") {
          xml += that.OBJtoXML(new Object(obj[prop]));
        } else {
          xml += obj[prop];
        }
        xml += obj[prop] instanceof Array ? '' : "</" + prop + ">";
      }
      xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
      return xml;
    },
    onReportPress: function () {
      let table1Items = this.getView().byId("Table1").getItems();
      let table2Items = this.getView().byId("Table2").getItems();
      let table3Items = this.getView().byId("Table3").getItems();
      let table4Items = this.getView().byId("Table4").getItems();
      let table5Items = this.getView().byId("Table5").getItems();
      let table6Items = this.getView().byId("Table6").getItems();
      let table7Items = this.getView().byId("Table7").getItems();
      let table8Items = this.getView().byId("Table8").getItems();
      let table9Items = this.getView().byId("Table9").getItems();
      let table10Items = this.getView().byId("Table10").getItems();
      let table11Items = this.getView().byId("Table11").getItems();
      let table12Items = this.getView().byId("Table12").getItems();
      let table13Items = this.getView().byId("Table13").getItems();
      let table14Items = this.getView().byId("Table14").getItems();
      let table15Items = this.getView().byId("Table15").getItems();
      let table1qaItems = this.getView().byId("_IDGenTable1").getItems();
      let table2qaItems = this.getView().byId("_IDGenTable2").getItems();


      let yearData = [{
        "currentFiscalYear": "2023",
        "previousFiscalYear": "2022",
        "yearPriorToPreviousFiscalYear": "2021"
      }];

      let questionDataABC = [{
        "question1": this.getView().byId("textArea1").getValue(),
        "question2": this.getView().byId("textArea2").getValue(),
        "question3": this.getView().byId("textArea3").getValue(),
        "question4": this.getView().byId("textArea4").getValue(),
        "question5": this.getView().byId("textArea5").getValue(),
        "question6": this.getView().byId("textArea6").getValue(),
        "question7": this.getView().byId("textArea7").getValue(),
        "question8": this.getView().byId("textArea8").getValue(),
        "question9": this.getView().byId("textArea9").getValue(),
        "question10": this.getView().byId("textArea10").getValue(),
        "question11": this.getView().byId("textArea11").getValue(),
        "question12": this.getView().byId("textArea12").getValue(),
        "question13": this.getView().byId("textArea13").getValue(),
        "question14": this.getView().byId("textArea14").getValue(),
        "question15": this.getView().byId("textArea15").getValue(),
        "question16": this.getView().byId("textArea16").getValue(),
        "question17": this.getView().byId("textArea17").getValue(),
        "question18": this.getView().byId("textArea19").getValue(),
        "question19": this.getView().byId("textArea20").getValue(),
        "question20": this.getView().byId("textArea21").getValue(),
        "question21": this.getView().byId("textArea23").getValue(),
        "question22": this.getView().byId("textArea24").getValue(),

      }];

      let questionDataQA = [{
        "question1": this.getView().byId("id_answ1q").getValue(),
        "question2": this.getView().byId("id_answ2q").getValue(),
        "question3": this.getView().byId("id_answ5").getValue(),
        "question4": this.getView().byId("id_answ6").getValue(),
        "question5": this.getView().byId("id_answ7").getValue(),
        "question6": this.getView().byId("id_answ8").getValue(),
        "question7": this.getView().byId("id_answ9").getValue(),

      }];

      let questionDataEHS = [{
        "question1": this.getView().byId("id_answ1ehs").getValue(),
        "question2": this.getView().byId("id_answ2ehs").getValue(),
        "question3": this.getView().byId("id_answ3ehs").getValue(),
        "question4": this.getView().byId("id_answ4ehs").getValue(),
        "question5": this.getView().byId("id_answ5ehs").getValue(),
        "question6": this.getView().byId("id_answ6ehs").getValue(),
        "question7": this.getView().byId("id_answ7ehs").getValue(),
        "question8": this.getView().byId("id_answ8ehs").getValue(),
        "question9": this.getView().byId("id_answ9ehs").getValue(),
        "question10": this.getView().byId("id_answ10ehs").getValue(),
        "question11": this.getView().byId("id_answ11ehs").getValue(),
        "question12": this.getView().byId("id_answ15ehs").getValue(),
        "question13": this.getView().byId("id_answ17ehs").getValue(),

      }];

      let questionDataIT = [{
        "question1": this.getView().byId("id_answ1").getValue(),
        "question2": this.getView().byId("id_answ2").getValue(),
        "question3": this.getView().byId("id_answ3").getValue(),
        "question4": this.getView().byId("id_answ4").getValue(),

      }];

      let questionDataP = [{
        "question1": this.getView().byId("id_answ1p").getValue(),
        "question2": this.getView().byId("id_answ2p").getValue(),
        "question3": this.getView().byId("id_answ3p").getValue(),
        "question4": this.getView().byId("id_answ4p").getValue(),
        "question5": this.getView().byId("id_answ5p").getValue(),

      }];

      let questionDataF = [{
        "question1": this.getView().byId("id_answ1f").getValue(),
        "question2": this.getView().byId("id_answ2f").getValue(),
        "question3": this.getView().byId("id_answ4f").getValue(),
        "question4": this.getView().byId("id_answ5f").getValue(),
        "question5": this.getView().byId("id_answ6f").getValue(),

      }];

      let questionDataC = [{
        "question1": this.getView().byId("id_answ2c").getValue(),
        "question2": this.getView().byId("id_answ4c").getValue(),
        "question3": this.getView().byId("id_answ5c").getValue(),

      }];

      let questionDataHR = [{
        "question1": this.getView().byId("id_answ1hr").getValue(),
        "question2": this.getView().byId("id_answ2hr").getValue(),
        "question3": this.getView().byId("id_answ4hr").getValue(),
        "question4": this.getView().byId("id_answ5hr").getValue(),
        "question5": this.getView().byId("id_answ6hr").getValue(),
        "question6": this.getView().byId("id_answ7hr").getValue(),
        "question7": this.getView().byId("id_answ8hr").getValue(),
        "question8": this.getView().byId("id_answ9hr").getValue(),
        "question9": this.getView().byId("id_answ10").getValue(),
        "question10": this.getView().byId("id_answ11").getValue(),
        "question11": this.getView().byId("id_answ12").getValue(),
        "question12": this.getView().byId("id_answ13").getValue(),
        "question13": this.getView().byId("id_answ16").getValue(),

      }];

      let table1 = [];
      for (let i = 0; i < table1Items.length; i++) {
        let oItem = {
          "sr_no": table1Items[i].getCells()[0].getValue(),
          "descriptionOfMainActivity": table1Items[i].getCells()[1].getValue(),
          "descriptionOfBusinessActivity": table1Items[i].getCells()[2].getValue(),
          "percentageOfTurnoverOfTheEntity": table1Items[i].getCells()[3].getValue(),
        }
        table1.push(oItem);

      }

      let table2 = [];
      for (let i = 0; i < table2Items.length; i++) {
        let oItem = {
          "sr_no": table2Items[i].getCells()[0].getValue(),
          "nameOfProductOrService": table2Items[i].getCells()[1].getValue(),
          "nicCode": table2Items[i].getCells()[2].getValue(),
          "totalTurnoverContributed": table2Items[i].getCells()[3].getValue(),
        }
        table2.push(oItem);

      }

      let table3 = [];
      for (let i = 0; i < table3Items.length; i++) {
        let oItem = {
          "position": i,
          "location": table3Items[i].getCells()[0].getText(),
          "numberOfPlants": table3Items[i].getCells()[1].getValue(),
          "numberOfOffices": table3Items[i].getCells()[2].getValue(),
          "total": table3Items[i].getCells()[3].getValue(),
        }
        table3.push(oItem);

      }

      let table4 = [];
      for (let i = 0; i < table4Items.length; i++) {
        let oItem = {
          "position": i,
          "location": table4Items[i].getCells()[0].getText(),
          "number": table4Items[i].getCells()[1].getValue(),
        }
        table4.push(oItem);

      }
      let table5 = [];
      for (let i = 0; i < table5Items.length; i++) {
        let oItem = {
          "position": i,
          "type": table5Items[i].getCells()[0].getValue(),
          "sr_no": table5Items[i].getCells()[1].getValue(),
          "particulars": table5Items[i].getCells()[2].getValue(),
          "total": table5Items[i].getCells()[3].getValue(),
          "numberOfMale": table5Items[i].getCells()[4].getValue(),
          "percentageOfMale": table5Items[i].getCells()[5].getValue(),
          "numberOfFemale": table5Items[i].getCells()[6].getValue(),
          "percentageOfFemale": table5Items[i].getCells()[7].getValue(),
        }
        table5.push(oItem);

      }

      let table6 = [];
      for (let i = 0; i < table6Items.length; i++) {
        let oItem = {
          "position": i,
          "type": table6Items[i].getCells()[0].getValue(),
          "sr_no": table6Items[i].getCells()[1].getValue(),
          "particulars": table6Items[i].getCells()[2].getValue(),
          "total": table6Items[i].getCells()[3].getValue(),
          "numberOfMale": table6Items[i].getCells()[4].getValue(),
          "percentageOfMale": table6Items[i].getCells()[5].getValue(),
          "numberOfFemale": table6Items[i].getCells()[6].getValue(),
          "percentageOfFemale": table6Items[i].getCells()[7].getValue(),
        }
        table6.push(oItem);

      }

      let table7 = [];
      for (let i = 0; i < table7Items.length; i++) {
        let oItem = {
          "position": i,
          "name": table7Items[i].getCells()[0].getText(),
          "total": table7Items[i].getCells()[1].getValue(),
          "numberOfFemale": table7Items[i].getCells()[2].getValue(),
          "percentageOfFemale": table7Items[i].getCells()[3].getValue(),
        }
        table7.push(oItem);

      }

      let table8 = [];
      for (let i = 0; i < table8Items.length; i++) {
        let oItem = {
          "position": i,
          "type": table8Items[i].getCells()[0].getText(),
          "total": table8Items[i].getCells()[1].getValue(),
          "maleTurnoverRateInCurrentFY": table8Items[i].getCells()[2].getValue(),
          "femaleTurnoverRateInCurrentFY": table8Items[i].getCells()[3].getValue(),
          "maleTurnoverRateInPreviousFY": table8Items[i].getCells()[4].getValue(),
          "femaleTurnoverRateInPreviousFY": table8Items[i].getCells()[5].getValue(),
          "totalTurnoverRateInPreviousFY": table8Items[i].getCells()[6].getValue(),
          "maleTurnoverRateInYearPriorToPreviousFY": table8Items[i].getCells()[7].getValue(),
          "femaleTurnoverRateInYearPriorToPreviousFY": table8Items[i].getCells()[8].getValue(),
          "totalTurnoverRateInYearPriorToPreviousFY": table8Items[i].getCells()[9].getValue(),
        }
        table8.push(oItem);

      }

      let table9 = [];
      for (let i = 0; i < table9Items.length; i++) {
        let oItem = {
          "sr_no": table9Items[i].getCells()[0].getValue(),
          "name": table9Items[i].getCells()[1].getValue(),
          "type": table9Items[i].getCells()[2].getValue(),
          "percentageOfShares": table9Items[i].getCells()[3].getValue(),
          "participationStatus": table9Items[i].getCells()[4].getValue(),
        }
        table9.push(oItem);

      }

      let table10 = [];
      for (let i = 0; i < table10Items.length; i++) {
        let oItem = {
          "position": i,
          "name": table10Items[i].getCells()[0].getText(),
          "status": table10Items[i].getCells()[1].getValue(),
          "currentFYComplaintsFiled": table10Items[i].getCells()[2].getValue(),
          "currentFYComplaintsPending": table10Items[i].getCells()[3].getValue(),
          "currentFYComplaintsRemarks": table10Items[i].getCells()[4].getValue(),
          "previousFYComplaintsFiled": table10Items[i].getCells()[5].getValue(),
          "previousFYComplaintsPending": table10Items[i].getCells()[6].getValue(),
          "previousFYComplaintsRemarks": table10Items[i].getCells()[7].getValue(),
        }
        table10.push(oItem);

      }

      let table11 = [];
      for (let i = 0; i < table11Items.length; i++) {
        let oItem = {
          "sr_no": table11Items[i].getCells()[0].getValue(),
          "issue": table11Items[i].getCells()[1].getValue(),
          "type": table11Items[i].getCells()[2].getValue(),
          "rationale": table11Items[i].getCells()[3].getValue(),
          "approach": table11Items[i].getCells()[4].getValue(),
          "financialImplications": table11Items[i].getCells()[5].getValue(),
        }
        table11.push(oItem);

      }

      let table12 = [];
      for (let i = 0; i < table12Items.length; i++) {
        let oItem = {
          "position": i,
          "questions": table12Items[i].getCells()[0].getText(),
          "p1": table12Items[i].getCells()[1].getValue(),
          "p2": table12Items[i].getCells()[2].getValue(),
          "p3": table12Items[i].getCells()[3].getValue(),
          "p4": table12Items[i].getCells()[4].getValue(),
          "p5": table12Items[i].getCells()[5].getValue(),
          "p6": table12Items[i].getCells()[6].getValue(),
          "p7": table12Items[i].getCells()[7].getValue(),
          "p8": table12Items[i].getCells()[8].getValue(),
          "p9": table12Items[i].getCells()[9].getValue(),
        }
        table12.push(oItem);

      }

      let table13 = [];
      for (let i = 0; i < table13Items.length; i++) {
        let oItem = {
          "position": i,
          "subjectFoReview": table13Items[i].getCells()[0].getText(),
          "p1review": table13Items[i].getCells()[1].getValue(),
          "p2review": table13Items[i].getCells()[2].getValue(),
          "p3review": table13Items[i].getCells()[3].getValue(),
          "p4review": table13Items[i].getCells()[4].getValue(),
          "p5review": table13Items[i].getCells()[5].getValue(),
          "p6review": table13Items[i].getCells()[6].getValue(),
          "p7review": table13Items[i].getCells()[7].getValue(),
          "p8review": table13Items[i].getCells()[8].getValue(),
          "p9review": table13Items[i].getCells()[9].getValue(),
          "p1frequency": table13Items[i].getCells()[10].getValue(),
          "p2frequency": table13Items[i].getCells()[11].getValue(),
          "p3frequency": table13Items[i].getCells()[12].getValue(),
          "p4frequency": table13Items[i].getCells()[13].getValue(),
          "p5frequency": table13Items[i].getCells()[14].getValue(),
          "p6frequency": table13Items[i].getCells()[15].getValue(),
          "p7frequency": table13Items[i].getCells()[16].getValue(),
          "p8frequency": table13Items[i].getCells()[17].getValue(),
          "p9frequency": table13Items[i].getCells()[18].getValue(),
        }
        table13.push(oItem);

      }

      let table14 = [];
      for (let i = 0; i < table14Items.length; i++) {
        let oItem = {
          "p1": table14Items[i].getCells()[0].getValue(),
          "p2": table14Items[i].getCells()[1].getValue(),
          "p3": table14Items[i].getCells()[2].getValue(),
          "p4": table14Items[i].getCells()[3].getValue(),
          "p5": table14Items[i].getCells()[4].getValue(),
          "p6": table14Items[i].getCells()[5].getValue(),
          "p7": table14Items[i].getCells()[6].getValue(),
          "p8": table14Items[i].getCells()[7].getValue(),
          "p9": table14Items[i].getCells()[8].getValue(),
        }
        table14.push(oItem);

      }

      
      let table15 = [];
      for (let i = 0; i < table15Items.length; i++) {
        let oItem = {
          "position": i,
          "questions": table15Items[i].getCells()[0].getText(),
          "p1": table15Items[i].getCells()[1].getValue(),
          "p2": table15Items[i].getCells()[2].getValue(),
          "p3": table15Items[i].getCells()[3].getValue(),
          "p4": table15Items[i].getCells()[4].getValue(),
          "p5": table15Items[i].getCells()[5].getValue(),
          "p6": table15Items[i].getCells()[6].getValue(),
          "p7": table15Items[i].getCells()[7].getValue(),
          "p8": table15Items[i].getCells()[8].getValue(),
          "p9": table15Items[i].getCells()[9].getValue(),
        }
        table15.push(oItem);

      }

      let table1qa = [];
      for (let i = 0; i < table1qaItems.length; i++) {
        let oItem = {
          "nic_code": table1qaItems[i].getCells()[0].getValue(),
          "name_of_product_or_service": table1qaItems[i].getCells()[1].getValue(),
          "total_turnover_contributed": table1qaItems[i].getCells()[2].getValue(),
          "boundry_of_life_cycle_assessment": table1qaItems[i].getCells()[3].getValue(),
          "conducted_by_independent_external_agency": table1qaItems[i].getCells()[4].getValue(),
          "results_communicated_in_public_domain": table1qaItems[i].getCells()[5].getValue(),
        }
        table1qa.push(oItem);

      }

      
      let table2qa = [];
      for (let i = 0; i < table2qaItems.length; i++) {
        let oItem = {
          "name_of_product_or_service": table2qaItems[i].getCells()[0].getValue(),
          "description_of_risk_or_concern": table2qaItems[i].getCells()[1].getValue(),
          "action_taken": table2qaItems[i].getCells()[2].getValue(),
        }
        table2qa.push(oItem);

      }

      let table1ehsItems = this.getView().byId("tableq12").getItems();
      let table1ehs = [];
      for (let i = 0; i < table1ehsItems.length; i++) {
        let oItem = {
          "sr_no": table1ehsItems[i].getCells()[0].getValue(),
          "location_of_operations_offices": table1ehsItems[i].getCells()[0].getValue(),
          "type_of_operations": table1ehsItems[i].getCells()[1].getValue(),
          "conditions_of_environmental_approval": table1ehsItems[i].getCells()[2].getValue(),
        }
        table1ehs.push(oItem);

      }

      let table2ehsItems = this.getView().byId("tableq13").getItems();
      let table2ehs = [];
      for (let i = 0; i < table2ehsItems.length; i++) {
        let oItem = {
          "name_brief_details_of_project": table2ehsItems[i].getCells()[0].getValue(),
          "eia_notification_no": table2ehsItems[i].getCells()[1].getValue(),
          "date": table2ehsItems[i].getCells()[2].getValue(),
          "conducted_by_independent_external_agency": table2ehsItems[i].getCells()[3].getValue(),
          "results_communicated_in_public_domain": table2ehsItems[i].getCells()[3].getValue(),
          "relevant_web_link": table2ehsItems[i].getCells()[4].getValue(),
        }
        table2ehs.push(oItem);

      }

      let table3ehsItems = this.getView().byId("tableq14").getItems();
      let table3ehs = [];
      for (let i = 0; i < table3ehsItems.length; i++) {
        let oItem = {
          "sr_no": table3ehsItems[i].getCells()[0].getValue(),
          "guidelines_not_compiled_with": table3ehsItems[i].getCells()[0].getValue(),
          "details_of_non_compliance": table3ehsItems[i].getCells()[1].getValue(),
          "action_taken_by_regulatory_agencies": table3ehsItems[i].getCells()[2].getValue(),
          "corrective_action": table3ehsItems[i].getCells()[3].getValue(),
        }
        table3ehs.push(oItem);

      }

      let table4ehsItems = this.getView().byId("tableq14").getItems();
      let table4ehs = [];
      for (let i = 0; i < table4ehsItems.length; i++) {
        let oItem = {
          "sr_no": table4ehsItems[i].getCells()[0].getValue(),
          "initiative_undertaken": table4ehsItems[i].getCells()[1].getValue(),
          "details_of_initiative": table4ehsItems[i].getCells()[2].getValue(),
          "outcome_of_initiative": table4ehsItems[i].getCells()[3].getValue(),
        }
        table4ehs.push(oItem);

      }

      let table5ehsItems = this.getView().byId("table1").getItems();
      let table5ehs = [];
      for (let i = 1; i < table5ehsItems.length; i++) {
        if(table5ehsItems[i].getCells()[1] === undefined){
          continue;
        }
        let oItem = {
          "parameter": table5ehsItems[i].getCells()[0].getText(),
          "valueForCurrentFY": table5ehsItems[i].getCells()[1].getText(),
          "valueForPreviousFY": table5ehsItems[i].getCells()[2].getText(),
        }
        table5ehs.push(oItem);

      }

      let table6ehsItems = this.getView().byId("table2").getItems();
      let table6ehs = [];
      for (let i = 0; i < table6ehsItems.length; i++) {
        if(table6ehsItems[i].getCells()[1] === undefined){
          continue;
        }
        let oItem = {
          "parameter": table6ehsItems[i].getCells()[0].getText(),
          "valueForCurrentFY": table6ehsItems[i].getCells()[1].getText(),
          "valueForPreviousFY": table6ehsItems[i].getCells()[2].getText(),
        }
        table6ehs.push(oItem);

      }

      let table7ehsItems = this.getView().byId("table3").getItems();
      let table7ehs = [];
      for (let i = 0; i < table7ehsItems.length; i++) {
        if(table7ehsItems[i].getCells()[1] === undefined){
          continue;
        }
        let oItem = {
          "parameter": table7ehsItems[i].getCells()[0].getText(),
          "valueForCurrentFY": table7ehsItems[i].getCells()[1].getText(),
          "valueForPreviousFY": table7ehsItems[i].getCells()[2].getText(),
        }
        table7ehs.push(oItem);

      }

      let table8ehsItems = this.getView().byId("table4").getItems();
      let table8ehs = [];
      for (let i = 0; i < table8ehsItems.length; i++) {
        if(table8ehsItems[i].getCells()[1] === undefined){
          continue;
        }
        let oItem = {
          "parameter": table8ehsItems[i].getCells()[0].getText(),
          "unit": "Metric tonnes of co2 equivalent",
          "valueForCurrentFY": table8ehsItems[i].getCells()[1].getText(),
          "valueForPreviousFY": table8ehsItems[i].getCells()[2].getText(),
        }
        table8ehs.push(oItem);

      }

      let table9ehsItems = this.getView().byId("table5").getItems();
      let table9ehs = [];
      for (let i = 0; i < table9ehsItems.length; i++) {
        if(table9ehsItems[i].getCells()[1] === undefined){
          continue;
        }
        let oItem = {
          "parameter": table9ehsItems[i].getCells()[0].getText(),
          "unit": table9ehsItems[i].getCells()[1].getText(),
          "valueForCurrentFY": table9ehsItems[i].getCells()[2].getText(),
          "valueForPreviousFY": table9ehsItems[i].getCells()[3].getText(),
        }
        table9ehs.push(oItem);

      }

      let table10ehsItems = this.getView().byId("table6").getItems();
      let table10ehs = [];
      for (let i = 0; i < table10ehsItems.length; i++) {
        if(table10ehsItems[i].getCells()[1] === undefined){
          continue;
        }
        let oItem = {
          "parameter": table10ehsItems[i].getCells()[0].getText(),
          "valueForCurrentFY": table10ehsItems[i].getCells()[1].getText(),
          "valueForPreviousFY": table10ehsItems[i].getCells()[2].getText(),
        }
        table10ehs.push(oItem);

      }

      let table11ehsItems = this.getView().byId("table7").getItems();
      let table11ehs = [];
      for (let i = 0; i < table11ehsItems.length; i++) {
        let oItem = {
          "parameter": table11ehsItems[i].getCells()[0].getText(),
          "unit": table11ehsItems[i].getCells()[1].getText(),
          "valueForCurrentFY": table11ehsItems[i].getCells()[2].getText(),
          "valueForPreviousFY": table11ehsItems[i].getCells()[3].getText(),
        }
        table11ehs.push(oItem);

      }

      let table12ehsItems = this.getView().byId("table8").getItems();
      let table12ehs = [];
      for (let i = 0; i < table12ehsItems.length; i++) {
        let oItem = {
          "type": table12ehsItems[i].getCells()[0].getText(),
          "category": table12ehsItems[i].getCells()[1].getText(),
          "valueForCurrentFY": table12ehsItems[i].getCells()[2].getText(),
          "valueForPreviousFY": table12ehsItems[i].getCells()[3].getText(),
        }
        table12ehs.push(oItem);

      }

      let table13ehsItems = this.getView().byId("table9").getItems();
      let table13ehs = [];
      for (let i = 0; i < table13ehsItems.length; i++) {
        let oItem = {
          "type": table13ehsItems[i].getCells()[0].getText(),
          "currentFY_filedDuringYear": table13ehsItems[i].getCells()[1].getText(),
          "currentFY_pendingResolution": table13ehsItems[i].getCells()[2].getText(),
          "previousFY_filedDuringYear": table13ehsItems[i].getCells()[3].getText(),
          "previousFY_pendingResolution": table13ehsItems[i].getCells()[3].getText(),
        }
        table13ehs.push(oItem);

      }

      
      let table1pItems = this.getView().byId("idInputMaterialTable").getItems();
      let table1p = [];
      for (let i = 0; i < table1pItems.length; i++) {
        let oItem = {
          "position": i,
          "sourceOfInputMaterial": table1pItems[i].getCells()[0].getText(),
          "valueForCurrentFinancialYear": table1pItems[i].getCells()[1].getValue(),
          "valueForPreviousFinancialYear": table1pItems[i].getCells()[2].getValue(),
        }
        table1p.push(oItem);

      }
      let table2pItems = this.getView().byId("idDetailsConcentrationTable").getItems();
      let table2p = [];
      for (let i = 0; i < table2pItems.length; i++) {
        let oItem = {
          "position": i,
          "parameter": table2pItems[i].getCells()[0].getText(),
          "metrics": table2pItems[i].getCells()[1].getText(),
          "valueForCurrentFinancialYear": table2pItems[i].getCells()[2].getValue(),
          "valueForPreviousFinancialYear": table2pItems[i].getCells()[3].getValue(),
        }
        table2p.push(oItem);

      }

      let table1fItems = this.getView().byId("_IDGenTable1f").getItems();
      let table1f = [];
      for (let i = 0; i < table1fItems.length; i++) {
        let oItem = {
          "position": i,
          "stakeholder_group": table1fItems[i].getCells()[0].getValue(),
          "identifies_as_vulnerable_marginalized_group": table1fItems[i].getCells()[1].getValue(),
          "channels_of_communication": table1fItems[i].getCells()[2].getValue(),
          "frequency_of_engagement": table1fItems[i].getCells()[3].getValue(),
          "purpose_scope_of_engagement": table1fItems[i].getCells()[4].getValue(),
        }
        table1f.push(oItem);

      }

      let table2fItems = this.getView().byId("idRDTable").getItems();
      let table2f = [];
      for (let i = 0; i < table2fItems.length; i++) {
        let oItem = {
          "position": i,
          "typeOfInvestment": table2fItems[i].getCells()[0].getText(),
          "valueForCurrentFinancialYear": table2fItems[i].getCells()[1].getValue(),
          "valueForPreviousFinancialYear": table2fItems[i].getCells()[2].getValue(),
          "detailsOfImprovements": table2fItems[i].getCells()[3].getValue(),
        }
        table2f.push(oItem);

      }

      let table3fItems = this.getView().byId("idTurnoverTable").getItems();
      let table3f = [];
      for (let i = 0; i < table3fItems.length; i++) {
        let oItem = {
          "position": i,
          "nameOfProductOrService": table3fItems[i].getCells()[0].getText(),
          "percentageOfTotalTurnOver": table3fItems[i].getCells()[1].getValue(),
        }
        table3f.push(oItem);

      }

      let table4fItems = this.getView().byId("idAccountTable").getItems();
      let table4f = [];
      for (let i = 0; i < table4fItems.length; i++) {
        let oItem = {
          "position": i,
          "type": table4fItems[i].getCells()[0].getText(),
          "valueForCurrentFinancialYear": table4fItems[i].getCells()[1].getValue(),
          "valueForPreviousFinancialYear": table4fItems[i].getCells()[2].getValue(),
        }
        table4f.push(oItem);

      }

      let table1cItems = this.getView().byId("tableq1a").getItems();
      let table1c = [];
      for (let i = 0; i < table1cItems.length; i++) {
        let oItem = {
          "position": i,
          "case_details": table1cItems[i].getCells()[0].getValue(),
          "name_regulatory_agencies": table1cItems[i].getCells()[1].getValue(),
        }
        table1c.push(oItem);

      }

      let table2cItems = this.getView().byId("tableq3a").getItems();
      let table2c = [];
      for (let i = 0; i < table2cItems.length; i++) {
        let oItem = {
          "position": i,
          "type": table2cItems[i].getCells()[0].getText(),
          "numberForCurrentFinancialYear": table2cItems[i].getCells()[1].getValue(),
          "remarksForCurrentFinancialYear": table2cItems[i].getCells()[2].getValue(),
          "numberForPreviousFinancialYear": table2cItems[i].getCells()[3].getValue(),
          "remarksForPreviousFinancialYear": table2cItems[i].getCells()[4].getValue(),
        }
        table2c.push(oItem);

      }

      let table3cItems = this.getView().byId("tableq6a").getItems();
      let table3c = [];
      for (let i = 0; i < table3cItems.length; i++) {
        let oItem = {
          "position": i,
          "sr_no": i,
          "name_of_trade_industy_associations": table3cItems[i].getCells()[0].getValue(),
          "reach_of_trade_industy_associations": table3cItems[i].getCells()[1].getValue(),
        }
        table3c.push(oItem);

      }

      let table4cItems = this.getView().byId("tableq7a").getItems();
      let table4c = [];
      for (let i = 0; i < table4cItems.length; i++) {
        let oItem = {
          "position": i,
          "name_of_authority": table4cItems[i].getCells()[0].getValue(),
          "brief_of_case": table4cItems[i].getCells()[1].getValue(),
          "corrective_actions_taken": table4cItems[i].getCells()[2].getValue(),
        }
        table4c.push(oItem);

      }

      let table5cItems = this.getView().byId("tableq8a").getItems();
      let table5c = [];
      for (let i = 0; i < table5cItems.length; i++) {
        let oItem = {
          "position": i,
          "sr_no": i,
          "public_policy_advocated": table5cItems[i].getCells()[0].getValue(),
          "method_resorted_for_advocacy": table5cItems[i].getCells()[1].getValue(),
          "information_available_in_public_domain": table5cItems[i].getCells()[2].getValue(),
          "frequency_of_review_by_board": table5cItems[i].getCells()[3].getValue(),
          "web_link": table5cItems[i].getCells()[4].getValue(),
        }
        table5c.push(oItem);

      }

      let table6cItems = this.getView().byId("idMonetaryTable").getItems();
      let table6c = [];
      for (let i = 0; i < table6cItems.length; i++) {
        let oItem = {
          "position": i,
          "type": "Monetary",
          "typeOfPaidAmount": table6cItems[i].getCells()[0].getText(),
          "ngrbcPrinciple": table6cItems[i].getCells()[1].getValue(),
          "nameOfInstitutions": table6cItems[i].getCells()[2].getValue(),
          "amountInINR": table6cItems[i].getCells()[3].getValue(),
          "briefOfTheCase": table6cItems[i].getCells()[4].getValue(),
          "hasAnAppealBeen": table6cItems[i].getCells()[5].getValue(),
        }
        table6c.push(oItem);

      }

      let table7cItems = this.getView().byId("idNonMonetaryTable").getItems();
      for (let i = 0; i < table7cItems.length; i++) {
        let oItem = {
          "position": i,
          "type": "Non-Monetary",
          "typeOfPaidAmount": table7cItems[i].getCells()[0].getText(),
          "ngrbcPrinciple": table7cItems[i].getCells()[1].getValue(),
          "nameOfInstitutions": table7cItems[i].getCells()[2].getValue(),
          "amountInINR": table7cItems[i].getCells()[3].getValue(),
          "briefOfTheCase": table7cItems[i].getCells()[4].getValue(),
          "hasAnAppealBeen": table7cItems[i].getCells()[5].getValue(),
        }
        table6c.push(oItem);

      }

      let table8cItems = this.getView().byId("idTable").getItems();
      let table7c = [];
      for (let i = 0; i < table8cItems.length; i++) {
        let oItem = {
          "position": i,
          "typeOfWorkers": table8cItems[i].getCells()[0].getText(),
          "valueForCurrentFinancialYear": table8cItems[i].getCells()[1].getValue(),
          "valueForPreviousFinancialYear": table8cItems[i].getCells()[2].getValue(),
        }
        table7c.push(oItem);

      }

      let table9cItems = this.getView().byId("idTable1").getItems();
      let table8c = [];
      for (let i = 0; i < table9cItems.length; i++) {
        let oItem = {
          "position": i,
          "detailsOfComplaints": table9cItems[i].getCells()[0].getText(),
          "numberForCurrentFinancialYear": table9cItems[i].getCells()[1].getValue(),
          "remarksForCurrentFinancialYear": table9cItems[i].getCells()[2].getValue(),
          "numberForPreviousFinancialYear": table9cItems[i].getCells()[3].getValue(),
          "remarksForPreviousFinancialYear": table9cItems[i].getCells()[4].getValue(),
        }
        table8c.push(oItem);

      }

      let table1hrItems = this.getView().byId("_IDGenTable1hr").getItems();
      let table1hr = [];
      for (let i = 0; i < table1hrItems.length; i++) {
        let oItem = {
          "type": table1hrItems[i].getCells()[0].getText(),
          "value": table1hrItems[i].getCells()[1].getValue(),
        }
        table1hr.push(oItem);

      }

      let table2hrItems = this.getView().byId("_IDGenTable2hr").getItems();
      let table2hr = [];
      for (let i = 0; i < table2hrItems.length; i++) {
        let oItem = {
          "position":i,
          "name_brief_details_of_project": table2hrItems[i].getCells()[0].getValue(),
          "sia_notification_no": table2hrItems[i].getCells()[1].getValue(),
          "date": table2hrItems[i].getCells()[2].getValue(),
          "conducted_by_independent_external_agency": table2hrItems[i].getCells()[3].getValue(),
          "results_communicated_in_public_domain": table2hrItems[i].getCells()[3].getValue(),
          "relevant_web_link": table2hrItems[i].getCells()[4].getValue(),
        }
        table2hr.push(oItem);

      }

      let table3hrItems = this.getView().byId("_IDGenTable3").getItems();
      let table3hr = [];
      for (let i = 0; i < table3hrItems.length; i++) {
        let oItem = {
          "position":i,
          "sr_no": table3hrItems[i].getCells()[0].getValue(),
          "name_of_project": table3hrItems[i].getCells()[1].getValue(),
          "state": table3hrItems[i].getCells()[2].getValue(),
          "district": table3hrItems[i].getCells()[3].getValue(),
          "no_of_project_affected_families": table3hrItems[i].getCells()[4].getValue(),
          "percentage_of_pafs_covered_by_rnr": table3hrItems[i].getCells()[5].getValue(),
          "amounts_paid_to_pafs": table3hrItems[i].getCells()[6].getValue(),
        }
        table3hr.push(oItem);

      }

      let table4hrItems = this.getView().byId("_IDGenTable4").getItems();
      let table4hr = [];
      for (let i = 0; i < table4hrItems.length; i++) {
        let oItem = {
          "position":i,
          "details_of_negative_social_impact": table4hrItems[i].getCells()[0].getValue(),
          "corrective_actions_taken": table4hrItems[i].getCells()[1].getValue(),
        }
        table4hr.push(oItem);

      }

      let table5hrItems = this.getView().byId("_IDGenTable5").getItems();
      let table5hr = [];
      for (let i = 0; i < table5hrItems.length; i++) {
        let oItem = {
          "position":i,
          "sr_no": table5hrItems[i].getCells()[0].getValue(),
          "state": table5hrItems[i].getCells()[1].getValue(),
          "aspirational_district": table5hrItems[i].getCells()[2].getValue(),
          "amount_spent": table3hrItems[i].getCells()[3].getValue(),
        }
        table5hr.push(oItem);

      }

      let table6hrItems = this.getView().byId("_IDGenTable6").getItems();
      let table6hr = [];
      for (let i = 0; i < table6hrItems.length; i++) {
        let oItem = {
          "position":i,
          "sr_no": table6hrItems[i].getCells()[0].getValue(),
          "intellectual_property_based_on_traditional_knowledge": table6hrItems[i].getCells()[1].getValue(),
          "owned_acquired": table6hrItems[i].getCells()[2].getValue(),
          "benefit_shared": table3hrItems[i].getCells()[3].getValue(),
          "basis_of_calculationg_benefits_shared": table3hrItems[i].getCells()[4].getValue(),
        }
        table6hr.push(oItem);

      }

      let table7hrItems = this.getView().byId("_IDGenTable7").getItems();
      let table7hr = [];
      for (let i = 0; i < table7hrItems.length; i++) {
        let oItem = {
          "position":i,
          "name_of_authority": table7hrItems[i].getCells()[0].getValue(),
          "brief_of_case": table7hrItems[i].getCells()[1].getValue(),
          "corrective_actions_taken": table7hrItems[i].getCells()[2].getValue(),
        }
        table7hr.push(oItem);

      }

      let table8hrItems = this.getView().byId("_IDGenTable8").getItems();
      let table8hr = [];
      for (let i = 0; i < table8hrItems.length; i++) {
        let oItem = {
          "position":i,
          "sr_no": table8hrItems[i].getCells()[0].getValue(),
          "csr_project": table8hrItems[i].getCells()[1].getValue(),
          "no_of_persons_benefitted": table8hrItems[i].getCells()[2].getValue(),
          "percentage_of_beneficiaries": table8hrItems[i].getCells()[3].getValue(),
        }
        table8hr.push(oItem);

      }

      let table9hrItems = this.getView().byId("idTableSegment").getItems();
      let table9hr = [];
      for (let i = 0; i < table9hrItems.length; i++) {
        let oItem = {
          "position":i,
          "segment": table9hrItems[i].getCells()[0].getText(),
          "numberOfTrainingPrograms": table9hrItems[i].getCells()[1].getValue(),
          "topicsCoveredUnderTraining": table9hrItems[i].getCells()[2].getValue(),
          "percentageOfPersonsInRespectiveCategory": table9hrItems[i].getCells()[3].getValue(),
        }
        table9hr.push(oItem);

      }

      let table10hrItems = this.getView().byId("idPEmpTable").getItems();
      let table10hr = [];
      for (let i = 0; i < table10hrItems.length; i++) {
        let oItem = {
          "position":i,
          "type": "Permanent Employees",
          "category": table10hrItems[i].getCells()[0].getText(),
          "total": table10hrItems[i].getCells()[1].getValue(),
          "numberOfHealthInsurance": table10hrItems[i].getCells()[2].getValue(),
          "percentageOfHealthInsurance": table10hrItems[i].getCells()[3].getValue(),
          "numberOfAccidentInsurance": table10hrItems[i].getCells()[4].getValue(),
          "percentageOfAccidentInsurance": table10hrItems[i].getCells()[5].getValue(),
          "numberOfMaternityBenefits": table10hrItems[i].getCells()[6].getValue(),
          "percentageOfMaternityBenefits": table10hrItems[i].getCells()[7].getValue(),
          "numberOfPaternityBenefits": table10hrItems[i].getCells()[8].getValue(),
          "percentageOfPaternityBenefits": table10hrItems[i].getCells()[9].getValue(),
          "numberOfDayCareFacilities": table10hrItems[i].getCells()[10].getValue(),
          "percentageOfDayCareFacilities": table10hrItems[i].getCells()[11].getValue(),
        }
        table10hr.push(oItem);

      }

      let table11hrItems = this.getView().byId("idNPEmpTable").getItems();
      for (let i = 0; i < table11hrItems.length; i++) {
        let oItem = {
          "position":i,
          "type": "Other Than Permanent Employees",
          "category": table10hrItems[i].getCells()[0].getText(),
          "total": table10hrItems[i].getCells()[1].getValue(),
          "numberOfHealthInsurance": table10hrItems[i].getCells()[2].getValue(),
          "percentageOfHealthInsurance": table10hrItems[i].getCells()[3].getValue(),
          "numberOfAccidentInsurance": table10hrItems[i].getCells()[4].getValue(),
          "percentageOfAccidentInsurance": table10hrItems[i].getCells()[5].getValue(),
          "numberOfMaternityBenefits": table10hrItems[i].getCells()[6].getValue(),
          "percentageOfMaternityBenefits": table10hrItems[i].getCells()[7].getValue(),
          "numberOfPaternityBenefits": table10hrItems[i].getCells()[8].getValue(),
          "percentageOfPaternityBenefits": table10hrItems[i].getCells()[9].getValue(),
          "numberOfDayCareFacilities": table10hrItems[i].getCells()[10].getValue(),
          "percentageOfDayCareFacilities": table10hrItems[i].getCells()[11].getValue(),
        }
        table10hr.push(oItem);

      }

      let table12hrItems = this.getView().byId("idWorkerTable").getItems();
      let table11hr = [];
      for (let i = 0; i < table12hrItems.length; i++) {
        let oItem = {
          "position":i,
          "type": "Permanent Workers",
          "category": table10hrItems[i].getCells()[0].getText(),
          "total": table10hrItems[i].getCells()[1].getValue(),
          "numberOfHealthInsurance": table10hrItems[i].getCells()[2].getValue(),
          "percentageOfHealthInsurance": table10hrItems[i].getCells()[3].getValue(),
          "numberOfAccidentInsurance": table10hrItems[i].getCells()[4].getValue(),
          "percentageOfAccidentInsurance": table10hrItems[i].getCells()[5].getValue(),
          "numberOfMaternityBenefits": table10hrItems[i].getCells()[6].getValue(),
          "percentageOfMaternityBenefits": table10hrItems[i].getCells()[7].getValue(),
          "numberOfPaternityBenefits": table10hrItems[i].getCells()[8].getValue(),
          "percentageOfPaternityBenefits": table10hrItems[i].getCells()[9].getValue(),
          "numberOfDayCareFacilities": table10hrItems[i].getCells()[10].getValue(),
          "percentageOfDayCareFacilities": table10hrItems[i].getCells()[11].getValue(),
        }
        table11hr.push(oItem);

      }

      let table13hrItems = this.getView().byId("idNonWorkerTable").getItems();
      for (let i = 0; i < table13hrItems.length; i++) {
        let oItem = {
          "position":i,
          "type": "Other than Permanent Workers",
          "category": table10hrItems[i].getCells()[0].getText(),
          "total": table10hrItems[i].getCells()[1].getValue(),
          "numberOfHealthInsurance": table10hrItems[i].getCells()[2].getValue(),
          "percentageOfHealthInsurance": table10hrItems[i].getCells()[3].getValue(),
          "numberOfAccidentInsurance": table10hrItems[i].getCells()[4].getValue(),
          "percentageOfAccidentInsurance": table10hrItems[i].getCells()[5].getValue(),
          "numberOfMaternityBenefits": table10hrItems[i].getCells()[6].getValue(),
          "percentageOfMaternityBenefits": table10hrItems[i].getCells()[7].getValue(),
          "numberOfPaternityBenefits": table10hrItems[i].getCells()[8].getValue(),
          "percentageOfPaternityBenefits": table10hrItems[i].getCells()[9].getValue(),
          "numberOfDayCareFacilities": table10hrItems[i].getCells()[10].getValue(),
          "percentageOfDayCareFacilities": table10hrItems[i].getCells()[11].getValue(),
        }
        table11hr.push(oItem);

      }

      let table14hrItems = this.getView().byId("idRetireBenfTable").getItems();
      let table12hr = [];
      for (let i = 0; i < table14hrItems.length; i++) {
        let oItem = {
          "position":i,
          "benefits": table14hrItems[i].getCells()[0].getText(),
          "currentFYEmployees": table14hrItems[i].getCells()[1].getValue(),
          "currentFYWorkers": table14hrItems[i].getCells()[2].getValue(),
          "currentFYauthority": table14hrItems[i].getCells()[3].getValue(),
          "previousFYEmployees": table14hrItems[i].getCells()[4].getValue(),
          "previousFYWorkers": table14hrItems[i].getCells()[5].getValue(),
          "previousFYauthority": table14hrItems[i].getCells()[6].getValue(),
        }
        table12hr.push(oItem);

      }

      let table15hrItems = this.getView().byId("idRateofWorkAndLeaveTable").getItems();
      let table13hr = [];
      for (let i = 0; i < table15hrItems.length; i++) {
        let oItem = {
          "position":i,
          "gender": table15hrItems[i].getCells()[0].getText(),
          "permanentEmployeesReturnToWorkRate": table15hrItems[i].getCells()[1].getValue(),
          "permanentEmployeesRetentionRate": table15hrItems[i].getCells()[2].getValue(),
          "permanentWorkersReturnToWorkRate": table15hrItems[i].getCells()[3].getValue(),
          "permanentWorkersRetentionRate": table15hrItems[i].getCells()[3].getValue(),
        }
        table13hr.push(oItem);

      }

      let table16hrItems = this.getView().byId("idMembershipEmpTable").getItems();
      let table14hr = [];
      for (let i = 0; i < table16hrItems.length; i++) {
        let oItem = {
          "position":i,
          "type": "Employees",
          "category": table16hrItems[i].getCells()[0].getText(),
          "currentFYTotalEmployees": table16hrItems[i].getCells()[1].getValue(),
          "currentFYTotalEmployeesPartOfUnions": table16hrItems[i].getCells()[2].getValue(),
          "currentFYPercentage": table16hrItems[i].getCells()[3].getValue(),
          "previousFYTotalEmployees": table16hrItems[i].getCells()[4].getValue(),
          "previousFYTotalEmployeesPartOfUnions": table16hrItems[i].getCells()[5].getValue(),
          "previousFYPercentage": table16hrItems[i].getCells()[6].getValue(),
        }
        table14hr.push(oItem);

      }

      let table17hrItems = this.getView().byId("idMembershipWorTable").getItems();
      for (let i = 0; i < table17hrItems.length; i++) {
        let oItem = {
          "position":i,
          "type": "Workers",
          "category": table17hrItems[i].getCells()[0].getText(),
          "currentFYTotalEmployees": table17hrItems[i].getCells()[1].getValue(),
          "currentFYTotalEmployeesPartOfUnions": table17hrItems[i].getCells()[2].getValue(),
          "currentFYPercentage": table17hrItems[i].getCells()[3].getValue(),
          "previousFYTotalEmployees": table17hrItems[i].getCells()[4].getValue(),
          "previousFYTotalEmployeesPartOfUnions": table17hrItems[i].getCells()[5].getValue(),
          "previousFYPercentage": table17hrItems[i].getCells()[6].getValue(),
        }
        table14hr.push(oItem);

      }

      let table18hrItems = this.getView().byId("idPEmpTrainingTable").getItems();
      let table15hr = [];
      for (let i = 0; i < table18hrItems.length; i++) {
        let oItem = {
          "position":i,
          "type": "Employees",
          "category": table18hrItems[i].getCells()[0].getText(),
          "currentFYTotal": table18hrItems[i].getCells()[1].getValue(),
          "currentFYNumberHealthSafetyMeasures": table18hrItems[i].getCells()[2].getValue(),
          "currentFYPercentageHealthSafetyMeasures": table18hrItems[i].getCells()[3].getValue(),
          "currentFYNumberSkillUpgradation": table18hrItems[i].getCells()[4].getValue(),
          "currentFYPercentageSkillUpgradation": table18hrItems[i].getCells()[5].getValue(),
          "previousFYTotal": table18hrItems[i].getCells()[6].getValue(),
          "previousFYNumberHealthSafetyMeasures": table18hrItems[i].getCells()[7].getValue(),
          "previousFYPercentageHealthSafetyMeasures": table18hrItems[i].getCells()[8].getValue(),
          "previousFYNumberSkillUpgradation": table18hrItems[i].getCells()[9].getValue(),
          "previousFYPercentageSkillUpgradation": table18hrItems[i].getCells()[10].getValue(),
        }
        table15hr.push(oItem);

      }

      let table19hrItems = this.getView().byId("idWorkTrainingTable").getItems();
      for (let i = 0; i < table19hrItems.length; i++) {
        let oItem = {
          "position":i,
          "type": "Workers",
          "category": table19hrItems[i].getCells()[0].getText(),
          "currentFYTotal": table19hrItems[i].getCells()[1].getValue(),
          "currentFYNumberHealthSafetyMeasures": table19hrItems[i].getCells()[2].getValue(),
          "currentFYPercentageHealthSafetyMeasures": table19hrItems[i].getCells()[3].getValue(),
          "currentFYNumberSkillUpgradation": table19hrItems[i].getCells()[4].getValue(),
          "currentFYPercentageSkillUpgradation": table19hrItems[i].getCells()[5].getValue(),
          "previousFYTotal": table19hrItems[i].getCells()[6].getValue(),
          "previousFYNumberHealthSafetyMeasures": table19hrItems[i].getCells()[7].getValue(),
          "previousFYPercentageHealthSafetyMeasures": table19hrItems[i].getCells()[8].getValue(),
          "previousFYNumberSkillUpgradation": table19hrItems[i].getCells()[9].getValue(),
          "previousFYPercentageSkillUpgradation": table19hrItems[i].getCells()[10].getValue(),
        }
        table15hr.push(oItem);

      }

      let table20hrItems = this.getView().byId("idPerEmpTable").getItems();
      let table16hr = [];
      for (let i = 0; i < table20hrItems.length; i++) {
        let oItem = {
          "position":i,
          "type": "Employees",
          "category": table20hrItems[i].getCells()[0].getText(),
          "currentFYTotal": table20hrItems[i].getCells()[1].getValue(),
          "currentFYNumber": table20hrItems[i].getCells()[2].getValue(),
          "currentFYPercentage": table20hrItems[i].getCells()[3].getValue(),
          "previousFYTotal": table20hrItems[i].getCells()[4].getValue(),
          "previousFYNumber": table20hrItems[i].getCells()[5].getValue(),
          "previousFYPercentage": table20hrItems[i].getCells()[6].getValue(),
        }
        table16hr.push(oItem);

      }

      let table21hrItems = this.getView().byId("idPerWorkTable").getItems();
      for (let i = 0; i < table21hrItems.length; i++) {
        let oItem = {
          "position":i,
          "type": "Workers",
          "category": table21hrItems[i].getCells()[0].getText(),
          "currentFYTotal": table21hrItems[i].getCells()[1].getValue(),
          "currentFYNumber": table21hrItems[i].getCells()[2].getValue(),
          "currentFYPercentage": table21hrItems[i].getCells()[3].getValue(),
          "previousFYTotal": table21hrItems[i].getCells()[4].getValue(),
          "previousFYNumber": table21hrItems[i].getCells()[5].getValue(),
          "previousFYPercentage": table21hrItems[i].getCells()[6].getValue(),
        }
        table16hr.push(oItem);

      }

      let table22hrItems = this.getView().byId("idEmpHumanRightTable").getItems();
      let table17hr = [];
      for (let i = 0; i < table22hrItems.length; i++) {
        let oItem = {
          "position":i,
          "type": "Employees",
          "category": table22hrItems[i].getCells()[0].getText(),
          "currentFYTotal": table22hrItems[i].getCells()[1].getValue(),
          "currentFYNumber": table22hrItems[i].getCells()[2].getValue(),
          "currentFYPercentage": table22hrItems[i].getCells()[3].getValue(),
          "previousFYTotal": table22hrItems[i].getCells()[4].getValue(),
          "previousFYNumber": table22hrItems[i].getCells()[5].getValue(),
          "previousFYPercentage": table22hrItems[i].getCells()[6].getValue(),
        }
        table17hr.push(oItem);

      }

      let table23hrItems = this.getView().byId("idWorkHumanRightTable").getItems();
      for (let i = 0; i < table23hrItems.length; i++) {
        let oItem = {
          "position":i,
          "type": "Workers",
          "category": table23hrItems[i].getCells()[0].getText(),
          "currentFYTotal": table23hrItems[i].getCells()[1].getValue(),
          "currentFYNumber": table23hrItems[i].getCells()[2].getValue(),
          "currentFYPercentage": table23hrItems[i].getCells()[3].getValue(),
          "previousFYTotal": table23hrItems[i].getCells()[4].getValue(),
          "previousFYNumber": table23hrItems[i].getCells()[5].getValue(),
          "previousFYPercentage": table23hrItems[i].getCells()[6].getValue(),
        }
        table17hr.push(oItem);

      }

      let table24hrItems = this.getView().byId("idPEmpWageTable").getItems();
      let table18hr = [];
      for (let i = 0; i < table24hrItems.length; i++) {
        let oItem = {
          "position":i,
          "type": table24hrItems[i].getCells()[0].getText(),
          "subType": table24hrItems[i].getCells()[0].getText(),
          "category": table24hrItems[i].getCells()[0].getText(),
          "currentFYTotal": table24hrItems[i].getCells()[1].getValue(),
          "currentFYNumberEqualToMinimumWage": table24hrItems[i].getCells()[2].getValue(),
          "currentFYPercentageEqualToMinimumWage": table24hrItems[i].getCells()[3].getValue(),
          "currentFYNumberMoreThanMinimumWage": table24hrItems[i].getCells()[4].getValue(),
          "currentFYPercentageMoreThanMinimumWage": table24hrItems[i].getCells()[5].getValue(),
          "previousFYTotal": table24hrItems[i].getCells()[6].getValue(),
          "previousFYNumberEqualToMinimumWage": table24hrItems[i].getCells()[7].getValue(),
          "previousFYPercentageEqualToMinimumWage": table24hrItems[i].getCells()[8].getValue(),
          "previousFYNumberMoreThanMinimumWage": table24hrItems[i].getCells()[9].getValue(),
          "previousFYPercentageMoreThanMinimumWage": table24hrItems[i].getCells()[10].getValue(),
        }
        table18hr.push(oItem);

      }

      let table25hrItems = this.getView().byId("idWorkWageTable").getItems();
      for (let i = 0; i < table25hrItems.length; i++) {
        let oItem = {
          "position":i,
          "type": table25hrItems[i].getCells()[0].getText(),
          "subType": table25hrItems[i].getCells()[0].getText(),
          "category": table25hrItems[i].getCells()[0].getText(),
          "currentFYTotal": table25hrItems[i].getCells()[1].getValue(),
          "currentFYNumberEqualToMinimumWage": table25hrItems[i].getCells()[2].getValue(),
          "currentFYPercentageEqualToMinimumWage": table25hrItems[i].getCells()[3].getValue(),
          "currentFYNumberMoreThanMinimumWage": table25hrItems[i].getCells()[4].getValue(),
          "currentFYPercentageMoreThanMinimumWage": table25hrItems[i].getCells()[5].getValue(),
          "previousFYTotal": table25hrItems[i].getCells()[6].getValue(),
          "previousFYNumberEqualToMinimumWage": table25hrItems[i].getCells()[7].getValue(),
          "previousFYPercentageEqualToMinimumWage": table25hrItems[i].getCells()[8].getValue(),
          "previousFYNumberMoreThanMinimumWage": table25hrItems[i].getCells()[9].getValue(),
          "previousFYPercentageMoreThanMinimumWage": table25hrItems[i].getCells()[10].getValue(),
        }
        table18hr.push(oItem);

      }

      let table26hrItems = this.getView().byId("idWageTable").getItems();
      let table19hr = [];
      for (let i = 0; i < table26hrItems.length; i++) {
        let oItem = {
          "position":i,
          "type": table26hrItems[i].getCells()[0].getText(),
          "maleNumber": table26hrItems[i].getCells()[1].getValue(),
          "maleMedianRemuneration": table26hrItems[i].getCells()[2].getValue(),
          "femaleNumber": table26hrItems[i].getCells()[3].getValue(),
          "femaleMedianRemuneration": table26hrItems[i].getCells()[4].getValue(),
        }
        table19hr.push(oItem);

      }

      let table27hrItems = this.getView().byId("idComplaintTable").getItems();
      let table20hr = [];
      for (let i = 0; i < table27hrItems.length; i++) {
        let oItem = {
          "position":i,
          "type": table27hrItems[i].getCells()[0].getText(),
          "currentFYComplaintsFiled": table27hrItems[i].getCells()[1].getValue(),
          "currentFYComplaintsPending": table27hrItems[i].getCells()[2].getValue(),
          "currentFYComplaintsRemarks": table27hrItems[i].getCells()[3].getValue(),
          "previousFYComplaintsFiled": table27hrItems[i].getCells()[4].getValue(),
          "previousFYComplaintsPending": table27hrItems[i].getCells()[5].getValue(),
          "previousFYComplaintsRemarks": table27hrItems[i].getCells()[6].getValue(),
        }
        table20hr.push(oItem);

      }

      let table28hrItems = this.getView().byId("idAssessmentsTable").getItems();
      let table21hr = [];
      for (let i = 0; i < table28hrItems.length; i++) {
        let oItem = {
          "position":i,
          "type": table28hrItems[i].getCells()[0].getText(),
          "percentage": table28hrItems[i].getCells()[1].getValue(),
        }
        table21hr.push(oItem);

      }

      
      let table29hrItems = this.getView().byId("idSpendTable").getItems();
      let table22hr = [];
      for (let i = 0; i < table29hrItems.length; i++) {
        let oItem = {
          "position":i,
          "type": table29hrItems[i].getCells()[0].getText(),
          "valueForCurrentFinancialYear": table29hrItems[i].getCells()[1].getValue(),
          "valueForPreviousFinancialYear": table29hrItems[i].getCells()[2].getValue(),
        }
        table22hr.push(oItem);

      }

      let table30hrItems = this.getView().byId("idGrossWageTable").getItems();
      let table23hr = [];
      for (let i = 0; i < table30hrItems.length; i++) {
        let oItem = {
          "position":i,
          "type": table30hrItems[i].getCells()[0].getText(),
          "valueForCurrentFinancialYear": table30hrItems[i].getCells()[1].getValue(),
          "valueForPreviousFinancialYear": table30hrItems[i].getCells()[2].getValue(),
        }
        table23hr.push(oItem);

      }

      
      let table31hrItems = this.getView().byId("idCompFiledTable").getItems();
      let table24hr = [];
      for (let i = 0; i < table31hrItems.length; i++) {
        let oItem = {
          "position":i,
          "type": table31hrItems[i].getCells()[0].getText(),
          "valueForCurrentFinancialYear": table31hrItems[i].getCells()[1].getValue(),
          "valueForPreviousFinancialYear": table31hrItems[i].getCells()[2].getValue(),
        }
        table24hr.push(oItem);

      }

         
      let table32hrItems = this.getView().byId("idJobCreationTable").getItems();
      let table25hr = [];
      for (let i = 0; i < table32hrItems.length; i++) {
        let oItem = {
          "position":i,
          "location": table32hrItems[i].getCells()[0].getText(),
          "valueForCurrentFinancialYear": table32hrItems[i].getCells()[1].getValue(),
          "valueForPreviousFinancialYear": table32hrItems[i].getCells()[2].getValue(),
        }
        table25hr.push(oItem);

      }


      that.getView().setBusy(true);
      let jsontoxmlyear = that.OBJtoXML(yearData);
      let jsontoxmlquestionabc = that.OBJtoXML(questionDataABC);
      let jsontoxmlquestionqa = that.OBJtoXML(questionDataQA);
      let jsontoxmlquestionehs = that.OBJtoXML(questionDataEHS);
      let jsontoxmlquestionit = that.OBJtoXML(questionDataIT);
      let jsontoxmlquestionp = that.OBJtoXML(questionDataP);
      let jsontoxmlquestionf = that.OBJtoXML(questionDataF);
      let jsontoxmlquestionc = that.OBJtoXML(questionDataC);
      let jsontoxmlquestionhr = that.OBJtoXML(questionDataHR);
      let jsontoxmltable1 = that.OBJtoXML(JSON.parse('{"Table1":' + JSON.stringify(table1) + '}'));
      let jsontoxmltable2 = that.OBJtoXML(JSON.parse('{"Table2":' + JSON.stringify(table2) + '}'));
      let jsontoxmltable3 = that.OBJtoXML(JSON.parse('{"Table3":' + JSON.stringify(table3) + '}'));
      let jsontoxmltable4 = that.OBJtoXML(JSON.parse('{"Table4":' + JSON.stringify(table4) + '}'));
      let jsontoxmltable5 = that.OBJtoXML(JSON.parse('{"Table5":' + JSON.stringify(table5) + '}'));
      let jsontoxmltable6 = that.OBJtoXML(JSON.parse('{"Table6":' + JSON.stringify(table6) + '}'));
      let jsontoxmltable7 = that.OBJtoXML(JSON.parse('{"Table7":' + JSON.stringify(table7) + '}'));
      let jsontoxmltable8 = that.OBJtoXML(JSON.parse('{"Table8":' + JSON.stringify(table8) + '}'));
      let jsontoxmltable9 = that.OBJtoXML(JSON.parse('{"Table9":' + JSON.stringify(table9) + '}'));
      let jsontoxmltable10 = that.OBJtoXML(JSON.parse('{"Table10":' + JSON.stringify(table10) + '}'));
      let jsontoxmltable11 = that.OBJtoXML(JSON.parse('{"Table11":' + JSON.stringify(table11) + '}'));
      let jsontoxmltable12 = that.OBJtoXML(JSON.parse('{"Table12":' + JSON.stringify(table12) + '}'));
      let jsontoxmltable13 = that.OBJtoXML(JSON.parse('{"Table13":' + JSON.stringify(table13) + '}'));
      let jsontoxmltable14 = that.OBJtoXML(JSON.parse('{"Table14":' + JSON.stringify(table14) + '}'));
      let jsontoxmltable15 = that.OBJtoXML(JSON.parse('{"Table15":' + JSON.stringify(table15) + '}'));

      let jsontoxmltable1qa = that.OBJtoXML(JSON.parse('{"Table1":' + JSON.stringify(table1qa) + '}'));
      let jsontoxmltable2qa = that.OBJtoXML(JSON.parse('{"Table2":' + JSON.stringify(table2qa) + '}'));

      let jsontoxmltable1ehs = that.OBJtoXML(JSON.parse('{"Table1":' + JSON.stringify(table1ehs) + '}'));
      let jsontoxmltable2ehs = that.OBJtoXML(JSON.parse('{"Table2":' + JSON.stringify(table2ehs) + '}'));
      let jsontoxmltable3ehs = that.OBJtoXML(JSON.parse('{"Table3":' + JSON.stringify(table3ehs) + '}'));
      let jsontoxmltable4ehs = that.OBJtoXML(JSON.parse('{"Table4":' + JSON.stringify(table4ehs) + '}'));
      let jsontoxmltable5ehs = that.OBJtoXML(JSON.parse('{"Table5":' + JSON.stringify(table5ehs) + '}'));
      let jsontoxmltable6ehs = that.OBJtoXML(JSON.parse('{"Table6":' + JSON.stringify(table6ehs) + '}'));
      let jsontoxmltable7ehs = that.OBJtoXML(JSON.parse('{"Table7":' + JSON.stringify(table7ehs) + '}'));
      let jsontoxmltable8ehs = that.OBJtoXML(JSON.parse('{"Table8":' + JSON.stringify(table8ehs) + '}'));
      let jsontoxmltable9ehs = that.OBJtoXML(JSON.parse('{"Table9":' + JSON.stringify(table9ehs) + '}'));
      let jsontoxmltable10ehs = that.OBJtoXML(JSON.parse('{"Table10":' + JSON.stringify(table10ehs) + '}'));
      let jsontoxmltable11ehs = that.OBJtoXML(JSON.parse('{"Table11":' + JSON.stringify(table11ehs) + '}'));
      let jsontoxmltable12ehs = that.OBJtoXML(JSON.parse('{"Table12":' + JSON.stringify(table12ehs) + '}'));
      let jsontoxmltable13ehs = that.OBJtoXML(JSON.parse('{"Table13":' + JSON.stringify(table13ehs) + '}'));

      let jsontoxmltable1p = that.OBJtoXML(JSON.parse('{"Table1":' + JSON.stringify(table1p) + '}'));
      let jsontoxmltable2p = that.OBJtoXML(JSON.parse('{"Table2":' + JSON.stringify(table2p) + '}'));

      let jsontoxmltable1f = that.OBJtoXML(JSON.parse('{"Table1":' + JSON.stringify(table1f) + '}'));
      let jsontoxmltable2f = that.OBJtoXML(JSON.parse('{"Table2":' + JSON.stringify(table2f) + '}'));
      let jsontoxmltable3f = that.OBJtoXML(JSON.parse('{"Table3":' + JSON.stringify(table3f) + '}'));
      let jsontoxmltable4f = that.OBJtoXML(JSON.parse('{"Table4":' + JSON.stringify(table4f) + '}'));

      let jsontoxmltable1c = that.OBJtoXML(JSON.parse('{"Table1":' + JSON.stringify(table1c) + '}'));
      let jsontoxmltable2c = that.OBJtoXML(JSON.parse('{"Table2":' + JSON.stringify(table2c) + '}'));
      let jsontoxmltable3c = that.OBJtoXML(JSON.parse('{"Table3":' + JSON.stringify(table3c) + '}'));
      let jsontoxmltable4c = that.OBJtoXML(JSON.parse('{"Table4":' + JSON.stringify(table4c) + '}'));
      let jsontoxmltable5c = that.OBJtoXML(JSON.parse('{"Table5":' + JSON.stringify(table5c) + '}'));
      let jsontoxmltable6c = that.OBJtoXML(JSON.parse('{"Table6":' + JSON.stringify(table6c) + '}'));
      let jsontoxmltable7c = that.OBJtoXML(JSON.parse('{"Table7":' + JSON.stringify(table7c) + '}'));
      let jsontoxmltable8c = that.OBJtoXML(JSON.parse('{"Table8":' + JSON.stringify(table8c) + '}'));

      let jsontoxmltable1hr = that.OBJtoXML(JSON.parse('{"Table1":' + JSON.stringify(table1hr) + '}'));
      let jsontoxmltable2hr = that.OBJtoXML(JSON.parse('{"Table2":' + JSON.stringify(table2hr) + '}'));
      let jsontoxmltable3hr = that.OBJtoXML(JSON.parse('{"Table3":' + JSON.stringify(table3hr) + '}'));
      let jsontoxmltable4hr = that.OBJtoXML(JSON.parse('{"Table4":' + JSON.stringify(table4hr) + '}'));
      let jsontoxmltable5hr = that.OBJtoXML(JSON.parse('{"Table5":' + JSON.stringify(table5hr) + '}'));
      let jsontoxmltable6hr = that.OBJtoXML(JSON.parse('{"Table6":' + JSON.stringify(table6hr) + '}'));
      let jsontoxmltable7hr = that.OBJtoXML(JSON.parse('{"Table7":' + JSON.stringify(table7hr) + '}'));
      let jsontoxmltable8hr = that.OBJtoXML(JSON.parse('{"Table8":' + JSON.stringify(table8hr) + '}'));
      let jsontoxmltable9hr = that.OBJtoXML(JSON.parse('{"Table9":' + JSON.stringify(table9hr) + '}'));
      let jsontoxmltable10hr = that.OBJtoXML(JSON.parse('{"Table10":' + JSON.stringify(table10hr) + '}'));
      let jsontoxmltable11hr = that.OBJtoXML(JSON.parse('{"Table11":' + JSON.stringify(table11hr) + '}'));
      let jsontoxmltable12hr = that.OBJtoXML(JSON.parse('{"Table12":' + JSON.stringify(table12hr) + '}'));
      let jsontoxmltable13hr = that.OBJtoXML(JSON.parse('{"Table13":' + JSON.stringify(table13hr) + '}'));
      let jsontoxmltable14hr = that.OBJtoXML(JSON.parse('{"Table14":' + JSON.stringify(table14hr) + '}'));
      let jsontoxmltable15hr = that.OBJtoXML(JSON.parse('{"Table15":' + JSON.stringify(table15hr) + '}'));
      let jsontoxmltable16hr = that.OBJtoXML(JSON.parse('{"Table16":' + JSON.stringify(table16hr) + '}'));
      let jsontoxmltable17hr = that.OBJtoXML(JSON.parse('{"Table17":' + JSON.stringify(table17hr) + '}'));
      let jsontoxmltable18hr = that.OBJtoXML(JSON.parse('{"Table18":' + JSON.stringify(table18hr) + '}'));
      let jsontoxmltable19hr = that.OBJtoXML(JSON.parse('{"Table19":' + JSON.stringify(table19hr) + '}'));
      let jsontoxmltable20hr = that.OBJtoXML(JSON.parse('{"Table20":' + JSON.stringify(table20hr) + '}'));
      let jsontoxmltable21hr = that.OBJtoXML(JSON.parse('{"Table21":' + JSON.stringify(table21hr) + '}'));
      let jsontoxmltable22hr = that.OBJtoXML(JSON.parse('{"Table22":' + JSON.stringify(table22hr) + '}'));
      let jsontoxmltable23hr = that.OBJtoXML(JSON.parse('{"Table23":' + JSON.stringify(table23hr) + '}'));
      let jsontoxmltable24hr = that.OBJtoXML(JSON.parse('{"Table24":' + JSON.stringify(table24hr) + '}'));
      let jsontoxmltable25hr = that.OBJtoXML(JSON.parse('{"Table25":' + JSON.stringify(table25hr) + '}'));

      let jsontoxml1 = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><root>" + jsontoxmlyear + "<sectionABC>" + jsontoxmlquestionabc + jsontoxmltable1 + jsontoxmltable2 + jsontoxmltable3
        + jsontoxmltable4 + jsontoxmltable5 + jsontoxmltable6 + jsontoxmltable7 + jsontoxmltable8  
        + jsontoxmltable9  +  jsontoxmltable10 + jsontoxmltable11 + jsontoxmltable12 + jsontoxmltable13 +
        jsontoxmltable14 +  jsontoxmltable15 + "</sectionABC>" + "<quality_assurance>" +  jsontoxmlquestionqa
          + jsontoxmltable1qa + jsontoxmltable2qa + "</quality_assurance>" + "<EHS>" + jsontoxmlquestionehs +
          jsontoxmltable1ehs + jsontoxmltable2ehs + jsontoxmltable3ehs + jsontoxmltable4ehs + 
          jsontoxmltable5ehs + jsontoxmltable6ehs + jsontoxmltable7ehs + jsontoxmltable8ehs + 
          jsontoxmltable9ehs + jsontoxmltable10ehs + jsontoxmltable11ehs + jsontoxmltable12ehs +
          jsontoxmltable13ehs + "</EHS>" +  "<IT>" +  jsontoxmlquestionit + "</IT>" + "<Procurement>" +
          jsontoxmlquestionp + jsontoxmltable1p + jsontoxmltable2p + "</Procurement>" + "<Finance>" + 
          jsontoxmlquestionf + jsontoxmltable1f + jsontoxmltable2f + jsontoxmltable3f + jsontoxmltable4f + 
          "</Finance>" + "<Legal_Compliance>" + jsontoxmlquestionc + jsontoxmltable1c + 
          jsontoxmltable2c + jsontoxmltable3c + jsontoxmltable4c + jsontoxmltable5c + jsontoxmltable6c + 
          jsontoxmltable7c + jsontoxmltable8c + "</Legal_Compliance>" + "<HR>" + jsontoxmlquestionhr + 
          jsontoxmltable1hr + jsontoxmltable2hr + jsontoxmltable3hr + jsontoxmltable4hr + jsontoxmltable5hr +
          jsontoxmltable6hr + jsontoxmltable7hr + jsontoxmltable8hr + jsontoxmltable9hr + jsontoxmltable10hr + 
          jsontoxmltable11hr + jsontoxmltable12hr + jsontoxmltable13hr + jsontoxmltable14hr + jsontoxmltable15hr +
          jsontoxmltable15hr + jsontoxmltable16hr + jsontoxmltable17hr + jsontoxmltable18hr + jsontoxmltable19hr + 
          jsontoxmltable20hr + jsontoxmltable21hr + jsontoxmltable22hr + jsontoxmltable23hr + jsontoxmltable24hr + 
          jsontoxmltable25hr + "</HR>" + "</root>";

         jsontoxml1 = jsontoxml1.replaceAll("&", "and");
         jsontoxml1 = jsontoxml1.replaceAll(" ", " ");

      let objJsonB64 = btoa(unescape(encodeURIComponent(jsontoxml1)));

      var QualData = {
        "embedFont": 0,
        "formLocale": "en_US",
        "formType": "print",
        "taggedPdf": 1,
        "xdpTemplate": "BRSR_V3/BRSR",
        "xmlData": objJsonB64
      };

      var appId = this.getOwnerComponent().getManifestEntry("/sap.app/id");
      var appPath = appId.replaceAll(".", "/");
      var appModulePath = jQuery.sap.getModulePath(appPath);


      $.ajax({
        url: appModulePath + "/AdobeFormAPI/v1/adsRender/pdf?templateSource=storageName&TraceLevel=0",
        type: "POST",
        data: JSON.stringify(QualData),
        headers: {
          "Content-Type": "application/json"
        },
        async: false,
        success: function (data, textStatus, jqXHR) {


          var FileName = data.fileName;
          var decodedPdfContent = atob(data.fileContent);
          var byteArray = new Uint8Array(decodedPdfContent.length)
          for (var i = 0; i < decodedPdfContent.length; i++) {
            byteArray[i] = decodedPdfContent.charCodeAt(i);
          }

          var blob = new Blob([byteArray.buffer], {
            type: 'application/pdf'
          });

          var _pdfurl = URL.createObjectURL(blob);


          if (!that._PDFViewer) {
            that._PDFViewer = new sap.m.PDFViewer({
              width: "auto",
              source: _pdfurl, // my blob url 
              showDownloadButton: false
            });
            jQuery.sap.addUrlWhitelist("blob"); // register blob url as whitelist 

          } else if (that._PDFViewer) {
            that._PDFViewer = new sap.m.PDFViewer({
              width: "auto",
              source: _pdfurl, // my blob url 
              showDownloadButton: false
            });

            jQuery.sap.addUrlWhitelist("blob"); // register blob url as whitelist 
          }
          // that._pdfViewer.setSource(_pdfurl);

          that.getView().setBusy(false);
          that._PDFViewer.open();

        },
        error: function (data) {
          that.getView().setBusy(false);
          sap.m.MessageBox.show(JSON.stringify(data), {
            icon: sap.m.MessageBox.Icon.ERROR,
            title: "ERROR"
          });

        }
      });
    }


  });
});