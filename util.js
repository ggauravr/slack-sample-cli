/**
 * Wrapper function for postMessage from slack-client to handle formatting.
 * 
 * @param  { object } slack-client Channel boject
 * @param  { string } message to send to Slack channel
 * @param  { boolean } flag to indicate block formatting
 * @return { none }
 * 
 */
var postMessage = function (channel, response, format) {

	format = format || true;
	response = (format && '```' + response + '```') || response;

	channel.postMessage({
		as_user: true,
		text: response
	});

};

exports.postMessage = postMessage;