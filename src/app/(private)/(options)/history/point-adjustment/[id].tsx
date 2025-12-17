import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { RFValue } from "react-native-responsive-fontsize";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import AntDesign from "@expo/vector-icons/AntDesign";

import { baseColors } from "@/constants/Colors";
import { Button } from "@/components/form/button";

const adjustmentFormSchema = z.object({
  time: z.string({ message: "Campo obrigatório" }),
  description: z.string({ message: "Campo obrigatório" }),
});

type AdjustmentFormData = z.infer<typeof adjustmentFormSchema>;

export default function PointAdjustmentScreen() {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<AdjustmentFormData>({
    resolver: zodResolver(adjustmentFormSchema),
  });

  const router = useRouter();

  async function onAdjustment() {
    Alert.alert("Ajuste Requirido com sucesso");
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
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

            <Text style={styles.title}>Reajuste de ponto</Text>
          </View>

          <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View style={{ marginTop: 34, gap: 6 }}>
              <Text
                style={{ color: baseColors.gray_400, fontSize: RFValue(15) }}
              >
                Data: 15 Fevereiro 2025{" "}
              </Text>
              <Text
                style={{
                  textTransform: "uppercase",
                  color: baseColors.gray_400,
                  fontSize: RFValue(15),
                }}
              >
                Ponto Atual: 17:51
              </Text>
            </View>

            <View style={{ gap: 12 }}>
              <View>
                <Controller
                  control={control}
                  name="time"
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      style={styles.input}
                      placeholder="Horário correto desejado"
                      placeholderTextColor={baseColors.gray_500}
                      value={value}
                      onChangeText={onChange}
                    />
                  )}
                />

                {errors.time && (
                  <Text style={{ color: "red" }}>{errors.time.message}</Text>
                )}
              </View>

              <View>
                <Controller
                  control={control}
                  name="description"
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      style={styles.textArea}
                      placeholder="Justificação"
                      placeholderTextColor={baseColors.gray_500}
                      multiline
                      numberOfLines={8}
                      value={value}
                      onChangeText={onChange}
                    />
                  )}
                />

                {errors.time && (
                  <Text style={{ color: "red" }}>{errors.time.message}</Text>
                )}
              </View>
            </View>

            <Button onPress={handleSubmit(onAdjustment)}>
              <Text style={styles.buttonText}>Solicitar reajuste</Text>
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
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
  input: {
    width: "100%",
    height: 55,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: baseColors.zinc_700,
    color: baseColors.gray_50,
    paddingHorizontal: 12,
    paddingVertical: 2,
    fontSize: RFValue(15),
  },
  textArea: {
    height: 100, // Altura ajustável
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    textAlignVertical: "top", // Mantém o texto no topo
    borderColor: baseColors.zinc_700,
    color: baseColors.gray_50,
    fontSize: RFValue(15),
  },
  buttonText: {
    fontWeight: "600",
    fontSize: RFValue(14),
  },
});
