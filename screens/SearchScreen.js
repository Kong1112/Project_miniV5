import { View, Text, SafeAreaView, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react';
import Colors from '../data/Colors';
import { FontAwesome } from '@expo/vector-icons';
import Search from '../componenst/Search';
import Products from '../data/Products';
import { useNavigation } from "@react-navigation/native";
import { Button } from 'native-base';

const SearchTest = () => {

    const [input, setInput] = useState("");
    const navigation = useNavigation();

    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingHorizontal: 20,
                backgroundColor: Colors.lightSkyBlue,
            }}
        >
            <View style={styles.header}>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                        Welcome to 
                    </Text>
                    <Text style={{ fontSize: 35, fontWeight: "bold", color: Colors.orange }}>
                        Shopping Online
                    </Text>
                </View>
            </View>
            <View style={{ marginTop: 20, flexDirection: "row" }}>
                <View style={styles.searchContainer}>
                    <FontAwesome name="search" size={24} style={{ marginLeft: 15 }} />
                    <TextInput
                        value={input}
                        onChangeText={(text) => setInput(text)}
                        placeholder='Search'
                        style={styles.input1}
                    />
                </View>
                <Button
                onPress={() => navigation.navigate("Cart")}
                 style={styles.sortBtn}>
                    <FontAwesome name="sort-amount-desc" size={24} style={{ color: Colors.white }} />
                </Button>
            </View>
            <Search data={Products} input={input} setInput={setInput} />
        </SafeAreaView>
    )
}

///////
const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    searchContainer: {
        height: 50,
        backgroundColor: Colors.cyan,
        borderRadius: 10,
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    input1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.black,
        flex: 1
    },
    sortBtn: {
        marginLeft: 10,
        height: 50,
        width: 50,
        backgroundColor: Colors.forestGreen,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 18,
    }
})

export default SearchTest;