import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ImageBackground, FlatList,TouchableOpacity } from 'react-native';
import CardView from 'react-native-rn-cardview'
import Api from '../api'
import Dog from '../components/Dog';
import Session from '../models/session'
import Realm from '../models/realm';


class Character extends React.Component {
  state = {
    dogs: [],
    
  }

  componentDidMount() {
    Realm.get('Dog', dogs => {
        console.log(Array.from(dogs))
        this.setState({ dogs: Array.from(dogs) })
      })

      
  }

 

  showDogDetails = (dog) => () => {
    this.props.navigation.push('Dog', {
        id: dog.id,
        name: dog.name,
        size: dog.size,
        gender: dog.gender,
        age: dog.age,
        photos: dog.photos,
    });
  }

  render() {
    const { dogs } = this.state

    return (
      
  

              <View style={styles.container}>
                  
                    <FlatList
                        data={dogs}
                         renderItem={({ item }) => (
                         <>
                      <CardView cardElevation={8}
                          maxCardElevation={4}
                          radius={20}
                          backgroundColor={'#ffca18'}>
                   
                         <Text>Name : {item.name}</Text>
                         <Text>Size :{item.size}</Text>
                         <Text>Gender :{item.gender}</Text>
                         <Text>Age :{item.age}</Text>


                          <TouchableOpacity onPress={()=>{alert("Description:"+ item.description)}}>
                         <Image
                           source= {{uri : item.photos}}    
                           style={{width:200, height:150}}
                           />
                           </TouchableOpacity>

                           </CardView>
                      
                    
                </>
            )}
          />
     
                </View>
    
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#48cdd0'
  },
  title: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center'
  },
  description: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  }
})

export default Character
