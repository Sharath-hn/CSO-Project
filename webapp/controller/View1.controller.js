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
<<<<<<< HEAD
          
          {
            id: "textArea19",
=======
          {
            id: "textArea18",
>>>>>>> 70365465a20729c6bf919647fcd991bef361b1d3
            entitySet: "/qualitative_data_sectionABC",
            filters: [
              new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
              new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
              new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "A"),
<<<<<<< HEAD
              new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "24a")
=======
              new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "20")
>>>>>>> 70365465a20729c6bf919647fcd991bef361b1d3
            ],
            sortProperty: "answer"
          },
          {
<<<<<<< HEAD
            id: "textArea20",
=======
            id: "textArea19",
>>>>>>> 70365465a20729c6bf919647fcd991bef361b1d3
            entitySet: "/qualitative_data_sectionABC",
            filters: [
              new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
              new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
              new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "A"),
<<<<<<< HEAD
              new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "24b")
=======
              new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "24a")
>>>>>>> 70365465a20729c6bf919647fcd991bef361b1d3
            ],
            sortProperty: "answer"
          },
          {
<<<<<<< HEAD
            id: "textArea21",
=======
            id: "textArea20",
>>>>>>> 70365465a20729c6bf919647fcd991bef361b1d3
            entitySet: "/qualitative_data_sectionABC",
            filters: [
              new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
              new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
              new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "A"),
<<<<<<< HEAD
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
=======
              new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "24b")
>>>>>>> 70365465a20729c6bf919647fcd991bef361b1d3
            ],
            sortProperty: "answer"
          },
          {
<<<<<<< HEAD
            id: "textArea23",
=======
            id: "textArea21",
>>>>>>> 70365465a20729c6bf919647fcd991bef361b1d3
            entitySet: "/qualitative_data_sectionABC",
            filters: [
              new sap.ui.model.Filter("up__fiscalYear", sap.ui.model.FilterOperator.EQ, selectedYear),
              new sap.ui.model.Filter("up__businessFunction", sap.ui.model.FilterOperator.EQ, "sectionABC"),
<<<<<<< HEAD
              new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "B"),
              new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "8")
=======
              new sap.ui.model.Filter("section", sap.ui.model.FilterOperator.EQ, "A"),
              new sap.ui.model.Filter("questionID", sap.ui.model.FilterOperator.EQ, "24c")
>>>>>>> 70365465a20729c6bf919647fcd991bef361b1d3
            ],
            sortProperty: "answer"
          },
        ];
<<<<<<< HEAD
=======

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
                    // oTextArea.setValue("No data available");
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
          debugger;
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
>>>>>>> 70365465a20729c6bf919647fcd991bef361b1d3

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


<<<<<<< HEAD
      
