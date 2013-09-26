Ext.onReady(function() {

    var data = { 
        name: 'Ext.XTemplate',  
        description: 'This is an example of how to use Ext.XTemplate'
    };

    var myTpl = new Ext.XTemplate('<h1>{name}</h1><p>{description}</p>');

    Ext.create('Ext.Component', {
        tpl: myTpl,
        data: data,
        styleHtmlContent: true,
        cls: 'box',
        renderTo: Ext.getBody()
    });

});