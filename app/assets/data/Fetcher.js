import { AsyncStorage } from "react-native";

const ENDPOINT = "http://dev.findrapp.ca"; // goes to localhost from avd
const PORT = 80;

class Fetcher {

    // need to add credentials to log-in to the backend server
    constructor(customEndpoint, customPort) {
        this.ENDPOINT = customEndpoint ? customEndpoint : ENDPOINT;
        this.PORT = customPort ? customPort : PORT;
    }

    async uploadImage(imgUri, uploadURL) {

        const xhr = new XMLHttpRequest();
        xhr.open('PUT', uploadURL);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('Image successfully uploaded to S3');
                } else {
                    console.log('Error while sending the image to S3');
                }
            }
        }

        xhr.setRequestHeader('Content-Type', 'image/jpg');
        xhr.send({ uri: imgUri, type: 'image/jpg'});
    }

    async requestSignUp(data) {
        return (await fetch(this.ENDPOINT + ":" + String(this.PORT) + "/new-user", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })).status;

    }

    async logIn(data) {
        let logInRes = (await (fetch(this.ENDPOINT + ":" + String(this.PORT) + "/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })));

        if(logInRes.status !== 200) {
            return { success: false, user: null };
        }
        let user = await logInRes.json();
        return { success: true, user }
    }

    async fetchCards(email) {        
        return await (await fetch(this.ENDPOINT + ":" + String(this.PORT) 
        + "/fetchProfileCards?email=" + email)).json();
    }

    async fetchUsersById(ids) {
        let users = await (await fetch(this.ENDPOINT + ":" + String(this.PORT) + "/fetchUsers_id", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ids })
        })).json()

        return users;
    }

    async fetchUser(email) {
        return await (await fetch(this.ENDPOINT + ":" + String(this.PORT) 
        + "/fetchUsers?email=" + email)).json();
    }

    async loadData(email) {

        let profileCards = await this.fetchCards(email);

        ids = [];
        profileCards.forEach((_card) => {
            ids.push(_card["user_id"]);
        });

        let users = await this.fetchUsersById(ids);
        users = this.mapUsersToHashTable(users);

        profileCards.forEach((_card) => {
            _card.name = users[_card.user_id].name;
            _card.image = users[_card.user_id].image;
        });

        return profileCards;
    }

    mapUsersToHashTable(users) {
        var dict = {};
    
        users.forEach((user) => {
          dict[user._id] = user;
        });
    
        return dict;
    }
}

export default Fetcher;
