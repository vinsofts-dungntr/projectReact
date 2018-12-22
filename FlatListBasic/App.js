/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FlatList, Text, View, Image, Alert, TouchableOpacity,RefreshControl } from 'react-native';
import flatListData from './data/flatListData';
import Swipeout from 'react-native-swipeout';
import AddModel from './components/AddModel';

class FlatListItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectionKey: null
    }
  }

  onPressItem() {
    Alert.alert('Press Item!');
  }

  render() {
    const swipeSetting = {
      autoClose: true,
      onClose: (secId, rowId, derection) => {
        if (this.setState.selectionKey != null) {
          this.setState({ selectionKey: null });
        }
      },
      onOpen: (secId, rowId, derection) => {
        this.setState({ selectionKey: this.props.item.key });
      },
      right: [

        {
          onPress: () => {
            const deletedKey = this.state.selectionKey
            Alert.alert("Thong bao", "Ban thu su muon xoa?", [
              { text: 'No', onPress: () => console.log(`Console Press`), style: 'cancel' },
              {
                text: 'Yes', onPress: () => {
                  flatListData.splice(this.props.index, 1);
                  this.props.parentFlatList.refreshFlatList(deletedKey);
                }
              }
            ])
          },
          text: 'Delete', type: 'delete'
        },

      ],
      secId: this.props.index,
      selectionId: 1
    }

    return (

      <Swipeout {...swipeSetting}>
        <TouchableOpacity onPress={() => {
          this.onPressItem();
        }}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{
              flex: 1, backgroundColor: 'gray',
              flexDirection: 'row'
            }}>
              <Image source={{ uri: this.props.item.imageUrl }}
                style={{ width: 100, height: 100, margin: 5 }}>
              </Image>

              <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={{ margin: 10 }}>{this.props.item.name}</Text>
                <Text style={{ margin: 10 }}>{this.props.item.descripsion}</Text>
              </View>

            </View>

            <View style={{ height: 1, backgroundColor: 'white' }}>
            </View>
          </View>
        </TouchableOpacity>
      </Swipeout>

    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      deletedRow: null,
      refreshing: true,
    });

    this._onPressAdd=this._onPressAdd.bind(this);
  }

  refreshFlatList = (deletedKey) => {
    this.setState((prevState) => {
      return {
        deletedRow: deletedKey
      };
    })
    this._onPressAdd=this._onPressAdd.bind(this);
  }

  _onPressAdd(){
    this.refs.addmodel.showModel;
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this._onPressAdd}>
          <View style={{ height: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./images/plus.png')}></Image>
          </View>
        </TouchableOpacity>

        <FlatList data={flatListData}
          renderItem={({ item, index }) => {
            // console.log(`Item= ${JSON.stringify(item)},Inde=${index}`)
            return (
              <FlatListItem item={item} index={index} parentFlatList={this}>

              </FlatListItem>
            );
          }} refreshControl={<RefreshControl/>}>
        </FlatList>

        <AddModel ref={'addmodel'} parentFlatList={this}>

        </AddModel>
      </View>
    );
  }
}


