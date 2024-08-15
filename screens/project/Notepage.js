import React from 'react';
import { Button, Image, ScrollView, Text, TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Notepage() {
    return (
        
<View style={{ padding : 10  }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row", justifyContent : 'space-between' , marginTop:15}}>
                 <FontAwesome name="arrow-left"  size={32} color="black" />

                
                <FontAwesome name="microphone"  size={32} color="black" /> 
                <FontAwesome name="bookmark"  size={32} color="black" /> 
                <FontAwesome name="plus"  size={32} color="black" /> 
            
            </View>
            
            <View style={{ marginTop: 20 , flexDirection : 'row' , marginLeft: 10 }}>
                    <TextInput style={{ fontSize: 20 , color :'gray' ,fontWeight : 'bold'}}>หัวข้อ</TextInput>
                </View>
                
                <View style={{ marginTop: 20 , marginLeft: 10 , flexDirection : 'row' }}>
                    <TextInput style={{ fontSize: 20 , color :'gray' }}>เขียนที่นี่</TextInput>
                </View>

        </View>    
    );
}
