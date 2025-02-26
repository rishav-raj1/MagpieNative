import React from 'react';
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
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import categories from '../consts/categories';
import foods from '../consts/foods';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const HomeScreen = ({navigation}) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index
                    ? COLORS.primary
                    : COLORS.secondary,
                ...style.categoryBtn,
              }}>
              <View style={style.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{height: 35, width: 35, resizeMode: 'cover'}}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.white
                      : COLORS.primary,
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const Card = ({food}) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen', food)}>
        <View style={style.card}>
          <View style={{alignItems: 'center', top: -40}}>
            <Image source={food.image} style={{height: 120, width: 120}} />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{food.name}</Text>
            <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
              {food.ingredients}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              ${food.price}
            </Text>
            <View style={style.addToCartBtn}>
              <Icon name="add" size={20} color={COLORS.white} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 28}}>Hello,</Text>
            <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
              Rishav
            </Text>
          </View>
          <Text style={{marginTop: 5, fontSize: 22, color: COLORS.grey}}>
            What do you want today
          </Text>
        </View>
        <Image
          source={require('../assets/person.png')}
          style={{height: 50, width: 50, borderRadius: 25}}
        />
      </View>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={style.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            style={{flex: 1, fontSize: 18}}
            placeholder="Search for food"
          />
        </View>
        <View style={style.sortBtn}>
          <Icon name="tune" size={28} color={COLORS.white} />
        </View>
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({item}) => <Card food={item} />}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;














/////////////////////Login Data store in Asyncstorage///////////////


// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import React, {useContext} from 'react'
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import { AuthContext } from '../context/AuthContext';


// const HomeScreen = ({navigation}) => {

//   const {logout} = useContext(AuthContext)


//   return (
//     <View style={styles.container}>
//       <Text style={{color:"black"}}>HomeScreen</Text>
//       <TouchableOpacity onPress={() => {logout()}} style={{margin: 10}}>
//                   <AntDesign size={30} name={'downcircle'} color="yellow" />
//                 </TouchableOpacity>
//     </View>
//   )
// }

// export default HomeScreen

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#AAC0FA',
//         //backgroundColor: 'white',
//         justifyContent: "center",
//         alignItems: "center",
//         flex: 1,
//       },
// })


////////////Crud///////////////

// import {View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
// import React from 'react'
// import {useDispatch, useSelector} from 'react-redux';
// import {useNavigation} from '@react-navigation/native';
// import {deleteUser} from '../redux/slice/UserSlice';


// const HomeScreen = () => {
//   const users = useSelector(state => state.users.users)
//   const navigation = useNavigation();
//   const dispatch = useDispatch();
//   console.log(users);
//   return (
//     <View style={styles.container}>
//       {users.length > 0 ? (
//         <FlatList
//           data={users}
//           renderItem={({item, index}) => {
//             return (
//               <View style={styles.userItem}>
//                 <View style={styles.detailView}>
//                   <Text>{`name:${item.name}`}</Text>
//                   <Text>{`email:${item.email}`}</Text>
//                   <Text>{`mobile:${item.mobile}`}</Text>
//                 </View>
//                 <View>
//                   <Text
//                     style={styles.blueBorderBtn}
//                     onPress={() => {
//                       navigation.navigate('UpdateUser', {
//                         index,
//                         item,
//                       });
//                     }}>
//                     Edit
//                   </Text>
//                   <Text
//                     style={styles.redBorderBtn}
//                     onPress={() => {
//                       dispatch(deleteUser(index));
//                     }}>
//                     Delete
//                   </Text>
//                 </View>
//               </View>
//             );
//           }}
//         />
//       ) : (
//         <View style={styles.noData}>
//           <Text>No User Added</Text>
//         </View>
//       )}
//       <TouchableOpacity
//         onPress={() => {
//           navigation.navigate('AddUser');
//         }}
//         style={styles.addBtn}>
//         <Text style={styles.addBtnTxt}>Add</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default HomeScreen
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   userItem: {
//     width: '90%',
//     padding: 10,
//     borderWidth: 1,
//     alignSelf: 'center',
//     marginTop: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   detailView: {
//     width: '70%',
//   },
//   noData: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   addBtn: {
//     width: 60,
//     height: 60,
//     position: 'absolute',
//     bottom: 50,
//     right: 20,
//     backgroundColor: 'purple',
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   addBtnTxt: {
//     color: 'white',
//   },
//   blueBorderBtn: {
//     padding: 5,
//     borderWidth: 1,
//     borderColor: 'blue',
//     borderRadius: 8,
//   },
//   redBorderBtn: {
//     padding: 5,
//     borderWidth: 1,
//     borderColor: 'red',
//     borderRadius: 8,
//     marginTop: 10,
//   },
// });