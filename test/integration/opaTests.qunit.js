/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["apa/dani/program/eventcalculator/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
