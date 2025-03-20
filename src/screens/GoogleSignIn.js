import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import auth from '@react-native-firebase/auth';

import InputField from '../components/InputField';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TwitterSVG from '../assets/images/misc/twitter.svg';


import GoogleSVG from '../assets/images/misc/google.svg';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


const GoogleSignIn = ({navigation}) => {
  const {login} = useContext(AuthContext)
  const [userInfo, setUserInfo] = useState(null);
  const {logout} = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(email, password, "qqqqqqqqq11")


  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const signInResult = await GoogleSignin.signIn();

    console.log("errorvvvvvvvv1111", signInResult)
    setUserInfo(signInResult)
  
    // Try the new style of google-sign in result, from v13+ of that module
    idToken = signInResult.data?.idToken;
    if (!idToken) {
      // if you are using older versions of google-signin, try old style result
      idToken = signInResult.idToken;
    }
    if (!idToken) {
      throw new Error('No ID token found');
    }
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(signInResult.data.idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  


  // const createUser = () => {

  //   console.log(email, password, "qqqqqqqqq")

  //   auth()
  // .createUserWithEmailAndPassword(
  //   email, password
  // )
  // .then(() => {
  //   console.log('User account created & signed in!');
  // })
  // .catch(error => {
  //   if (error.code === 'auth/email-already-in-use') {
  //     console.log('That email address is already in use!');
  //   }

  //   if (error.code === 'auth/invalid-email') {
  //     console.log('That email address is invalid!');
  //   }

  //   console.error(error);
  // });
  // }

  const createUser = () => {
    console.log(email, password, "qqqqqqqqq")
    if(email && password === '' || email && password === null){
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User account created & signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }
  
        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }
  
        console.error(error);
      });
    }else{
      console.log("Please fill valid email & password")
    }
  };


//  useEffect(()=>{
//   GoogleSignin.configure({
//     webClientId:'350289777630-sa58urkd82ieifb218atig83ree65rvk.apps.googleusercontent.com'
//   });
//  },[])

GoogleSignin.configure({
  webClientId: '350289777630-sa58urkd82ieifb218atig83ree65rvk.apps.googleusercontent.com',
});


 const logoutBtn = () => {
    setUserInfo(null);
    logout();
 }

//  const signIn = async () => {
//   try {
//     await GoogleSignin.hasPlayServices();
//     const userInfo = await GoogleSignin.signIn();
//     setUserInfo(userInfo)
//     console.log("errorvvvvvvvv1111", userInfo)
//    // login();
//   } catch (error){
//     console.log("errorvvvvvvvv222", statusCodes)
//     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//       // Cancelled
//     } else if (error.code === statusCodes.IN_PROGRESS) {
//       // IN_PROGRESS
//     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//       // PLAY_SERVICES_NOT_AVAILABLE
//     } else{
//       // error
//     }
//   }
//  }
 





  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor:"#9eb4ff"}}>
      <View style={{paddingHorizontal: 25}}>
       

        <View
          style={{
            // flexDirection: 'row',
            // justifyContent: 'center',
            // marginBottom: 30,
            // marginLeft: 100
          }}>

            {(userInfo) ? (
                <>
                <View>
                <Image
  style={{ height: 50, width: 50 }}
  source={{ uri: 'https://lh3.googleusercontent.com/a/ACg8ocKDmPNiFkROsUjwfqhfOn0CtZdVhGPNAm4sJDCGehH-hOrkJh8w=s96-c' }}
/>
                    <Text>
                        {userInfo?.data?.user?.email}
                    </Text>
                    <Text>
                        {userInfo?.data?.user?.name}
                    </Text>
                    
                </View>
                 <TouchableOpacity onPress={() => {logoutBtn()}} style={{margin: 10}}>
                                       <AntDesign size={30} name={'downcircle'} color="yellow" />
                                      </TouchableOpacity>
                                      </>
              
            ) : (
              <View>
                 {/* <InputField
                 value={email}
                 onChangeText={txt => setEmail(txt)}
                          label={'Email ID'}
                          icon={
                            <MaterialIcons
                              name="alternate-email"
                              size={20}
                              color="#666"
                              style={{marginRight: 5}}
                            />
                          }
                          keyboardType="email-address"
                        />
                
                        <InputField
                         value={password}
                         onChangeText={txt => setPassword(txt)}
                          label={'Password'}
                          icon={
                            <Ionicons
                              name="lock-closed-outline"
                              size={20}
                              color="#666"
                              style={{marginRight: 5}}
                            />
                          }
                          inputType="password"
                        /> */}

<View style={{
   flexDirection: 'row',
   alignItems: 'center',
   borderBottomWidth: 1,
   borderColor: '#ccc',
   paddingVertical: 8,
   marginBottom: 15,
}}>
                        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email ID"
          keyboardType="email-address"
          style={{ flex: 1,
            fontSize: 16,}}
          // style={styles.input}
        />
        </View>

        <View style={{
   flexDirection: 'row',
   alignItems: 'center',
   borderBottomWidth: 1,
   borderColor: '#ccc',
   paddingVertical: 8,
   marginBottom: 15,
}}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
          style={{ flex: 1,
            fontSize: 16,}}
          // style={styles.input}
        />
        </View>
                        <View 
                         style={{
                          flexDirection: 'row',
                          justifyContent: 'space-around',
                          marginBottom: 30,
                          marginLeft: 20,
                          marginTop:50
                        }}>
                <TouchableOpacity
                // onPress={() => {
                //   signIn();
                // }}
                onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
                style={{
                  borderColor: '#6286ff',
                  borderWidth: 2,
                  borderRadius: 10,
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                }}>
                <GoogleSVG height={24} width={24} />
              </TouchableOpacity> 

              <TouchableOpacity
                onPress={() => {
                  createUser();
                }}
                style={{
                  borderColor: '#6286ff',
                  borderWidth: 2,
                  borderRadius: 10,
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                }}>
                <TwitterSVG height={24} width={24} />
              </TouchableOpacity>
              </View> 
              </View> 
            )

            }
         
         
        </View>

      
      </View>
    </SafeAreaView>
  );
};

export default GoogleSignIn;
