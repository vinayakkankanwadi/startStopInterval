# startStopInterval
Publishing a simple package to npm startStop using setInterval and clearInterval

[![Build Status](https://travis-ci.org/vinayakkankanwadi/startStopInterval.svg?branch=master)](https://travis-ci.org/vinayakkankanwadi/startStopInterval)
[![npm version](https://badge.fury.io/js/startstopinterval.png)](https://badge.fury.io/js/startstopinterval)
[![Issue Count](https://codeclimate.com/repos/57f0d662762539006c007be9/badges/9188f8cd47a655a05661/issue_count.svg)](https://codeclimate.com/repos/57f0d662762539006c007be9/feed)
[![Test Coverage](https://codeclimate.com/repos/57f0d662762539006c007be9/badges/9188f8cd47a655a05661/coverage.svg)](https://codeclimate.com/repos/57f0d662762539006c007be9/coverage)

Install
========
`npm install startstopinterval`

Usage
======
```javascript
// Require startstopinterval.
var ssi= require("startstopinterval");

```

```javascript
// start by passing true in startstopinterval.
// fn here is any function what you would like to start
// 1000 here is interval
ssi.startStopInterval(true,fn,1000);

```

```javascript
// stop by passing false in startstopinterval.
ssi.startStopInterval(false);

```

Example
======
```javascript
// Lazy usage in node.
https://github.com/vinayakkankanwadi/usingstartstopinterval

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
 ssi.startStopInterval(false);
});
```

```javascript
// Lazy usage in html.
https://github.com/vinayakkankanwadi/startStopInterval/blob/master/demo.html

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

Tests
=====
```shell
npm install
npm test
```

License
=======
https://github.com/vinayakkankanwadi/startStopInterval/blob/master/LICENSE
