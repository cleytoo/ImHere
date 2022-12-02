import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  input: {
    height: 56,
    flex: 1,
    backgroundColor: "#1F1E25",
    fontSize: 16,
    borderRadius: 4,
    color: "#fff",
    paddingHorizontal: 20,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 4,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  form: {
    width: "100%",
    marginTop: 36,
    marginBottom: 42,
    flexDirection: "row",
    alignItems: "center",
  },
  listEmptyText: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
  },
});
