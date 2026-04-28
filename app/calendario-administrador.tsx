// arquivo app/calendario-administrador.tsx
// aqui eu organizei essa tela e deixei os comentários explicando minha parte do código
import React, { useMemo, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

type ConsultaStatus = 'Confirmada' | 'Pendente' | 'Remarcada' | 'Faltou';

type Consulta = {
  id: number;
  horario: string;
  paciente: string;
  profissional: string;
  sala: string;
  status: ConsultaStatus;
};

const agendaMock: Record<string, Consulta[]> = {
  '2026-04-08': [
    {
      id: 1,
      horario: '08:00',
      paciente: 'Ana Silva',
      profissional: 'Paulo Oliveira',
      sala: 'Sala 1',
      status: 'Confirmada',
    },
    {
      id: 2,
      horario: '09:00',
      paciente: 'Lucas Mendes',
      profissional: 'Carla Souza',
      sala: 'Sala 2',
      status: 'Pendente',
    },
    {
      id: 3,
      horario: '10:00',
      paciente: 'Maria Clara',
      profissional: 'João Pedro',
      sala: 'Sala Infantil',
      status: 'Remarcada',
    },
    {
      id: 4,
      horario: '11:00',
      paciente: 'Pedro Lima',
      profissional: 'Fernanda Alves',
      sala: 'Sala 3',
      status: 'Faltou',
    },
  ],
  '2026-04-09': [
    {
      id: 5,
      horario: '08:30',
      paciente: 'Juliana Costa',
      profissional: 'Paulo Oliveira',
      sala: 'Sala 1',
      status: 'Confirmada',
    },
    {
      id: 6,
      horario: '10:30',
      paciente: 'Beatriz Rocha',
      profissional: 'Carla Souza',
      sala: 'Sala 4',
      status: 'Pendente',
    },
  ],
  '2026-04-10': [
    {
      id: 7,
      horario: '09:00',
      paciente: 'Rafael Martins',
      profissional: 'João Pedro',
      sala: 'Sala de Supervisão',
      status: 'Confirmada',
    },
  ],
};

const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

function formatDateKey(date: Date) {
  const ano = date.getFullYear();
  const mes = String(date.getMonth() + 1).padStart(2, '0');
  const dia = String(date.getDate()).padStart(2, '0');
  return `${ano}-${mes}-${dia}`;
}

function formatDateLabel(date: Date) {
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

function getMonthMatrix(currentDate: Date) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const startDayOfWeek = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const matrix: (Date | null)[] = [];

  for (let i = 0; i < startDayOfWeek; i += 1) {
    matrix.push(null);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    matrix.push(new Date(year, month, day));
  }

  while (matrix.length % 7 !== 0) {
    matrix.push(null);
  }

  return matrix;
}

export default function AdminCalendarScreen() {
  const { width } = useWindowDimensions();

  const isSmallMobile = width <= 360;
  const isMobile = width <= 430;
  const isTablet = width > 430 && width < 900;
  const isDesktop = width >= 900;

  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 3, 1));
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 3, 8));

  const calendarDays = useMemo(() => getMonthMatrix(currentMonth), [currentMonth]);

  const selectedKey = formatDateKey(selectedDate);
  const consultasDoDia = agendaMock[selectedKey] || [];

  const daySize = isSmallMobile ? 40 : isMobile ? 44 : isTablet ? 50 : 54;
  const sidePadding = isSmallMobile ? 14 : isMobile ? 16 : 22;
  const titleSize = isSmallMobile ? 22 : isMobile ? 26 : 30;
  const patientSize = isSmallMobile ? 18 : isMobile ? 19 : 22;
  const timeSize = isSmallMobile ? 18 : isMobile ? 20 : 24;
  const monthTitleSize = isSmallMobile ? 16 : isMobile ? 18 : 20;

  function handlePreviousMonth() {
    setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  }

  function handleNextMonth() {
    setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  }

  function getStatusStyle(status: ConsultaStatus) {
    switch (status) {
      case 'Confirmada':
        return styles.badgeConfirmada;
      case 'Pendente':
        return styles.badgePendente;
      case 'Remarcada':
        return styles.badgeRemarcada;
      case 'Faltou':
        return styles.badgeFaltou;
      default:
        return styles.badgePendente;
    }
  }

  return (
    <LinearGradient
      colors={['#DCEEDF', '#D9EBE6', '#DCEEDF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingHorizontal: sidePadding, paddingVertical: isMobile ? 18 : 28 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.wrapper, isDesktop && styles.wrapperDesktop]}>
          <View
            style={[
              styles.topPill,
              {
                paddingHorizontal: isMobile ? 18 : 24,
                paddingVertical: isMobile ? 10 : 12,
                marginBottom: isMobile ? 14 : 18,
              },
            ]}
          >
            <Text style={[styles.topPillText, { fontSize: isMobile ? 14 : 16 }]}>
              Calendário Administrativo
            </Text>
          </View>

          <View
            style={[
              styles.card,
              isDesktop && styles.cardDesktop,
              {
                borderRadius: isMobile ? 24 : 34,
                paddingHorizontal: isMobile ? 14 : 22,
                paddingVertical: isMobile ? 18 : 26,
              },
            ]}
          >
            <Text style={[styles.title, { fontSize: titleSize }]}>
              Agenda Geral da Clínica
            </Text>

            <Text
              style={[
                styles.subtitle,
                {
                  fontSize: isMobile ? 13 : 14,
                  marginBottom: isMobile ? 18 : 26,
                  lineHeight: isMobile ? 18 : 20,
                },
              ]}
            >
              Visualize faltas, comparecimentos, pendências e reagendamentos
            </Text>

            <View style={[styles.monthHeader, { marginBottom: isMobile ? 14 : 18 }]}>
              <TouchableOpacity
                style={[
                  styles.monthButton,
                  {
                    width: isMobile ? 38 : 42,
                    height: isMobile ? 38 : 42,
                    borderRadius: isMobile ? 12 : 14,
                  },
                ]}
                onPress={handlePreviousMonth}
              >
                <Text style={[styles.monthButtonText, { fontSize: isMobile ? 20 : 24 }]}>
                  ‹
                </Text>
              </TouchableOpacity>

              <Text
                style={[
                  styles.monthTitle,
                  {
                    fontSize: monthTitleSize,
                    flex: 1,
                    textAlign: 'center',
                    marginHorizontal: 10,
                  },
                ]}
                numberOfLines={2}
              >
                {currentMonth.toLocaleDateString('pt-BR', {
                  month: 'long',
                  year: 'numeric',
                })}
              </Text>

              <TouchableOpacity
                style={[
                  styles.monthButton,
                  {
                    width: isMobile ? 38 : 42,
                    height: isMobile ? 38 : 42,
                    borderRadius: isMobile ? 12 : 14,
                  },
                ]}
                onPress={handleNextMonth}
              >
                <Text style={[styles.monthButtonText, { fontSize: isMobile ? 20 : 24 }]}>
                  ›
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={[
                styles.calendarContainer,
                {
                  borderRadius: isMobile ? 18 : 24,
                  padding: isMobile ? 10 : 16,
                  marginBottom: isMobile ? 16 : 20,
                },
              ]}
            >
              <View style={[styles.weekDaysRow, { marginBottom: isMobile ? 8 : 12 }]}>
                {diasSemana.map((dia) => (
                  <Text
                    key={dia}
                    style={[
                      styles.weekDayText,
                      {
                        fontSize: isSmallMobile ? 11 : isMobile ? 12 : 13,
                      },
                    ]}
                  >
                    {dia}
                  </Text>
                ))}
              </View>

              <View style={[styles.daysGrid, { rowGap: isMobile ? 8 : 10 }]}>
                {calendarDays.map((date, index) => {
                  if (!date) {
                    return (
                      <View
                        key={`empty-${index}`}
                        style={[styles.emptyDay, { height: daySize }]}
                      />
                    );
                  }

                  const dateKey = formatDateKey(date);
                  const hasAgenda = !!agendaMock[dateKey]?.length;
                  const isSelected = dateKey === selectedKey;

                  return (
                    <TouchableOpacity
                      key={dateKey}
                      style={[
                        styles.dayButton,
                        {
                          height: daySize,
                          borderRadius: isMobile ? 12 : 16,
                        },
                        isSelected && styles.dayButtonSelected,
                      ]}
                      onPress={() => setSelectedDate(date)}
                    >
                      <Text
                        style={[
                          styles.dayButtonText,
                          { fontSize: isMobile ? 13 : 15 },
                          isSelected && styles.dayButtonTextSelected,
                        ]}
                      >
                        {date.getDate()}
                      </Text>

                      {hasAgenda && (
                        <View
                          style={[
                            styles.dayDot,
                            {
                              width: isMobile ? 5 : 6,
                              height: isMobile ? 5 : 6,
                              marginTop: 3,
                            },
                            isSelected && styles.dayDotSelected,
                          ]}
                        />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            <View
              style={[
                styles.sectionHeader,
                {
                  paddingHorizontal: isMobile ? 14 : 18,
                  paddingVertical: isMobile ? 12 : 14,
                  borderTopLeftRadius: isMobile ? 18 : 22,
                  borderTopRightRadius: isMobile ? 18 : 22,
                },
              ]}
            >
              <Text
                style={[
                  styles.sectionHeaderText,
                  {
                    fontSize: isMobile ? 16 : 18,
                    lineHeight: isMobile ? 22 : 24,
                  },
                ]}
              >
                Agenda do dia — {formatDateLabel(selectedDate)}
              </Text>
            </View>

            <View
              style={[
                styles.sectionBody,
                {
                  padding: isMobile ? 10 : 14,
                  borderBottomLeftRadius: isMobile ? 18 : 22,
                  borderBottomRightRadius: isMobile ? 18 : 22,
                },
              ]}
            >
              {consultasDoDia.length === 0 ? (
                <View style={styles.emptyState}>
                  <Text style={styles.emptyStateTitle}>Nenhum atendimento encontrado</Text>
                  <Text style={styles.emptyStateText}>
                    Não há registros para a data selecionada.
                  </Text>
                </View>
              ) : (
                consultasDoDia.map((consulta) => (
                  <View
                    key={consulta.id}
                    style={[
                      styles.appointmentCard,
                      {
                        borderRadius: isMobile ? 16 : 20,
                        padding: isMobile ? 12 : 16,
                        marginBottom: 10,
                      },
                    ]}
                  >
                    <Text style={[styles.timeText, { fontSize: timeSize }]}>
                      {consulta.horario}
                    </Text>

                    <Text style={[styles.patientText, { fontSize: patientSize }]}>
                      {consulta.paciente}
                    </Text>

                    <Text style={[styles.metaText, { fontSize: isMobile ? 14 : 15 }]}>
                      {consulta.profissional}
                    </Text>

                    <Text style={[styles.metaText, { fontSize: isMobile ? 14 : 15 }]}>
                      {consulta.sala}
                    </Text>

                    <View
                      style={[
                        styles.statusBadge,
                        {
                          marginTop: 10,
                          paddingHorizontal: isMobile ? 12 : 14,
                          paddingVertical: isMobile ? 6 : 8,
                        },
                        getStatusStyle(consulta.status),
                      ]}
                    >
                      <Text
                        style={[
                          styles.statusBadgeText,
                          { fontSize: isMobile ? 12 : 14 },
                        ]}
                      >
                        {consulta.status}
                      </Text>
                    </View>
                  </View>
                ))
              )}
            </View>

            <TouchableOpacity
              style={[
                styles.backButton,
                {
                  marginTop: isMobile ? 18 : 22,
                  height: isMobile ? 50 : 56,
                  borderRadius: isMobile ? 16 : 18,
                },
              ]}
              onPress={() => router.replace('/acesso-administrador')}
            >
              <Text style={[styles.backButtonText, { fontSize: isMobile ? 15 : 17 }]}>
                Voltar ao painel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 20,
    paddingTop: 40,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapperDesktop: {
    alignItems: 'center',
  },
  topPill: {
    alignSelf: 'center',
    backgroundColor: '#D7E5DF',
    borderRadius: 18,
  },
  topPillText: {
    fontWeight: '800',
    color: '#35534A',
  },
  card: {
    width: '100%',
    backgroundColor: '#E8EBF2',
    shadowColor: '#b3e0ef',
    shadowOpacity: 0.18,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  cardDesktop: {
    maxWidth: 880,
    paddingHorizontal: 26,
    paddingVertical: 30,
  },
  title: {
    textAlign: 'center',
    fontWeight: '800',
    color: '#17243F',
    marginBottom: 6,
    lineHeight: 38,
  },
  subtitle: {
    textAlign: 'center',
    color: '#6E7485',
  },
  monthHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  monthButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D7DCE5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthButtonText: {
    fontWeight: '800',
    color: '#35534A',
    marginTop: -2,
  },
  monthTitle: {
    fontWeight: '800',
    color: '#17243F',
    textTransform: 'capitalize',
  },
  calendarContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D7DCE5',
  },
  weekDaysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weekDayText: {
    width: '14.2%',
    textAlign: 'center',
    fontWeight: '700',
    color: '#6E7485',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  emptyDay: {
    width: '14.2%',
  },
  dayButton: {
    width: '14.2%',
    backgroundColor: '#F7F9FC',
    borderWidth: 1,
    borderColor: '#E3E7EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayButtonSelected: {
    backgroundColor: '#538477',
    borderColor: '#538477',
  },
  dayButtonText: {
    fontWeight: '800',
    color: '#2A3A45',
  },
  dayButtonTextSelected: {
    color: '#FFFFFF',
  },
  dayDot: {
    borderRadius: 999,
    backgroundColor: '#E35CA8',
  },
  dayDotSelected: {
    backgroundColor: '#FFFFFF',
  },
  sectionHeader: {
    backgroundColor: '#7DB1BA',
  },
  sectionHeaderText: {
    fontWeight: '800',
    color: '#FFFFFF',
    textTransform: 'capitalize',
  },
  sectionBody: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: '#D7DCE5',
  },
  emptyState: {
    paddingVertical: 24,
    alignItems: 'center',
  },
  emptyStateTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#17243F',
    marginBottom: 6,
    textAlign: 'center',
  },
  emptyStateText: {
    fontSize: 14,
    color: '#6E7485',
    textAlign: 'center',
  },
  appointmentCard: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E3E7EE',
  },
  timeText: {
    fontWeight: '800',
    color: '#4296B6',
    marginBottom: 6,
  },
  patientText: {
    fontWeight: '800',
    color: '#20303A',
    marginBottom: 6,
  },
  metaText: {
    color: '#6E7485',
    marginBottom: 3,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    borderRadius: 999,
  },
  badgeConfirmada: {
    backgroundColor: '#DCEEDF',
  },
  badgePendente: {
    backgroundColor: '#F3E2B8',
  },
  badgeRemarcada: {
    backgroundColor: '#D8EEF6',
  },
  badgeFaltou: {
    backgroundColor: '#F4CFCF',
  },
  statusBadgeText: {
    fontWeight: '800',
    color: '#1E2D33',
  },
  backButton: {
    backgroundColor: '#538477',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
});