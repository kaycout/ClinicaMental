import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { BrandHeader, COLORS, ListRow, Screen, SectionCard, useResponsive } from '@/components/clinic-ui';

const agendaHoje = [
  { horario: '08:00', paciente: 'Ana Silva', estagiario: 'Paulo Oliveira', sala: 'Sala 1', status: 'Confirmada' },
  { horario: '09:00', paciente: 'Lucas Mendes', estagiario: 'Carla Souza', sala: 'Sala 2', status: 'Pendente' },
  { horario: '10:00', paciente: 'Maria Clara', estagiario: 'João Pedro', sala: 'Sala Infantil', status: 'Remarcada' },
  { horario: '11:00', paciente: 'Pedro Lima', estagiario: 'Fernanda Alves', sala: 'Sala 3', status: 'Falta' },
];

function getStatusStyle(status: string) {
  switch (status) {
    case 'Confirmada': return { backgroundColor: '#DCEEDF' };
    case 'Pendente': return { backgroundColor: '#F3E7C8' };
    case 'Remarcada': return { backgroundColor: '#D9EBE6' };
    case 'Falta': return { backgroundColor: '#F3DDD4' };
    default: return { backgroundColor: '#E8EEEE' };
  }
}

export default function AgendaScreen() {
  const { isDesktop } = useResponsive();
  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={[styles.wrapper, isDesktop && styles.wrapperDesktop]}>
          <View style={styles.main}>
            <BrandHeader title="Agenda SEP" centered={isDesktop} />
            <SectionCard title="Agenda do Dia" tone="teal">
              {agendaHoje.map((item, index) => (
                <View key={index} style={styles.scheduleCard}>
                  <Text style={styles.time}>{item.horario}</Text>
                  <View style={styles.scheduleInfo}>
                    <Text style={styles.patient}>{item.paciente}</Text>
                    <Text style={styles.meta}>{item.estagiario}</Text>
                    <Text style={styles.meta}>{item.sala}</Text>
                  </View>
                  <View style={[styles.statusBadge, getStatusStyle(item.status)]}><Text style={styles.statusText}>{item.status}</Text></View>
                </View>
              ))}
            </SectionCard>
            <TouchableOpacity style={styles.actionButton} onPress={() => router.push('/novo-agendamento')}><Text style={styles.actionButtonText}>+ Novo Agendamento</Text></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create

({ content: { paddingBottom: 24 },
    wrapper: { 
    width: '100%',
    maxWidth: 850, 
    alignSelf: 'center' 
  },

  wrapperDesktop: { 
    flexDirection: 'row',
    gap: 20, 
    alignItems: 'flex-start' 
  },

  main: { 
    flex: 1.4 },
    side: { flex: 1 
  },

  scheduleCard: {
    backgroundColor: COLORS.white, 
    borderWidth: 1,
    borderColor: '#E1EBE8',
    borderRadius: 18,
    padding: 12, 
    marginBottom: 8
  }, 
  
  time: { 
    fontSize: 16, 
    fontWeight: '800',
    color: COLORS.primary,
    marginBottom: 6 
  },

  scheduleInfo: { 
    gap: 2 
  }, 

  patient: { 
    fontSize: 16, 
    fontWeight: '700', 
    color: COLORS.text 
  },

  meta: { 
    fontSize: 14, 
    color: COLORS.muted 
  },

  statusBadge: { 
    marginTop: 10, 
    alignSelf: 'flex-start', 
    paddingHorizontal: 10, 
    paddingVertical: 6,
    borderRadius: 999 
  },

  statusText: { 
    fontSize: 12, 
    fontWeight: '700', 
    color: COLORS.text 
  },

  actionButton: { 
    backgroundColor: COLORS.primary,
    minHeight: 54, 
    borderRadius: 14,
    justifyContent: 'center', 
    alignItems: 'center' 
  },

  actionButtonText: { 
    color: '#fff',
    fontSize: 17, 
    fontWeight: '700' 
  } 

});
