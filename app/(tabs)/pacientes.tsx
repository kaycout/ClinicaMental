// arquivo app/(tabs)/pacientes.tsx
// aqui eu organizei essa tela de pacientes e deixei os comentários explicando minha parte do código
import { LinearGradient } from 'expo-linear-gradient';
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
  ['people-outline', 'Pacientes', '/(tabs)/pacientes'],
  ['business-outline', 'Salas', '/(tabs)/salas'],
  ['notifications-outline', 'Avisos', '/(tabs)/notificacoes'],
  ['person-outline', 'Perfil', '/(tabs)/perfil'],
];

export default function PacientesScreen() {
  // aqui eu pego a largura da tela pra saber se está no mobile ou desktop
  const { width } = useWindowDimensions();

  // se a tela for menor que 900, eu considero como mobile
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
            <View style={styles.menuArea}>
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
                    size={20}
                    color={label === 'Pacientes' ? '#0C706E' : '#70808A'}
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
            </View>

            {/* botão de sair */}
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

          {/* título da página */}
          <View style={[styles.topRow, isMobile && styles.topRowMobile]}>
            <View style={styles.titleBox}>
              <Text style={[styles.pageTitle, isMobile && styles.pageTitleMobile]}>
                Pacientes
              </Text>

              <Text style={[styles.pageSubtitle, isMobile && styles.pageSubtitleMobile]}>
                Acompanhe somente os pacientes vinculados aos seus atendimentos.
              </Text>
            </View>

            {!isMobile && (
              <View style={styles.userBox}>
                <View style={styles.avatarUser}>
                  <Text style={styles.avatarUserText}>JS</Text>
                </View>

                <View>
                  <Text style={styles.userName}>João Silva</Text>
                  <Text style={styles.userRole}>Estagiário</Text>
                </View>
              </View>
            )}
          </View>

          <View style={styles.permissionCard}>
            <View style={styles.permissionIcon}>
              <Ionicons name="shield-checkmark-outline" size={20} color="#0C706E" />
            </View>

            <View style={styles.permissionTextBox}>
              <Text style={styles.permissionTitle}>Acesso limitado</Text>
              <Text style={styles.permissionDescription}>
                Você pode consultar dados básicos e acompanhar o histórico permitido. Cadastros, edições e exclusões ficam disponíveis apenas para a administração.
              </Text>
            </View>
          </View>

          {/* campo de busca */}
          <View style={styles.searchLarge}>
            <Ionicons name="search-outline" size={20} color="#64748B" />

            <TextInput
              placeholder="Buscar entre meus pacientes..."
              style={styles.searchInput}
              placeholderTextColor="#94A3B8"
            />
          </View>

          {/* cards de estatísticas */}
          <View style={[styles.statsRow, isMobile && styles.statsRowMobile]}>
            <StatCard
              icon="people-outline"
              title="Vinculados"
              value="5"
              sub="Pacientes do estagiário"
            />

            <StatCard
              icon="heart-outline"
              title="Em acompanhamento"
              value="3"
              sub="Ativos no momento"
            />

            <StatCard
              icon="alert-circle-outline"
              title="Em atenção"
              value="1"
              sub="Precisam de cuidado"
            />
          </View>

          {/* card da lista de pacientes */}
          <View style={styles.listCard}>

            {/* cabeçalho da lista */}
            <View style={[styles.listHeader, isMobile && styles.listHeaderMobile]}>
              <View>
                <Text style={styles.listTitle}>Pacientes vinculados</Text>
                <Text style={styles.listSubtitle}>Visualização do estagiário</Text>
              </View>

              <View style={styles.listBadge}>
                <Ionicons name="lock-closed-outline" size={14} color="#0C706E" />
                <Text style={styles.listBadgeText}>Somente leitura</Text>
              </View>
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

                  <View style={styles.metaRow}>
                    <View style={styles.metaPill}>
                      <Ionicons name="calendar-outline" size={13} color="#64748B" />
                      <Text style={styles.metaPillText}>
                        Última sessão: {paciente.ultimaSessao}
                      </Text>
                    </View>

                    <View style={styles.metaPill}>
                      <Ionicons name="alert-circle-outline" size={13} color="#64748B" />
                      <Text style={styles.metaPillText}>
                        Faltas: {paciente.faltas}
                      </Text>
                    </View>
                  </View>
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

                <TouchableOpacity
                  style={[styles.detailsButton, isMobile && styles.detailsButtonMobile]}
                  onPress={() => router.push('/paciente-detalhe')}
                >
                  <Ionicons name="eye-outline" size={16} color="#0C706E" />
                  <Text style={styles.detailsButtonText}>Ver detalhes</Text>
                </TouchableOpacity>
              </View>
            ))}

            <View style={styles.footerInfo}>
              <Text style={styles.footerInfoText}>
                O estagiário não pode cadastrar, editar ou excluir pacientes.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

