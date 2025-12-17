import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";

import { baseColors } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function NotificationDetailsScreen() {
  const router = useRouter();

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

          <Text style={styles.title}>Detalhes</Text>
        </View>

        <ScrollView style={styles.content} contentContainerStyle={{ gap: 6 }}>
          <View>
            <Text style={{ color: baseColors.gray_400, fontSize: RFValue(16) }}>
              Reajuste requerido aos 12 Jan 2024
            </Text>

            <View style={{ marginTop: 24, gap: 6 }}>
              <Text
                style={{
                  color: baseColors.white,
                  fontSize: RFValue(16),
                  textTransform: "uppercase",
                }}
              >
                Ponto
              </Text>
              <Text
                style={{ color: baseColors.gray_400, fontSize: RFValue(13) }}
              >
                Data: 15 Fevereiro 2025
              </Text>
              <Text
                style={{ color: baseColors.gray_400, fontSize: RFValue(13) }}
              >
                Ponto Anterior: 17:51
              </Text>
              <Text
                style={{ color: baseColors.gray_400, fontSize: RFValue(13) }}
              >
                Ponto Requerido: 12:30
              </Text>
            </View>

            <View style={{ marginTop: 34 }}>
              <Text
                style={{ color: baseColors.gray_400, fontSize: RFValue(13) }}
              >
                Status:{" "}
                <Text
                  style={{
                    textTransform: "uppercase",
                    color: baseColors.lime_300,
                  }}
                >
                  Aprovado
                </Text>
              </Text>

              <View style={{ marginTop: 24 }}>
                <Text
                  style={{ color: baseColors.white, fontSize: RFValue(13) }}
                >
                  Nota:
                </Text>
                <Text
                  style={{
                    color: baseColors.gray_400,
                    fontSize: RFValue(13),
                    marginTop: 12,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  fugit velit eveniet culpa laudantium expedita suscipit dolorum
                  voluptatibus tenetur. Quibusdam quos dignissimos laudantium
                  amet, similique unde fuga iste cupiditate quod.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
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
    backgroundColor: baseColors.zinc_900,
  },
  title: {
    fontSize: RFValue(20),
    color: baseColors.white,
    fontWeight: "600",
  },
  content: {
    marginTop: 34,
    gap: 1,
  },
  item: {},
});
