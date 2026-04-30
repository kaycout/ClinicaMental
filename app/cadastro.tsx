// arquivo app/cadastro.tsx
// aqui eu organizei essa tela e deixei os comentários explicando minha parte do código
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function CadastroScreen() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 900;

  const [tipoUsuario, setTipoUsuario] = useState<'admin' | 'estagiario'>('admin');

  return (
    <LinearGradient
      colors={['#F4FBF8', '#EAF6F1', '#F8FCFA']}
      style={styles.background}
    >
      {(
        <View style={styles.backgroundDecor}>
          <View style={styles.blurCircleOne} />
          <View style={styles.blurCircleTwo} />
          <View style={styles.blurCircleThree} />
        </View>
      )}

      <ScrollView
        contentContainerStyle={[styles.scrollContent, isDesktop && styles.scrollContentDesktop]}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.wrapper, isDesktop && styles.wrapperDesktop]}>
          <View style={[styles.card, isDesktop && styles.cardDesktop]}>

            {/* logo */}
            <View style={styles.logoArea}>
              <Text style={styles.psi}>Ψ</Text>

              <View>
                <Text style={styles.logoText}>SEP</Text>
                <Text style={styles.logoSubtitle}>CLÍNICA DE PSICOLOGIA</Text>
              </View>
            </View>

            {/* etapas */}
            <View style={styles.stepsContainer}>
              <View style={styles.stepItem}>
                <View style={styles.stepActive}>
                  <Text style={styles.stepActiveText}>1</Text>
                </View>
                <Text style={styles.stepLabelActive}>Tipo de conta</Text>
              </View>

              <View style={styles.stepLine} />

              <View style={styles.stepItem}>
                <View style={styles.stepInactive}>
                  <Text style={styles.stepInactiveText}>2</Text>
                </View>
                <Text style={styles.stepLabel}>Dados pessoais</Text>
              </View>

              <View style={styles.stepLine} />

              <View style={styles.stepItem}>
                <View style={styles.stepInactive}>
                  <Text style={styles.stepInactiveText}>3</Text>
                </View>
                <Text style={styles.stepLabel}>Dados de acesso</Text>
              </View>

              <View style={styles.stepLine} />

              <View style={styles.stepItem}>
                <View style={styles.stepInactive}>
                  <Text style={styles.stepInactiveText}>4</Text>
                </View>
                <Text style={styles.stepLabel}>Concluir</Text>
              </View>
            </View>

            {/* título */}
            <Text style={styles.title}>Criar conta</Text>
            <Text style={styles.subtitle}>
              Selecione o tipo de conta que deseja criar
            </Text>

            {/* opção administrador */}
            <TouchableOpacity
              activeOpacity={0.85}
              style={[
                styles.optionCard,
                tipoUsuario === 'admin' && styles.optionCardSelected,
              ]}
              onPress={() => setTipoUsuario('admin')}
            >
              <View style={styles.iconCircle}>
                <Ionicons name="person-outline" size={38} color="#0C706E" />
              </View>

              <View style={styles.optionTextArea}>
                <Text style={styles.optionTitle}>Administrador</Text>
                <Text style={styles.optionDescription}>
                  Acesso completo ao sistema, com todas as permissões.
                </Text>
              </View>
            </TouchableOpacity>

            {/* opção estagiário */}
            <TouchableOpacity
              activeOpacity={0.85}
              style={[
                styles.optionCard,
                tipoUsuario === 'estagiario' && styles.optionCardSelected,
              ]}
              onPress={() => setTipoUsuario('estagiario')}
            >
              <View style={styles.iconCircle}>
                <Ionicons name="school-outline" size={38} color="#0C706E" />
              </View>

              <View style={styles.optionTextArea}>
                <Text style={styles.optionTitle}>Estagiário</Text>
                <Text style={styles.optionDescription}>
                  Acesso para gerenciar atendimentos e pacientes sob supervisão.
                </Text>
              </View>
            </TouchableOpacity>

            {/* continuar */}
            <TouchableOpacity
              style={styles.primaryButton}
              activeOpacity={0.85}
              onPress={() => router.push('/dados-pessoais')}
            >
            
              <Text style={styles.primaryButtonText}>Continuar</Text>
            </TouchableOpacity>

            {/* voltar login */}
            <View style={styles.loginRow}>
              <Text style={styles.loginText}>Já tem uma conta? </Text>

              <TouchableOpacity onPress={() => router.replace('/')}>
                <Text style={styles.loginLink}>Faça login</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  backgroundDecor: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },

  blurCircleOne: {
    position: 'absolute',
    width: 520,
    height: 520,
    borderRadius: 260,
    backgroundColor: 'rgba(12, 112, 110, 0.08)',
    top: -120,
    left: -120,
  },

  blurCircleTwo: {
    position: 'absolute',
    width: 600,
    height: 600,
    borderRadius: 300,
    backgroundColor: 'rgba(166, 189, 184, 0.18)',
    right: -180,
    bottom: -180,
  },

  blurCircleThree: {
    position: 'absolute',
    width: 380,
    height: 380,
    borderRadius: 190,
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    right: 220,
    top: 120,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 22,
    paddingVertical: 28,
  },

  scrollContentDesktop: {
    paddingVertical: 0,
  },

  wrapper: {
    width: '100%',
  },

  wrapperDesktop: {
    alignItems: 'center',
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingHorizontal: 24,
    paddingVertical: 30,
    shadowColor: '#A6BDB8',
    shadowOpacity: 0.18,
    shadowRadius: 22,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },

  cardDesktop: {
    maxWidth: 620,
    paddingHorizontal: 34,
    paddingVertical: 34,
  },

  logoArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    marginBottom: 32,
  },

  psi: {
    fontSize: 62,
    fontWeight: '700',
    color: '#0C706E',
    lineHeight: 70,
  },

  logoText: {
    fontSize: 30,
    fontWeight: '900',
    color: '#0C706E',
  },

  // Nome "Clínia de psicologia"
  logoSubtitle: {
  fontSize: 11,        // aumenta um pouco do nome
  fontWeight: '500',   //deixa mais visível 
  color: '#0C706E',
  letterSpacing: 0.5,  // melhora a leitura
},

  stepsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 28,
  },

  stepItem: {
    alignItems: 'center',
    width: 74,
  },

  stepActive: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#0C706E',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },

  stepActiveText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '400',
  },

  stepInactive: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#EEF3F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },

  stepInactiveText: {
    color: '#5F6F6C',
    fontSize: 12,
    fontWeight: '400',
  },

  stepLabelActive: {
    fontSize: 10,
    fontWeight: '400',
    color: '#1B3431',
    textAlign: 'center',
  },

  stepLabel: {
    fontSize: 10,
    fontWeight: '400',
    color: '#7B8986',
    textAlign: 'center',
  },

  stepLine: {
    flex: 1,
    height: 2,
    backgroundColor: '#E3EBE8',
    marginTop: 12,
  },

  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '400',
    color: '#171717',
    marginBottom: 8,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#7A8583',
    marginBottom: 28,
  },

  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8E6',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 18,
    shadowColor: '#A6BDB8',
    shadowOpacity: 0.14,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },

  optionCardSelected: {
    borderColor: '#0C706E',
  },

  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#EEF8F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 18,
  },

  optionTextArea: {
    flex: 1,
  },

  optionTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#171717',
    marginBottom: 6,
  },

  optionDescription: {
    fontSize: 13,
    color: '#5F6F6C',
    lineHeight: 18,
  },

  primaryButton: {
    height: 50,
    borderRadius: 8,
    backgroundColor: '#0C706E',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 22,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '400',
  },

  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginText: {
    fontSize: 13,
    color: '#5F6F6C',
  },

  loginLink: {
    fontSize: 13,
    fontWeight: '400',
    color: '#0C706E',
  },
});