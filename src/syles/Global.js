import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    justifyContent: 'center',
    marginVertical: 60
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
    width: 250
  },
  btnContainerExtended: {
    width: 350
  },  
  btnSquare: {
    elevation: 8,
    backgroundColor: '#8DDBE0',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  btnText: {
    alignSelf: "center"
  },
  itemContainer: {
    height: 600
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemName: {
    fontSize: 24
  },  
  display: {
    fontSize: 32,
  }
});

export default styles;
