Ext.define('VehicleApp.vehicle.Car', { //<1>
  mixins: { //<2>
    canBrake: 'VehicleApp.mixins.Brake', //<3>
    canDrive: 'VehicleApp.mixins.Drive'
  }
});
