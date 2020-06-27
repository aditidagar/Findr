
const AWS_Presigner = require("./utils/AWSPresigner");

class Message {
	constructor(user, msg, timestamp, media) {
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

		var URLS = {};
		for (var i = 0; i < this.media; i++ ){
			var url = await AWS_Presigner.generateSignedPutUrl("chat_media/" + this.mediaToken[i]);
			URLS[media[i]] = url;
		}
		this.media = mediaToken;
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

	newMessage(user, msg, timestamp, media) {
		this.messages.push(new Message(user, msg, timestamp, media));
	}
}

module.exports.Chat = Chat;