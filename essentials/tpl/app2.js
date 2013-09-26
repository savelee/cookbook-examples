var data = { 
    name: 'Test',  
    description: 'This is an example of how to update a template on runtime.' 
};

var c = null;

Ext.onReady(function() {

    c = Ext.create('Ext.Component', {
        tpl: '<h1>{name}</h1><p>{description}</p>',
        data: data,
        styleHtmlContent: true,
        cls: 'box',
        renderTo: Ext.getBody()
    });

    data.name = "Test2";

    c.setData(data);
});