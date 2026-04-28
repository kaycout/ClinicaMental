// arquivo app/(tabs)/pacientes.tsx
// aqui eu organizei essa tela de pacientes e deixei os comentários explicando minha parte do código

import React from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

// aqui eu deixei alguns pacientes simulados pra testar a tela
const pacientes = [
  {
    iniciais: 'AS',
    nome: 'Ana Silva',
    idade: '14 anos',
    tipo: 'Criança',
    responsavel: 'Mariana Silva',
    status: 'Em acompanhamento',
    ultimaSessao: '06/04/2025',
    faltas: 2,
  },
  {
    iniciais: 'LM',
    nome: 'Lucas Mendes',
    idade: '28 anos',
    tipo: 'Adulto',
    responsavel: '',
    status: 'Em acompanhamento',
    ultimaSessao: '05/04/2025',
    faltas: 1,
  },
  {
    iniciais: 'MC',
    nome: 'Maria Clara Souza',
    idade: '10 anos',
    tipo: 'Criança',
    responsavel: 'Juliana Souza',
    status: 'Em atenção',
    ultimaSessao: '29/03/2025',
    faltas: 3,
  },
  {
    iniciais: 'PH',
    nome: 'Pedro Henrique',
    idade: '22 anos',
    tipo: 'Adulto',
    responsavel: '',
    status: 'Em acompanhamento',
    ultimaSessao: '02/04/2025',
    faltas: 0,
  },
  {
    iniciais: 'JA',
    nome: 'Julia Alves',
    idade: '16 anos',
    tipo: 'Criança',
    responsavel: 'Carla Alves',
    status: 'Inativo',
    ultimaSessao: '15/02/2025',
    faltas: 5,
  },
];

// aqui ficam os itens do menu lateral do desktop
const menuItems = [
  ['calendar-outline', 'Agenda', '/(tabs)'],
  ['people-outline', 'Pacientes', '/pacientes'],
  ['business-outline', 'Salas', '/salas'],
  ['notifications-outline', 'Avisos', '/notificacoes'],
  ['person-outline', 'Perfil', '/perfil'],
];

