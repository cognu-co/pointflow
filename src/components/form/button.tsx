import {
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";

import { baseColors } from "@/constants/Colors";

interface ButtonProps extends TouchableOpacityProps {
  loading?: boolean;
}

export function Button({
  loading = false,
  children,
  style,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      disabled={loading}
      activeOpacity={0.8}
      style={[
        {
          backgroundColor: loading ? baseColors.lime_950 : baseColors.lime_300,
          flexDirection: "row",
          gap: 6,
          height: 55,
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      {loading ? <ActivityIndicator size={18} /> : children}
    </TouchableOpacity>
  );
}
