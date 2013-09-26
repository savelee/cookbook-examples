Ext.define('AssociationsTest.model.Car', {
    extend: 'Ext.data.Model',

    config: {
        fields: [{
            name: 'id',
            type: 'int'
        }, {
            name: 'brand'
        }, {
            name: 'taxiservice_id',
            type: 'int'
        }],
        belongsTo: {
            model: 'AssociationsTest.model.TaxiService'
        },
        //proxy: {
        //    type: 'ajax',
        //    url: 'test.json' //notice the filter request
        //}
    }
});
