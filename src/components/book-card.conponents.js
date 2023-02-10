import { StyleSheet, Text } from "react-native";
import React from "react";
import { Card,Button } from "react-native-paper";


export default function BookCard({ ...restaurant }) {
    const {
        name = "BOOK",
        icon,
        photos = ["https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781668002179/fairy-tale-9781668002179_hr.jpg",
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant
    return (
        <Card elevation={5} style={styles.card}>
            <Card.Cover key={name} style={styles.cover} source={{
                uri:
                    photos[0]
            }} />
            <Text style={styles.title}>{name}</Text>
        </Card>

        


    );
}
const styles = StyleSheet.create({
    card: { backgroundColor: "gray" },
    cover: { padding: 20, backgroundColor: "#434242" },
    title: { padding: 16 },
});




/////////////////////////////////////////////////////////////

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import { CardList } from 'react-native-card-list';


// const cards = [
//     {
//       id: "0",
//       picture: require('../../assets/image/novel/1.jpg'),
//       content: <Text>Starry Night</Text>
//     },
//     {
//       id: "1",
//       picture: require('../../assets/image/novel/2.jpg'),
//       content: <Text>Wheat Field with Cypresses</Text>
//     },
//     {
//       id: "2",
//       title: "Bedroom in Arles",
//       picture: require('../../assets/image/novel/3.jpg'),
//       content: <Text>Bedroom in Arles</Text>
//     }
//   ]


//   export default function BookCard () {
    
//       return (
//         <View style={styles.container}>
//           <CardList cards={cards} />
//         </View>
//       );
    
//   }

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     }
// });



//////////////////////////////////////////////////////////
