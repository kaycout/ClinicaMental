import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BrandHeader, Screen, SectionCard } from '@/components/clinic-ui';

const notificacoes = [
  { titulo: 'Consulta confirmada', descricao: 'Ana Silva - 12/06/2026 às 14:00' },
  { titulo: 'Remarcação pendente', descricao: 'Lucas Mendes aguardando aprovação do admin' },
  { titulo: 'Limite de cancelamentos', descricao: 'Maria Clara atingiu 3 cancelamentos' },
  { titulo: 'Falta registrada', descricao: 'Pedro Henrique faltou hoje às 11:00' },
];

export default function NotificacoesScreen() {
  return (
    <Screen>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <BrandHeader title="Notificações SEP" centered />

        <View style={styles.sectionWrapper}>
          <SectionCard title="Avisos do Sistema" tone="peach">
            {notificacoes.map((item, index) => (
              <View key={index} style={styles.notificationCard}>
                <Text style={styles.title}>{item.titulo}</Text>
                <Text style={styles.description}>{item.descricao}</Text>
              </View>
            ))}
          </SectionCard>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 24,
  },

  sectionWrapper: {
    width: '100%',
    maxWidth: 850,
    alignSelf: 'center',
  },

  notificationCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E1EBE8',
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    width: '100%',
    maxWidth: 850,
    alignSelf: 'center',
  },

  title: {
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 4,
  },

  description: {
    fontSize: 14,
    color: '#6B7A7A',
  },
});