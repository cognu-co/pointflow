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
import Ionicons from "@expo/vector-icons/Ionicons";

import { baseColors } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function HistoryScreen() {
  const router = useRouter();

  function goToAdjustments(id: string) {
    router.push(`/(private)/(options)/history/point-adjustment/${id}`);
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

          <Text style={styles.title}>Histórico de pontos</Text>
        </View>

        <ScrollView style={styles.content} contentContainerStyle={{ gap: 8 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 12,
              borderWidth: 1,
              borderColor: baseColors.zinc_800,
              backgroundColor: baseColors.zinc_900,
              borderRadius: 8,
              minHeight: 90,
            }}
          >
            <View style={{ gap: 4 }}>
              <Text style={{ color: baseColors.white, fontSize: RFValue(15) }}>
                17:51{" "}
                <Text
                  style={{
                    textTransform: "uppercase",
                    color: baseColors.lime_300,
                  }}
                >
                  Entrada
                </Text>
              </Text>

              <Text
                style={{ color: baseColors.gray_400, fontSize: RFValue(13) }}
              >
                15 Fevereiro 2025
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => goToAdjustments("7456y")}
              style={{
                padding: 6,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: baseColors.blue_500,
              }}
            >
              <Ionicons
                name="settings-sharp"
                size={24}
                color={baseColors.blue_500}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 12,
              borderWidth: 1,
              borderColor: baseColors.zinc_800,
              backgroundColor: baseColors.zinc_900,
              borderRadius: 8,
              minHeight: 90,
            }}
          >
            <View style={{ gap: 4 }}>
              <Text style={{ color: baseColors.white, fontSize: RFValue(15) }}>
                13:32{" "}
                <Text
                  style={{
                    textTransform: "uppercase",
                    color: "#E07A5F",
                  }}
                >
                  Saída
                </Text>
              </Text>

              <Text
                style={{ color: baseColors.gray_400, fontSize: RFValue(13) }}
              >
                17 Fevereiro 2025
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => goToAdjustments("23456")}
              style={{
                padding: 6,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: baseColors.blue_500,
              }}
            >
              <Ionicons
                name="settings-sharp"
                size={24}
                color={baseColors.blue_500}
              />
            </TouchableOpacity>
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
    backgroundColor: baseColors.lime_950,
  },
  title: {
    fontSize: RFValue(20),
    color: baseColors.white,
    fontWeight: "600",
  },
  content: {
    marginTop: 34,
  },
});
