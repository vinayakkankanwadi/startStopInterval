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

//module.exports ='Please do not do this unless you know'
//exports ='Please do not do this unless you know'
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
 exports.startStopInterval = startStopInterval;
}
else {
 window.startStopInterval = startStopInterval;
}