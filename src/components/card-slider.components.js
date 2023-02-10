import React, { Component } from "react"
import {
  View,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from "react-native"

// const ITEM_WIDTH = Dimensions.get("window").width
// const ITEM_HEIGHT = 200

const cards = [
  { title: "Movie 1", posterUrl: require("../../assets/image/novel/1.jpg") },
  { title: "Movie 2", posterUrl: require("../../assets/image/novel/2.jpg") },
  { title: "Movie 3", posterUrl: require("../../assets/image/novel/3.jpg") },
  { title: "Movie 4", posterUrl: require("../../assets/image/novel/4.jpg") },
]

export default function SimpleCardCarousel() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView
        horizontal={true}
        decelerationRate={"normal"}
        // snapToInterval={ITEM_WIDTH}
        bounces={false}
        style={{  paddingHorizontal: 1 }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={12}
      >
        {cards.map((item, idx) => {
          return (
            <View
              style={{
                width: 200,
                height: 300,
              }}
            >
              <ImageBackground
                source={item.posterUrl}
                style={{
                  flex: 1,
                  resizeMode: "cover",
                  justifyContent: "center",
                }}
              />
            </View>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}