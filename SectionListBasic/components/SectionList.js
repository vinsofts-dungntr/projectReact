import React,{Component} from 'react';
import {View, Text,SectionList} from 'react-native';
import {sectionHeader} from '../data/SectionListData';


class SectionListItem extends Component{
    render(){
        return(
            <View style={{flexDirection:'column', backgroundColor:'blue',flex:1}}>
                <Text style={{color:'white',margin:10}}>{this.props.item.name}</Text>
                <Text style={{color:'white',margin:10}}>{this.props.item.description}</Text>
                <View style={{height:1,backgroundColor:'gray'}}></View>
            </View>
        );
    }
}

class SectionListHeader extends Component{
    render(){
        return(
            <View style={{flex:1, backgroundColor:'pink'}}>
                <Text>{this.props.section.title}</Text>
            </View>
        );
    }
}

export default class SectionListDemo extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <SectionList renderItem={({item,index})=>{
                    return(
                        <SectionListItem item={item} index={index}>

                        </SectionListItem>
                    );
                }} renderSectionHeader={({section})=>{
                    return(
                        <SectionListHeader section={section}></SectionListHeader>
                    );
                }}
                 sections={sectionHeader}>
                </SectionList>
            </View>
        );
    }
}