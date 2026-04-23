import React from 'react';
// importando componentes básicos de layout e interação
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// importando navegação
import { router } from 'expo-router';
// importando componentes personalizados do projeto (header, cores, layout etc)
import { BrandHeader, COLORS, Screen, SectionCard, useResponsive } from '@/components/clinic-ui';

// lista simulada com os atendimentos do dia
const agendaHoje = [
  { horario: '08:00', paciente: 'Ana Silva', estagiario: 'Paulo Oliveira', sala: 'Sala 1', status: 'Confirmada' },
  { horario: '09:00', paciente: 'Lucas Mendes', estagiario: 'Carla Souza', sala: 'Sala 2', status: 'Pendente' },
  { horario: '10:00', paciente: 'Maria Clara', estagiario: 'João Pedro', sala: 'Sala Infantil', status: 'Remarcada' },
  { horario: '11:00', paciente: 'Pedro Lima', estagiario: 'Fernanda Alves', sala: 'Sala 3', status: 'Falta' },
];

// função que define a cor do status dependendo do tipo
function getStatusStyle(status: string) {
  switch (status) {
    case 'Confirmada': return { backgroundColor: '#DCEEDF' }; // verde claro
    case 'Pendente': return { backgroundColor: '#F3E7C8' }; // amarelo
    case 'Remarcada': return { backgroundColor: '#D9EBE6' }; // azul/verde claro
    case 'Falta': return { backgroundColor: '#F3DDD4' }; // vermelho claro
    default: return { backgroundColor: '#E8EEEE' }; // padrão
  }
}

// componente principal da tela de agenda
export default function AgendaScreen() {

  // hook pra saber se está em tela grande (desktop/tablet)
  const { isDesktop } = useResponsive();

  return (
    // componente base da tela (layout padrão do app)
    <Screen>

      {/* scroll pra permitir rolar a tela */}
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        {/* container central */}
        <View style={[styles.wrapper, isDesktop && styles.wrapperDesktop]}>

          {/* parte principal da tela */}
          <View style={styles.main}>

            {/* header com título */}
            <BrandHeader title="Agenda SEP" centered={isDesktop} />

            {/* card que agrupa a agenda */}
            <SectionCard title="Agenda do Dia" tone="teal">

              {/* percorrendo a lista de atendimentos */}
              {agendaHoje.map((item, index) => (

                // card de cada horário
                <View key={index} style={styles.scheduleCard}>

                  {/* horário do atendimento */}
                  <Text style={styles.time}>{item.horario}</Text>

                  {/* informações do atendimento */}
                  <View style={styles.scheduleInfo}>
                    <Text style={styles.patient}>{item.paciente}</Text> {/* nome do paciente */}
                    <Text style={styles.meta}>{item.estagiario}</Text> {/* estagiário responsável */}
                    <Text style={styles.meta}>{item.sala}</Text> {/* sala */}
                  </View>

                  {/* badge de status com cor dinâmica */}
                  <View style={[styles.statusBadge, getStatusStyle(item.status)]}>
                    <Text style={styles.statusText}>{item.status}</Text>
                  </View>

                </View>
              ))}
            </SectionCard>

            {/* botão pra criar novo agendamento */}
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => router.push('/novo-agendamento')}
            >
              <Text style={styles.actionButtonText}>
                + Novo Agendamento
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

// estilos da tela
const styles = StyleSheet.create({

  // espaçamento geral do conteúdo
  content: {
    paddingBottom: 24,
    paddingTop: 20,
  },

  // container central com largura máxima
  wrapper: {
    width: '100%',
    maxWidth: 850,
    alignSelf: 'center'
  },

  // ajuste de layout pra telas grandes
  wrapperDesktop: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'flex-start'
  },

  // área principal da tela
  main: {
    flex: 1.4
  },

  // card de cada atendimento
  scheduleCard: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: '#E1EBE8',
    borderRadius: 18,
    padding: 12,
    marginBottom: 8
  },

  // estilo do horário
  time: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.primary,
    marginBottom: 6
  },

  // container das infos (paciente, sala, etc)
  scheduleInfo: {
    gap: 2
  },

  // nome do paciente
  patient: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text
  },

  // infos secundárias (estagiário e sala)
  meta: {
    fontSize: 14,
    color: COLORS.muted
  },

  // badge do status
  statusBadge: {
    marginTop: 10,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999
  },

  // texto do status
  statusText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.text
  },

  // botão de novo agendamento
  actionButton: {
    backgroundColor: COLORS.primary,
    minHeight: 54,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12
  },

  // texto do botão
  actionButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700'
  },

  // estilo do botão sair (não usado ainda aqui)
  logoutButton: {
    backgroundColor: '#E74C3C',
    minHeight: 50,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },

  // texto do botão sair
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700'
  }
});