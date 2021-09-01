import React,{useState,useEffect} from 'react';
import {StyleSheet,ScrollView,View} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import {useIsFocused} from '@react-navigation/native'
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
  Spinner,


} from 'native-base';

const Home=({navigation,route})=>{

   
   const [listOfSeasons,setListOfSeasons]=useState([])
    const [loading,setLoading] = useState(false)
    const isFocused=useIsFocused()
   const getList= async ()=>{
     setLoading(true)

     const storeVal= await AsyncStorage.getItem('@season_list')
     if(!storeVal){
       setListOfSeasons([])
     }else{
       const list= await JSON.parse(storeVal)
       setListOfSeasons(list)
     }
     setLoading(false)
     //

     
   }
   const deleteSeasons= async (id)=>{
     //
    const newList= listOfSeasons.filter((season)=>{
      return season.id !== id;

     })
     await AsyncStorage.setItem('@season_list', JSON.stringify(newList))
     setListOfSeasons(newList)
   }
   const markComplete= async (id)=>{
     //
     
     for(let i=0; i<listOfSeasons.length;i++){
       if(listOfSeasons[i].id===id){
         listOfSeasons[i].iswatched=!listOfSeasons[i].iswatched
       }
     }
     console.log(listOfSeasons)
     await AsyncStorage.setItem('@season_list', JSON.stringify(listOfSeasons))
     setListOfSeasons(listOfSeasons)
      getList()

   }
   useEffect(()=>{
     getList()
   },[isFocused])
   if(loading){
        <Container style={styles.container}>
           <Spinner color="#00b7c2"></Spinner>
        
        </Container>
   }
    return (
      
        <View  style={styles.container}>
          
            {listOfSeasons.length==0?
              
              (
                  <Container style={styles.container}>
                      <H3 style={styles.heading}>Watchlist is empty. Please add a season</H3>
                  
                  </Container>



              ):
              
              
              (
                   <ScrollView style={styles.container}>
                   

                      <H3 style={styles.heading}>Next series to watch</H3>
                      <List>
                         {listOfSeasons.map((seasons)=>(

                          <View key={seasons.id} style={{backgroundColor:colors[Math.floor(Math.random()*colors.length)],paddingVertical:30,marginVertical:10,borderRadius:15}}>
                           <ListItem style={styles.listItem} noBorder>
                            <Left>
                                <Button danger style={styles.actionButton} onPress={()=>deleteSeasons(seasons.id)} >
                                    <Icon active name="trash" type="Entypo" ></Icon>
                                </Button>
                                <Button  style={styles.actionButton}  onPress={()=>navigation.navigate("Edit",{seasons})} >
                                    <Icon active name="edit" type="FontAwesome5" ></Icon>
                                </Button>
                          
                          
                            </Left> 
                            <Body>
                                <Title style={styles.seasonName}> {seasons.seasonName}</Title>
                                <Text note style={{color:"#343A40"}}>seasons:{seasons.noofseasons}</Text>
                          
                            </Body>
                            <Right>
                              {seasons.iswatched ? (<CheckBox checked onPress={()=>markComplete(seasons.id)}></CheckBox>) : (<CheckBox onPress={()=>markComplete(seasons.id)}></CheckBox>)}
                          
                            </Right>
                           </ListItem>
                          
                          
                          </View>
                         
                          ))}
                          
                      </List>
                  
                   </ScrollView>



              )}
            <Fab style={{ backgroundColor: '#2D46B9'} } position="bottomRight" onPress={()=> navigation.navigate('Add')}>
        <Icon name="add"></Icon>
        </Fab>
        
        
        
      </View>
    
    )
}
export default Home;
const colors=["#F0E5CF","#B8DFD8","#93B5C6","#F0D9FF","#C2FFD9","#EFB7B7","#B980F0","#7C83FD","#A2DBFA","#E1E8EB","#DBE6FD","#F3F1F5","#FDEFEF","#FAFF00","#88FFF7","#C6FFC1"]
const styles = StyleSheet.create({
    emptyContainer: {
      backgroundColor: '#1b262c',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    container: {
      backgroundColor: '#1b262c',
      flexGrow:1
      
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
  