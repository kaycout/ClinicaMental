import React from 'react';
// importando componentes básicos
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// importando navegação
import { router } from 'expo-router';
// componente base do projeto
import { Screen } from '@/components/clinic-ui';

// tela exibida após o cadastro ser concluído com sucesso
export default function CadastroSucessoScreen() {
  return (
    // estrutura base da tela
    <Screen>

      {/* container principal */}
      <View style={styles.container}>

        {/* card central */}
        <View style={styles.card}>

          {/* círculo com check de sucesso */}
          <View style={styles.logoCircle}>
            <Text style={styles.check}>✓</Text>
          </View>

          {/* título */}
          <Text style={styles.title}>Cadastro realizado!</Text>

          {/* mensagem de sucesso */}
          <Text style={styles.subtitle}>
            Cadastro realizado com sucesso!
            Acesse o sistema para continuar.
          </Text>

          {/* BOTÃO PRINCIPAL */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.85}

            // aqui eu mando o usuário de volta para o login
            onPress={() => router.replace('/tela-login')}
          >

          {/* esse botão aqui está dentro do outro (não é necessário, mas deixei como está) */}
          <TouchableOpacity onPress={() => router.replace('/')}></TouchableOpacity>

            {/* texto do botão */}
            <Text style={styles.buttonText}>Voltar para o login</Text>

          </TouchableOpacity>

        </View>
      </View>
    </Screen>
  );
}

// estilos da tela
const styles = StyleSheet.create({

  // container principal centralizado
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
    maxWidth: 480,
    backgroundColor: '#F3F6FB',
    borderRadius: 32,
    padding: 26,
    alignItems: 'center',
  },

  // círculo do ícone
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

  // check de sucesso
  check: {
    fontSize: 72,
    color: '#5D8F81',
    fontWeight: '800',
  },

  // título
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#112B5C',
    marginBottom: 8,
  },

  // descrição
  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 28,
    maxWidth: 320,
  },

  // botão principal
  button: {
    width: '100%',
    minHeight: 62,
    borderRadius: 20,
    backgroundColor: '#5D8F81',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 22,
  },

  // texto do botão
  buttonText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  // estilo de texto secundário (não usado aqui ainda)
  backText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#4E7C70',
  },
});