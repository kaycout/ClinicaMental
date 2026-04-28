// arquivo app/agendamento-sucesso.tsx
// aqui eu organizei essa tela de sucesso no mesmo estilo da tela de login

import React from 'react';

// importando componentes básicos
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

// importando ícones
import { Ionicons } from '@expo/vector-icons';

// importando navegação
import { router } from 'expo-router';

// tela exibida quando o agendamento for realizado com sucesso
export default function AgendamentoSucessoScreen() {
  // aqui eu pego a largura da tela pra ajustar melhor no mobile e desktop
  const { width } = useWindowDimensions();
  const isMobile = width < 700;

  return (
    // fundo principal da tela
    <View style={styles.screen}>

      {/* container centralizado */}
      <View style={[styles.container, isMobile && styles.containerMobile]}>

        {/* logo no topo, igual o estilo da tela de login */}
        <View style={styles.logoArea}>
          <Text style={styles.psi}>Ψ</Text>
          <Text style={styles.logoText}>SEP</Text>
          <Text style={styles.logoSub}>CLÍNICA DE PSICOLOGIA</Text>
        </View>

        {/* título da tela */}
        <Text style={styles.title}>Agendamento realizado!</Text>

        {/* subtítulo explicando o que aconteceu */}
        <Text style={styles.subtitle}>
          O agendamento foi salvo com sucesso no sistema.
        </Text>

        {/* card central */}
        <View style={[styles.card, isMobile && styles.cardMobile]}>

          {/* círculo com ícone de confirmação */}
          <View style={styles.iconCircle}>
            <Ionicons name="checkmark" size={46} color="#FFFFFF" />
          </View>

          {/* mensagem principal */}
          <Text style={styles.cardTitle}>
            Tudo certo!
          </Text>

          {/* descrição */}
          <Text style={styles.cardSubtitle}>
            A confirmação do agendamento já está registrada e poderá ser acompanhada na agenda.
          </Text>

          {/* botão principal */}
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.replace('/(tabs)')}
            activeOpacity={0.85}
          >
            <Ionicons name="calendar-outline" size={21} color="#FFFFFF" />
            <Text style={styles.primaryButtonText}>
              Voltar para agenda
            </Text>
          </TouchableOpacity>

          {/* botão secundário */}
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => router.replace('/novo-agendamento')}
            activeOpacity={0.85}
          >
            <Ionicons name="add-outline" size={22} color="#0C706E" />
            <Text style={styles.secondaryButtonText}>
              Novo agendamento
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

// estilos da tela
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#EEF8F4',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },

  containerMobile: {
    justifyContent: 'flex-start',
    paddingTop: 74,
  },

  logoArea: {
    alignItems: 'center',
    marginBottom: 24,
  },

  psi: {
    fontSize: 72,
    color: '#0C706E',
    fontWeight: '900',
    lineHeight: 76,
  },

  logoText: {
    fontSize: 34,
    color: '#0C706E',
    fontWeight: '900',
    marginTop: -4,
  },

  logoSub: {
    fontSize: 11,
    color: '#0C706E',
    fontWeight: '900',
    letterSpacing: 0.5,
  },

  title: {
    fontSize: 25,
    fontWeight: '900',
    color: '#0C706E',
    textAlign: 'center',
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 15,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 24,
  },

  card: {
    width: '100%',
    maxWidth: 430,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#94A3B8',
    shadowOpacity: 0.14,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },

  cardMobile: {
    padding: 22,
  },

  iconCircle: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: '#0C706E',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#0C706E',
    textAlign: 'center',
    marginBottom: 8,
  },

  cardSubtitle: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },

  primaryButton: {
    width: '100%',
    minHeight: 52,
    borderRadius: 8,
    backgroundColor: '#0C706E',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },

  secondaryButton: {
    width: '100%',
    minHeight: 50,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D7E5E1',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },

  secondaryButtonText: {
    color: '#0C706E',
    fontSize: 15,
    fontWeight: '900',
  },
});