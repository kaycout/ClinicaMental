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
                size={22}
                color={label === 'Agenda' ? '#0C706E' : '#5E6B78'}
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

          {/* botão sair */}
          <TouchableOpacity style={styles.logout} onPress={() => router.replace('/')}>
            <Ionicons name="exit-outline" size={22} color="#5E6B78" />
            <Text style={styles.menuText}>Sair</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* conteúdo principal */}
      <ScrollView
        style={[styles.content, isMobile && styles.contentMobile]}
        showsVerticalScrollIndicator={false}
      >

        {/* topo da página */}
        <View style={[styles.topRow, isMobile && styles.topRowMobile]}>
          <View style={styles.titleBox}>
            <Text style={styles.pageTitle}>Agenda</Text>
            <Text style={styles.pageSubtitle}>
              Visualize e gerencie os atendimentos do dia
            </Text>
          </View>

          {/* informações extras só no desktop */}
          {!isMobile && (
            <View style={styles.topRight}>
              <TouchableOpacity style={styles.dateButton}>
                <Ionicons name="chevron-back-outline" size={20} color="#1F2937" />
              </TouchableOpacity>

              <View style={styles.dateBox}>
                <Text style={styles.dateText}>09 de abril de 2025</Text>
                <Text style={styles.dateSub}>Quarta-feira</Text>
              </View>

              <TouchableOpacity style={styles.dateButton}>
                <Ionicons name="chevron-forward-outline" size={20} color="#1F2937" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.todayButton}>
                <Text style={styles.todayText}>Hoje</Text>
              </TouchableOpacity>

              <Ionicons name="notifications-outline" size={26} color="#334155" />

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
          <Ionicons name="add" size={22} color="#FFFFFF" />
          <Text style={styles.newButtonText}>Novo Agendamento</Text>
        </TouchableOpacity>

        {/* filtros */}
        <View style={[styles.filtersRow, isMobile && styles.filtersRowMobile]}>
          <TouchableOpacity style={[styles.filterBox, isMobile && styles.filterBoxMobile]}>
            <Text style={styles.filterText}>Todas as salas</Text>
            <Ionicons name="chevron-down-outline" size={18} color="#334155" />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.filterBox, isMobile && styles.filterBoxMobile]}>
            <Text style={styles.filterText}>Profissionais</Text>
            <Ionicons name="chevron-down-outline" size={18} color="#334155" />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.filterBox, isMobile && styles.filterBoxMobile]}>
            <Text style={styles.filterText}>Status</Text>
            <Ionicons name="chevron-down-outline" size={18} color="#334155" />
          </TouchableOpacity>
        </View>

        {/* card principal da agenda */}
        <View style={styles.listCard}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Agenda do Dia</Text>
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
                  <Ionicons name="person-outline" size={16} color="#334155" />
                  <Text style={styles.infoText}>{item.profissional}</Text>
                </View>

                <View style={styles.infoLine}>
                  <Ionicons name="business-outline" size={16} color="#334155" />
                  <Text style={styles.infoText}>{item.sala}</Text>
                </View>
              </View>

              {/* status */}
              <View style={[styles.statusBadge, getStatusStyle(item.status)]}>
                <Ionicons
                  name={getStatusIcon(item.status) as any}
                  size={14}
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
                    <Ionicons name="eye-outline" size={18} color="#0C706E" />
                    <Text style={styles.actionText}>Ver detalhes</Text>
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
                      size={18}
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
                <TouchableOpacity style={styles.mobileDetailsButton}>
                  <Text style={styles.mobileDetailsText}>Ver detalhes</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}

          {/* rodapé do card */}
          <View style={styles.footerInfo}>
            <Text style={styles.footerInfoText}>
              Exibindo 6 de 12 atendimentos do dia
            </Text>
          </View>
        </View>

        {/* cards de resumo */}
        <View style={[styles.statsRow, isMobile && styles.statsRowMobile]}>
          <StatCard icon="calendar-outline" value="12" label="Total" color="#E8F4F1" />
          <StatCard icon="checkmark-done-outline" value="6" label="Confirmados" color="#DDF7EA" />
          <StatCard icon="time-outline" value="3" label="Pendentes" color="#FFF4C7" />
          <StatCard icon="sync-outline" value="1" label="Remarcado" color="#D8EEF6" />
          <StatCard icon="close-outline" value="1" label="Falta" color="#FFE2E2" />
          <StatCard icon="close-circle-outline" value="1" label="Cancelado" color="#E5E7EB" />
        </View>
      </ScrollView>
    </View>
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
  if (status === 'Pendente') return '#B7791F';
  if (status === 'Remarcada') return '#2C7DA0';
  if (status === 'Falta') return '#B91C1C';
  return '#374151';
}

// aqui eu retorno o ícone do status
function getStatusIcon(status: string) {
  if (status === 'Confirmada') return 'checkmark-circle';
  if (status === 'Pendente') return 'time-outline';
  if (status === 'Remarcada') return 'sync-outline';
  if (status === 'Falta') return 'close-circle-outline';
  return 'close-circle-outline';
}

