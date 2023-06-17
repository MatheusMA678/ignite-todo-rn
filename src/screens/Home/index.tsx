import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

import Logo from "../../assets/logo.png";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          cursorColor="#F2F2F2"
          blurOnSubmit
        />
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Ionicons name="add-circle-outline" color="#F2F2F2" size={16} />
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.countersContainer}>
          <View style={styles.counter}>
            <Text
              style={{
                ...styles.counterText,
                color: "#4EA8DE",
              }}
            >
              Criadas
            </Text>
            <Text style={styles.counterNumber}>0</Text>
          </View>
          <View style={styles.counter}>
            <Text
              style={{
                ...styles.counterText,
                color: "#8284FA",
              }}
            >
              Concluídas
            </Text>
            <Text style={styles.counterNumber}>0</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
