import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#333333",
    height: 64,
    marginBottom: 8,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  checkbox: {
    borderRadius: 9999,
    width: 18,
    height: 18,
  },
  taskContent: {
    flex: 1,
    fontFamily: "inter",
    fontSize: 14,
  },
  deleteButton: {
    width: 32,
    height: 32,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
