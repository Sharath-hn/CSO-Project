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
  "sap/m/MessageBox"

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
          { key: "2025", text: "2025" },
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

    },
             _status : function(fiscalyear){
                var oODataModel = this.getView().getModel("Catalog");
                var Filter1 = new sap.ui.model.Filter("fiscalYear", sap.ui.model.FilterOperator.EQ, fiscalyear);
                var Filter2 = new sap.ui.model.Filter("businessFunction", sap.ui.model.FilterOperator.EQ, 'Quality_Assurance');
                var pathBf = "/qualitative_data";
                    oODataModel.read(pathBf,{
                        urlParameters: {
                            "$expand": "quality_assurance",
                        },
                        filters : [Filter1,Filter2],
                        success : function(data){
                          that.getView().byId("id_answ1q").setValue(data.results[0].quality_assurance.results[0].answer);                        
                          that.getView().byId("id_answ2q").setValue(data.results[0].quality_assurance.results[1].answer);                    
                          that.getView().byId("id_answ5").setValue(data.results[0].quality_assurance.results[4].answer);                        
                          that.getView().byId("id_answ6").setValue(data.results[0].quality_assurance.results[5].answer);                      
                          that.getView().byId("id_answ7").setValue(data.results[0].quality_assurance.results[6].answer);                        
                          that.getView().byId("id_answ8").setValue(data.results[0].quality_assurance.results[7].answer);                       
                          that.getView().byId("id_answ9").setValue(data.results[0].quality_assurance.results[8].answer);
                        
                        },
                        error : function(error){
                         console.log(error);
                        }
                     });
                    
             },
             _getQ3Table : function(fiscalyear){
              var oODataModel = this.getView().getModel("Catalog");
              var oTable3 = this.getView().byId("_IDGenTable1");
                var pathBf = "/qualitative_data_quality_assurance(up__fiscalYear='" + fiscalyear + "',up__businessFunction='Quality_Assurance',principle='2',indicator='Leadership',questionID='1L')/principle2_leadership_1";
                oODataModel.read(pathBf,{
                        success : function(data){
                          for(let i=0;i<data.results.length;i++){
                            let oItem = new sap.m.ColumnListItem({
                                  cells: [new sap.m.TextArea({maxLength: 1500 , value:data.results[i].nic_code,editable : false, wrapping: "Hard"}), 
                                  new sap.m.TextArea({maxLength: 1500 , value:data.results[i].name_of_product_or_service,editable : false, wrapping: "Hard"}),
                                  new sap.m.TextArea({maxLength: 1500 , value:data.results[i].total_turnover_contributed,editable : false, wrapping: "Hard"}),
                                  new sap.m.TextArea({maxLength: 1500 , value:data.results[i].boundry_of_life_cycle_assessment,editable : false, wrapping: "Hard"}),
                                  new sap.m.TextArea({maxLength: 1500 , value:data.results[i].conducted_by_independent_external_agency,editable : false, wrapping: "Hard"}),
                                  new sap.m.TextArea({maxLength: 1500 , value:data.results[i].results_communicated_in_public_domain,editable : false, wrapping: "Hard"})
                                      ]
                                  
                              })
                              oTable3.addItem(oItem);

                    }

                        },
                        error : function(error){
                            console.log(error);

                        }
                    });
                    
             },
             _getQ4Table : function(fiscalyear){
              var oODataModel = this.getView().getModel("Catalog");
              var oTable4 = this.getView().byId("_IDGenTable2");
                var pathBf = "/qualitative_data_quality_assurance(up__fiscalYear='" + fiscalyear + "',up__businessFunction='Quality_Assurance',principle='2',indicator='Leadership',questionID='2L')/principle2_leadership_2";
                    oODataModel.read(pathBf,{
                        success : function(data){
                          for(let i=0;i<data.results.length;i++){
                                  let oItem = new sap.m.ColumnListItem({
                                        cells: [new sap.m.TextArea({ maxLength: 1500 , value:data.results[i].name_of_product_or_service,editable : false,wrapping: "Hard", width:"100%"}), 
                                                new sap.m.TextArea({  maxLength: 1500 , value:data.results[i].description_of_risk_or_concern,editable : false, wrapping: "Hard", width:"100%"}), 
                                                new sap.m.TextArea({ maxLength: 1500 , value:data.results[i].action_taken,editable : false,  wrapping: "Hard" , width:"100%"})
                                            ]
                                        
                                    })
                                    oTable4.addItem(oItem);

                          }

                        },
                        error : function(error){
                            console.log(error);

                        }
                    });
                    
             },
    /////EHS Data Fetch//////////////
    
    ehsdata: function(fyear){
        var oODataModel = this.getView().getModel("Catalog");
        var Filter1 = new sap.ui.model.Filter("fiscalYear", sap.ui.model.FilterOperator.EQ, fyear);
        var Filter2 = new sap.ui.model.Filter("businessFunction", sap.ui.model.FilterOperator.EQ, 'IT');
        oODataModel.read("/qualitative_data", {
            urlParameters: {
                "$expand": "IT",
            },
            filters: [Filter1,Filter2],
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

    onPushRowPress: function (oEvent) {
      var sTableId = oEvent.getSource().data("Table2");
      this.handlePushRowPress(sTableId);
    },



    onCreateRow1: function () {
      console.log(" onCreateRow2 function is invoked");
      const oTable = this.byId("Table1");
      const oBinding = oTable.getBinding("items");
      const oContext = oBinding.create({ /* initial data for the new entry */ });

      // Handle errors if creating the new entry fails
      oContext.created().catch(function (error) {
        // Handle the error, e.g., show a message to the user
        sap.m.MessageToast.show("Error creating a new entry: " + error.message);
      });


    },
    onCreateRow2: function () {
      console.log(" onCreateRow2 function is invoked");
      const oTable = this.byId("Table2");
      const oBinding = oTable.getBinding("items");
      const oContext = oBinding.create({ /* initial data for the new entry */ });

      // Handle errors if creating the new entry fails
      oContext.created().catch(function (error) {
        // Handle the error, e.g., show a message to the user
        sap.m.MessageToast.show("Error creating a new entry: " + error.message);
      });


    },
    onCreateRow9: function () {
      console.log(" onCreateRow2 function is invoked");
      const oTable = this.byId("Table9");
      const oBinding = oTable.getBinding("items");
      const oContext = oBinding.create({ /* initial data for the new entry */ });

      // Handle errors if creating the new entry fails
      oContext.created().catch(function (error) {
        // Handle the error, e.g., show a message to the user
        sap.m.MessageToast.show("Error creating a new entry: " + error.message);
      });


    },
    onCreateRow11: function () {
      console.log(" onCreateRow2 function is invoked");
      const oTable = this.byId("Table11");
      const oBinding = oTable.getBinding("items");
      const oContext = oBinding.create({ /* initial data for the new entry */ });

      // Handle errors if creating the new entry fails
      oContext.created().catch(function (error) {
        // Handle the error, e.g., show a message to the user
        sap.m.MessageToast.show("Error creating a new entry: " + error.message);
      });


    },



    onAfterRendering: function () {
      // Automatically select the first row when the table is rendered
      var oTable = this.byId("Table1");
      var oFirstItem = oTable.getItems()[0];

      if (oFirstItem) {
        oTable.setSelectedItem(oFirstItem);
      }
    },

    onDeleteRow1: function () {
      var oTable = this.byId("Table1");
      var oSelectedItem = oTable.getSelectedItem();

      if (!oSelectedItem) {
        sap.m.MessageToast.show("No row selected for deletion.");
        return;
      }

      var oBinding = oTable.getBinding("items");
      var oContext = oSelectedItem.getBindingContext("Catalog");

      if (oContext) {
        oContext.getModel().remove(oContext.getPath(), {
          success: function () {
            // Entry deleted successfully, you can update the table
            oBinding.refresh();
            sap.m.MessageToast.show("Entry deleted successfully");
          },
          error: function (error) {
            // Handle the error, e.g., show a message to the user
            sap.m.MessageToast.show("Error deleting entry: " + error.message);
          }
        });
      } else {
        sap.m.MessageToast.show("No context found for the selected item.");
      }

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
        if (oItem.getCells()[1].getValue() !== "") {
          oRowData2.nicCode = oItem.getCells()[1].getValue();
        } else {
          oRowData2.nicCode = "NA";
        }
        if (oItem.getCells()[1].getValue() !== "") {
          oRowData2.totalTurnoverContributed = oItem.getCells()[1].getValue();
        } else {
          oRowData2.totalTurnoverContributed = "NA";
        }

        // Add the row data to the array for Table2
        aTable2Data.push(oRowData2);
      }
      var abcArr = []

      if (textAreaValue1 == "") {
        textAreaValue1 = "NA";
      }

      var q1 = {
        "section": "A",
        "questionID": "1",
        "answer": textAreaValue1 // Remove double quotes here
      };

      abcArr.push(q1);

      console.log("abcArr:", abcArr);

      if (textAreaValue2 == "") {
        textAreaValue2 = "NA";
      }

      var q2 = {
        "section": "A",
        "questionID": "2",
        "answer": textAreaValue2 // Remove double quotes here
      };

      abcArr.push(q2);

      console.log("abcArr:", abcArr);
      if (textAreaValue3 == "") {
        textAreaValue3 = "NA";
      }

      var q3 = {
        "section": "A",
        "questionID": "3",
        "answer": textAreaValue3 // Remove double quotes here
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
      console.log("Payload for Table1 to be saved:", q16);


      var q17 = {
        section: "A",
        questionID: "17",
        Table2: aTable2Data
      };
      abcArr.push(q17);

      console.log("Payload for Table2 to be saved:", q17);


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


  });
});