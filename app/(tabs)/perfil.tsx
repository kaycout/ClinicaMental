// arquivo app/(tabs)/perfil.tsx
// aqui eu organizei essa tela e deixei os comentários explicando minha parte do código
import React from 'react';
// importando componentes básicos
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
// hook de navegação
import { useRouter } from 'expo-router';
// importando o gradiente pra deixar no mesmo padrão das telas de cadastro e login
import { LinearGradient } from 'expo-linear-gradient';
// importando os ícones que usei na tela
import { Ionicons } from '@expo/vector-icons';

// aqui ficam os itens do menu lateral do desktop
const menuItems = [
  ['calendar-outline', 'Agenda', '/(tabs)'],
  ['people-outline', 'Pacientes', '/(tabs)/pacientes'],
  ['business-outline', 'Salas', '/(tabs)/salas'],
  ['notifications-outline', 'Avisos', '/(tabs)/notificacoes'],
  ['person-outline', 'Perfil', '/(tabs)/perfil'],
];

// componente da tela de perfil do usuário
export default function PerfilScreen() {
  // hook pra navegação entre telas
  const router = useRouter();

  // aqui eu verifico a largura da tela pra adaptar no desktop
  const { width } = useWindowDimensions();
  const isDesktop = width >= 900;

  return (
    <LinearGradient
      colors={['#F4FBF8', '#EAF6F1', '#F8FCFA']}
      style={styles.background}
    >
      <View style={styles.backgroundDecor}>
        <View style={styles.blurCircleOne} />
        <View style={styles.blurCircleTwo} />
        <View style={styles.blurCircleThree} />
      </View>

      <View style={styles.screen}>
        {isDesktop && (
          <View style={styles.sidebar}>
            <View style={styles.logoBox}>
              <Text style={styles.psiSidebar}>Ψ</Text>

              <View>
                <Text style={styles.logoTextSidebar}>SEP</Text>
                <Text style={styles.logoSubSidebar}>Clínica de Psicologia</Text>
              </View>
            </View>

            <View style={styles.menuArea}>
              {menuItems.map(([icon, label, path]) => (
                <TouchableOpacity
                  key={label}
                  style={[
                    styles.menuItem,
                    label === 'Perfil' && styles.menuActive,
                  ]}
                  onPress={() => router.push(path as any)}
                >
                  <Ionicons
                    name={icon as any}
                    size={20}
                    color={label === 'Perfil' ? '#0C706E' : '#70808A'}
                  />

                  <Text
                    style={[
                      styles.menuText,
                      label === 'Perfil' && styles.menuTextActive,
                    ]}
                  >
                    {label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity style={styles.logoutSidebar} onPress={() => router.replace('/login')}>
              <Ionicons name="exit-outline" size={20} color="#70808A" />
              <Text style={styles.menuText}>Sair</Text>
            </TouchableOpacity>
          </View>
        )}

        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={[styles.card, isDesktop && styles.cardDesktop, !isDesktop && styles.cardMobile]}>
            <View style={styles.logoArea}>
              <Text style={styles.psi}>Ψ</Text>

              <View>
                <Text style={styles.logoText}>SEP</Text>
                <Text style={styles.logoSubtitle}>CLÍNICA DE PSICOLOGIA</Text>
              </View>
            </View>

            <Text style={styles.title}>Perfil do Usuário</Text>
            <Text style={styles.subtitle}>Informações da conta do estagiário</Text>

            <View style={styles.infoCard}>
              <View style={styles.infoHeader}>
                <Text style={styles.infoHeaderText}>Dados do Usuário</Text>
              </View>

              <View style={styles.infoBody}>
                <View style={styles.infoBlock}>
                  <Text style={styles.label}>Nome</Text>
                  <Text style={styles.value}>Paulo Oliveira</Text>
                </View>

                <View style={styles.infoBlock}>
                  <Text style={styles.label}>Perfil</Text>
                  <Text style={styles.value}>Estagiário</Text>
                </View>

                <View style={styles.infoBlock}>
                  <Text style={styles.label}>E-mail</Text>
                  <Text style={styles.value}>paulo@sep.com</Text>
                </View>

                <View style={styles.infoBlock}>
                  <Text style={styles.label}>Função</Text>
                  <Text style={styles.value}>
                    Acompanhamento clínico e registros
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.accessCard}>
              <View style={styles.accessHeader}>
                <Text style={styles.accessHeaderText}>Acesso</Text>
              </View>

              <View style={styles.accessBody}>
                <TouchableOpacity
                  style={styles.logoutButton}
                  activeOpacity={0.85}
                  onPress={() => {
                    router.replace('/login');
                  }}
                >
                  <Ionicons name="log-out-outline" size={20} color="#FFFFFF" />
                  <Text style={styles.logoutText}>Sair da Conta</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

// estilos da tela
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

  psiSidebar: {
    fontSize: 50,
    color: '#FFFFFF',
    fontWeight: '700',
  },

  logoTextSidebar: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: '700',
  },

  logoSubSidebar: {
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

  logoutSidebar: {
    position: 'absolute',
    bottom: 28,
    left: 26,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
  },

  content: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 28,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingHorizontal: 22,
    paddingVertical: 26,
    shadowColor: '#A6BDB8',
    shadowOpacity: 0.15,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },

  cardDesktop: {
    maxWidth: 520,
    alignSelf: 'center',
  },

  cardMobile: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },

  logoArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
  },

  psi: {
    fontSize: 58,
    fontWeight: '600',
    color: '#0C706E',
  },

  logoText: {
    fontSize: 28,
    fontWeight: '600',
    color: '#0C706E',
  },

  logoSubtitle: {
    fontSize: 10,
    fontWeight: '400',
    color: '#0C706E',
  },

  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '500',
    color: '#171717',
    marginBottom: 8,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#7A8583',
    marginBottom: 24,
  },

  infoCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8E6',
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 16,
  },

  infoHeader: {
    backgroundColor: '#EAF6F2',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },

  infoHeaderText: {
    color: '#0C706E',
    fontSize: 16,
    fontWeight: '500',
  },

  infoBody: {
    paddingHorizontal: 20,
    paddingVertical: 18,
  },

  infoBlock: {
    marginBottom: 14,
  },

  label: {
    fontSize: 11,
    fontWeight: '400',
    color: '#7B8986',
    marginBottom: 4,
    textTransform: 'uppercase',
  },

  value: {
    fontSize: 15,
    fontWeight: '400',
    color: '#1E3A38',
  },

  accessCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8E6',
    borderRadius: 14,
    overflow: 'hidden',
  },

  accessHeader: {
    backgroundColor: '#EAF6F2',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },

  accessHeaderText: {
    color: '#0C706E',
    fontSize: 16,
    fontWeight: '500',
  },

  accessBody: {
    paddingHorizontal: 20,
    paddingVertical: 18,
  },

  logoutButton: {
    height: 48,
    backgroundColor: '#0C706E',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },

  logoutText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '500',
  },

});