// componente dos cards de estatística
function StatCard({ icon, value, label, color }: any) {
  return (
    <View style={styles.statCard}>
      <View style={[styles.statIcon, { backgroundColor: color }]}>
        <Ionicons name={icon} size={24} color="#0C706E" />
      </View>

      <View>
        <Text style={styles.statValue}>{value}</Text>
        <Text style={styles.statLabel}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F6F8FB',
  },

  sidebar: {
    width: 235,
    backgroundColor: '#FFFFFF',
    borderRightWidth: 1,
    borderRightColor: '#E5E7EB',
  },

  logoBox: {
    height: 115,
    backgroundColor: '#0C706E',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
    gap: 10,
  },

  psi: {
    fontSize: 52,
    color: '#FFFFFF',
    fontWeight: '700',
  },

  logoText: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: '900',
  },

  logoSub: {
    fontSize: 12,
    color: '#FFFFFF',
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 15,
    paddingHorizontal: 24,
    marginHorizontal: 12,
    borderRadius: 8,
    marginTop: 4,
  },

  menuActive: {
    backgroundColor: '#E8F4F1',
    borderLeftWidth: 3,
    borderLeftColor: '#0C706E',
  },

  menuText: {
    fontSize: 16,
    color: '#475569',
    fontWeight: '600',
  },

  menuTextActive: {
    color: '#0C706E',
    fontWeight: '900',
  },

  logout: {
    position: 'absolute',
    bottom: 28,
    left: 26,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  content: {
    flex: 1,
    paddingHorizontal: 34,
    paddingTop: 28,
  },

  contentMobile: {
    paddingHorizontal: 16,
    paddingTop: 64,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
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
    fontWeight: '900',
    color: '#111827',
    marginBottom: 6,
  },

  pageSubtitle: {
    fontSize: 15,
    color: '#64748B',
    lineHeight: 21,
  },

  topRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  dateButton: {
    width: 45,
    height: 54,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dateBox: {
    width: 190,
    height: 54,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dateText: {
    fontSize: 15,
    fontWeight: '900',
    color: '#111827',
  },

  dateSub: {
    fontSize: 13,
    color: '#64748B',
  },

  todayButton: {
    height: 50,
    paddingHorizontal: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    justifyContent: 'center',
  },

  todayText: {
    fontWeight: '900',
    color: '#111827',
  },

  userBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  avatarUser: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#DDEDEA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarUserText: {
    fontWeight: '900',
    color: '#0C706E',
  },

  userName: {
    fontSize: 16,
    fontWeight: '900',
    color: '#111827',
  },

  userRole: {
    fontSize: 13,
    color: '#64748B',
  },

  mobileDateBox: {
    minHeight: 58,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
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
    fontWeight: '900',
    color: '#111827',
  },

  mobileDateSub: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },

  newButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#0C706E',
    minHeight: 50,
    borderRadius: 8,
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 18,
  },

  newButtonMobile: {
    width: '100%',
  },

  newButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },

  filtersRow: {
    flexDirection: 'row',
    gap: 14,
    marginBottom: 18,
  },

  filtersRowMobile: {
    flexDirection: 'column',
    gap: 10,
  },

  filterBox: {
    width: 220,
    height: 48,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  filterBoxMobile: {
    width: '100%',
  },

  filterText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#334155',
  },

  listCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  listHeader: {
    height: 54,
    backgroundColor: '#6EA6AF',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },

  listTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#FFFFFF',
  },

  appointmentRow: {
    minHeight: 112,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingHorizontal: 22,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
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
    top: 16,
    bottom: 16,
    width: 4,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },

  timeBox: {
    width: 88,
  },

  timeBoxMobile: {
    width: '100%',
  },

  time: {
    fontSize: 24,
    fontWeight: '900',
    color: '#0C706E',
  },

  timeSub: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E1F2EF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0C706E',
  },

  patientBox: {
    width: 240,
  },

  patientBoxMobile: {
    width: '100%',
  },

  patientName: {
    fontSize: 17,
    fontWeight: '900',
    color: '#111827',
  },

  patientMeta: {
    fontSize: 13,
    color: '#475569',
    marginTop: 3,
    lineHeight: 18,
  },

  infoBox: {
    width: 190,
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
    fontSize: 14,
    color: '#111827',
  },

  statusBadge: {
    minHeight: 34,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    justifyContent: 'center',
  },

  confirmedBadge: {
    backgroundColor: '#DDF7EA',
  },

  pendingBadge: {
    backgroundColor: '#FFF4C7',
  },

  rescheduledBadge: {
    backgroundColor: '#D8EEF6',
  },

  missedBadge: {
    backgroundColor: '#FFE2E2',
  },

  canceledBadge: {
    backgroundColor: '#E5E7EB',
  },

  statusText: {
    fontSize: 13,
    fontWeight: '900',
  },

  actions: {
    marginLeft: 'auto',
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },

  actionButton: {
    height: 42,
    paddingHorizontal: 14,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#0C706E',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  actionText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0C706E',
  },

  actionDangerButton: {
    borderColor: '#B91C1C',
  },

  actionDangerText: {
    color: '#B91C1C',
  },

  mobileDetailsButton: {
    width: '100%',
    minHeight: 42,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#0C706E',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },

  mobileDetailsText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#0C706E',
  },

  footerInfo: {
    minHeight: 54,
    backgroundColor: '#E8F6F7',
    paddingHorizontal: 18,
    justifyContent: 'center',
  },

  footerInfoText: {
    color: '#0C706E',
    fontSize: 14,
  },

  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 18,
    marginBottom: 30,
  },

  statsRowMobile: {
    flexDirection: 'column',
  },

  statCard: {
    flex: 1,
    minHeight: 78,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  statIcon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },

  statValue: {
    fontSize: 22,
    fontWeight: '900',
    color: '#111827',
  },

  statLabel: {
    fontSize: 13,
    color: '#64748B',
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
    backgroundColor: '#64748B',
  },
});