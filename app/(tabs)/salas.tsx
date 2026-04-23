import React from 'react';
// importando componentes básicos
import { ScrollView, StyleSheet, Text, View } from 'react-native';
// importando componentes personalizados
import { BrandHeader, Screen, useResponsive } from '@/components/clinic-ui';

// lista simulada das salas da clínica
const salas = [
{ nome: 'Sala 1',
    status: 'Livre', 
    horario: '08:00 - 09:00' 
}, 
    { nome: 'Sala 2', 
    status: 'Ocupada', 
    horario: '09:00 - 10:00' 
}, 
    { nome: 'Sala 3', 
    status: 'Livre', 
    horario: '10:00 - 11:00' 
}, 
    { nome: 'Sala 4', 
        status: 'Ocupada', 
        horario: '11:00 - 12:00' 
}, 
    { nome: 'Sala Infantil', 
    status: 'Ocupada', 
    horario: '14:00 - 15:00' 
}, 
    { nome: 'Sala de Grupos', 
    status: 'Livre', 
    horario: '15:00 - 16:00' 
}, 
    { nome: 'Sala de Supervisão', 
    status: 'Livre', 
    horario: '16:00 - 17:00' 
}];

// componente da tela de salas
export default function SalasScreen() {

  // verifico se está em tela grande (desktop/tablet)
  const { isDesktop } = useResponsive();

  return (
    // estrutura base da tela
    <Screen>

      {/* scroll pra permitir rolagem */}
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        {/* container principal */}
        <View style={styles.wrapper}>
          
          {/* header com título */}
          <BrandHeader 
            title="Salas da Clínica" 
            centered={isDesktop} 
          />

          {/* container dos cards */}
          <View
            style={[
              styles.cardsWrap,
              // se for desktop, muda o layout pra linha
              isDesktop && styles.cardsWrapDesktop
            ]}
          >

            {/* percorrendo a lista de salas */}
            {salas.map((sala, index) => (

              // card de cada sala
              <View
                key={index}
                style={[
                  styles.card,
                  // em desktop deixa 2 colunas
                  isDesktop && styles.cardDesktop
                ]}
              >

                {/* nome da sala */}
                <Text style={styles.cardTitle}>
                  {sala.nome}
                </Text>

                {/* horário da sala */}
                <Text style={styles.cardSubtitle}>
                  {sala.horario}
                </Text>

                {/* badge de status (livre ou ocupada) */}
                <View
                  style={[
                    styles.badge,
                    // se estiver livre, verde; se não, vermelho
                    sala.status === 'Livre'
                      ? styles.badgeFree
                      : styles.badgeBusy
                  ]}
                >
                  <Text style={styles.badgeText}>
                    {sala.status}
                  </Text>
                </View>

              </View>
            ))}
          </View>

        </View>
      </ScrollView>
    </Screen>
  );
}

// estilos da tela
const styles = StyleSheet.create

({ 
    // espaçamento inferior
    content: { paddingBottom: 24 }, 

    // container principal com largura máxima
    wrapper: { 
    width: '100%', 

    // espaço no topo pra não grudar no android
    paddingTop: 20, 

    maxWidth: 1100, 
    alignSelf: 'center' 
}, 

    // container dos cards
    cardsWrap: { 
    gap: 12 
}, 

    // layout em desktop (cards lado a lado)
    cardsWrapDesktop: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    gap: 12 
}, 

    // card individual
    card: { 
    width: '100%', 
    backgroundColor: '#FFFFFF', 
    borderWidth: 1, 
    borderColor: '#DEE9E5', 
    borderRadius: 18, 
    padding: 16 
}, 

    // em desktop ocupa metade da tela (2 colunas)
    cardDesktop: { 
    width: '48.5%' 
}, 

    // título do card (nome da sala)
    cardTitle: { 
    fontSize: 17, 
    fontWeight: '800', 
    marginBottom: 4 
}, 

    // subtítulo (horário)
    cardSubtitle: { 
    fontSize: 14, 
    color: '#6B7A7A', 
    marginBottom: 10 
}, 

    // badge de status
    badge: { 
    alignSelf: 'flex-start', 
    paddingHorizontal: 12, 
    paddingVertical: 7, 
    borderRadius: 999 
}, 

    // cor quando está livre
    badgeFree: { 
    backgroundColor: '#DCEEDF' 
}, 

    // cor quando está ocupada
    badgeBusy: { 
    backgroundColor: '#F3DDD4'
}, 

    // texto do badge
    badgeText: { 
    fontSize: 13, 
    fontWeight: '700' 
}});