export default function PacientesScreen() {
  // aqui eu pego a largura da tela pra saber se está no mobile ou desktop
  const { width } = useWindowDimensions();

  // se a tela for menor que 900, eu considero como mobile
  const isMobile = width < 900;

  return (
    <View style={styles.screen}>

      {/* sidebar aparece só no desktop */}
      {!isMobile && (
        <View style={styles.sidebar}>

          {/* logo da clínica */}
          <View style={styles.logoBox}>
            <Text style={styles.psi}>Ψ</Text>

            <View>
              <Text style={styles.logoText}>SEP</Text>
              <Text style={styles.logoSub}>Clínica de Psicologia</Text>
            </View>
          </View>

          {/* menu lateral */}
          {menuItems.map(([icon, label, path]) => (
            <TouchableOpacity
              key={label}
              style={[
                styles.menuItem,
                label === 'Pacientes' && styles.menuActive,
              ]}
              onPress={() => router.push(path as any)}
            >
              <Ionicons
                name={icon as any}
                size={22}
                color={label === 'Pacientes' ? '#0C706E' : '#5E6B78'}
              />

              <Text
                style={[
                  styles.menuText,
                  label === 'Pacientes' && styles.menuTextActive,
                ]}
              >
                {label}
              </Text>
            </TouchableOpacity>
          ))}

          {/* botão de sair */}
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

        {/* título da página */}
        <Text style={[styles.pageTitle, isMobile && styles.pageTitleMobile]}>
          Pacientes
        </Text>

        <Text style={[styles.pageSubtitle, isMobile && styles.pageSubtitleMobile]}>
          Gerencie e acompanhe os pacientes da clínica
        </Text>

        {/* campo de busca */}
        <View style={styles.searchLarge}>
          <TextInput
            placeholder="Buscar paciente..."
            style={styles.searchInput}
            placeholderTextColor="#94A3B8"
          />

          <Ionicons name="search-outline" size={22} color="#64748B" />
        </View>

          {/* botão novo paciente */}
          <TouchableOpacity
            style={styles.newButton}
            onPress={() => router.push('/novo-paciente')}
          >
            <Ionicons name="add" size={22} color="#FFFFFF" />
              <Text style={styles.newButtonText}>Novo Paciente</Text>
          </TouchableOpacity>

        {/* cards de estatísticas */}
        <View style={[styles.statsRow, isMobile && styles.statsRowMobile]}>
          <StatCard
            icon="people-outline"
            title="Total de Pacientes"
            value="100"
            sub="Todos os pacientes"
          />

          <StatCard
            icon="people-outline"
            title="Em Acompanhamento"
            value="82"
            sub="81% do total"
          />
        </View>

        {/* card da lista de pacientes */}
        <View style={styles.listCard}>

          {/* cabeçalho da lista */}
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Lista de Pacientes</Text>
          </View>

          {/* aqui eu percorro a lista de pacientes e mostro um por um */}
          {pacientes.map((paciente, index) => (
            <View
              key={index}
              style={[
                styles.patientRow,
                isMobile && styles.patientRowMobile,
              ]}
            >

              {/* avatar com as iniciais do paciente */}
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{paciente.iniciais}</Text>
              </View>

              {/* informações do paciente */}
              <View
                style={[
                  styles.patientInfo,
                  isMobile && styles.patientInfoMobile,
                ]}
              >
                <Text style={styles.patientName}>{paciente.nome}</Text>

                <Text style={styles.patientMeta}>
                  {paciente.idade} • {paciente.tipo}
                </Text>

                {/* responsável aparece só quando tiver preenchido */}
                {!!paciente.responsavel && (
                  <Text style={styles.patientMeta}>
                    Responsável: {paciente.responsavel}
                  </Text>
                )}

                <Text style={styles.patientMeta}>
                  Última sessão: {paciente.ultimaSessao}
                </Text>

                <Text style={styles.patientMeta}>
                  Faltas: {paciente.faltas}
                </Text>
              </View>

              {/* status do paciente */}
              <View
                style={[
                  styles.statusBadge,
                  paciente.status === 'Em atenção'
                    ? styles.warningBadge
                    : paciente.status === 'Inativo'
                    ? styles.inactiveBadge
                    : styles.activeBadge,
                  isMobile && styles.statusBadgeMobile,
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    paciente.status === 'Em atenção' && styles.statusWarningText,
                    paciente.status === 'Inativo' && styles.statusInactiveText,
                  ]}
                >
                  {paciente.status}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

// componente dos cards de estatísticas
function StatCard({ icon, title, value, sub }: any) {
  return (
    <View style={styles.statCard}>
      <View style={styles.statIconBox}>
        <Ionicons name={icon} size={28} color="#0C706E" />
      </View>

      <View style={styles.statTextBox}>
        <Text style={styles.statTitle}>{title}</Text>
        <Text style={styles.statValue}>{value}</Text>
        <Text style={styles.statSub}>{sub}</Text>
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
    width: 250,
    backgroundColor: '#FFFFFF',
    borderRightWidth: 1,
    borderRightColor: '#E5E7EB',
  },

  logoBox: {
    height: 115,
    backgroundColor: '#0C706E',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    gap: 12,
    borderBottomRightRadius: 10,
  },

  psi: {
    fontSize: 58,
    color: '#FFFFFF',
    fontWeight: '700',
  },

  logoText: {
    fontSize: 34,
    color: '#FFFFFF',
    fontWeight: '900',
  },

  logoSub: {
    fontSize: 13,
    color: '#FFFFFF',
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingVertical: 16,
    paddingHorizontal: 26,
    marginHorizontal: 12,
    borderRadius: 10,
    marginTop: 4,
  },

  menuActive: {
    backgroundColor: '#E8F4F1',
  },

  menuText: {
    fontSize: 17,
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

  // aqui eu ajustei o espaçamento do mobile pra não ficar tudo grudado no topo
  contentMobile: {
    paddingHorizontal: 16,
    paddingTop: 72,
  },

  pageTitle: {
    fontSize: 30,
    fontWeight: '900',
    color: '#111827',
    marginBottom: 10,
  },

  // no mobile eu deixei o título um pouco menor pra caber melhor
  pageTitleMobile: {
    fontSize: 28,
  },

  pageSubtitle: {
    fontSize: 17,
    color: '#64748B',
    marginBottom: 20,
  },

  pageSubtitleMobile: {
    fontSize: 15,
    lineHeight: 21,
    marginBottom: 18,
  },

  searchLarge: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#111827',
  },

  newButton: {
    backgroundColor: '#0C706E',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20,
  },

  newButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },

  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },

  // no mobile os cards ficam um embaixo do outro pra não apertar
  statsRowMobile: {
    flexDirection: 'column',
  },

  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  statIconBox: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E8F4F1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  statTextBox: {
    flex: 1,
  },

  statTitle: {
    fontSize: 13,
    color: '#334155',
    fontWeight: '700',
  },

  statValue: {
    fontSize: 26,
    fontWeight: '900',
    color: '#111827',
  },

  statSub: {
    fontSize: 12,
    color: '#64748B',
  },

  listCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 30,
  },

  listHeader: {
    minHeight: 56,
    backgroundColor: '#DDF2EC',
    paddingHorizontal: 18,
    paddingVertical: 16,
    justifyContent: 'center',
  },

  listTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0C706E',
  },

  patientRow: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  // no mobile a linha vira coluna pra ficar mais organizada
  patientRowMobile: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#E1F2EF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0C706E',
  },

  patientInfo: {
    flex: 1,
    minWidth: 180,
  },

  // no mobile as informações ocupam a largura inteira do card
  patientInfoMobile: {
    width: '100%',
    minWidth: 0,
  },

  patientName: {
    fontSize: 17,
    fontWeight: '900',
    color: '#111827',
    marginBottom: 2,
  },

  patientMeta: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
    lineHeight: 18,
  },

  statusBadge: {
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },

  // no mobile deixei o status alinhado no começo
  statusBadgeMobile: {
    alignSelf: 'flex-start',
    marginTop: 4,
  },

  statusText: {
    fontSize: 12,
    color: '#0F766E',
    fontWeight: '800',
  },

  statusWarningText: {
    color: '#92400E',
  },

  statusInactiveText: {
    color: '#991B1B',
  },

  activeBadge: {
    backgroundColor: '#DDF7EA',
  },

  warningBadge: {
    backgroundColor: '#FFF4C7',
  },

  inactiveBadge: {
    backgroundColor: '#FFE2E2',
  },
});