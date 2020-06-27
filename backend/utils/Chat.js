
const AWS_Presigner = require("./utils/AWSPresigner");

class Message {
	constructor(user, msg, timestamp) {
		this.user = user;
		this.msg = msg;
		this.timestamp = timestamp;
		this.media = [];
	}

	generateMediaToken () {
		var date = new Date();
		var token = "";
		var mediaToken = []
		for (var i = 0; i < this.media; i++ ){
			token = this.user + date.getTime() + i
			mediaToken.push(token);
		}
		this.media = mediaToken.splice();

		var URLS = [];
		for (var i = 0; i < this.media; i++ ){
			var url = await AWS_Presigner.generateSignedPutUrl("chatMedia/" + this.media[i]);
			URLS.push(url);
		}
		return URLS
	}

}

class Chat {
	constructor(user1, user2) {
		this.user1 = user1;
		this.user2 = user2;

		this.messages = [];
	}

	static parseJSON(obj) {
		const chat = new Chat(obj.user1, obj.user2);
		chat.messages = obj.messages;

		return chat;
	}

	newMessage(user, msg, timestamp) {
		var message = new Message(user, msg, timestamp);
		this.messages.push(message);
	}
}

module.exports.Chat = Chat;
