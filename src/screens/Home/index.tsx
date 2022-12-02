import { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export const Home = () => {
  const [participants, setParticipants] = useState<string[]>([]);
  const [newParticipant, setNewParticipant] = useState("");

  const handleParticipantAdd = () => {
    if (participants.includes(newParticipant)) {
      return Alert.alert(
        "Participante existe",
        "Já existe um participante na lista com esse nome"
      );
    }
    if (newParticipant.length === 0) {
      return Alert.alert("Nome em branco!");
    }
    setParticipants((state) => [...state, newParticipant]);
    setNewParticipant("");
  };

  const handleParticipantRemove = (name: string) => {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: "SIM",
        onPress: () =>
          setParticipants((state) => state.filter((item) => item !== name)),
      },
      {
        text: "NÃO",
        style: "cancel",
      },
    ]);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.eventName}>Evento inicial</Text>
        <Text style={styles.eventDate}>sábado, 26 de novembro de 2022</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor="#6b6b6b"
            onChangeText={setNewParticipant}
            value={newParticipant}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleParticipantAdd}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={participants}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Participant
              key={item}
              name={item}
              onRemove={handleParticipantRemove}
            />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Ninguém chegou no evento ainda? Adicione participantes a sua lista
              de presença.
            </Text>
          )}
        />
      </View>
    </>
  );
};
