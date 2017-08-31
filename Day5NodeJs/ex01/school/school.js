var klass = require('./class');

exports.add = function (klasses) {
	klasses.forEach(function (item, index) {

		var teacherName = item[0];
		var  students = item[1];
		console.log('=============');
		klass.add(teacherName,students);


	})
}