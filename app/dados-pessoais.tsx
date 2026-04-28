// arquivo app/dados-pessoais.tsx
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

export default function DadosPessoaisScreen() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 900;

  // estados dos campos
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  return (
    <LinearGradient
      colors={['#F4FBF8', '#EAF6F1', '#F8FCFA']}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={[styles.wrapper, isDesktop && styles.wrapperDesktop]}>
          <View style={[styles.card, isDesktop && styles.cardDesktop]}>

            {/* LOGO */}
            <View style={styles.logoArea}>
              <Text style={styles.psi}>Ψ</Text>
              <View>
                <Text style={styles.logoText}>SEP</Text>
                <Text style={styles.logoSubtitle}>CLÍNICA DE PSICOLOGIA</Text>
              </View>
            </View>

            {/* ETAPAS */}
            <View style={styles.stepsContainer}>

              {/* passo 1 concluído */}
              <View style={styles.stepItem}>
                <View style={styles.stepDone}>
                  <Ionicons name="checkmark" size={14} color="#fff" />
                </View>
                <Text style={styles.stepLabel}>Tipo de conta</Text>
              </View>

              <View style={styles.stepLine} />

              {/* passo 2 ativo */}
              <View style={styles.stepItem}>
                <View style={styles.stepActive}>
                  <Text style={styles.stepActiveText}>2</Text>
                </View>
                <Text style={styles.stepLabelActive}>Dados pessoais</Text>
              </View>

              <View style={styles.stepLine} />

              {/* passo 3 */}
              <View style={styles.stepItem}>
                <View style={styles.stepInactive}>
                  <Text style={styles.stepInactiveText}>3</Text>
                </View>
                <Text style={styles.stepLabel}>Dados de acesso</Text>
              </View>

              <View style={styles.stepLine} />

              {/* passo 4 */}
              <View style={styles.stepItem}>
                <View style={styles.stepInactive}>
                  <Text style={styles.stepInactiveText}>4</Text>
                </View>
                <Text style={styles.stepLabel}>Concluir</Text>
              </View>

            </View>

            {/* TÍTULO */}
            <Text style={styles.title}>Dados pessoais</Text>
            <Text style={styles.subtitle}>
              Preencha seus dados pessoais
            </Text>

            {/* FORMULÁRIO */}
            <View style={styles.form}>

              {/* NOME */}
              <Text style={styles.label}>Nome completo *</Text>
              <TextInput
                value={nome}
                onChangeText={setNome}
                placeholder="Digite seu nome completo"
                style={styles.input}
              />

              {/* CPF + DATA */}
              <View style={styles.row}>

                <View style={{ flex: 1 }}>
                  <Text style={styles.label}>CPF *</Text>
                  <TextInput
                    value={cpf}
                    onChangeText={setCpf}
                    placeholder="000.000.000-00"
                    keyboardType="numeric"
                    style={styles.input}
                  />
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={styles.label}>Data de nascimento *</Text>
                  <View style={styles.inputIcon}>
                    <TextInput
                      value={dataNascimento}
                      onChangeText={setDataNascimento}
                      placeholder="dd/mm/aaaa"
                      style={styles.inputFlex}
                    />
                    <Ionicons name="calendar-outline" size={18} color="#7A8D8A" />
                  </View>
                </View>

              </View>

              {/* EMAIL */}
              <Text style={styles.label}>E-mail *</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="seu@email.com"
                style={styles.input}
              />

              {/* TELEFONE */}
              <Text style={styles.label}>Telefone *</Text>
              <View style={styles.inputIcon}>
                <TextInput
                  value={telefone}
                  onChangeText={setTelefone}
                  placeholder="(11) 99999-9999"
                  keyboardType="numeric"
                  style={styles.inputFlex}
                />
                <Ionicons name="logo-whatsapp" size={18} color="#0C706E" />
              </View>

            </View>

            {/* BOTÕES */}
            <View style={styles.buttonsRow}>

              <TouchableOpacity
                style={styles.secondaryButton}
                onPress={() => router.back()}
              >
                <Text style={styles.secondaryText}>Voltar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.primaryButton}
                onPress={() => router.push('/dados-acesso')}
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

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 22,
  },

  wrapper: { width: '100%' },
  wrapperDesktop: { alignItems: 'center' },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 24,
    elevation: 8,
  },

  cardDesktop: { maxWidth: 520 },

  logoArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginBottom: 25,
  },

  psi: { fontSize: 60, color: '#0C706E' },

  logoText: { fontSize: 26, fontWeight: '900', color: '#0C706E' },

  logoSubtitle: { fontSize: 10, color: '#0C706E' },

  stepsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },

  stepItem: { alignItems: 'center', width: 70 },

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

  stepActiveText: { color: '#fff', fontWeight: '800' },
  stepInactiveText: { color: '#777' },

  stepLabel: { fontSize: 10, color: '#7B8986' },
  stepLabelActive: { fontSize: 10, fontWeight: '800' },

  stepLine: {
    flex: 1,
    height: 2,
    backgroundColor: '#E3EBE8',
  },

  title: {
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 6,
  },

  subtitle: {
    textAlign: 'center',
    color: '#7A8583',
    marginBottom: 20,
  },

  form: { gap: 10 },

  label: {
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 4,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#DCE5E2',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
  },

  inputIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DCE5E2',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 48,
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  inputFlex: { flex: 1 },

  row: { flexDirection: 'row', gap: 10 },

  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  primaryButton: {
    flex: 1,
    height: 50,
    backgroundColor: '#0C706E',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  primaryText: { color: '#fff', fontWeight: '800' },

  secondaryButton: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#DCE5E2',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  secondaryText: { fontWeight: '700' },
});