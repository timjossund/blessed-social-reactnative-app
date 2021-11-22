import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements'
import Logo from '../assets/blessedfull.png'

export class MainHeader extends Component {
    render() {
        return (
            <View>
                <Header
                    elevated="true"
                    placement="left"
                    backgroundColor='white'
                    leftComponent={{ 
                        icon: 'menu', 
                        color: 'gray', 
                        iconStyle: { marginTop: 10 }
                    }}
                    centerComponent={
                        <Image 
                            source={Logo} 
                            alt='mainLogo' 
                            style={{height: 40, width: 160}}
                        />
                    }
                    rightComponent={{ 
                        icon: 'home', 
                        color: 'gray',
                        iconStyle: { marginTop: 10 } 
                    }}
                />
            </View>
        )
    }
}

export default MainHeader
