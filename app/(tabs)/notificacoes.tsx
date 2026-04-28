// arquivo app/(tabs)/notificacoes.tsx
// aqui eu organizei essa tela e expliquei tudo como eu pensei no desenvolvimento

import React from 'react';

// importando os componentes básicos do react native
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

// importando o gradiente pra manter o padrão visual bonito do app
import { LinearGradient } from 'expo-linear-gradient';

// importando os ícones
import { Ionicons } from '@expo/vector-icons';


// aqui eu simulei algumas notificações do sistema só pra testar a interface
const notificacoes = [
  {
    titulo: 'Consulta confirmada',
    descricao: 'A consulta de Ana Silva foi confirmada para 12/06/2026 às 14:00.',
    tipo: 'Confirmação',
    icone: 'calendar-outline',
    cor: '#0C706E',
    fundo: '#EAF6F1',
  },
  {
    titulo: 'Remarcação pendente',
    descricao: 'Lucas Mendes solicitou uma remarcação e aguarda aprovação.',
    tipo: 'Pendente',
    icone: 'time-outline',
    cor: '#D99A12',
    fundo: '#FFF5DD',
  },
  {
    titulo: 'Limite de cancelamentos',
    descricao: 'Maria Clara atingiu o limite de cancelamentos permitidos.',
    tipo: 'Atenção',
    icone: 'alert-circle-outline',
    cor: '#D94A4A',
    fundo: '#FDECEC',
  },
  {
    titulo: 'Falta registrada',
    descricao: 'Pedro Henrique teve uma falta registrada no atendimento de hoje.',
    tipo: 'Registro',
    icone: 'close-circle-outline',
    cor: '#D94A4A',
    fundo: '#FDECEC',
  },
];


