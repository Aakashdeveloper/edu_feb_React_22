import React from 'react';
import { Image,Text,View, StyleSheet,ScrollView } from "react-native";
import HookComponent from './hooksComponent';

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    logo: {
      width: 166,
      height: 158,
    },
});

const Home = () => {
    return(
        <ScrollView>
            <HookComponent/>
            <Text>Dominos</Text>
            <Image  style={styles.logo}
                source={{uri: 'https://b.zmtcdn.com/data/pictures/chains/3/143/c77dfea619f2d7786a7d054afab5cd88_featured_v2.jpg'}}
            />
        </ScrollView>
        
    )
}

export default Home