// componente dos cards de estatísticas
function StatCard({ icon, title, value, sub }: any) {
  return (
    <View style={styles.statCard}>
      <View style={styles.statIconBox}>
        <Ionicons name={icon} size={21} color="#0C706E" />
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

  // aqui eu ajustei o espaçamento do mobile pra não ficar tudo grudado no topo
  contentMobile: {
    paddingHorizontal: 16,
    paddingTop: 48,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 18,
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

  // no mobile eu deixei o título um pouco menor pra caber melhor
  pageTitleMobile: {
    fontSize: 28,
  },

  pageSubtitle: {
    fontSize: 15,
    color: '#6B7C83',
    lineHeight: 21,
  },

  pageSubtitleMobile: {
    fontSize: 14,
    lineHeight: 20,
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

  permissionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DDE8E5',
    padding: 14,
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },

  permissionIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#EAF6F2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  permissionTextBox: {
    flex: 1,
  },

  permissionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0C706E',
    marginBottom: 3,
  },

  permissionDescription: {
    fontSize: 13,
    color: '#6B7C83',
    lineHeight: 18,
  },

  searchLarge: {
    height: 48,
    borderWidth: 1,
    borderColor: '#DDE8E5',
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    marginBottom: 16,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#152322',
  },

  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 18,
  },

  // no mobile os cards ficam um embaixo do outro pra não apertar
  statsRowMobile: {
    flexDirection: 'column',
  },

  statCard: {
    flex: 1,
    minHeight: 76,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#E0E9E6',
  },

  statIconBox: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EAF6F2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  statTextBox: {
    flex: 1,
  },

  statTitle: {
    fontSize: 12,
    color: '#6B7C83',
    fontWeight: '400',
  },

  statValue: {
    fontSize: 22,
    fontWeight: '600',
    color: '#152322',
    marginTop: 1,
  },

  statSub: {
    fontSize: 12,
    color: '#6B7C83',
    marginTop: 2,
  },

  listCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E0E9E6',
    marginBottom: 30,
  },

  listHeader: {
    minHeight: 70,
    backgroundColor: '#EAF6F2',
    paddingHorizontal: 18,
    paddingVertical: 14,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },

  listHeaderMobile: {
    alignItems: 'flex-start',
    flexDirection: 'column',
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

  listBadge: {
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

  listBadgeText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#0C706E',
  },

  patientRow: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEF2F1',
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  // no mobile a linha vira coluna pra ficar mais organizada
  patientRowMobile: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#E1F2EF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    fontSize: 16,
    fontWeight: '600',
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
    fontSize: 16,
    fontWeight: '600',
    color: '#152322',
    marginBottom: 2,
  },

  patientMeta: {
    fontSize: 12,
    color: '#5B6D75',
    marginTop: 2,
    lineHeight: 18,
  },

  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 9,
  },

  metaPill: {
    minHeight: 30,
    borderRadius: 15,
    backgroundColor: '#F8FCFA',
    borderWidth: 1,
    borderColor: '#E0E9E6',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  metaPillText: {
    fontSize: 12,
    color: '#64748B',
  },

  statusBadge: {
    alignSelf: 'center',
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 18,
  },

  // no mobile deixei o status alinhado no começo
  statusBadgeMobile: {
    alignSelf: 'flex-start',
    marginTop: 2,
  },

  statusText: {
    fontSize: 12,
    color: '#0F766E',
    fontWeight: '500',
  },

  statusWarningText: {
    color: '#92400E',
  },

  statusInactiveText: {
    color: '#991B1B',
  },

  activeBadge: {
    backgroundColor: '#E3F7EE',
  },

  warningBadge: {
    backgroundColor: '#FFF3CC',
  },

  inactiveBadge: {
    backgroundColor: '#FFE5E5',
  },

  detailsButton: {
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

  detailsButtonMobile: {
    width: '100%',
    justifyContent: 'center',
    marginTop: 4,
  },

  detailsButtonText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#0C706E',
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
});