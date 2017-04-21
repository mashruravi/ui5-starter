sap.ui.define([ "demo/controller/BaseController" ], function(
		BaseController) {

	"use strict";

	return BaseController.extend("demo.controller.Home", {

		onDisplayNotFound : function(oEvent) {
			// Display the "not found" target without changing the hash
			this.getRouter().getTargets().display("notFound", {
				fromTarget : "home"
			});
		}
		
	});

});