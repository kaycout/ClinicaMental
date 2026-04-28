// arquivo app/cadastro-sucesso.tsx
// aqui eu organizei essa tela e deixei os comentários explicando minha parte do código
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

// componente da tela de cadastro realizado com sucesso
export default function CadastroSucessoScreen() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 900;

  return (
    <LinearGradient
      colors={['#F4FBF8', '#EAF6F1', '#F8FCFA']}
      style={styles.background}
    >
      <View style={[styles.wrapper, isDesktop && styles.wrapperDesktop]}>
        <View style={[styles.card, isDesktop && styles.cardDesktop]}>

          {/* área do ícone com confetes */}
          <View style={styles.iconWrapper}>

            {/* confetes decorativos */}
            <View style={[styles.confetti, styles.c1]} />
            <View style={[styles.confetti, styles.c2]} />
            <View style={[styles.confetti, styles.c3]} />
            <View style={[styles.confetti, styles.c4]} />
            <View style={[styles.confetti, styles.c5]} />

            {/* círculo com check de sucesso */}
            <View style={styles.iconCircle}>
              <Ionicons name="checkmark" size={60} color="#FFFFFF" />
            </View>

          </View>

          {/* título principal da tela */}
          <Text style={styles.title}>Cadastro realizado!</Text>

          {/* mensagem explicando que o cadastro deu certo */}
          <Text style={styles.subtitle}>
            Cadastro realizado com sucesso!{'\n'}
            Acesse o sistema para continuar.
          </Text>

          {/* botão para acessar o sistema */}
          <TouchableOpacity
            style={styles.primaryButton}
            activeOpacity={0.85}
            onPress={() => router.replace('/(tabs)')}
          >
            <Text style={styles.primaryText}>Acessar sistema</Text>
          </TouchableOpacity>

          {/* botão para voltar ao login */}
          <TouchableOpacity onPress={() => router.replace('/')}>
            <Text style={styles.secondaryText}>Voltar para login</Text>
          </TouchableOpacity>

        </View>
      </View>
    </LinearGradient>
  );
}

// estilos da tela
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 22,
    paddingVertical: 28,
  },

  wrapperDesktop: {
    alignItems: 'center',
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    paddingHorizontal: 28,
    paddingVertical: 32,
    alignItems: 'center',
    shadowColor: '#A6BDB8',
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },

  cardDesktop: {
    maxWidth: 430,
  },

  // aqui eu deixo a área do ícone preparada para posicionar os confetes
  iconWrapper: {
    position: 'relative',
    marginBottom: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // círculo principal com o check
  iconCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#0C706E',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },

  // estilo base dos confetes
  confetti: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 2,
  },

  // posições e cores dos confetes
  c1: {
    top: -10,
    left: 10,
    backgroundColor: '#F2C94C',
  },

  c2: {
    top: 0,
    right: 10,
    backgroundColor: '#6FCF97',
  },

  c3: {
    bottom: 0,
    left: -10,
    backgroundColor: '#56CCF2',
  },

  c4: {
    bottom: -10,
    right: 0,
    backgroundColor: '#EB5757',
  },

  c5: {
    top: -5,
    right: -5,
    backgroundColor: '#BB6BD9',
  },

  title: {
    fontSize: 24,
    fontWeight: '900',
    color: '#171717',
    marginBottom: 10,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: '#6E7C7A',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },

  // botão principal mais fino, no mesmo estilo das outras telas
  primaryButton: {
    width: '100%',
    height: 44,
    backgroundColor: '#0C706E',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },

  primaryText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 14,
  },

  secondaryText: {
    fontSize: 13,
    color: '#0C706E',
    fontWeight: '800',
  },
});