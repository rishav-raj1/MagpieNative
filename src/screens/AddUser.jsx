import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState} from 'react';
  import {useDispatch} from 'react-redux';
  import {addUser} from '../redux/slice/UserSlice';
  import {useNavigation} from '@react-navigation/native';
  
  const AddUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder="Enter User Name"
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="Enter User Email"
        />
        <TextInput
          keyboardType="number-pad"
          value={mobile}
          onChangeText={setMobile}
          style={styles.input}
          placeholder="Enter User Mobile"
        />
        <TouchableOpacity
          onPress={() => {
            dispatch(addUser({name, email, mobile}));
            navigation.goBack();
          }}
          style={styles.submitBtn}>
          <Text style={styles.btnTxt}>Add User Data</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default AddUser;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    input: {
      width: '90%',
      height: 50,
      borderWidth: 1,
      borderRadius: 8,
      marginTop: 10,
      alignSelf: 'center',
      paddingLeft: 10,
    },
    submitBtn: {
      width: '90%',
      height: 50,
      backgroundColor: 'purple',
      alignSelf: 'center',
      marginTop: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
    },
    btnTxt: {
      color: 'white',
    },
  });
  
  
