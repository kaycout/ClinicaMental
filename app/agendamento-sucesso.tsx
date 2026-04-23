import React from 'react';
// importando componentes básicos
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// importando ícones
import { Ionicons } from '@expo/vector-icons';
// importando navegação
import { router } from 'expo-router';
// componente base do projeto
import { Screen } from '@/components/clinic-ui';

// tela exibida após um agendamento ser concluído com sucesso
export default function AgendamentoSucessoScreen() {
  return (
    // estrutura base da tela
    <Screen>

      {/* container principal centralizado */}
      <View style={styles.container}>

        {/* card central */}
        <View style={styles.card}>

          {/* círculo com ícone de sucesso */}
          <View style={styles.iconCircle}>
            <Ionicons name="checkmark" size={54} color="#FFFFFF" />
          </View>

          {/* título */}
          <Text style={styles.title}>
            Agendamento realizado com sucesso
          </Text>

          {/* descrição */}
          <Text style={styles.subtitle}>
            A confirmação será enviada por e-mail.
          </Text>

          {/* botão principal (voltar para home/agenda) */}
          <TouchableOpacity
            style={styles.primaryButton}

            // aqui eu volto para a área principal do app (tabs)
            onPress={() => router.replace('/(tabs)')}

            activeOpacity={0.85}
          >
            <Text style={styles.primaryButtonText}>
              Voltar para o início
            </Text>
          </TouchableOpacity>

          {/* botão secundário (fazer novo agendamento) */}
          <TouchableOpacity
            style={styles.secondaryButton}

            // aqui eu mando direto para criar outro agendamento
            onPress={() => router.replace('/novo-agendamento')}

            activeOpacity={0.85}
          >
            <Text style={styles.secondaryButtonText}>
              Novo agendamento
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </Screen>
  );
}

// estilos da tela
const styles = StyleSheet.create({

  // container principal
  container: {
    flex: 1,
    backgroundColor: '#EAF5EF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  // card central
  card: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#F3F6FB',
    borderRadius: 32,
    padding: 28,
    alignItems: 'center',
  },

  // círculo do ícone
  iconCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#5D8F81',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 22,
  },

  // título
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#112B5C',
    textAlign: 'center',
    marginBottom: 10,
  },

  // subtítulo
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 28,
    maxWidth: 340,
  },

  // botão principal
  primaryButton: {
    width: '100%',
    minHeight: 58,
    borderRadius: 18,
    backgroundColor: '#5D8F81',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },

  // texto do botão principal
  primaryButtonText: {
    fontSize: 17,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  // botão secundário
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

  // texto do botão secundário
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4E7C70',
  },
});