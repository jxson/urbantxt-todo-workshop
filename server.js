
var http = require('http')
var server = http.createServer(onrequest)
var colors = require('colors')
var st = require('st')
var path = require('path')
var marked = require('marked')
var fs = require('fs')
var mount = st({ path: path.join(__dirname, 'public')
    , passthrough: true
    , cache: false
    })

module.exports = server

if (! module.parent) server.listen(8080, onlisten)

function onrequest(req, res){
  if (req.url === '/') req.url = '/index.html'

  mount(req, res, function(){
    if (req.url === '/readme') readme(req, res)
    else error(req, res, 404)
  })
}

function readme(req, res){
  var filename = path.join(__dirname, 'README.md')

  fs.readFile(filename, 'utf8', function(err, data){
    if (err) return error(req, res, 404)

    var html = marked(data)

    res.statusCode = 200
    res.write(html)
    res.end()
  })
}

function error(req, res, status){
  res.statusCode = status
  res.end(status + 'error')
}

function onlisten(){
  console.log('==>'.yellow
  , 'http://localhost:8080'.grey
  , '<=='.yellow)
  console.log()
}
