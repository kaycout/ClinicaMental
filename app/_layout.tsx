import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="cadastro" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="novo-agendamento" />
        <Stack.Screen name="paciente-detalhe" />
        <Stack.Screen name="cancelamentos" />
        <Stack.Screen name="faltas" />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}