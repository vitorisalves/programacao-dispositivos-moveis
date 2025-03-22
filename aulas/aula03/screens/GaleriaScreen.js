import { View, Text, StyleSheet, Image, ScrollView, Touchable, TouchableOpacity } from "react-native";

function GaleriaScreen() {
  const imagens = [
    "https://picsum.photos/200?random=1",
    "https://picsum.photos/200?random=2",
    "https://picsum.photos/200?random=3",
    "https://picsum.photos/200?random=4",
    "https://picsum.photos/200?random=5",
    "https://picsum.photos/200?random=6",
    "https://picsum.photos/200?random=7",
    "https://picsum.photos/200?random=5",
    "https://picsum.photos/200?random=34234234",
    "https://picsum.photos/200?random=123123",
    "https://picsum.photos/200?random=123",
    "https://picsum.photos/200?random=345",
    "https://picsum.photos/200?random=456",
    "https://picsum.photos/200?random=567",
    "https://picsum.photos/200?random=9999",
    "https://picsum.photos/200?random=0080",
    "https://picsum.photos/200?random=9",
    "https://picsum.photos/200?random=9999",
    "https://picsum.photos/200?random=888888",
    "https://picsum.photos/200?random=77777",
    "https://picsum.photos/200?random=777",
    "https://picsum.photos/200?random=6666",
    "https://picsum.photos/200?random=666",
    "https://picsum.photos/200?random=55555",
    "https://picsum.photos/200?random=5555555",
    "https://picsum.photos/200?random=5555",
    "https://picsum.photos/200?random=55",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Galeria de Imagens</Text>
      </View>
      <ScrollView contentContainerStyle={styles.grid}>
        {imagens.map((imagem, index) => (
          <TouchableOpacity style={styles.imagem} >
            <Image style={{ flex: 1, }} source={{ uri: imagem }} key={index} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    height: 64,
    padding: 16,
    justifyContent: "center",
    elevation: 3,
    marginBottom: 8,
    backgroundColor: "gray",
  },
  appTitle: {
    fontSize: 24,
    color: "white",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    paddingLeft: 8,
  },
  imagem: {
    height: 100,
    width: "31%",
  },
});

export default GaleriaScreen;
