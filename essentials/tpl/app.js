Ext.onReady(function() {

	var data = { 
	    name: 'Template',  
	    description: 'This is an example of how to configure a basic template.' 
	};

    Ext.create('Ext.Component', {
        tpl: '<h1>{name}</h1><p>{description}</p>',
        data: data,
        styleHtmlContent: true,
        cls: 'box',
        renderTo: Ext.getBody()
    });

});