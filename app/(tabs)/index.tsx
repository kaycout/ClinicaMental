// arquivo app/(tabs)/index.tsx
// aqui eu organizei a tela de agenda e deixei responsiva para mobile e desktop

import React from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

// lista simulada dos atendimentos do dia
const atendimentos = [
  {
    horario: '08:00',
    iniciais: 'AS',
    paciente: 'Ana Silva',
    idade: '14 anos',
    tipo: 'Criança',
    responsavel: 'Mariana Silva',
    profissional: 'Paulo Oliveira',
    sala: 'Sala 1',
    status: 'Confirmada',
  },
  {
    horario: '09:00',
    iniciais: 'LM',
    paciente: 'Lucas Mendes',
    idade: '28 anos',
    tipo: 'Adulto',
    responsavel: '-',
    profissional: 'Carla Souza',
    sala: 'Sala 2',
    status: 'Pendente',
  },
  {
    horario: '10:00',
    iniciais: 'MC',
    paciente: 'Maria Clara',
    idade: '10 anos',
    tipo: 'Criança',
    responsavel: 'Juliana Souza',
    profissional: 'João Pedro',
    sala: 'Sala Infantil',
    status: 'Remarcada',
  },
  {
    horario: '11:00',
    iniciais: 'PL',
    paciente: 'Pedro Lima',
    idade: '22 anos',
    tipo: 'Adulto',
    responsavel: '-',
    profissional: 'Fernanda Alves',
    sala: 'Sala 3',
    status: 'Falta',
  },
  {
    horario: '12:00',
    iniciais: 'JA',
    paciente: 'Julia Alves',
    idade: '16 anos',
    tipo: 'Criança',
    responsavel: 'Carla Alves',
    profissional: 'Paulo Oliveira',
    sala: 'Sala 1',
    status: 'Confirmada',
  },
  {
    horario: '13:00',
    iniciais: 'VR',
    paciente: 'Vitor Rocha',
    idade: '30 anos',
    tipo: 'Adulto',
    responsavel: '-',
    profissional: 'Carla Souza',
    sala: 'Sala 2',
    status: 'Cancelada',
  },
];

// menu lateral do desktop
const menuItems = [
  ['calendar-outline', 'Agenda', '/(tabs)'],
  ['people-outline', 'Pacientes', '/(tabs)/pacientes'],
  ['business-outline', 'Salas', '/(tabs)/salas'],
  ['notifications-outline', 'Avisos', '/(tabs)/notificacoes'],
  ['person-outline', 'Perfil', '/(tabs)/perfil'],
];

