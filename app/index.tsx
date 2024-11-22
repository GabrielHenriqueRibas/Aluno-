import { Button, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput } from 'react-native';

export default function index() {
  return (
    <View style={styles.container}>
      <Ionicons name="school" size={100} color="white" />

      <TextInput
        placeholder="Digite algo aqui..."
      />

      <TextInput
        placeholder="Digite algo aqui..."
      />
      
      <Text>Esqueceu a Senha?</Text>
      
      <Button
        title='Entrar'
        color={"white"}
      />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0067C6",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
