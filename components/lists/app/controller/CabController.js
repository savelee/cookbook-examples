Ext.define('FindACab.controller.CabController', {
    extend: 'Ext.app.Controller',

    config: {
        models: ['Cab'],
        stores: ['Cabs'],

        refs: {
            'titlebar': 'overview titlebar',
            'overview': 'overview'
        },
        control: {
            'overview toolbar button': {
                filtername: 'setFilterName',
                filterdistance: 'setFilterDistance'
            }
        }
    },
    
    launch: function() {
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            indicator: true,
            message: 'Fetching Data...'
        });

        this.loadLocal();
    },

    loadLocal: function() {
        /*
         * Load the data from the local database and
         * check if database has some records.
         * if not, then download data else hide the loading mask.
         */
        var me = this;
        Ext.getStore('Cabs').load(function(item) {
            var count = Ext.getStore('Cabs').getCount();
            if (count < 1) {
                me.downloadData();
            } else {
                Ext.Viewport.unmask();
            }
        });
    },

    downloadData: function(location) {
        var me = this;

        if (!location) {
            Ext.getStore('Settings').load(function() {
                try {
                    var data = Ext.getStore('Settings').getAt(0);
                    var loc = data.get('city') + " " + data.get('country');
                    me.downloadData(loc);
                } catch (e) {
                    Ext.Viewport.unmask();

                    Ext.Msg.confirm(
                        "No location saved",
                        "Please prefill your location, to detect nearby Taxiservices.",
                        function(buttonId) {
                            if (buttonId === 'yes') {
                                me.getApplication().getController('SettingsController').toggleSettings();
                            }
                        }
                    );
                }
            });

        } else {
            var store = Ext.getStore('Cabs');
            store.removeAll();
            store.supersync(function() {

                /* switch my client proxy to a server proxy */
                store.setProxy({
                    type: 'jsonp',
                    url: Utils.Commons.YELP_API,
                    //type: "ajax",
                    //url : "data/data.json",
                    //noCache: false,
                    extraParams: {
                        term: Utils.Commons.YELP_TERM,
                        ywsid: Utils.Commons.YELP_KEY,
                        location: location
                    },
                    reader: {
                        type: 'json',
                        rootProperty: 'businesses',
                    }
                });

                /* and download the data, on the success callback
                 * I will run the syncRecords() controller function */
                Ext.getStore('Cabs').load(function(records) {
                    me.syncRecords(records, location);
                });
            });
        }
    },

    syncRecords: function(records, userinput) {
        /* 
         * Loop through all the items that are downloaded
         * and add these to the items array.
         */
        var items = [];
        var me = this;
        var total = records.length;
        var i = 0;

        for(i;i<total;i++) {
            var item = records[i];
            items.push({
                'name': item.get('name'),
                'latitude': item.get('latitude'),
                'longitude': item.get('longitude'),
                'address1': item.get('address1'),
                'phone': item.get('phone'),
                'state_code': item.get('state_code'),
                'zip': item.get('zip'),
                'city': item.get('city'),
                'country_code': item.get('country_code'),
                'avg_rating': item.get('avg_rating'),
                'distance': item.get('distance'),
                'userinput': userinput
            });

        };

        /* 
         * Switch the Cabs Store proxy back to the
         * SQL local proxy
         */
        Ext.getStore('Cabs').setProxy({
            type: 'sql',
            database: "FindACab",
            table: 'Cabs'
        });

        /* 
         * Add the items array to the Cabs Store
         * and sync() the store to start saving the
         * records locally.
         * When it is done, we can remove the Loading mask.
         */
        Ext.getStore('Cabs').removeAll();
        Ext.getStore('Cabs').add(items);
        Ext.getStore('Cabs').supersync(function(recs) {
            me.loadMarkers(Ext.ComponentQuery.query('map')[0]);
            me.setTitleCount(recs.getCount());
            Ext.Viewport.unmask();
        });

    },
    
    setFilterName: function() {
        Ext.getStore('Cabs').sort('name');
        Ext.getStore('Cabs').load();
    },
    setFilterDistance: function() {
        Ext.getStore('Cabs').sort('distance');
        Ext.getStore('Cabs').load();
    },
    setTitleCount: function(count) {
        var t = Ext.String.format('Cabs ({0})', count);
        this.getTitlebar().setTitle(t);
    }

});