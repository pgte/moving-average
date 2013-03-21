var exp = Math.exp;
var pow = Math.pow;
var E = Math.E;

exports =
module.exports =
function MovingAverage(timespan) {
  if (typeof timespan != 'number')
    throw new Error('must provide a timespan to the moving average constructor');

  if (timespan <= 0)
    throw new Error('must provide a timespan > 0 to the moving average constructor');

  var ma;
  var previousTime;
  var ret = {};

  
  function alpha(t, pt) {
    return 1 - (exp(- (t - pt) / timespan * 60))
  }

  
  ret.push =
  function push(time, value) {
    if (previousTime) {
      var a = alpha(time, previousTime);
      ma = a * value + (1 - a) * ma;
    } else {
      ma = value;
    }
    previousTime = time;
  };

  ret.movingAverage =
  function movingAverage() {
    return ma;
  }

  return ret;

};