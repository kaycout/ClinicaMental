// arquivo app/(tabs)/salas.tsx
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

// importando libs
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

// lista simulada das salas da clínica
const salas = [
  { nome: 'Sala 1', status: 'Livre', horario: '08:00 - 09:00' },
  { nome: 'Sala 2', status: 'Ocupada', horario: '09:00 - 10:00' },
  { nome: 'Sala 3', status: 'Livre', horario: '10:00 - 11:00' },
  { nome: 'Sala 4', status: 'Ocupada', horario: '11:00 - 12:00' },
  { nome: 'Sala Infantil', status: 'Ocupada', horario: '14:00 - 15:00' },
  { nome: 'Sala de Grupos', status: 'Livre', horario: '15:00 - 16:00' },
  { nome: 'Sala de Supervisão', status: 'Livre', horario: '16:00 - 17:00' },
];

// aqui ficam os itens do menu lateral do desktop
const menuItems = [
  ['calendar-outline', 'Agenda', '/(tabs)'],
  ['people-outline', 'Pacientes', '/(tabs)/pacientes'],
  ['business-outline', 'Salas', '/(tabs)/salas'],
  ['notifications-outline', 'Avisos', '/(tabs)/notificacoes'],
  ['person-outline', 'Perfil', '/(tabs)/perfil'],
];

// componente da tela de salas
export default function SalasScreen() {

  // aqui eu pego a largura da tela para adaptar
  const { width } = useWindowDimensions();

  // se for menor que 900 considero mobile
  const isMobile = width < 900;

  return (
    <LinearGradient
      colors={['#F4FBF8', '#EAF6F1', '#F8FCFA']}
      style={styles.background}
    >

      {/* fundo com bolas (AGORA aparece em mobile também) */}
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
                    label === 'Salas' && styles.menuActive,
                  ]}
                  onPress={() => router.push(path as any)}
                >
                  <Ionicons
                    name={icon as any}
                    size={20}
                    color={label === 'Salas' ? '#0C706E' : '#70808A'}
                  />

                  <Text
                    style={[
                      styles.menuText,
                      label === 'Salas' && styles.menuTextActive,
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

        {/* scroll */}
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >

          {/* container principal */}
          <View style={styles.wrapper}>

            {/* topo da tela */}
            <View style={[styles.topRow, isMobile && styles.topRowMobile]}>
              <View>
                <Text style={styles.pageTitle}>Salas da clínica</Text>
                <Text style={styles.pageSubtitle}>
                  Visualize a disponibilidade das salas em tempo real
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

            {/* aviso de acesso */}
            <View style={styles.permissionCard}>
              <Ionicons name="shield-checkmark-outline" size={20} color="#0C706E" />
              <View>
                <Text style={styles.permissionTitle}>Acesso limitado</Text>
                <Text style={styles.permissionText}>
                  Estagiário pode visualizar disponibilidade das salas.
                </Text>
              </View>
            </View>

            {/* cards */}
            <View
              style={[
                styles.cardsWrap,
                !isMobile && styles.cardsWrapDesktop
              ]}
            >

              {/* percorrendo as salas */}
              {salas.map((sala, index) => (

                <View
                  key={index}
                  style={[
                    styles.card,
                    !isMobile && styles.cardDesktop
                  ]}
                >

                  {/* nome da sala */}
                  <View style={styles.cardHeader}>
                    <Ionicons name="business-outline" size={18} color="#0C706E" />
                    <Text style={styles.cardTitle}>{sala.nome}</Text>
                  </View>

                  {/* horario */}
                  <View style={styles.timeRow}>
                    <Ionicons name="time-outline" size={14} color="#64748B" />
                    <Text style={styles.cardSubtitle}>{sala.horario}</Text>
                  </View>

                  {/* status */}
                  <View
                    style={[
                      styles.badge,
                      sala.status === 'Livre'
                        ? styles.badgeFree
                        : styles.badgeBusy
                    ]}
                  >
                    <Text
                      style={[
                        styles.badgeText,
                        sala.status === 'Livre'
                          ? styles.badgeTextFree
                          : styles.badgeTextBusy
                      ]}
                    >
                      {sala.status}
                    </Text>
                  </View>

                  {/* ação limitada */}
                  <TouchableOpacity style={styles.detailsButton}>
                    <Ionicons name="eye-outline" size={16} color="#0C706E" />
                    <Text style={styles.detailsText}>Ver detalhes</Text>
                  </TouchableOpacity>

                </View>
              ))}
            </View>

          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

// estilos
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

  scroll: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 34,
    paddingTop: 48,
    paddingBottom: 28,
  },

  wrapper: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },

  topRowMobile: {
    flexDirection: 'column',
    gap: 10,
  },

  pageTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#152322',
  },

  pageSubtitle: {
    fontSize: 14,
    color: '#6B7C83',
    marginTop: 4,
  },

  userBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  avatarUser: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#DDEDEA',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarUserText: {
    fontWeight: '600',
    color: '#0C706E',
  },

  userName: {
    fontSize: 14,
    fontWeight: '600',
  },

  userRole: {
    fontSize: 12,
    color: '#6B7C83',
  },

  permissionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#DDE8E5',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },

  permissionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0C706E',
  },

  permissionText: {
    fontSize: 13,
    color: '#6B7C83',
  },

  cardsWrap: {
    gap: 12,
  },

  cardsWrapDesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E0E9E6',
  },

  cardDesktop: {
    width: '48.5%',
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 10,
  },

  cardSubtitle: {
    fontSize: 13,
    color: '#64748B',
  },

  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 12,
  },

  badgeFree: {
    backgroundColor: '#E3F7EE',
  },

  badgeBusy: {
    backgroundColor: '#FFE5E5',
  },

  badgeText: {
    fontSize: 12,
    fontWeight: '500',
  },

  badgeTextFree: {
    color: '#0C706E',
  },

  badgeTextBusy: {
    color: '#B91C1C',
  },

  detailsButton: {
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0C706E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },

  detailsText: {
    fontSize: 13,
    color: '#0C706E',
    fontWeight: '500',
  },
});