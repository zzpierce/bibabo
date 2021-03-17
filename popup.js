
var decodeBtn = document.getElementById('decode');
var urlBtn = document.getElementById('urlDecode');
var formatBtn = document.getElementById('format');
var buildReqBtn = document.getElementById('buildReq');
var unicodeBtn = document.getElementById('unicode');

//转义
var escapeBtn = document.getElementById("escape");
var unescapeBtn = document.getElementById("unescape");

//去除空格
var compactBtn = document.getElementById("compact");

var t = document.getElementById('log-area');

decodeBtn.onclick = function () {
  var log = t.value;
  t.value = decode(log);
}

urlBtn.onclick = function () {
  t.value = decodeURIComponent(t.value);
}

formatBtn.onclick = function () {
  var json = JSON.parse(t.value);
  var j = JSON.stringify(json, null, " ");
  t.value = j;
}

buildReqBtn.onclick = function () {
  var json = JSON.parse(t.value);
  t.value = buildFormReq(json);
}

unicodeBtn.onclick = function () {
  data = t.value.split("\\u");
  var str = '';
  for (var i = 0; i < data.length; i++) {
    str += String.fromCharCode(parseInt(data[i], 16).toString(10));
  }
  t.value = str;
}

escapeBtn.onclick = function() {
  var val = t.value;
  t.value = val.replace(/\"/g, "\\\"")
}

unescapeBtn.onclick = function() {
  var val = t.value;
  t.value = val.replace(/\\/g, "")
}

compactBtn.onclick = function() {
  var val = t.value;
  t.value = val.replace(/\s*/g,"");
}

function decode(log) {
  var ds = decodeURIComponent(log);
  var bs = atob(ds);
  var dec = pako.inflate(bs, { to: 'string' });
  return dec;
}

function buildFormReq(data) {
  var req = '';
  var index = 0;
  for (var key in data) {
    if (key != 'url') {
      var an = index == 0 ? '' : '&';
      req = req + an + key + '=' + data[key];
      index++;
    }
  }
  return req;
}