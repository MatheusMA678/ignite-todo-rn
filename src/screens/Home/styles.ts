import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  text: {
    color: "white",
  },
  header: {
    backgroundColor: "#0D0D0D",
    width: "100%",
    height: 173,
    justifyContent: "center",
    alignItems: "center",
  },

  inputContainer: {
    flexDirection: "row",
    gap: 8,
    height: 52,
    alignItems: "stretch",
    paddingHorizontal: 24,
    marginTop: -26,
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    borderRadius: 6,

    textAlignVertical: "center",
    paddingHorizontal: 16,
    fontFamily: "inter",
    color: "#F2F2F2",
  },
  button: {
    width: 52,
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
    justifyContent: "center",
    alignItems: "center",
  },

  countersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    marginTop: 32,
  },
  counter: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  counterText: {
    fontFamily: "interBold",
    fontSize: 14,
  },
  counterNumber: {
    backgroundColor: "#333333",
    color: "#D9D9D9",
    fontFamily: "interBold",
    fontSize: 12,
    borderRadius: 9999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
});
