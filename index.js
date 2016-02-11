var slackTerminal = require('slack-terminalize');

slackTerminal.init({
	SLACK_TOKEN: '<xoxb-your-token-here>'
}, {
	CONFIG_DIR: __dirname + '/config',
	COMMAND_DIR: __dirname + '/commands'
});
