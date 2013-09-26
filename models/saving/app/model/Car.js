Ext.define('SaveTest.model.Car', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{ name: 'id', type: 'int'},
			{ name: 'brand'},
		],
		proxy: {
            type: 'rest',
            url : '/cars'
        }
	}
});