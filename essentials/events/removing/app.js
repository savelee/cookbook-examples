Ext.application({
    name: 'Events',

    launch: function() {

        var myEventHandler = function(b) {
            //button.un('tap', myEventHandler);
            button.removeListener('tap', myEventHandler);
            alert('You just removed the myEventHandler event, you can not invoke this again.');
        };

        var button = Ext.create('Ext.Button', {
            text: 'Click me',
            margin: 5,
            listeners: {
                tap: myEventHandler
            }
        });

        //just for testing purposes
        Ext.create('Ext.Container', {
            fullscreen: true,
            padding: 10,
            items: [button]
        });

    }
});