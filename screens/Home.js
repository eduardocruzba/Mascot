import React, { Component } from "react";
import { Platform, StyleSheet, View, Button, Picker, Alert,Text,TouchableOpacity,Image } from "react-native";
import Api from '../api'
//import Dog from '../models/dog'
import Realm from '../models/realm';

export default class HomeActivity extends Component {

  constructor(){
     super();
     this.state={
       PickerSelectedVal1 : '',
       PickerSelectedVal2 : '',
       PickerSelectedVal3 : ''

     }
   }

   getSelectedPickerValue=()=>{
     
      /* Alert.alert("Selected country is : " +this.state.PickerSelectedVal1+this.state.PickerSelectedVal2+
      this.state.PickerSelectedVal3); */
      //console.log(this.state.PickerSelectedVal1+""+this.state.PickerSelectedVal2+""+this.state.PickerSelectedVal3)
      Api.getDogs(this.state.PickerSelectedVal1,this.state.PickerSelectedVal2,this.state.PickerSelectedVal3).then((x) => {
        x.animals.forEach(dog => {

           a= ""
          if(dog.photos[0]){
            a=dog.photos[0].medium
          } else{
            a = 'https://img.pixers.pics/pho_wat(s3:700/FO/45/23/03/56/700_FO45230356_32e5c004ccd0547f2007feb84ef0cc34.jpg,560,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,340,650,jpg)/vinilos-perfil-perro.jpg.jpg'
          }
          console.log(a)


          Realm.add('Dog', {
            id: dog.id,
            name: dog.name,
            size: dog.size,
            gender: dog.gender,
            age: dog.age,
            description: dog.description,
            
           
            photos: a,
          })
        })
        alert("acabado")

        /* Array.from(realm.objects('Dog')).forEach((xx)=>{
          console.log(xx)
        })  */

      }).then(() => {
        this.props.navigation.navigate('SegundaPantalla');
      })
    /*   data.data.results.forEach(comic => {
        realm.create('Comic', {
          // id: comic.id,
          title: comic.title,
          description: comic.description,
          thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
        })
      }) */
    }



  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.heading}>Selecciona la Caracterista de la Mascota</Text>
      
         <Picker
           selectedValue={this.state.PickerSelectedVal1}
           onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal1: itemValue})}
            >

           <Picker.Item label="Tamaño(default)" value="Tamaño(default)" />
           <Picker.Item label="small" value="small" />
           <Picker.Item label="medium" value="medium" />
           <Picker.Item label="large" value="large" />
           <Picker.Item label="large" value="xlarge"/>

           

         </Picker>
         <Picker
           selectedValue={this.state.PickerSelectedVal2}
           onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal2: itemValue})} >

           <Picker.Item label="Edad(default)" value="Edad(default)" />
           <Picker.Item label="baby" value="baby" />
           <Picker.Item label="young" value="young" />
           <Picker.Item label="adult" value="adult" />
           <Picker.Item label="senior" value="senior" />
           
         </Picker>

         <Picker
           selectedValue={this.state.PickerSelectedVal3}
           onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal3: itemValue})} >

           <Picker.Item label="Genero(default)" value="Genero(default)" />
           <Picker.Item label="male" value="male" />
           <Picker.Item label="female" value="female" />
           

         </Picker>

         <TouchableOpacity style={styles.submitButton} onPress={this.getSelectedPickerValue}>
              <Text style={{ fontSize: 18, color: '#ffffff', textAlign: 'center' }}>Buscar</Text>
            </TouchableOpacity>
            <Image
            source={require('../image/prss.png')}
            style={{width: 360, height: 200, marginBottom:34 }}
      />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: '#48cdd0',
  },
  heading: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  submitButton: {
    backgroundColor: '#ffca18',
    padding: 20,
    borderRadius: 999,

  },
});