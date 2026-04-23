import React from 'react';
// importando componentes básicos
import { ScrollView, StyleSheet, Text, View } from 'react-native';
// importando componentes personalizados do projeto
import { BrandHeader, Screen, SectionCard } from '@/components/clinic-ui';

// lista simulada de notificações do sistema
const notificacoes = [
  { titulo: 'Consulta confirmada', descricao: 'Ana Silva - 12/06/2026 às 14:00' },
  { titulo: 'Remarcação pendente', descricao: 'Lucas Mendes aguardando aprovação do admin' },
  { titulo: 'Limite de cancelamentos', descricao: 'Maria Clara atingiu 3 cancelamentos' },
  { titulo: 'Falta registrada', descricao: 'Pedro Henrique faltou hoje às 11:00' },
];

// componente da tela de notificações
export default function NotificacoesScreen() {
  return (
    // estrutura base da tela
    <Screen>

      {/* scroll pra permitir rolar a tela */}
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        {/* header com título da tela */}
        <BrandHeader title="Notificações SEP" centered />

        {/* container central pra limitar largura */}
        <View style={styles.sectionWrapper}>

          {/* card que agrupa as notificações */}
          <SectionCard title="Avisos do Sistema" tone="peach">

            {/* percorrendo a lista de notificações */}
            {notificacoes.map((item, index) => (

              // card individual de cada notificação
              <View key={index} style={styles.notificationCard}>

                {/* título da notificação */}
                <Text style={styles.title}>{item.titulo}</Text>

                {/* descrição da notificação */}
                <Text style={styles.description}>{item.descricao}</Text>

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

  // espaçamento geral do conteúdo
  content: {
    paddingBottom: 24,
    paddingTop: 20, // aqui eu dei um espaçamento no topo pra não ficar grudado no android
  },

  // container central com largura máxima
  sectionWrapper: {
    width: '100%',
    maxWidth: 850,
    alignSelf: 'center',
  },

  // card de cada notificação
  notificationCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E1EBE8',
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    width: '100%',
    maxWidth: 850,
    alignSelf: 'center',
  },

  // título da notificação
  title: {
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 4,
  },

  // descrição da notificação
  description: {
    fontSize: 14,
    color: '#6B7A7A',
  },
});