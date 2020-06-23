import React from 'react';
import styles from '../assets/styles';

import { Text, View, Image, Button } from 'react-native';
import Icon from './Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DefaultTheme, Provider as PaperProvider, TextInput, RadioButton, Dialog} from 'react-native-paper';


class ProfileItem extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isEditable: false
    }
  }

  render() {
    return (
      <View style={styles.containerProfileItem}>
        <Button title="Edit"></Button>
        <Text style={styles.name}>{this.props.name}</Text>
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
          <Text style={styles.infoContent}>{this.props.info2}</Text>
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
// const ProfileItem = ({
//   age,
//   info1,
//   info2,
//   info3,
//   info4,
//   location,
//   matches,
//   name,
// }) => {
  
// };
export default ProfileItem;




{/* <TextInput
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
      /> */}
