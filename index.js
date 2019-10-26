module.exports = {
  power: function(workDone, timeTaken) {
    return workDone / timeTaken;
  },
  work: function(force, distance) {
    return force * distance;
  },
  axleTorque: function(force, radius) {
    return force * radius;
  },
  engTorque: function(axletorque, gearRatio, efficiency) {
    return axletorque / (gearRatio * efficiency);
  },
  wheelMass: function(mass, radiusOfGyration, radius) {
    return mass * (Math.pow(radiusOfGyration / radius), 2);
  },
  engineMass: function(mass, radiusOfGyration, radius, gearRatio, efficiency) {
    return (
      mass *
      (Math.pow(radiusOfGyration / radius), 2) *
      (gearRatio * gearRatio) *
      efficiency
    );
  }
};
