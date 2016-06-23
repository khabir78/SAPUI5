sap.ui.jsview("zui5_git_test.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zui5_git_test.main
	*/ 
	getControllerName : function() {
		return "zui5_git_test.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zui5_git_test.main
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Git Test",
			content: [
			          new sap.m.Label({text: "Greeting"}),
			          new sap.m.Text({text: "Hello World!"})
			          
			]
		});
	}

});