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

  return Controller.extend("com.brsr.controller.View1", {
    onInit: function () {
    
     

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
        ];

        var oODataModel = this.getView().getModel("Catalog"); // Access the named OData model from the manifest

        for (var i = 0; i < elementsConfig.length; i++) {
          (function (config) { // Create a closure to capture the config
            // Define the filter conditions for the element
            var aFilters = config.filters;
            var oCombinedFilter = new sap.ui.model.Filter(aFilters, true);

            // Fetch the data for the entity set with filters using the named OData model
            oODataModel.read(config.entitySet, {
              filters: [oCombinedFilter],
              success: function (oData) {
                // Handle the data or perform any further actions here
                console.log("Filtered data:", oData);

                if (config.id.startsWith("Table")) {
                  // Get the table and apply the filter and sorter
                  var oTable = this.getView().byId(config.id);
                  var oBinding = oTable.getBinding("items");
                  if (oBinding) {
                    oBinding.filter(oCombinedFilter);
                    var oSorter = new sap.ui.model.Sorter(config.sortProperty, false);
                    oBinding.sort(oSorter);
                    oTable.setVisible(true);
                  } else {
                    console.error("Binding object is undefined for table with ID:", config.id);
                  }
                } else {
                  // Handle the text area control
                  var oTextArea = this.getView().byId(config.id);
                  if (oData.results && oData.results.length > 0) {
                    oTextArea.setValue(oData.results[0].answer);
                  } else {
                    oTextArea.setValue("No data available");
                  }
                }
              }.bind(this),
              error: function (oError) {
                // Handle errors if needed
                console.error("Error reading data with filters: " + oError);
              }
            });
          }).call(this, elementsConfig[i]); // Call the closure with the current config
        }
      } else {
        // Year is not selected, show a message or handle it as needed
        sap.m.MessageToast.show("Please select a year before submitting.");
      }
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







      // Get a reference to the table
      var oTable = this.getView().byId("Table1");

      // Get the table items (rows)
      var aTableItems = oTable.getItems();

      // Create an array to store the data from the table
      var Table1Data = [];

      // Loop through the table items and extract the data
      for (var i = 0; i < aTableItems.length; i++) {
        var oItem = aTableItems[i];

        // Create an object to represent a row of data
        var oRowData = {

        }

        // Assuming you want to map specific properties from the table cells
        if (oItem.getCells()[0].getValue() !== "") {
          oRowData.sr_no = oItem.getCells()[0].getValue();
        } else {
          oRowData.sr_no = "NA";
        }

        // Repeat this pattern for other properties as needed
        // For example:
        if (oItem.getCells()[1].getValue() !== "") {
          oRowData.descriptionOfMainActivity = oItem.getCells()[1].getValue();
        } else {
          oRowData.descriptionOfMainActivity = "NA";
        }
        if (oItem.getCells()[1].getValue() !== "") {
          oRowData.descriptionOfMainActivity = oItem.getCells()[1].getValue();
        } else {
          oRowData.descriptionOfMainActivity = "NA";
        }
        if (oItem.getCells()[1].getValue() !== "") {
          oRowData.descriptionOfBusinessActivity = oItem.getCells()[1].getValue();
        } else {
          oRowData.descriptionOfBusinessActivity = "NA";
        }
        if (oItem.getCells()[1].getValue() !== "") {
          oRowData.percentageOfTurnoverOfTheEntity = oItem.getCells()[1].getValue();
        } else {
          oRowData.percentageOfTurnoverOfTheEntity = "NA";
        }



        // Add the row data to the array
        Table1Data.push(oRowData);
      }

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
        if (oItem.getCells()[0].getValue() !== "") {
          oRowData2.sr_no = oItem.getCells()[0].getValue();
        } else {
          oRowData2.sr_no = "NA";
        }

        // Repeat this pattern for other properties as needed
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

      var oTable11 = this.getView().byId("Table11");
      var aTable11Items = oTable11.getItems();
      var Table11Data = [];
      
      for (var i = 0; i < aTable11Items.length; i++) {
        var oItem = aTable11Items[i];
        var oRowData3 = {
          "sr_no": oItem.getCells()[0].getValue() || "NA",
          "issue": oItem.getCells()[1].getValue() || "NA",
          "type": oItem.getCells()[2].getValue() || "NA",
          "rationale": oItem.getCells()[3].getValue() || "NA",
          "approach": oItem.getCells()[4].getValue() || "NA",
          "financialImplications": oItem.getCells()[5].getValue() || "NA"
        };
      
        Table11Data.push(oRowData3);
      }
      
    
    

      var abcArr = []

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
     

      var q16 = {
        section: "A",
        questionID: "19c",
        Table1: Table1Data
      };

      abcArr.push(q16);
      console.log("abcArr:", abcArr);
    


      var q17 = {
        section: "A",
        questionID: "17",
        Table2: aTable2Data
      };
      abcArr.push(q17);

      console.log("abcArr:", abcArr);


      var q26 = {
        section: "A",
        questionID: "26",
        Table2: Table11Data
      };
      abcArr.push(q26);

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
      
      var Table3 = this.getView().byId("Table3").getItems();

      let q18 = {
        "section": "A",
        "questionID": "18",
        "Table3": [
            {
                "location": "National",
                "numberOfPlants": Table3[0].getAggregation("cells")[1].getProperty("value"), 
                "numberOfOffices":  Table3[0].getAggregation("cells")[2].getProperty("value"), 
                "total":  Table3[0].getAggregation("cells")[3].getProperty("value"), 
            },
            {
                "location": "International",
                "numberOfPlants":  Table3[1].getAggregation("cells")[1].getProperty("value"), 
                "numberOfOffices":  Table3[1].getAggregation("cells")[2].getProperty("value"), 
                "total":  Table3[1].getAggregation("cells")[3].getProperty("value"), 
            }
        ]
    };
    
    abcArr.push(q18);

    console.log("abcArr:", abcArr);
     


    var Table4 = this.getView().byId("Table4").getItems();

     let q19a = {
      "section": "A",
      "questionID": "19a",
      "Table4": [
          {
              "locations": "National (No. of States)",
              "number": Table4[0].getAggregation("cells")[1].getProperty("value"), 
          },
          {
              "locations": "International (No. of Countries)",
              "number": Table4[1].getAggregation("cells")[1].getProperty("value"), 
          }
      ]
  }
  abcArr.push(q19a);
  console.log("abcArr:", abcArr);
     

  var Table5 = this.getView().byId("Table5").getItems();

  let q20a = {
    "section": "A",
    "questionID": "20a",
    "Table5": [
        {
            "type": "EMPLOYEES",
            "sr_no": "1",
            "particulars": "Permanent (D)",
            "total": Table5[0].getAggregation("cells")[1].getProperty("value"),   
            "numberOfMale":Table5[0].getAggregation("cells")[2].getProperty("value"),  
            "percentageOfMale": Table5[0].getAggregation("cells")[3].getProperty("value"), 
            "numberOfFemale": Table5[0].getAggregation("cells")[4].getProperty("value"), 
            "percentageOfFemale": Table5[0].getAggregation("cells")[5].getProperty("value"), 
        },
        {
            "type": "EMPLOYEES",
            "sr_no": "2",
            "particulars": "Other than Permanent (E)",
            "total": Table5[1].getAggregation("cells")[1].getProperty("value"), 
            "numberOfMale":Table5[1].getAggregation("cells")[2].getProperty("value"), 
            "percentageOfMale":Table5[1].getAggregation("cells")[3].getProperty("value"), 
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
            "percentageOfMale":  Table5[4].getAggregation("cells")[3].getProperty("value"), 
            "numberOfFemale":  Table5[4].getAggregation("cells")[4].getProperty("value"), 
            "percentageOfFemale":  Table5[4].getAggregation("cells")[5].getProperty("value"), 
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
      "percentageOfMale":Table6[0].getAggregation("cells")[3].getProperty("value"), 
      "numberOfFemale": Table6[0].getAggregation("cells")[4].getProperty("value"), 
      "percentageOfFemale": Table6[0].getAggregation("cells")[5].getProperty("value"), 
    },
    {
      "type": "DIFFERENTLY ABLED EMPLOYEES",
      "sr_no": "2",
      "particulars": "Other than Permanent (E)",
      "total": Table6[1].getAggregation("cells")[1].getProperty("value"), 
      "numberOfMale": Table6[1].getAggregation("cells")[2].getProperty("value"), 
      "percentageOfMale":  Table6[1].getAggregation("cells")[3].getProperty("value"), 
      "numberOfFemale":  Table6[1].getAggregation("cells")[4].getProperty("value"), 
      "percentageOfFemale":  Table6[1].getAggregation("cells")[5].getProperty("value"), 
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
      "maleTurnoverRateInCurrentFY":  Table8[0].getAggregation("cells")[1].getProperty("value"), 
      "femaleTurnoverRateInCurrentFY":  Table8[0].getAggregation("cells")[2].getProperty("value"), 
                                        
      "maleTurnoverRateInPreviousFY":  Table8[0].getAggregation("cells")[3].getProperty("value"), 
      "femaleTurnoverRateInPreviousFY":  Table8[0].getAggregation("cells")[4].getProperty("value"), 
      "totalTurnoverRateInPreviousFY":  Table8[0].getAggregation("cells")[5].getProperty("value"), 
      "maleTurnoverRateInYearPriorToPreviousFY":  Table8[0].getAggregation("cells")[6].getProperty("value"), 
      "femaleTurnoverRateInYearPriorToPreviousFY":  Table8[0].getAggregation("cells")[7].getProperty("value"), 
      "totalTurnoverRateInYearPriorToPreviousFY":  Table8[0].getAggregation("cells")[8].getProperty("value"), 
    },
    {
      "type": "Permanent Workers",
      "maleTurnoverRateInCurrentFY":  Table8[1].getAggregation("cells")[1].getProperty("value"), 
      "femaleTurnoverRateInCurrentFY": Table8[1].getAggregation("cells")[2].getProperty("value"), 
      
      "maleTurnoverRateInPreviousFY":  Table8[1].getAggregation("cells")[3].getProperty("value"), 
      "femaleTurnoverRateInPreviousFY":  Table8[1].getAggregation("cells")[4].getProperty("value"), 
      "totalTurnoverRateInPreviousFY":  Table8[1].getAggregation("cells")[5].getProperty("value"), 
      "maleTurnoverRateInYearPriorToPreviousFY":  Table8[1].getAggregation("cells")[6].getProperty("value"), 
      "femaleTurnoverRateInYearPriorToPreviousFY":  Table8[1].getAggregation("cells")[7].getProperty("value"), 
      "totalTurnoverRateInYearPriorToPreviousFY":  Table8[1].getAggregation("cells")[8].getProperty("value"), 
    }
  ]
};

abcArr.push(q22);
console.log("abcArr:", abcArr);

var Table9 = this.getView().byId("Table9").getItems();

let q23 = {
  "section": "A",
  "questionID": "23",
  "Table9": [
    {
      "sr_no": Table9[0].getAggregation("cells")[1].getProperty("value"),
      "name": Table9[0].getAggregation("cells")[2].getProperty("value"),
      "type": Table9[0].getAggregation("cells")[3].getProperty("value"),
      "percentageOfShares": Table9[0].getAggregation("cells")[4].getProperty("value"),
      "participationStatus": Table9[0].getAggregation("cells")[5].getProperty("value"),
    },
    {
      "sr_no": Table9[1].getAggregation("cells")[1].getProperty("value"),
      "name":  Table9[1].getAggregation("cells")[2].getProperty("value"),
      "type":  Table9[1].getAggregation("cells")[3].getProperty("value"),
      "percentageOfShares":  Table9[1].getAggregation("cells")[4].getProperty("value"),
      "participationStatus":  Table9[1].getAggregation("cells")[5].getProperty("value"),
    }
  ]
};
abcArr.push(q23);
console.log("abcArr:", abcArr);


var Table10 = this.getView().byId("Table10").getItems();
let q25 = {
  "section": "A",
  "questionID": "25",
  "Table10": [
    {
      "name": "Communities",
      "status": Table10[0].getAggregation("cells")[1].getProperty("value"),
      "currentFYComplaintsFiled":  Table10[0].getAggregation("cells")[2].getProperty("value"),
      "currentFYComplaintsPending": Table10[0].getAggregation("cells")[3].getProperty("value"),
      "currentFYComplaintsRemarks": Table10[0].getAggregation("cells")[4].getProperty("value"),
      "previousFYComplaintsFiled": Table10[0].getAggregation("cells")[5].getProperty("value"),
      "previousFYComplaintsPending":Table10[0].getAggregation("cells")[6].getProperty("value"),
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
      "previousFYComplaintsFiled":Table10[2].getAggregation("cells")[5].getProperty("value"),
      "previousFYComplaintsPending": Table10[2].getAggregation("cells")[6].getProperty("value"),
      "previousFYComplaintsRemarks": Table10[2].getAggregation("cells")[7].getProperty("value"),
    },
    {
      "name": "Employees and workers",
      "status": Table10[3].getAggregation("cells")[1].getProperty("value"),
      "currentFYComplaintsFiled":  Table10[3].getAggregation("cells")[2].getProperty("value"),
      "currentFYComplaintsPending": Table10[3].getAggregation("cells")[3].getProperty("value"),
      "currentFYComplaintsRemarks":  Table10[3].getAggregation("cells")[4].getProperty("value"),
      "previousFYComplaintsFiled":  Table10[3].getAggregation("cells")[5].getProperty("value"),
      "previousFYComplaintsPending": Table10[3].getAggregation("cells")[6].getProperty("value"),
      "previousFYComplaintsRemarks":  Table10[3].getAggregation("cells")[7].getProperty("value"),
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
      "currentFYComplaintsPending":Table10[6].getAggregation("cells")[3].getProperty("value"),
      "currentFYComplaintsRemarks": Table10[6].getAggregation("cells")[4].getProperty("value"),
      "previousFYComplaintsFiled": Table10[6].getAggregation("cells")[5].getProperty("value"),
      "previousFYComplaintsPending":Table10[6].getAggregation("cells")[6].getProperty("value"),
      "previousFYComplaintsRemarks": Table10[6].getAggregation("cells")[7].getProperty("value"),
    }
  ]
};

abcArr.push(q25);

console.log("abcArr:", abcArr);
      }

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







 
  var oTable = this.getView().byId("Table1");

 
  var aTableItems = oTable.getItems();

  // Create an array to store the data from the table
  var Table1Data = [];

  // Loop through the table items and extract the data
  for (var i = 0; i < aTableItems.length; i++) {
    var oItem = aTableItems[i];

    // Create an object to represent a row of data
    var oRowData = {

    }

    // Assuming you want to map specific properties from the table cells
    if (oItem.getCells()[0].getValue() !== "") {
      oRowData.sr_no = oItem.getCells()[0].getValue();
    } else {
      oRowData.sr_no = "NA";
    }

    // Repeat this pattern for other properties as needed
    // For example:
    if (oItem.getCells()[1].getValue() !== "") {
      oRowData.descriptionOfMainActivity = oItem.getCells()[1].getValue();
    } else {
      oRowData.descriptionOfMainActivity = "NA";
    }
    if (oItem.getCells()[1].getValue() !== "") {
      oRowData.descriptionOfMainActivity = oItem.getCells()[1].getValue();
    } else {
      oRowData.descriptionOfMainActivity = "NA";
    }
    if (oItem.getCells()[1].getValue() !== "") {
      oRowData.descriptionOfBusinessActivity = oItem.getCells()[1].getValue();
    } else {
      oRowData.descriptionOfBusinessActivity = "NA";
    }
    if (oItem.getCells()[1].getValue() !== "") {
      oRowData.percentageOfTurnoverOfTheEntity = oItem.getCells()[1].getValue();
    } else {
      oRowData.percentageOfTurnoverOfTheEntity = "NA";
    }



    // Add the row data to the array
    Table1Data.push(oRowData);
  }

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
    if (oItem.getCells()[0].getValue() !== "") {
      oRowData2.sr_no = oItem.getCells()[0].getValue();
    } else {
      oRowData2.sr_no = "NA";
    }

    // Repeat this pattern for other properties as needed
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

  var oTable11 = this.getView().byId("Table11");
  var aTable11Items = oTable11.getItems();
  var Table11Data = [];
  
  for (var i = 0; i < aTable11Items.length; i++) {
    var oItem = aTable11Items[i];
    var oRowData3 = {
      "sr_no": oItem.getCells()[0].getValue() || "NA",
      "issue": oItem.getCells()[1].getValue() || "NA",
      "type": oItem.getCells()[2].getValue() || "NA",
      "rationale": oItem.getCells()[3].getValue() || "NA",
      "approach": oItem.getCells()[4].getValue() || "NA",
      "financialImplications": oItem.getCells()[5].getValue() || "NA"
    };
  
    Table11Data.push(oRowData3);
  }
  

  


  var abcArr = []

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
 

  var q16 = {
    section: "A",
    questionID: "19c",
    Table1: Table1Data
  };

  abcArr.push(q16);
  console.log("abcArr:", abcArr);



  var q17 = {
    section: "A",
    questionID: "17",
    Table2: aTable2Data
  };
  abcArr.push(q17);

  console.log("abcArr:", abcArr);


  var q26 = {
    section: "A",
    questionID: "26",
    Table2: Table11Data
  };
  abcArr.push(q26);

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
  
  var Table3 = this.getView().byId("Table3").getItems();

  let q18 = {
    "section": "A",
    "questionID": "18",
    "Table3": [
        {
            "location": "National",
            "numberOfPlants": Table3[0].getAggregation("cells")[1].getProperty("value"), 
            "numberOfOffices":  Table3[0].getAggregation("cells")[2].getProperty("value"), 
            "total":  Table3[0].getAggregation("cells")[3].getProperty("value"), 
        },
        {
            "location": "International",
            "numberOfPlants":  Table3[1].getAggregation("cells")[1].getProperty("value"), 
            "numberOfOffices":  Table3[1].getAggregation("cells")[2].getProperty("value"), 
            "total":  Table3[1].getAggregation("cells")[3].getProperty("value"), 
        }
    ]
};

