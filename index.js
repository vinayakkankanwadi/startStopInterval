function startStopInterval(start,fn, interval=1000) {
 if ( start ) {
  if (startStopInterval.Id) return
  startStopInterval.Id = setInterval(fn, interval)
 }
 else {
  clearInterval(startStopInterval.Id)
  startStopInterval.Id = null
 }
}

if (typeof module !== 'undefined') {
	module.exports = startStopInterval;
}