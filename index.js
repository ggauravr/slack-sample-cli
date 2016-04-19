var slackTerminal = require('slack-terminalize');

slackTerminal.init('xoxb-token', {}, {
	CONFIG_DIR: __dirname + '/config',
	COMMAND_DIR: __dirname + '/commands'
});