abcArr.push(q18);

console.log("abcArr:", abcArr);
 


var Table4 = this.getView().byId("Table4").getItems();

 let q19a = {
  "section": "A",
  "questionID": "19a",
  "Table4": [
      {
          "locations": "National (No. of States)",
          "number": Table4[0].getAggregation("cells")[1].getProperty("value"), 
      },
      {
          "locations": "International (No. of Countries)",
          "number": Table4[1].getAggregation("cells")[1].getProperty("value"), 
      }
  ]
}
abcArr.push(q19a);
console.log("abcArr:", abcArr);
 

var Table5 = this.getView().byId("Table5").getItems();

let q20a = {
"section": "A",
"questionID": "20a",
"Table5": [
    {
        "type": "EMPLOYEES",
        "sr_no": "1",
        "particulars": "Permanent (D)",
        "total": Table5[0].getAggregation("cells")[1].getProperty("value"),   
        "numberOfMale":Table5[0].getAggregation("cells")[2].getProperty("value"),  
        "percentageOfMale": Table5[0].getAggregation("cells")[3].getProperty("value"), 
        "numberOfFemale": Table5[0].getAggregation("cells")[4].getProperty("value"), 
        "percentageOfFemale": Table5[0].getAggregation("cells")[5].getProperty("value"), 
    },
    {
        "type": "EMPLOYEES",
        "sr_no": "2",
        "particulars": "Other than Permanent (E)",
        "total": Table5[1].getAggregation("cells")[1].getProperty("value"), 
        "numberOfMale":Table5[1].getAggregation("cells")[2].getProperty("value"), 
        "percentageOfMale":Table5[1].getAggregation("cells")[3].getProperty("value"), 
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
        "percentageOfMale":  Table5[4].getAggregation("cells")[3].getProperty("value"), 
        "numberOfFemale":  Table5[4].getAggregation("cells")[4].getProperty("value"), 
        "percentageOfFemale":  Table5[4].getAggregation("cells")[5].getProperty("value"), 
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
  "percentageOfMale":Table6[0].getAggregation("cells")[3].getProperty("value"), 
  "numberOfFemale": Table6[0].getAggregation("cells")[4].getProperty("value"), 
  "percentageOfFemale": Table6[0].getAggregation("cells")[5].getProperty("value"), 
},
{
  "type": "DIFFERENTLY ABLED EMPLOYEES",
  "sr_no": "2",
  "particulars": "Other than Permanent (E)",
  "total": Table6[1].getAggregation("cells")[1].getProperty("value"), 
  "numberOfMale": Table6[1].getAggregation("cells")[2].getProperty("value"), 
  "percentageOfMale":  Table6[1].getAggregation("cells")[3].getProperty("value"), 
  "numberOfFemale":  Table6[1].getAggregation("cells")[4].getProperty("value"), 
  "percentageOfFemale":  Table6[1].getAggregation("cells")[5].getProperty("value"), 
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
  "maleTurnoverRateInCurrentFY":  Table8[0].getAggregation("cells")[1].getProperty("value"), 
  "femaleTurnoverRateInCurrentFY":  Table8[0].getAggregation("cells")[2].getProperty("value"), 
                                    
  "maleTurnoverRateInPreviousFY":  Table8[0].getAggregation("cells")[3].getProperty("value"), 
  "femaleTurnoverRateInPreviousFY":  Table8[0].getAggregation("cells")[4].getProperty("value"), 
  "totalTurnoverRateInPreviousFY":  Table8[0].getAggregation("cells")[5].getProperty("value"), 
  "maleTurnoverRateInYearPriorToPreviousFY":  Table8[0].getAggregation("cells")[6].getProperty("value"), 
  "femaleTurnoverRateInYearPriorToPreviousFY":  Table8[0].getAggregation("cells")[7].getProperty("value"), 
  "totalTurnoverRateInYearPriorToPreviousFY":  Table8[0].getAggregation("cells")[8].getProperty("value"), 
},
{
  "type": "Permanent Workers",
  "maleTurnoverRateInCurrentFY":  Table8[1].getAggregation("cells")[1].getProperty("value"), 
  "femaleTurnoverRateInCurrentFY": Table8[1].getAggregation("cells")[2].getProperty("value"), 
  
  "maleTurnoverRateInPreviousFY":  Table8[1].getAggregation("cells")[3].getProperty("value"), 
  "femaleTurnoverRateInPreviousFY":  Table8[1].getAggregation("cells")[4].getProperty("value"), 
  "totalTurnoverRateInPreviousFY":  Table8[1].getAggregation("cells")[5].getProperty("value"), 
  "maleTurnoverRateInYearPriorToPreviousFY":  Table8[1].getAggregation("cells")[6].getProperty("value"), 
  "femaleTurnoverRateInYearPriorToPreviousFY":  Table8[1].getAggregation("cells")[7].getProperty("value"), 
  "totalTurnoverRateInYearPriorToPreviousFY":  Table8[1].getAggregation("cells")[8].getProperty("value"), 
}
]
};

