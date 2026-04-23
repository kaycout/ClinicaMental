import React from 'react';
// importando o sistema de abas do expo router
import { Tabs } from 'expo-router';
// importando os ícones que vão aparecer nas abas
import { Ionicons } from '@expo/vector-icons';

// esse componente define o layout com abas (tipo menu inferior do app)
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // escondendo o header padrão (aquele topo automático)
        headerShown: false,

        // cor do ícone quando está selecionado
        tabBarActiveTintColor: '#4E9EB3',

        // cor do ícone quando não está selecionado
        tabBarInactiveTintColor: '#819392',

        // estilizando a barra de navegação inferior
        tabBarStyle: { height: 68, paddingBottom: 8, paddingTop: 8 },

        // estilizando o texto das abas
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
      }}
    >

      {/* aba principal (agenda) */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Agenda',
          // ícone da aba agenda
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          )
        }}
      />

      {/* aba de pacientes */}
      <Tabs.Screen
        name="pacientes"
        options={{
          title: 'Pacientes',
          // ícone da aba pacientes
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          )
        }}
      />

      {/* aba de salas */}
      <Tabs.Screen
        name="salas"
        options={{
          title: 'Salas',
          // ícone da aba salas
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="business-outline" size={size} color={color} />
          )
        }}
      />

      {/* aba de notificações/avisos */}
      <Tabs.Screen
        name="notificacoes"
        options={{
          title: 'Avisos',
          // ícone da aba notificações
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" size={size} color={color} />
          )
        }}
      />

      {/* aba de perfil do usuário */}
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          // ícone da aba perfil
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          )
        }}
      />

    </Tabs>
  );
}