sap.ui.define([
  "sap/m/DateTimeInput",
], function (Control) {
  "use strict";
  return Control.extend("shambles.demo.control.scDateTime",{
    metadata:{
      properties:{
        dateDisplayType :{type:"string"}
      }
    },
    init : function(){
    },
    setDateDisplayType:function(type){
      console.log(type)
      this.mProperties.displayFormat = new sap.ui.model.type.DateTime({style:type}).getOutputPattern();
    },
    renderer:{}
  })
}
)
