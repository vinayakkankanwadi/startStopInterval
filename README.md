# startStopInterval
Easily start and stop multiple functions uisng setInterval and clearInterval.

[![Build Status](https://travis-ci.org/vinayakkankanwadi/startStopInterval.svg?branch=master)](https://travis-ci.org/vinayakkankanwadi/startStopInterval)
[![npm version](https://badge.fury.io/js/startstopinterval.png)](https://badge.fury.io/js/startstopinterval)
[![Issue Count](https://codeclimate.com/repos/57f0d662762539006c007be9/badges/9188f8cd47a655a05661/issue_count.svg)](https://codeclimate.com/repos/57f0d662762539006c007be9/feed)
[![Test Coverage](https://codeclimate.com/repos/57f0d662762539006c007be9/badges/9188f8cd47a655a05661/coverage.svg)](https://codeclimate.com/repos/57f0d662762539006c007be9/coverage)
[![Known Vulnerabilities](https://snyk.io/test/github/vinayakkankanwadi/startstopinterval/4b139fc03c5c21f584b62bec9148d49c63b7442e/badge.svg)](https://snyk.io/test/github/vinayakkankanwadi/startstopinterval/4b139fc03c5c21f584b62bec9148d49c63b7442e)

Problem
========
Often one may come across the need of calling a function at specified intervals.
This is were the native setInterval function comes to use.  
However at times it could 'get messy' and gets better if you add multiple functions into the mix.

Solution
========
It would be nice if one had a function to start and stop a particular function executing at specified intervals.
Thus the need for "startStopInterval" to make it simple and easy.
This is intended to 
- start and stop a function 
- start and stop multiple functions
- pass arguments to function(s)
- provide interval to function(s)

Install
========
```
npm install startstopinterval
```

Usage
======
```javascript
//Step 1: Require startstopinterval.
var ssi= require("startstopinterval");
```

```javascript
// Step 2: start by passing true in startstopinterval.
// functionToExecute - any function to call start at specified intervals.
// 1000              - interval
ssi.startStopInterval(true,functionToExecute,1000);
```

```javascript 
// Step 3: stop by passing false and functionToExecute in startstopinterval.
ssi.startStopInterval(false,functionToExecute);
```

Example
======
```
Example 1: Lazy usage in node.
https://github.com/vinayakkankanwadi/usingstartstopinterval
```
```javascript
var ssi= require("startstopinterval");

// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function fn() {
  var d = new Date();
  console.log(d);
}

console.log("start")
ssi.startStopInterval(true,fn,1000);

sleep(5000).then(() => {
 console.log("stop");
 ssi.startStopInterval(false,fn);
});
```

```
Example 2: Lazy function usage in html.
https://github.com/vinayakkankanwadi/startStopInterval/blob/master/demo.html
```
```javascript
<p id="demo"></p>

<button onclick="startStopInterval(true,fn)">Start time</button>
<button onclick="startStopInterval(false,fn)">Stop time</button>

<script type="text/javascript" src="startstopinterval.js"></script>
<script>
function fn() {
    var d = new Date();
    document.getElementById("demo").innerHTML = "Time:"+ d.toLocaleTimeString();
}
</script>
```

```
Example 3: Lazy multiple function usage in html.
https://github.com/vinayakkankanwadi/startStopInterval/blob/master/demo.html
```
```javascript
<p id="demo"></p>
<p id="demo1"></p>

<button onclick="startStopInterval(true,fn,1000)">Start time</button>
<button onclick="startStopInterval(false,fn)">Stop time</button>

<button onclick="startStopInterval(true,fn1,1000,[5,'one'])">Start time</button>
<button onclick="startStopInterval(false,fn1)">Stop time</button>

<script type="text/javascript" src="startstopinterval.js"></script>
<script>
function fn() {
    var d = new Date();
    document.getElementById("demo").innerHTML = "Time:"+ d.toLocaleTimeString();
}
function fn1(fnArguments) {
    var d = new Date();
    document.getElementById("demo1").innerHTML = fnArguments+"Time:"+ d.toLocaleTimeString();
}
</script>
```

Tests
=====
```shell
npm install
npm test
```

License
=======
```
https://github.com/vinayakkankanwadi/startStopInterval/blob/master/LICENSE
```
