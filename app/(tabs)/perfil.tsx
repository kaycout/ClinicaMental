import React from 'react';
// importando componentes básicos
import { ScrollView, StyleSheet, Text, View } from 'react-native';
// hook de navegação
import { useRouter } from 'expo-router';
// componentes personalizados do projeto
import { BrandHeader, PrimaryButton, Screen, SectionCard } from '@/components/clinic-ui';

// componente da tela de perfil do usuário
export default function PerfilScreen() {

  // hook pra navegação entre telas
  const router = useRouter();

  return (
    // estrutura base da tela
    <Screen>

      {/* scroll pra permitir rolagem */}
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        {/* header com título da tela */}
        <BrandHeader title="Perfil do Usuário" centered />

        {/* card com dados do usuário */}
        <SectionCard title="Dados do Usuário" tone="teal">

          {/* bloco de informação */}
          <View style={styles.infoBlock}>
            <Text style={styles.label}>Nome</Text>
            <Text style={styles.value}>Paulo Oliveira</Text>
          </View>

          {/* bloco de informação */}
          <View style={styles.infoBlock}>
            <Text style={styles.label}>Perfil</Text>
            <Text style={styles.value}>Estagiário</Text>
          </View>

          {/* bloco de informação */}
          <View style={styles.infoBlock}>
            <Text style={styles.label}>E-mail</Text>
            <Text style={styles.value}>paulo@sep.com</Text>
          </View>

          {/* bloco de informação */}
          <View style={styles.infoBlock}>
            <Text style={styles.label}>Função</Text>
            <Text style={styles.value}>
              Acompanhamento clínico e registros
            </Text>
          </View>

        </SectionCard>

        {/* card de ações do usuário */}
        <SectionCard title="Acesso" tone="green">

          {/* container do botão */}
          <View style={styles.buttonFull}>

            {/* botão de logout */}
            <PrimaryButton
              label="Sair da Conta"

              // ao clicar, redireciona para a tela de login
              onPress={() => {
                router.replace('/tela-login');
              }}

              // estilo verde do botão
              green
            />

          </View>

        </SectionCard>

      </ScrollView>
    </Screen>
  );
}

// estilos da tela
const styles = StyleSheet.create({

  // container principal com espaçamento
  content: {
    paddingBottom: 24,
    maxWidth: 850,
    width: '100%',
    alignSelf: 'center',

    // espaço no topo pra não grudar no android
    paddingTop: 20,
  },

  // bloco de cada informação (nome, email, etc)
  infoBlock: {
    marginBottom: 10
  },

  // label (nome do campo)
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#6B7A7A',
    marginBottom: 4,

    // deixa o texto em maiúsculo
    textTransform: 'uppercase'
  },

  // container do botão ocupando toda largura
  buttonFull: {
    width: '100%'
  },

  // valor da informação (ex: nome do usuário)
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#244043'
  }
});