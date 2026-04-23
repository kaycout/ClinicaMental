import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { BrandHeader, Screen, useResponsive } from '@/components/clinic-ui';

const pacientes = [
  {
    nome: 'Ana Silva',
    idade: 9,
    tipo: 'Infantil',
    horario: '08:00',
    sala: 'Sala Infantil',
  },
  {
    nome: 'Pedro Henrique',
    idade: 14,
    tipo: 'Infantil',
    horario: '09:00',
    sala: 'Sala 2',
  },
  {
    nome: 'Mariana Costa',
    idade: 27,
    tipo: 'Adulto',
    horario: '10:00',
    sala: 'Sala 3',
  },
  {
    nome: 'Lucas Oliveira',
    idade: 35,
    tipo: 'Adulto',
    horario: '11:00',
    sala: 'Sala 4',
  },
  {
    nome: 'Julia Alves',
    idade: 22,
    tipo: 'Adulto',
    horario: '14:00',
    sala: 'Sala de Grupos',
  },
  {
    nome: 'Carlos Mendes',
    idade: 11,
    tipo: 'Infantil',
    horario: '15:00',
    sala: 'Sala 1',
  },
];

export default function PacientesAdminScreen() {
  const router = useRouter();
  const { isDesktop } = useResponsive();

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.wrapper}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.replace('/acesso-administrador')}
          >
            <Text style={styles.backText}>← Voltar</Text>
          </TouchableOpacity>

          <BrandHeader title="Pacientes da Clínica" centered={isDesktop} />

          <View style={[styles.cardsWrap, isDesktop && styles.cardsWrapDesktop]}>
            {pacientes.map((paciente, index) => (
              <View
                key={index}
                style={[styles.card, isDesktop && styles.cardDesktop]}
              >
                <Text style={styles.cardTitle}>{paciente.nome}</Text>

                <Text style={styles.cardInfo}>Idade: {paciente.idade} anos</Text>
                <Text style={styles.cardInfo}>Perfil: {paciente.tipo}</Text>
                <Text style={styles.cardInfo}>Horário: {paciente.horario}</Text>
                <Text style={styles.cardInfo}>Sala: {paciente.sala}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 24,
  },
  wrapper: {
    width: '100%',
    paddingTop: 20,
    maxWidth: 1100,
    alignSelf: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#E8F3EF',
    borderRadius: 12,
  },
  backText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#244043',
  },
  cardsWrap: {
    gap: 12,
  },
  cardsWrapDesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DEE9E5',
    borderRadius: 18,
    padding: 16,
  },
  cardDesktop: {
    width: '48.5%',
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 10,
    color: '#244043',
  },
  cardInfo: {
    fontSize: 14,
    color: '#6B7A7A',
    marginBottom: 4,
    fontWeight: '600',
  },
});