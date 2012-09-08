var fs = require('fs'),
	render = require('./lib/render.js'),
	dir = process.argv[2],
	file = process.argv[3],
	url = process.argv[4],
	count = 0,
	data = [],
	lastSave = new Date();

if(!file) throw new Error('No file/dir given')
if(!url) throw new Error('No url given')

if(! fs.existsSync(file)){
	throw new Error('File not found')
}

fs.watch(file, function(event, filename){
	if(new Date() > new Date(lastSave.getTime() + 1000)) {
		renderPage()
	}
})

function renderPage(){
	console.log("rendering page at", new Date().toLocaleTimeString())
	lastSave = new Date()
	render(url, null, function(err, stdout, stderr){
		if(err) throw err
		var base64Data = stdout.replace(/^data:image\/png;base64,/,"");
		var dataBuffer = new Buffer(base64Data, 'base64');
		data.push(dataBuffer)
		savepng(dataBuffer)
	})
}

function savepng(dataBuffer){
	fs.writeFile(dir + '/out' + count + '.png', dataBuffer, function(err){
		if(err) throw err
		count++
	})
}

renderPage()
