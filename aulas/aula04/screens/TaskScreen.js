import { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import {
  Appbar,
  List,
  Text,
  TextInput,
  FAB,
  Modal,
  Button,
} from "react-native-paper";

function TaskScreen() {
  const [tarefas, setTarefas] = useState([
    { id: 1, nome: "Estudar", concluida: true },
  ]);
  const [tarefa, setTarefa] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [exibeModal, setExibeModal] = useState(false);
  const [exibeAlerta, setExibeAlerta] = useState(false);
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Lista de Tarefas" />
      </Appbar.Header>
      <FlatList
        data={tarefas}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <List.Item
            onPress={() => {
              item.concluida = !item.concluida;
              setRefresh(!refresh);
            }}
            onLongPress={() => setExibeAlerta(true)}
            title={item.nome}
            right={(props) => (
              <List.Icon
                {...props}
                icon={
                  item.concluida ? "check-circle-outline" : "circle-outline"
                }
              />
            )}
          />
        )}
      />
      <FAB style={styles.fab} icon="plus" onPress={() => setExibeModal(true)} />
      <Modal visible={exibeModal} contentContainerStyle={styles.modal}>
        <TextInput
          label="Nova Tarefa"
          value={tarefa}
          onChangeText={(text) => setTarefa(text)}
        />
        <Button
          onPress={() => {
            if (tarefa) {
              setTarefas([
                ...tarefas,
                { id: tarefas.length + 1, nome: tarefa, concluida: false },
              ]);
            }
            setExibeModal(false);
            setTarefa("");
          }}
        >
          Salvar
        </Button>
      </Modal>
      <Modal visible={exibeAlerta} contentContainerStyle={styles.modal}>
        <Text variant="labelLarge">Deseja apagar a tarefa?</Text>
        <Button onPress={()=> setExibeAlerta(false)}>Não</Button>
        <Button onPress={()=> setExibeAlerta(false)}>Sim</Button>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  fab: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
  modal: {
    backgroundColor: "white",
    margin: 16,
    padding: 16,
    borderRadius: 8,
  },
});

export default TaskScreen;