export default function AgendaScreen() {
  // aqui eu pego a largura da tela para adaptar no mobile e desktop
  const { width } = useWindowDimensions();

  // se a tela for menor que 900, eu considero mobile
  const isMobile = width < 900;

  return (
    <LinearGradient
      colors={['#F4FBF8', '#EAF6F1', '#F8FCFA']}
      style={styles.background}
    >
      {/* fundo com bolas */}
      <View style={styles.backgroundDecor}>
        <View style={styles.blurCircleOne} />
        <View style={styles.blurCircleTwo} />
        <View style={styles.blurCircleThree} />
      </View>

      <View style={styles.screen}>

        {/* sidebar só aparece no desktop */}
        {!isMobile && (
          <View style={styles.sidebar}>

            {/* logo */}
            <View style={styles.logoBox}>
              <Text style={styles.psi}>Ψ</Text>

              <View>
                <Text style={styles.logoText}>SEP</Text>
                <Text style={styles.logoSub}>Clínica de Psicologia</Text>
              </View>
            </View>

            {/* itens do menu */}
            <View style={styles.menuArea}>
              {menuItems.map(([icon, label, path]) => (
                <TouchableOpacity
                  key={label}
                  style={[
                    styles.menuItem,
                    label === 'Agenda' && styles.menuActive,
                  ]}
                  onPress={() => router.push(path as any)}
                >
                  <Ionicons
                    name={icon as any}
                    size={20}
                    color={label === 'Agenda' ? '#0C706E' : '#70808A'}
                  />

                  <Text
                    style={[
                      styles.menuText,
                      label === 'Agenda' && styles.menuTextActive,
                    ]}
                  >
                    {label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* botão sair */}
            <TouchableOpacity style={styles.logout} onPress={() => router.replace('/')}>
              <Ionicons name="exit-outline" size={20} color="#70808A" />
              <Text style={styles.menuText}>Sair</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* conteúdo principal */}
        <ScrollView
          style={[styles.content, isMobile && styles.contentMobile]}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >

          {/* topo da página */}
          <View style={[styles.topRow, isMobile && styles.topRowMobile]}>
            <View style={styles.titleBox}>
              <Text style={styles.pageTitle}>Agenda</Text>
              <Text style={styles.pageSubtitle}>
                Acompanhe seus atendimentos e registre informações permitidas.
              </Text>
            </View>

            {/* informações extras só no desktop */}
            {!isMobile && (
              <View style={styles.topRight}>
                <View style={styles.dateNavigation}>
                  <TouchableOpacity style={styles.dateButton}>
                    <Ionicons name="chevron-back-outline" size={18} color="#0F3F3D" />
                  </TouchableOpacity>

                  <View style={styles.dateBox}>
                    <Text style={styles.dateText}>09 de abril de 2025</Text>
                    <Text style={styles.dateSub}>Quarta-feira</Text>
                  </View>

                  <TouchableOpacity style={styles.dateButton}>
                    <Ionicons name="chevron-forward-outline" size={18} color="#0F3F3D" />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.todayButton}>
                  <Text style={styles.todayText}>Hoje</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.notificationButton}>
                  <Ionicons name="notifications-outline" size={20} color="#0C706E" />
                </TouchableOpacity>

                <View style={styles.userBox}>
                  <View style={styles.avatarUser}>
                    <Text style={styles.avatarUserText}>JS</Text>
                  </View>

                  <View>
                    <Text style={styles.userName}>João Silva</Text>
                    <Text style={styles.userRole}>Estagiário</Text>
                  </View>
                </View>
              </View>
            )}
          </View>

          {/* data no mobile */}
          {isMobile && (
            <View style={styles.mobileDateBox}>
              <TouchableOpacity style={styles.mobileDateArrow}>
                <Ionicons name="chevron-back-outline" size={20} color="#0C706E" />
              </TouchableOpacity>

              <View style={styles.mobileDateCenter}>
                <Text style={styles.mobileDateText}>09 de abril de 2025</Text>
                <Text style={styles.mobileDateSub}>Quarta-feira</Text>
              </View>

              <TouchableOpacity style={styles.mobileDateArrow}>
                <Ionicons name="chevron-forward-outline" size={20} color="#0C706E" />
              </TouchableOpacity>
            </View>
          )}

          {/* botão novo agendamento */}
          <TouchableOpacity
            style={[styles.newButton, isMobile && styles.newButtonMobile]}
            onPress={() => router.push('/novo-agendamento')}
          >
            <Ionicons name="add" size={20} color="#FFFFFF" />
            <Text style={styles.newButtonText}>Solicitar agendamento</Text>
          </TouchableOpacity>

          {/* cards de resumo */}
          <View style={[styles.statsRow, isMobile && styles.statsRowMobile]}>
            <StatCard icon="calendar-outline" value="12" label="Atendimentos" color="#EAF6F2" />
            <StatCard icon="checkmark-done-outline" value="6" label="Confirmados" color="#E7F7EF" />
            <StatCard icon="time-outline" value="3" label="Pendentes" color="#FFF5D6" />
            <StatCard icon="alert-circle-outline" value="1" label="Faltas" color="#FFE8E8" />
          </View>

          {/* filtros */}
          <View style={[styles.filtersRow, isMobile && styles.filtersRowMobile]}>
            <TouchableOpacity style={[styles.filterBox, isMobile && styles.filterBoxMobile]}>
              <Text style={styles.filterText}>Minhas salas</Text>
              <Ionicons name="chevron-down-outline" size={17} color="#64748B" />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.filterBox, isMobile && styles.filterBoxMobile]}>
              <Text style={styles.filterText}>Meus atendimentos</Text>
              <Ionicons name="chevron-down-outline" size={17} color="#64748B" />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.filterBox, isMobile && styles.filterBoxMobile]}>
              <Text style={styles.filterText}>Status</Text>
              <Ionicons name="chevron-down-outline" size={17} color="#64748B" />
            </TouchableOpacity>
          </View>

          {/* card principal da agenda */}
          <View style={styles.listCard}>
            <View style={styles.listHeader}>
              <View>
                <Text style={styles.listTitle}>Atendimentos do dia</Text>
                <Text style={styles.listSubtitle}>Visualização do estagiário</Text>
              </View>

              <View style={styles.permissionBadge}>
                <Ionicons name="shield-checkmark-outline" size={15} color="#0C706E" />
                <Text style={styles.permissionText}>Acesso limitado</Text>
              </View>
            </View>

            {/* lista dos atendimentos */}
            {atendimentos.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.appointmentRow,
                  isMobile && styles.appointmentRowMobile,
                ]}
              >
                {/* barrinha colorida do status */}
                <View style={[styles.leftBar, getBarStyle(item.status)]} />

                {/* horário */}
                <View style={[styles.timeBox, isMobile && styles.timeBoxMobile]}>
                  <Text style={styles.time}>{item.horario}</Text>
                  <Text style={styles.timeSub}>1h de sessão</Text>
                </View>

                {/* avatar */}
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>{item.iniciais}</Text>
                </View>

                {/* dados do paciente */}
                <View style={[styles.patientBox, isMobile && styles.patientBoxMobile]}>
                  <Text style={styles.patientName}>{item.paciente}</Text>

                  <Text style={styles.patientMeta}>
                    {item.idade} • {item.tipo}
                  </Text>

                  <Text style={styles.patientMeta}>
                    Responsável: {item.responsavel}
                  </Text>
                </View>

                {/* profissional e sala */}
                <View style={[styles.infoBox, isMobile && styles.infoBoxMobile]}>
                  <View style={styles.infoLine}>
                    <Ionicons name="person-outline" size={15} color="#64748B" />
                    <Text style={styles.infoText}>{item.profissional}</Text>
                  </View>

                  <View style={styles.infoLine}>
                    <Ionicons name="business-outline" size={15} color="#64748B" />
                    <Text style={styles.infoText}>{item.sala}</Text>
                  </View>
                </View>

                {/* status */}
                <View style={[styles.statusBadge, getStatusStyle(item.status)]}>
                  <Ionicons
                    name={getStatusIcon(item.status) as any}
                    size={13}
                    color={getStatusColor(item.status)}
                  />

                  <Text style={[styles.statusText, { color: getStatusColor(item.status) }]}>
                    {item.status}
                  </Text>
                </View>

                {/* ações só aparecem no desktop */}
                {!isMobile && (
                  <View style={styles.actions}>
                    <TouchableOpacity style={styles.actionButton}>
                      <Ionicons name="eye-outline" size={17} color="#0C706E" />
                      <Text style={styles.actionText}>Detalhes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[
                        styles.actionButton,
                        item.status === 'Falta' && styles.actionDangerButton,
                      ]}
                    >
                      <Ionicons
                        name={
                          item.status === 'Falta'
                            ? 'close-circle-outline'
                            : 'checkmark-circle-outline'
                        }
                        size={17}
                        color={item.status === 'Falta' ? '#B91C1C' : '#0C706E'}
                      />

                      <Text
                        style={[
                          styles.actionText,
                          item.status === 'Falta' && styles.actionDangerText,
                        ]}
                      >
                        {item.status === 'Falta' ? 'Registrar falta' : 'Registrar'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}

                {/* botão simples no mobile */}
                {isMobile && (
                  <View style={styles.mobileActions}>
                    <TouchableOpacity style={styles.mobileDetailsButton}>
                      <Text style={styles.mobileDetailsText}>Ver detalhes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[
                        styles.mobileDetailsButton,
                        item.status === 'Falta' && styles.mobileDangerButton,
                      ]}
                    >
                      <Text
                        style={[
                          styles.mobileDetailsText,
                          item.status === 'Falta' && styles.mobileDangerText,
                        ]}
                      >
                        {item.status === 'Falta' ? 'Registrar falta' : 'Registrar'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            ))}

            {/* rodapé do card */}
            <View style={styles.footerInfo}>
              <Text style={styles.footerInfoText}>
                Exibindo somente atendimentos vinculados ao estagiário.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

