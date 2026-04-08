import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { BrandHeader, PatientRow, Screen, SearchBar, SectionCard, useResponsive } from '@/components/clinic-ui';

const pacientes = ['Ana Silva',
    'Lucas Mendes',
    'Maria Clara Souza', 
    'Pedro Henrique', 
    'Julia Alves'
];

export default function PacientesScreen() {
  const { isDesktop } = useResponsive();

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.wrapper, isDesktop && styles.wrapperDesktop]}>

          {/* MAIN */}
          <View style={styles.main}>
            <BrandHeader title="Pacientes SEP" centered={isDesktop} />

            <SearchBar placeholder="Buscar paciente..." />

            <SectionCard title="Lista de Pacientes" tone="green">
              {pacientes.map((paciente, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => router.push('/paciente-detalhe')}
                >
                  <PatientRow name={paciente} />
                </TouchableOpacity>
              ))}
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
    maxWidth: 850, 
    alignSelf: 'center' 
}, 
    wrapperDesktop: {
    flexDirection: 'row', 
    gap: 20, 
    alignItems: 'flex-start' 
}, 
    main: { 
    flex: 1.4 
}, 
    side: { 
    flex: 1 
}, 
    resumeItem: { 
    marginBottom: 14 
}, 
    resumeTitle: { 
    fontSize: 16, 
    fontWeight: '800', 
    marginBottom: 4 
}, 
    resumeText: { 
    fontSize: 14 
}});
