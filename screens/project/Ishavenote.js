import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const posts = [
  { id: 1, username: 'บันทึก1', content: 'เรื่องของคุณ', image: 'https://picsum.photos/200' },
  { id: 2, username: 'บันทึก2', content: 'เรื่องของคุณ', image: 'https://picsum.photos/210' },
  { id: 3, username: 'บันทึก3', content: 'เรื่องของคุณ', image: 'https://picsum.photos/220' },
  { id: 4, username: 'บันทึก4', content: 'เรื่องของคุณ', image: 'https://picsum.photos/230' },
  { id: 5, username: 'บันทึก5', content: 'เรื่องของคุณ', image: 'https://picsum.photos/113' },
  { id: 6, username: 'บันทึก6', content: 'เรื่องของคุณ', image: 'https://picsum.photos/114'  },
  { id: 7, username: 'บันทึก7', content: 'เรื่องของคุณ', image: 'https://picsum.photos/115'  },
  { id: 8, username: 'บันทึก8', content: 'เรื่องของคุณ', image: 'https://picsum.photos/116'  },
  
  // Add more posts here...
];

const Item2 = ({ item }) => (
    <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc', flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row', flex: 1, paddingRight: 20 }}>
            {item.image && <Image source={{ uri: item.image }} style={{ flex: 1, resizeMode: 'cover', aspectRatio: 1 / 1 }} />}
        </View>      
        <View style={{ flex: 3 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.username}</Text>
            <Text style={{ marginVertical: 5 }}>{item.content}</Text>
        </View>
    </View>
);

const Item3 = ({ item }) => (
    <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc', flexDirection : 'column', flex : 1 }}>
      <View style={{ flexDirection : 'row' }}>
        {item.image && <Image source={{ uri: item.image }} style={{ flex:1, resizeMode: 'cover', aspectRatio : 1/1 }} />}
      </View>      
      <View style={{ flex:1, paddingTop:10,  alignItems : 'stretch',}}>
        <Text style={{fontSize: 18, fontWeight: 'bold' }}>{item.username}</Text>
        <Text style={{ marginVertical: 5 }}>{item.content}</Text>
      </View>
    </View>
);

const Ishavenote = () => {
  return (
    <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
            <FontAwesome name="bars" size={32} color="black" />
            <Text style={{ fontSize: 25 }}>หมายเหตุทั้งหมด</Text>
            <FontAwesome name="calendar" size={32} color="black" /> 
        </View>
        
        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, borderBottomWidth: 3, borderColor: '#FFCC00' }}>หมายเหตุ</Text>
            <Text style={{ fontSize: 20, color : 'gray'}}>เตือนความจำ</Text>
            <Text style={{ fontSize: 20, color: 'gray' }}>บุ๊คมาร์ค</Text>
            <FontAwesome name="filter" size={32} color="black" />
        </View>
      
        <FlatList
            data={posts}
            renderItem={({ item }) => <Item3 item={item} />}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            horizontal={false}
            style={{ marginTop: 20 }}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default Ishavenote;
