// arquivo app/cancelamentos.tsx
// aqui eu organizei essa tela e deixei os comentários explicando minha parte do código
import React from 'react';
// importando componentes básicos
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// hook de navegação
import { useRouter } from 'expo-router';
// componentes do projeto
import { BrandHeader, Screen, SectionCard } from '@/components/clinic-ui';

// lista simulada de solicitações (como se viesse do backend)
const solicitacoes = [
  {
    paciente: 'Lucas Mendes',
    tipo: 'Remarcação',
    motivo: 'Compromisso escolar',
    cancelamentos: 1,
    status: 'Aguardando aprovação'
  },
  {
    paciente: 'Maria Clara',
    tipo: 'Cancelamento',
    motivo: 'Paciente indisposto',
    cancelamentos: 3,
    status: 'Limite excedido'
  },
  {
    paciente: 'Pedro Henrique',
    tipo: 'Cancelamento',
    motivo: 'Imprevisto familiar',
    cancelamentos: 2,
    status: 'Aguardando aprovação'
  }
];

// tela de cancelamentos e remarcações
export default function CancelamentosScreen() {

  // hook de navegação pra trocar de tela
  const router = useRouter();

  return (
    // estrutura base da tela
    <Screen>

      {/* scroll pra permitir rolar a tela */}
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        {/* 🔙 BOTÃO VOLTAR */}
        <TouchableOpacity
          style={styles.backButton}

          // aqui eu volto pro painel administrativo
          onPress={() => router.replace('/acesso-administrador')}
        >
          <Text style={styles.backText}>← Voltar</Text>
        </TouchableOpacity>

        {/* header com título da tela */}
        <BrandHeader
          title="Cancelamentos e Remarcações"
          centered
        />

        {/* container central */}
        <View style={styles.container}>

          {/* card principal com lista de solicitações */}
          <SectionCard title="Solicitações" tone="peach">

            {/* percorrendo lista de solicitações */}
            {solicitacoes.map((item, index) => (

              // card individual de cada solicitação
              <View key={index} style={styles.card}>

                {/* nome do paciente */}
                <Text style={styles.patient}>
                  {item.paciente}
                </Text>

                {/* tipo (cancelamento ou remarcação) */}
                <Text style={styles.meta}>
                  Tipo: {item.tipo}
                </Text>

                {/* motivo da solicitação */}
                <Text style={styles.meta}>
                  Motivo: {item.motivo}
                </Text>

                {/* quantidade de cancelamentos do paciente */}
                <Text style={styles.meta}>
                  Cancelamentos: {item.cancelamentos}
                </Text>

                {/* badge de status */}
                <View
                  style={[
                    styles.statusBadge,

                    // se ultrapassou limite, vermelho, senão amarelo
                    item.status === 'Limite excedido'
                      ? styles.badgeDanger
                      : styles.badgePending
                  ]}
                >
                  <Text style={styles.statusText}>
                    {item.status}
                  </Text>
                </View>

              </View>
            ))}

          </SectionCard>
        </View>

      </ScrollView>
    </Screen>
  );
}

// estilos da tela
const styles = StyleSheet.create({

  // espaçamento geral da tela
  content: {
    paddingBottom: 24,
    paddingTop: 20,
  },

  // botão de voltar
  backButton: {
    alignSelf: 'flex-start',
    marginLeft: 16,
    marginBottom: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#E8F3EF',
    borderRadius: 12
  },

  // texto do botão voltar
  backText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#244043'
  },

  // container centralizado
  container: {
    width: '100%',
    maxWidth: 800,
    alignSelf: 'center',
    paddingHorizontal: 10,
  },

  // card de cada solicitação
  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E1EBE8',
    borderRadius: 14,
    padding: 14,
    marginBottom: 10
  },

  // nome do paciente
  patient: {
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 6,
    color: '#244043'
  },

  // informações secundárias
  meta: {
    fontSize: 14,
    color: '#6B7A7A',
    marginBottom: 3
  },

  // badge de status
  statusBadge: {
    alignSelf: 'flex-start',
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999
  },

  // status pendente (amarelo)
  badgePending: {
    backgroundColor: '#F3E7C8'
  },

  // status crítico (vermelho)
  badgeDanger: {
    backgroundColor: '#F3DDD4'
  },

  // texto do status
  statusText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#244043'
  }
});