import { Stack } from 'expo-router';
// importando a barra de status (aquela de cima do celular)
import { StatusBar } from 'expo-status-bar';

// esse é o layout principal do app (a raiz de tudo)
export default function RootLayout() {
  return (
    <>
      {/* aqui eu configuro todas as telas do app usando stack navigation */}
      <Stack screenOptions={{ headerShown: false }}>

        {/* index é a tela inicial do app (no meu caso, login) */}
        <Stack.Screen name="index" />

        {/* tela de cadastro de usuário */}
        <Stack.Screen name="cadastro" />

        {/* outra tela de login (acabei criando separada, mas pode ser redundante) */}
        <Stack.Screen name="tela-login" />

        {/* grupo de abas (onde fica agenda, pacientes, salas, etc) */}
        <Stack.Screen name="(tabs)" />

        {/* tela de criação de novo agendamento */}
        <Stack.Screen name="novo-agendamento" />

        {/* tela de detalhes do paciente */}
        <Stack.Screen name="paciente-detalhe" />

        {/* tela de cancelamentos */}
        <Stack.Screen name="cancelamentos" />

        {/* tela de faltas */}
        <Stack.Screen name="faltas" />

        {/* tela administrativa de salas */}
        <Stack.Screen name="salas-admin" />

        {/* tela administrativa de pacientes */}
        <Stack.Screen name="pacientes-admin" />

      </Stack>

      {/* aqui eu configuro a cor da barra de status do celular */}
      <StatusBar style="light" />
    </>
  );
}