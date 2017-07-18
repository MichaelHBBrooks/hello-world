var country = 'USA';
var callback = function (num){
	console.log(country+num);
};

doSomething(callback);

function doSomething(cb){
	var id = 12;
	cb(id);
}