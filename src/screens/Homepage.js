
import React, { useState } from "react";
import { StatusBar, SafeAreaView, View, Text, ScrollView,StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import BookCard from "../components/book-card.conponents";
import SimpleCardCarousel from "../components/card-slider.components";
import Gategories from "../components/gategories";
import { SafeArea } from "../components/utility/safe-area.component";



const SearchContainer = styled.View`
padding: 16px;
`;

export default function Homepage() {

    const [searchQuery, setSearchQuery] = useState("");
    const onChangeSearch = (query) => setSearchQuery(query);
    return (

        <SafeArea>
            <ScrollView>
                <SearchContainer >
                    <Searchbar
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />
                </SearchContainer>
                
                <View>
                    <Text style={styles.textcolor}>
                        HIDE LIGHT DAY
                    </Text>
                </View>
                <View style={styles.search}>
                    <SimpleCardCarousel/>
                </View>
                <Gategories/>
                <View style={styles.list}>
                    <BookCard />
                </View>
            </ScrollView>
        </SafeArea>
    );
}

const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    search: 
    {
        padding: 16,
    },
    list: 
    {
        flex:1,
        padding: 16,
    },
    textcolor:{
        color:"#ffffff",
        fontSize:35,
        margin:10,
    },
    
});

