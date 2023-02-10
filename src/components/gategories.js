import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import gategories from "../config/gategories";
  import colors from "../config/colors";
  import SPACING from "../config/SPACING";
  
  const Gategories = ({ onChange }) => {
    const [activeCategoryId, setActiveCategoryId] = useState(null);
  
    const handlePress = (id) => {
      setActiveCategoryId(id);
      onChange(id);
    };
  
    return (
      <FlatList
        horizontal={true}
        data={gategories}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ marginVertical: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handlePress(item.id)}
            style={{ marginRight: 20, alignItems: "center" }}
          >
            <Text
              style={[
                { color: colors.secondary, fontSize: 20 },
                activeCategoryId === item.id && { color: colors.primary },
              ]}
            >
              {item.name}
            </Text>
            {activeCategoryId === item.id && (
              <View
                style={{
                  height: 10,
                  width: 10,
                  backgroundColor: colors.primary,
                  borderRadius: 5,
                  marginTop: 5,
                }}
              />
            )}
          </TouchableOpacity>
        )}
      />
    );
  };
  
  export default Gategories;
  
  const styles = StyleSheet.create({});
  