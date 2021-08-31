import React,{useState} from 'react';
import {StyleSheet,ScrollView,View} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

import {
  Fab,
  Text,
  Icon,
  List,
  Left,
  Button,
  ListItem,
  Body,
  Right,
  CheckBox,
  Title,
  H1,
  H3,
  Subtitle,
  Container,


} from 'native-base';

const Home=({navigation,route})=>{

   
   const [listOfSeasons,setListOfSeasons]=useState(['hello'])


   const getList= async ()=>{
     //
   }
   const deleteSeasons= async ()=>{
     //
   }
   const markComplete= async ()=>{
     //
   }
    return (

        <ScrollView contentContainerStyle={styles.container}>
           
            {listOfSeasons.length==0?
              
              (
                  <Container style={styles.container}>
                      <H3 style={styles.heading}>Watchlist is empty. Please add a season</H3>
                  
                  </Container>



              ):
              
              
              (
                   <Container style={styles.container}>
                   
                      <H3 style={styles.heading}>Next series to watch</H3>
                      <List>
                          <View style={{backgroundColor:colors[Math.floor(Math.random()*colors.length)],
                            paddingVertical:30,
                          
                            marginVertical:20,
                            borderRadius:15
                      }}>
                           <ListItem style={styles.listItem} noBorder>
                            <Left>
                                <Button danger style={styles.actionButton}>
                                    <Icon active name="trash" type="Entypo" ></Icon>
                                </Button>
                                <Button  style={styles.actionButton}>
                                    <Icon active name="edit" type="FontAwesome5" ></Icon>
                                </Button>
                          
                          
                            </Left> 
                            <Body>
                                <Title style={styles.seasonName}> The Panic</Title>
                                <Text note style={{color:"#343A40"}}>seasons:1</Text>
                          
                            </Body>
                            <Right>
                              <CheckBox></CheckBox>
                          
                            </Right>
                           </ListItem>
                          
                          
                          </View>
                         
                          
                      </List>
                   
                   </Container>



              )}
            <Fab style={{ backgroundColor: '#2D46B9'} } position="bottomRight" onPress={()=> navigation.navigate('Add')}>
        <Icon name="add"></Icon>
        </Fab>
        
        
        
        </ScrollView>
    )
}
export default Home;
const colors=["#F0E5CF","#B8DFD8","#93B5C6","#F0D9FF","#C2FFD9","#EFB7B7","#B980F0","#7C83FD","#A2DBFA","#E1E8EB","#DBE6FD"]
const styles = StyleSheet.create({
    emptyContainer: {
      backgroundColor: '#1b262c',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    listContainer: {
          
    },
    container: {
      backgroundColor: '#1b262c',
      flex: 1,
    },
    heading: {
      textAlign: 'center',
      color: '#F7F6F2',
      marginVertical: 15,
      marginHorizontal: 5,
    },
    actionButton: {
      marginLeft: 5,
    },
    seasonName: {
      color: '#0A1931',
      textAlign: 'justify',
      fontWeight:'bold'
    },
    listItem: {
      marginLeft: 0,
      marginBottom: 20,
      
    },
  });
  