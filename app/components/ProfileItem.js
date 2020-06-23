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
      isEditable1: false,
      isEditable2: false,
      isEditable3: false,
      isEditable4: false,
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

  //Edit/Update event handlers
  handleEditClick1 = () => {
    this.setState({isEditable1: true});
  }
  handleUpdateClick1 = () => {
    this.setState({isEditable1: false});
  }

  handleEditClick2 = () => {
    this.setState({isEditable2: true});
  }
  handleUpdateClick2 = () => {
    this.setState({isEditable2: false});
  }

  handleEditClick3 = () => {
    this.setState({isEditable3: true});
  }
  handleUpdateClick3 = () => {
    this.setState({isEditable3: false});
  }

  handleEditClick4 = () => {
    this.setState({isEditable4: true});
  }
  handleUpdateClick4 = () => {
    this.setState({isEditable4: false});
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
      <View>
      <View style={styles.containerProfileItem}>
        {this.state.isEditable1 
          ? (<Button onPress={this.handleUpdateClick1} title="Update"></Button>) 
          : (<Button onPress={this.handleEditClick1} title="Edit"></Button>)
        }
        {this.state.isEditable1
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
          {this.state.isEditable1
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

      <View style={styles.containerProfileItem2}>
      {this.state.isEditable2 
        ? (<Button onPress={this.handleUpdateClick2} title="Update"></Button>) 
        : (<Button onPress={this.handleEditClick2} title="Edit"></Button>)
      }
      <Text style={styles.name}>Education</Text>
      {this.state.isEditable2
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
        {this.state.isEditable2
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

      <View style={styles.containerProfileItem2}>
      {this.state.isEditable3 
        ? (<Button onPress={this.handleUpdateClick3} title="Update"></Button>) 
        : (<Button onPress={this.handleEditClick3} title="Edit"></Button>)
      }
      {this.state.isEditable3
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
        {this.state.isEditable3
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

      <View style={styles.containerProfileItem2}>
      {this.state.isEditable4 
        ? (<Button onPress={this.handleUpdateClick4} title="Update"></Button>) 
        : (<Button onPress={this.handleEditClick4} title="Edit"></Button>)
      }
      {this.state.isEditable4
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
        {this.state.isEditable4
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
    </View>
    );
  }
}

export default ProfileItem;