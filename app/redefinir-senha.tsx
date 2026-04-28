// arquivo app/redefinir-senha.tsx
// aqui eu organizei essa tela e deixei os comentários explicando minha parte do código
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

// componente da tela de redefinir senha
export default function RedefinirSenhaScreen() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 900;

  // aqui eu guardo o e-mail digitado pelo usuário
  const [email, setEmail] = useState('');

  // aqui eu controlo o carregamento do botão
  const [loading, setLoading] = useState(false);

  // função para enviar o link de recuperação por e-mail
  async function enviarPorEmail() {
    if (!email.trim()) {
      Alert.alert('Atenção', 'Digite seu e-mail primeiro.');
      return;
    }

    try {
      setLoading(true);

      const response = await fetch('http://SEU_IP:3000/redefinir-senha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || 'Erro ao enviar link.');
      }

      Alert.alert(
        'Sucesso',
        'O link de recuperação foi enviado para seu e-mail.'
      );

      // depois de enviar, eu volto para a tela inicial de login
      router.replace('/');

    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Não foi possível enviar o e-mail.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <LinearGradient
      colors={['#F4FBF8', '#EAF6F1', '#F8FCFA']}
      style={styles.background}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboard}
      >
        <View style={[styles.wrapper, isDesktop && styles.wrapperDesktop]}>
          <View style={[styles.card, isDesktop && styles.cardDesktop]}>

            {/* logo do sistema */}
            <Text style={styles.psi}>Ψ</Text>
            <Text style={styles.logoText}>SEP</Text>
            <Text style={styles.logoSubtitle}>CLÍNICA DE PSICOLOGIA</Text>

            {/* título da tela */}
            <Text style={styles.title}>Redefinir senha</Text>
            <Text style={styles.subtitle}>
              Digite seu e-mail para receber as instruções de recuperação
            </Text>

            {/* card do formulário */}
            <View style={styles.formCard}>

              {/* campo de e-mail */}
              <View style={styles.fieldBlock}>
                <Text style={styles.label}>E-mail</Text>

                <View style={styles.inputBox}>
                  <Ionicons name="mail-outline" size={18} color="#7A8D8A" />
                  <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Digite seu e-mail"
                    placeholderTextColor="#9AA7A5"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={styles.input}
                  />
                </View>
              </View>

              {/* botão para enviar link */}
              <Pressable
                style={styles.primaryButton}
                onPress={enviarPorEmail}
                disabled={loading}
              >
                <Text style={styles.primaryButtonText}>
                  {loading ? 'Enviando...' : 'Enviar link'}
                </Text>
              </Pressable>

              {/* link para voltar ao login */}
              <Pressable onPress={() => router.replace('/')}>
                <Text style={styles.backText}>Voltar para o login</Text>
              </Pressable>

            </View>

          </View>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

// estilos da tela
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
    alignItems: 'center',
  },

  cardDesktop: {
    maxWidth: 430,
  },

  psi: {
    fontSize: 82,
    fontWeight: '700',
    color: '#0C706E',
    lineHeight: 90,
  },

  logoText: {
    fontSize: 34,
    fontWeight: '900',
    color: '#0C706E',
    marginTop: -6,
  },

  logoSubtitle: {
    fontSize: 11,
    fontWeight: '800',
    color: '#0C706E',
    marginTop: -2,
    marginBottom: 28,
  },

  title: {
    fontSize: 23,
    fontWeight: '900',
    color: '#0C706E',
    marginBottom: 6,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: '#6F7D7A',
    marginBottom: 24,
    textAlign: 'center',
    maxWidth: 330,
  },

  formCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 22,
    paddingVertical: 22,
    shadowColor: '#A6BDB8',
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },

  fieldBlock: {
    marginBottom: 18,
  },

  label: {
    fontSize: 12,
    fontWeight: '800',
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

  primaryButton: {
    height: 48,
    borderRadius: 6,
    backgroundColor: '#0C706E',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
  },

  backText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#0C706E',
    textAlign: 'center',
  },
});