import React from "react";
import { View, ImageBackground, AsyncStorage, Image, Text, Dimensions,
TouchableOpacity} from "react-native";
import SettingsList from 'react-native-settings-list';
import styles from "../assets/styles";
import {Button} from "react-native-paper"

const DIMENTIONS = Dimensions.get('window');

const ICON_WIDTH = DIMENTIONS.width * 0.05;
const ICON_HEIGHT = DIMENTIONS.height * 0.03;

class Settings extends React.Component{
    constructor(){
        super();
        this.state = {switchValue: false};
      }
      render() {
        var bgColor = '#DCE3F4';
        return (
          <View style={{backgroundColor:'#EFEFF4',flex:1}}>
            <View style={{borderBottomWidth:1, backgroundColor:'#f7f7f8',borderColor:'#c8c7cc'}}>
              <Text style={{alignSelf:'center',top: 37,marginBottom:10,fontWeight:'bold',fontSize:20,
            color: "black"}}>Settings</Text>
              <Button style={styles.buttonSettings}>Done</Button>
              {/* <BackArrow width={ICON_WIDTH} height={ICON_HEIGHT} /> */}
            </View>
            <View style={{backgroundColor:'#EFEFF4',flex:1}}>
              <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>

                <SettingsList.Header headerStyle={{marginTop:15}}
                headerText="Contact Us"/>
                <SettingsList.Item
                  title='Help and Support'
                  titleStyle={{color: "black"}}
                  onPress={() => {}}
                />

                <SettingsList.Header headerStyle={{marginTop:15}}
                headerText="Community"/>
                <SettingsList.Item
                  title='Community Guidlines'
                  titleStyle={{color: "black"}}
                  onPress={() => {}}
                />
                <SettingsList.Item
                  title='Safety Tips'
                  titleStyle={{color: "black"}}
                  onPress={() => {}}
                />
                
                <SettingsList.Header headerStyle={{marginTop:15}}
                headerText="Legal"/>
                <SettingsList.Item
                  title='Privacy Policy'
                  titleStyle={{color: "black"}}
                  onPress={() => {}}
                />
                <SettingsList.Item
                  title='Terms and Services'
                  titleStyle={{color: "black"}}
                  onPress={() => {}}
                />
                <SettingsList.Item
                  title='Licenses'
                  titleStyle={{color: "black"}}
                  onPress={() => {}}
                />

                <SettingsList.Header headerStyle={{marginTop:15}} />

                <SettingsList.Item
                  title='Logout'
                  onPress={() => {}}
                  hasNavArrow={false}
                  titleStyle={styles.LogoutSettings}
                />
                
              </SettingsList>
              <Image source={require('../assets/images/Findr_logo2x.png')} 
                style={styles.logoSettings}/>

            <View style={styles.deleteAccountButton}>
              <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
                  <SettingsList.Item 
                  title="Delete Account"
                  onPress={()=> {}}
                  hasNavArrow={false}
                  titleStyle={styles.deleteAccount}
                  
                  />

              </SettingsList>
            </View>
            </View>
          </View>
        );
    }
}

export default Settings;