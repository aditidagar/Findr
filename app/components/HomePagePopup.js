import React from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import styles from "../assets/styles";
import {BlurView} from '@react-native-community/blur';
import {Button} from 'react-native-elements';

const nameStyle = [
    {
      paddingBottom: 7,
      marginTop: 0,
      color: '#363636',
      fontSize: 20,
      alignSelf: 'center'
    }
  ];

class HomePagePopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isVisible: props.isVisible,
            Name: props.name,
            Image: props.Image};
    }

    componentWillReceiveProps(props){
        if (this.state.isVisible !== props.isVisible) {
            this.setState({isVisible: props.isVisible})
        };
        if (this.state.Name !== props.name){
            this.setState({Name: props.name})
        }
        if (this.state.Image !== props.Image){
            this.setState({Image: props.Image})
        }
    }

    render() {

        return (
            <Modal 
            visible={this.state.isVisible} 
            onBackdropPress={() => this.setState({ isVisible: false })}
            style={styles.homePageCard}
            >
                <Text style={styles.usernameHome}>{this.state.Name}</Text>
                <Text style={styles.match}>It's a Match!</Text>

                <View style={styles.chatButton}>
                    <Button title="Chat" type="clear" titleStyle={styles.buttonText}/>
                </View>
                <View style={styles.ignoreButton}>
                    <Button title="Ignore" type="clear" titleStyle={styles.buttonText}/>
                </View>
                {/* <Button title="Ignore"/> */}
            </Modal>
        );
    }
}

export default HomePagePopup;
