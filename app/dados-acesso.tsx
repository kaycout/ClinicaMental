// arquivo app/dados-acesso.tsx
// aqui eu organizei essa tela e deixei os comentários explicando minha parte do código
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function DadosAcessoScreen() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 900;

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    <LinearGradient colors={['#F4FBF8', '#EAF6F1', '#F8FCFA']} style={styles.background}>
      {(
        <View style={styles.backgroundDecor}>
          <View style={styles.blurCircleOne} />
          <View style={styles.blurCircleTwo} />
          <View style={styles.blurCircleThree} />
        </View>
      )}

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
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
                <View style={styles.stepDone}>
                  <Ionicons name="checkmark" size={14} color="#fff" />
                </View>
                <Text style={styles.stepLabel}>Tipo de conta</Text>
              </View>

              <View style={styles.stepLine} />

              <View style={styles.stepItem}>
                <View style={styles.stepDone}>
                  <Ionicons name="checkmark" size={14} color="#fff" />
                </View>
                <Text style={styles.stepLabel}>Dados pessoais</Text>
              </View>

              <View style={styles.stepLine} />

              <View style={styles.stepItem}>
                <View style={styles.stepActive}>
                  <Text style={styles.stepActiveText}>3</Text>
                </View>
                <Text style={styles.stepLabelActive}>Dados acesso</Text>
              </View>

              <View style={styles.stepLine} />

              <View style={styles.stepItem}>
                <View style={styles.stepInactive}>
                  <Text style={styles.stepInactiveText}>4</Text>
                </View>
                <Text style={styles.stepLabel}>Concluir</Text>
              </View>
            </View>

            <Text style={styles.title}>Dados de acesso</Text>
            <Text style={styles.subtitle}>Crie seu usuário e senha para acessar o sistema</Text>

            <View style={styles.form}>
              <Text style={styles.label}>Nome de usuário *</Text>
              <TextInput
                value={usuario}
                onChangeText={setUsuario}
                placeholder="Escolha um nome de usuário"
                placeholderTextColor="#9AA7A5"
                style={styles.input}
              />

              <Text style={styles.label}>Senha *</Text>
              <View style={styles.inputIcon}>
                <TextInput
                  value={senha}
                  onChangeText={setSenha}
                  placeholder="Crie uma senha segura"
                  placeholderTextColor="#9AA7A5"
                  secureTextEntry
                  style={styles.inputFlex}
                />
                <Ionicons name="eye-outline" size={18} color="#7A8D8A" />
              </View>

              <Text style={styles.label}>Confirmar senha *</Text>
              <View style={styles.inputIcon}>
                <TextInput
                  value={confirmarSenha}
                  onChangeText={setConfirmarSenha}
                  placeholder="Confirme sua senha"
                  placeholderTextColor="#9AA7A5"
                  secureTextEntry
                  style={styles.inputFlex}
                />
                <Ionicons name="eye-outline" size={18} color="#7A8D8A" />
              </View>

              <View style={styles.rulesBox}>
                <View style={styles.rulesTitleRow}>
                  <Ionicons name="lock-closed-outline" size={17} color="#0C706E" />
                  <Text style={styles.rulesTitle}>A senha deve conter:</Text>
                </View>

                <View style={styles.ruleRow}>
                  <Ionicons name="checkmark-circle-outline" size={16} color="#78A99C" />
                  <Text style={styles.ruleText}>Mínimo de 8 caracteres</Text>
                </View>

                <View style={styles.ruleRow}>
                  <Ionicons name="checkmark-circle-outline" size={16} color="#78A99C" />
                  <Text style={styles.ruleText}>Letras maiúsculas e minúsculas</Text>
                </View>

                <View style={styles.ruleRow}>
                  <Ionicons name="checkmark-circle-outline" size={16} color="#78A99C" />
                  <Text style={styles.ruleText}>Números e caracteres especiais</Text>
                </View>
              </View>
            </View>

            <View style={styles.buttonsRow}>
              <TouchableOpacity style={styles.secondaryButton} onPress={() => router.back()}>
                <Text style={styles.secondaryText}>Voltar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.primaryButton}
                onPress={() => router.push('/cadastro-sucesso')}
              >
                <Text style={styles.primaryText}>Continuar</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },

  // fundo com bolhas igual login
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
    padding: 22,
  },

  wrapper: { width: '100%' },

  wrapperDesktop: {
    alignItems: 'center',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 24,
    shadowColor: '#A6BDB8',
    shadowOpacity: 0.18,
    shadowRadius: 22,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },

  cardDesktop: {
    width: '100%',
    maxWidth: 520,
    padding: 28,
  },

  logoArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginBottom: 22,
  },

  psi: {
    fontSize: 60,
    fontWeight: '700',
    color: '#0C706E',
    lineHeight: 68,
  },

  logoText: {
    fontSize: 28,
    fontWeight: '900',
    color: '#0C706E',
  },

  logoSubtitle: {
    fontSize: 11,
    fontWeight: '500',
    color: '#0C706E',
    letterSpacing: 0.4,
  },

  stepsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },

  stepItem: {
    alignItems: 'center',
    width: 70,
  },

  stepDone: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#0C706E',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },

  stepActive: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#0C706E',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },

  stepInactive: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#EEF3F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },

  stepActiveText: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 12,
  },

  stepInactiveText: {
    color: '#777',
    fontWeight: '400',
    fontSize: 12,
  },

  stepLabel: {
    fontSize: 10,
    color: '#7B8986',
    textAlign: 'center',
  },

  stepLabelActive: {
    fontSize: 10,
    fontWeight: '400',
    color: '#1B3431',
    textAlign: 'center',
  },

  stepLine: {
    flex: 1,
    height: 2,
    backgroundColor: '#E3EBE8',
    marginBottom: 22,
  },

  title: {
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'center',
    color: '#171717',
    marginBottom: 6,
  },

  subtitle: {
    textAlign: 'center',
    color: '#7A8583',
    fontSize: 13,
    marginBottom: 20,
  },

  form: {
    width: '100%',
  },

  label: {
    fontSize: 12,
    fontWeight: '400',
    color: '#1E3A38',
    marginBottom: 6,
  },

  input: {
    height: 46,
    borderWidth: 1,
    borderColor: '#DCE5E2',
    borderRadius: 6,
    paddingHorizontal: 12,
    marginBottom: 14,
    fontSize: 14,
    color: '#1F2F2D',
  },

  inputIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 46,
    borderWidth: 1,
    borderColor: '#DCE5E2',
    borderRadius: 6,
    paddingHorizontal: 12,
    marginBottom: 10,
  },

  inputFlex: {
    flex: 1,
    fontSize: 14,
    color: '#1F2F2D',
  },

  rulesBox: {
    backgroundColor: '#F2FAF8',
    borderRadius: 6,
    padding: 12,
    marginTop: 6,
  },

  rulesTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },

  rulesTitle: {
    fontSize: 13,
    fontWeight: '400',
    color: '#0C706E',
  },

  ruleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },

  ruleText: {
    fontSize: 12,
    color: '#566B67',
    fontWeight: '400',
  },

  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },

  secondaryButton: {
    width: 100,
    height: 44,
    borderWidth: 1,
    borderColor: '#DCE5E2',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  secondaryText: {
    fontWeight: '400',
    color: '#1B3431',
    fontSize: 13, // menor
  },

  primaryButton: {
    width: 140,
    height: 44,
    backgroundColor: '#0C706E',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  primaryText: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 13, // menor também
  },
});