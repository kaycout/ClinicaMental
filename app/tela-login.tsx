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
  TouchableOpacity
} from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 900;

  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('estagiario');

  function handleLogin() {
    if (tipoUsuario === 'admin') {
      router.replace('/acesso-administrador');
    } else {
      router.replace('/(tabs)');
    }
  }

  return (
    <LinearGradient
      colors={['#DCEEDF', '#D9EBE6', '#DCEEDF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboard}
      >
        <View style={[styles.wrapper, isDesktop && styles.wrapperDesktop]}>
          <View style={[styles.card, isDesktop && styles.cardDesktop]}>

            <View style={styles.logoCircle}>
              <Text style={styles.psi}>Ψ</Text>
            </View>

            <Text style={styles.title}>Clínica SEP</Text>
            <Text style={styles.subtitle}>
              Bem-vindo ao sistema da Clínica SEP
            </Text>

            {/* CPF */}
            <View style={styles.fieldBlock}>
              <Text style={styles.label}>CPF</Text>
              <TextInput
                value={cpf}
                onChangeText={setCpf}
                placeholder="Digite seu CPF"
                placeholderTextColor="#8B90A0"
                keyboardType="numeric"
                style={styles.input}
              />
            </View>

            {/* Tipo de usuário */}
            <View style={styles.fieldBlock}>
              <Text style={styles.label}>Tipo de acesso</Text>

              <View style={styles.tipoContainer}>
                <TouchableOpacity
                  style={[
                    styles.tipoButton,
                    tipoUsuario === 'admin' && styles.tipoSelecionado
                  ]}
                  onPress={() => setTipoUsuario('admin')}
                >
                  <Text style={styles.tipoTexto}>Admin</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.tipoButton,
                    tipoUsuario === 'estagiario' && styles.tipoSelecionado
                  ]}
                  onPress={() => setTipoUsuario('estagiario')}
                >
                  <Text style={styles.tipoTexto}>Estagiário</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Senha */}
            <View style={styles.fieldBlock}>
              <Text style={styles.label}>Senha</Text>
              <TextInput
                value={senha}
                onChangeText={setSenha}
                placeholder="Digite sua senha"
                placeholderTextColor="#8B90A0"
                secureTextEntry
                style={styles.input}
              />
            </View>

            {/* Botão entrar */}
            <Pressable style={styles.primaryButton} onPress={handleLogin}>
              <Text style={styles.primaryButtonText}>Entrar</Text>
            </Pressable>

            {/* Links */}
            <Pressable onPress={() => router.push('/cadastro')}>
              <Text style={styles.link}>Criar conta</Text>
            </Pressable>

            <Pressable onPress={() => router.push('/redefinir-senha')}>
              <Text style={styles.linkMuted}>Esqueci minha senha</Text>
            </Pressable>

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
  },
  card: {
    width: '100%',
    backgroundColor: '#E8EBF2',
    borderRadius: 34,
    paddingHorizontal: 22,
    paddingVertical: 28,
    shadowColor: '#b3e0ef',
    shadowOpacity: 0.18,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  cardDesktop: {
    maxWidth: 450,
    paddingHorizontal: 24,
    paddingVertical: 30,
  },
  logoCircle: {
    width: 138,
    height: 138,
    borderRadius: 69,
    backgroundColor: '#F7F9FC',
    borderWidth: 2,
    borderColor: '#D8E4F5',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },
  psi: {
    fontSize: 72,
    fontWeight: '700',
    color: '#23252E',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '800',
    color: '#112B5C',
    marginBottom: 6,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#6E7485',
    marginBottom: 28,
  },
  fieldBlock: {
    marginBottom: 18,
  },
  label: {
    fontSize: 15,
    fontWeight: '800',
    color: '#232A39',
    marginBottom: 8,
  },
  input: {
    minHeight: 58,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#D7DCE5',
    paddingHorizontal: 18,
    fontSize: 16,
    color: '#1F2430',
  },

  /* BOTÃO */
  primaryButton: {
    height: 58,
    borderRadius: 18,
    backgroundColor: '#538477',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 18,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },

  /* LINKS */
  link: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: '#538477',
    marginBottom: 10,
  },
  linkMuted: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    color: '#0e0e0e',
  },

  /* TIPO USUÁRIO */
  tipoContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  tipoButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D7DCE5',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  tipoSelecionado: {
    backgroundColor: '#538477',
  },
  tipoTexto: {
    fontWeight: '700',
    color: '#232A39',
  },
});