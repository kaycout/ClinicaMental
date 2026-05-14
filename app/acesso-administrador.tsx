// arquivo app/acesso-administrador.tsx

// importação principal do React, pois é necessário para criar componentes React Native.
import React from 'react';

// componentes nativos do React são usados nesta tela
import {
  // permite rolagem vertical na tela
  ScrollView,
  // usado para criar estilos na tela
  StyleSheet,
  // componente de texto
  Text,
  // botão com clique e efeito ao toque
  TouchableOpacity,
  // componente base de estrutura e layout
  View,
  // hook que pega largura e altura da tela em tempo real
  // usado para responsividade entre mobile e desktop 
  useWindowDimensions,

} from 'react-native';

// importanto imagens de icones
import { Image } from 'react-native';

// importando navegação
import { router } from 'expo-router';

// componente de fundo degradê
// usado para deixar o background mais moderno e suave
import { LinearGradient } from 'expo-linear-gradient';

// tela principal do painel de administrador
export default function AdminDashboardScreen() {
  // pegando largura da tela pra responsividade
  const { width } = useWindowDimensions();

  // verifica se está em tela grande (desktop)
  const isDesktop = width >= 900;

  return (
      // Coloca um fundo com degradê suave pra dar um visual mais clean
    <LinearGradient
      colors={['#F7FCFA', '#EEF8F5', '#F9FCFB']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
      <View style={styles.page}>

        {/* sidebar lateral do administrador (aparece somente no desktop) */}
        {isDesktop && (
          <View style={styles.sidebar}>

            {/* área do logo da clínica */}
            <View style={styles.logoBox}>
              <Text style={styles.psi}>Ψ</Text>

              {/* textos do logo */}
              <View>
                <Text style={styles.logoText}>SEP</Text>
                <Text style={styles.logoSub}>
                  Clínica de Psicologia
                </Text>
              </View>
            </View>

            {/* área principal do menu lateral */}
            <View style={styles.menuArea}>

              {/* item do menu: administrador (ativo por padrão) */}
              <TouchableOpacity
                style={[
                  styles.menuItem,
                  styles.menuActive,
                ]}
              >
                {/* ícone do menu administrador */}
                <Image
                  source={require('../assets/images/administrador.png')}
                  style={styles.menuIcon}
                />

                {/* texto do item administrador */}
                <Text
                  style={[
                    styles.menuText,
                    styles.menuTextActive,
                  ]}
                >
                  Administrador
                </Text>
              </TouchableOpacity>

              {/* separador/label da seção do menu */}
              <Text style={styles.menuLabel}>
                GERENCIAMENTO
              </Text>

              {/* item do menu: agendamentos */}
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => router.push('/calendario-administrador')}
              >
                {/* ícone de agendamentos */}
                <Image
                  source={require('../assets/images/agendamento.png')}
                  style={styles.menuIcon}
                />

                {/* texto do item agendamentos */}
                <Text style={styles.menuText}>
                  Agendamentos
                </Text>
              </TouchableOpacity>

              {/* item do menu: pacientes */}
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => router.push('/pacientes-admin')}
              >
                {/* ícone de pacientes */}
                <Image
                  source={require('../assets/images/paciente.png')}
                  style={styles.menuIcon}
                />

                {/* texto do item pacientes */}
                <Text style={styles.menuText}>
                  Pacientes
                </Text>
              </TouchableOpacity>

              {/* item do menu: salas */}
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => router.push('/salas-admin')}
              >
                {/* ícone de salas */}
                <Image
                  source={require('../assets/images/salas.png')}
                  style={styles.menuIcon}
                />

                {/* texto do item salas */}
                <Text style={styles.menuText}>
                  Salas
                </Text>
              </TouchableOpacity>

              {/* item do menu: cancelamentos */}
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => router.push('/cancelamentos')}
              >
                {/* ícone de cancelamentos */}
                <Image
                  source={require('../assets/images/cancelamento.png')}
                  style={styles.menuIcon}
                />

                {/* texto do item cancelamentos */}
                <Text style={styles.menuText}>
                  Cancelamentos
                </Text>
              </TouchableOpacity>

              {/* item do menu: cadastro de estagiário */}
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => router.push('/cadastro')}
              >
                {/* ícone de estagiário */}
                <Image
                  source={require('../assets/images/estagiario.png')}
                  style={styles.menuIcon}
                />

                {/* texto do item cadastrar estagiário */}
                <Text style={styles.menuText}>
                  Cadastrar Estagiário
                </Text>
              </TouchableOpacity>

              {/* item do menu: perfil */}
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => router.push('/perfil-administrador')}
              >
                {/* ícone de perfil */}
                <Image
                  source={require('../assets/images/perfil.png')}
                  style={styles.menuIcon}
                />

                {/* texto do item perfil */}
                <Text style={styles.menuText}>
                  Perfil
                </Text>
              </TouchableOpacity>

            </View>
          </View>
        )}

        {/* conteúdo principal da tela, responsável por envolver todo o layout visível */}
        <ScrollView contentContainerStyle={styles.scrollContent}>

          {/* círculos decorativos de fundo (efeito visual apenas, não interativos) */}
          <View style={styles.decorCircleOne} />
          <View style={styles.decorCircleTwo} />
          <View style={styles.decorCircleThree} />

          {/* pontos decorativos de fundo (detalhes visuais para composição do layout) */}
          <View style={styles.decorDotOne} />
          <View style={styles.decorDotTwo} />
          <View style={styles.decorDotThree} />
          <View style={styles.decorDotFour} />
          <View style={styles.decorDotFive} />

          {/* cabeçalho principal da tela (área superior com título e informações do usuário) */}
          <View style={styles.header}>
            
            {/* bloco de título e subtítulo da página */}
            <View>
              <Text style={styles.title}>Painel do Administrador</Text>

              {/* descrição do propósito da tela */}
              <Text style={styles.subtitle}>
                Gerencie e acompanhe as informações principais da clínica.
              </Text>
            </View>

            {/* área de informações do usuário (exibida somente no desktop) */}
            {isDesktop && (
              <View style={styles.userArea}>

                {/* caixa de data atual com dia e dia da semana */}
                <View style={styles.dateBox}>
                  <Text style={styles.dateText}>09 de abril de 2025</Text>
                  <Text style={styles.dateSubtext}>Quarta-feira</Text>
                </View>

                {/* avatar do usuário (iniciais do administrador) */}
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>AD</Text>
                </View>

                {/* informações textuais do usuário logado */}
                <View>
                  <Text style={styles.userName}>Administrador</Text>
                  <Text style={styles.userRole}>Admin</Text>
                </View>
              </View>
            )}
          </View>

          {/* seção de cards de acesso rápido (atalhos para ações principais do sistema) */}
          <View style={styles.sectionCard}>

            {/* título da seção de atalhos */}
            <Text style={styles.sectionTitle}>Acesso rápido</Text>

            {/* subtítulo explicando a função da seção */}
            <Text style={styles.sectionSubtitle}>
              Ações mais utilizadas no sistema
            </Text>

            {/* grid que organiza os cards de acesso rápido */}
            <View style={[styles.quickGrid, isDesktop && styles.quickGridDesktop]}>

              {/* card de atalho para criação de novo agendamento */}
              <TouchableOpacity
                style={styles.quickCard}
                onPress={() => router.push('/novo-agendamento')}
              >
                {/* ícone visual do atalho */}
                <View style={styles.quickIcon}>
                  <Text style={styles.quickIconText}>▣</Text>
                </View>

                {/* textos descritivos do atalho */}
                <View>
                  <Text style={styles.quickTitle}>Novo agendamento</Text>
                  <Text style={styles.quickText}>Agendar consulta</Text>
                </View>
              </TouchableOpacity>

              {/* card de atalho para realizar reagendamento de consulta */}
              <TouchableOpacity
                style={styles.quickCard}
                onPress={() => router.push('/reagendamento-administrador')}
              >
                {/* ícone visual do reagendamento */}
                <View style={styles.quickIcon}>
                  <Text style={styles.quickIconText}>＋</Text>
                </View>

                {/* textos descritivos do reagendamento */}
                <View>
                  <Text style={styles.quickTitle}>Realizar Reagendamento</Text>
                  <Text style={styles.quickText}>Reagendar consulta</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* card de visão geral (resumo geral dos principais indicadores do sistema) */}
          <View style={styles.sectionCard}>

            {/* título da seção de visão geral */}
            <Text style={styles.sectionTitle}>Visão geral</Text>

            {/* subtítulo explicando o conteúdo dos indicadores */}
            <Text style={styles.sectionSubtitle}>
              Resumo das informações principais
            </Text>

            {/* grid que organiza os cards de estatísticas */}
            <View style={[styles.statsGrid, isDesktop && styles.statsGridDesktop]}>

              {/* card de estatística: agendamentos */}
              <View style={styles.statCard}>

                {/* ícone do indicador */}
                <View style={styles.statIcon}>
                  <Text style={styles.statIconText}>▣</Text>
                </View>

                {/* informações numéricas do indicador */}
                <View>
                  <Text style={styles.statNumber}>48</Text>
                  <Text style={styles.statLabel}>Agendamentos</Text>

                  {/* variação percentual do indicador */}
                  <Text style={styles.statPositive}>↑ 12% em relação a ontem</Text>
                </View>

              </View>

              {/* card de estatística: pacientes */}
              <View style={styles.statCard}>
                <View style={styles.statIcon}>
                  <Text style={styles.statIconText}>☷</Text>
                </View>

                <View>
                  <Text style={styles.statNumber}>156</Text>
                  <Text style={styles.statLabel}>Pacientes</Text>
                  <Text style={styles.statPositive}>↑ 8% em relação ao mês passado</Text>
                </View>
              </View>

              {/* card de estatística: profissionais */}
              <View style={styles.statCard}>
                <View style={styles.statIcon}>
                  <Text style={styles.statIconText}>♙</Text>
                </View>

                <View>
                  <Text style={styles.statNumber}>12</Text>
                  <Text style={styles.statLabel}>Profissionais</Text>

                  {/* indicador neutro de estabilidade */}
                  <Text style={styles.statNeutral}>● Sem alterações</Text>
                </View>
              </View>

              {/* card de estatística: salas */}
              <View style={styles.statCard}>
                <View style={styles.statIcon}>
                  <Text style={styles.statIconText}>▥</Text>
                </View>

                <View>
                  <Text style={styles.statNumber}>8</Text>
                  <Text style={styles.statLabel}>Salas</Text>
                  <Text style={styles.statPositive}>● 2 salas disponíveis</Text>
                </View>
              </View>

              {/* card de estatística: cancelamentos */}
              <View style={styles.statCard}>

                {/* ícone com destaque negativo (cancelamentos) */}
                <View style={styles.statIconRed}>
                  <Text style={styles.statIconRedText}>×</Text>
                </View>

                <View>
                  <Text style={styles.statNumber}>5</Text>
                  <Text style={styles.statLabel}>Cancelamentos</Text>

                  {/* variação comparativa do indicador */}
                  <Text style={styles.statPositive}>↓ 15% em relação a ontem</Text>
                </View>
              </View>
            </View>
          </View>

          {/* card de atividades recentes (lista de ações mais recentes realizadas no sistema) */}
          <View style={styles.sectionCard}>

            {/* cabeçalho do card de atividades (título + ação de navegação) */}
            <View style={styles.sectionHeader}>

              {/* bloco de textos do cabeçalho */}
              <View>

                {/* título principal da seção */}
                <Text style={styles.sectionTitle}>Atividades recentes</Text>

                {/* subtítulo explicando o contexto da lista */}
                <Text style={styles.sectionSubtitle}>
                  Últimas ações realizadas no sistema
                </Text>

              </View>

              {/* botão de ação para visualizar todas as atividades */}
              <TouchableOpacity style={styles.smallButton}>
                <Text style={styles.smallButtonText}>Ver todas</Text>
              </TouchableOpacity>

            </View>

            {/* lista que agrupa os itens de atividades recentes */}
            <View style={styles.activityList}>

              {/* item de atividade: novo agendamento */}
              <View style={styles.activityItem}>

                {/* ícone representando o tipo da atividade */}
                <View style={styles.activityIcon}>
                  <Text style={styles.activityIconText}>▣</Text>
                </View>

                {/* informações principais da atividade */}
                <View style={styles.activityInfo}>

                  {/* descrição principal da ação */}
                  <Text style={styles.activityTitle}>Novo agendamento criado</Text>

                  {/* detalhe complementar (usuário e horário) */}
                  <Text style={styles.activityText}>Ana Silva - 08:00</Text>

                </View>

                {/* tempo relativo da atividade */}
                <Text style={styles.activityTime}>Há 2 minutos</Text>

              </View>

              {/* item de atividade: cadastro de paciente */}
              <View style={styles.activityItem}>

                <View style={styles.activityIcon}>
                  <Text style={styles.activityIconText}>♙</Text>
                </View>

                <View style={styles.activityInfo}>
                  <Text style={styles.activityTitle}>Paciente cadastrado</Text>
                  <Text style={styles.activityText}>Lucas Mendes</Text>
                </View>

                <Text style={styles.activityTime}>Há 15 minutos</Text>

              </View>

              {/* item de atividade: cancelamento de agendamento (ação negativa) */}
              <View style={styles.activityItem}>

                {/* ícone com destaque vermelho para indicar cancelamento */}
                <View style={styles.activityIconRed}>
                  <Text style={styles.activityIconRedText}>×</Text>
                </View>

                <View style={styles.activityInfo}>
                  <Text style={styles.activityTitle}>Agendamento cancelado</Text>
                  <Text style={styles.activityText}>João Pedro - 14:00</Text>
                </View>

                <Text style={styles.activityTime}>Há 1 hora</Text>

              </View>

              {/* item de atividade: atualização de profissional */}
              <View style={styles.activityItem}>

                {/* ícone com destaque laranja para atualização */}
                <View style={styles.activityIconOrange}>
                  <Text style={styles.activityIconOrangeText}>♙</Text>
                </View>

                <View style={styles.activityInfo}>
                  <Text style={styles.activityTitle}>Profissional atualizado</Text>
                  <Text style={styles.activityText}>Dra. Mariana Silva</Text>
                </View>

                <Text style={styles.activityTime}>Há 2 horas</Text>

              </View>

              {/* último item da lista de atividades (pode ter estilo diferenciado) */}
              <View style={styles.activityItemLast}>

                {/* ícone com destaque roxo para cadastro de sala */}
                <View style={styles.activityIconPurple}>
                  <Text style={styles.activityIconPurpleText}>▥</Text>
                </View>

                <View style={styles.activityInfo}>
                  <Text style={styles.activityTitle}>Sala cadastrada</Text>
                  <Text style={styles.activityText}>Sala 8 - Infantil</Text>
                </View>

                <Text style={styles.activityTime}>Há 3 horas</Text>
              </View>
            </View>
          </View>

          {/* botão sair no mobile */}
          {!isDesktop && (
            <TouchableOpacity
              style={styles.mobileLogout}
              onPress={() => router.replace('/login')}
            >
              <Text style={styles.mobileLogoutText}>Sair do painel</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

// criação centralizada dos estilos da tela
// aqui ficam todas as estilizações da interface organizadas por seção
const styles = StyleSheet.create({
  
  // fundo principal da tela
  // ocupa toda a altura disponível
  background: {
    flex: 1,
  },

  // estrutura geral da página
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

// logo da clinica
logoBox: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 12,
  paddingHorizontal: 24,
  marginBottom: 36,
},

// símbolo psi
psi: {
  fontSize: 38,
  color: '#0C706E',
  fontWeight: '700',
},

// texto sep
logoText: {
  fontSize: 24,
  color: '#17262F',
  fontWeight: '700',
},

// subtítulo
logoSub: {
  fontSize: 12,
  color: '#70808A',
  marginTop: 2,
},

// área menu
menuArea: {
  paddingHorizontal: 16,
},

// label menu
menuLabel: {
  fontSize: 11,
  color: '#8A98A3',
  fontWeight: '600',
  marginTop: 14,
  marginBottom: 10,
  marginLeft: 12,
  letterSpacing: 1,
},

// item menu
  menuItem: {
  height: 50,
  borderRadius: 14,
  paddingHorizontal: 14,
  flexDirection: 'row',
  alignItems: 'center',
  gap: 12,
  marginBottom: 6,
},

// item ativo
menuActive: {
  backgroundColor: '#E9F7F5',
},

// ícone png
menuIcon: {
  width: 20,
  height: 20,
  resizeMode: 'contain',
  tintColor: '#0C706E',
},

// texto menu
menuText: {
  fontSize: 15,
  color: '#70808A',
  fontWeight: '500',
},

// texto ativo
menuTextActive: {
  color: '#0C706E',
  fontWeight: '600',
},

  // área da logo
  logoArea: {
    backgroundColor: '#087A73',
    minHeight: 150,
    borderBottomRightRadius: 26,
    paddingHorizontal: 28,
    paddingTop: 38,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  // símbolo da logo
  logoSymbol: {
    fontSize: 42,
    color: '#FFFFFF',
    fontWeight: '600',
  },

  // subtítulo da logo
  logoSubtitle: {
    fontSize: 13,
    color: '#FFFFFF',
    marginTop: 2,
  },

  // item do menu lateral
  sidebarItem: {
    height: 52,
    borderRadius: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 4,
  },

  // item ativo do menu
  sidebarItemActive: {
    backgroundColor: '#EAF6F2',
  },

  // ícone do menu
  sidebarIcon: {
  width: 22,
  height: 22,
  resizeMode: 'contain',
},

  // texto do menu
  sidebarText: {
    fontSize: 15,
    color: '#60768A',
    fontWeight: '400',
  },

  // texto ativo do menu
  sidebarTextActive: {
    color: '#087A73',
    fontWeight: '500',
  },

  // conteúdo com espaçamento
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 28,
    paddingTop: 44,
  },

  // círculo decorativo grande da esquerda
  decorCircleOne: {
    position: 'absolute',
    width: 310,
    height: 310,
    borderRadius: 155,
    backgroundColor: '#DCEFEB',
    opacity: 0.55,
    left: -110,
    top: 135,
  },

  // círculo decorativo grande da direita
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

  // círculo decorativo mais baixo
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

  // bolinha decorativa
  decorDotOne: {
    position: 'absolute',
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EAF6F2',
    top: 52,
    left: '58%',
  },

  // bolinha decorativa
  decorDotTwo: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#CBE6DF',
    top: 300,
    left: 40,
  },

  // bolinha decorativa
  decorDotThree: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#D4ECE6',
    top: 350,
    left: 72,
  },

  // bolinha decorativa
  decorDotFour: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#CBE6DF',
    top: 390,
    left: 54,
  },

  // bolinha decorativa
  decorDotFive: {
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#E1F2EE',
    top: 120,
    right: 110,
  },

  // cabeçalho da tela
  header: {
    marginBottom: 34,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // título
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: '#17262F',
    marginBottom: 6,
  },

  // subtítulo
  subtitle: {
    fontSize: 15,
    color: '#6B7C86',
    fontWeight: '400',
  },

  // área do usuário no topo
  userArea: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  // caixa da data
  dateBox: {
    width: 210,
    height: 52,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DCE5E4',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // texto da data
  dateText: {
    fontSize: 13,
    color: '#17262F',
    fontWeight: '500',
  },

  // subtítulo da data
  dateSubtext: {
    fontSize: 12,
    color: '#7E8D9B',
    marginTop: 2,
  },

  // bolinha do usuário
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#DCEFEB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // texto da bolinha do usuário
  avatarText: {
    color: '#087A73',
    fontWeight: '500',
  },

  // nome do usuário
  userName: {
    fontSize: 14,
    color: '#17262F',
    fontWeight: '500',
  },

  // cargo do usuário
  userRole: {
    fontSize: 12,
    color: '#7E8D9B',
    marginTop: 2,
  },

  // card de seção
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 22,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#DCEBE7',
    shadowColor: '#6B8F86',
    shadowOpacity: 0.07,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },

  // título da seção
  sectionTitle: {
    fontSize: 18,
    color: '#087A73',
    fontWeight: '600',
    marginBottom: 4,
  },

  // subtítulo da seção
  sectionSubtitle: {
    fontSize: 13,
    color: '#6B7C86',
    marginBottom: 18,
    fontWeight: '400',
  },

  // cabeçalho dentro de seção
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  // grid dos cards rápidos
  quickGrid: {
    gap: 14,
  },

  // grid dos cards rápidos no desktop
  quickGridDesktop: {
    flexDirection: 'row',
  },

  // card rápido
  quickCard: {
    flex: 1,
    minHeight: 92,
    borderRadius: 14,
    backgroundColor: '#EDF7F4',
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },

  // variação azul
  quickCardBlue: {
    backgroundColor: '#EEF6FC',
  },

  // ícone do card rápido
  quickIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#DCEFEB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // ícone azul
  quickIconBlue: {
    backgroundColor: '#DDEFFC',
  },

  // texto do ícone
  quickIconText: {
    fontSize: 24,
    color: '#087A73',
  },

  // texto do ícone azul
  quickIconTextBlue: {
    fontSize: 24,
    color: '#1C7ED6',
  },

  // título do card rápido
  quickTitle: {
    fontSize: 14,
    color: '#087A73',
    fontWeight: '600',
    marginBottom: 4,
  },

  // título azul
  quickTitleBlue: {
    color: '#1C7ED6',
  },

  // texto do card rápido
  quickText: {
    fontSize: 13,
    color: '#61717B',
    fontWeight: '400',
  },

  // grid dos status
  statsGrid: {
    gap: 14,
  },

  // grid dos status no desktop
  statsGridDesktop: {
    flexDirection: 'row',
  },

  // card de status
  statCard: {
    flex: 1,
    minHeight: 116,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCEBE7',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },

  // ícone do status
  statIcon: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#DCEFEB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // texto do ícone
  statIconText: {
    fontSize: 24,
    color: '#087A73',
  },

  // ícone vermelho
  statIconRed: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#FFE1E5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // texto do ícone vermelho
  statIconRedText: {
    fontSize: 28,
    color: '#E03131',
  },

  // número do status
  statNumber: {
    fontSize: 24,
    color: '#17262F',
    fontWeight: '600',
  },

  // legenda do status
  statLabel: {
    fontSize: 13,
    color: '#61717B',
    marginTop: 2,
    fontWeight: '400',
  },

  // texto positivo
  statPositive: {
    fontSize: 11,
    color: '#12B886',
    marginTop: 12,
    fontWeight: '400',
  },

  // texto neutro
  statNeutral: {
    fontSize: 11,
    color: '#9AA6AC',
    marginTop: 12,
    fontWeight: '400',
  },

  // botão pequeno
  smallButton: {
    height: 38,
    paddingHorizontal: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DCEBE7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // texto do botão pequeno
  smallButtonText: {
    color: '#087A73',
    fontSize: 13,
    fontWeight: '500',
  },

  // lista de atividades
  activityList: {
    marginTop: 4,
  },

  // item da lista
  activityItem: {
    minHeight: 62,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF2F1',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  // último item da lista
  activityItemLast: {
    minHeight: 62,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  // ícone da atividade
  activityIcon: {
    width: 38,
    height: 38,
    borderRadius: 9,
    backgroundColor: '#E6F5F1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // texto do ícone da atividade
  activityIconText: {
    color: '#087A73',
    fontSize: 18,
  },

  // ícone vermelho
  activityIconRed: {
    width: 38,
    height: 38,
    borderRadius: 9,
    backgroundColor: '#FFE1E5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // texto vermelho
  activityIconRedText: {
    color: '#E03131',
    fontSize: 22,
  },

  // ícone laranja
  activityIconOrange: {
    width: 38,
    height: 38,
    borderRadius: 9,
    backgroundColor: '#FFF1D6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // texto laranja
  activityIconOrangeText: {
    color: '#F08C00',
    fontSize: 18,
  },

  // ícone roxo
  activityIconPurple: {
    width: 38,
    height: 38,
    borderRadius: 9,
    backgroundColor: '#F1E4FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // texto roxo
  activityIconPurpleText: {
    color: '#845EF7',
    fontSize: 18,
  },

  // informações da atividade
  activityInfo: {
    flex: 1,
  },

  // título da atividade
  activityTitle: {
    fontSize: 14,
    color: '#17262F',
    fontWeight: '500',
  },

  // texto da atividade
  activityText: {
    fontSize: 13,
    color: '#6B7C86',
    marginTop: 2,
    fontWeight: '400',
  },

  // horário da atividade
  activityTime: {
    fontSize: 12,
    color: '#7E8D9B',
    fontWeight: '400',
  },

  // botão sair do mobile
  mobileLogout: {
    height: 54,
    borderRadius: 16,
    backgroundColor: '#087A73',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 16,
  },

  // texto do botão sair do mobile
  mobileLogoutText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '500',
  },
});