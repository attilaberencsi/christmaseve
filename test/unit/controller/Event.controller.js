/*global QUnit*/

sap.ui.define([
	"apadani.program./eventcalculator/controller/Event.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Event Controller");

	QUnit.test("I should test the Event controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
