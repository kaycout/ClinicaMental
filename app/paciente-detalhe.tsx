import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BrandHeader, ListRow, Screen, SectionCard, useResponsive } from '@/components/clinic-ui';

export default function PacienteDetalheScreen() {
  const { isDesktop } = useResponsive();

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.wrapper, isDesktop && styles.wrapperDesktop]}>
          <View style={styles.main}>
            <BrandHeader
              title="Detalhes do Paciente"
              centered={isDesktop}
            />

            <SectionCard title="Dados Cadastrais" tone="teal">
              <ListRow left="Nome" right="Ana Silva" />
              <ListRow left="Idade" right="14 anos" />
              <ListRow left="E-mail" right="ana@email.com" />
              <ListRow left="Tipo" right="Criança" />
              <ListRow left="Responsável" right="Mariana Silva" />
              <ListRow left="Contato" right="(11) 99999-9999" />
            </SectionCard>

            <SectionCard title="Histórico Clínico" tone="green">
              <ListRow left="Atendimentos anteriores" right="8" />
              <ListRow left="Presenças" right="6" />
              <ListRow left="Faltas" right="2" />
              <ListRow left="Cancelamentos" right="2" />
              <ListRow left="Situação atual" right="Em acompanhamento" />
            </SectionCard>

            <SectionCard title="Observações" tone="peach">
              <Text style={styles.note}>
                • Paciente apresenta boa adaptação às sessões.
              </Text>
              <Text style={styles.note}>
                • Necessita acompanhamento contínuo com responsável.
              </Text>
              <Text style={styles.note}>
                • Última sessão realizada sem intercorrências.
              </Text>
            </SectionCard>
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
    maxWidth: 650, 
    alignSelf: 'center' 
}, 
    wrapperDesktop: { 
    flexDirection: 'row', 
    gap: 20, 
    alignItems: 'flex-start' 
}, 
    main: { 
    flex: 1.5 
}, 
    side: { 
    flex: 1 
}, 
    note: { 
    fontSize: 14, 
    lineHeight: 22, 
    marginBottom: 8, 
    color: '#244043' 
}, 
    alertTitle: { 
    fontSize: 16, 
    fontWeight: '800', 
    marginBottom: 8, 
    color: '#244043' 
}, 
    alertText: { 
    fontSize: 14, 
    lineHeight: 22, 
    color: '#244043', 
    marginBottom: 6 
}});
