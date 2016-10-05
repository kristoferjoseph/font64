#!/usr/bin/env node
var encoding = 'utf8'
process.stdin.setEncoding(encoding)
var data = ''
process.stdin.on('readable', function() {
  var chunk
  while (chunk = process.stdin.read()) {
    data += chunk
  }
})
process.stdin.on('end', function() {
  data = data.replace(/\n$/, '');
  process.stdout.write(`@font-face {src: url(data:application/font-woff;base64,${data}) format("woff");}`)
})
