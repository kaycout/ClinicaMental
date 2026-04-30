// aqui eu importo o react e o useState para controlar os dados da tela de login
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

// essa é a tela inicial do app, então deixei o login aqui no index
export default function LoginScreen() {
  // aqui eu pego a largura da tela para adaptar entre mobile e desktop
  const { width } = useWindowDimensions();
  const isDesktop = width >= 900;

  // aqui eu guardo os valores digitados no formulário
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState<'administrador' | 'estagiario'>('estagiario');
  const [lembrar, setLembrar] = useState(false);

  // aqui eu verifico o tipo de usuário e mando para a tela correta
  function handleLogin() {
    if (tipoUsuario === 'administrador') {
      router.replace('/acesso-administrador');
    } else {
      router.replace('/(tabs)');
    }
  }

  return (
    <LinearGradient
      colors={['#F4FBF8', '#EAF6F1', '#F8FCFA']}
      style={styles.background}
    >
      {/* aqui eu criei uma imagem de fundo usando formas suaves, sem precisar de arquivo externo */}
      {(
        <View style={styles.backgroundDecor}>
          <View style={styles.blurCircleOne} />
          <View style={styles.blurCircleTwo} />
          <View style={styles.blurCircleThree} />
        </View>
      )}

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboard}
      >
       <View style={[styles.wrapper, isDesktop && styles.wrapperDesktop]}>
          <View style={[styles.card, isDesktop && styles.cardDesktop]}>

            <View style={[styles.logoArea, isDesktop && styles.logoAreaDesktop]}>
              <Text style={[styles.psi, isDesktop && styles.psiDesktop]}>Ψ</Text>

              <View style={isDesktop && styles.logoTextsDesktop}>
                <Text style={[styles.logoText, isDesktop && styles.logoTextDesktop]}>
                  SEP
                </Text>

                <Text style={[styles.logoSubtitle, isDesktop && styles.logoSubtitleDesktop]}>
                  CLÍNICA DE PSICOLOGIA
                </Text>
              </View>
            </View>

            <Text style={[styles.title, isDesktop && styles.titleDesktop]}>
              Bem-vindo!
            </Text>
            <Text style={[styles.subtitle, isDesktop && styles.subtitleDesktop]}>
              Faça login para acessar o sistema
            </Text>

            <View style={[styles.formCard, isDesktop && styles.formCardDesktop]}>
              <View style={styles.fieldBlock}>
                <Text style={styles.label}>Usuário ou e-mail</Text>

                <View style={styles.inputBox}>
                  <Ionicons name="person-outline" size={18} color="#7A8D8A" />
                  <TextInput
                    value={usuario}
                    onChangeText={setUsuario}
                    placeholder="Digite seu usuário ou e-mail"
                    placeholderTextColor="#9AA7A5"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={styles.input}
                  />
                </View>
              </View>

              <View style={styles.fieldBlock}>
                <Text style={styles.label}>Tipo de acesso</Text>

                <View style={styles.tipoContainer}>
                  <TouchableOpacity
                    style={[
                      styles.tipoButton,
                      tipoUsuario === 'administrador' && styles.tipoSelecionado,
                    ]}
                    onPress={() => setTipoUsuario('administrador')}
                  >
                    <Text
                      style={[
                        styles.tipoTexto,
                        tipoUsuario === 'administrador' && styles.tipoTextoSelecionado,
                      ]}
                    >
                      Administrador
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.tipoButton,
                      tipoUsuario === 'estagiario' && styles.tipoSelecionado,
                    ]}
                    onPress={() => setTipoUsuario('estagiario')}
                  >
                    <Text
                      style={[
                        styles.tipoTexto,
                        tipoUsuario === 'estagiario' && styles.tipoTextoSelecionado,
                      ]}
                    >
                      Estagiário
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.fieldBlock}>
                <Text style={styles.label}>Senha</Text>

                <View style={styles.inputBox}>
                  <Ionicons name="lock-closed-outline" size={18} color="#7A8D8A" />
                  <TextInput
                    value={senha}
                    onChangeText={setSenha}
                    placeholder="Digite sua senha"
                    placeholderTextColor="#9AA7A5"
                    secureTextEntry
                    style={styles.input}
                  />
                  <Ionicons name="eye-outline" size={18} color="#7A8D8A" />
                </View>
              </View>

              <View style={styles.optionsRow}>
                <TouchableOpacity
                  style={styles.rememberRow}
                  onPress={() => setLembrar(!lembrar)}
                >
                  <View style={[styles.checkbox, lembrar && styles.checkboxActive]}>
                    {lembrar && <Ionicons name="checkmark" size={12} color="#FFFFFF" />}
                  </View>
                  <Text style={styles.optionText}>Lembrar de mim</Text>
                </TouchableOpacity>

                <Pressable onPress={() => router.push('/redefinir-senha')}>
                  <Text style={styles.forgotText}>Esqueci minha senha</Text>
                </Pressable>
              </View>

              <Pressable style={styles.primaryButton} onPress={handleLogin}>
                <Text style={styles.primaryButtonText}>Entrar</Text>
              </Pressable>

              <View style={styles.signupRow}>
                <Text style={styles.signupText}>Ainda não tem conta? </Text>
                <Pressable onPress={() => router.push('/cadastro')}>
                  <Text style={styles.signupLink}>Cadastre-se</Text>
                </Pressable>
              </View>
            </View>

          </View>
        </View>
      </KeyboardAvoidingView>
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

  keyboard: {
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
  justifyContent: 'center',
  paddingHorizontal: 80,
  paddingVertical: 0, // 👈 tirei o espaço que empurrava pra cima
},

  card: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 22,
    paddingVertical: 28,
    shadowColor: '#A6BDB8',
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },

  cardDesktop: {
    width: '100%',
    maxWidth: 520,
    marginTop: -10,
    paddingHorizontal: 32,
    paddingVertical: 32,
  },

  logoArea: {
  flexDirection: 'row', // lado a lado
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  marginBottom: 22,
},

