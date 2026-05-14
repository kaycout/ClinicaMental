// arquivo app/reagendamento.tsx
// tela de reagendamento seguindo o mesmo padrão visual das outras telas

import React, { useState } from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

// importando imagem
import { Image } from 'react-native';

import { router } from 'expo-router';

import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons } from '@expo/vector-icons';

import SelectField from '@/components/ui/selectField';

export default function ReagendamentoScreen() {

  // largura da tela
  const { width } = useWindowDimensions();

  // verificando desktop
  const isDesktop = width >= 900;

  // estados
  const [paciente, setPaciente] = useState('');
  const [novaData, setNovaData] = useState('');
  const [novoHorario, setNovoHorario] = useState('');
  const [sala, setSala] = useState('');
  const [motivo, setMotivo] = useState('');

  return (

    <LinearGradient
      colors={['#F7FCFA', '#EEF8F5', '#F9FCFB']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >

      {/* decoração */}
      <View style={styles.decorCircleOne} />
      <View style={styles.decorCircleTwo} />
      <View style={styles.decorCircleThree} />
      <View style={styles.decorDotOne} />
      <View style={styles.decorDotTwo} />
      <View style={styles.decorDotThree} />

      <View style={styles.page}>

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

    {/* menu lateral */}
    <View style={styles.menuArea}>

      {/* administrador */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => router.push('/acesso-administrador')}
      >
        <Image
          source={require('../assets/images/administrador.png')}
          style={styles.menuIcon}
        />

        <Text style={styles.menuText}>
          Administrador
        </Text>
      </TouchableOpacity>

      {/* label */}
      <Text style={styles.menuLabel}>
        GERENCIAMENTO
      </Text>

      {/* agendamentos */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => router.push('/calendario-administrador')}
      >
        <Image
          source={require('../assets/images/agendamento.png')}
          style={styles.menuIcon}
        />

        <Text style={styles.menuText}>
          Agendamentos
        </Text>
      </TouchableOpacity>

      {/* pacientes */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => router.push('/pacientes-admin')}
      >
        <Image
          source={require('../assets/images/paciente.png')}
          style={styles.menuIcon}
        />

        <Text style={styles.menuText}>
          Pacientes
        </Text>
      </TouchableOpacity>

      {/* salas */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => router.push('/salas-admin')}
      >
        <Image
          source={require('../assets/images/salas.png')}
          style={styles.menuIcon}
        />

        <Text style={styles.menuText}>
          Salas
        </Text>
      </TouchableOpacity>

      {/* cancelamentos */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => router.push('/cancelamentos')}
      >
        <Image
          source={require('../assets/images/cancelamento.png')}
          style={styles.menuIcon}
        />

        <Text style={styles.menuText}>
          Cancelamentos
        </Text>
      </TouchableOpacity>

      {/* cadastrar estagiário */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => router.push('/cadastro')}
      >
        <Image
          source={require('../assets/images/estagiario.png')}
          style={styles.menuIcon}
        />

        <Text style={styles.menuText}>
          Cadastrar Estagiário
        </Text>
      </TouchableOpacity>

      {/* reagendamento ativo */}
      <TouchableOpacity
        style={[
          styles.menuItem,
          styles.menuActive,
        ]}
      >
        <Ionicons
          name="refresh-outline"
          size={20}
          color="#0C706E"
        />

        <Text
          style={[
            styles.menuText,
            styles.menuTextActive,
          ]}
        >
          Reagendamento
        </Text>
      </TouchableOpacity>

      {/* perfil */}
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
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >

          {/* topo */}
          <View style={styles.header}>

            <Text style={styles.title}>
              Reagendamento
            </Text>

            <Text style={styles.subtitle}>
              Atualize a data e horário do atendimento.
            </Text>
          </View>

          {/* card */}
          <View style={styles.card}>

            {/* header card */}
            <View style={styles.cardHeader}>

              <View style={styles.cardIcon}>
                <Ionicons
                  name="refresh-outline"
                  size={24}
                  color="#087A73"
                />
              </View>

              <View>
                <Text style={styles.cardTitle}>
                  Dados do reagendamento
                </Text>

                <Text style={styles.cardSubtitle}>
                  Escolha as novas informações da consulta
                </Text>
              </View>

            </View>

            {/* grid */}
            <View style={[
              styles.grid,
              isDesktop && styles.gridDesktop,
            ]}>

              {/* paciente */}
              <View style={[
                styles.field,
                isDesktop && styles.fieldDesktop,
              ]}>
                <SelectField
                  label="Paciente *"
                  value={paciente}
                  onChange={setPaciente}
                  placeholder="Selecione o paciente"
                  options={[
                    { label: 'Ana Silva', value: 'ana' },
                    { label: 'Lucas Mendes', value: 'lucas' },
                    { label: 'Maria Souza', value: 'maria' },
                  ]}
                />
              </View>

              {/* data */}
              <View style={[
                styles.field,
                isDesktop && styles.fieldDesktop,
              ]}>

                <Text style={styles.label}>
                  Nova data *
                </Text>

                <View style={styles.inputBox}>

                  <Ionicons
                    name="calendar-outline"
                    size={20}
                    color="#7B8A96"
                  />

                  <TextInput
                    style={styles.input}
                    value={novaData}
                    onChangeText={setNovaData}
                    placeholder="15/06/2026"
                    placeholderTextColor="#94A3B8"
                  />

                </View>
              </View>

              {/* horário */}
              <View style={[
                styles.field,
                isDesktop && styles.fieldDesktop,
              ]}>
                <SelectField
                  label="Novo horário *"
                  value={novoHorario}
                  onChange={setNovoHorario}
                  placeholder="14:00"
                  options={[
                    { label: '08:00', value: '08:00' },
                    { label: '10:00', value: '10:00' },
                    { label: '14:00', value: '14:00' },
                    { label: '16:00', value: '16:00' },
                  ]}
                />
              </View>

              {/* sala */}
              <View style={[
                styles.field,
                isDesktop && styles.fieldDesktop,
              ]}>
                <SelectField
                  label="Sala *"
                  value={sala}
                  onChange={setSala}
                  placeholder="Sala 2"
                  options={[
                    { label: 'Sala 1', value: '1' },
                    { label: 'Sala 2', value: '2' },
                    { label: 'Sala 3', value: '3' },
                  ]}
                />
              </View>

            </View>

            {/* motivo */}
            <View style={styles.obsBox}>

              <Text style={styles.label}>
                Motivo do reagendamento
              </Text>

              <TextInput
                style={styles.textArea}
                value={motivo}
                onChangeText={setMotivo}
                placeholder="Digite o motivo do reagendamento..."
                placeholderTextColor="#94A3B8"
                multiline
              />

            </View>

            {/* botões */}
            <View style={[
              styles.buttonsRow,
              !isDesktop && styles.buttonsMobile,
            ]}>

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
              >

                <Ionicons
                  name="checkmark-outline"
                  size={20}
                  color="#FFFFFF"
                />

                <Text style={styles.saveText}>
                  Salvar reagendamento
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        </ScrollView>

      </View>

    </LinearGradient>
  );
}

function MenuItem({ icon, label, path, active }: any) {

  return (

    <TouchableOpacity
      style={[
        styles.menuItem,
        active && styles.menuActive,
      ]}
      onPress={() => router.push(path)}
    >

      <Ionicons
        name={icon}
        size={20}
        color={active ? '#0C706E' : '#70808A'}
      />

      <Text
        style={[
          styles.menuText,
          active && styles.menuTextActive,
        ]}
      >
        {label}
      </Text>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  background: {
    flex: 1,
  },

  page: {
    flex: 1,
    flexDirection: 'row',
  },

  sidebar: {
    width: 270,
    backgroundColor: '#FFFFFF',
    borderRightWidth: 1,
    borderRightColor: '#DCEBE7',
    paddingTop: 28,
  },

  logoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 24,
    marginBottom: 36,
  },

  psi: {
    fontSize: 38,
    color: '#0C706E',
    fontWeight: '700',
  },

  logoText: {
    fontSize: 24,
    color: '#17262F',
    fontWeight: '700',
  },

  logoSub: {
    fontSize: 12,
    color: '#70808A',
    marginTop: 2,
  },

  menuArea: {
    paddingHorizontal: 16,
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

  menuItem: {
    height: 50,
    borderRadius: 14,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 6,
  },

  menuActive: {
    backgroundColor: '#E9F7F5',
  },

  menuText: {
    fontSize: 15,
    color: '#70808A',
    fontWeight: '500',
  },

  menuTextActive: {
    color: '#0C706E',
    fontWeight: '600',
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingVertical: 42,
  },

  header: {
    marginBottom: 24,
  },

  title: {
    fontSize: 32,
    color: '#17262F',
    fontWeight: '600',
  },

  subtitle: {
    fontSize: 15,
    color: '#70808A',
    marginTop: 6,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: '#DCEBE7',
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 24,
  },

  cardIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#EAF6F2',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardTitle: {
    fontSize: 18,
    color: '#17262F',
    fontWeight: '600',
  },

  cardSubtitle: {
    fontSize: 13,
    color: '#70808A',
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
    fontWeight: '500',
    marginBottom: 8,
  },

  inputBox: {
    height: 56,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#DCEBE7',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
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
    minHeight: 120,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#DCEBE7',
    backgroundColor: '#FFFFFF',
    padding: 14,
    textAlignVertical: 'top',
    fontSize: 15,
    color: '#17262F',
  },

  buttonsRow: {
    marginTop: 26,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },

  buttonsMobile: {
    flexDirection: 'column-reverse',
  },

  cancelButton: {
    minHeight: 52,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#DCEBE7',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  cancelText: {
    fontSize: 15,
    color: '#60768A',
    fontWeight: '500',
  },

  saveButton: {
    minHeight: 52,
    borderRadius: 14,
    backgroundColor: '#087A73',
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

  decorCircleOne: {
    position: 'absolute',
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: '#DCEFEB',
    opacity: 0.5,
    left: -90,
    top: 100,
  },

  decorCircleTwo: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#E3F3EF',
    opacity: 0.6,
    right: -70,
    bottom: 90,
  },

  decorCircleThree: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#DDEFEA',
    opacity: 0.4,
    right: 160,
    top: 80,
  },

  decorDotOne: {
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#DCEFEB',
    top: 70,
    left: '52%',
  },

  decorDotTwo: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#CBE6DF',
    bottom: 120,
    left: 80,
  },

  decorDotThree: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#D4ECE6',
    top: 220,
    right: 100,
  },

  menuIcon: {
  width: 20,
  height: 20,
  resizeMode: 'contain',
  tintColor: '#0C706E',
},

});