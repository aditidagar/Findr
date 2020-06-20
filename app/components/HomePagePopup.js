import React from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import styles from "../assets/styles";
import {BlurView} from '@react-native-community/blur';
import {Button} from 'react-native-elements';
import {Overlay} from 'react-native-elements';

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
            Picture: props.Image};
    }

    componentWillReceiveProps(props){
        if (this.state.isVisible !== props.isVisible) {
            this.setState({isVisible: props.isVisible})
        };
        if (this.state.Name !== props.name){
            this.setState({Name: props.name})
        }
        if (this.state.Picture !== props.picture){
            this.setState({Picture: props.picture})
        }
    }

    render() {
        console.log(this.state.Picture)
        return (
            <Modal 
            visible={this.state.isVisible} 
            onBackdropPress={() => this.setState({ isVisible: false })}
            style={styles.homePageCard}
            transparent={true}
            animationType={"fade"}
            >
                {/* <BlurView 
                blurType="xlight"
                style={{backgroundColor: "white"}}
                > */}
                <View>
                    <Text style={styles.usernameHome}>{this.state.Name}</Text>
                    <Text style={styles.match}>It's a Match!</Text>
                    <View style={styles.chatButton}>
                        <Button title="Chat" type="outline" titleStyle={styles.buttonText}
                        buttonStyle={styles.chatButtonStyle}
                        />
                    </View>
                    <View style={styles.ignoreButton}>
                        <Button title="Ignore" type="outline" titleStyle={styles.ignoreText}
                        buttonStyle={styles.ignoreButtonStyle}/>
                    </View>
                </View>
                <Overlay isVisible={true} onBackdropPress={()=> this.setState({isVisible: false})}>
                {/* </BlurView> */}
                </Overlay>
            </Modal>
        );
    }
}

export default HomePagePopup;
