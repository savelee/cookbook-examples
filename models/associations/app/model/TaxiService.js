Ext.define('AssociationsTest.model.TaxiService', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['id', 'name'],
        hasMany  : {
        	model: 'AssociationsTest.model.Car', 
        	name: 'cars',
        	foreignKey: 'taxiservice_id'
        }
    }
});