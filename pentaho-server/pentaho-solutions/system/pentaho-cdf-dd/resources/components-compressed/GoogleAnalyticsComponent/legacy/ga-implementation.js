var googleAnalyticsComponent=BaseComponent.extend({update:function(){jQuery.globalEval('$(document).ready( function() { $.ga.load("'+this.gaTrackingId+'"); } );');
}});