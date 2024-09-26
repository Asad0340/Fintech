import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    width: '95%',
    height: 150,
    borderRadius: 20,
    backgroundColor: '#864bff',
    justifyContent: 'flex-start', // Align items to the start to fit new view
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginTop: 20,
    alignSelf: 'center',
  },
  resultText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10, // Space between result and input area
  },
  
});
