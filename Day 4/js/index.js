function $(id) {
	return typeof id === 'string' ? document.getElementById(id) : id;
}

window.onload = function(){
	for(var i = 0; i <5; i++){
		loadImg();
	}
	waterFall('main','box');
	window.onscroll = function () {
		if(checkWillLoadImg()){

		}
	}
}

function waterFall(parent,box) {
	//set all the parent of box to center
	//get all the boxes
	var allBox = $(parent).getElementsByClassName(box);
	//get the box's width
	var boxWidth = allBox[0].offsetWidth;
	//get the page width
	var screenWidth = document.body.clientWidth;
	//Get the columns
	var cols = Math.floor(screenWidth/boxWidth);
	//Set the css style width
	$(parent).style.cssText = 'width:' + boxWidth * cols + 'px; margin: 0 auto';

	var heightArr = [];
	for(var i = 0; i < allBox.length; i++){
		//get box height
		var boxHeight = allBox[i].offsetHeight;
		if(i<cols){
			//Push all the boxHeight into an array
			heightArr.push(boxHeight);
		}else{
			//Get the lowest height
			var minBoxHeight = Math.min.apply(null,heightArr);
			//Get the index of the lowest height
			var minBoxIndex = getMinIndex(minBoxHeight,heightArr);
			//Set box position,
			//allBox[i].style.position = 'absolute';
			allBox[i].style.top = minBoxHeight + 'px';
			allBox[i].style.left = minBoxIndex * boxWidth + 'px';
			heightArr[minBoxIndex] += boxHeight;
		}
	}

}

function getMinIndex(val,array) {
	for(var i = 0; i < array.length;i++){
		if(array[i]==val){
			return i;
		}
	}
}

function checkWillLoadImg() {
	//get all boxes
	var allBox = $('main').getElementsByClassName('box');
	//get last box
	var lastBox = allBox[allBox.length - 1];
	var lastBoxHeight = lastBox.offsetHeight / 2 + lastBox.offsetTop;
	//Get screen height
	var screenHeight = document.documentElement.clientHeight;

	var offSetTop = document.body.scrollTop;

	return lastBoxHeight < (screenHeight + offSetTop) ? true : false;
}

function loadImg() {
	var dataImg = {'data':[{'src':'wp_1.jpg'},{'src':'wp_2.jpg'},{'src':'wp_3.jpg'},{'src':'wp_4.jpg'},{'src':'wp_5.jpg'},{'src':'wp_6.jpg'},{'src':'wp_7.jpg'},{'src':'wp_8.jpg'},{'src':'wp_9.jpg'}]};
     console.log(dataImg);
	for(var i=0; i<dataImg.data.length; i++){
		var newBox = document.createElement('div');
		newBox.className = 'box';
		$('main').appendChild(newBox);
		var newPic = document.createElement('div');
		newPic.className = 'pic';
		newBox.appendChild(newPic);
		var img = document.createElement('img');
		img.src = 'Image/' + dataImg.data[i].src;
		newPic.appendChild(img);
	}
}