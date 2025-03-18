import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import GoogleSVG from '../assets/images/misc/google.svg';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


const GoogleSignIn = ({navigation}) => {
  const {login} = useContext(AuthContext)
  const [userInfo, setUserInfo] = useState(null);
  const {logout} = useContext(AuthContext)

  console.log(userInfo?.data?.user?.email)


 useEffect(()=>{
  GoogleSignin.configure({
    webClientId:'350289777630-sa58urkd82ieifb218atig83ree65rvk.apps.googleusercontent.com'
  });
 },[])

 const logoutBtn = () => {
    setUserInfo(null);
    logout();
 }

 const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    setUserInfo(userInfo)
    console.log("errorvvvvvvvv1111", userInfo)
   // login();
  } catch (error){
    console.log("errorvvvvvvvv222", statusCodes)
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // Cancelled
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // IN_PROGRESS
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // PLAY_SERVICES_NOT_AVAILABLE
    } else{
      // error
    }
  }
 }




  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor:"#9eb4ff"}}>
      <View style={{paddingHorizontal: 25}}>
       

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
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
                <TouchableOpacity
                onPress={() => {
                  signIn();
                }}
                style={{
                  borderColor: '#6286ff',
                  borderWidth: 2,
                  borderRadius: 10,
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                }}>
                <GoogleSVG height={24} width={24} />
              </TouchableOpacity>  
            )

            }
         
         
        </View>

      
      </View>
    </SafeAreaView>
  );
};

export default GoogleSignIn;
