import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      gap: 10,
      position: 'absolute',
      left: '10%',
      right: '10%',
      bottom: 550,
      backgroundColor: "#161616",
      borderColor: "#393E46",
      borderRadius: 10,
      borderWidth: 2,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    },
    text: {
      color: "#A02334",
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });