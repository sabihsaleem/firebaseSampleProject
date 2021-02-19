import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import PushNotification from "react-native-push-notification";

class App extends Component {
  constructor(props) {
    super(props)
    PushNotification.configure({
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
      },    
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  }
  testPush = () => {
    PushNotification.localNotification({
      title: "Hello",
      message: "World",
    })
  }
  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text onPress={()=>this.testPush()}>Step One</Text>
      </View>
    );
  }
};

export default App;
