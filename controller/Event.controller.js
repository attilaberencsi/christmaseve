sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("apa.dani.program.eventcalculator.controller.Event", {
			onInit: function () {
		var that = this;		
                var countDownDate = new Date("Dec 24, 2025 18:00:00").getTime();
                var oChristmasTimerTitle = this.getView().byId("idChristmasRemainingTimeTitle");
                var sDays = this.getView().getModel("i18n").getResourceBundle().getText("days");
                var sHours = this.getView().getModel("i18n").getResourceBundle().getText("hours");
                var sMinutes = this.getView().getModel("i18n").getResourceBundle().getText("minutes");
                var sSecs = this.getView().getModel("i18n").getResourceBundle().getText("seconds");

                // Update the count down every 1 second
                var x = setInterval(function() {
                
                  // Get today's date and time
                  var now = new Date().getTime();
        
                  // Find the distance between now and the count down date
                  var distance = countDownDate - now;
                
                  // Time calculations for days, hours, minutes and seconds
                  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                  // Display the result in the title element
                  oChristmasTimerTitle.setText( days + " " + sDays + "  " + hours + " " + sHours + "  " + minutes + " " + sMinutes + "  " + seconds + " " + sSecs );
                
                  // If the count down is finished, write some text
                  if (distance < 0) {
                    clearInterval(x);
                    oChristmasTimerTitle.setText(that.getView().getModel("i18n").getResourceBundle().getText("reachedChristmas"));
                  }
                }, 1000);
			}
		});
	});
