import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";
import AntDesign from "@expo/vector-icons/AntDesign";

import { baseColors } from "@/constants/Colors";

interface UserInfo {
  username: string;
  name: string;
  document: string;
  enterprise: string;
  status: string;
  places: string[];
}

export default function ProfileScreen() {
  const [user] = useState({
    username: "Eliasalexandre",
    name: "Elias G. Alexandre",
    document: "9834654860LAS09",
    enterprise: "Backbone, Inc",
    status: "Ativo",
    places: ["Talatona, Dulce Vita - FGC", "Online"],
  } as UserInfo);

  const router = useRouter();

  async function onGetUserData() {
    try {
      console.log();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, padding: 12 }}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
            style={styles.backButton}
          >
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>

          <Text style={styles.title}>Informações pessoais</Text>
        </View>

        <View style={{ marginTop: 44 }}>
          <Text
            style={{
              color: baseColors.white,
              marginBottom: 10,
              fontSize: RFValue(18),
              fontWeight: "700",
            }}
          >
            {user.username}
          </Text>

          <View style={{ paddingVertical: 16 }}>
            <View style={{ marginBottom: 8 }}>
              <Text style={styles.paragraph}>{user.name}</Text>
              <Text style={styles.paragraph}>{user.document}</Text>
            </View>

            <Text style={styles.paragraph}>
              Associado: <Text>{user.enterprise}</Text>
            </Text>
            <Text style={styles.paragraph}>
              Status:{" "}
              <Text style={{ color: baseColors.lime_300, fontWeight: "700" }}>
                {user.status}
              </Text>
            </Text>
          </View>

          <View style={{ marginTop: 14 }}>
            <Text style={[styles.paragraph, { marginBottom: 12 }]}>
              Locais autorizado de ponto:
            </Text>

            <View>
              {user.places.map((place) => (
                <Text key={place} style={styles.paragraph}>
                  - {place}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: baseColors.zinc_950,
    padding: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: baseColors.lime_950,
  },
  title: {
    fontSize: RFValue(20),
    color: baseColors.white,
    fontWeight: "600",
  },
  paragraph: {
    color: baseColors.gray_400,
    fontSize: RFValue(16),
  },
});