logoAreaDesktop: {
  justifyContent: 'flex-start',
},

logoTextsDesktop: {
  flexDirection: 'column', // SEP em cima e subtitulo embaixo
},

psi: {
  fontSize: 60,
  fontWeight: '700',
  color: '#0C706E',
  lineHeight: 68,
},

psiDesktop: {
  fontSize: 64,
},

logoText: {
  fontSize: 28,
  fontWeight: '900',
  color: '#0C706E',
},

logoTextDesktop: {
  fontSize: 30,
},

// Nome "Clínia de psicologia"
  logoSubtitle: {
  fontSize: 11,        // aumenta um pouco do nome
  fontWeight: '500',   //deixa mais visível 
  color: '#0C706E',
  letterSpacing: 0.5,  // melhora a leitura
},

  logoSubtitleDesktop: {
    fontSize: 12,
    marginBottom: 0,
    textAlign: 'left',
  },

  title: {
    fontSize: 23,
    fontWeight: '900',
    color: '#0C706E',
    marginBottom: 6,
    textAlign: 'center',
  },

  titleDesktop: {
    fontSize: 27,
  },

  subtitle: {
    fontSize: 14,
    color: '#6F7D7A',
    marginBottom: 24,
    textAlign: 'center',
  },

  subtitleDesktop: {
    fontSize: 15,
    marginBottom: 26,
  },

  formCard: {
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    shadowColor: 'transparent',
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 0 },
    elevation: 0,
  },

  formCardDesktop: {
    maxWidth: 520,
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderRadius: 0,
  },

  fieldBlock: {
    marginBottom: 16,
  },

  label: {
  fontSize: 12,
  fontWeight: '600', // antes 800
  color: '#1E3A38',
  marginBottom: 8,
},

  inputBox: {
    height: 46,
    borderWidth: 1,
    borderColor: '#DCE5E2',
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 10,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: '#1F2F2D',
  },

  tipoContainer: {
    flexDirection: 'row',
    gap: 10,
  },

  tipoButton: {
    flex: 1,
    height: 42,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#DCE5E2',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  tipoSelecionado: {
    backgroundColor: '#0C706E',
    borderColor: '#0C706E',
  },

  tipoTexto: {
  fontSize: 13,
  fontWeight: '600', // antes 800
  color: '#1E3A38',
},

  tipoTextoSelecionado: {
  color: '#FFFFFF',
  fontWeight: '600',
},

  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },

  checkbox: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: '#0C706E',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkboxActive: {
    backgroundColor: '#0C706E',
  },

  // Lembrar de mim
  optionText: {
  fontSize: 12,
  fontWeight: '400', // antes 700
  color: '#2D4A47',
},

  // Esqueci minha senha
  forgotText: {
  fontSize: 12,
  fontWeight: '400', // antes 700
  color: '#0C706E',
},

  primaryButton: {
    height: 48,
    borderRadius: 6,
    backgroundColor: '#0C706E',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  // Botão entrar
  primaryButtonText: {
  color: '#FFFFFF',
  fontSize: 15,
  fontWeight: '400', // sem negrito
},

  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  signupText: {
    fontSize: 12,
    color: '#596966',
  },

  // Cadastre-se
  signupLink: {
  fontSize: 12,
  fontWeight: '400', // antes 700
  color: '#0C706E',
},
});