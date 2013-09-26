Ext.define('FindACab.controller.SettingsController', {
    extend: 'Ext.app.Controller',
    requires: ['FindACab.view.SettingsView'], //<1>
    config: {
        models:['Setting'],
        stores: ['Settings'],

        refs: { //<2>
            'settingsView': 'settingsview'
        },
        control: { //<3>
            'detailview #settingsbtn': {
                tap: 'toggleSettings'
            },
            'settingsview #close': {
                tap: 'toggleSettings'
            }
        }
    },

    init: function(){

        if (!this.overlay) { //<4>
            this.overlay = Ext.Viewport.add({ //<5>
                xtype: 'settingsview',
                modal: true,
                hideOnMaskTap: true,
                centered: true,
                width: '50%',
                height: 350,
                hidden: true, //6>
                showAnimation: { //<7>
                    type: 'popIn',
                    duration: 250,
                    easing: 'ease-out'
                },
                hideAnimation: { //<8>
                    type: 'popOut',
                    duration: 250,
                    easing: 'ease-out'
                }
            });
        }      
    },

    toggleSettings: function(){ //<9>
        if(this.getSettingsView().getHidden()) {
            this.getSettingsView().show();
        } else {
            this.getSettingsView().hide();
        }
    }

});