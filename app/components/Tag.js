import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View
} from 'react-native';
 
import TagInput from 'react-native-tags-input';
 
const mainColor = '#3ca897';
 
class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: {
        tag: '',
        tagsArray: []
      },
    };
  }
  
  updateTagState = (state) => {
      this.setState({
        tags: state
      })
    };
 
  render() {
    return (
      <View style={styles.container}>
        <TagInput
          updateState={this.updateTagState}
          tags={this.state.tags}
          placeholder="Enter"    
          inputContainerStyle={styles.textInput}
          inputStyle={{color: 'black'}}
          onFocus={() => this.setState({tagsColor: '#fff', tagsText: mainColor})}
          onBlur={() => this.setState({tagsColor: 'white', tagsText: '#fff'})}
          autoCorrect={false}
          tagStyle={styles.tag}
          tagTextStyle={styles.tagText}
          keysForTag={', '}/>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
      height: 30,
      backgroundColor: 'white',
  },
  tag: {
      backgroundColor: 'transparent'
  },
  tagText: {
      color: 'black'
  },
});

export default Tag;