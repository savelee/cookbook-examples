Ext.onReady(function() {
    
    //Ext.require('Ext.Component') is not needed in this
    //example, because it makes use of the -all.js framework
    Ext.create('Ext.Component', {
        html: 'Hello world!',
        style : { background: 'red' },
        cls: 'box',
        width: 300,
        height: 100,
        renderTo: Ext.getBody()
    });

});