import {View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {deleteUser} from '../redux/slice/UserSlice';


const HomeScreen = () => {
  const users = useSelector(state => state.users.users)
  const navigation = useNavigation();
  const dispatch = useDispatch();
  console.log(users);
  return (
    <View style={styles.container}>
      {users.length > 0 ? (
        <FlatList
          data={users}
          renderItem={({item, index}) => {
            return (
              <View style={styles.userItem}>
                <View style={styles.detailView}>
                  <Text>{`name:${item.name}`}</Text>
                  <Text>{`email:${item.email}`}</Text>
                  <Text>{`mobile:${item.mobile}`}</Text>
                </View>
                <View>
                  <Text
                    style={styles.blueBorderBtn}
                    onPress={() => {
                      navigation.navigate('UpdateUser', {
                        index,
                        item,
                      });
                    }}>
                    Edit
                  </Text>
                  <Text
                    style={styles.redBorderBtn}
                    onPress={() => {
                      dispatch(deleteUser(index));
                    }}>
                    Delete
                  </Text>
                </View>
              </View>
            );
          }}
        />
      ) : (
        <View style={styles.noData}>
          <Text>No User Added</Text>
        </View>
      )}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AddUser');
        }}
        style={styles.addBtn}>
        <Text style={styles.addBtnTxt}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userItem: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailView: {
    width: '70%',
  },
  noData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtn: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 50,
    right: 20,
    backgroundColor: 'purple',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtnTxt: {
    color: 'white',
  },
  blueBorderBtn: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 8,
  },
  redBorderBtn: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 8,
    marginTop: 10,
  },
});