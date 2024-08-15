import React from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Firstpage() {
    return (
        
<View style={{ padding : 10  }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row", justifyContent : 'space-between'}}>
                 <FontAwesome name="bars"  size={32} color="black" />

                <Text style={{ fontSize: 25 }}>หมายเหตุทั้งหมด</Text>
                <FontAwesome name="calendar"  size={32} color="black" /> 
            
            </View>
            
            <View style={{ marginTop: 20 , flexDirection : 'row', justifyContent : 'space-around' }}>
                    <Text style={{ fontSize: 20 , borderBottomWidth : 3, borderColor : '#FFCC00'}}>หมายเหตุ</Text>
                    <Text style={{ fontSize: 20, color : 'gray' }}>เตือนความจำ</Text>
                    <Text style={{ fontSize: 20 , color : 'gray' }}>บุ๊คมาร์ค</Text>
                    <FontAwesome name="filter"  size={32} color="black" />
                </View>

                <View style={{flexDirection : 'row' , marginTop: 100 , justifyContent : 'center' }}>
                <Image style={{ width : 200 , height : 200 }}source={require("../../assets/note.png")}/>
                
                </View>
                <View style={{ marginTop: 10 , alignItems : 'center' }}>
                <Text style={{ fontSize: 20 }}>ไม่มีโน๊ต</Text>
                <Text style={{ color : 'gray' }}>คุณไม่ได้สร้างบันทึกเลย</Text>
                </View>

                <View style={{ padding: 50 }}>
          <Button title="+สร้างโน๊ตใหม่" color="#FFCC00" />
        </View>
        </View>    
    );
}
