Ext.define('VehicleApp.mixins.Drive', { //<1>
  drive: function(){ //<2>
    console.log(this.$className + ": Vrrrrooom");
  }
});
