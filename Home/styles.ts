import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#72bb79",
    height:"100%",
    width:"100%",
  },

  Tittle: {
    fontSize: 23,
    color: "#FFF",
    marginLeft: 75,
    marginTop:13,
    fontFamily: "Poppins_500Medium",
  },
  cart:{
    marginLeft:255
  },
 // cartStatus:{
  //  backgroundColor:"#ffff",
  //  height: 18,
 //   width: 18,
 //   position:"absolute",
 //   left:321,
  //  bottom:22,
 //   borderRadius:15,
 //   color:"#72bb79",
    
 // },
  user:{
    marginLeft:50
  },
  buttonStyle:{
    display:"flex",
    flexDirection: 'row',
    marginTop:90,
  },
  buttonCotainerUser:{
    width:50,
    height:50,
    borderRadius:50,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.18)',
    shadowColor: 'rgba(31, 38, 135, 0.37)',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 32,
    elevation: 4,
    
  }


})