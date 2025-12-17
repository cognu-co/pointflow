import {
  Modal,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { BlurView } from "expo-blur";
import { RFValue } from "react-native-responsive-fontsize";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { baseColors } from "@/constants/Colors";

import { Button } from "../form/button";

interface SetPointModalProps {
  onClose: () => void;
  isVisible: boolean;
  point: {
    user: string;
    document: string;
    time: string;
  };
}

export function SetPointModal({
  onClose,
  isVisible,
  point,
}: SetPointModalProps) {
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
            gap: 8,
          }}
        >
          <FontAwesome
            name="check-circle"
            size={22}
            color={baseColors.lime_300}
          />
          <Text
            style={{
              fontWeight: "800",
              color: "white",
              textAlign: "center",
              fontSize: RFValue(22),
            }}
          >
            Marcação Realizada
          </Text>
        </View>

        <View style={{ gap: 12, marginTop: 24 }}>
          <View style={{ gap: 4 }}>
            <View style={styles.activity}>
              <Feather name="user" size={24} color={baseColors.gray_400} />

              <Text style={{ color: "white", fontSize: RFValue(14) }}>
                {point?.user}
              </Text>
            </View>

            <View style={styles.activity}>
              <AntDesign name="idcard" size={24} color={baseColors.gray_400} />
              <Text style={{ color: "white", fontSize: RFValue(14) }}>
                {point?.document}
              </Text>
            </View>
          </View>

          <View style={styles.activity}>
            <Feather name="clock" size={24} color={baseColors.gray_400} />

            <Text style={{ color: "white", fontSize: RFValue(14) }}>
              {point?.time}
            </Text>
          </View>
        </View>

        <View style={{ marginBottom: 10 }}>
          <Button onPress={onClose}>
            <Text>Fechar</Text>
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
    backgroundColor: baseColors.zinc_900,
  },
  activity: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: baseColors.zinc_700,
    borderRadius: 10,
    padding: 12,
  },
});
