import React from 'react';
import { View, AsyncStorage, Image } from 'react-native';
import styles from '../assets/styles';
import { DefaultTheme, Provider as PaperProvider, TextInput, RadioButton, Dialog, Button } from 'react-native-paper';
import Fetcher from '../assets/data/Fetcher';

const labelStyle = { 
    colors: { 
        text: 'white', 
        placeholder: 'darkgrey',
        label: '#2c9c91'
    } 
};

// const theme = {
//     colors: {
//         ...DefaultTheme.colors,
//         accent: "#FFFFFF"
//     },
// };

const textBoxStyle = { 
    width: '75%',
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    marginBottom: "8%"
};

function validateEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

function validatePassword(password) {
    return password.length > 2;
}

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            emailMode: 'outlined',
            passMode: 'outlined',
            email: "",
            password: "",
            isEmailValid: false,
            isPasswordValid: false,
        };
    }

    handleEmailChange(text) {
        if(validateEmail(text.toLowerCase())) {
            this.setState({ isEmailValid: true, email: text });
            return;
        }
        this.setState({ isEmailValid: false, email: text.toLowerCase() });
    }

    handlePasswordChange(text) {
        if(validatePassword(text)) {
            this.setState({ isPasswordValid: true, password: text });
            return;
        }
        this.setState({ password: text, isPasswordValid: false });
    }

    async handleSubmit() {
        if(!this.state.isEmailValid || !this.state.isPasswordValid) {
            console.log(this.state);
            console.log('invalid inputs');
            return;
        }
        const requestHandler = new Fetcher();
        const data = {
            email: this.state.email,
            password: this.state.password,
        }

        const logInAttempt = await requestHandler.logIn(data);
        if(logInAttempt.success) {
            // store email
            const credSaveStatus = await AsyncStorage.setItem('storedEmail', logInAttempt.user.email);
            this.props.navigation.navigate('AppScreen');
        }
        else {
            // let user know they fucked up
            console.log(logInAttempt);
        }

    }

    render() {
        return (
            <View style={{backgroundColor: "#164e48", width: "100%", height: "100%", padding: '3%' }}>
                <Image style={styles.loginlogo} source={require('../assets/images/Findr_white2x.png')}/>
                <TextInput
                    mode={this.state.emailMode}
                    value={this.state.email}
                    label='Email'
                    placeholder="email@example.com"
                    onFocus={() => this.setState({ emailMode: 'flat' })}
                    onBlur={() => { if(this.state.email.length === 0) { this.setState({ emailMode: 'outlined' }); } }}
                    onChangeText={this.handleEmailChange.bind(this)}
                    theme={labelStyle}
                    style={textBoxStyle}
                />

                <TextInput
                    secureTextEntry={true}
                    mode={this.state.passMode}
                    value={this.state.password}
                    label='Password'
                    placeholder="Enter your new password"
                    onFocus={() => this.setState({ passMode: 'flat' })}
                    onBlur={() => { if(this.state.password.length === 0) { this.setState({ passMode: 'outlined' }); } }}
                    onChangeText={this.handlePasswordChange.bind(this)}
                    theme={labelStyle}
                    style={textBoxStyle}
                />

                <Button mode="contained" onPress={this.handleSubmit.bind(this)} style={styles.loginbutt}>
                    Log in
                </Button>
            </View>
        );
    }
}

export default LogIn;