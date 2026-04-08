import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Screen } from '@/components/clinic-ui';

export default function AgendamentoSucessoScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.iconCircle}>
            <Ionicons name="checkmark" size={54} color="#FFFFFF" />
          </View>

          <Text style={styles.title}>Agendamento realizado com sucesso</Text>

          <Text style={styles.subtitle}>
            A confirmação será enviada por e-mail.
          </Text>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.replace('/(tabs)')}
            activeOpacity={0.85}
          >
            <Text style={styles.primaryButtonText}>Voltar para o início</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => router.replace('/novo-agendamento')}
            activeOpacity={0.85}
          >
            <Text style={styles.secondaryButtonText}>Novo agendamento</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF5EF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#F3F6FB',
    borderRadius: 32,
    padding: 28,
    alignItems: 'center',
  },
  iconCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#5D8F81',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 22,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#112B5C',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 28,
    maxWidth: 340,
  },
  primaryButton: {
    width: '100%',
    minHeight: 58,
    borderRadius: 18,
    backgroundColor: '#5D8F81',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  primaryButtonText: {
    fontSize: 17,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  secondaryButton: {
    width: '100%',
    minHeight: 54,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#BFD6CF',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4E7C70',
  },
});