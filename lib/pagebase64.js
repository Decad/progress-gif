var page = require('webpage').create(),
	url = phantom.args[0],
	size = phantom.args[1] || '';

if(!url) {
	//throw new Error('Url Not Set')
	phantom.exit()
}

size = size.split('x')

page.viewportSize = {
	width: ~~size[0] || 1024,
	height: ~~size[1] || 600
}


page.open(url, function(status){
	if(status === 'success'){
		console.log(page.renderBase64("png"))
		phantom.exit();
	} else {
		//throw new Error('Failed to load page')
	}
	phantom.exit()
})