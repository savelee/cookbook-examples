/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': '../../touch/src',
    'Test': 'app'
});
//</debug>

Ext.application({
    name: 'Test',
    requires: ['Ext.Panel', 'Ext.Button'],
    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
    
        var panel = new Ext.Panel({
            layout: 'vbox',
            defaults: {
                xtype: 'button',
                margin: 3,
                ui: 'plain',
                width: 250
            },
            items: [{
                html: 'Overview buttons'
            },{
                iconCls: 'settings',
                text: 'settings - (y)'
            },{
                iconCls: 'delete',
                text: 'delete - (*)',
            }, {
                iconCls: 'detail',
                cls: 'x-list-disclosure',
                text: '.x-list-disclosure - ())'
            },
            {
                cls: 'callnow',
                text: 'custom button'
            }]
        });

        Ext.Viewport.add(panel);
    }
});