// componente principal da tela
export default function NotificacoesScreen() {

  // aqui eu pego o tamanho da tela pra adaptar pro desktop
  const { width } = useWindowDimensions();
  const isDesktop = width >= 900;

  return (

    // fundo com gradiente pra deixar mais bonito
    <LinearGradient
      colors={['#F4FBF8', '#EAF6F1', '#F8FCFA']}
      style={styles.background}
    >

      {/* scroll pra permitir rolagem */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        {/* container principal */}
        <View style={[styles.wrapper, isDesktop && styles.wrapperDesktop]}>

          {/* header da tela */}
          <View style={styles.headerArea}>

            {/* título e subtítulo */}
            <View>
              <Text style={styles.titlePage}>Notificações</Text>
              <Text style={styles.subtitlePage}>
                Acompanhe os avisos e alertas do sistema
              </Text>
            </View>

            {/* badge com total de notificações */}
            <View style={styles.badgeTotal}>
              <Ionicons name="notifications-outline" size={20} color="#0C706E" />
              <Text style={styles.badgeText}>4</Text>
            </View>
          </View>


          {/* cards de resumo */}
          <View style={[styles.summaryGrid, isDesktop && styles.summaryGridDesktop]}>

            {/* total */}
            <View style={styles.summaryCard}>
              <View style={[styles.summaryIcon, { backgroundColor: '#EAF6F1' }]}>
                <Ionicons name="mail-outline" size={22} color="#0C706E" />
              </View>

              <View>
                <Text style={styles.summaryLabel}>Total</Text>
                <Text style={styles.summaryValue}>4</Text>
              </View>
            </View>

            {/* pendentes */}
            <View style={styles.summaryCard}>
              <View style={[styles.summaryIcon, { backgroundColor: '#FFF5DD' }]}>
                <Ionicons name="time-outline" size={22} color="#D99A12" />
              </View>

              <View>
                <Text style={styles.summaryLabel}>Pendentes</Text>
                <Text style={styles.summaryValue}>1</Text>
              </View>
            </View>

            {/* importantes */}
            <View style={styles.summaryCard}>
              <View style={[styles.summaryIcon, { backgroundColor: '#FDECEC' }]}>
                <Ionicons name="alert-circle-outline" size={22} color="#D94A4A" />
              </View>

              <View>
                <Text style={styles.summaryLabel}>Importantes</Text>
                <Text style={styles.summaryValue}>2</Text>
              </View>
            </View>

          </View>


          {/* box principal das notificações */}
          <View style={styles.noticeBox}>

            {/* header do box */}
            <View style={styles.noticeHeader}>
              <Text style={styles.noticeHeaderText}>Avisos do Sistema</Text>
            </View>

            {/* lista */}
            <View style={styles.noticeBody}>

              {notificacoes.map((item, index) => (

                // cada card de notificação
                <View key={index} style={styles.notificationCard}>

                  {/* ícone */}
                  <View style={[styles.notificationIcon, { backgroundColor: item.fundo }]}>
                    <Ionicons name={item.icone as any} size={24} color={item.cor} />
                  </View>

                  {/* conteúdo */}
                  <View style={styles.notificationInfo}>
                    <Text style={styles.notificationTitle}>{item.titulo}</Text>
                    <Text style={styles.notificationDescription}>{item.descricao}</Text>

                    {/* tipo */}
                    <View style={[styles.typeBadge, { backgroundColor: item.fundo }]}>
                      <Text style={[styles.typeText, { color: item.cor }]}>
                        {item.tipo}
                      </Text>
                    </View>
                  </View>

                </View>
              ))}

            </View>
          </View>

        </View>
      </ScrollView>
    </LinearGradient>
  );
}


// estilos
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingVertical: 26,
  },

  wrapper: {
    width: '100%',
  },

  wrapperDesktop: {
    maxWidth: 980,
    alignSelf: 'center',
  },

  headerArea: {
    width: '100%',
    marginBottom: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // 👇 AQUI FOI A ALTERAÇÃO QUE VOCÊ PEDIU
  titlePage: {
    fontSize: 26,
    fontWeight: '900',
    color: '#171717',
    marginBottom: 4,
    marginTop: 12, // aqui eu abaixei um pouco o "Notificações"
  },

  subtitlePage: {
    fontSize: 14,
    color: '#6F7D7A',
  },

  badgeTotal: {
    width: 54,
    height: 54,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCE5E2',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#A6BDB8',
    shadowOpacity: 0.16,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  badgeText: {
    position: 'absolute',
    top: 8,
    right: 10,
    fontSize: 11,
    fontWeight: '900',
    color: '#FFFFFF',
    backgroundColor: '#0C706E',
    paddingHorizontal: 5,
    borderRadius: 999,
  },

  summaryGrid: {
    gap: 12,
    marginBottom: 22,
  },

  summaryGridDesktop: {
    flexDirection: 'row',
  },

  summaryCard: {
    flex: 1,
    minHeight: 86,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8E6',
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  summaryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  summaryLabel: {
    fontSize: 13,
    color: '#6F7D7A',
    fontWeight: '700',
  },

  summaryValue: {
    fontSize: 24,
    color: '#171717',
    fontWeight: '900',
  },

  noticeBox: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8E6',
    borderRadius: 16,
    overflow: 'hidden',
  },

  noticeHeader: {
    backgroundColor: '#D8A39A',
    paddingHorizontal: 18,
    paddingVertical: 16,
  },

  noticeHeaderText: {
    fontSize: 17,
    fontWeight: '900',
    color: '#FFFFFF',
  },

  noticeBody: {
    padding: 14,
  },

  notificationCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8EFEC',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    flexDirection: 'row',
    gap: 12,
  },

  notificationIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  notificationInfo: {
    flex: 1,
  },

  notificationTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#171717',
    marginBottom: 4,
  },

  notificationDescription: {
    fontSize: 13,
    color: '#5F6F6C',
    lineHeight: 18,
    marginBottom: 8,
  },

  typeBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 6,
  },

  typeText: {
    fontSize: 11,
    fontWeight: '900',
  },
});