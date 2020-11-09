/*
 * @Descripttion:
 * @version:
 * @Author: lubaicen
 * @Date: 2020-11-09 15:13:32
 * @LastEditors: lubaicen
 * @LastEditTime: 2020-11-09 15:46:45
 */
let fs = require('fs');

fs.readFile('hello.txt', { flag: 'r', encoding: 'utf-8' }, function (err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
		lcEvent.emit('fileSuccess', data);
		// 1.查看数据库所有的用户详细信息
		// 2.统计年龄比例
		// 3.查看所有用户学校的详细信息
	}
});

let lcEvent = {
	event: {
		// fileSuccess:[fn, fn, fn]
	},
	on: function (eventName, eventFn) {
		if (this.event[eventName]) {
			this.event[eventName].push(eventFn);
		} else {
			this.event[eventName] = [];
			this.event[eventName].push(eventFn);
		}
	},
	emit: function (eventName, eventMsg) {
		if (this.event[eventName]) {
			this.event[eventName].forEach((itemFn) => {
				itemFn(eventMsg);
			});
		}
	},
};

lcEvent.on('fileSuccess', function (eventMsg) {
	console.log('1.查看数据库所有的用户详细信息');
}),
lcEvent.on('fileSuccess', function (eventMsg) {
    console.log('2.统计年龄比例');
}),
lcEvent.on('fileSuccess', function (eventMsg) {
    console.log('3.查看所有用户学校的详细信息');
});