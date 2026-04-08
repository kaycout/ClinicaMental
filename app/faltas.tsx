import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BrandHeader, Screen, SectionCard } from '@/components/clinic-ui';

const faltas = [{ paciente: 'Ana Silva', 
    presencas: 6, 
    faltas: 2, 
    ultimaConsulta: '10/06/2026', 
    observacao: 'Faltou sem aviso prévio.' 
}, 
    { paciente: 'Pedro Henrique', 
    presencas: 4, 
    faltas: 3, 
    ultimaConsulta: '11/06/2026', 
    observacao: 'Necessita acompanhamento mais próximo.' 
}, 
    { paciente: 'Julia Alves', 
    presencas: 8, 
    faltas: 1, 
    ultimaConsulta: '12/06/2026', 
    observacao: 'Boa frequência nas sessões.' 
}];

export default function FaltasScreen() {
  return (
    <Screen>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <BrandHeader
          title="Controle de Faltas"
          centered
        />

        <SectionCard title="Histórico de Presença" tone="green">
          {faltas.map((item, index) => (
            <View key={index} style={styles.card}>
              
              <Text style={styles.patient}>
                {item.paciente}
              </Text>

              <Text style={styles.meta}>
                Presenças: {item.presencas}
              </Text>

              <Text style={styles.meta}>
                Faltas: {item.faltas}
              </Text>

              <Text style={styles.meta}>
                Última consulta: {item.ultimaConsulta}
              </Text>

              <Text style={styles.observation}>
                Obs.: {item.observacao}
              </Text>

            </View>
          ))}
        </SectionCard>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create

({ content: { paddingBottom: 24 }, 
    card: { 
    backgroundColor: '#FFFFFF', 
    borderWidth: 1, 
    borderColor: '#E1EBE8', 
    borderRadius: 14, 
    padding: 14, 
    marginBottom: 10 
}, 
    patient: { 
    fontSize: 16, 
    fontWeight: '800', 
    marginBottom: 6, 
    color: '#244043' 
}, 
    meta: { 
    fontSize: 14, 
    color: '#6B7A7A', 
    marginBottom: 4 
}, 
    observation: { 
    fontSize: 14, 
    color: '#244043', 
    marginTop: 6, 
    lineHeight: 20 
} });
