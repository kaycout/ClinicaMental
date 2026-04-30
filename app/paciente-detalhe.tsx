// arquivo app/paciente-detalhe.tsx
// aqui eu organizei essa tela e deixei os comentários explicando minha parte do código

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
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

export default function PacienteDetalheScreen() {
  // aqui eu pego a largura da tela para adaptar no mobile e desktop
  const { width } = useWindowDimensions();

  // se a tela for maior ou igual a 900, eu considero desktop
  const isDesktop = width >= 900;

  return (
    <LinearGradient
      colors={['#F4FBF8', '#EAF6F1', '#F8FCFA']}
      style={styles.background}
    >
      {/* aqui eu coloquei as bolinhas de fundo seguindo a identidade do app */}
      <View style={styles.backgroundDecor}>
        <View style={styles.blurCircleOne} />
        <View style={styles.blurCircleTwo} />
        <View style={styles.blurCircleThree} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.wrapper, isDesktop && styles.wrapperDesktop]}>

          {/* topo da tela */}
          <View style={styles.topArea}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
              <Ionicons name="chevron-back-outline" size={20} color="#0C706E" />
              <Text style={styles.backText}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.logoArea}>
              <Text style={styles.psi}>Ψ</Text>

              <View>
                <Text style={styles.logoText}>SEP</Text>
                <Text style={styles.logoSub}>Clínica de Psicologia</Text>
              </View>
            </View>
          </View>

          {/* card principal do paciente */}
          <View style={styles.profileCard}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>AS</Text>
            </View>

            <View style={styles.profileInfo}>
              <Text style={styles.patientName}>Ana Silva</Text>
              <Text style={styles.patientSub}>14 anos • Criança</Text>

              <View style={styles.statusBadge}>
                <Ionicons name="heart-outline" size={14} color="#0C706E" />
                <Text style={styles.statusText}>Em acompanhamento</Text>
              </View>
            </View>
          </View>

          {/* aviso de acesso limitado */}
          <View style={styles.permissionCard}>
            <View style={styles.permissionIcon}>
              <Ionicons name="lock-closed-outline" size={19} color="#0C706E" />
            </View>

            <View style={styles.permissionTextBox}>
              <Text style={styles.permissionTitle}>Acesso limitado</Text>
              <Text style={styles.permissionDescription}>
                Esta tela é apenas para consulta do estagiário. Dados sensíveis, edições e exclusões ficam disponíveis somente para a administração.
              </Text>
            </View>
          </View>

          {/* conteúdo da tela */}
          <View style={[styles.grid, isDesktop && styles.gridDesktop]}>

            {/* dados cadastrais */}
            <View style={styles.sectionCard}>
              <View style={styles.sectionHeader}>
                <Ionicons name="person-outline" size={19} color="#0C706E" />
                <Text style={styles.sectionTitle}>Dados básicos</Text>
              </View>

              <InfoRow label="Nome" value="Ana Silva" />
              <InfoRow label="Idade" value="14 anos" />
              <InfoRow label="Tipo" value="Criança" />
              <InfoRow label="Responsável" value="Mariana Silva" />
              <InfoRow label="Contato" value="Disponível para administração" locked />
            </View>

            {/* histórico clínico */}
            <View style={styles.sectionCard}>
              <View style={styles.sectionHeader}>
                <Ionicons name="document-text-outline" size={19} color="#0C706E" />
                <Text style={styles.sectionTitle}>Resumo do acompanhamento</Text>
              </View>

              <InfoRow label="Atendimentos" value="8" />
              <InfoRow label="Presenças" value="6" />
              <InfoRow label="Faltas" value="2" />
              <InfoRow label="Cancelamentos" value="2" />
              <InfoRow label="Situação atual" value="Em acompanhamento" />
            </View>
          </View>

          {/* observações */}
          <View style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <Ionicons name="chatbox-ellipses-outline" size={19} color="#0C706E" />
              <Text style={styles.sectionTitle}>Observações permitidas</Text>
            </View>

            <View style={styles.noteBox}>
              <Text style={styles.note}>
                Paciente apresenta boa adaptação às sessões.
              </Text>
            </View>

            <View style={styles.noteBox}>
              <Text style={styles.note}>
                Necessita acompanhamento contínuo com responsável.
              </Text>
            </View>

            <View style={styles.noteBox}>
              <Text style={styles.note}>
                Última sessão realizada sem intercorrências.
              </Text>
            </View>
          </View>

          {/* ações permitidas */}
          <View style={styles.actionsCard}>
            <TouchableOpacity style={styles.primaryButton}>
              <Ionicons name="eye-outline" size={17} color="#FFFFFF" />
              <Text style={styles.primaryButtonText}>Visualizar histórico permitido</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryButton}>
              <Ionicons name="calendar-outline" size={17} color="#0C706E" />
              <Text style={styles.secondaryButtonText}>Ver agenda do paciente</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

