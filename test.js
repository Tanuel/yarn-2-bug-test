console.log(process.env.path);
const cp = require('child_process');
const y = cp.spawn('yarn.cmd', ['-v']);

y.stdout.on('data', (data) => {
	console.log('yarn', data.toString());
})