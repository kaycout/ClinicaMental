// arquivo app/(tabs)/salas.tsx
// versão estagiário baseada no layout administrativo (somente visualização)

import React from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

// salas simuladas
const salas = [
  { nome: 'Sala 1', status: 'Livre', horario: '08:00 - 09:00' },
  { nome: 'Sala 2', status: 'Ocupada', horario: '09:00 - 10:00' },
  { nome: 'Sala 3', status: 'Livre', horario: '10:00 - 11:00' },
  { nome: 'Sala 4', status: 'Ocupada', horario: '11:00 - 12:00' },
  { nome: 'Sala Infantil', status: 'Ocupada', horario: '14:00 - 15:00' },
  { nome: 'Sala de Grupos', status: 'Livre', horario: '15:00 - 16:00' },
  { nome: 'Sala de Supervisão', status: 'Livre', horario: '16:00 - 17:00' },
];

// menu limitado (estagiário)
const menuItems = [
  ['calendar-outline', 'Agenda', '/(tabs)'],
  ['people-outline', 'Pacientes', '/(tabs)/pacientes'],
  ['business-outline', 'Salas', '/(tabs)/salas'],
  ['business-outline', 'Notificacoes', '/(tabs)/notificacoes'],
  ['person-outline', 'Perfil', '/(tabs)/perfil'],
];

export default function SalasScreen() {
  const { width } = useWindowDimensions();
  const isMobile = width < 900;

  return (
    <LinearGradient
      colors={['#F4FBF8', '#EAF6F1', '#F8FCFA']}
      style={styles.background}
    >
      <View style={styles.page}>

        {/* SIDEBAR (ESTAGIÁRIO) */}
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

            {/* menu */}
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
          </View>
        )}

        {/* CONTEÚDO */}
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >

          {/* HEADER */}
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Salas da clínica</Text>
              <Text style={styles.subtitle}>
                Visualização das salas (acesso de estagiário)
              </Text>
            </View>

            {/* ❌ REMOVIDO: botão Nova sala */}
          </View>

          {/* CARDS */}
          <View style={[styles.cardsWrap, !isMobile && styles.cardsWrapDesktop]}>
            {salas.map((sala, index) => (
              <View key={index} style={[styles.card, !isMobile && styles.cardDesktop]}>

                <View style={styles.cardHeader}>
                  <Ionicons name="business-outline" size={18} color="#0C706E" />
                  <Text style={styles.cardTitle}>{sala.nome}</Text>
                </View>

                <View style={styles.timeRow}>
                  <Ionicons name="time-outline" size={14} color="#64748B" />
                  <Text style={styles.cardSubtitle}>{sala.horario}</Text>
                </View>

                <View
                  style={[
                    styles.badge,
                    sala.status === 'Livre' ? styles.badgeFree : styles.badgeBusy,
                  ]}
                >
                  <Text
                    style={[
                      styles.badgeText,
                      sala.status === 'Livre'
                        ? styles.badgeTextFree
                        : styles.badgeTextBusy,
                    ]}
                  >
                    {sala.status}
                  </Text>
                </View>

                {/* ação somente visual */}
                <TouchableOpacity style={styles.detailsButton}>
                  <Ionicons name="eye-outline" size={16} color="#0C706E" />
                  <Text style={styles.detailsText}>Ver detalhes</Text>
                </TouchableOpacity>

              </View>
            ))}
          </View>

        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  background: {
    flex: 1,
  },

  page: {
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

  scroll: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 34,
    paddingTop: 48,
    paddingBottom: 28,
  },

  header: {
    marginBottom: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#152322',
  },

  subtitle: {
    fontSize: 14,
    color: '#6B7C83',
    marginTop: 4,
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