var numbers = [1, 5, 10, 15];
var doubles = numbers.map(x => {
    return x * 2;
});
console.log(numbers);
console.log(doubles);

console.log('------------------------------------');
var sn = {
    result: [{
        sys_id: '439e1f40db400300ae1f7e7dbf961986',
        sys_updated_by: 'admin',
        sys_created_on: '2017-07-14 18:26:27',
        browser: 'safari',
        sys_mod_count: '0',
        sys_updated_on: '2017-07-14 18:26:27',
        sys_tags: '',
        sys_created_by: 'admin'
    }, {
        sys_id: '8b9e9f00db400300ae1f7e7dbf961962',
        sys_updated_by: 'admin',
        sys_created_on: '2017-07-14 18:26:27',
        browser: 'chrome',
        sys_mod_count: '0',
        sys_updated_on: '2017-07-14 18:26:27',
        sys_tags: '',
        sys_created_by: 'admin'
    }, {
        sys_id: '8b9edfccdb400300ae1f7e7dbf961934',
        sys_updated_by: 'admin',
        sys_created_on: '2017-07-14 18:26:27',
        browser: 'firefox',
        sys_mod_count: '0',
        sys_updated_on: '2017-07-14 18:26:27',
        sys_tags: '',
        sys_created_by: 'admin'
    }, {
        sys_id: 'c79edfccdb400300ae1f7e7dbf96194d',
        sys_updated_by: 'admin',
        sys_created_on: '2017-07-14 18:26:27',
        browser: 'iexplore',
        sys_mod_count: '0',
        sys_updated_on: '2017-07-14 18:26:27',
        sys_tags: '',
        sys_created_by: 'admin'
    }, {
        sys_id: 'cf9edfccdb400300ae1f7e7dbf96194e',
        sys_updated_by: 'admin',
        sys_created_on: '2017-07-14 18:26:27',
        browser: 'opera',
        sys_mod_count: '0',
        sys_updated_on: '2017-07-14 18:26:27',
        sys_tags: '',
        sys_created_by: 'admin'
    }]
};

var mapped = sn.result.map(entry => {
	var obj = {};
	obj[entry.browser] = entry.sys_id;
	return obj;
});

console.log(mapped);

var mapped2 = toObject(sn.result);
console.log(mapped2);
console.log(mapped2['chrome']);
console.log(mapped2.firefox);

function toObject(array){
	var obj = {};
	for(var x in array){
		obj[array[x].browser] = array[x].sys_id;
	}
	return obj;
}