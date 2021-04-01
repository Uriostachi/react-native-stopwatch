import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import styles from './../syles/Global';

import { resetHistory } from './../actions/actions-types';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.itemName}>{title}</Text>
  </View>
);

const HomeScreen = ({ navigation }) => {

  const { history } = useSelector(state => state.chronoReducer);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => (
    <Item title={ item.value }/>
  );

  return (
    <SafeAreaView>
      <View style={ styles.container }>
        <Text>Welcome the Chrono App</Text>
        <Text>Previous Crono</Text>
        <View style={ styles.itemContainer }>
          <FlatList
            data={history}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
          />
        </View>
        <View style={ styles.btnContainer }>
          <TouchableOpacity
            style={ styles.btnSquare }
            onPress={() => navigation.navigate('Chrono')}
          >
            <Text style={styles.btnText}>NEW CHRONO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={ styles.btnSquare }
            onPress={() => dispatch(resetHistory())}
          >
            <Text style={styles.btnText}>RESET</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;