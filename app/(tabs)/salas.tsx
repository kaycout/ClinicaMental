import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BrandHeader, Screen, useResponsive } from '@/components/clinic-ui';

const salas = [{ nome: 'Sala 1',
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

export default function SalasScreen() {
  const { isDesktop } = useResponsive();

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.wrapper}>
          
          <BrandHeader 
            title="Salas da Clínica" 
            centered={isDesktop} 
          />

          <View
            style={[
              styles.cardsWrap,
              isDesktop && styles.cardsWrapDesktop
            ]}
          >
            {salas.map((sala, index) => (
              <View
                key={index}
                style={[
                  styles.card,
                  isDesktop && styles.cardDesktop
                ]}
              >
                <Text style={styles.cardTitle}>
                  {sala.nome}
                </Text>

                <Text style={styles.cardSubtitle}>
                  {sala.horario}
                </Text>

                <View
                  style={[
                    styles.badge,
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

const styles = StyleSheet.create

({ content: { paddingBottom: 24 }, 
    wrapper: { 
    width: '100%', 
    maxWidth: 1100, 
    alignSelf: 'center' 
}, 
    cardsWrap: { 
    gap: 12 
}, 
    cardsWrapDesktop: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    gap: 12 
}, 
    card: { 
    width: '100%', 
    backgroundColor: '#FFFFFF', 
    borderWidth: 1, 
    borderColor: '#DEE9E5', 
    borderRadius: 18, 
    padding: 16 
}, 
    cardDesktop: { 
    width: '48.5%' 
}, 
    cardTitle: { 
    fontSize: 17, 
    fontWeight: '800', 
    marginBottom: 4 
}, 
    cardSubtitle: { 
    fontSize: 14, 
    color: '#6B7A7A', 
    marginBottom: 10 
}, 
    badge: { 
    alignSelf: 'flex-start', 
    paddingHorizontal: 12, 
    paddingVertical: 7, 
    borderRadius: 999 
}, 
    badgeFree: { 
    backgroundColor: '#DCEEDF' 
}, 
    badgeBusy: { 
    backgroundColor: '#F3DDD4'
}, 
    badgeText: { 
    fontSize: 13, 
    fontWeight: '700' 
}});
