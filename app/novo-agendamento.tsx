import React, { useState } from 'react';
import { router } from 'expo-router';
import { ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { BrandHeader, COLORS, PrimaryButton, Screen, useResponsive } from '@/components/clinic-ui';
import SelectField from '@/components/ui/selectField';

export default function NovoAgendamentoScreen() {
  const { isDesktop } = useResponsive();

  const [paciente, setPaciente] = useState('');
  const [estagiario, setEstagiario] = useState('');
  const [horario, setHorario] = useState('');
  const [sala, setSala] = useState('');
  const [tipoAtendimento, setTipoAtendimento] = useState('');
  const [data, setData] = useState('12/06/2026');
  const [observacoes, setObservacoes] = useState('');
  const [automatico, setAutomatico] = useState(true);

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.wrapper, isDesktop && styles.wrapperDesktop]}>
          <View style={[styles.mainContent, isDesktop && styles.mainContentDesktop]}>
            <BrandHeader title="Novo Agendamento" centered={isDesktop} />

            <View style={[styles.formCard, isDesktop && styles.formCardDesktop]}>
              <SelectField
                label="Paciente"
                value={paciente}
                onChange={setPaciente}
                placeholder="Ana Silva"
                options={[
                  { label: 'Ana Silva', value: 'ana-silva' },
                  { label: 'Renan Ferreira', value: 'renan-ferreira' },
                  { label: 'Lucas Mendes', value: 'lucas-mendes' },
                  { label: 'Maria Clara Souza', value: 'maria-clara' },
                  { label: 'Pedro Henrique', value: 'pedro-henrique' },
                ]}
              />

              <SelectField
                label="Estagiário"
                value={estagiario}
                onChange={setEstagiario}
                placeholder="Paulo Oliveira"
                options={[
                  { label: 'Paulo Oliveira', value: 'paulo-oliveira' },
                  { label: 'Renato Alves', value: 'renato-alves' },
                  { label: 'Patrícia Melo', value: 'patricia-melo' },
                  { label: 'Mariana Costa', value: 'mariana-costa' },
                  { label: 'João Santos', value: 'joao-santos' },
                ]}
              />

              <View style={styles.fieldBlock}>
                <Text style={styles.label}>Data</Text>
                <TextInput
                  style={styles.input}
                  value={data}
                  onChangeText={setData}
                  placeholder="12/06/2026"
                  placeholderTextColor={COLORS.muted}
                />
              </View>

              <SelectField
                label="Horário"
                value={horario}
                onChange={setHorario}
                placeholder="14:00"
                options={[
                  { label: '08:00', value: '08:00' },
                  { label: '09:00', value: '09:00' },
                  { label: '10:00', value: '10:00' },
                  { label: '11:00', value: '11:00' },
                  { label: '14:00', value: '14:00' },
                  { label: '15:00', value: '15:00' },
                  { label: '16:00', value: '16:00' },
                ]}
              />

              <SelectField
                label="Sala"
                value={sala}
                onChange={setSala}
                placeholder="Sala 2"
                options={[
                  { label: 'Sala 1', value: 'sala-1' },
                  { label: 'Sala 2', value: 'sala-2' },
                  { label: 'Sala 3', value: 'sala-3' },
                  { label: 'Sala 4', value: 'sala-4' },
                  { label: 'Sala infantil', value: 'sala-infantil' },
                  { label: 'Sala de grupos', value: 'sala-grupos' },
                  { label: 'Sala de supervisão', value: 'sala-supervisao' },
                ]}
              />

              <SelectField
                label="Tipo de Atendimento"
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

              <View style={styles.fieldBlock}>
                <Text style={styles.label}>Observações Iniciais</Text>
                <TextInput
                  style={styles.input}
                  value={observacoes}
                  onChangeText={setObservacoes}
                  placeholder="Paciente em acompanhamento..."
                  placeholderTextColor={COLORS.muted}
                />
              </View>

              <View style={styles.autoBlock}>
                <View style={styles.autoTextBox}>
                  <Text style={styles.autoTitle}>Agendamento Automático</Text>
                  <Text style={styles.autoSubtitle}>
                    Criar pacote de 10 sessões para o paciente
                  </Text>
                </View>
                <Switch value={automatico} onValueChange={setAutomatico} />
              </View>

              <PrimaryButton
                label="Agendar Consulta"
                onPress={() => router.push('/agendamento-sucesso')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 24,
    paddingTop: 20,
  },
  wrapper: {
    width: '100%',
    maxWidth: 560,
    alignSelf: 'center',
  },
  wrapperDesktop: {
    maxWidth: 1180,
    flexDirection: 'row',
    gap: 24,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  mainContent: {
    width: '100%',
  },
  mainContentDesktop: {
    flex: 1,
    maxWidth: 560,
  },
  formCard: {
    backgroundColor: '#F7FBFA',
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: '#DBE8E4',
  },
  formCardDesktop: {
    minWidth: 420,
  },
  fieldBlock: {
    marginBottom: 14,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 8,
  },
  input: {
    minHeight: 56,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D7E5E1',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    color: COLORS.text,
    fontSize: 16,
  },
  autoBlock: {
    minHeight: 68,
    borderRadius: 14,
    backgroundColor: '#E7F0EE',
    borderWidth: 1,
    borderColor: '#D7E5E1',
    paddingHorizontal: 14,
    marginBottom: 14,
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
    fontWeight: '700',
    color: COLORS.text,
  },
  autoSubtitle: {
    fontSize: 13,
    color: COLORS.muted,
    marginTop: 2,
  },
});