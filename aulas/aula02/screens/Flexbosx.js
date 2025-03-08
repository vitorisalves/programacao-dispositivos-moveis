import { View } from "react-native"

function Flexbox() {
  return <View style={{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end"
    , backgroundColor: "purple"
  }}>
    <View style={{ height: 50, width: 50, backgroundColor: "blue" }}></View>
    <View style={{ height: 50, width: 50, backgroundColor: "green" }}></View>
    <View style={{ height: 50, width: 50, backgroundColor: "yellow" }}></View>
  </View>

}

export default Flexbox