import { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import uuid from "react-native-uuid";

import { TaskTypes } from "../../@types";
import { styles } from "./styles";
import { EmptyList } from "./components/EmptyList";
import { Task } from "./components/Task";

import Logo from "../../assets/logo.png";

export function Home() {
  const [tasks, setTasks] = useState<TaskTypes[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleTaskAdd = () => {
    if (inputValue === "") {
      return Alert.alert("Opss...", "Sua tarefa não pode ser vazia.");
    }

    setTasks((prev) => [
      ...prev,
      {
        id: uuid.v4() as string,
        content: inputValue,
        isCompleted: false,
        createdAt: new Date().toISOString(),
      },
    ]);
    setInputValue("");
  };

  const handleTaskDelete = (id: string) => {
    const filterTasksWithoutDeleted = tasks.filter((task) => task.id !== id);

    Alert.alert(
      "Deletar Tarefa",
      "Tem certeza que deseja deletar essa tarefa?",
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => setTasks(filterTasksWithoutDeleted),
        },
      ]
    );
  };

  const handleCheckboxValueChange = (value: boolean, id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              isCompleted: value,
            }
          : task
      )
    );
  };

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
          onChangeText={setInputValue}
          value={inputValue}
          onSubmitEditing={handleTaskAdd}
        />
        <TouchableOpacity
          onPress={handleTaskAdd}
          style={styles.button}
          activeOpacity={0.7}
        >
          <Ionicons name="add-circle-outline" color="#F2F2F2" size={16} />
        </TouchableOpacity>
      </View>

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
          <Text style={styles.counterNumber}>{tasks.length}</Text>
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
          <Text style={styles.counterNumber}>
            {tasks.filter((task) => task.isCompleted).length}
          </Text>
        </View>
      </View>
      <FlatList
        style={styles.tasksList}
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Task
            isCompleted={item.isCompleted}
            handleCheckboxValueChange={handleCheckboxValueChange}
            onTaskDelete={handleTaskDelete}
            task={item}
          />
        )}
        ListEmptyComponent={() => <EmptyList />}
      />
    </View>
  );
}
