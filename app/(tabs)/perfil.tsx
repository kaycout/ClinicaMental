import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { BrandHeader, PrimaryButton, Screen, SectionCard } from '@/components/clinic-ui';

export default function PerfilScreen() {
  const router = useRouter();

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <BrandHeader title="Perfil do Usuário" centered />

        <SectionCard title="Dados do Usuário" tone="teal">
          <View style={styles.infoBlock}>
            <Text style={styles.label}>Nome</Text>
            <Text style={styles.value}>Paulo Oliveira</Text>
          </View>

          <View style={styles.infoBlock}>
            <Text style={styles.label}>Perfil</Text>
            <Text style={styles.value}>Estagiário</Text>
          </View>

          <View style={styles.infoBlock}>
            <Text style={styles.label}>E-mail</Text>
            <Text style={styles.value}>paulo@sep.com</Text>
          </View>

          <View style={styles.infoBlock}>
            <Text style={styles.label}>Função</Text>
            <Text style={styles.value}>
              Acompanhamento clínico e registros
            </Text>
          </View>
        </SectionCard>

        <SectionCard title="Acesso" tone="green">
          <View style={styles.buttonFull}>
            <PrimaryButton
              label="Sair da Conta"
              onPress={() => {
                router.replace('/');
              }}
              green
            />
          </View>
        </SectionCard>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 24,
    maxWidth: 850,
    width: '100%',
    alignSelf: 'center'
  },

  infoBlock: {
    marginBottom: 10
  },

  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#6B7A7A',
    marginBottom: 4,
    textTransform: 'uppercase'
  },

  buttonFull: {
    width: '100%'
  },

  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#244043'
  }
});