// arquivo app/novo-agendamento.tsx
// aqui eu organizei a tela de novo agendamento e deixei responsiva para celular e desktop

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

import { Ionicons } from '@expo/vector-icons';
import SelectField from '@/components/ui/selectField';

export default function NovoAgendamentoScreen() {
  // aqui eu pego a largura da tela pra saber se está no mobile ou desktop
  const { width } = useWindowDimensions();

  // se for maior ou igual a 900, eu considero desktop
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
    <View style={styles.screen}>

      {/* sidebar aparece apenas no desktop */}
      {isDesktop && (
        <View style={styles.sidebar}>
          <View style={styles.logoBox}>
            <Text style={styles.psi}>Ψ</Text>
            <View>
              <Text style={styles.logoText}>SEP</Text>
              <Text style={styles.logoSub}>Clínica de Psicologia</Text>
            </View>
          </View>

          <MenuItem icon="home-outline" label="Agenda" path="/(tabs)" />
          <MenuItem icon="people-outline" label="Pacientes" path="/pacientes" />
          <MenuItem icon="business-outline" label="Salas" path="/salas" />
          <MenuItem icon="notifications-outline" label="Avisos" path="/notificacoes" />
          <MenuItem icon="person-outline" label="Perfil" path="/perfil" />
        </View>
      )}

      {/* conteúdo principal */}
      <ScrollView
        style={styles.content}
        contentContainerStyle={[
          styles.scrollContent,
          isDesktop && styles.scrollContentDesktop,
        ]}
        showsVerticalScrollIndicator={false}
      >

        {/* topo da tela */}
        <View style={[styles.header, !isDesktop && styles.headerMobile]}>
          <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#111827" />
          </TouchableOpacity>

          <View style={styles.headerTextBox}>
            <Text style={styles.pageTitle}>Novo Agendamento</Text>
            <Text style={styles.pageSubtitle}>
              Preencha as informações para criar um novo agendamento.
            </Text>
          </View>
        </View>

        {/* card principal */}
        <View style={styles.formCard}>

          <View style={styles.cardHeader}>
            <View style={styles.cardIcon}>
              <Ionicons name="calendar-outline" size={23} color="#0C706E" />
            </View>

            <Text style={styles.cardTitle}>Dados do Agendamento</Text>
          </View>

          {/* campos principais */}
          <View style={[styles.grid, isDesktop && styles.gridDesktop]}>

            <View style={styles.field}>
              <SelectField
                label="Paciente *"
                value={paciente}
                onChange={setPaciente}
                placeholder="Ana Silva"
                options={[
                  { label: 'Ana Silva', value: 'ana-silva' },
                  { label: 'Lucas Mendes', value: 'lucas-mendes' },
                  { label: 'Maria Clara Souza', value: 'maria-clara' },
                  { label: 'Pedro Henrique', value: 'pedro-henrique' },
                ]}
              />
            </View>

            <View style={styles.field}>
              <SelectField
                label="Estagiário *"
                value={estagiario}
                onChange={setEstagiario}
                placeholder="Paulo Oliveira"
                options={[
                  { label: 'Paulo Oliveira', value: 'paulo-oliveira' },
                  { label: 'Renato Alves', value: 'renato-alves' },
                  { label: 'Patrícia Melo', value: 'patricia-melo' },
                ]}
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Data *</Text>
              <View style={styles.inputIconBox}>
                <Ionicons name="calendar-outline" size={21} color="#475569" />
                <TextInput
                  style={styles.input}
                  value={data}
                  onChangeText={setData}
                  placeholder="12/06/2026"
                  placeholderTextColor="#94A3B8"
                />
              </View>
            </View>

            <View style={styles.field}>
              <SelectField
                label="Horário *"
                value={horario}
                onChange={setHorario}
                placeholder="14:00"
                options={[
                  { label: '08:00', value: '08:00' },
                  { label: '09:00', value: '09:00' },
                  { label: '10:00', value: '10:00' },
                  { label: '14:00', value: '14:00' },
                  { label: '15:00', value: '15:00' },
                  { label: '16:00', value: '16:00' },
                ]}
              />
            </View>

            <View style={styles.field}>
              <SelectField
                label="Sala *"
                value={sala}
                onChange={setSala}
                placeholder="Sala 2"
                options={[
                  { label: 'Sala 1', value: 'sala-1' },
                  { label: 'Sala 2', value: 'sala-2' },
                  { label: 'Sala 3', value: 'sala-3' },
                  { label: 'Sala infantil', value: 'sala-infantil' },
                ]}
              />
            </View>

            <View style={styles.field}>
              <SelectField
                label="Tipo de Atendimento *"
                value={tipoAtendimento}
                onChange={setTipoAtendimento}
                placeholder="Psicoterapia individual"
                options={[
                  { label: 'Psicoterapia individual', value: 'individual' },
                  { label: 'Psicoterapia em grupo', value: 'grupo' },
                  { label: 'Avaliação', value: 'avaliacao' },
                  { label: 'Retorno', value: 'retorno' },
                ]}
              />
            </View>

            <View style={styles.field}>
              <SelectField
                label="Sessão (Pacote)"
                value={sessao}
                onChange={setSessao}
                placeholder="1ª sessão de 10"
                options={[
                  { label: '1ª sessão de 10', value: '1' },
                  { label: '2ª sessão de 10', value: '2' },
                  { label: '3ª sessão de 10', value: '3' },
                ]}
              />
            </View>

            <View style={styles.field}>
              <SelectField
                label="Duração"
                value={duracao}
                onChange={setDuracao}
                placeholder="60 minutos"
                options={[
                  { label: '30 minutos', value: '30' },
                  { label: '45 minutos', value: '45' },
                  { label: '60 minutos', value: '60' },
                ]}
              />
            </View>
          </View>

          {/* observações */}
          <View style={styles.obsBox}>
            <Text style={styles.label}>Observações Iniciais</Text>

            <TextInput
              style={styles.textArea}
              value={observacoes}
              onChangeText={setObservacoes}
              placeholder="Digite as observações iniciais (opcional)..."
              placeholderTextColor="#94A3B8"
              multiline
              maxLength={500}
            />

            <Text style={styles.counter}>{observacoes.length}/500 caracteres</Text>
          </View>

          {/* agendamento automático */}
          <View style={styles.autoBlock}>
            <View style={styles.autoTextBox}>
              <Text style={styles.autoTitle}>Agendamento Automático</Text>
              <Text style={styles.autoSubtitle}>
                Criar pacote de 10 sessões para o paciente
              </Text>
            </View>

            <Switch
              value={automatico}
              onValueChange={setAutomatico}
              trackColor={{ false: '#CBD5E1', true: '#A7D8C4' }}
              thumbColor={automatico ? '#0C706E' : '#F8FAFC'}
            />
          </View>

          {/* botões */}
          <View style={[styles.buttonsRow, !isDesktop && styles.buttonsMobile]}>
            <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
              <Ionicons name="close-outline" size={23} color="#334155" />
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => router.push('/agendamento-sucesso')}
            >
              <Ionicons name="checkmark-outline" size={23} color="#FFFFFF" />
              <Text style={styles.saveText}>Salvar Agendamento</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

