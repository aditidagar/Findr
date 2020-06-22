import React from 'react';
import styles from '../assets/styles';

import { Text, View, Image, Button } from 'react-native';
import Icon from './Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';

class ProfileItem extends React.Component{
  ProfileItem = ({
    age,
    info1,
    info2,
    info3,
    info4,
    location,
    matches,
    name,
  }) => {
    return (
      <View style={styles.containerProfileItem}>
        <Text style={styles.name}>{name}</Text>
        <Button title="Edit"></Button>
        <Text style={styles.descriptionProfileItem}>
          {age} - {location}
        </Text>
        
        <View style={styles.info}>
          <Text style={styles.iconProfile}>
            <Icon name='user' />
          </Text>
          <Text style={styles.infoContent}>{info1}</Text>
        </View>
  
        <View style={styles.info}>
          <Text style={styles.iconProfile}>
            <Icon name='circle' />
          </Text>
          <Text style={styles.infoContent}>{info2}</Text>
        </View>
  
        <View style={styles.info}>
          <Text style={styles.iconProfile}>
            <Icon name='hashtag' />
          </Text>
          <Text style={styles.infoContent}>{info3}</Text>
        </View>
  
        {/* <View style={styles.info}>
          <Text style={styles.iconProfile}>
            <Icon name="calendar" />
          </Text>
          <Text style={styles.infoContent}>{info4}</Text>
        </View> */}
      </View>
    );
  };
}

export default ProfileItem;
