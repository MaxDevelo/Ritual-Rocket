import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#404040",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
    alignSelf: "flex-start",
  },
  categoryList: {
    width: "95%",
    padding: 10,
    marginTop: 20,
    alignSelf: "center",
  },
  categoryBlock: {
    width: "100%",
    padding: 20,
    backgroundColor: "#303030",
    borderBottomWidth: 1,
    borderBottomColor: "#404040",
    marginTop: 5,
    borderRadius: 20,
    flexDirection: "column",
  },
  categoryTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
  categoryDescription: {
    marginTop: 10,
    color: "#fff",
    fontSize: 16,
    fontWeight: "200",
  },
  appbar: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    backgroundColor: "#303030",
    elevation: 0,
    alignSelf: "flex-start",
  },
});
