// arquivo app/(tabs)/notificacoes.tsx
// aqui foi organizado essa tela e explicado tudo como foi pensado no desenvolvimento

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

// biblioteca de ícones do Expo
// usado para exibir ícones visuais na interface da tela
import { Ionicons } from '@expo/vector-icons';

// controle de navegação entre telas
// usado para redirecionar o usuário para outras páginas
import { router } from 'expo-router';

// componente de fundo degradê
// usado para deixar o background mais moderno e suave
import { LinearGradient } from 'expo-linear-gradient';

// menu lateral do desktop, apenas no desktop, no mobile a navegação é diferente.
// lista de navegação principal da aplicação
const menuItems = [
  ['calendar-outline', 'Agenda', '/(tabs)'],
  ['people-outline', 'Pacientes', '/(tabs)/pacientes'],
  ['business-outline', 'Salas', '/(tabs)/salas'],
  ['notifications-outline', 'Notificacoes', '/(tabs)/notificacoes'],
  ['person-outline', 'Perfil', '/(tabs)/perfil'],
];

// simulação de algumas notificações do sistema só pra testar a interface.
const notificacoes = [
  {
    titulo: 'Consulta confirmada',
    descricao: 'A consulta de Ana Silva foi confirmada para 12/06/2026 às 14:00.',
    tipo: 'Confirmação',
    icone: 'calendar-outline',
    cor: '#087A73',
    fundo: '#EAF6F2',
  },
  {
    titulo: 'Remarcação pendente',
    descricao: 'Lucas Mendes solicitou uma remarcação e aguarda aprovação do administrador.',
    tipo: 'Pendente',
    icone: 'time-outline',
    cor: '#C47F00',
    fundo: '#FFF1D6',
  },
  {
    titulo: 'Limite de cancelamentos',
    descricao: 'Maria Clara atingiu o limite de cancelamentos permitidos.',
    tipo: 'Atenção',
    icone: 'alert-circle-outline',
    cor: '#E03131',
    fundo: '#FFE1E5',
  },
  {
    titulo: 'Falta registrada',
    descricao: 'Pedro Henrique teve uma falta registrada no atendimento de hoje.',
    tipo: 'Registro',
    icone: 'close-circle-outline',
    cor: '#E03131',
    fundo: '#FFE1E5',
  },
];

