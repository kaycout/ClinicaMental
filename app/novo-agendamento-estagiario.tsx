// arquivo app/novo-agendamento-estagiario.tsx
// tela de novo agendamento com sidebar igual a agenda

import React, { useState } from 'react';
import { router } from 'expo-router';

import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

import { Image } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons } from '@expo/vector-icons';

import SelectField from '@/components/ui/selectField';

export default function NovoAgendamentoScreen() {

  const { width } = useWindowDimensions();

  const isDesktop = width >= 900;

  const [paciente, setPaciente] = useState('');
  const [estagiario, setEstagiario] = useState('');
  const [horario, setHorario] = useState('');
  const [sala, setSala] = useState('');
  const [tipoAtendimento, setTipoAtendimento] = useState('');
  const [duracao, setDuracao] = useState('');
  const [sessao, setSessao] = useState('');
  const [data, setData] = useState('12/06/2026');
  const [observacoes, setObservacoes] = useState('');
  const [automatico, setAutomatico] = useState(true);

  return (
    <LinearGradient
      colors={['#F4FBF8', '#EAF6F1', '#F8FCFA']}
      style={styles.background}
    >

      {/* fundo */}
      <View style={styles.backgroundDecor}>
        <View style={styles.blurCircleOne} />
        <View style={styles.blurCircleTwo} />
        <View style={styles.blurCircleThree} />
      </View>

      <View style={styles.screen}>

        {/* sidebar desktop */}
        {isDesktop && (
          <View style={styles.sidebar}>

            {/* logo */}
            <View style={styles.logoBox}>
              <Text style={styles.psi}>Ψ</Text>

              <View>
                <Text style={styles.logoText}>SEP</Text>

                <Text style={styles.logoSub}>
                  Clínica de Psicologia
                </Text>
              </View>
            </View>

            {/* menu */}
            <View style={styles.menuArea}>

              <TouchableOpacity
                style={[
                  styles.menuItem,
                  styles.menuActive,
                ]}
                onPress={() => router.push('/calendario-administrador')}
              >
                <Image
                  source={require('../assets/images/agendamento.png')}
                  style={styles.menuIcon}
                />

                <Text
                  style={[
                    styles.menuText,
                    styles.menuTextActive,
                  ]}
                >
                  Agenda
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => router.push('/pacientes')}
              >
                <Image
                  source={require('../assets/images/paciente.png')}
                  style={styles.menuIcon}
                />

                <Text style={styles.menuText}>
                  Pacientes
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => router.push('/salas')}
              >
                <Image
                  source={require('../assets/images/salas.png')}
                  style={styles.menuIcon}
                />

                <Text style={styles.menuText}>
                  Salas
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => router.push('/notificacoes')}
              >
                <Image
                  source={require('../assets/images/cancelamento.png')}
                  style={styles.menuIcon}
                />

                <Text style={styles.menuText}>
                  Avisos
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => router.push('/perfil-administrador')}
              >
                <Image
                  source={require('../assets/images/perfil.png')}
                  style={styles.menuIcon}
                />

                <Text style={styles.menuText}>
                  Perfil
                </Text>
              </TouchableOpacity>

            </View>
          </View>
        )}

        {/* conteúdo */}
        <ScrollView
          style={styles.content}
          contentContainerStyle={[
            styles.scrollContent,
            isDesktop && styles.scrollContentDesktop,
          ]}
          showsVerticalScrollIndicator={false}
        >

          {/* título */}
          <View style={styles.headerTextBox}>
            <Text style={styles.pageTitle}>
              Novo Agendamento
            </Text>

            <Text style={styles.pageSubtitle}>
              Preencha as informações para criar um novo atendimento.
            </Text>
          </View>

          {/* card */}
          <View style={styles.formCard}>

            <View style={styles.cardHeader}>

              <View style={styles.cardIcon}>
                <Ionicons
                  name="calendar-outline"
                  size={22}
                  color="#0C706E"
                />
              </View>

              <View>
                <Text style={styles.cardTitle}>
                  Dados do agendamento
                </Text>

                <Text style={styles.cardSubtitle}>
                  Organize o atendimento do paciente
                </Text>
              </View>
            </View>

            {/* grid */}
            <View style={[styles.grid, isDesktop && styles.gridDesktop]}>

              <View style={[styles.field, isDesktop && styles.fieldDesktop]}>
                <SelectField
                  label="Paciente *"
                  value={paciente}
                  onChange={setPaciente}
                  placeholder="Ana Silva"
                  options={[
                    { label: 'Ana Silva', value: 'ana-silva' },
                    { label: 'Lucas Mendes', value: 'lucas-mendes' },
                  ]}
                />
              </View>

              <View style={[styles.field, isDesktop && styles.fieldDesktop]}>
                <SelectField
                  label="Estagiário *"
                  value={estagiario}
                  onChange={setEstagiario}
                  placeholder="Paulo Oliveira"
                  options={[
                    { label: 'Paulo Oliveira', value: 'paulo-oliveira' },
                    { label: 'Renato Alves', value: 'renato-alves' },
                  ]}
                />
              </View>

              <View style={[styles.field, isDesktop && styles.fieldDesktop]}>

                <Text style={styles.label}>
                  Data *
                </Text>

                <View style={styles.inputIconBox}>

                  <Ionicons
                    name="calendar-outline"
                    size={20}
                    color="#7E8D9B"
                  />

                  <TextInput
                    style={styles.input}
                    value={data}
                    onChangeText={setData}
                    placeholder="12/06/2026"
                    placeholderTextColor="#94A3B8"
                  />
                </View>
              </View>

              <View style={[styles.field, isDesktop && styles.fieldDesktop]}>
                <SelectField
                  label="Horário *"
                  value={horario}
                  onChange={setHorario}
                  placeholder="14:00"
                  options={[
                    { label: '08:00', value: '08:00' },
                    { label: '09:00', value: '09:00' },
                    { label: '14:00', value: '14:00' },
                  ]}
                />
              </View>

              <View style={[styles.field, isDesktop && styles.fieldDesktop]}>
                <SelectField
                  label="Sala *"
                  value={sala}
                  onChange={setSala}
                  placeholder="Sala 2"
                  options={[
                    { label: 'Sala 1', value: '1' },
                    { label: 'Sala 2', value: '2' },
                  ]}
                />
              </View>

              <View style={[styles.field, isDesktop && styles.fieldDesktop]}>
                <SelectField
                  label="Tipo de Atendimento *"
                  value={tipoAtendimento}
                  onChange={setTipoAtendimento}
                  placeholder="Psicoterapia"
                  options={[
                    { label: 'Psicoterapia', value: 'psico' },
                    { label: 'Avaliação', value: 'avaliacao' },
                  ]}
                />
              </View>

            </View>

            {/* observações */}
            <View style={styles.obsBox}>

              <Text style={styles.label}>
                Observações
              </Text>

              <TextInput
                style={styles.textArea}
                value={observacoes}
                onChangeText={setObservacoes}
                placeholder="Digite observações..."
                placeholderTextColor="#94A3B8"
                multiline
              />
            </View>

            {/* automático */}
            <View style={styles.autoBlock}>

              <View style={styles.autoTextBox}>
                <Text style={styles.autoTitle}>
                  Agendamento automático
                </Text>

                <Text style={styles.autoSubtitle}>
                  Criar pacote automático de sessões
                </Text>
              </View>

              <Switch
                value={automatico}
                onValueChange={setAutomatico}
                trackColor={{
                  false: '#CBD5E1',
                  true: '#BFE7DA',
                }}
                thumbColor={automatico ? '#0C706E' : '#FFFFFF'}
              />
            </View>

            {/* botões */}
            <View
              style={[
                styles.buttonsRow,
                !isDesktop && styles.buttonsMobile,
              ]}
            >

              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => router.back()}
              >
                <Ionicons
                  name="close-outline"
                  size={20}
                  color="#60768A"
                />

                <Text style={styles.cancelText}>
                  Cancelar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.saveButton}
                onPress={() => router.push('/agendamento-sucesso')}
              >
                <Ionicons
                  name="checkmark-outline"
                  size={20}
                  color="#FFFFFF"
                />

                <Text style={styles.saveText}>
                  Salvar agendamento
                </Text>
              </TouchableOpacity>

            </View>
          </View>
        </ScrollView>
      </View>
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
    width: 420,
    height: 420,
    borderRadius: 210,
    backgroundColor: 'rgba(12,112,110,0.08)',
    top: -120,
    left: -120,
  },

  blurCircleTwo: {
    position: 'absolute',
    width: 520,
    height: 520,
    borderRadius: 260,
    backgroundColor: 'rgba(166,189,184,0.18)',
    right: -180,
    bottom: -160,
  },

  blurCircleThree: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(255,255,255,0.7)',
    right: 100,
    top: 120,
  },

  screen: {
    flex: 1,
    flexDirection: 'row',
  },

  sidebar: {
    width: 245,
    backgroundColor: '#FFFFFF',
    borderRightWidth: 1,
    borderRightColor: '#E6ECEA',
  },

  logoBox: {
    height: 118,
    backgroundColor: '#0C706E',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    gap: 10,
    borderBottomRightRadius: 18,
  },

  psi: {
    fontSize: 50,
    color: '#FFFFFF',
    fontWeight: '700',
  },

  logoText: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: '700',
  },

  logoSub: {
    fontSize: 12,
    color: '#EAF6F2',
    marginTop: 2,
  },

  menuArea: {
    paddingTop: 18,
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginHorizontal: 12,
    borderRadius: 12,
    marginTop: 4,
  },

  menuActive: {
    backgroundColor: '#EAF6F2',
  },

  menuText: {
    fontSize: 15,
    color: '#4B5F68',
    fontWeight: '400',
  },

  menuTextActive: {
    color: '#0C706E',
    fontWeight: '600',
  },

  menuLabel: {
    fontSize: 11,
    color: '#8A98A3',
    fontWeight: '600',
    marginTop: 14,
    marginBottom: 10,
    marginLeft: 12,
    letterSpacing: 1,
  },

  menuIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: '#0C706E',
  },

  content: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 40,
  },

  scrollContentDesktop: {
    paddingHorizontal: 32,
    paddingTop: 42,
  },

  headerTextBox: {
    marginBottom: 24,
  },

  pageTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: '#17262F',
  },

  pageSubtitle: {
    fontSize: 15,
    color: '#6B7C86',
    marginTop: 8,
    lineHeight: 22,
  },

  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E0E9E6',
    padding: 22,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 22,
  },

  cardIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#EAF6F2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#17262F',
  },

  cardSubtitle: {
    fontSize: 13,
    color: '#6B7C86',
    marginTop: 3,
  },

  grid: {
    gap: 14,
  },

  gridDesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  field: {
    width: '100%',
  },

  fieldDesktop: {
    width: '48.5%',
  },

  label: {
    fontSize: 14,
    color: '#17262F',
    marginBottom: 8,
    fontWeight: '500',
  },

  inputIconBox: {
    minHeight: 56,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DCEBE7',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: '#17262F',
  },

  obsBox: {
    marginTop: 18,
  },

  textArea: {
    minHeight: 100,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DCEBE7',
    paddingHorizontal: 14,
    paddingTop: 14,
    fontSize: 15,
    color: '#17262F',
    textAlignVertical: 'top',
  },

  autoBlock: {
    marginTop: 20,
    backgroundColor: '#EEF8F4',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D6EDE5',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  autoTextBox: {
    flex: 1,
  },

  autoTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#17262F',
  },

  autoSubtitle: {
    fontSize: 13,
    color: '#61717B',
    marginTop: 3,
  },

  buttonsRow: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },

  buttonsMobile: {
    flexDirection: 'column-reverse',
  },

  cancelButton: {
    minHeight: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DCEBE7',
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#FFFFFF',
  },

  cancelText: {
    fontSize: 15,
    color: '#60768A',
    fontWeight: '500',
  },

  saveButton: {
    minHeight: 52,
    borderRadius: 12,
    backgroundColor: '#0C706E',
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  saveText: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});