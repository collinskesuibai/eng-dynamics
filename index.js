module.exports = {
  power: function(workDone, timeTaken) {
    return workDone / timeTaken;
  },
  work: function(force, distance) {
    return force * distance;
  },
  axlT: function(force, radius) {
    return force * radius;
  },
  engT: function(axletorque, gearRatio, efficiency) {
    return axletorque / (gearRatio * efficiency);
  },
  wheelMass: function(mass, radiusOfGyration, radius) {
    return mass * (Math.pow(radiusOfGyration / radius), 2);
  },
  engMass: function(mass, radiusOfGyration, radius, gearRatio, efficiency) {
    return (
      mass *
      (Math.pow(radiusOfGyration / radius), 2) *
      (gearRatio * gearRatio) *
      efficiency
    );
  }
};
