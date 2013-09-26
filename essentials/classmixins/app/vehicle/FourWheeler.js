Ext.define('VehicleApp.vehicle.FourWheeler', {//<1>
  mixins: {//<2>
    canBrake: 'VehicleApp.mixins.Brake', //<3>
    canDrive: 'VehicleApp.mixins.Drive',
    canJump: 'VehicleApp.mixins.Jump'
  }
});