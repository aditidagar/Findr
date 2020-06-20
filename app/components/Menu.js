import React, { Component } from 'react'
import {
    TouchableOpacity, View, Text
} from 'react-native'
import styles from '../assets/styles'; 

class Menu extends Component {
    render() {
        return (
            <View style={[styles.sideMenu, this.props.style || {}]}>
                  <View style={{ paddingHorizontal: 30 }}>
                      <TouchableOpacity style={[ styles.menu, { backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 5} ]}>
                            <Text style={styles.menuText} type='h5White'>Home</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={ styles.menu }>
                            <Text style={styles.menuText} type='h5White'>Profile</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={ styles.menu }>
                            <Text style={styles.menuText} type='h5White'>Settings</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={ styles.menu }>
                            <Text style={styles.menuText} type='h5White'>Home</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={ styles.menu }>
                            <Text style={styles.menuText} type='h5White'>Notification</Text>
                      </TouchableOpacity>
                  </View>
            </View>
        )
    }
}

module.exports = Menu