// aqui eu retorno a cor do status
function getStatusStyle(status: string) {
  if (status === 'Confirmada') return styles.confirmedBadge;
  if (status === 'Pendente') return styles.pendingBadge;
  if (status === 'Remarcada') return styles.rescheduledBadge;
  if (status === 'Falta') return styles.missedBadge;
  return styles.canceledBadge;
}

// aqui eu retorno a cor da barrinha lateral
function getBarStyle(status: string) {
  if (status === 'Confirmada') return styles.confirmedBar;
  if (status === 'Pendente') return styles.pendingBar;
  if (status === 'Remarcada') return styles.rescheduledBar;
  if (status === 'Falta') return styles.missedBar;
  return styles.canceledBar;
}

// aqui eu retorno a cor do texto do status
function getStatusColor(status: string) {
  if (status === 'Confirmada') return '#0C706E';
  if (status === 'Pendente') return '#A66B00';
  if (status === 'Remarcada') return '#2C7DA0';
  if (status === 'Falta') return '#B91C1C';
  return '#64748B';
}

// aqui eu retorno o ícone do status
function getStatusIcon(status: string) {
  if (status === 'Confirmada') return 'checkmark-circle-outline';
  if (status === 'Pendente') return 'time-outline';
  if (status === 'Remarcada') return 'sync-outline';
  if (status === 'Falta') return 'close-circle-outline';
  return 'remove-circle-outline';
}

