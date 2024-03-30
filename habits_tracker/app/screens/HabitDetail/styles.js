import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D2D2D",
  },
  taskIcon: {
    marginRight: 4,
    flexDirection: "row",
  },
  description: {
    fontWeight: "400",
    fontSize: 20,
    marginTop: 5,
  },
  taskName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  noTasks: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
    marginTop: 20,
  },
  appbar: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#2D2D2D",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  description: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "200",
    textAlign: "center",
    marginTop: 20,
  },
  icon: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: "#2D2D2D",
    borderRadius: 20,
  },
  repeatDays: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    fontSize: 20,
    color: "#fff",
    fontWeight: "200",
    textAlign: "center",
    marginTop: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    backgroundColor: "#2D2D2D",
    height: 400,
  },
  infoContainer: {
    backgroundColor: "#404040",
    borderEndStartRadius: 80,
    borderEndEndRadius: 80,
    padding: 10,
  },
  blockFollowing: {
    color: "#fff",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#fcb065",
    borderRadius: 20,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#db7a1a",
  },
  followingText: {
    color: "black",
    fontSize: 15,
    fontWeight: "400",
  },
  followingEmojy: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "500",
  }
});
