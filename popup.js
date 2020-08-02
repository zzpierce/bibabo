
var decodeBtn = document.getElementById('decode');
var urlBtn = document.getElementById('urlDecode');
var formatBtn = document.getElementById('format');

var t = document.getElementById('log-area');

decodeBtn.onclick = function () {
  var log = t.value;
  t.value = decode(log);
}

urlBtn.onclick = function () {
  t.value = decodeURIComponent(t.value);
}

formatBtn.onclick = function() {
  var json = JSON.parse(t.value);
  var j = JSON.stringify(json, null, " ");
  t.value = j;
}


function decode(log) {
  var ds = decodeURIComponent(log);
  var bs = atob(ds);
  var dec = pako.inflate(bs, { to: 'string' });
  return dec;
}