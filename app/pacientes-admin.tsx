// arquivo app/pacientes-admin.tsx
// tela de pacientes padronizada com o restante do sistema administrativo da clínica

import React from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  TextInput,
} from 'react-native';

import { router } from 'expo-router';

// importando imagens dos ícones
import { Image } from 'react-native';

// gradiente de fundo
import { LinearGradient } from 'expo-linear-gradient';

// lista mockada de pacientes
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
  // responsividade
  const { width } = useWindowDimensions();

  // verifica se é desktop
  const isDesktop = width >= 900;

  return (
    <LinearGradient
      colors={['#F7FCFA', '#EEF8F5', '#F9FCFB']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
      <View style={styles.page}>

        {/* sidebar lateral do administrador */}
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

              <Text style={styles.menuLabel}>
                GERENCIAMENTO
              </Text>

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

              <TouchableOpacity
                style={[
                  styles.menuItem,
                  styles.menuActive,
                ]}
              >
                <Image
                  source={require('../assets/images/paciente.png')}
                  style={styles.menuIcon}
                />

                <Text
                  style={[
                    styles.menuText,
                    styles.menuTextActive,
                  ]}
                >
                  Pacientes
                </Text>
              </TouchableOpacity>

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
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >

          {/* elementos decorativos */}
          <View style={styles.decorCircleOne} />
          <View style={styles.decorCircleTwo} />
          <View style={styles.decorCircleThree} />
          <View style={styles.decorDotOne} />
          <View style={styles.decorDotTwo} />
          <View style={styles.decorDotThree} />

          {/* header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>
                Pacientes da Clínica
              </Text>

              <Text style={styles.subtitle}>
                Visualize informações dos pacientes cadastrados e consultas agendadas.
              </Text>
            </View>

            {isDesktop && (
              <TouchableOpacity
                style={styles.newButton}
              >
                <Text style={styles.newButtonText}>
                  + Novo paciente
                </Text>
              </TouchableOpacity>
            )}
          </View>

          {/* barra de pesquisa */}
          <View style={styles.searchCard}>
            <TextInput
              placeholder="Pesquisar paciente..."
              placeholderTextColor="#8A98A3"
              style={styles.searchInput}
            />
          </View>

          {/* cards */}
          <View style={[styles.cardsWrap, isDesktop && styles.cardsWrapDesktop]}>
            {pacientes.map((paciente, index) => (
              <View
                key={index}
                style={[styles.card, isDesktop && styles.cardDesktop]}
              >
                <View style={styles.cardTop}>
                  <View style={styles.avatar}>
                    <Text style={styles.avatarText}>
                      {paciente.nome
                        .split(' ')
                        .map((nome) => nome[0])
                        .slice(0, 2)
                        .join('')}
                    </Text>
                  </View>

                  <View style={styles.cardTopInfo}>
                    <Text style={styles.cardTitle}>
                      {paciente.nome}
                    </Text>

                    <Text style={styles.cardSubtitle}>
                      {paciente.tipo}
                    </Text>
                  </View>
                </View>

                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Idade</Text>
                  <Text style={styles.infoValue}>
                    {paciente.idade} anos
                  </Text>
                </View>

                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Horário</Text>
                  <Text style={styles.infoValue}>
                    {paciente.horario}
                  </Text>
                </View>

                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Sala</Text>
                  <Text style={styles.infoValue}>
                    {paciente.sala}
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.detailsButton}
                  onPress={() => router.push('/paciente-detalhe-adm')}
                >
                  <Text style={styles.detailsButtonText}>
                    Ver detalhes
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
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

  page: {
    flex: 1,
    flexDirection: 'row',
  },

  // sidebar
  sidebar: {
    width: 270,
    backgroundColor: '#FFFFFF',
    borderRightWidth: 1,
    borderRightColor: '#DCEBE7',
    paddingTop: 28,
  },

  // logo
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

  menuIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: '#0C706E',
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

  content: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 42,
    paddingBottom: 34,
  },

  decorCircleOne: {
    position: 'absolute',
    width: 310,
    height: 310,
    borderRadius: 155,
    backgroundColor: '#DCEFEB',
    opacity: 0.55,
    left: -110,
    top: 120,
  },

  decorCircleTwo: {
    position: 'absolute',
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: '#E3F3EF',
    opacity: 0.75,
    right: -90,
    top: 230,
  },

  decorCircleThree: {
    position: 'absolute',
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: '#DDEFEA',
    opacity: 0.45,
    left: 40,
    bottom: 80,
  },

  decorDotOne: {
    position: 'absolute',
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EAF6F2',
    top: 52,
    left: '58%',
  },

  decorDotTwo: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#CBE6DF',
    top: 300,
    left: 40,
  },

  decorDotThree: {
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#E1F2EE',
    top: 120,
    right: 110,
  },

  header: {
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    color: '#17262F',
    fontWeight: '600',
  },

  subtitle: {
    fontSize: 15,
    color: '#6B7C86',
    marginTop: 4,
    lineHeight: 21,
  },

  newButton: {
    minHeight: 48,
    borderRadius: 12,
    backgroundColor: '#087A73',
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  newButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

  searchCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#DCEBE7',
    padding: 16,
    marginBottom: 18,
  },

  searchInput: {
    fontSize: 15,
    color: '#17262F',
  },

  cardsWrap: {
    gap: 14,
  },

  cardsWrapDesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#DCEBE7',
    padding: 18,
    shadowColor: '#6B8F86',
    shadowOpacity: 0.07,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },

  cardDesktop: {
    width: '48.8%',
  },

  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#DCEFEB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  avatarText: {
    fontSize: 18,
    color: '#087A73',
    fontWeight: '700',
  },

  cardTopInfo: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 17,
    color: '#17262F',
    fontWeight: '600',
  },

  cardSubtitle: {
    fontSize: 13,
    color: '#6B7C86',
    marginTop: 2,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  infoLabel: {
    fontSize: 13,
    color: '#7E8D9B',
  },

  infoValue: {
    fontSize: 13,
    color: '#17262F',
    fontWeight: '500',
  },

  detailsButton: {
    marginTop: 10,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#EAF6F2',
    justifyContent: 'center',
    alignItems: 'center',
  },

  detailsButtonText: {
    color: '#087A73',
    fontSize: 14,
    fontWeight: '600',
  },
});