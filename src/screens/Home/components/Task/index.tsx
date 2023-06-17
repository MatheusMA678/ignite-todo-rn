import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

import { TaskTypes } from "../../../../@types";
import { styles } from "./styles";
import { useState } from "react";

interface TaskProps {
  task: TaskTypes;
  isCompleted: boolean;
  handleCheckboxValueChange: (value: boolean, id: string) => void;
  onTaskDelete: (id: string) => void;
}

export function Task({
  task,
  isCompleted,
  handleCheckboxValueChange,
  onTaskDelete,
}: TaskProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View style={styles.container}>
      <Checkbox
        onValueChange={(value) => handleCheckboxValueChange(value, task.id)}
        value={isCompleted}
        style={styles.checkbox}
        color={isCompleted ? "#5E60CE" : "#4EA8DE"}
      />
      <Text
        style={{
          ...styles.taskContent,
          textDecorationLine: task.isCompleted ? "line-through" : "none",
          color: task.isCompleted ? "#808080" : "#F2F2F2",
        }}
      >
        {task.content}
      </Text>

      <Pressable
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onPress={() => onTaskDelete(task.id)}
        style={{
          ...styles.deleteButton,
          backgroundColor: isPressed ? "#333333" : "transparent",
        }}
      >
        <Feather
          name="trash-2"
          color={isPressed ? "#E25858" : "#808080"}
          size={16}
        />
      </Pressable>
    </View>
  );
}
