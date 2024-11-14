import {
  Text,
  View,
  ScrollView,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity 
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={styles.container}>
        <Image
            source={{
              uri: "https://p16-va-tiktok.ibyteimg.com/obj/musically-maliva-obj/a45cf75986e5f90595049b68725bfd87.png",
              width: 100,
              height: 100,
            }}
          />
          <Text style={styles.text1}>TikTok</Text>
          
          <TextInput style={styles.inputtext1} placeholder="Email atau Nama Pengguna" />
          
          <TextInput style={styles.inputtext2} placeholder="Kata Sandi" />
          
          <TouchableOpacity style={styles.button2}onPress={()=>alert('')}>
            <Text style={styles.text4}>Lupa Kata Sandi?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1}onPress={()=>alert('LOGIN')}>
            <Text>Masuk</Text>
          </TouchableOpacity>
          
          
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
},
button1:{
  backgroundColor: "white",
  borderRadius:5,
  borderWidth:1,
  fontSize:20,
  width:300,
  height:30,
  margin:10,
  alignItems:"center"
},
button2:{

 right:93,
},
text4:{
 color:"blue",
},
text1:{
  fontFamily:"Bold",
  fontSize:50,
  color:"black",
},

inputtext1:{
 color: "black",
 borderRadius:5,
 borderWidth:1,
 fontSize:15,
 width:300,
},
inputtext2:{
  color: "black",
  borderRadius:5,
  borderWidth:1,
  fontSize:15,
  width:300,
  height:30,
  marginTop:10
 },


})