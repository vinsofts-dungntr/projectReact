import React, { Component } from 'react';
import { FlatList, Text, View, Image, Alert, TouchableOpacity, Button, Dimensions, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import flatListData from '../data/flatListData';

var screen = Dimensions.get('window');

export default class AddModel extends Component {
    constructor(props) {
        super(props);

    }
    showModel = () => {
        this.refs.showModel.open();
    }
    render() {
        return (
            <View >
                <Modal style={{ justifyContent: 'center', shadowRadius: 10, width: screen.width - 80, height: 280 }}
                    ref={"showModel"}>
                    <View style={{flex:1}}>
                        <Text>New Character Information!</Text> 
                    </View>
                    

                </Modal>
            </View>


        );
    }
}
