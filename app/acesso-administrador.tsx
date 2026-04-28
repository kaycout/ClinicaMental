// arquivo app/acesso-administrador.tsx
// aqui eu organizei essa tela e deixei os comentários explicando minha parte do código
import React from 'react';
// importando componentes básicos de layout
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
// importando gradiente de fundo
import { LinearGradient } from 'expo-linear-gradient';
// importando navegação
import { router } from 'expo-router';

// tela principal do painel administrativo
export default function AdminDashboardScreen() {

  // pegando largura da tela pra responsividade
  const { width } = useWindowDimensions();

  // verifico se está em tela grande (desktop)
  const isDesktop = width >= 900;

  return (
    // fundo com gradiente
    <LinearGradient
      colors={['#DCEEDF', '#D9EBE6', '#DCEEDF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >

      {/* scroll da tela */}
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* container principal */}
        <View style={[styles.wrapper, isDesktop && styles.wrapperDesktop]}>

          {/* etiqueta no topo indicando que é área administrativa */}
          <View style={styles.topPill}>
            <Text style={styles.topPillText}>Acesso Administrativo</Text>
          </View>

          {/* card principal do painel */}
          <View style={[styles.card, isDesktop && styles.cardDesktop]}>

            {/* título */}
            <Text style={styles.title}>Painel Administrativo</Text>

            {/* subtítulo */}
            <Text style={styles.subtitle}>
              Área de controle total da clínica
            </Text>

            {/* grid de opções */}
            <View style={styles.grid}>

              {/* botão calendário geral */}
              <TouchableOpacity
                style={styles.menuCard}
                onPress={() => router.push('/calendario-administrador')}
              >
                <Text style={styles.menuTitle}>Calendário Geral</Text>
                <Text style={styles.menuText}>
                  Visualizar faltas, comparecimentos e consultas agendadas.
                </Text>
              </TouchableOpacity>

              {/* botão pacientes */}
              <TouchableOpacity
                style={styles.menuCard}
                onPress={() => router.push('/pacientes-admin')}
              >
                <Text style={styles.menuTitle}>Pacientes</Text>
                <Text style={styles.menuText}>
                  Consultar e acompanhar informações dos pacientes.
                </Text>
              </TouchableOpacity>

              {/* botão salas */}
              <TouchableOpacity
                style={styles.menuCard}
                onPress={() => router.push('/salas-admin')}
              >
                <Text style={styles.menuTitle}>Salas</Text>
                <Text style={styles.menuText}>
                  Ver disponibilidade e organização das salas da clínica.
                </Text>
              </TouchableOpacity>

              {/* botão cancelamentos */}
              <TouchableOpacity
                style={styles.menuCard}
                onPress={() => router.push('/cancelamentos')}
              >
                <Text style={styles.menuTitle}>Cancelamentos</Text>
                <Text style={styles.menuText}>
                  Analisar cancelamentos e remarcações dos pacientes.
                </Text>
              </TouchableOpacity>

              {/* botão faltas */}
              <TouchableOpacity
                style={styles.menuCard}
                onPress={() => router.push('/faltas')}
              >
                <Text style={styles.menuTitle}>Faltas</Text>
                <Text style={styles.menuText}>
                  Acompanhar presença, faltas e histórico de consultas.
                </Text>
              </TouchableOpacity>

              {/* botão reagendamentos */}
              <TouchableOpacity
                style={styles.menuCard}
                onPress={() => router.push('/novo-agendamento')}
              >
                <Text style={styles.menuTitle}>Reagendamentos</Text>
                <Text style={styles.menuText}>
                  Alterar datas, horários e organização dos atendimentos.
                </Text>
              </TouchableOpacity>

            </View>

            {/* botão sair do painel */}
            <TouchableOpacity
              style={styles.backButton}

              // aqui eu volto pro login (logout)
              onPress={() => router.replace('/')}
            >
              <Text style={styles.backButtonText}>Sair do painel</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

// estilos da tela
const styles = StyleSheet.create({

  // fundo ocupa toda tela
  background: {
    flex: 1,
  },

  // conteúdo com espaçamento
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 20,
    paddingTop: 40,
  },

  // container principal
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },

  // centraliza no desktop
  wrapperDesktop: {
    alignItems: 'center',
  },

  // etiqueta superior
  topPill: {
    alignSelf: 'center',
    backgroundColor: '#D7E5DF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 18,
    marginBottom: 18,
  },

  // texto da etiqueta
  topPillText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#35534A',
  },

  // card principal
  card: {
    width: '100%',
    backgroundColor: '#E8EBF2',
    borderRadius: 34,
    paddingHorizontal: 22,
    paddingVertical: 26,
    shadowColor: '#b3e0ef',
    shadowOpacity: 0.18,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },

  // versão desktop do card
  cardDesktop: {
    maxWidth: 980,
    paddingHorizontal: 26,
    paddingVertical: 30,
  },

  // título
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '800',
    color: '#17243F',
    marginBottom: 6,
  },

  // subtítulo
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#6E7485',
    marginBottom: 26,
  },

  // grid de opções
  grid: {
    gap: 16,
  },

  // card de cada opção
  menuCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#D7DCE5',
    paddingHorizontal: 18,
    paddingVertical: 18,
  },

  // título do menu
  menuTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#171717',
    marginBottom: 8,
  },

  // descrição do menu
  menuText: {
    fontSize: 15,
    color: '#667085',
    lineHeight: 22,
  },

  // botão sair
  backButton: {
    marginTop: 22,
    height: 56,
    borderRadius: 18,
    backgroundColor: '#538477',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // texto do botão sair
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
  },
});