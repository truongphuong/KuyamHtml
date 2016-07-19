var inky = require('inky');

inky({
  src: 'index.html',
  dest: 'dist'
}, function() {
  console.log('Done parsing.');
});