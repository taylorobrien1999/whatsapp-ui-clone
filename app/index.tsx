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
      <Text style={styles.title}>Chats</Text>
      
      {/* TODO: Add search bar */}
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
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "700",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  list: { 
    flex: 1 
  },
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
  chatMiddle: { 
    flex: 1 
  },
  chatName: { 
    color: "white", 
    fontSize: 18, 
    fontWeight: "600",
    marginBottom: 3,
  },
  chatMsg: { 
    color: "#9a9a9a", 
    fontSize: 14 
  },
  chatTime: { 
    color: "#8a8a8a", 
    fontSize: 14 
  },
});