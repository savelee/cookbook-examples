Ext.onReady(function() {
    Ext.create('Ext.Panel', {
        layout: 'box',
        renderTo: Ext.getBody(),
        height: 220,
        margin: 10,
        cls: 'background',
        items: [
            {
                cls: 'box2',
                html: 'no flex set '
            }
        ]
    });
    
    Ext.create('Ext.Panel', {
        layout: 'box',
        renderTo: Ext.getBody(),
        height: 220,
        margin: 10,
        cls: 'background',
        items: [
            {
                cls: 'box2',
                flex: 2,
                html: 'flex: 2 '
            },
            {
                cls: 'box',
                flex: 1,
                html: 'flex: 1 '
            },
            {
                cls: 'box',
                flex: 1,
                html: 'flex: 1 '
            }
        ]
    });

       Ext.create('Ext.Panel', {
        layout: {
           type: 'box',
           orient: 'vertical'
        },
        renderTo: Ext.getBody(),
        height: 220,
        margin: 10,
        cls: 'background',
        items: [
            {
                cls: 'box2',
                html: 'no flex set '
            }
        ]
    });
       
   Ext.create('Ext.Panel', {
        layout: {
           type: 'box',
           orient: 'vertical'
        },
        renderTo: Ext.getBody(),
        height: 220,
        margin: 10,
        cls: 'background',
        items: [
            {
                cls: 'box',
                flex: 1,
                html: 'flex: 1'
            },
            {
                cls: 'box2',
                flex: 2,
                html: 'flex: 2'
            }
        ]
    });

});