function MenuItem({ icon, label, path }: any) {
  return (
    <TouchableOpacity
      style={label === 'Agenda' ? styles.menuItemActive : styles.menuItem}
      onPress={() => router.push(path)}
    >
      <Ionicons
        name={icon}
        size={22}
        color={label === 'Agenda' ? '#FFFFFF' : '#475569'}
      />
      <Text style={label === 'Agenda' ? styles.menuTextActive : styles.menuText}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F8FAFC',
  },

  sidebar: {
    width: 250,
    backgroundColor: '#FFFFFF',
    borderRightWidth: 1,
    borderRightColor: '#E5E7EB',
    paddingBottom: 24,
  },

  logoBox: {
    height: 118,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    marginBottom: 18,
  },

  psi: {
    fontSize: 54,
    color: '#0C706E',
    fontWeight: '800',
  },

  logoText: {
    fontSize: 34,
    color: '#0C706E',
    fontWeight: '900',
  },

  logoSub: {
    fontSize: 13,
    color: '#0C706E',
    marginTop: -4,
  },

  menuItem: {
    marginHorizontal: 14,
    marginBottom: 8,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  menuItemActive: {
    marginHorizontal: 14,
    marginBottom: 8,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: '#0C706E',
  },

  menuText: {
    fontSize: 16,
    color: '#334155',
    fontWeight: '600',
  },

  menuTextActive: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '800',
  },

  content: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 28,
    paddingBottom: 32,
  },

  scrollContentDesktop: {
    paddingHorizontal: 28,
    paddingTop: 28,
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 24,
  },

  headerMobile: {
    marginTop: 22,
    alignItems: 'flex-start',
  },

  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  headerTextBox: {
    flex: 1,
  },

  pageTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#111827',
  },

  pageSubtitle: {
    fontSize: 15,
    color: '#64748B',
    marginTop: 4,
    lineHeight: 21,
  },

  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 16,
    shadowColor: '#94A3B8',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 22,
  },

  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E8F4F1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: '900',
    color: '#111827',
  },

  grid: {
    gap: 14,
  },

  gridDesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 28,
  },

  field: {
    width: '100%',
  },

  label: {
    fontSize: 14,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 8,
  },

  inputIconBox: {
    minHeight: 56,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },

  obsBox: {
    marginTop: 14,
  },

  textArea: {
    minHeight: 95,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingTop: 14,
    fontSize: 15,
    color: '#111827',
    textAlignVertical: 'top',
  },

  counter: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 8,
  },

  autoBlock: {
    marginTop: 20,
    minHeight: 78,
    borderRadius: 12,
    backgroundColor: '#EEF8F4',
    borderWidth: 1,
    borderColor: '#D6EDE5',
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },

  autoTextBox: {
    flex: 1,
  },

  autoTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#111827',
  },

  autoSubtitle: {
    fontSize: 13,
    color: '#475569',
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
    borderRadius: 10,
    paddingHorizontal: 22,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  cancelText: {
    fontSize: 15,
    color: '#334155',
    fontWeight: '800',
  },

  saveButton: {
    minHeight: 52,
    borderRadius: 10,
    paddingHorizontal: 22,
    backgroundColor: '#0C706E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  saveText: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '900',
  },
});