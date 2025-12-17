import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import { authenticateAsync } from "expo-local-authentication";
import { useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

import { baseColors } from "@/constants/Colors";
import { SetPointModal } from "@/components/modals/set-point";
import { useOptionsModal } from "@/contexts/options-modal-context";

type Point = {
  user: string;
  document: string;
  time: string;
};

export default function HomeScreen() {
  const [point] = useState({
    user: "Elias G. Alexandre",
    document: "9845765456LF093",
    time: "01:41",
  } as Point);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState("17:51");

  const { onOpen } = useOptionsModal();

  const router = useRouter();

  const handleShowInfo = () => {
    setModalVisible(!modalVisible);
  };

  async function onPoint() {
    try {
      const result = await authenticateAsync({
        promptMessage: "Autentique-se para fazer a marcação de ponto",
      });
      if (result.success) {
        handleShowInfo();
      } else {
        Alert.alert("Falha", "Autenticação não realizada.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerMenu}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => onOpen()}>
              <Feather name="menu" size={30} color="white" />
            </TouchableOpacity>

            <Text style={styles.logo}>Marcação de ponto</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              router.push("/(private)/notifications");
            }}
          >
            <FontAwesome name="bell-o" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <View>
            <Text
              style={{
                color: baseColors.gray_400,
                fontSize: RFValue(18),
                gap: 4,
              }}
            >
              Olá,{" "}
              <Text
                style={{ color: "white", fontSize: RFValue(18), marginLeft: 4 }}
              >
                Elias Alexandre
              </Text>
            </Text>
          </View>

          <View style={styles.clock}>
            <Feather name="clock" size={24} color={baseColors.gray_400} />

            <View>
              <Text style={styles.clockLabel}>{currentTime}</Text>
            </View>
          </View>

          <TouchableOpacity
            onLongPress={onPoint}
            activeOpacity={0.3}
            style={{
              backgroundColor: baseColors.lime_300,
              height: 140,
              width: 140,
              borderRadius: 63,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="finger-print-outline" size={90} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.activities}>
        <Text
          style={{
            fontSize: RFValue(13),
            color: "white",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Marcações, Hoje
        </Text>

        <View style={{ gap: 8, marginTop: 32 }}>
          <View style={styles.activity}>
            <Feather name="clock" size={24} color={baseColors.gray_400} />

            <Text style={{ color: "white", fontSize: RFValue(14) }}>18:19</Text>
          </View>
          <View style={styles.activity}>
            <Feather name="clock" size={24} color={baseColors.gray_400} />

            <Text style={{ color: "white", fontSize: RFValue(14) }}>18:19</Text>
          </View>
          <View style={styles.activity}>
            <Feather name="clock" size={24} color={baseColors.gray_400} />

            <Text style={{ color: "white", fontSize: RFValue(14) }}>18:19</Text>
          </View>

          {/* <View>
            <Text
              style={{
                color: baseColors.blue_500,
                fontSize: RFValue(14),
                textDecorationLine: "underline",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              Sem marcações
            </Text>
          </View> */}
        </View>
      </ScrollView>

      <SetPointModal
        point={point}
        onClose={handleShowInfo}
        isVisible={modalVisible}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: baseColors.zinc_950,
  },
  content: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerMenu: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  logo: {
    fontFamily: "InknutSemibold",
    fontSize: RFValue(15),
    color: baseColors.gray_100,
  },
  body: {
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    marginTop: 52,
  },
  clock: {
    gap: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: baseColors.zinc_700,
    borderWidth: 1,
    padding: 8,
    borderRadius: 12,
  },
  clockLabel: {
    color: "white",
    fontSize: RFValue(60),
  },

  activities: {
    padding: 12,
    marginTop: 44,
  },
  activity: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderWidth: 1,
    borderColor: baseColors.zinc_700,
    borderRadius: 10,
    padding: 12,
  },
});
