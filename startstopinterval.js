//-----------------------------------------------------------------------------
// Java String.hashCode() implementation
// hasCode to generate hash
//----------------------------------------------------------------------------- 
function hashCode(str){
	var hash = 0;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

//-----------------------------------------------------------------------------
// startStopInterval function
//-----------------------------------------------------------------------------
function startStopInterval(start,fn,interval,fnArguments) {

//-----------------------------------------------------------------------------
// Create a Map if not defined
//----------------------------------------------------------------------------- 
 if ( startStopInterval.map === undefined ) {
	startStopInterval.map = new Map();
 //	console.log('map created');
 }
 //else {
 //	console.log('map present'); 
 //}
 
//-----------------------------------------------------------------------------
// Hash the function to get an hash id
//----------------------------------------------------------------------------- 
 var hash = hashCode(''+fn+'');
 //console.log(start,fn,interval,fnArguments,hash,startStopInterval.map);
 
 if ( start ) {
  //if (startStopInterval.Id) return
  if (startStopInterval.map.has(hash)) return

  // Old way before ES6 (EcmaScript)
  if (interval === undefined) {
   interval = 1000;
  } 	
  
  if (fnArguments === undefined) {
	//startStopInterval.Id = setInterval(fn, interval);
	var id = setInterval(fn, interval);
	startStopInterval.map.set(hash, id );
  }
  else {
	//startStopInterval.Id = setInterval(fn, interval, fnArguments);
	var aid = setInterval(fn, interval, fnArguments);
	startStopInterval.map.set(hash, aid );
  }
  //console.log(startStopInterval.map.get(hash));
 }
 else {
  //console.log(startStopInterval.map.get(hash));	 
  clearInterval(startStopInterval.map.get(hash))
  //console.log(startStopInterval.map.get(hash));
  startStopInterval.map.delete(hash);
  //console.log(startStopInterval.map.size);
 }
}

//-----------------------------------------------------------------------------
// Node and browser support
//-----------------------------------------------------------------------------
//module.exports ='Please do not do this unless you know'
//exports ='Please do not do this unless you know'
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
 exports.startStopInterval = startStopInterval;
}
else {
 window.startStopInterval = startStopInterval;
}
//-----------------------------------------------------------------------------
