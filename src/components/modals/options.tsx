import {
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { BlurView } from "expo-blur";
import { RFValue } from "react-native-responsive-fontsize";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { baseColors } from "@/constants/Colors";
import { useOptionsModal } from "@/contexts/options-modal-context";
import { useAuth } from "@/contexts/auth-context";

import { Button } from "../form/button";

export function OptionsModal() {
  const { isVisible, onClose } = useOptionsModal();
  const { signOut } = useAuth();

  const router = useRouter();

  return (
    <Modal
      transparent
      visible={isVisible}
      onRequestClose={onClose}
      animationType="slide"
      presentationStyle="overFullScreen"
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <BlurView intensity={30} style={styles.blurBackground} />
      </TouchableWithoutFeedback>

      <View style={styles.content}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <Text
            style={{
              fontWeight: "800",
              color: "white",
              textAlign: "center",
              fontSize: RFValue(22),
            }}
          >
            Opções
          </Text>

          <TouchableOpacity
            onPress={onClose}
            style={{
              backgroundColor: "#f20",
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 12,
            }}
          >
            <FontAwesome name="close" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={{ gap: 8, marginTop: 24 }}>
          <TouchableOpacity
            activeOpacity={0.4}
            style={styles.activity}
            onPress={() => {
              router.push("/(private)/history");
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              <MaterialCommunityIcons
                name="format-list-text"
                size={16}
                color={baseColors.gray_400}
              />

              <Text style={{ color: "white", fontSize: RFValue(13) }}>
                Histórico de pontos
              </Text>
            </View>

            <Entypo
              name="chevron-small-right"
              size={24}
              color={baseColors.gray_400}
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.4}
            style={styles.activity}
            onPress={() => {
              router.push("/(private)/profile");
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              <FontAwesome5
                name="user-tie"
                size={16}
                color={baseColors.gray_400}
              />
              <Text style={{ color: "white", fontSize: RFValue(13) }}>
                Ver informações pessoais
              </Text>
            </View>

            <Entypo
              name="chevron-small-right"
              size={24}
              color={baseColors.gray_400}
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.4}
            style={styles.activity}
            onPress={() => {
              router.push("/(private)/change-password");
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              <Ionicons
                name="lock-closed-outline"
                size={16}
                color={baseColors.gray_400}
              />
              <Text style={{ color: "white", fontSize: RFValue(13) }}>
                Alterar Senha de acesso
              </Text>
            </View>

            <Entypo
              name="chevron-small-right"
              size={24}
              color={baseColors.gray_400}
            />
          </TouchableOpacity>
        </View>

        <View style={{ marginBottom: 10 }}>
          <Button onPress={signOut} style={{ backgroundColor: "#F25" }}>
            <Text style={styles.buttonText}>Sair da aplicação</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  blurBackground: { ...StyleSheet.absoluteFillObject },
  content: {
    gap: 30,
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: baseColors.zinc_800,
  },
  activity: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    borderWidth: 1,
    borderColor: baseColors.zinc_700,
    backgroundColor: baseColors.black,
    borderRadius: 10,
    padding: 12,
  },
  buttonText: {
    fontWeight: "600",
    fontSize: RFValue(14),
    color: baseColors.white,
  },
});
