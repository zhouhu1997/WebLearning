var student = require('./student');
var teacher = require('./teacher');


function add(teacherName,studnets) {
	teacher.add(teacherName);
	studnets.forEach(function (item,index) {
		student.add(item);
	})
}

exports.add = add;