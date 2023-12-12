import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  FlatList,
  Pressable,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Styles/mainStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPen} from '@fortawesome/free-solid-svg-icons';

import Snackbar from 'react-native-snackbar';

export default function App() {
  const [isCircle, setCircle] = useState<boolean>(false);
  const [winner, setWinner] = useState<string>('');
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9));

  const resetGame = () => {
    setCircle(false);
    setWinner('');
    setGameState(new Array(9).fill('empty', 0, 9));
  };
  const checkWinner = () => {};
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.mainContainer}>
        <View>
          {/* <FontAwesomeIcon size={22} icon={faCopy} /> */}
          <Text style={styles.turnText}>
            {isCircle ? `0's Turn` : ` X's Turn`}
          </Text>
          <FlatList
            numColumns={3}
            data={gameState}
            style={styles.ticTacToeGrid}
            renderItem={({item, index}) => (
              <Pressable
                key={index}
                style={[
                  styles.gameTile,
                  // for rightmost column items with indexes (2,5,and 8) this will result in 2
                  index % 3 === 2 ? styles.thirdColumn : null,
                  // for bottom row items with indexes (6,7,and 8) this will result in 2
                  Math.floor(index / 3) === 2 ? styles.thirdRow : null,
                ]}
                onPress={() => {}}>
                <FontAwesomeIcon size={22} icon={faPen} />
              </Pressable>
            )}
          />
          <TouchableOpacity
            onPress={() => {
              resetGame();
            }}
            style={styles.newGameBtn}>
            <Text style={styles.newGameBtnText}>
              {winner ? `Start New Game` : `Reset`}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
