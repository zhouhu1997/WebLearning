function $(id) {
	return typeof id === 'string' ? document.getElementById(id): id;
}

//when page loaded
window.onload = function () {
	//拿到所有的标题
	var titles = $('tab-header').getElementsByTagName('li');
	var divs = $('tab-content').getElementsByClassName('dom');
	console.log(divs);

	if (titles.length != divs.length) return;

	for(var i=0; i <titles.length; i++){
		//取出li标签
		var li = titles[i];
		li.id = i;
		console.log(li);
		li.onmousedown = function () {
			console.log(li.onmousedown());
			//Clean the data
			for(var j=0; j<titles.length; j++){
				titles[j].className = '';
				divs[j].style.display = 'none';
			}

			this.className = 'selected';
			divs[this.id].style.display = 'block';
		}
	}

}