Ext.define('FindACab.view.Overview', {
    extend: 'Ext.List', //<1>
    xtype: 'overview',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
        emptyText: 'No data', //<2>
        grouped: true, //<3>
        itemTpl: '<span class="distance">' +
            '{[values.distance.toFixed(2)]}' +
                '</span> {name:ellipsis(16, true)} ', //<4>
        onItemDisclosure: true, //<5>

    	items: [{ //<6>
            xtype: 'titlebar',
            docked: 'top',
            title: 'Overview'
    	},{
            xtype: 'toolbar',
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            docked: 'bottom',
            ui: 'light',
            //<7>
            items: [{
                handler: function(){
                    this.fireEvent('filtername');
                },
                align: 'right',
                ui: 'small',
                text: 'name'
            },{
                handler: function(){
                    this.fireEvent('filterdistance');
                },
                align: 'right',
                ui: 'small',
                text: 'distance'
            }],
        }]
    }
});