// componente dos cards de estatística
function StatCard({ icon, value, label, color }: any) {
  return (
    <View style={styles.statCard}>
      <View style={[styles.statIcon, { backgroundColor: color }]}>
        <Ionicons name={icon} size={21} color="#0C706E" />
      </View>

      <View>
        <Text style={styles.statValue}>{value}</Text>
        <Text style={styles.statLabel}>{label}</Text>
      </View>
    </View>
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
    backgroundColor: 'transparent',
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

  logout: {
    position: 'absolute',
    bottom: 28,
    left: 26,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
  },

  content: {
    flex: 1,
    paddingHorizontal: 34,
    paddingTop: 30,
  },

  contentContainer: {
    paddingBottom: 34,
  },

  contentMobile: {
    paddingHorizontal: 16,
    paddingTop: 48,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 22,
    gap: 18,
  },

  topRowMobile: {
    flexDirection: 'column',
    gap: 10,
  },

  titleBox: {
    flex: 1,
  },

  pageTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: '#152322',
    marginBottom: 6,
  },

  pageSubtitle: {
    fontSize: 15,
    color: '#6B7C83',
    lineHeight: 21,
  },

  topRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  dateNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dateButton: {
    width: 42,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDE8E5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dateBox: {
    width: 185,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#DDE8E5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dateText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#152322',
  },

  dateSub: {
    fontSize: 12,
    color: '#6B7C83',
    marginTop: 2,
  },

  todayButton: {
    height: 46,
    paddingHorizontal: 17,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDE8E5',
    borderRadius: 12,
    justifyContent: 'center',
  },

  todayText: {
    fontWeight: '500',
    color: '#152322',
  },

  notificationButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDE8E5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  userBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
  },

  avatarUser: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: '#DDEDEA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarUserText: {
    fontWeight: '600',
    color: '#0C706E',
  },

  userName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#152322',
  },

  userRole: {
    fontSize: 12,
    color: '#6B7C83',
    marginTop: 2,
  },

  mobileDateBox: {
    minHeight: 58,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DDE8E5',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  mobileDateArrow: {
    width: 48,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mobileDateCenter: {
    flex: 1,
    alignItems: 'center',
  },

  mobileDateText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#152322',
  },

  mobileDateSub: {
    fontSize: 12,
    color: '#6B7C83',
    marginTop: 2,
  },

  newButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#0C706E',
    minHeight: 46,
    borderRadius: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    marginBottom: 18,
  },

  newButtonMobile: {
    width: '100%',
  },

  newButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },

  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 18,
  },

  statsRowMobile: {
    flexDirection: 'column',
  },

  statCard: {
    flex: 1,
    minHeight: 76,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E0E9E6',
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  statIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },

  statValue: {
    fontSize: 22,
    fontWeight: '600',
    color: '#152322',
  },

  statLabel: {
    fontSize: 12,
    color: '#6B7C83',
    marginTop: 2,
  },

  filtersRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 18,
  },

  filtersRowMobile: {
    flexDirection: 'column',
    gap: 10,
  },

  filterBox: {
    width: 215,
    height: 46,
    borderWidth: 1,
    borderColor: '#DDE8E5',
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  filterBoxMobile: {
    width: '100%',
  },

  filterText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#4B5F68',
  },

  listCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E0E9E6',
  },

  listHeader: {
    minHeight: 70,
    backgroundColor: '#EAF6F2',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 14,
    flexDirection: 'row',
    gap: 12,
  },

  listTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0C706E',
  },

  listSubtitle: {
    fontSize: 12,
    color: '#6B7C83',
    marginTop: 2,
  },

  permissionBadge: {
    minHeight: 32,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D8EAE5',
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  permissionText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#0C706E',
  },

  appointmentRow: {
    minHeight: 112,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF2F1',
    paddingHorizontal: 22,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 17,
    position: 'relative',
  },

  appointmentRowMobile: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10,
    paddingLeft: 18,
    paddingRight: 16,
  },

  leftBar: {
    position: 'absolute',
    left: 0,
    top: 18,
    bottom: 18,
    width: 3,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },

  timeBox: {
    width: 82,
  },

  timeBoxMobile: {
    width: '100%',
  },

  time: {
    fontSize: 23,
    fontWeight: '600',
    color: '#0C706E',
  },

  timeSub: {
    fontSize: 12,
    color: '#6B7C83',
    marginTop: 2,
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#E1F2EF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0C706E',
  },

  patientBox: {
    width: 225,
  },

  patientBoxMobile: {
    width: '100%',
  },

  patientName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#152322',
  },

  patientMeta: {
    fontSize: 12,
    color: '#5B6D75',
    marginTop: 3,
    lineHeight: 18,
  },

  infoBox: {
    width: 175,
    gap: 7,
  },

  infoBoxMobile: {
    width: '100%',
    marginTop: 2,
  },

  infoLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  infoText: {
    fontSize: 13,
    color: '#4B5F68',
  },

  statusBadge: {
    minHeight: 32,
    borderRadius: 18,
    paddingHorizontal: 11,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    justifyContent: 'center',
  },

  confirmedBadge: {
    backgroundColor: '#E3F7EE',
  },

  pendingBadge: {
    backgroundColor: '#FFF3CC',
  },

  rescheduledBadge: {
    backgroundColor: '#E0F2F8',
  },

  missedBadge: {
    backgroundColor: '#FFE5E5',
  },

  canceledBadge: {
    backgroundColor: '#EEF2F3',
  },

  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },

  actions: {
    marginLeft: 'auto',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },

  actionButton: {
    height: 40,
    paddingHorizontal: 13,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#0C706E',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    backgroundColor: '#FFFFFF',
  },

  actionText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#0C706E',
  },

  actionDangerButton: {
    borderColor: '#E8A3A3',
  },

  actionDangerText: {
    color: '#B91C1C',
  },

  mobileActions: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    marginTop: 4,
  },

  mobileDetailsButton: {
    flex: 1,
    minHeight: 41,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#0C706E',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  mobileDetailsText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#0C706E',
  },

  mobileDangerButton: {
    borderColor: '#E8A3A3',
  },

  mobileDangerText: {
    color: '#B91C1C',
  },

  footerInfo: {
    minHeight: 54,
    backgroundColor: '#F8FCFA',
    paddingHorizontal: 18,
    justifyContent: 'center',
  },

  footerInfoText: {
    color: '#6B7C83',
    fontSize: 13,
  },

  confirmedBar: {
    backgroundColor: '#10B981',
  },

  pendingBar: {
    backgroundColor: '#F59E0B',
  },

  rescheduledBar: {
    backgroundColor: '#2C7DA0',
  },

  missedBar: {
    backgroundColor: '#EF4444',
  },

  canceledBar: {
    backgroundColor: '#94A3B8',
  },
});