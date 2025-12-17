import {
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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import AntDesign from "@expo/vector-icons/AntDesign";

import { baseColors } from "@/constants/Colors";
import { RFValue } from "react-native-responsive-fontsize";
import { Button } from "@/components/form/button";

const passwordFormSchema = z.object({
  password: z
    .string({ message: "Campo obrigatório" })
    .min(6, "Senha deve ter pelo menos 6 caracteres"),
  new_password: z
    .string({ message: "Campo obrigatório" })
    .min(6, "Senha deve ter pelo menos 6 caracteres"),
});

type PasswordFormData = z.infer<typeof passwordFormSchema>;

export default function ChangePasswordScreen() {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordFormSchema),
  });

  const router = useRouter();

  async function handleChangePassword(data: PasswordFormData) {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <View style={{ justifyContent: "space-between", flex: 1, padding: 12 }}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
              style={styles.backButton}
            >
              <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>

            <Text style={styles.title}>Alterar senha</Text>
          </View>

          <View style={{ marginTop: 34, width: "100%" }}>
            <Text
              style={{
                color: baseColors.white,
                marginBottom: 24,
                fontSize: RFValue(18),
              }}
            >
              Senha usada para acessar o aplicativo
            </Text>

            <View>
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Senha atual"
                    placeholderTextColor={baseColors.gray_500}
                    secureTextEntry
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />

              {errors.password && (
                <Text style={{ color: "red", marginVertical: 6 }}>
                  {errors.password.message}
                </Text>
              )}
            </View>

            <View style={{ marginTop: 14 }}>
              <Controller
                control={control}
                name="new_password"
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Nova senha de acesso"
                    placeholderTextColor={baseColors.gray_500}
                    secureTextEntry
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />

              {errors.new_password && (
                <Text style={{ color: "red", marginVertical: 6 }}>
                  {errors.new_password.message}
                </Text>
              )}
            </View>
          </View>

          <View>
            <Button
              loading={isSubmitting}
              onPress={handleSubmit(handleChangePassword)}
            >
              <Text style={styles.buttonText}>Salvar</Text>
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
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: baseColors.lime_950,
  },
  title: {
    fontSize: RFValue(20),
    color: baseColors.white,
    fontWeight: "600",
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
  buttonText: {
    fontWeight: "600",
    fontSize: RFValue(14),
  },
});
