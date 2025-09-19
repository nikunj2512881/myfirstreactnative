/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { FlatList, StatusBar, StyleSheet, useColorScheme, View,Text, Alert } from 'react-native';
import { useState,forwardRef,useImperativeHandle, Children, useRef, useEffect} from 'react'
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';


function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

const CildComponent = () => {
  return <Text>Hello World</Text>
}

const MyChild = forwardRef((prop,ref) => {
  useImperativeHandle(ref,() => ({
    hello:() => {
      Alert.alert("Hey")
    }
  }),[])
  return <Text>Hello Work</Text>
})


function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  const [data , setData] = useState(["first","nikunj"])
  const ref = useRef(null)

  useEffect(() => {
    if(ref.current) {
      ref.current.hello()
    }
  },[])

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={({item}) => {
        return <Text> item </Text>
       }}/>
    <CildComponent/>
    <MyChild ref={ref}/>
      </View>
     
  
  );
}


const styles = StyleSheet.create({
  container: {
    display:'flex',
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center',
    flex: 1,
    width:'100%',
    height:'100%',
    backgroundColor:'red'
  },
});

export default App;