=======
>>>>>>> 70365465a20729c6bf919647fcd991bef361b1d3
      if (textAreaValue17 == "") {
        textAreaValue17 = "NA";

        var q19c = {
          "section": "A",
          "questionID": "19c",
          "answer": textAreaValue17
        };

        abcArr.push(q19c);
        console.log("abcArr:", abcArr);


<<<<<<< HEAD
      abcArr.push(q16);
      console.log("abcArr:", abcArr);
    
=======
        var q16 = {
          section: "A",
          questionID: "19c",
          Table1: Table1Data
        };
>>>>>>> 70365465a20729c6bf919647fcd991bef361b1d3

        abcArr.push(q16);
        console.log("Payload for Table1 to be saved:", q16);


<<<<<<< HEAD
      console.log("abcArr:", abcArr);


      var q26 = {
        section: "A",
        questionID: "26",
        Table2: Table11Data
      };
      abcArr.push(q26);

      console.log("abcArr:", abcArr);


     
=======
        var q17 = {
          section: "A",
          questionID: "17",
          Table2: aTable2Data
        };
        abcArr.push(q17);
>>>>>>> 70365465a20729c6bf919647fcd991bef361b1d3

        console.log("Payload for Table2 to be saved:", q17);


        if (textAreaValue16 == "") {
          textAreaValue16 = "NA";
        }

        var q19b = {
          "section": "A",
          "questionID": "19b",
          "answer": textAreaValue16
        };

<<<<<<< HEAD
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
=======


        abcArr.push(q19b);
        console.log("abcArr:", abcArr);


        let q18 = {
          "section": "A",
          "questionID": "18",
          "Table3": [
            {
              "location": "National",
              "numberOfPlants": "ABC1",
              "numberOfOffices": "XYZ1",
              "total": "PQR1"
            },
            {
              "location": "International",
              "numberOfPlants": "ABC1",
              "numberOfOffices": "XYZ1",
              "total": "PQR1"
            }
          ]
        };

        abcArr.push(q18);
        console.log("Payload for Table1 to be saved:", q18);

        let q19a = {
          "section": "A",
          "questionID": "19a",
          "Table4": [
            {
              "locations": "National (No. of States)",
              "number": "ABC1"
            },
            {
              "locations": "International (No. of Countries)",
              "number": "ABC2"
            }
          ]
        }
        abcArr.push(q19a);
        console.log("Payload for Table1 to be saved:", q19a);

        let q20a = {
          "section": "A",
          "questionID": "20a",
          "Table5": [
            {
              "type": "EMPLOYEES",
              "sr_no": "1",
              "particulars": "Permanent (D)",
              "total": "10000",
              "numberOfMale": "5000",
              "percentageOfMale": "50",
              "numberOfFemale": "5000",
              "percentageOfFemale": "50"
            },
            {
              "type": "EMPLOYEES",
              "sr_no": "2",
              "particulars": "Other than Permanent (E)",
              "total": "10000",
              "numberOfMale": "5000",
              "percentageOfMale": "50",
              "numberOfFemale": "5000",
              "percentageOfFemale": "50"
            },
            {
              "type": "EMPLOYEES",
              "sr_no": "3",
              "particulars": "Total employees (D + E)",
              "total": "10000",
              "numberOfMale": "5000",
              "percentageOfMale": "50",
              "numberOfFemale": "5000",
              "percentageOfFemale": "50"
            },
            {
              "type": "WORKERS",
              "sr_no": "4",
              "particulars": "Permanent (F)",
              "total": "10000",
              "numberOfMale": "5000",
              "percentageOfMale": "50",
              "numberOfFemale": "5000",
              "percentageOfFemale": "50"
            },
            {
              "type": "WORKERS",
              "sr_no": "5",
              "particulars": "Other than Permanent (G)",
              "total": "10000",
              "numberOfMale": "5000",
              "percentageOfMale": "50",
              "numberOfFemale": "5000",
              "percentageOfFemale": "50"
            },
            {
              "type": "WORKERS",
              "sr_no": "6",
              "particulars": "Total employees (F + G)",
              "total": "10000",
              "numberOfMale": "5000",
              "percentageOfMale": "50",
              "numberOfFemale": "5000",
              "percentageOfFemale": "50"
            }
          ]
        };

        abcArr.push(q20a);
        console.log("Payload for Table1 to be saved:", q20a);


        let q20b = {
          "section": "A",
          "questionID": "20b",
          "Table6": [
            {
              "type": "DIFFERENTLY ABLED EMPLOYEES",
              "sr_no": "1",
              "particulars": "Permanent (D)",
              "total": "10000",
              "numberOfMale": "5000",
              "percentageOfMale": "50",
              "numberOfFemale": "5000",
              "percentageOfFemale": "50"
            },
            {
              "type": "DIFFERENTLY ABLED EMPLOYEES",
              "sr_no": "2",
              "particulars": "Other than Permanent (E)",
              "total": "10000",
              "numberOfMale": "5000",
              "percentageOfMale": "50",
              "numberOfFemale": "5000",
              "percentageOfFemale": "50"
            },
            {
              "type": "DIFFERENTLY ABLED EMPLOYEES",
              "sr_no": "3",
              "particulars": "Total differently abled employees (D + E)",
              "total": "10000",
              "numberOfMale": "5000",
              "percentageOfMale": "50",
              "numberOfFemale": "5000",
              "percentageOfFemale": "50"
            },
            {
              "type": "DIFFERENTLY ABLED WORKERS",
              "sr_no": "4",
              "particulars": "Permanent (F)",
              "total": "10000",
              "numberOfMale": "5000",
              "percentageOfMale": "50",
              "numberOfFemale": "5000",
              "percentageOfFemale": "50"
            },
            {
              "type": "DIFFERENTLY ABLED WORKERS",
              "sr_no": "5",
              "particulars": "Other than Permanent (G)",
              "total": "10000",
              "numberOfMale": "5000",
              "percentageOfMale": "50",
              "numberOfFemale": "5000",
              "percentageOfFemale": "50"
            },
            {
              "type": "DIFFERENTLY ABLED WORKERS",
              "sr_no": "6",
              "particulars": "Total differently abled workers (F + G)",
              "total": "10000",
              "numberOfMale": "5000",
              "percentageOfMale": "50",
              "numberOfFemale": "5000",
              "percentageOfFemale": "50"
            }
          ]
        };
        abcArr.push(q20b);
        console.log("Payload for Table1 to be saved:", q20b);

        let q21 = {
          "section": "A",
          "questionID": "21",
          "Table7": [
            {
              "name": "Board of Directors",
              "total": "10",
              "numberOfFemale": "1",
              "percentageOfFemale": "10"
            },
            {
              "name": "Key Management Personnel",
              "total": "10",
              "numberOfFemale": "1",
              "percentageOfFemale": "10"
            }
          ]
        };

        abcArr.push(q21);
        console.log("Payload for Table1 to be saved:", q21);
        let q22 = {
          "section": "A",
          "questionID": "22",
          "Table8": [
            {
              "type": "Permanent Employees",
              "maleTurnoverRateInCurrentFY": "100",
              "femaleTurnoverRateInCurrentFY": "200",

              "maleTurnoverRateInPreviousFY": "100",
              "femaleTurnoverRateInPreviousFY": "200",
              "totalTurnoverRateInPreviousFY": "300",
              "maleTurnoverRateInYearPriorToPreviousFY": "100",
              "femaleTurnoverRateInYearPriorToPreviousFY": "200",
              "totalTurnoverRateInYearPriorToPreviousFY": "300"
            },
            {
              "type": "Permanent Workers",
              "maleTurnoverRateInCurrentFY": "100",
              "femaleTurnoverRateInCurrentFY": "200",

              "maleTurnoverRateInPreviousFY": "100",
              "femaleTurnoverRateInPreviousFY": "200",
              "totalTurnoverRateInPreviousFY": "300",
              "maleTurnoverRateInYearPriorToPreviousFY": "100",
              "femaleTurnoverRateInYearPriorToPreviousFY": "200",
              "totalTurnoverRateInYearPriorToPreviousFY": "300"
            }
          ]
        };

        abcArr.push(q22);
        console.log("Payload for Table1 to be saved:", q22);


        let q23 = {
          "section": "A",
          "questionID": "23",
          "Table9": [
            {
              "sr_no": "1",
              "name": "ABC1",
              "type": "Holding",
              "percentageOfShares": "10",
              "participationStatus": "Yes"
            },
            {
              "sr_no": "2",
              "name": "ABC2",
              "type": "Holding",
              "percentageOfShares": "10",
              "participationStatus": "Yes"
            }
          ]
        };
        abcArr.push(q23);
        console.log("Payload for Table to be saved:", q23);

        let q25 = {
          "section": "A",
          "questionID": "25",
          "Table10": [
            {
              "name": "Communities",
              "status": "Yes",
              "currentFYComplaintsFiled": "111",
              "currentFYComplaintsPending": "11",
              "currentFYComplaintsRemarks": "abc",
              "previousFYComplaintsFiled": "111",
              "previousFYComplaintsPending": "11",
              "previousFYComplaintsRemarks": "xyz"
            },
            {
              "name": "Investors (other than shareholders)",
              "status": "Yes",
              "currentFYComplaintsFiled": "111",
              "currentFYComplaintsPending": "11",
              "currentFYComplaintsRemarks": "abc",
              "previousFYComplaintsFiled": "111",
              "previousFYComplaintsPending": "11",
              "previousFYComplaintsRemarks": "xyz"
            },
            {
              "name": "Shareholders",
              "status": "Yes",
              "currentFYComplaintsFiled": "111",
              "currentFYComplaintsPending": "11",
              "currentFYComplaintsRemarks": "abc",
              "previousFYComplaintsFiled": "111",
              "previousFYComplaintsPending": "11",
              "previousFYComplaintsRemarks": "xyz"
            },
            {
              "name": "Employees and workers",
              "status": "Yes",
              "currentFYComplaintsFiled": "111",
              "currentFYComplaintsPending": "11",
              "currentFYComplaintsRemarks": "abc",
              "previousFYComplaintsFiled": "111",
              "previousFYComplaintsPending": "11",
              "previousFYComplaintsRemarks": "xyz"
            },
            {
              "name": "Customers",
              "status": "Yes",
              "currentFYComplaintsFiled": "111",
              "currentFYComplaintsPending": "11",
              "currentFYComplaintsRemarks": "abc",
              "previousFYComplaintsFiled": "111",
              "previousFYComplaintsPending": "11",
              "previousFYComplaintsRemarks": "xyz"
            },
            {
              "name": "Value Chain Partners",
              "status": "Yes",
              "currentFYComplaintsFiled": "111",
              "currentFYComplaintsPending": "11",
              "currentFYComplaintsRemarks": "abc",
              "previousFYComplaintsFiled": "111",
              "previousFYComplaintsPending": "11",
              "previousFYComplaintsRemarks": "xyz"
            },
            {
              "name": "Other (please specify)",
              "status": "Yes",
              "currentFYComplaintsFiled": "111",
              "currentFYComplaintsPending": "11",
              "currentFYComplaintsRemarks": "abc",
              "previousFYComplaintsFiled": "111",
              "previousFYComplaintsPending": "11",
              "previousFYComplaintsRemarks": "xyz"
            }
          ]
        };

        abcArr.push(q25);
        console.log("Payload for Table to be saved:", q25);
      }

      let obj = {
        "fiscalYear": selectedYear,
        "businessFunction": "sectionABC",
        "creator_email": UserEmail,
        "creator_name": Name,
        "status": "Submitted",
        "sectionABC": abcArr

      };
>>>>>>> 70365465a20729c6bf919647fcd991bef361b1d3

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
<<<<<<< HEAD
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




   
=======
            });
          }
        }
      });
>>>>>>> 70365465a20729c6bf919647fcd991bef361b1d3


    },


  });
});