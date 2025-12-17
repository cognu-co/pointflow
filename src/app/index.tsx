import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { RFValue } from "react-native-responsive-fontsize";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import { baseColors } from "@/constants/Colors";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/form/button";

const loginFormSchema = z.object({
  username: z
    .string({ message: "Campo obrigatório" })
    .min(5, { message: "O usuário deve ter no mínimo 5 letras." })
    .regex(/^([a-z\\-]+)$/i, {
      message: "O usuário pode ter apenas letras e hífen.",
    })
    .transform((username: string) => username.toLowerCase()),
  password: z
    .string({ message: "Campo obrigatório" })
    .min(6, "Senha deve ter pelo menos 6 caracteres"),
});

type LoginFormData = z.infer<typeof loginFormSchema>;

export default function LoginScreen() {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const { signIn } = useAuth();
  const router = useRouter();

  async function onLogin(data: LoginFormData) {
    try {
      await signIn(data);

      router.replace("/(private)");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: baseColors.zinc_950 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Login de Funcionário</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 90,
                padding: 10,
                backgroundColor: baseColors.zinc_700,
                borderColor: baseColors.gray_500,
                borderWidth: 3,
                height: 140,
                width: 140,
              }}
            >
              <FontAwesome6 name="user-tie" size={50} color="white" />
            </View>

            <View style={{ marginTop: 34, width: "100%" }}>
              <View>
                <Controller
                  control={control}
                  name="username"
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      style={styles.input}
                      placeholder="Nome de usuário"
                      placeholderTextColor={baseColors.gray_500}
                      value={value}
                      onChangeText={onChange}
                    />
                  )}
                />

                <Text>
                  {errors.username && (
                    <Text style={{ color: "red" }}>
                      {errors.username.message}
                    </Text>
                  )}
                </Text>
              </View>

              <View>
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      style={styles.input}
                      placeholder="Senha de acesso"
                      placeholderTextColor={baseColors.gray_500}
                      secureTextEntry
                      value={value}
                      onChangeText={onChange}
                    />
                  )}
                />

                <Text>
                  {errors.password && (
                    <Text style={{ color: "red" }}>
                      {errors.password.message}
                    </Text>
                  )}
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Button loading={isSubmitting} onPress={handleSubmit(onLogin)}>
              <Text style={styles.buttonText}>Entrar</Text>
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
    padding: 24,
    justifyContent: "space-between",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: RFValue(24),
    fontWeight: "600",
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
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
