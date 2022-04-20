import { Body, Container,Header, Item } from "native-base";
import React from "react";
import { StyleSheet,Text, View} from "react-native";
import { backgroundColor, color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";


const Flex = () => {
  return (
    <Container>
       <Header style={{backgroundColor:'white'}}>
        <Body style={{alignItems:'center', backgroundColor:'white'}}>
          <Text>Questão 2</Text>
          </Body>
      </Header>
    <View style={styles.container}>
    
    
      <View style={styles.box}> 
      <Item>
      <Text>Square 1</Text>
      </Item>
      </View>

      <View style={styles.box2}>
      <Item>
      <Text>Square 2</Text>
      </Item>
      </View>

      <View style={styles.box3}>
        <Item>
      <Text>Square 3</Text>
      </Item>
      </View>
      
    </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:25,
    flexDirection:'row',
    alignItems:'center',
    
  },
  box: {
    width:100,
    height:100,
    borderColor:'black',
    borderWidth:2,
    margin:10,
    backgroundColor:"pink",
    alignItems:'center',
    justifyContent:'center',
    
  },
  box2: {
    width:100,
    height:100,
    borderColor:'black',
    borderWidth:2,
    margin:10,
    backgroundColor:"red",
    justifyContent:'center',
    alignItems:'center'
    
  },
  box3: {
    width:100,
    height:100,
    borderColor:'black',
    borderWidth:2,
    margin:10,
    backgroundColor:"green",
    justifyContent:'center',
    alignItems:'center'
  },
   
});

export default Flex;