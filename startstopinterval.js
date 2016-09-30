function startStopInterval(start,fn,interval) {
 if ( start ) {
  if (startStopInterval.Id) return

  // Old way before ES6 (EcmaScript)
  if (interval === undefined) {
   interval = 1000;
  } 	
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