var exp = Math.exp

exports =
module.exports =
function MovingAverage (timespan) {
  if (typeof timespan !== 'number') { throw new Error('must provide a timespan to the moving average constructor') }

  if (timespan <= 0) { throw new Error('must provide a timespan > 0 to the moving average constructor') }

  var ma     // moving average
  var v = 0  // variance

  var previousTime
  var ret = {}

  function alpha (t, pt) {
    return 1 - (exp(-(t - pt) / timespan))
  }

  ret.push =
  function push (time, value) {
    if (previousTime) {
      // calculate moving average
      var diff = value - ma
      var a = alpha(time, previousTime)
      var incr = a * diff
      ma = a * value + (1 - a) * ma
      v = (1 - a) * (v + diff * incr)
    } else {
      ma = value
    }
    previousTime = time
  }

  // Exponential Moving Average

  ret.movingAverage =
  function movingAverage () {
    return ma
  }

  // Variance
  ret.variance =
  function variance () {
    return v
  }

  return ret
}
