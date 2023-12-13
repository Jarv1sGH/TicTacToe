import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  FlatList,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './Styles/mainStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPen, faX} from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-regular-svg-icons';
import Snackbar from 'react-native-snackbar';
import {checkWinner} from './checkWinnerModule';

export default function App() {
  const [isCircle, setIsCircle] = useState<boolean>(false);
  const [winner, setWinner] = useState<string>('');
  const [gameState, setGameState] = useState<string[]>(
    new Array(9).fill('Empty', 0, 9),
  );

  const resetGame = (): void => {
    setIsCircle(false);
    setWinner('');
    setGameState(new Array(9).fill('Empty', 0, 9));
  };

  const draw = (index: number): void => {
    if (gameState[index] !== 'Empty') {
      Snackbar.show({
        text: 'Already filled',
        duration: Snackbar.LENGTH_SHORT,
      });
      return;
    }
    gameState[index] = isCircle ? 'Circle' : 'Cross';
    setIsCircle(!isCircle);
    checkWinner(gameState, setWinner);
  };

  useEffect(() => {
    if (winner !== '') {
      Snackbar.show({
        text: `${winner} won the game!`,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: winner === 'Circle' ? '#4682b4' : '#5DBB63',
      });
    }
  }, [winner]);
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.mainContainer}>
        <View>
          <Text
            style={[
              styles.turnText,
              isCircle && styles.turnTextC,
              winner === 'Circle' && styles.turnTextC,
            ]}>
            {winner !== ''
              ? `${winner} won the game!`
              : isCircle
              ? `0's Turn`
              : ` X's Turn`}
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
                onPress={() => {
                  if (winner !== '') {
                    return;
                  }
                  draw(index);
                }}>
                {gameState[index] === 'Circle' ? (
                  <FontAwesomeIcon
                    color={'#4682b4'}
                    size={30}
                    icon={faCircle}
                  />
                ) : gameState[index] === 'Cross' ? (
                  <FontAwesomeIcon color={'#5DBB63'} size={30} icon={faX} />
                ) : (
                  <FontAwesomeIcon color={'#CCF'} size={30} icon={faPen} />
                )}
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
