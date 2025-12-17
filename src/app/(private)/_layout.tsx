import { Stack } from "expo-router";

import { OptionsModal } from "@/components/modals/options";
import { OptionsModalProvider } from "@/contexts/options-modal-context";

export default function PrivateStackLayout() {
  return (
    <OptionsModalProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(options)" />
        <Stack.Screen name="notifications" />
      </Stack>

      <OptionsModal />
    </OptionsModalProvider>
  );
}
