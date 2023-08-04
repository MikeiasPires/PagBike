import { cloneElement } from "react";
import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    container:{
    backgroundColor: "#72BB79",
    height:"100%",
    width:"100%",
    },
    containerBox:{
      
    backgroundColor:"#ffff",
    width:"100%",
    height:"83%",
    borderRadius:15,
    marginTop:23,
    },
    textamount:{
      fontSize: 18,
    },
    Title:{
      marginTop:90,
      marginLeft:142,
      fontSize: 25,
      color: "#FFF",
      fontFamily: "Poppins_500Medium",

    },
    containerItem:{
      width:140,
      height:120,
      backgroundColor:"#EDE5E5",
      borderRadius:23,
      marginTop:20,
      marginLeft:15,


    },
    imageItem:{
     marginTop:25,
     marginLeft:5,

    },
    numbers:{
      fontSize:20,
      width:45,
      height:40,
      backgroundColor:"#D9D9D9",
      borderRadius:8,
    },
    values:{
      display:"flex",
      flexDirection: 'row',
      alignItems:"center",
      gap:5,
      marginTop:35
    },
    containerAlign:{
      display:"flex",
      flexDirection: 'row',

    },
    text:{
        fontSize:23,
        marginTop:25,

    },
    value:{
        fontSize:30,

    },
    lettertop:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    },
    phrasesletters:{
        fontSize:18,
    },
    valuex:{
        fontSize:20,
    },  
    
    button: {
        color: "white",
        backgroundColor: "#72BB79",
        width:205,
        height:50,
        borderRadius:8,
      },
      buttonText:{
        color: "white",
        fontSize: 20,
        textAlign: 'center',
        justifyContent:"center",
        marginTop:9
      },
      buttonMove:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginTop:580,
        marginLeft:100,
        position: 'absolute'
      },
      motionName:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",

      },
      closeIcon:{
        marginLeft:110,
        marginTop:30,
      }

})