jQuery.sap.declare("shambles.demo.Component");
sap.ui.core.UIComponent.extend("shambles.demo.Component", {
	metadata : {
		name : "customecontrols",
		version : "1.0",
		includes : [],
		dependencies : {
			libs : ["sap.m", "sap.ui.layout"],
			components : []
		},
		rootView : "shambles.demo.view.App"
	},

	init : function() {
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

		var mConfig = this.getMetadata().getConfig();
		var rootPath = jQuery.sap.getModulePath("shambles.demo");

		// set device model
		var deviceModel = new sap.ui.model.json.JSONModel({
			isTouch : sap.ui.Device.support.touch,
			isNoTouch : !sap.ui.Device.support.touch,
			isPhone : sap.ui.Device.system.phone,
			isNoPhone : !sap.ui.Device.system.phone,
			listMode : sap.ui.Device.system.phone ? "None" : "SingleSelectMaster",
			listItemType : sap.ui.Device.system.phone ? "Active" : "Inactive"
		});
		deviceModel.setDefaultBindingMode("OneWay");
		this.setModel(deviceModel, "device");
	}

});
