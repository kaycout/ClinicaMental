// arquivo app/(tabs)/perfil.tsx
// aqui eu organizei essa tela e deixei os comentários explicando minha parte do código
import React from 'react';
// importando componentes básicos
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
// hook de navegação
import { useRouter } from 'expo-router';
// importando o gradiente pra deixar no mesmo padrão das telas de cadastro e login
import { LinearGradient } from 'expo-linear-gradient';
// importando os ícones que usei na tela
import { Ionicons } from '@expo/vector-icons';

// componente da tela de perfil do usuário
export default function PerfilScreen() {

  // hook pra navegação entre telas
  const router = useRouter();

  // aqui eu verifico a largura da tela pra adaptar no desktop
  const { width } = useWindowDimensions();
  const isDesktop = width >= 900;

  return (
    // fundo com gradiente no mesmo estilo das outras telas
    <LinearGradient
      colors={['#F4FBF8', '#EAF6F1', '#F8FCFA']}
      style={styles.background}
    >

      {/* scroll pra permitir rolagem */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        {/* card principal da tela */}
        <View style={[styles.card, isDesktop && styles.cardDesktop]}>

          {/* logo */}
          <View style={styles.logoArea}>
            <Text style={styles.psi}>Ψ</Text>

            <View>
              <Text style={styles.logoText}>SEP</Text>
              <Text style={styles.logoSubtitle}>CLÍNICA DE PSICOLOGIA</Text>
            </View>
          </View>

          {/* título da tela */}
          <Text style={styles.title}>Perfil do Usuário</Text>
          <Text style={styles.subtitle}>Informações da conta do estagiário</Text>

          {/* card com os dados do usuário */}
          <View style={styles.infoCard}>

            {/* cabeçalho do card */}
            <View style={styles.infoHeader}>
              <Text style={styles.infoHeaderText}>Dados do Usuário</Text>
            </View>

            {/* conteúdo do card */}
            <View style={styles.infoBody}>

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

            </View>
          </View>

          {/* card com ação de acesso */}
          <View style={styles.accessCard}>

            {/* cabeçalho da parte de acesso */}
            <View style={styles.accessHeader}>
              <Text style={styles.accessHeaderText}>Acesso</Text>
            </View>

            {/* corpo da parte de acesso */}
            <View style={styles.accessBody}>

              {/* botão de logout */}
              <TouchableOpacity
                style={styles.logoutButton}
                activeOpacity={0.85}
                onPress={() => {
                  router.replace('/login');
                }}
              >
                <Ionicons name="log-out-outline" size={20} color="#FFFFFF" />
                <Text style={styles.logoutText}>Sair da Conta</Text>
              </TouchableOpacity>

            </View>
          </View>

        </View>
      </ScrollView>
    </LinearGradient>
  );
}

// estilos da tela
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 22,
    paddingVertical: 28,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingHorizontal: 24,
    paddingVertical: 30,
    shadowColor: '#A6BDB8',
    shadowOpacity: 0.18,
    shadowRadius: 22,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },

  cardDesktop: {
    maxWidth: 520,
    alignSelf: 'center',
  },

  logoArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    marginBottom: 28,
  },

  psi: {
    fontSize: 62,
    fontWeight: '700',
    color: '#0C706E',
    lineHeight: 70,
  },

  logoText: {
    fontSize: 30,
    fontWeight: '900',
    color: '#0C706E',
  },

  logoSubtitle: {
    fontSize: 9,
    fontWeight: '800',
    color: '#0C706E',
  },

  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '900',
    color: '#171717',
    marginBottom: 8,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#7A8583',
    marginBottom: 28,
  },

  infoCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8E6',
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#A6BDB8',
    shadowOpacity: 0.14,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },

  infoHeader: {
    backgroundColor: '#0C706E',
    paddingHorizontal: 20,
    paddingVertical: 18,
  },

  infoHeaderText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },

  infoBody: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  infoBlock: {
    marginBottom: 16,
  },

  label: {
    fontSize: 11,
    fontWeight: '900',
    color: '#7B8986',
    marginBottom: 5,
    textTransform: 'uppercase',
  },

  value: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1E3A38',
    lineHeight: 21,
  },

  accessCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8E6',
    borderRadius: 14,
    overflow: 'hidden',
    shadowColor: '#A6BDB8',
    shadowOpacity: 0.14,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },

  accessHeader: {
    backgroundColor: '#9BC9A5',
    paddingHorizontal: 20,
    paddingVertical: 18,
  },

  accessHeaderText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },

  accessBody: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  logoutButton: {
    height: 48,
    backgroundColor: '#0C706E',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },

  logoutText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
  },
});