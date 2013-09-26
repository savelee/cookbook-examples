Ext.application({
    name: 'PointersDOM',
    requires: ['Ext.Button', 'Ext.form.Panel'],
    launch: function() {

        //just for testing purposes
        var button1 = Ext.create('Ext.Button', {
            text: 'Button with ID',
            id: 'mybutton',
            margin: 5
        });
        var button2 = Ext.create('Ext.Button', {
            text: 'Button',
            margin: 5
        });

        Ext.create('Ext.form.Panel', {
            fullscreen: true,
            padding: 10,
            items: [button1, button2]

        });

        //create the pointers
        //#1
        console.log("Ext.get('mybutton')", Ext.get('mybutton'));
        //#2
        console.log("Ext.getDom('mybutton')", Ext.getDom('mybutton'));
        //#3
        console.log("Ext.select('.x-button')", Ext.select('.x-button'));
        
        
    }
});