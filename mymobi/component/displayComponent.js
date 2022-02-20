import React from 'react';
import { Image,Text,View, StyleSheet,ScrollView } from "react-native";

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    logo: {
      width: 166,
      height: 158,
    },
});

const DisplayComponent = (props) => {

    const renderList = ({myCity}) => {
        if(myCity){
            return myCity.map((item) => {
                return(
                    <View>
                        <Text>{item.restaurant_name}</Text>
                        <Image  style={styles.logo}
                            source={{uri: item.restaurant_thumb}}
                        />
                    </View>
                )
            })
        }
    }

    return(
        <ScrollView>
           <Text>City List</Text>
            {renderList(props)}
        </ScrollView>
    )

}

export default DisplayComponent