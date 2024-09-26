import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const BUTTON_HEIGHT = width * 0.16; 
const BUTTON_MARGIN = width * 0.01; 
const SIDE_MARGIN = width * 0.01; 

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: SIDE_MARGIN, 
    marginVertical: BUTTON_MARGIN / 2, 
  },
  button: {
    flex: 1, 
    marginVertical: BUTTON_MARGIN / 2, 
    marginLeft: SIDE_MARGIN, 
    marginRight: SIDE_MARGIN, 
    height: BUTTON_HEIGHT,
    borderRadius: 18,
    backgroundColor: '#4b5662', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonss: {
    flex: 1, 
    marginVertical: BUTTON_MARGIN / 2, 
    marginLeft: SIDE_MARGIN, 
    marginRight: SIDE_MARGIN, 
    height: BUTTON_HEIGHT,
    borderRadius: 18,
    backgroundColor: '#e4e9f2', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    flex: 1, 
    marginVertical: BUTTON_MARGIN / 2, 
    marginLeft: SIDE_MARGIN, 
    marginRight: SIDE_MARGIN, 
    height: BUTTON_HEIGHT,
    borderRadius: 18,
    backgroundColor: '#864bff', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  doubleButton: {
    flex: 2, 
    height: BUTTON_HEIGHT, 
    marginVertical: BUTTON_MARGIN / 2,
    marginLeft: SIDE_MARGIN, 
    marginRight: SIDE_MARGIN, 
    borderRadius: 18,
    backgroundColor: '#864bff', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonTexts: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4b5662',
  },
  cashButton: {
    backgroundColor: '#4CAF50',  
    paddingVertical: 15, 
    marginVertical: BUTTON_MARGIN / 2, 
    marginLeft: SIDE_MARGIN, 
    marginRight: SIDE_MARGIN, 
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
  },
  cashButtonout: {
    backgroundColor: 'red',  
    paddingVertical: 15, 
    marginVertical: BUTTON_MARGIN / 2, 
    marginLeft: SIDE_MARGIN, 
    marginRight: SIDE_MARGIN, 
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
  },
  cashButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