// componente para mostrar as informações em linha
function InfoRow({ label, value, locked }: any) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>

      <View style={styles.infoValueBox}>
        {locked && <Ionicons name="lock-closed-outline" size={13} color="#94A3B8" />}
        <Text style={[styles.infoValue, locked && styles.infoValueLocked]}>
          {value}
        </Text>
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
    width: 430,
    height: 430,
    borderRadius: 215,
    backgroundColor: 'rgba(12, 112, 110, 0.08)',
    top: -120,
    left: -120,
  },

  blurCircleTwo: {
    position: 'absolute',
    width: 520,
    height: 520,
    borderRadius: 260,
    backgroundColor: 'rgba(166, 189, 184, 0.18)',
    right: -180,
    bottom: -160,
  },

  blurCircleThree: {
    position: 'absolute',
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: 'rgba(255, 255, 255, 0.68)',
    right: 120,
    top: 150,
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 42,
    paddingBottom: 28,
  },

  wrapper: {
    width: '100%',
    maxWidth: 980,
    alignSelf: 'center',
  },

  wrapperDesktop: {
    paddingTop: 12,
  },

  topArea: {
    marginBottom: 18,
  },

  backButton: {
    alignSelf: 'flex-start',
    minHeight: 38,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDE8E5',
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 18,
  },

  backText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#0C706E',
  },

  logoArea: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  psi: {
    fontSize: 50,
    color: '#0C706E',
    fontWeight: '700',
    lineHeight: 56,
  },

  logoText: {
    fontSize: 28,
    color: '#0C706E',
    fontWeight: '700',
  },

  logoSub: {
    fontSize: 12,
    color: '#0C706E',
    marginTop: 1,
  },

  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DDE8E5',
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 14,
    shadowColor: '#A6BDB8',
    shadowOpacity: 0.18,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },

  avatar: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#E1F2EF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0C706E',
  },

  profileInfo: {
    flex: 1,
  },

  patientName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#152322',
  },

  patientSub: {
    fontSize: 14,
    color: '#6B7C83',
    marginTop: 3,
  },

  statusBadge: {
    alignSelf: 'flex-start',
    minHeight: 30,
    borderRadius: 15,
    backgroundColor: '#EAF6F2',
    paddingHorizontal: 11,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  statusText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#0C706E',
  },

  permissionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DDE8E5',
    padding: 14,
    flexDirection: 'row',
    gap: 12,
    marginBottom: 14,
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

  grid: {
    gap: 14,
  },

  gridDesktop: {
    flexDirection: 'row',
  },

  sectionCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E0E9E6',
    padding: 16,
    marginBottom: 14,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#152322',
  },

  infoRow: {
    minHeight: 42,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF2F1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },

  infoLabel: {
    fontSize: 13,
    color: '#6B7C83',
  },

  infoValueBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    flexShrink: 1,
  },

  infoValue: {
    fontSize: 13,
    fontWeight: '500',
    color: '#152322',
    textAlign: 'right',
  },

  infoValueLocked: {
    color: '#94A3B8',
  },

  noteBox: {
    backgroundColor: '#F8FCFA',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E0E9E6',
    padding: 12,
    marginBottom: 9,
  },

  note: {
    fontSize: 13,
    lineHeight: 20,
    color: '#5B6D75',
  },

  actionsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E0E9E6',
    padding: 14,
    gap: 10,
  },

  primaryButton: {
    minHeight: 46,
    borderRadius: 12,
    backgroundColor: '#0C706E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  primaryButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },

  secondaryButton: {
    minHeight: 46,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#0C706E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  secondaryButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0C706E',
  },
});