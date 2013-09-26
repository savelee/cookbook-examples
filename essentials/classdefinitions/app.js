Ext.application({
    name: 'DemoApp',
    launch: function() {


        /* Start Class Definition code: */

        //Create a class definition
        Ext.define('DemoApp.view.DemoComponent', { //<1>
            //<2>
            extend: 'Ext.Component',
            config: {
                html: 'Hello world' //<3>
            }

        }, function() {
            console.log("class is created"); //<4>
        });


        //Create a class instance 
        Ext.create('DemoApp.view.DemoComponent', { //<5>
            fullscreen: true
        });

        
    }
});