export default function NotificacoesScreen() {
  // pega largura da tela para aplicar responsividade
  const { width } = useWindowDimensions();

  // define se é mobile ou desktop baseado na largura da tela
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
        {/* sidebar aparece apenas no desktop */}
        {isDesktop && (
          // aqui é montado o menu lateral que só aparece em telas grandes
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
                    label === 'Avisos' && styles.menuActive,
                  ]}
                  onPress={() => router.push(path as any)}
                >
                  <Ionicons
                    name={icon as any}
                    size={20}
                    color={label === 'Avisos' ? '#0C706E' : '#70808A'}
                  />

                  <Text
                    style={[
                      styles.menuText,
                      label === 'Avisos' && styles.menuTextActive,
                    ]}
                  >
                    {label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* conteúdo principal */}
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* aqui é colocado elementos decorativos no fundo só pra estética */}
          <View style={styles.decorCircleOne} />
          <View style={styles.decorCircleTwo} />
          <View style={styles.decorCircleThree} />
          <View style={styles.decorDotOne} />
          <View style={styles.decorDotTwo} />
          <View style={styles.decorDotThree} />

          {/* topo da tela */}
          <View style={styles.headerArea}>
            <View>
              <Text style={styles.titlePage}>Notificações</Text>
              <Text style={styles.subtitlePage}>
                Acompanhe avisos, alertas e atualizações dos atendimentos.
              </Text>
            </View>
          </View>

          {/* cards de resumo */}
          <View style={[styles.summaryGrid, isDesktop && styles.summaryGridDesktop]}>
            {/* total */}
            <View style={styles.summaryCard}>
              <View style={styles.summaryIcon}>
                <Ionicons name="mail-outline" size={22} color="#087A73" />
              </View>

              <View>
                <Text style={styles.summaryValue}>4</Text>
                <Text style={styles.summaryLabel}>Total</Text>
              </View>
            </View>

            {/* pendentes */}
            <View style={styles.summaryCard}>
              <View style={styles.summaryIconYellow}>
                <Ionicons name="time-outline" size={22} color="#C47F00" />
              </View>

              <View>
                <Text style={styles.summaryValue}>1</Text>
                <Text style={styles.summaryLabel}>Pendentes</Text>
              </View>
            </View>

            {/* importantes */}
            <View style={styles.summaryCard}>
              <View style={styles.summaryIconRed}>
                <Ionicons name="alert-circle-outline" size={22} color="#E03131" />
              </View>

              <View>
                <Text style={styles.summaryValue}>2</Text>
                <Text style={styles.summaryLabel}>Importantes</Text>
              </View>
            </View>
          </View>

          {/* box principal das notificações */}
          <View style={styles.noticeBox}>
            <View style={styles.noticeHeader}>
              <View>
                <Text style={styles.noticeHeaderText}>Avisos do sistema</Text>
                <Text style={styles.noticeHeaderSubtext}>
                  Últimas notificações recebidas
                </Text>
              </View>
            </View>

            {/* aqui é renderizado a lista de notificações */}
            <View style={styles.noticeBody}>
              {notificacoes.map((item, index) => (
                // cada notificação vira um card
                <View key={index} style={styles.notificationCard}>
                  {/* ícone da notificação */}
                  <View style={[styles.notificationIcon, { backgroundColor: item.fundo }]}>
                    <Ionicons name={item.icone as any} size={23} color={item.cor} />
                  </View>

                  {/* conteúdo da notificação */}
                  <View style={styles.notificationInfo}>
                    <View style={styles.notificationTop}>
                      <Text style={styles.notificationTitle}>{item.titulo}</Text>

                      {/* tipo da notificação */}
                      <View style={[styles.typeBadge, { backgroundColor: item.fundo }]}>
                        <Text style={[styles.typeText, { color: item.cor }]}>
                          {item.tipo}
                        </Text>
                      </View>
                    </View>

                    {/* descrição */}
                    <Text style={styles.notificationDescription}>
                      {item.descricao}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
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

  // aqui o layout fica em linha,
  // com sidebar do lado e conteúdo do outro
  page: {
    flex: 1,
    flexDirection: 'row',
  },

  // sidebar exatamente igual ao da tela de index e 
  // a todas as telas que ficam na parte de estagiarios, bem padronizados.
  sidebar: {
    width: 245,
    backgroundColor: '#FFFFFF',
    borderRightWidth: 1,
    borderRightColor: '#E6ECEA',
  },

  // área da logo da clínica
  logoBox: {
    height: 118,
    backgroundColor: '#0C706E',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    gap: 10,
    borderBottomRightRadius: 18,
  },

  // símbolo psi da logo
  psi: {
    fontSize: 50,
    color: '#FFFFFF',
    fontWeight: '700',
  },

  // texto principal da logo
  logoText: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: '700',
  },

  // subtítulo da logo
  logoSub: {
    fontSize: 12,
    color: '#EAF6F2',
    marginTop: 2,
  },

  // subtítulo da logo
  menuArea: {
    paddingTop: 18,
  },

  // botão padrão do menu lateral
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

  // estilo do item ativo do menu
  menuActive: {
    backgroundColor: '#EAF6F2',
  },

  // texto padrão do menu
  menuText: {
    fontSize: 15,
    color: '#4B5F68',
    fontWeight: '400',
  },

  // texto do item ativo
  menuTextActive: {
    color: '#0C706E',
    fontWeight: '600',
  },

  // conteúdo principal da tela
  content: {
    flex: 1,
  },

  // define o espaçamento interno da tela
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 42,
    paddingBottom: 34,
  },

  // a primeira bolinha decorativa do fundo
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

  // a segunda bolinha decorativa do fundo
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

  // a terceira bolinha decorativa do fundo
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

  // uma bolinha pequena decorativa no topo
  decorDotOne: {
    position: 'absolute',
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EAF6F2',
    top: 52,
    left: '58%',
  },

  // uma bolinha pequena decorativa na esquerda
  decorDotTwo: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#CBE6DF',
    top: 300,
    left: 40,
  },

  // uma bolinha pequena decorativa na direita
  decorDotThree: {
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#E1F2EE',
    top: 120,
    right: 110,
  },

  // topo da tela com título e badge
  headerArea: {
    width: '100%',
    marginBottom: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // título principal da página
  titlePage: {
    fontSize: 30,
    fontWeight: '600',
    color: '#17262F',
    marginBottom: 4,
  },

  // subtítulo da página
  subtitlePage: {
    fontSize: 15,
    color: '#6B7C86',
    lineHeight: 21,
  },

  // organiza os cards de resumo no mobile
  summaryGrid: {
    gap: 14,
    marginBottom: 18,
  },

  // organiza os cards de resumo lado a lado no desktop
  summaryGridDesktop: {
    flexDirection: 'row',
  },

  // estiliza cada card de resumo
  summaryCard: {
    flex: 1,
    minHeight: 102,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCEBE7',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    shadowColor: '#6B8F86',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },

  // estiliza o ícone verde do card TOTAL
  summaryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#DCEFEB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // estiliza o ícone amarelo do card PENDENTES
  summaryIconYellow: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFF1D6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // estiliza o ícone vermelho do card IMPORTANTES
  summaryIconRed: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFE1E5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // texto pequeno dos cards de resumo
  summaryLabel: {
    fontSize: 13,
    color: '#61717B',
    marginTop: 2,
  },

  // número dos cards de resumo
  summaryValue: {
    fontSize: 24,
    color: '#17262F',
    fontWeight: '600',
  },

  // box principal onde ficam os avisos
  noticeBox: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCEBE7',
    borderRadius: 18,
    overflow: 'hidden',
    shadowColor: '#6B8F86',
    shadowOpacity: 0.07,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },

  // cabeçalho do box de avisos
  noticeHeader: {
    backgroundColor: '#EAF6F2',
    paddingHorizontal: 22,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#DCEBE7',
  },

  // título do cabeçalho dos avisos
  noticeHeaderText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#087A73',
  },

  // subtítulo do cabeçalho dos avisos
  noticeHeaderSubtext: {
    fontSize: 13,
    color: '#6B7C86',
    marginTop: 3,
  },

  // espaçamento interno na lista de notificações
  noticeBody: {
    padding: 14,
  },

  // cada card de notificação
  notificationCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEF2F1',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    flexDirection: 'row',
    gap: 12,
  },

  // círculo do ícone da notificação
  notificationIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // conteúdo da notificação ocupar o espaço disponível
  notificationInfo: {
    flex: 1,
  },

  // organiza o título e a etiqueta do tipo da notificação
  notificationTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    alignItems: 'flex-start',
  },

  // estiliza o título de cada notificação
  notificationTitle: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    color: '#17262F',
    marginBottom: 4,
  },

  // estiliza a descrição da notificação
  notificationDescription: {
    fontSize: 13,
    color: '#61717B',
    lineHeight: 18,
    marginTop: 2,
  },

  // estiliza a etiqueta pequena do tipo da notificação
  typeBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 999,
  },

  // estiliza o texto dentro da etiqueta
  typeText: {
    fontSize: 11,
    fontWeight: '500',
  },
});