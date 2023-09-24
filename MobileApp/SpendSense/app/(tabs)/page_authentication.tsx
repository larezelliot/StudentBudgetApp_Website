import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

import React from 'react';
import {
    StyleSheet,
    Button,
    Image,
    SafeAreaView,
    Alert,
    Pressable,
    ImageBackground
} from 'react-native';

export default function PageAuthenticationScreen() {
    return (
        <ImageBackground source={require('../../assets/images/Backgrounds/Leaf.png')} style={styles.image}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Welcome to SpendSense
                </Text>
                <Pressable style={({ pressed }) => [styles.button1, { opacity: pressed ? 0.5 : 1 }]}>
                    <Text style={styles.button1_text}>
                        Log In
                    </Text>
                </Pressable>
                <Pressable style={({ pressed }) => [styles.button1, { opacity: pressed ? 0.5 : 1 }]}>
                    <Text style={styles.button1_text}>
                        Create Account
                    </Text>
                </Pressable>
            </View >
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 38,
        paddingVertical: 12,
        backgroundColor: 'transparent'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        color: '#1EAEFF',
        fontSize: 40,
        fontStyle: 'normal',
        fontWeight: '500',
        textAlign: 'center',
        backgroundColor: 'white'
    },
    button1: {
        width: 312,
        paddingVertical: 16,
        paddingHorizontal: 44,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderRadius: 16,
        backgroundColor: '#38B7FE',
        shadowOffset: { width: 10, height: 10 },
        shadowRadius: 10,
        shadowColor: '#00FF00',
    },
    button1_text: {
        color: '#FFFFFF',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '500',
        textAlign: 'center',
    }
});
