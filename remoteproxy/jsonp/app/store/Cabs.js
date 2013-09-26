Ext.define('FindACab.store.Cabs', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.JsonP'],
    config: {
        model: 'FindACab.model.Cab',
        autoLoad: true,
        proxy: {
	        type: 'jsonp',
	        url: "http://api.yelp.com/business_review_search?" +
	        	"ywsid=ftPpQUCgfSA3yV98-uJn9g&term=Taxi&location=Amsterdam%20NL",
	        noCache: false,
	        reader: {
	        	type: 'json',
	        	rootProperty: 'businesses'
	        }
	    },
    }
});

