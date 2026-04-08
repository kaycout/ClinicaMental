import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { Screen } from '@/components/clinic-ui';

export default function RedefinirSenhaScreen() {
  const [email, setEmail] = useState('');

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoSymbol}>Ψ</Text>
          </View>

          <Text style={styles.title}>Redefinir Senha</Text>
          <Text style={styles.subtitle}>
            Digite seu e-mail para receber as instruções de recuperação
          </Text>

          <View style={styles.fieldBlock}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#8E9AAF"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity style={styles.button} activeOpacity={0.85}>
            <Text style={styles.buttonText}>Enviar link</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace('/')}>
            <Text style={styles.backText}>Voltar para o login</Text>
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
    maxWidth: 480,
    backgroundColor: '#F3F6FB',
    borderRadius: 32,
    padding: 26,
    alignItems: 'center',
  },
  logoCircle: {
    width: 148,
    height: 148,
    borderRadius: 74,
    backgroundColor: '#F7FAFF',
    borderWidth: 1,
    borderColor: '#D7E5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 22,
  },
  logoSymbol: {
    fontSize: 72,
    color: '#1E2230',
    fontWeight: '400',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#112B5C',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 28,
    maxWidth: 320,
  },
  fieldBlock: {
    width: '100%',
    marginBottom: 22,
  },
  label: {
    fontSize: 15,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    minHeight: 58,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9E1E7',
    paddingHorizontal: 18,
    fontSize: 16,
    color: '#1F2937',
  },
  button: {
    width: '100%',
    minHeight: 62,
    borderRadius: 20,
    backgroundColor: '#5D8F81',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 22,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  backText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#4E7C70',
  },
});