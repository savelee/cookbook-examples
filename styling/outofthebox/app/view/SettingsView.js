Ext.define('FindACab.view.SettingsView', {
    extend: 'Ext.form.Panel',
    xtype: 'settingsview',
    requires: [
            'Ext.TitleBar',
            'Ext.form.FieldSet'
    ],
    config: {
        layout: 'fit',
        title: 'SettingsView',
        items: [{
                xtype: 'titlebar',
                ui: 'light',
                docked: 'top',
                title: 'Settings',
                items: [{
                        iconCls: 'delete',
                        itemId: 'close',
                        ui: 'decline',
                        align: 'right'
                    }
                ]
            }, {
                xtype: 'fieldset',
                title: 'Your location',
                instructions: "In case you do not want the app to detect your location, you can prefill the city and country.",
                items: [{
                        name: 'city',
                        xtype: 'textfield',
                        label: 'City'
                    }, {
                        name: 'country',
                        xtype: 'textfield',
                        label: 'Country'
                    }, {
                        xtype: 'button',
                        text: 'Submit',
                        action: 'submit',
                        margin: 10,
                        ui: 'confirm'
                    }
                ]

            }

        ]
    }
});