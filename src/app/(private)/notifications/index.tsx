import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter, Link } from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";

import { baseColors } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

export default function NotificationsScreen() {
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

          <Text style={styles.title}>Notificações</Text>
        </View>

        <ScrollView style={styles.content} contentContainerStyle={{ gap: 6 }}>
          <Link
            href={{
              pathname: "/notifications/details/[id]",
              params: { id: "3453jk45n6" },
            }}
            style={styles.link}
          >
            <View style={styles.linkItem}>
              <Text style={{ color: baseColors.white, fontSize: RFValue(14) }}>
                Reajuste de ponto{" "}
                <Text
                  style={{
                    textTransform: "uppercase",
                    color: baseColors.lime_300,
                  }}
                >
                  Aprovado
                </Text>
              </Text>

              <Entypo
                name="chevron-small-right"
                size={24}
                color={baseColors.gray_400}
              />
            </View>
          </Link>

          <Link
            href={{
              pathname: "/notifications/details/[id]",
              params: { id: "lk3n459gfu" },
            }}
            style={styles.link}
          >
            <View style={styles.linkItem}>
              <Text style={{ color: baseColors.white, fontSize: RFValue(14) }}>
                Reajuste de ponto{" "}
                <Text
                  style={{
                    textTransform: "uppercase",
                    color: "#f25",
                  }}
                >
                  Rejeitado
                </Text>
              </Text>

              <Entypo
                name="chevron-small-right"
                size={24}
                color={baseColors.gray_400}
              />
            </View>
          </Link>

          {/* <View>
            <Text
              style={{
                color: baseColors.gray_400,
                fontSize: RFValue(13),
                textAlign: "center",
              }}
            >
              Sem notificações novas
            </Text>
          </View> */}
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
  link: {
    borderWidth: 1,
    borderColor: baseColors.zinc_800,
    backgroundColor: baseColors.zinc_900,
    borderRadius: 8,
    minHeight: 80,
  },
  linkItem: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
  },
});
