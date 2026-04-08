import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function CadastroScreen() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 900;

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    <LinearGradient
      colors={['#DCEEDF', '#D9EBE6' , '#DCEEDF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboard}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={[styles.wrapper, isDesktop && styles.wrapperDesktop]}>
            <View style={[styles.card, isDesktop && styles.cardDesktop]}>
              <View style={styles.logoCircle}>
                <Text style={styles.psi}>Ψ</Text>
              </View>

              <Text style={styles.title}>Cadastro SEP</Text>
              <Text style={styles.subtitle}>Crie seu acesso ao sistema clínico</Text>

              <View style={styles.fieldBlock}>
                <Text style={styles.label}>Nome completo</Text>
                <TextInput
                  value={nome}
                  onChangeText={setNome}
                  placeholder="Digite seu nome"
                  placeholderTextColor="#8B90A0"
                  style={styles.input}
                />
              </View>

              <View style={styles.fieldBlock}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Digite seu e-mail"
                  placeholderTextColor="#8B90A0"
                  keyboardType="email-address"
                  style={styles.input}
                />
              </View>

              <View style={styles.fieldBlock}>
                <Text style={styles.label}>Usuário</Text>
                <TextInput
                  value={usuario}
                  onChangeText={setUsuario}
                  placeholder="Crie seu usuário"
                  placeholderTextColor="#8B90A0"
                  style={styles.input}
                />
              </View>

              <View style={styles.fieldBlock}>
                <Text style={styles.label}>Senha</Text>
                <TextInput
                  value={senha}
                  onChangeText={setSenha}
                  placeholder="Crie sua senha"
                  placeholderTextColor="#8B90A0"
                  secureTextEntry
                  style={styles.input}
                />
              </View>

              <View style={styles.fieldBlock}>
                <Text style={styles.label}>Confirmar senha</Text>
                <TextInput
                  value={confirmarSenha}
                  onChangeText={setConfirmarSenha}
                  placeholder="Digite novamente"
                  placeholderTextColor="#8B90A0"
                  secureTextEntry
                  style={styles.input}
                />
              </View>

              <Pressable style={styles.primaryButton} onPress={() => router.replace('/(tabs)')}>
                <Text style={styles.primaryButtonText}>Cadastrar</Text>
              </Pressable>

              <Pressable onPress={() => router.back()}>
                <Text style={styles.link}>Voltar para login</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
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
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 22,
    paddingVertical: 28,
  },
  wrapper: {
    width: '100%',
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
    maxWidth: 470,
  },
  logoCircle: {
    width: 126,
    height: 126,
    borderRadius: 63,
    backgroundColor: '#F7F9FC',
    borderWidth: 2,
    borderColor: '#D8E4F5',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },
  psi: {
    fontSize: 66,
    fontWeight: '700',
    color: '#23252E',
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '800',
    color: '#17243F',
    marginBottom: 6,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#6E7485',
    marginBottom: 24,
  },
  fieldBlock: {
    marginBottom: 16,
  },
  label: {
    fontSize: 15,
    fontWeight: '800',
    color: '#232A39',
    marginBottom: 8,
  },
  input: {
    minHeight: 56,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#D7DCE5',
    paddingHorizontal: 18,
    fontSize: 16,
    color: '#1F2430',
  },
  primaryButton: {
    height: 58,
    borderRadius: 18,
    backgroundColor: '#538477',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 18,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },
  link: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
    color: '#538477',
  },
});