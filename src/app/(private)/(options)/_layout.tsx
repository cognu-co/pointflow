import { Stack } from "expo-router";

export default function OptionsStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="profile" />
      <Stack.Screen name="history" />
      <Stack.Screen name="change-password" />
    </Stack>
  );
}
