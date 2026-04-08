# Sistema Clínica SEP

## 📌 Sobre o Projeto

O **Sistema Clínica SEP** é uma aplicação desenvolvida com o objetivo de auxiliar na organização e gestão de atendimentos em uma clínica escola. O projeto foi criado visando atender necessidades reais do ambiente clínico, como controle de pacientes, organização de salas, gerenciamento de cancelamentos e monitoramento da frequência dos atendimentos.

A aplicação foi construída utilizando as tecnologias React Native e Expo, permitindo o desenvolvimento de uma interface moderna, responsiva e adaptável a diferentes dispositivos.

O sistema busca otimizar processos internos, reduzir falhas operacionais e melhorar a experiência dos usuários, tanto profissionais quanto administradores da clínica.

---

## Objetivos

### Objetivo Geral

Desenvolver um sistema clínico digital capaz de organizar e gerenciar informações relacionadas aos atendimentos, promovendo eficiência e controle dentro do ambiente clínico.

### Objetivos Específicos

- Criar uma interface intuitiva e de fácil navegação  
- Organizar informações clínicas em telas estruturadas  
- Implementar controle de presença e faltas  
- Gerenciar cancelamentos e remarcações  
- Exibir disponibilidade de salas  
- Aplicar responsividade para diferentes dispositivos  

---

## Tecnologias Utilizadas

- React Native  
- Expo  
- JavaScript (ES6+)  
- Componentização de interface  
- Hooks personalizados (useResponsive)  

---

## Estrutura do Projeto

O sistema foi desenvolvido com base no conceito de componentização, promovendo reutilização de código e padronização visual.

### 🔹 Componentes Principais

**Screen**  
Responsável pela estrutura base das telas, garantindo organização e padronização.

**BrandHeader**  
Componente de cabeçalho utilizado para exibir o título das telas.

**SectionCard**  
Elemento visual utilizado para agrupar informações em blocos organizados.

**useResponsive**  
Hook personalizado responsável por adaptar o layout para diferentes tamanhos de tela (mobile e desktop).

---

## Funcionalidades do Sistema

### Tela de Acesso

A tela de acesso permite a entrada do usuário no sistema. Embora ainda não esteja conectada a um banco de dados real, ela simula um ambiente de autenticação.

**Características:**
- Interface limpa e objetiva  
- Campos de entrada para usuário e senha  
- Botão de acesso ao sistema  

---

### 🏥 Tela de Salas

Responsável por exibir as salas disponíveis na clínica.

**Funcionalidades:**
- Listagem de salas  
- Exibição de horários  
- Status da sala:
  - Livre  
  - Ocupada  

**Importância:**  
Permite melhor organização dos atendimentos e evita conflitos de uso das salas.

---

### Tela de Cancelamentos e Remarcações

Gerencia solicitações feitas pelos pacientes.

**Informações exibidas:**
- Nome do paciente  
- Tipo de solicitação  
- Motivo  
- Quantidade de cancelamentos  

**Regra de negócio:**  
O sistema identifica quando o paciente ultrapassa o limite de cancelamentos, exibindo o status **"Limite excedido"**.

---

### Tela de Controle de Faltas

Responsável pelo monitoramento da frequência dos pacientes.

**Dados apresentados:**
- Presenças  
- Faltas  
- Última consulta  
- Observações  

**Importância:**  
Permite identificar padrões de comportamento e auxilia na gestão dos atendimentos.

---

## Interface e Experiência do Usuário

O sistema foi desenvolvido com foco em:

- Interface limpa e organizada  
- Uso de cards para melhor visualização  
- Tipografia legível  
- Uso de cores para indicar status  

O objetivo é proporcionar uma experiência simples, intuitiva e eficiente.

---

## Responsividade

O sistema utiliza o hook `useResponsive` para adaptar a interface conforme o dispositivo.

**Adaptações realizadas:**
- Ajuste de layout para desktop  
- Organização de elementos em grid  
- Centralização de conteúdo em telas maiores  

---

## Melhorias Futuras

- Integração com banco de dados  
- Sistema de autenticação real  
- Notificações automáticas  
- Dashboard com gráficos  
- Filtros e busca  
- Controle de usuários (Admin e Estagiário)  

---

## Autoria

Projeto desenvolvido por **Kaylane Coutinho**, como parte de atividade acadêmica na área de Tecnologia da Informação.

---

## Considerações Finais

O desenvolvimento do Sistema Clínica SEP permitiu a aplicação prática de conceitos importantes como:

- Componentização  
- Organização de código  
- Desenvolvimento de interfaces  
- Implementação de regras de negócio  

O projeto contribuiu significativamente para o desenvolvimento técnico e profissional da autora, aproximando a prática acadêmica das demandas reais do mercado.