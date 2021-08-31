import React,{useState} from 'react';
import {Text,StyleSheet,ScrollView} from 'react-native'
import shortid from 'shortid'
import Snackbar from 'react-native-snackbar'
import AsyncStorage from '@react-native-community/async-storage';
import {Container,Form,Button,Item,Input,H1} from 'native-base';
const Add=({navigation})=>{
//Snackbar.show({text:winMessage,backgroundColor:"#71EFA3",textColor:"#2C2E43"})

  const [seasonName,setSeasonName]=useState('')
  const [noofseasons,setNoSeason]=useState('')
  const changeSeasonName=(seasonname)=>{
       
      setSeasonName(seasonname)
      
  }
  const changeTotalNoOfSeasons=(nofseasons)=>{
    
    setNoSeason(nofseasons)
  }

  const addToList= async ()=>{
      try{
          if(!seasonName || !noofseasons){
            return Snackbar.show({text:"Please add both the fields",backgroundColor:"#4B6587",textColor:"#E8F6EF"})
          }

          const listItem={
            id:shortid.generate(),
            seasonName:seasonName,
            noofseasons:noofseasons,
            iswatched:false,
          }

          const storeVal=await AsyncStorage.getItem('@season_list')
          const prevList=await JSON.parse(storeVal) 

          if(prevList){
            
            prevList.push(listItem)
            
            await AsyncStorage.setItem('@season_list', JSON.stringify(prevList))

          }

          else{
            const newList=[listItem]
          
            
            await AsyncStorage.setItem('@season_list', JSON.stringify(newList))
          }
          setSeasonName('')
          setNoSeason('')
          navigation.navigate('Home')
      }
      catch(e){
        console.log(e)
      }



  }






    return (

        <Container style={styles.container}>
             <ScrollView contentContainerStyle={{flexGrow:1}}>
             <H1 style={styles.heading}>Add to your watchlist</H1>
             <Form>
             
                <Item rounded style={styles.formItem}>
                  <Input placeholder="season name" style={{color:"#F8F8F8"}} value={seasonName} onChangeText={changeSeasonName}></Input>
                </Item>
                <Item rounded style={styles.formItem}>
                  <Input placeholder="Total no of seasons" style={{color:"#F8F8F8"}} value={noofseasons} onChangeText={changeTotalNoOfSeasons}></Input>
                </Item>
                <Button rounded block style={{backgroundColor:"#1E3163"}} onPress={addToList}>
                   <Text style={{color:"#F8F8F8"}}>ADD</Text>
                </Button>
             </Form>
             
             </ScrollView>
             
        
        </Container>
    )
}
export default Add;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1b262c',
      flex: 1,
      justifyContent: 'flex-start',
    },
    heading: {
      textAlign: 'center',
      color: '#F8F8F8',
      marginHorizontal: 5,
      marginTop: 50,
      marginBottom: 20,
    },
    formItem: {
      marginBottom: 20,
    },
  });
  