import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useContext} from 'react'
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProfileScreen = () => {

  const {logout} = useContext(AuthContext)

  return (
    <View>
      <TouchableOpacity onPress={() => {logout()}} style={{margin: 10}}>
                        <AntDesign size={30} name={'downcircle'} color="yellow" />
                       </TouchableOpacity>
      <Text>ProfileScreen</Text>
    </View>
  )
}

export default ProfileScreen