import React from 'react';
import styles from '../assets/styles';

import { Text, View, Image, Button } from 'react-native';
import Icon from './Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DefaultTheme, Provider as PaperProvider, TextInput, RadioButton, Dialog} from 'react-native-paper';

const theme = {
  colors: {
      ...DefaultTheme.colors,
      primary: "transparent",
      text: 'black', 
      placeholder: 'darkgrey',
      labelColor: 'black',
  },
};

const textBoxStyle = { 
  width: '75%',
  height: 50,
  alignSelf: 'center',
  backgroundColor: "transparent",
};

class ProfileItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
      email: "",
      password: "",
      name: "",
      uni: "",
      major: "",

      nameLabel: "Name",
      emailLabel: "Email",
      passLabel: "Password", 
      uniLabeL: "University",
      majorLabel: "Major",
    }
  }

  handleEditClick = () => {
    this.setState({isEditable: true});
  }

  handleUpdateClick = () => {
    this.setState({isEditable: false});
  }

  handleNameChange(text) {
    if(text.length >= 3 && text.length <= 30) {
        this.setState({ isNameValid: true, name: text });
        return;
    }
    this.setState({ isNameValid: false, name: text });
  }

  handlePasswordChange(text) {
    if(validatePassword(text)) {
        this.setState({ isPasswordValid: true, password: text });
        return;
    }
    this.setState({ password: text, isPasswordValid: false });
  }

  handleUniChange(text) {
      if(text.length >= 6) {
          this.setState({ isUniValid: true, uni: text });
          return;
      }
      this.setState({ isUniValid: false, uni: text });
  }

  handleMajorChange(text) {
      if(text.length >= 6) {
          this.setState({ isMajorValid: true, major: text });
          return;
      }
      this.setState({ isMajorValid: false, major: text });
  }

  render() {
    return (
      <View style={styles.containerProfileItem}>
        {this.state.isEditable 
          ? (<Button onPress={this.handleUpdateClick} title="Update"></Button>) 
          : (<Button onPress={this.handleEditClick} title="Edit"></Button>)
        }
        {this.state.isEditable
          ? (<TextInput
            underlineColor="transparent"
            mode={"flat"}
            value={this.state.name}
            label='Name'
            placeholder="Enter your full name"
            onFocus={() => this.setState({ nameLabel: "" })}
            onBlur={() => this.setState({ nameLabel: this.state.name.length === 0 ? "Name" : "" })}
            onChangeText={this.handleNameChange.bind(this)}
            theme={theme}
            style={textBoxStyle}
            />)
          : (<Text style={styles.name}>{this.props.name}</Text>)
        }
        <Text style={styles.descriptionProfileItem}>
          {this.props.age} - {this.props.location}
        </Text>

        <View style={styles.info}>
          <Text style={styles.iconProfile}>
            <Icon name='user' />
          </Text>
          <Text style={styles.infoContent}>{this.props.info1}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.iconProfile}>
            <Icon name='circle' />
          </Text>
          {this.state.isEditable
          ? (<TextInput
            underlineColor="transparent"
            mode={"flat"}
            value={this.state.major}
            label='Major'
            placeholder="Enter your major"
            onFocus={() => this.setState({ majorLabel: "" })}
            onBlur={() => this.setState({ majorLabel: this.state.major.length === 0 ? "Major" : "" })}
            onChangeText={this.handleMajorChange.bind(this)}
            theme={theme}
            style={textBoxStyle}
            />)
          : (<Text style={styles.infoContent}>{this.props.info2}</Text>)
          }
        </View>
  
        <View style={styles.info}>
          <Text style={styles.iconProfile}>
            <Icon name='hashtag' />
          </Text>
          <Text style={styles.infoContent}>{this.props.info3}</Text>
        </View>
      </View>
    );
  }
}

export default ProfileItem;