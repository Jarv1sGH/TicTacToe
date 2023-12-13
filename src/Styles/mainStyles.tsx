import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: '#29292B',
  },

  turnText: {
    color: '#fff',
    backgroundColor: '#5DBB63',
    width: '90%',
    borderRadius: 4,
    textAlign: 'center',
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    marginTop: 40,
    fontSize: 20,
  },
  turnTextC: {
    backgroundColor: '#4682b4',
  },
  turnTextW: {
    backgroundColor: '#DD6990',
  },
  ticTacToeGrid: {
    height: 360,
    margin: 10,
    borderRadius: 5,
    marginTop: 30,
  },
  gameTile: {
    width: '33.3%',
    height: 120,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    borderRightWidth: 1,
    borderRightColor: 'grey',
    // margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thirdColumn: {
    borderRightWidth: 0,
  },
  thirdRow: {
    borderBottomWidth: 0,
  },
  newGameBtn: {
    backgroundColor: 'purple',
    width: '90%',
    borderRadius: 4,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    marginTop: 30,
  },
  newGameBtnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});
