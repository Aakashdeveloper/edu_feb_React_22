import React,{useState,useEffect} from 'react';
import DisplayComponent from './displayComponent'
const lurl = "http://zomatoajulypi.herokuapp.com/restaurant";
import { Text,View, StyleSheet,Alert,Button } from "react-native";

function HookComponent(props){
    const [title] = useState('React App');
    const [count,setCount] = useState(0);
    const [city,setCity] = useState();

    useEffect(() =>{
        fetch(lurl)
        .then((res) => res.json())
        .then((data) => {
            setCity(data)
        })
    },[])


    return(
        <View>
            <Text>{title}</Text>
            <Text>{count}</Text>
            <Button
                    title="Press me"
                    onPress={() => Alert.alert('Simple Button pressed')}
            />
            <Button
                    title="Press me"
                    onPress={() => {setCount(count+1)}}
            />
            <DisplayComponent myCity={city} />
        </View>
    )
}


export default HookComponent;