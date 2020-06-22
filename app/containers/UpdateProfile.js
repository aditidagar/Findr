import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Keyboard,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Header, Image } from 'react-native-elements';
import { TextInput, DefaultTheme } from 'react-native-paper';

const theme = {
  colors: {
    ...DefaultTheme.colors,
    primary: 'transparent',
    text: 'white',
    placeholder: 'lightgrey',
    labelColor: 'black',
  },
};

const textBoxStyle = {
  width: '75%',
  height: 50,
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  alignSelf: 'center',
  backgroundColor: '#5EA39D',
  opacity: 0.5,
  marginBottom: '8%',
};

class UpdateProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.navigation.state.params.user_name,
      age: props.navigation.state.params.user_age,
      major: props.navigation.state.params.user_major,
    };
  }
  render() {
    return (
      <View>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle='light-content' // or directly
          centerComponent={{
            text: 'Update Profile',
            style: { color: '#fff' },
          }}
          containerStyle={{
            backgroundColor: '#008080',
            justifyContent: 'space-around',
          }}
        />
        <TextInput
          underlineColor='transparent'
          mode={'flat'}
          value={this.state.name}
          label='Enter Name'
          placeholder={this.state.name}
          theme={theme}
        />
        <TextInput
          underlineColor='transparent'
          mode={'flat'}
          value={this.state.age}
          label='Enter Age'
          placeholder={this.state.age}
          theme={theme}
        />
        <TextInput
          underlineColor='transparent'
          mode={'flat'}
          value={this.state.major}
          label='Enter Major'
          placeholder={this.state.major}
          theme={theme}
        />
        <TouchableOpacity style={styles.roundedButton}>
          <Text style={styles.textButton}> Update Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const ICON_FONT = 'tinderclone';
const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

import ProfileItem from '../components/ProfileItem';
import Icon from '../components/Icon';
import APIConnection from '../assets/data/APIConnection';

const PRIMARY_COLOR = '#7444C0';
const SECONDARY_COLOR = '#5636B8';
const WHITE = '#FFFFFF';
const GRAY = '#757E90';
const DARK_GRAY = '#363636';
const BLACK = '#000000';

const ONLINE_STATUS = '#46A575';
const OFFLINE_STATUS = '#D04949';

const STAR_ACTIONS = '#FFA200';
const LIKE_ACTIONS = '#2c9c91';
const DISLIKE_ACTIONS = '#363636';
const FLASH_ACTIONS = '#5028D7';

//Custom Styles

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    width: DIMENSION_WIDTH,
    height: DIMENSION_HEIGHT,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(26, 93, 87, 0.15)',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    // backgroundColor: 'rgba(26, 93, 87, 0.15)',
  },
  profilepicWrap: {
    width: 240,
    height: 240,
    borderRadius: 100,
    borderColor: 'rgba(26, 93, 87, 0.15)',
    // borderWidth: 16,
    marginBottom: 160,
    elevation: 10,
  },
  profilepic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 4,
  },
  containerProfile: { marginHorizontal: 0 },
  photo: {
    width: DIMENSION_WIDTH,
    height: 450,
  },
  topIconLeft: {
    fontFamily: ICON_FONT,
    fontSize: 20,
    color: WHITE,
    paddingLeft: 20,
    marginTop: -20,
    transform: [{ rotate: '90deg' }],
  },
  topIconRight: {
    fontFamily: ICON_FONT,
    fontSize: 20,
    color: WHITE,
    paddingRight: 20,
  },
  actionsProfile: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconButton: { fontFamily: ICON_FONT, fontSize: 20, color: '#1a5d57' },
  textButton: {
    fontFamily: ICON_FONT,
    fontSize: 15,
    color: '#1a5d57',
    paddingLeft: 5,
  },
  circledButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  roundedButton: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    height: 50,
    borderRadius: 25,
    backgroundColor: WHITE,
    paddingHorizontal: 20,
    elevation: 10,
  },
  name: {
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  pos: {
    fontSize: 16,
    color: '#0394c0',
    fontWeight: '300',
    fontStyle: 'italic',
  },
  homeicon: {},
});
export default UpdateProfile;
