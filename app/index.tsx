import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const chats = [
  { id: "1", name: "WhatsApp", msg: "New: Set the mood with status reaction stickers...", time: "Saturday", unread: 8 },
  { id: "2", name: "Mayur", msg: "Are we still on for tomorrow?", time: "5:40 PM", unread: 0 },
  { id: "3", name: "Paras", msg: "okk", time: "2:09 PM", unread: 0 },
  { id: "4", name: "Group Chat", msg: "Sent a photo", time: "8:00 AM", unread: 3 },
  { id: "5", name: "Taylor", msg: "lol", time: "2026-01-22", unread: 1 },
];

export default function Index() {
  return (
    <View style={styles.screen}>
      {/* top icon row */}
      <View style={styles.topRow}>
        <Text style={styles.icon}>⋯</Text>
        <View style={styles.topRight}>
          <Text style={styles.icon}>📷</Text>
          <Text style={styles.plus}>＋</Text>
        </View>
      </View>

      <Text style={styles.title}>Chats</Text>

      {/* fake search bar */}
      <View style={styles.searchBar}>
        <Text style={styles.searchText}>🔍 Ask Meta AI or Search</Text>
      </View>
      
      {/* TODO: Add archived row */}
      
      {/* Basic chat list */}
      <ScrollView style={styles.list}>
        {chats.map((c) => (
          <View key={c.id} style={styles.chatRow}>
            <View style={styles.avatar} />
            <View style={styles.chatMiddle}>
              <Text style={styles.chatName}>{c.name}</Text>
              <Text style={styles.chatMsg}>{c.msg}</Text>
            </View>
            <Text style={styles.chatTime}>{c.time}</Text>
          </View>
        ))}
      </ScrollView>
      
      {/* TODO: Add unread badges */}
      {/* TODO: Add alert button */}
      {/* TODO: Add bottom navigation */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0b0b0b",
    paddingTop: 50,
  },
  topRow: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  icon: { color: "white", fontSize: 22 },
  plus: {
    color: "black",
    backgroundColor: "#35c96b",
    width: 34,
    height: 34,
    borderRadius: 17,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    overflow: "hidden",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "700",
    paddingHorizontal: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  searchBar: {
    marginHorizontal: 16,
    borderRadius: 14,
    backgroundColor: "#2a2a2a",
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  searchText: { color: "#bdbdbd", fontSize: 16 },
  list: { flex: 1 },
  chatRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#141414",
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#295a57",
    marginRight: 12,
  },
  chatMiddle: { flex: 1 },
  chatName: { color: "white", fontSize: 18, fontWeight: "600", marginBottom: 3 },
  chatMsg: { color: "#9a9a9a", fontSize: 14 },
  chatTime: { color: "#8a8a8a", fontSize: 14 },
});
