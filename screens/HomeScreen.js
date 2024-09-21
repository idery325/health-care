import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the {'\n'} HealthCare App!</Text>
            <Text style={styles.subtitle}>Your health, our priority.</Text>




            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.signUpButton} onPress={() => { navigation.navigate('Login') }}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton} onPress={() => { navigation.navigate('Sign') }}>
                    <Text style={styles.loginText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        position: 'absolute',
        top: '15%',
        color: '#03C75A'
    },
    subtitle: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#03C75A',
        position: 'absolute',
        bottom: '35%'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: '15%',
        width: '100%',
        alignItems: 'center',
    },
    signUpButton: {
        backgroundColor: '#03C75A',
        paddingVertical: 15,
        paddingHorizontal: 80,
        borderRadius: 15,
        marginBottom: 15,
        width: '90%',
        alignItems: 'center'
    },
    loginButton: {
        borderColor: '#03C75A',
        borderWidth: 2,
        paddingVertical: 15,
        paddingHorizontal: 80,
        borderRadius: 15,
        width: '90%',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        position: 'absolute',
        top: '30%',
        width: '100%',
        height: '30%',
        resizeMode: 'contain',
    },
});
