Ext.application({
    name: 'Events',

    launch: function() {

        var myEventHandler = function(b) {
            alert('You used the ' + b.getText());
        };

        var button1 = Ext.create('Ext.Button', {
            text: 'Handler',
            margin: 5,
            handler: myEventHandler
        });

        var button2 = Ext.create('Ext.Button', {
            text: 'Listener',
            margin: 5,
            listeners: {
                tap: myEventHandler
            }
        });

        var button3 = Ext.create('Ext.Button', {
            margin: 5,
            text: 'on() method'
        });
        button3.on('tap', myEventHandler);

        var button4 = Ext.create('Ext.Button', {
            margin: 5,
            text: 'addListener() method'
        });
        button4.addListener('tap', myEventHandler);

        //just for testing purposes
        Ext.create('Ext.Container', {
            fullscreen: true,
            padding: 10,
            items: [button1, button2, button3, button4]
        });

    }
});