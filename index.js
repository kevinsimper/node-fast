var Module = require('module')
var sget = require('sget')
var child_process = require('child_process')
var original = Module.prototype.require

Module.prototype.require = function (path) {
  try {
    var module = original.call(this, path)
  } catch (e) {
    console.log(e)
    var response = sget('Would you like to install "' + path + '"? y/n').trim()
    if(response === 'y') {
      var output = child_process.execSync('npm install ' + path).toString()
      module = original.call(this, path)
    } else {
      console.log('Could not continue!')
      throw e
    }
  }
  return module
}
