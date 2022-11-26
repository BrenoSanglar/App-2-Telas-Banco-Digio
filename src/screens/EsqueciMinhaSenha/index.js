import { useState } from "react";
import { Text, View } from "react-native";

export default function Login() {
  const [user, setUser] = useState({
    login: '',
    password: '',
  });

  return (
    <View >
      <Text >Login</Text>
    </View>
  );
}


