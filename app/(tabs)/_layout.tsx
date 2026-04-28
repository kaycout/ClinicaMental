import React from 'react';
// aqui eu importo o Tabs, que é a navegação de baixo no mobile
import { Tabs } from 'expo-router';
// aqui eu importo os ícones usados nas abas
import { Ionicons } from '@expo/vector-icons';
// aqui eu uso a largura da tela para saber se está no desktop ou mobile
import { useWindowDimensions } from 'react-native';

// esse layout controla somente as telas que estão dentro da pasta tabs
export default function TabLayout() {
  // aqui eu pego a largura da tela
  const { width } = useWindowDimensions();

  // se a tela for grande, eu considero como desktop
  const isDesktop = width >= 900;

  return (
    <Tabs
      screenOptions={{
        // aqui eu escondo o cabeçalho padrão, porque as telas já têm o próprio layout
        headerShown: false,
        tabBarActiveTintColor: '#0C706E',
        tabBarInactiveTintColor: '#819392',

        // no desktop eu escondo a barra de baixo, porque uso a sidebar lateral
        tabBarStyle: isDesktop
          ? { display: 'none' }
          : { height: 68, paddingBottom: 8, paddingTop: 8 },

        // aqui eu deixo o texto da aba mais organizado
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
      }}
    >
      {/* primeira aba: agenda */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Agenda',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />

      {/* segunda aba: pacientes */}
      <Tabs.Screen
        name="pacientes"
        options={{
          title: 'Pacientes',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }}
      />

      {/* terceira aba: salas */}
      <Tabs.Screen
        name="salas"
        options={{
          title: 'Salas',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="business-outline" size={size} color={color} />
          ),
        }}
      />

      {/* quarta aba: avisos */}
      <Tabs.Screen
        name="notificacoes"
        options={{
          title: 'Avisos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" size={size} color={color} />
          ),
        }}
      />

      {/* quinta aba: perfil */}
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
