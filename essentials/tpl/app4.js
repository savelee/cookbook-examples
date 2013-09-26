Ext.application({
    requires: ['Ext.dataview.DataView', 'Ext.data.Store', 'Ext.Component'],
    launch: function() {

        //create a data store with id: MyDataStore.
        Ext.create('Ext.data.Store', { 
            id:'MyDataStore', 
            fields: ['name', 'description'],
            data : [
                {name: "Test1", description: "Data from the store."},
                {name: "Test2", description: "Data from the store."}
            ]
        });    

        var myTpl = new Ext.XTemplate(
            '<tpl for=".">',
                '<div class="row">',
                    '<h1>{name}</h1><p>{description}</p>',
                '</div>',
            '</tpl>'
        );

        Ext.create('Ext.DataView', {
            itemTpl: '<h1>{name}</h1><p>{description}</p>',
            store: Ext.data.StoreManager.lookup('MyDataStore'),
            styleHtmlContent: true,
            cls: 'box',
            fullscreen: true,
            height: 250
        }); 

    }
});