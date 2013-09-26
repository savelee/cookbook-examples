Ext.define('FindACab.controller.CabController', {
    extend: 'Ext.app.Controller',

    config: {
        models: ['Cab'],
        stores: ['Cabs'],
        markers: [], //<1>

        refs: {
            'titlebar': 'overview titlebar',
            'overview': 'overview',
            'detailView': 'detailview' //<2>
        },
        control: {
            'overview toolbar button': {
                filtername: 'setFilterName',
                filterdistance: 'setFilterDistance'
            },
            'map': {
                maprender: 'loadMarkers' //<3>
            },
            'overview': {
                select: 'prefillDetail' //<4>
            },
            'detailview button[action=close]': {
                close: 'onDetailClose' //<5>
            },
        }
    },

    launch: function() { },

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
                me.setTitleCount(count);
                //<6>
                me.setTitleCount(count);
                var lat = item[0].get('latitude');
                var lng = item[0].get('longitude');
                var position = new google.maps.LatLng(lat,lng);
                var map = Ext.ComponentQuery.query('map')[0];
                map.getMap().setCenter(position);
                me.loadMarkers(map, map.getMap());
                Ext.Viewport.unmask();;
            }
        });
    },

    downloadData: function(location) { },

    syncRecords: function(records, userinput) {
        /* 
         * Loop through all the items that are downloaded
         * and add these to the items array.
         */
         //...
        
        /* 
         * Switch the Cabs Store proxy back to the
         * SQL local proxy
         */
        //...
        
        /* 
         * Add the items array to the Cabs Store
         * and sync() the store to start saving the
         * records locally.
         * When it is done, we can remove the Loading mask.
         */
        Ext.getStore('Cabs').removeAll();
        Ext.getStore('Cabs').add(items);
        Ext.getStore('Cabs').supersync(function(recs) {
            me.loadMarkers(Ext.ComponentQuery.query('map')[0]); //<7>
            me.setTitleCount(recs.getCount());
            Ext.Viewport.unmask();
        });

    },

    setFilterName: function() { },
    setFilterDistance: function() { },
    setTitleCount: function(count) { },


    removeMarkers: function() { //<8>
        var me = this;
        me.getMarkers();

        for (var i = 0; i < me.getMarkers().length; i++) {
            me.getMarkers()[i].setMap(null);
        }
    },

    loadMarkers: function(comp, map) { //<9>
        var me = this,
            store = Ext.getStore('Cabs'),
            markers = me.getMarkers(),
            gm = comp.getMap(),
            list = me.getOverview();

        //clear markers when stored
        if (markers.length > 0) me.removeMarkers();

        store.each(function(item, index, length) {
            var latlng = new google.maps.LatLng(item.get('latitude'),
                item.get('longitude'));

            //center the map based on the latlng of the first item.
            if (index === 0) comp.setMapCenter(latlng); //<10>

            var marker = new google.maps.Marker({ //<11>
                map: gm,
                position: latlng,
                icon: 'resources/images/marker.png'
            });
            markers.push(marker);

            google.maps.event.addListener(marker, 'click', function() { //<12>
                var i = store.indexOf(item);
                list.select(i);
            });

            me.setMarkers(markers); //<13>
        });
    },

    prefillDetail: function(list, record) { //<14>
        this.getDetailView().getLayout().setAnimation({
            type: 'slide',
            direction: 'up'
        });
        this.getDetailView().setActiveItem(1);
        this.getDetailView().getActiveItem().setData(record.getData());
    },
    onDetailClose: function() { //<15>
        this.getDetailView().getLayout().setAnimation({
            type: 'slide',
            direction: 'down'
        });
        this.getDetailView().setActiveItem(0);
        this.getOverview().deselectAll();
    }

});