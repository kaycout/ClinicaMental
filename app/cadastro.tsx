import React, { useState } from 'react';
// importando componentes básicos
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
  TouchableOpacity,
} from 'react-native';
// importando navegação
import { router } from 'expo-router';
// importando fundo com gradiente
import { LinearGradient } from 'expo-linear-gradient';

// tela de cadastro de usuário (admin ou estagiário) :contentReference[oaicite:0]{index=0}
export default function CadastroScreen() {

  // pegando largura da tela pra responsividade
  const { width } = useWindowDimensions();

  // verificando se está em desktop
  const isDesktop = width >= 900;

  // states para armazenar os dados do formulário
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');

  // tipo de usuário (admin ou estagiário)
  const [tipoUsuario, setTipoUsuario] = useState<'admin' | 'estagiario'>('estagiario');

  // senha e confirmação
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    // fundo da tela com gradiente
    <LinearGradient
      colors={['#DCEEDF', '#D9EBE6', '#DCEEDF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >

      {/* evita o teclado cobrir os campos */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboard}
      >

        {/* scroll para telas menores */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >

          {/* container principal */}
          <View style={[styles.wrapper, isDesktop && styles.wrapperDesktop]}>

            {/* card do formulário */}
            <View style={[styles.card, isDesktop && styles.cardDesktop]}>
              
              {/* logo da clínica */}
              <View style={styles.logoCircle}>
                <Text style={styles.psi}>Ψ</Text>
              </View>

              {/* título */}
              <Text style={styles.title}>Cadastro SEP</Text>

              {/* descrição */}
              <Text style={styles.subtitle}>
                Cadastro de acesso para administrador ou estagiário da clínica
              </Text>

              {/* campo nome */}
              <View style={styles.fieldBlock}>
                <Text style={styles.label}>Nome completo</Text>
                <TextInput
                  value={nome}
                  onChangeText={setNome}
                  placeholder="Digite seu nome completo"
                  placeholderTextColor="#8B90A0"
                  style={styles.input}
                />
              </View>

              {/* campo cpf */}
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

              {/* seleção do tipo de usuário */}
              <View style={styles.fieldBlock}>
                <Text style={styles.label}>Tipo de acesso</Text>

                <View style={styles.tipoContainer}>

                  {/* botão admin */}
                  <TouchableOpacity
                    style={[
                      styles.tipoButton,
                      tipoUsuario === 'admin' && styles.tipoSelecionado
                    ]}
                    onPress={() => setTipoUsuario('admin')}
                  >
                    <Text style={[
                      styles.tipoTexto,
                      tipoUsuario === 'admin' && styles.tipoTextoSelecionado
                    ]}>
                      Admin
                    </Text>
                  </TouchableOpacity>

                  {/* botão estagiário */}
                  <TouchableOpacity
                    style={[
                      styles.tipoButton,
                      tipoUsuario === 'estagiario' && styles.tipoSelecionado
                    ]}
                    onPress={() => setTipoUsuario('estagiario')}
                  >
                    <Text style={[
                      styles.tipoTexto,
                      tipoUsuario === 'estagiario' && styles.tipoTextoSelecionado
                    ]}>
                      Estagiário
                    </Text>
                  </TouchableOpacity>

                </View>
              </View>

              {/* campo senha */}
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

              {/* confirmar senha */}
              <View style={styles.fieldBlock}>
                <Text style={styles.label}>Confirmar senha</Text>
                <TextInput
                  value={confirmarSenha}
                  onChangeText={setConfirmarSenha}
                  placeholder="Digite novamente sua senha"
                  placeholderTextColor="#8B90A0"
                  secureTextEntry
                  style={styles.input}
                />
              </View>

              {/* botão cadastrar */}
              <Pressable
                style={styles.primaryButton}

                // após cadastrar, vai para tela de sucesso
                onPress={() => router.replace('/cadastro-sucesso')}
              >
                <Text style={styles.primaryButtonText}>Cadastrar</Text>
              </Pressable>

              {/* voltar para login */}
              <Pressable onPress={() => router.replace('/tela-login')}>
                <Text style={styles.link}>Voltar para login</Text>
              </Pressable>

            </View>
          </View>
        </ScrollView>
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
    color: '#112B5C',
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

  tipoContainer: {
    flexDirection: 'row',
    gap: 10,
  },

  tipoButton: {
    flex: 1,
    minHeight: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#D7DCE5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tipoSelecionado: {
    backgroundColor: '#538477',
    borderColor: '#538477',
  },

  tipoTexto: {
    fontSize: 15,
    fontWeight: '700',
    color: '#232A39',
  },

  tipoTextoSelecionado: {
    color: '#FFFFFF',
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