abcArr.push(q22);
console.log("abcArr:", abcArr);

var Table9 = this.getView().byId("Table9").getItems();

let q23 = {
"section": "A",
"questionID": "23",
"Table9": [
{
  "sr_no": Table9[0].getAggregation("cells")[1].getProperty("value"),
  "name": Table9[0].getAggregation("cells")[2].getProperty("value"),
  "type": Table9[0].getAggregation("cells")[3].getProperty("value"),
  "percentageOfShares": Table9[0].getAggregation("cells")[4].getProperty("value"),
  "participationStatus": Table9[0].getAggregation("cells")[5].getProperty("value"),
},
{
  "sr_no": Table9[1].getAggregation("cells")[1].getProperty("value"),
  "name":  Table9[1].getAggregation("cells")[2].getProperty("value"),
  "type":  Table9[1].getAggregation("cells")[3].getProperty("value"),
  "percentageOfShares":  Table9[1].getAggregation("cells")[4].getProperty("value"),
  "participationStatus":  Table9[1].getAggregation("cells")[5].getProperty("value"),
}
]
};
abcArr.push(q23);
console.log("abcArr:", abcArr);


var Table10 = this.getView().byId("Table10").getItems();
let q25 = {
"section": "A",
"questionID": "25",
"Table10": [
{
  "name": "Communities",
  "status": Table10[0].getAggregation("cells")[1].getProperty("value"),
  "currentFYComplaintsFiled":  Table10[0].getAggregation("cells")[2].getProperty("value"),
  "currentFYComplaintsPending": Table10[0].getAggregation("cells")[3].getProperty("value"),
  "currentFYComplaintsRemarks": Table10[0].getAggregation("cells")[4].getProperty("value"),
  "previousFYComplaintsFiled": Table10[0].getAggregation("cells")[5].getProperty("value"),
  "previousFYComplaintsPending":Table10[0].getAggregation("cells")[6].getProperty("value"),
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
  "previousFYComplaintsFiled":Table10[2].getAggregation("cells")[5].getProperty("value"),
  "previousFYComplaintsPending": Table10[2].getAggregation("cells")[6].getProperty("value"),
  "previousFYComplaintsRemarks": Table10[2].getAggregation("cells")[7].getProperty("value"),
},
{
  "name": "Employees and workers",
  "status": Table10[3].getAggregation("cells")[1].getProperty("value"),
  "currentFYComplaintsFiled":  Table10[3].getAggregation("cells")[2].getProperty("value"),
  "currentFYComplaintsPending": Table10[3].getAggregation("cells")[3].getProperty("value"),
  "currentFYComplaintsRemarks":  Table10[3].getAggregation("cells")[4].getProperty("value"),
  "previousFYComplaintsFiled":  Table10[3].getAggregation("cells")[5].getProperty("value"),
  "previousFYComplaintsPending": Table10[3].getAggregation("cells")[6].getProperty("value"),
  "previousFYComplaintsRemarks":  Table10[3].getAggregation("cells")[7].getProperty("value"),
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
  "currentFYComplaintsPending":Table10[6].getAggregation("cells")[3].getProperty("value"),
  "currentFYComplaintsRemarks": Table10[6].getAggregation("cells")[4].getProperty("value"),
  "previousFYComplaintsFiled": Table10[6].getAggregation("cells")[5].getProperty("value"),
  "previousFYComplaintsPending":Table10[6].getAggregation("cells")[6].getProperty("value"),
  "previousFYComplaintsRemarks": Table10[6].getAggregation("cells")[7].getProperty("value"),
}
]
};

abcArr.push(q25);

console.log("abcArr:", abcArr);
  }

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


  });
});