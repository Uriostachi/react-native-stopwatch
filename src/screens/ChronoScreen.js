import React, { useRef } from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import styles from './../syles/Global';

import { start, stop, reset, save } from './../actions/actions-types';

const ChronoScreen = ({ navigation }) => {

  const { display, isStarted, isStoped } = useSelector(state => state.chronoReducer);
  const dispatch = useDispatch();
  const intervalRef = useRef(null);

  const handleStart = () => {
    if(!isStarted || isStoped) {
      intervalRef.current = setInterval(() => {
        dispatch(start());
      }, 1000)
    }
  }

  const handleStop = () => {
    clearInterval(intervalRef.current);
    dispatch(stop());
  }

  return (
    <View style={ styles.container }>
      <View style={ [styles.btnContainer, styles.btnContainerExtended] }>
        <TouchableOpacity
          style={ styles.btnSquare }
          onPress={() => handleStart()}
        >
          <Text style={styles.btnText}>START</Text>
        </TouchableOpacity>
        {isStarted && 
          <>
            <TouchableOpacity
              style={ styles.btnSquare }
              onPress={() => handleStop()}
            >
              <Text style={styles.btnText}>STOP</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={ styles.btnSquare }
              onPress={() => dispatch(reset())}
            >
              <Text style={styles.btnText}>RESET</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={ styles.btnSquare }
              onPress={() => dispatch(save())}
            >
              <Text style={styles.btnText}>SAVE</Text>
            </TouchableOpacity>
          </>
        }  
      </View>
      <Text style={styles.display}>{display}</Text>
    </View>
  );
}

export default ChronoScreen;