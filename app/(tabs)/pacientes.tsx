import React from 'react';
// safeareaview ajuda a não ficar por baixo da barra do celular
import { SafeAreaView } from 'react-native-safe-area-context';
// componentes básicos
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// navegação
import { router } from 'expo-router';
// componentes personalizados do projeto
import { BrandHeader, PatientRow, Screen, SearchBar, SectionCard, useResponsive } from '@/components/clinic-ui';

// lista simulada de pacientes (como se viesse do banco)
const pacientes = [
    'Ana Silva',
    'Lucas Mendes',
    'Maria Clara Souza', 
    'Pedro Henrique', 
    'Julia Alves'
];

// componente da tela de pacientes
export default function PacientesScreen() {

  // verifico se está em tela grande (desktop/tablet)
  const { isDesktop } = useResponsive();

  return (
    // estrutura base da tela
    <Screen>

      {/* scroll pra permitir rolar a lista */}
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        {/* container principal centralizado */}
        <View style={[styles.wrapper, isDesktop && styles.wrapperDesktop]}>

          {/* MAIN */}
          <View style={styles.main}>

            {/* header com título */}
            <BrandHeader title="Pacientes SEP" centered={isDesktop} />

            {/* barra de busca (ainda visual, mas pronta pra filtrar depois) */}
            <SearchBar placeholder="Buscar paciente..." />

            {/* card que agrupa os pacientes */}
            <SectionCard title="Lista de Pacientes" tone="green">

              {/* percorrendo a lista de pacientes */}
              {pacientes.map((paciente, index) => (

                // cada paciente vira um botão clicável
                <TouchableOpacity
                  key={index}

                  // ao clicar, vai pra tela de detalhes do paciente
                  onPress={() => router.push('/paciente-detalhe')}
                >

                  {/* componente visual de linha de paciente */}
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

// estilos da tela
const styles = StyleSheet.create({

  // espaçamento inferior geral
  content: {
    paddingBottom: 24
  },

  // container central com largura máxima
  wrapper: { 
    width: '100%', 

    // esse padding é pra não grudar no topo no android
    paddingTop: 20, 

    maxWidth: 850, 
    alignSelf: 'center' 
  }, 

  // ajuste quando estiver em tela grande
  wrapperDesktop: {
    flexDirection: 'row', 
    gap: 20, 
    alignItems: 'flex-start' 
  }, 

  // área principal da tela
  main: { 
    flex: 1.4 
  }, 

  // área lateral (não usada ainda, mas deixei preparado)
  side: { 
    flex: 1 
  }, 

  // item de resumo (estrutura pronta pra futuras infos)
  resumeItem: { 
    marginBottom: 14 
  }, 

  // título de resumo
  resumeTitle: { 
    fontSize: 16, 
    fontWeight: '800', 
    marginBottom: 4 
  }, 

  // texto de resumo
  resumeText: { 
    fontSize: 14 
  }
});