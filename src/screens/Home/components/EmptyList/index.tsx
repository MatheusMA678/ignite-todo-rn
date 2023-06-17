import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

import Clipboard from "../../../../assets/clipboard.png";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image source={Clipboard} style={{ marginBottom: 16 }} />
      <Text
        style={{
          ...styles.text,
          fontFamily: "interBold",
        }}
      >
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
