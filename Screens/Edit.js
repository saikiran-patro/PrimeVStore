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
  Form,
  Item,
  Input
  
  


} from 'native-base';


const Edit=({navigation,route})=>{

  const [seasonName,setName]=useState('')
  const [noofseasons,setTotalNoOfSeasons]=useState('')
  const[id,setId]=useState(null)

  const update=async ()=>{

        try{
          if(!seasonName || !noofseasons){
            return Snackbar.show({text:"Please add both the fields to update",backgroundColor:"#4B6587",textColor:"#E8F6EF"})
          }

          const seasontoUpdate={
            id,
            seasonName:seasonName,
            noofseasons:noofseasons,
            iswatched:false,
          }
          const storeVal=await AsyncStorage.getItem('@season_list')
          const prevList=await JSON.parse(storeVal) 
          prevList.map((singleseason)=>{
              if(singleseason.id===id) {
                singleseason.seasonName=seasonName
                singleseason.noofseasons=noofseasons
              }
              return singleseason
          })
           await AsyncStorage.setItem('@season_list',JSON.stringify(prevList))
           navigation.navigate('Home')
        }
        catch(err){
          console.log(err)
        }
  }
  const changeSeasonName=(seasonname)=>{
       
    setName(seasonname)
    
}
const changeTotalNoOfSeasons=(nofseasons)=>{
  
  setTotalNoOfSeasons(nofseasons)
}

  useEffect(()=>{
      const {seasons}=route.params
      console.log(seasons)
      const {id,
        seasonName,
        noofseasons
       }=seasons
       setName(seasonName)
       setTotalNoOfSeasons(noofseasons)
       setId(id)
  },[])
  return (

    <Container style={styles.container}>
         <ScrollView contentContainerStyle={{flexGrow:1}}>
         <H1 style={styles.heading}>Update your watchlist</H1>
         <Form>
         
            <Item rounded style={styles.formItem}>
              <Input placeholder="season name" style={{color:"#F8F8F8"}} value={seasonName} onChangeText={changeSeasonName}></Input>
            </Item>
            <Item rounded style={styles.formItem}>
              <Input placeholder="Total no of seasons" style={{color:"#F8F8F8"}} value={noofseasons} onChangeText={changeTotalNoOfSeasons}></Input>
            </Item>
            <Button rounded block style={{backgroundColor:"#1E3163"}} onPress={update}>
               <Text style={{color:"#F8F8F8"}}>UPDATE</Text>
            </Button>
         </Form>
         
         </ScrollView>
         
    
    </Container>
)
}
export default Edit;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1b262c',
      flex: 1,
      justifyContent: 'flex-start',
    },
    heading: {
      textAlign: 'center',
      color: '#00b7c2',
      marginHorizontal: 5,
      marginTop: 50,
      marginBottom: 20,
    },
    formItem: {
      marginBottom: 20,
    },
  });
  
  