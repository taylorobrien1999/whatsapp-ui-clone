import React from "react";
import { Alert, StyleSheet, Text, View, ScrollView, Pressable } from "react-native";

const chats = [
  { id: "1", name: "WhatsApp", msg: "New: Set the mood with status reaction stickers…", time: "Saturday", unread: 8 },
  { id: "2", name: "Alex", msg: "Are we still on for tomorrow?", time: "5:40 PM", unread: 0 },
  { id: "3", name: "Sam", msg: "okkk", time: "2:09 PM", unread: 0 },
  { id: "4", name: "Group Chat", msg: "Sent a photo", time: "8:00 AM", unread: 3 },
  { id: "5", name: "Taylor", msg: "lol", time: "2026-01-22", unread: 1 },
];

export default function Index() {
  function onAlertPress() {
    Alert.alert("Alert Button pressed");
  }

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

      {/* search bar */}
      <View style={styles.searchBar}>
        <Text style={styles.searchText}>🔍 Ask Meta AI or Search</Text>
      </View>

      {/* archived row */}
      <View style={styles.archivedRow}>
        <Text style={styles.archivedIcon}>🗃️</Text>
        <Text style={styles.archivedText}>Archived</Text>
      </View>

      {/* chat list */}
      <ScrollView style={styles.list}>
        {chats.map((c) => (
          <View key={c.id} style={styles.chatRow}>
            <View style={styles.avatar} />
            <View style={styles.chatMiddle}>
              <Text style={styles.chatName}>{c.name}</Text>
              <Text style={styles.chatMsg} numberOfLines={1}>
                {c.msg}
              </Text>
            </View>

            <View style={styles.chatRight}>
              <Text style={[styles.chatTime, c.unread > 0 ? styles.timeGreen : null]}>{c.time}</Text>
              {c.unread > 0 ? (
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadText}>{c.unread}</Text>
                </View>
              ) : (
                <View style={{ height: 22 }} />
              )}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* alert button at the bottom */}
      <Pressable style={styles.alertBtn} onPress={onAlertPress}>
        <Text style={styles.alertBtnText}>Alert</Text>
      </Pressable>

      {/* bottom nav*/}
      <View style={styles.nav}>
        <Text style={styles.navItem}>Updates</Text>
        <Text style={styles.navItem}>Calls</Text>
        <Text style={styles.navItem}>Communities</Text>
        <Text style={[styles.navItem, styles.navActive]}>Chats</Text>
        <Text style={styles.navItem}>You</Text>
      </View>
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

  archivedRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#1e1e1e",
  },
  archivedIcon: { color: "#9a9a9a" },
  archivedText: { color: "#9a9a9a", fontSize: 18, fontWeight: "600" },

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

  chatRight: { alignItems: "flex-end", width: 90 },
  chatTime: { color: "#8a8a8a", fontSize: 14, marginBottom: 6 },
  timeGreen: { color: "#35c96b" },

  unreadBadge: {
    minWidth: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#35c96b",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
  },
  unreadText: { color: "black", fontWeight: "700" },

  alertBtn: {
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#1f1f1f",
    paddingVertical: 12,
    alignItems: "center",
  },
  alertBtnText: { color: "white", fontSize: 16, fontWeight: "600" },

  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#1e1e1e",
    backgroundColor: "#111",
  },
  navItem: { color: "#8a8a8a" },
  navActive: { color: "white", fontWeight: "700" },
});

