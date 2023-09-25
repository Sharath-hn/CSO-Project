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

    




let that = this; 
let currentDate = new Date();
let currentYear = currentDate.getFullYear();


let cYear = String(currentYear);
let year1 = String(currentYear + 1);
let year2 = String(currentYear - 1);

var oData = {
  "i": [
      {
          "ProductId1": year1,
          "Name": year1
      },
      {
          "ProductId1": cYear,
          "Name": cYear
      },
      {
          "ProductId1": year2,
          "Name": year2
      }
  ],
  "g": [
      {
          "ProductId2": "XYZ",
          "Name": "XYZ"
      },
      {
          "ProductId2": "EHS",
          "Name": "EHS"
      }
  ],
  "h": [
      {
          "ProductId3": "1",
          "Name": "1"
      },
      {
          "ProductId3": "2",
          "Name": "2"
      },
      {
          "ProductId3": "3",
          "Name": "3"
      },
      {
          "ProductId3": "4",
          "Name": "4"
      },
      {
          "ProductId3": "5",
          "Name": "5"
      },
      {
          "ProductId3": "6",
          "Name": "6"
      }
  ],
  "Editable": true,
  "Enabled": true
};

    var oEdit = {
      editable: true
  };

  var myedit = {};
  myedit.edit = oEdit;
  var oEditModel = new JSONModel(myedit);
  this.getView().setModel(oEditModel, "Catalogedit");
  

  var oODataModel = new sap.ui.model.json.JSONModel({
    edit: {
        editable: true // You can set it to true or false as needed
    }
});
this.getView().setModel(oODataModel, "Catalog");


  
  var oODataModel = new JSONModel(oData);
  this.getView().setModel(oODataModel);
  this.UserEmail = "";
  this.Name = "";

 
  that.oDataModel = this.getOwnerComponent().getModel();
  that._getUserId();
    },
  _onClear:  function () {
    
    this._clearText();
    this._setEditable();
  },

  onClose: function() {
    var oOwnerComponent = this.getOwnerComponent();
    // Rest of your code
},

  _getUserId: function (val) {
      //if(sap.ushell.Container.getService("UserInfo").getUser().getFullName() != undefined){
       //   that.Name = sap.ushell.Container.getService("UserInfo").getUser().getFullName();
        //  that.UserEmail = sap.ushell.Container.getService("UserInfo").getUser().getEmail();
      //}else{
         // MessageBox.warning("Error while getting userdata.");
     // },
  
    
      this.toggleVBoxVisibility(false);


      var oYearModel = new JSONModel({
        years: [
          { key: "2023", text: "2023" },
          { key: "2024", text: "2024" },
          { key: "2021", text: "2021" },
          { key: "2034", text: "2034" }
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

     // this.fiscalyear = this.getView().byId("id_fiscalyear").getSelectedKey();
   
      if (selectedYear) {
       
        this.toggleVBoxVisibility(true);
    
        var path = "/brsr_businessfunctions_status"; 
        var Filter1 = new sap.ui.model.Filter("fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear);
        var Filter2 = new sap.ui.model.Filter("businessFunction", sap.ui.model.FilterOperator.EQ, 'ABC'); // Replace 'ABC' with your value
    
        var  oODataModel = new sap.ui.model.json.JSONModel(); 
       // this.getView().setModel( oODataModel, "Catalog");
       
        var oODataModel = this.getOwnerComponent().getModel("Catalog");

        oODataModel.read(path, {
          filters: [Filter1, Filter2],
          success: function (data) {
            if (data.results.length > 0) {
              var status = data.results[0].status;
              console.log("Status:", status);
             

              
               var oODataModel = this.getOwnerComponent().getModel("Catalog");
               if (status === "Draft" || status === "Submitted") {
                oODataModel.setProperty("/edit/editable", status === "Draft");
              } else {
                oODataModel.setProperty("/edit/editable", false);
              }
            
            }
          },
          error: function (error) {
            console.error("Read Error:", error);
          }
        });
        
           
    
        this.Table4(selectedYear);
        this.Table3(selectedYear);

        this.Table1(selectedYear)
        this.Table2(selectedYear)
        this.Table9(selectedYear)
        this.Table11(selectedYear)

        this.Table5(selectedYear)
        this.Table6(selectedYear)
        this.Table7(selectedYear)
        this.Table8(selectedYear)
        this.Table10(selectedYear)
        this.Table12(selectedYear)
        this.Table13(selectedYear)
        this.Table14(selectedYear)
        this.Table15(selectedYear)
       

      }

    },


    Table4: function (selectedYear) {
      var oODataModel = this.getOwnerComponent().getModel("Catalog");
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
                new sap.m.Input({ value: data.results[i].number, editable: "{Catalog>/edit/editable}" }),
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
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
              ]
            });

            var r24 = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: "International" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
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
      //var oODataModel = this.getView().getModel("Catalog");
      var oTable3 = this.getView().byId("Table3");
      var oODataModel = this.getOwnerComponent().getModel("Catalog");

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

      console.log("Table3 Filters:", filters); // Log the filters
      console.log("Table3 Sort Property:", sortProperty); // Log the sort property
      console.log("Table3 Path:", pathTable3); // Log the path

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
                new sap.m.Text({ text: data.results[i].location }), // Bind to 'locations' property
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
     // var oODataModel = this.getView().getModel("Catalog");
      var oTable1 = this.getView().byId("Table1");
     var oODataModel = this.getOwnerComponent().getModel("Catalog");

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
          if (oTable1.getItems().length === 0) {
            var defaultRow = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
              ]
            });

            oTable1.addItem(defaultRow);

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
      //var oODataModel = this.getView().getModel("Catalog");
      var oODataModel = this.getOwnerComponent().getModel("Catalog");
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
      var pathTable1 = "/qualitative_data_sectionABC_Table2"; // Adjust the path if needed

      console.log("Table1 Filters:", filters); // Log the filters
      console.log("Table1 Sort Property:", sortProperty); // Log the sort property
      console.log("Table1 Path:", pathTable1); // Log the path


      oODataModel.read(pathTable1, {
        filters: filters,
        sorters: [new sap.ui.model.Sorter(sortProperty, false)],
        success: function (data, response) {
          console.log("Table2 Read Success:", data);


          var aItems = [];

          for (var i = 0; i < data.results.length; i++) {

            var z1 = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Input({ value: data.results[i].sr_no, editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ value: data.results[i].nameOfProductOrService, editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ value: data.results[i].nicCode, editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ value: data.results[i].totalTurnoverContributed, editable: "{Catalog>/edit/editable}" }),
              ]
            });

            aItems.push(z1);
          }


          oTable2.removeAllItems();
          for (var j = 0; j < aItems.length; j++) {
            oTable2.addItem(aItems[j]);
          }
          if (oTable2.getItems().length === 0) {
            var m = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                
              ]
            });

            oTable2.addItem(m);

          }

          oTable2.setVisible(true);
        },
        error: function (error) {
          console.log("Table2 Read Error:", error); // Log the error

        }
      });
    },
    Table9: function (selectedYear) {
      //var oODataModel = this.getView().getModel("Catalog");
      var oODataModel = this.getOwnerComponent().getModel("Catalog");
      var oTable9 = this.getView().byId("Table9");

      // Define filters and sort property for Table1
      var filters = [
        new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
        new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
        new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
        new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "23")
      ];

      var sortProperty = "sr_no"; // Replace with your desired sort property

      // Define the path for Table1
      var pathTable9 = "/qualitative_data_sectionABC_Table9"; // Adjust the path if needed

     

      oODataModel.read(pathTable9, {
        filters: filters,
        sorters: [new sap.ui.model.Sorter(sortProperty, false)],
        success: function (data, response) {
          console.log("Table9 Read Success:", data);


          var aItems = [];

          for (var i = 0; i < data.results.length; i++) {

            var oItem1 = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Input({ value: data.results[i].sr_no, editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ value: data.results[i].name, editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ value: data.results[i].type, editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ value: data.results[i].percentageOfShares, editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ value: data.results[i].participationStatus, editable: "{Catalog>/edit/editable}" }),
              ]
            });

            aItems.push(oItem1);
          }


          oTable9.removeAllItems();
          for (var j = 0; j < aItems.length; j++) {
            oTable9.addItem(aItems[j]);
          }
          if (oTable9.getItems().length === 0) {
            var g1111 = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Input({ value: "", editable: "{Catalog>/edit/editable}" }),
              new sap.m.Input({ value: "", editable: "{Catalog>/edit/editable}" }),
              new sap.m.Input({ value: "", editable: "{Catalog>/edit/editable}" }),
             new sap.m.Input({ value: "", editable: "{Catalog>/edit/editable}" }),
              new sap.m.Input({ value: "", editable: "{Catalog>/edit/editable}" }),
              ]
            });

            oTable9.addItem(g1111);

          }

          oTable9.setVisible(true);
        },
        error: function (error) {
          console.log("Table9 Read Error:", error); // Log the error

        }
      });

    },
    Table11: function (selectedYear) {
     // var oODataModel = this.getView().getModel("Catalog");
     var oODataModel = this.getOwnerComponent().getModel("Catalog");
      var oTable11 = this.getView().byId("Table11");

      // Define filters and sort property for Table1
      var filters = [
        new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
        new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
        new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
        new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "26")
      ];

      var sortProperty = "sr_no"; // Replace with your desired sort property

      // Define the path for Table1
      var pathTable11 = "/qualitative_data_sectionABC_Table11";



      oODataModel.read(pathTable11, {
        filters: filters,
        sorters: [new sap.ui.model.Sorter(sortProperty, false)],
        success: function (data, response) {
          console.log("Table11 Read Success:", data);


          var aItems = [];

          for (var i = 0; i < data.results.length; i++) {

            var f111 = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Input({ value: data.results[i].sr_no, editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ value: data.results[i].issue, editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ value: data.results[i].type, editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ value: data.results[i].rationale, editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ value: data.results[i].approach, editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ value: data.results[i].financialImplications, editable: "{Catalog>/edit/editable}" }),
              ]
            });

            aItems.push(f111);
          }


          oTable11.removeAllItems();
          for (var j = 0; j < aItems.length; j++) {
            oTable11.addItem(aItems[j]);
          }
          if (oTable11.getItems().length === 0) {
            var a21 = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
              ]
            });

            oTable11.addItem(a21);

          }

          oTable11.setVisible(true);
        },
        error: function (error) {
          console.log("Table11 Read Error:", error); // Log the error

        }
      });
    },





    Table5: function (selectedYear) {
     // var oODataModel = this.getView().getModel("Catalog");
     var oODataModel = this.getOwnerComponent().getModel("Catalog");
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
            var o2 = new sap.m.ColumnListItem({
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

            var o3 = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: "Employees" }), // Static text
                new sap.m.Text({ text: "2" }), // Static text
                new sap.m.Text({ text: "Other than Permanent (E)" }), // Static text
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
              ]
            });

            var o4 = new sap.m.ColumnListItem({
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

            var o5 = new sap.m.ColumnListItem({
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
            var o6 = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: "Workers" }),
                new sap.m.Text({ text: "5" }),
                new sap.m.Text({ text: "Total employees(F + G)" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
              ]
            });
            var o7 = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: "Workers" }),
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
            oTable5.addItem(o2);
            oTable5.addItem(o3);
            oTable5.addItem(o4);


            oTable5.addItem(o5);

            oTable5.addItem(o6);

            oTable5.addItem(o7);


          }

          // Make Table3 visible
          oTable5.setVisible(true);
        },
        error: function (error) {
          console.log("Table5 Read Error:", error); // Log the error

          // Handle the case when there is an error in reading data for Table3
          // You can add code here to display an error message or handle the error in a suitable way.
        }
      });
    },

    Table6: function (selectedYear) {
      //var oODataModel = this.getView().getModel("Catalog");
      var oODataModel = this.getOwnerComponent().getModel("Catalog");
      var oTable6 = this.getView().byId("Table6");

      // Define filters and sort property for Table5
      var filters = [
        new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
        new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
        new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
        new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "20b")
      ];

      var sortProperty = "sr_no"; // Replace with your desired sort property

      // Define the path for Table5
      var pathTable6 = "/qualitative_data_sectionABC_Table6"; // Adjust the path if needed

      oODataModel.read(pathTable6, {
        filters: filters,
        sorters: [new sap.ui.model.Sorter(sortProperty, false)],
        success: function (data, response) {
          console.log("Table6 Read Success:", data); // Log the success data

          // Now, let's add the data items for Table5
          var aItems = [];

          for (var i = 0; i < data.results.length; i++) {
            // Create a ColumnListItem with cells for Table5
            var oItem12 = new sap.m.ColumnListItem({
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

            aItems.push(oItem12);
          }

          // Clear existing items and add the new ones to Table5
          oTable6.removeAllItems();
          for (var j = 0; j < aItems.length; j++) {
            oTable6.addItem(aItems[j]);
          }

          // If Table5 is still empty, add static rows
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
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
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
                new sap.m.Text({ text: "Total differently abled employees(D + E" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
              ]
            });

            var z5 = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: "DIFFERENTLY ABLED WORKERS" }), // Static text
                new sap.m.Text({ text: "4" }), // Static text
                new sap.m.Text({ text: "Permanent (F)" }), // Static text


                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ editable: "{Catalog>/edit/editable}" }),
              ]
            });
            var z6 = new sap.m.ColumnListItem({
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
            var z7 = new sap.m.ColumnListItem({
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
            oTable6.addItem(z2);
            oTable6.addItem(z3);
            oTable6.addItem(z4);


            oTable6.addItem(z5);

            oTable6.addItem(z6);

            oTable6.addItem(z7);


          }

          // Make Table3 visible
          oTable6.setVisible(true);
        },
        error: function (error) {
          console.log("Table6 Read Error:", error); // Log the error

          // Handle the case when there is an error in reading data for Table3
          // You can add code here to display an error message or handle the error in a suitable way.
        }
      });
    },

    Table7: function (selectedYear) {
      //var oODataModel = this.getView().getModel("Catalog");
      var oODataModel = this.getOwnerComponent().getModel("Catalog");
      var oTable7 = this.getView().byId("Table7");

      // Define filters and sort property for Table5
      var filters = [
        new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
        new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
        new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
        new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "21")
      ];

      var sortProperty = "name"; // Replace with your desired sort property

      // Define the path for Table5
      var pathTable5 = "/qualitative_data_sectionABC_Table7"; // Adjust the path if needed

      oODataModel.read(pathTable5, {
        filters: filters,
        sorters: [new sap.ui.model.Sorter(sortProperty, false)],
        success: function (data, response) {
          console.log("Table7 Read Success:", data);


          var aItems = [];

          for (var i = 0; i < data.results.length; i++) {

            var oItem1 = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: data.results[i].name }), // Static text

                new sap.m.Input({ value: data.results[i].total, editable: "{Catalog>/edit/editable}" }),

                new sap.m.Input({ value: data.results[i].numberOfFemale, editable: "{Catalog>/edit/editable}" }),
                new sap.m.Input({ value: data.results[i].percentageOfFemale, editable: "{Catalog>/edit/editable}" }),
              ]
            });

            aItems.push(oItem1);
          }


          oTable7.removeAllItems();
          for (var j = 0; j < aItems.length; j++) {
            oTable7.addItem(aItems[j]);
          }


          if (oTable7.getItems().length === 0) {
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

            oTable7.addItem(b);
            oTable7.addItem(b1);

          }


          oTable7.setVisible(true);
        },
        error: function (error) {
          console.log("Table7 Read Error:", error);


        }
      });
    },
      Table8: function (selectedYear) {
        //var oODataModel = this.getView().getModel("Catalog");
        var oODataModel = this.getOwnerComponent().getModel("Catalog");
        var oTable8 = this.getView().byId("Table8");

       
        var filters = [
          new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
          new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
          new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
          new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "22")
        ];

        var sortProperty = "type";

        
        var pathTable5 = "/qualitative_data_sectionABC_Table8"; 

        oODataModel.read(pathTable5, {
          filters: filters,
          sorters: [new sap.ui.model.Sorter(sortProperty, false)],
          success: function (data, response) {
            console.log("Table8 Read Success:", data);


            var aItems = [];

            for (var i = 0; i < data.results.length; i++) {

              var oItem1 = new sap.m.ColumnListItem({
                cells: [
                  new sap.m.Text({ text: data.results[i].type}), 

                  new sap.m.Input({ value: data.results[i].maleTurnoverRateInCurrentFY, editable: "{Catalog>/edit/editable}" }),

                  new sap.m.Input({ value: data.results[i].femaleTurnoverRateInCurrentFY, editable: "{Catalog>/edit/editable}" }),
                  new sap.m.Input({ value: data.results[i].totalTurnoverRateInCurrentFY, editable: "{Catalog>/edit/editable}" }),
                 
                  new sap.m.Input({ value: data.results[i].maleTurnoverRateInPreviousFY,editable: "{Catalog>/edit/editable}" }),
                  new sap.m.Input({ value: data.results[i].femaleTurnoverRateInPreviousFY, editable: "{Catalog>/edit/editable}" }),
                  new sap.m.Input({ value: data.results[i].totalTurnoverRateInPreviousFY, editable: "{Catalog>/edit/editable}" }),
                  new sap.m.Input({ value: data.results[i].maleTurnoverRateInYearPriorToPreviousFY, editable: "{Catalog>/edit/editable}" }),
                  new sap.m.Input({ value: data.results[i].femaleTurnoverRateInYearPriorToPreviousFY, editable: "{Catalog>/edit/editable}" }),
                  new sap.m.Input({ value: data.results[i].totalTurnoverRateInYearPriorToPreviousFY, editable: "{Catalog>/edit/editable}" }),
                 
                ]
              });

              aItems.push(oItem1);
            }


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
            console.log("Table8 Read Error:", error);


          }
        });

      },

        Table10: function (selectedYear) {
         // var oODataModel = this.getView().getModel("Catalog");
         var oODataModel = this.getOwnerComponent().getModel("Catalog");
          var oTable10 = this.getView().byId("Table10");
  
         
          var filters = [
            new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
            new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
            new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "A"),
            new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "25")
          ];
  
          var sortProperty = "name";
  
          
          var pathTable10 = "/qualitative_data_sectionABC_Table10"; 
  
          oODataModel.read(pathTable10, {
            filters: filters,
            sorters: [new sap.ui.model.Sorter(sortProperty, false)],
            success: function (data, response) {
              console.log("Table10 Read Success:", data);
  
  
              var aItems = [];
  
              for (var i = 0; i < data.results.length; i++) {
  
                var oItem1 = new sap.m.ColumnListItem({
                  cells: [
                    new sap.m.Text({ text: data.results[i].name}), 
  
                    new sap.m.Input({ value: data.results[i].status, editable: "{Catalog>/edit/editable}" }),
  
                    new sap.m.Input({ value: data.results[i].currentFYComplaintsFiled, editable: "{Catalog>/edit/editable}" }),
                    new sap.m.Input({ value: data.results[i].currentFYComplaintsPending, editable: "{Catalog>/edit/editable}" }),
                   
                    new sap.m.Input({ value: data.results[i].currentFYComplaintsRemarks,editable: "{Catalog>/edit/editable}" }),
                    new sap.m.Input({ value: data.results[i].previousFYComplaintsFiled, editable: "{Catalog>/edit/editable}" }),
                    new sap.m.Input({ value: data.results[i].totalTurnoverRateInPreviousFY, editable: "{Catalog>/edit/editable}" }),
                    new sap.m.Input({ value: data.results[i].previousFYComplaintsPending, editable: "{Catalog>/edit/editable}" }),
                    new sap.m.Input({ value: data.results[i].previousFYComplaintsRemarks, editable: "{Catalog>/edit/editable}" }),
                   
                   
                  ]
                });
  
                aItems.push(oItem1);
              }
  
  
              oTable10.removeAllItems();
              for (var j = 0; j < aItems.length; j++) {
                oTable10.addItem(aItems[j]);
              }
  
  
              if (oTable10.getItems().length === 0) {
                var h = new sap.m.ColumnListItem({
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
  
                var h1 = new sap.m.ColumnListItem({
                  cells: [
                    new sap.m.Text({ text: "Investors (other than shareholders)" }),
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
                var h2 = new sap.m.ColumnListItem({
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
                var h3 = new sap.m.ColumnListItem({
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
                var h4 = new sap.m.ColumnListItem({
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
                var h5 = new sap.m.ColumnListItem({
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
                var h6 = new sap.m.ColumnListItem({
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
  
  
                oTable10.addItem(h);
                oTable10.addItem(h1);
                oTable10.addItem(h2);
                oTable10.addItem(h3);
                oTable10.addItem(h4);
                oTable10.addItem(h5);
                oTable10.addItem(h6);
                
  
  
  
  
  
              }
  
  
              oTable10.setVisible(true);
            },
            error: function (error) {
              console.log("Table10 Read Error:", error);
  
  
            }
          });

        },
          Table12: function (selectedYear) {
            //var oODataModel = this.getView().getModel("Catalog");
            var oODataModel = this.getOwnerComponent().getModel("Catalog");
            var oTable12 = this.getView().byId("Table12");
    
           
            var filters = [
              new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
              new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
              new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "B"),
              new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "1")
            ];
    
            var sortProperty = "questions";
    
            
            var pathTable12 = "/qualitative_data_sectionABC_Table12"; 
    
            oODataModel.read(pathTable12, {
              filters: filters,
              sorters: [new sap.ui.model.Sorter(sortProperty, false)],
              success: function (data, response) {
                console.log("Table12 Read Success:", data);
    
    
                var aItems = [];
    
                for (var i = 0; i < data.results.length; i++) {
    
                  var oItem1 = new sap.m.ColumnListItem({
                    cells: [
                      new sap.m.Text({ text: data.results[i].questions}), 
    
                      new sap.m.Input({ value: data.results[i].p1, editable: "{Catalog>/edit/editable}" }),
                      new sap.m.Input({ value: data.results[i].p2, editable: "{Catalog>/edit/editable}" }),
                      new sap.m.Input({ value: data.results[i].p3, editable: "{Catalog>/edit/editable}" }),
                      new sap.m.Input({ value: data.results[i].p4, editable: "{Catalog>/edit/editable}" }),
                      new sap.m.Input({ value: data.results[i].p5, editable: "{Catalog>/edit/editable}" }),
                      new sap.m.Input({ value: data.results[i].p6, editable: "{Catalog>/edit/editable}" }),
                      new sap.m.Input({ value: data.results[i].p7, editable: "{Catalog>/edit/editable}" }),
                      new sap.m.Input({ value: data.results[i].p8, editable: "{Catalog>/edit/editable}" }),
                      new sap.m.Input({ value: data.results[i].p9, editable: "{Catalog>/edit/editable}" }),
                  
                     
                     
                    ]
                  });
    
                  aItems.push(oItem1);
                }
    
    
                oTable12.removeAllItems();
                for (var j = 0; j < aItems.length; j++) {
                  oTable12.addItem(aItems[j]);
                }
    
    
                if (oTable12.getItems().length === 0) {
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
          
                  
    
                  oTable12.addItem(f);
                  oTable12.addItem(f1);
                  oTable12.addItem(f2);
                  oTable12.addItem(f3);
                  oTable12.addItem(f4);
                  oTable12.addItem(f5); 
                  oTable12.addItem(f6);
                  oTable12.addItem(f7);
                  


                  
    
    
    
    
    
                }
    
    
                oTable12.setVisible(true);
              },
              error: function (error) {
                console.log("Table12 Read Error:", error);
    
    
              }
            });
          },

            Table13: function (selectedYear) {
              //var oODataModel = this.getView().getModel("Catalog");
              var oODataModel = this.getOwnerComponent().getModel("Catalog");
              var oTable13 = this.getView().byId("Table13");
      
             
              var filters = [
                new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
                new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
                new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "B"),
                new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "10")
              ];
      
              var sortProperty = "subjectFoReview";
      
              
              var pathTable13 = "/qualitative_data_sectionABC_Table13"; 
      
              oODataModel.read(pathTable13, {
                filters: filters,
                sorters: [new sap.ui.model.Sorter(sortProperty, false)],
                success: function (data, response) {
                  console.log("Table13 Read Success:", data);
      
      
                  var aItems = [];
      
                  for (var i = 0; i < data.results.length; i++) {
      
                    var oItem1 = new sap.m.ColumnListItem({
                      cells: [
                        new sap.m.Text({ text: data.results[i].subjectFoReview}), 
      
                        new sap.m.Input({ value: data.results[i].p1review, editable: "{Catalog>/edit/editable}" }),
                        
                        new sap.m.Input({ value: data.results[i].p2review, editable: "{Catalog>/edit/editable}" }),
                        new sap.m.Input({ value: data.results[i].p3review, editable: "{Catalog>/edit/editable}" }),
                        
                        new sap.m.Input({ value: data.results[i].p4review, editable: "{Catalog>/edit/editable}" }),
                        
                        new sap.m.Input({ value: data.results[i].p5review, editable: "{Catalog>/edit/editable}" }),
                        
                        new sap.m.Input({ value: data.results[i].p6review, editable: "{Catalog>/edit/editable}" }),
                        
                        new sap.m.Input({ value: data.results[i].p7review, editable: "{Catalog>/edit/editable}" }),
                        new sap.m.Input({ value: data.results[i].p8review, editable: "{Catalog>/edit/editable}" }),
                        new sap.m.Input({ value: data.results[i].p9review, editable: "{Catalog>/edit/editable}" }),
                        
                        new sap.m.Input({ value: data.results[i].p1frequency, editable: "{Catalog>/edit/editable}" }),
                        new sap.m.Input({ value: data.results[i].p2frequency, editable: "{Catalog>/edit/editable}" }),
                        new sap.m.Input({ value: data.results[i].p3frequency, editable: "{Catalog>/edit/editable}" }),

                        new sap.m.Input({ value: data.results[i].p4frequency, editable: "{Catalog>/edit/editable}" }),
                        new sap.m.Input({ value: data.results[i].p5frequency, editable: "{Catalog>/edit/editable}" }),
                        new sap.m.Input({ value: data.results[i].p6frequency, editable: "{Catalog>/edit/editable}" }),
                        new sap.m.Input({ value: data.results[i].p7frequency, editable: "{Catalog>/edit/editable}" }),
                        new sap.m.Input({ value: data.results[i].p8frequency, editable: "{Catalog>/edit/editable}" }),
                        new sap.m.Input({ value: data.results[i].p9frequency, editable: "{Catalog>/edit/editable}" }),
                        
                        
      
                       
                       
                      ]
                    });
      
                    aItems.push(oItem1);
                  }
      
      
                  oTable13.removeAllItems();
                  for (var j = 0; j < aItems.length; j++) {
                    oTable13.addItem(aItems[j]);
                  }
      
      
                  if (oTable13.getItems().length === 0) {
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
      
      
                    oTable13.addItem(e);
                    oTable13.addItem(e1);
                    
                    
      
      
      
      
      
                  }
      
      
                  oTable13.setVisible(true);
                },
                error: function (error) {
                  console.log("Table13 Read Error:", error);
      
      
                }
              });
            },

            Table14: function (selectedYear) {
              //var oODataModel = this.getView().getModel("Catalog");
              var oODataModel = this.getOwnerComponent().getModel("Catalog");
              var oTable14 = this.getView().byId("Table14");
      
             
              var filters = [
                new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
                new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
                new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "B"),
                new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "11")
              ];
      
              var sortProperty = "p1";
      
              
              var pathTable14 = "/qualitative_data_sectionABC_Table14"; 
      
              oODataModel.read(pathTable14, {
                filters: filters,
                sorters: [new sap.ui.model.Sorter(sortProperty, false)],
                success: function (data, response) {
                  console.log("Table14 Read Success:", data);
      
      
                  var aItems = [];
      
                  for (var i = 0; i < data.results.length; i++) {
      
                    var oItem1 = new sap.m.ColumnListItem({
                      cells: [
                      
      
                        new sap.m.Input({ value: data.results[i].p1, editable: "{Catalog>/edit/editable}" }),
                        new sap.m.Input({ value: data.results[i].p2, editable: "{Catalog>/edit/editable}" }),
                        new sap.m.Input({ value: data.results[i].p3, editable: "{Catalog>/edit/editable}" }),
                        new sap.m.Input({ value: data.results[i].p4, editable: "{Catalog>/edit/editable}" }),
                        
                        new sap.m.Input({ value: data.results[i].p5, editable: "{Catalog>/edit/editable}" }),
                        
                        new sap.m.Input({ value: data.results[i].p6, editable: "{Catalog>/edit/editable}" }),
                        
                        new sap.m.Input({ value: data.results[i].p7, editable: "{Catalog>/edit/editable}" }),
                        
                        new sap.m.Input({ value: data.results[i].p8, editable: "{Catalog>/edit/editable}" }),
                        
                        new sap.m.Input({ value: data.results[i].p9, editable: "{Catalog>/edit/editable}" }),
                        
                      
                        
                        
                        
      
                       
                       
                      ]
                    });
      
                    aItems.push(oItem1);
                  }
      
      
                  oTable14.removeAllItems();
                  for (var j = 0; j < aItems.length; j++) {
                    oTable14.addItem(aItems[j]);
                  }
      
      
                  if (oTable14.getItems().length === 0) {
                    var i = new sap.m.ColumnListItem({
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
                        
            
                      ]
                    });
            
                   
      
                    oTable14.addItem(i);
                    
                    
                    
      
      
      
      
      
                  }
      
      
                  oTable14.setVisible(true);
                },
                error: function (error) {
                  console.log("Table14 Read Error:", error);
      
      
                }
              });

            },

            Table15: function (selectedYear) {
             // var oODataModel = this.getView().getModel("Catalog");
             var oODataModel = this.getOwnerComponent().getModel("Catalog");
              var oTable15 = this.getView().byId("Table15");
      
             
              var filters = [
                new sap.ui.model.Filter("up__up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
                new sap.ui.model.Filter("up__up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
                new sap.ui.model.Filter("up__section", sap.ui.model.FilterOperator.EQ, "B"),
                new sap.ui.model.Filter("up__questionID", sap.ui.model.FilterOperator.EQ, "12")
              ];
      
              var sortProperty = "questions";
      
              
              var pathTable15 = "/qualitative_data_sectionABC_Table15"; 
      
              oODataModel.read(pathTable15, {
                filters: filters,
                sorters: [new sap.ui.model.Sorter(sortProperty, false)],
                success: function (data, response) {
                  console.log("Table15 Read Success:", data);
      
      
                  var aItems = [];
      
                  for (var i = 0; i < data.results.length; i++) {
      
                    var oItem1 = new sap.m.ColumnListItem({
                      cells: [
                        new sap.m.Text({ text: data.results[i].questions}), 
      
                        new sap.m.Input({ value: data.results[i].p1, editable: "{Catalog>/edit/editable}" }),
                        new sap.m.Input({ value: data.results[i].p2, editable: "{Catalog>/edit/editable}" }),
                        new sap.m.Input({ value: data.results[i].p3, editable: "{Catalog>/edit/editable}" }),
                        new sap.m.Input({ value: data.results[i].p4, editable: "{Catalog>/edit/editable}" }),
                        
                        new sap.m.Input({ value: data.results[i].p5, editable: "{Catalog>/edit/editable}" }),
                        
                        new sap.m.Input({ value: data.results[i].p6, editable: "{Catalog>/edit/editable}" }),
                        
                        new sap.m.Input({ value: data.results[i].p7, editable: "{Catalog>/edit/editable}" }),
                        
                        new sap.m.Input({ value: data.results[i].p8, editable: "{Catalog>/edit/editable}" }),
                        
                        new sap.m.Input({ value: data.results[i].p9, editable: "{Catalog>/edit/editable}" }),
                        
                      
                       
                       
                      ]
                    });
      
                    aItems.push(oItem1);
                  }
      
      
                  oTable15.removeAllItems();
                  for (var j = 0; j < aItems.length; j++) {
                    oTable15.addItem(aItems[j]);
                  }
      
      
                  if (oTable15.getItems().length === 0) {
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
            
      
                    oTable15.addItem(g);
                    oTable15.addItem(g1);
                    oTable15.addItem(g11);
                    oTable15.addItem(g2);
                    oTable15.addItem(g3);
                    
                    
      
      
      
      
      
                  }
      
      
                  oTable15.setVisible(true);
                },
                error: function (error) {
                  console.log("Table15 Read Error:", error);
      
      
                }
              });
            




        

/*
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
            new sap.m.Text({ text: "Employees and workers" }),
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


*/
// Assuming you have a dropdown control for selecting the year with an ID "yearDropdown"
var selectedYear = this.getView().byId("yearDropdown").getSelectedItem().getText();

// Define an array of TextAreas with corresponding question IDs and filters
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
              new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "19b")
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
              new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "19c")
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
  var oODataModel = this.getOwnerComponent().getModel("Catalog");
  // Perform a read operation to fetch data (e.g., text for the TextArea) from the model
  oODataModel.read("/qualitative_data_sectionABC", {
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
                  new sap.m.Input({ value: oData.results[i].valueForCurrentFinancialYear, editable: "{procurementEditModel>/edit/editable}" }),
                  new sap.m.Input({ value: oData.results[i].valueForPreviousFinancialYear, editable: "{procurementEditModel>/edit/editable}" }),
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
                  new sap.m.Input({ value: oData.results[i].valueForCurrentFinancialYear, editable: "{procurementEditModel>/edit/editable}" }),
                  new sap.m.Input({ value: oData.results[i].valueForPreviousFinancialYear, editable: "{procurementEditModel>/edit/editable}" }),
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
                new sap.m.Text({ text: "Number of instances of data breaches" }),
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
                new sap.m.Text({ text: "Percentage of data breaches involving personally identifiable information of customers" }),
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
                new sap.m.Text({ text: "Impact, if any, of the data breaches" }),
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
              if (oData.results[i].type === "Permanent employees") {
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
                if (oData.results[i].type === "Other than Permanent employees") {
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
              if (oData.results[i].type === "Permanent workers") {
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
                if (oData.results[i].type === "Other than Permanent workers") {
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
                    new sap.m.Text({ text: oData.results[i].subType + " " + oData.results[i].category }),
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
                      new sap.m.Text({ text: oData.results[i].subType + " " + oData.results[i].category }),
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




        var Table5 = this.getView().byId("Table5")
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
              "total": Table5.getItems()[0].getCells()[3].getValue(),
              "numberOfMale": Table5.getItems()[0].getCells()[4].getValue(),
              "percentageOfMale": Table5.getItems()[0].getCells()[5].getValue(),
              "numberOfFemale": Table5.getItems()[0].getCells()[6].getValue(),
              "percentageOfFemale": Table5.getItems()[0].getCells()[7].getValue()
            },
            {
              "type": "EMPLOYEES",
              "sr_no": "2",
              "particulars": "Other than Permanent (E)",
              "total": Table5.getItems()[1].getCells()[3].getValue(),
              "numberOfMale": Table5.getItems()[1].getCells()[4].getValue(),
              "percentageOfMale": Table5.getItems()[1].getCells()[5].getValue(),
              "numberOfFemale": Table5.getItems()[1].getCells()[6].getValue(),
              "percentageOfFemale": Table5.getItems()[1].getCells()[7].getValue()
            },
            {
              "type": "EMPLOYEES",
              "sr_no": "3",
              "particulars": "Total employees (D + E)",
              "total": Table5.getItems()[2].getCells()[3].getValue(),
              "numberOfMale": Table5.getItems()[2].getCells()[4].getValue(),
              "percentageOfMale": Table5.getItems()[2].getCells()[5].getValue(),
              "numberOfFemale": Table5.getItems()[2].getCells()[6].getValue(),
              "percentageOfFemale": Table5.getItems()[2].getCells()[7].getValue()
            },
            {
              "type": "WORKERS",
              "sr_no": "4",
              "particulars": "Permanent (F)",
              "total": Table5.getItems()[3].getCells()[3].getValue(),
              "numberOfMale": Table5.getItems()[3].getCells()[4].getValue(),
              "percentageOfMale": Table5.getItems()[3].getCells()[5].getValue(),
              "numberOfFemale": Table5.getItems()[3].getCells()[6].getValue(),
              "percentageOfFemale": Table5.getItems()[3].getCells()[7].getValue()
            },
            {
              "type": "WORKERS",
              "sr_no": "5",
              "particulars": "Other than Permanent (G)",
              "total": Table5.getItems()[4].getCells()[3].getValue(),
              "numberOfMale": Table5.getItems()[4].getCells()[4].getValue(),
              "percentageOfMale": Table5.getItems()[4].getCells()[5].getValue(),
              "numberOfFemale": Table5.getItems()[4].getCells()[6].getValue(),
              "percentageOfFemale": Table5.getItems()[4].getCells()[7].getValue()
            },
            {
              "type": "WORKERS",
              "sr_no": "6",
              "particulars": "Total employees (F + G)",
              "total": Table5.getItems()[5].getCells()[3].getValue(),
              "numberOfMale": Table5.getItems()[5].getCells()[4].getValue(),
              "percentageOfMale": Table5.getItems()[5].getCells()[5].getValue(),
              "numberOfFemale": Table5.getItems()[5].getCells()[6].getValue(),
              "percentageOfFemale": Table5.getItems()[5].getCells()[7].getValue()
            }
          ]
        };

        abcArr.push(q20a);
        console.log("abcArr:", abcArr);




        //var Table6 = this.getView().byId("Table6").getItems();
        // console.log("Table6:", Table6);
        /* let q20b = {
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
        
              abcArr.push(q20b);
              console.log("abcArr:", abcArr);
        */
        var Table6 = this.getView().byId("Table6").getItems();

        let q20b = {
          "section": "A",
          "questionID": "20b",
          "Table6": [
            {
              "type": "DIFFERENTLY ABLED EMPLOYEES",
              "sr_no": "1",
              "particulars": "Permanent (D)",
              "total": Table6[0].getCells()[3].getValue(),
              "numberOfMale": Table6[0].getCells()[4].getValue(),
              "percentageOfMale": Table6[0].getCells()[5].getValue(),
              "numberOfFemale": Table6[0].getCells()[6].getValue(),
              "percentageOfFemale": Table6[0].getCells()[7].getValue()
            },
            {
              "type": "DIFFERENTLY ABLED EMPLOYEES",
              "sr_no": "2",
              "particulars": "Other than Permanent (E)",
              "total": Table6[1].getCells()[3].getValue(),
              "numberOfMale": Table6[1].getCells()[4].getValue(),
              "percentageOfMale": Table6[1].getCells()[5].getValue(),
              "numberOfFemale": Table6[1].getCells()[6].getValue(),
              "percentageOfFemale": Table6[1].getCells()[7].getValue(),
            },
            {
              "type": "DIFFERENTLY ABLED EMPLOYEES",
              "sr_no": "3",
              "particulars": "Total differently abled employees (D + E)",
              "total": Table6[2].getCells()[3].getValue(),
              "numberOfMale": Table6[2].getCells()[4].getValue(),
              "percentageOfMale": Table6[2].getCells()[5].getValue(),
              "numberOfFemale": Table6[2].getCells()[6].getValue(),
              "percentageOfFemale": Table6[2].getCells()[7].getValue(),
            },
            {
              "type": "DIFFERENTLY ABLED WORKERS",
              "sr_no": "4",
              "particulars": "Permanent (F)",
              "total": Table6[3].getCells()[3].getValue(),
              "numberOfMale": Table6[3].getCells()[4].getValue(),
              "percentageOfMale": Table6[3].getCells()[5].getValue(),
              "numberOfFemale": Table6[3].getCells()[6].getValue(),
              "percentageOfFemale": Table6[3].getCells()[7].getValue(),
            },
            {
              "type": "DIFFERENTLY ABLED WORKERS",
              "sr_no": "5",
              "particulars": "Other than Permanent (G)",
              "total": Table6[4].getCells()[3].getValue(),
              "numberOfMale": Table6[4].getCells()[4].getValue(),
              "percentageOfMale": Table6[4].getCells()[5].getValue(),
              "numberOfFemale": Table6[4].getCells()[6].getValue(),
              "percentageOfFemale": Table6[4].getCells()[7].getValue(),
            },
            {
              "type": "DIFFERENTLY ABLED WORKERS",
              "sr_no": "6",
              "particulars": "Total differently abled workers (F + G)",
              "total": Table6[5].getCells()[3].getValue(),
              "numberOfMale": Table6[5].getCells()[4].getValue(),
              "percentageOfMale": Table6[5].getCells()[5].getValue(),
              "numberOfFemale": Table6[5].getCells()[6].getValue(),
              "percentageOfFemale": Table6[5].getCells()[7].getValue(),
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
              "totalTurnoverRateInCurrentFY":Table8[0].getAggregation("cells")[3].getProperty("value"),
              "maleTurnoverRateInPreviousFY": Table8[0].getAggregation("cells")[4].getProperty("value"),
              "femaleTurnoverRateInPreviousFY": Table8[0].getAggregation("cells")[5].getProperty("value"),
              "totalTurnoverRateInPreviousFY": Table8[0].getAggregation("cells")[6].getProperty("value"),
              "maleTurnoverRateInYearPriorToPreviousFY": Table8[0].getAggregation("cells")[7].getProperty("value"),
              "femaleTurnoverRateInYearPriorToPreviousFY": Table8[0].getAggregation("cells")[8].getProperty("value"),
              "totalTurnoverRateInYearPriorToPreviousFY": Table8[0].getAggregation("cells")[9].getProperty("value"),
            },
            {
              "type": "Permanent Workers",
              "maleTurnoverRateInCurrentFY": Table8[1].getAggregation("cells")[1].getProperty("value"),
              "femaleTurnoverRateInCurrentFY": Table8[1].getAggregation("cells")[2].getProperty("value"),
              "totalTurnoverRateInCurrentFY":Table8[1].getAggregation("cells")[3].getProperty("value"),
              "maleTurnoverRateInPreviousFY": Table8[1].getAggregation("cells")[4].getProperty("value"),
              "femaleTurnoverRateInPreviousFY": Table8[1].getAggregation("cells")[5].getProperty("value"),
              "totalTurnoverRateInPreviousFY": Table8[1].getAggregation("cells")[6].getProperty("value"),
              "maleTurnoverRateInYearPriorToPreviousFY": Table8[1].getAggregation("cells")[7].getProperty("value"),
              "femaleTurnoverRateInYearPriorToPreviousFY": Table8[1].getAggregation("cells")[8].getProperty("value"),
              "totalTurnoverRateInYearPriorToPreviousFY": Table8[1].getAggregation("cells")[9].getProperty("value"),
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
              //"p1": Table15[0].getAggregation("cells")[1].getProperty("value"),
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
              "p1": Table15[1].getAggregation("cells")[1].getProperty("value"),
              "p2": Table15[1].getAggregation("cells")[2].getProperty("value"),
              "p3": Table15[1].getAggregation("cells")[3].getProperty("value"),
              "p4": Table15[1].getAggregation("cells")[4].getProperty("value"),
              "p5": Table15[1].getAggregation("cells")[5].getProperty("value"),
              "p6": Table15[1].getAggregation("cells")[6].getProperty("value"),
              "p7": Table15[1].getAggregation("cells")[7].getProperty("value"),
              "p8": Table15[1].getAggregation("cells")[8].getProperty("value"),
              "p9": Table15[1].getAggregation("cells")[9].getProperty("value")
            },
            {
              "questions": "It is planned to be done in the next financial year (Yes/No)",
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
              "questions": "Any other reason (please specify)",
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
            oRowData3.sr_no = oItem.getCells()[0].getValue();
          } else {
            oRowData3.sr_no = "NA";
          }
           // Assuming you want to map specific properties from the table cells
           if (oItem.getCells()[1].getValue() !== "") {
            oRowData3.name = oItem.getCells()[1].getValue();
          } else {
            oRowData3.name = "NA";
          }

          // Assuming you want to map specific properties from the table cells
          if (oItem.getCells()[2].getValue() !== "") {
            oRowData3.type = oItem.getCells()[2].getValue();
          } else {
            oRowData3.type = "NA";
          }

          if (oItem.getCells()[3].getValue() !== "") {
            oRowData3.percentageOfShares = oItem.getCells()[3].getValue();
          } else {
            oRowData3.percentageOfShares = "NA";
          }

          if (oItem.getCells()[4].getValue() !== "") {
            oRowData3.participationStatus = oItem.getCells()[4].getValue();
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
            "p7": oItem.getCells()[6].getValue() || "NA", 
            "p8": oItem.getCells()[7].getValue() || "NA", 
            "p9": oItem.getCells()[8].getValue() || "NA"  
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


            //  var oODataModel = that.getView().getModel("Catalog");
          
           var oODataModel = that.getOwnerComponent().getModel("Catalog");
           // var oODataModel = this.getOwnerComponent().getModel("Catalog");

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



/*
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


        */


        var Table5 = this.getView().byId("Table5")
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
              "total": Table5.getItems()[0].getCells()[3].getValue(),
              "numberOfMale": Table5.getItems()[0].getCells()[4].getValue(),
              "percentageOfMale": Table5.getItems()[0].getCells()[5].getValue(),
              "numberOfFemale": Table5.getItems()[0].getCells()[6].getValue(),
              "percentageOfFemale": Table5.getItems()[0].getCells()[7].getValue()
            },
            {
              "type": "EMPLOYEES",
              "sr_no": "2",
              "particulars": "Other than Permanent (E)",
              "total": Table5.getItems()[1].getCells()[3].getValue(),
              "numberOfMale": Table5.getItems()[1].getCells()[4].getValue(),
              "percentageOfMale": Table5.getItems()[1].getCells()[5].getValue(),
              "numberOfFemale": Table5.getItems()[1].getCells()[6].getValue(),
              "percentageOfFemale": Table5.getItems()[1].getCells()[7].getValue()
            },
            {
              "type": "EMPLOYEES",
              "sr_no": "3",
              "particulars": "Total employees (D + E)",
              "total": Table5.getItems()[2].getCells()[3].getValue(),
              "numberOfMale": Table5.getItems()[2].getCells()[4].getValue(),
              "percentageOfMale": Table5.getItems()[2].getCells()[5].getValue(),
              "numberOfFemale": Table5.getItems()[2].getCells()[6].getValue(),
              "percentageOfFemale": Table5.getItems()[2].getCells()[7].getValue()
            },
            {
              "type": "WORKERS",
              "sr_no": "4",
              "particulars": "Permanent (F)",
              "total": Table5.getItems()[3].getCells()[3].getValue(),
              "numberOfMale": Table5.getItems()[3].getCells()[4].getValue(),
              "percentageOfMale": Table5.getItems()[3].getCells()[5].getValue(),
              "numberOfFemale": Table5.getItems()[3].getCells()[6].getValue(),
              "percentageOfFemale": Table5.getItems()[3].getCells()[7].getValue()
            },
            {
              "type": "WORKERS",
              "sr_no": "5",
              "particulars": "Other than Permanent (G)",
              "total": Table5.getItems()[4].getCells()[3].getValue(),
              "numberOfMale": Table5.getItems()[4].getCells()[4].getValue(),
              "percentageOfMale": Table5.getItems()[4].getCells()[5].getValue(),
              "numberOfFemale": Table5.getItems()[4].getCells()[6].getValue(),
              "percentageOfFemale": Table5.getItems()[4].getCells()[7].getValue()
            },
            {
              "type": "WORKERS",
              "sr_no": "6",
              "particulars": "Total employees (F + G)",
              "total": Table5.getItems()[5].getCells()[3].getValue(),
              "numberOfMale": Table5.getItems()[5].getCells()[4].getValue(),
              "percentageOfMale": Table5.getItems()[5].getCells()[5].getValue(),
              "numberOfFemale": Table5.getItems()[5].getCells()[6].getValue(),
              "percentageOfFemale": Table5.getItems()[5].getCells()[7].getValue()
            }
          ]
        };

        abcArr.push(q20a);
        console.log("abcArr:", abcArr);

        var Table6 = this.getView().byId("Table6").getItems();

        let q20b = {
          "section": "A",
          "questionID": "20b",
          "Table6": [
            {
              "type": "DIFFERENTLY ABLED EMPLOYEES",
              "sr_no": "1",
              "particulars": "Permanent (D)",
              "total": Table6[0].getCells()[3].getValue(),
              "numberOfMale": Table6[0].getCells()[4].getValue(),
              "percentageOfMale": Table6[0].getCells()[5].getValue(),
              "numberOfFemale": Table6[0].getCells()[6].getValue(),
              "percentageOfFemale": Table6[0].getCells()[7].getValue()
            },
            {
              "type": "DIFFERENTLY ABLED EMPLOYEES",
              "sr_no": "2",
              "particulars": "Other than Permanent (E)",
              "total": Table6[1].getCells()[3].getValue(),
              "numberOfMale": Table6[1].getCells()[4].getValue(),
              "percentageOfMale": Table6[1].getCells()[5].getValue(),
              "numberOfFemale": Table6[1].getCells()[6].getValue(),
              "percentageOfFemale": Table6[1].getCells()[7].getValue(),
            },
            {
              "type": "DIFFERENTLY ABLED EMPLOYEES",
              "sr_no": "3",
              "particulars": "Total differently abled employees (D + E)",
              "total": Table6[2].getCells()[3].getValue(),
              "numberOfMale": Table6[2].getCells()[4].getValue(),
              "percentageOfMale": Table6[2].getCells()[5].getValue(),
              "numberOfFemale": Table6[2].getCells()[6].getValue(),
              "percentageOfFemale": Table6[2].getCells()[7].getValue(),
            },
            {
              "type": "DIFFERENTLY ABLED WORKERS",
              "sr_no": "4",
              "particulars": "Permanent (F)",
              "total": Table6[3].getCells()[3].getValue(),
              "numberOfMale": Table6[3].getCells()[4].getValue(),
              "percentageOfMale": Table6[3].getCells()[5].getValue(),
              "numberOfFemale": Table6[3].getCells()[6].getValue(),
              "percentageOfFemale": Table6[3].getCells()[7].getValue(),
            },
            {
              "type": "DIFFERENTLY ABLED WORKERS",
              "sr_no": "5",
              "particulars": "Other than Permanent (G)",
              "total": Table6[4].getCells()[3].getValue(),
              "numberOfMale": Table6[4].getCells()[4].getValue(),
              "percentageOfMale": Table6[4].getCells()[5].getValue(),
              "numberOfFemale": Table6[4].getCells()[6].getValue(),
              "percentageOfFemale": Table6[4].getCells()[7].getValue(),
            },
            {
              "type": "DIFFERENTLY ABLED WORKERS",
              "sr_no": "6",
              "particulars": "Total differently abled workers (F + G)",
              "total": Table6[5].getCells()[3].getValue(),
              "numberOfMale": Table6[5].getCells()[4].getValue(),
              "percentageOfMale": Table6[5].getCells()[5].getValue(),
              "numberOfFemale": Table6[5].getCells()[6].getValue(),
              "percentageOfFemale": Table6[5].getCells()[7].getValue(),
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
              "totalTurnoverRateInCurrentFY":Table8[0].getAggregation("cells")[3].getProperty("value"),
              "maleTurnoverRateInPreviousFY": Table8[0].getAggregation("cells")[4].getProperty("value"),
              "femaleTurnoverRateInPreviousFY": Table8[0].getAggregation("cells")[5].getProperty("value"),
              "totalTurnoverRateInPreviousFY": Table8[0].getAggregation("cells")[6].getProperty("value"),
              "maleTurnoverRateInYearPriorToPreviousFY": Table8[0].getAggregation("cells")[7].getProperty("value"),
              "femaleTurnoverRateInYearPriorToPreviousFY": Table8[0].getAggregation("cells")[8].getProperty("value"),
              "totalTurnoverRateInYearPriorToPreviousFY": Table8[0].getAggregation("cells")[9].getProperty("value"),
            },
            {
              "type": "Permanent Workers",
              "maleTurnoverRateInCurrentFY": Table8[1].getAggregation("cells")[1].getProperty("value"),
              "femaleTurnoverRateInCurrentFY": Table8[1].getAggregation("cells")[2].getProperty("value"),
              "totalTurnoverRateInCurrentFY":Table8[1].getAggregation("cells")[3].getProperty("value"),
              "maleTurnoverRateInPreviousFY": Table8[1].getAggregation("cells")[4].getProperty("value"),
              "femaleTurnoverRateInPreviousFY": Table8[1].getAggregation("cells")[5].getProperty("value"),
              "totalTurnoverRateInPreviousFY": Table8[1].getAggregation("cells")[6].getProperty("value"),
              "maleTurnoverRateInYearPriorToPreviousFY": Table8[1].getAggregation("cells")[7].getProperty("value"),
              "femaleTurnoverRateInYearPriorToPreviousFY": Table8[1].getAggregation("cells")[8].getProperty("value"),
              "totalTurnoverRateInYearPriorToPreviousFY": Table8[1].getAggregation("cells")[9].getProperty("value"),
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
              "p1": Table15[1].getAggregation("cells")[1].getProperty("value"),
              "p2": Table15[1].getAggregation("cells")[2].getProperty("value"),
              "p3": Table15[1].getAggregation("cells")[3].getProperty("value"),
              "p4": Table15[1].getAggregation("cells")[4].getProperty("value"),
              "p5": Table15[1].getAggregation("cells")[5].getProperty("value"),
              "p6": Table15[1].getAggregation("cells")[6].getProperty("value"),
              "p7": Table15[1].getAggregation("cells")[7].getProperty("value"),
              "p8": Table15[1].getAggregation("cells")[8].getProperty("value"),
              "p9": Table15[1].getAggregation("cells")[9].getProperty("value")
            },
            {
              "questions": "It is planned to be done in the next financial year (Yes/No)",
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
              "questions": "Any other reason (please specify)",
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

          if (oItem.getCells()[0].getValue() !== "") {
            oRowData3.sr_no = oItem.getCells()[0].getValue();
          } else {
            oRowData3.sr_no = "NA";
          }
          if (oItem.getCells()[0].getValue() !== "") {
            oRowData3.name = oItem.getCells()[0].getValue();
          } else {
            oRowData3.name = "NA";
          }
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
              


            // var oODataModel = this.getView().getModel("Catalog");
        
             var oODataModel = that.getOwnerComponent().getModel("Catalog");
             //var oODataModel = this.getOwnerComponent().getModel("Catalog");
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


    });
});