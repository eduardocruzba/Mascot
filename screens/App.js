/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,SafeAreaView,TouchableOpacity,ScrollView,ActivityIndicator} from 'react-native';
import Field from '../components/field';

import Realm from '../models/realm';
import Session from '../models/session';
const accessTokenDBKey = 'accessToken';


type Props = {};
export default class App extends Component<Props> {
  state = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    httpError: "",
    isAuthenticated: false,
    isLoading: false,
  }

  componentDidMount() {


  }

  onSubmit = () => {
    this.setState({
      isLoading: true,
    })

    if (!this.state.email) {
      // alert('No hay email')
      this.setState({
        emailError: 'No hay usuario',
        isLoading: false
      })
      return
    }

    if (!this.state.password) {
      // alert('No hay contraseña')
      this.setState({
        passwordError: 'No hay contraseña',
        isLoading: false
      })
      return
    }

    const url = "http://192.168.100.153:3000/token"
    const { email, password } = this.state;
    alert(email)
    alert(password)
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        username: email,
        password,
      }),
      headers:{
        'Authorization': 'Bearerey eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ5Njc2NDk0NGQ2MGYyMjc1ZWRlNmViZjliYzhjMTU4M2M1MTIyNDhhOWQwYjcxMzU2MGYwOTA3ZmVjZjViZDc0YzY2ZDJhMmQwNjYzODZmIn0.eyJhdWQiOiJPeW1md2NnM3VsakdwQTcyT2dzZTNwT0d5NWJWanpybkR3TnZ6RUNuTEpiTmI5S3U0RiIsImp0aSI6ImQ5Njc2NDk0NGQ2MGYyMjc1ZWRlNmViZjliYzhjMTU4M2M1MTIyNDhhOWQwYjcxMzU2MGYwOTA3ZmVjZjViZDc0YzY2ZDJhMmQwNjYzODZmIiwiaWF0IjoxNTYxNTg3OTMzLCJuYmYiOjE1NjE1ODc5MzMsImV4cCI6MTU2MTU5MTUzMywic3ViIjoiIiwic2NvcGVzIjpbXX0.C4bQYqFsvD2zq2dk3Ki0rfNWROo4fKFQDSpN72B0BvU1loYbYwzeju57kxe0YSdeS2_IgYmQZpWkyJll45XzuTLb-KZOVLmvqRSDmMkWWXW1S8s-JoR18azbwdA2mgor-vKeaTRWG4G5yJDGxNQ0tAEqsEowEELIj9Bro4hRmkHZRHo8xiYowA5AN4lufTjDF3A6xO3Y7byX3OC8rXRNi7ATxc5dVzXsi1Et0_N2y3m9fvlbI1qXeICbWS5QvvdYzCxe_agLWSwWz57LtJHDZcIyjf95-6Th6kdpmlQhkkdFxqUgR7TRl4AJITDB6pvEhh7XsbZxwLFuiA2oP_NW7g',
      }
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        isLoading: false,
      })


      Realm.add('Session',{
        accessToken: data.accessToken
      })
      this.props.navigation.navigate('PantallaPrincipal');

    })
    .catch(error => {
      
      this.setState({
        passwordError: 'revisa tus credenciales',
        isLoading: false
      })
      console.log('Error:', error)
    })
  }

  render() {
    const buttonText ='Iniciar Sesión'

    return (
      <View style={styles.container}>
        <Image
      style={styles.container}
      source={require('../image/perros.jpg')}
      style={{width: 360, height: 200}}
    />
      <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, padding: 24, flexDirection: 'column', justifyContent: 'space-between' }}>
            <View>
              <Text style={styles.heading}>{this.state.isAuthenticated ? 'Bienvenido':'Bienvenido'}</Text>
              <ScrollView>
              <Field
                placeholder="Usuario"
                cuandoCambie={(email) => this.setState({ email })}
                texto={this.state.email}
                error={this.state.emailError}
              
              />
              <Field
                placeholder="Contraseña"
                cuandoCambie={(password) => this.setState({ password })}
                texto={this.state.password}
                error={this.state.passwordError}
              />
              </ScrollView>
            </View>

            <Text style={{ color: 'red', fontSize: 30 }}>{this.state.httpError}</Text>
            {this.state.isLoading && <ActivityIndicator size="large" color="#ffffff" />}

           

            <TouchableOpacity style={styles.submitButton} onPress={this.onSubmit}>
              <Text style={{ fontSize: 18, color: '#ffffff', textAlign: 'center' }}>{buttonText}</Text>
            </TouchableOpacity>
          </View>

        </SafeAreaView>
        </View>
    
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  submitButton: {
    backgroundColor: '#48cdd0',
    padding: 20,
    borderRadius: 999,

  }
});



 



  

