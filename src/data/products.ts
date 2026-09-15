import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-01',
    name: 'Piloto Automático Elétrico Agres IsoView',
    category: 'piloto',
    categoryLabel: 'Piloto Automático',
    brand: 'Agres',
    model: 'IsoView E-Drive',
    mainImage: '/piloto-agres-isoview.png',
    gallery: [
      '/piloto-agres-isoview.png',
      'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Sistema de direcionamento automático elétrico de alta precisão para tratores, pulverizadores e colhedoras.',
    description: 'O Piloto Automático Elétrico IsoView da Agres proporciona extrema precisão nas operações no campo, reduzindo o amassamento da cultura, otimizando o tempo de trabalho e diminuindo a fadiga do operador.',
    specifications: [
      { label: 'Tipo de Acionamento', value: 'Motor Elétrico de Alto Torque' },
      { label: 'Precisão', value: 'Sub-métrico a RTK (conforme sinal)' },
      { label: 'Compatibilidade', value: 'Multi-marcas e modelos de tratores' },
      { label: 'Interface', value: 'Tela Touchscreen Colorida de Alta Resolução' },
      { label: 'Graus de Liberdade', value: 'Compensação de Inclinação 3D' }
    ],
    applications: [
      'Preparo do Solo',
      'Plantio de Precisão',
      'Pulverização Agrícola',
      'Adubação em Linha'
    ],
    price: null,
    promoPrice: null,
    availability: 'Disponível',
    featured: true,
    status: 'ativo'
  },
  {
    id: 'prod-02',
    name: 'Receptor GNSS Agres Agronave GPS',
    category: 'antenas',
    categoryLabel: 'Antenas & Receptores',
    brand: 'Agres',
    model: 'Agronave L1/L2',
    mainImage: '/receptor-gnss-agronave.png',
    gallery: [
      '/receptor-gnss-agronave.png',
      'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Receptor GNSS multifrequência projetado para operações exigentes de mapeamento e orientação agrícola.',
    description: 'Antena e receptor GNSS integrados de alta sensibilidade para rastreamento de satélites GPS, GLONASS e Galileo, garantindo sinal estável e confiável em condições adversas.',
    specifications: [
      { label: 'Frequências', value: 'L1 / L2 / L5' },
      { label: 'Constelações', value: 'GPS, GLONASS, Galileo, BeiDou' },
      { label: 'Taxa de Atualização', value: 'Até 20Hz' },
      { label: 'Gabinete', value: 'IP67 Resistente a Poeira e Água' }
    ],
    applications: [
      'Guia de Barra (Barra de Luz)',
      'Piloto Automático',
      'Mapeamento de Linhas de Plantio'
    ],
    price: null,
    promoPrice: null,
    availability: 'Disponível',
    featured: true,
    status: 'ativo'
  },
  {
    id: 'prod-03',
    name: 'Monitor de Guiamento IsoView 7"',
    category: 'monitores',
    categoryLabel: 'Monitores & Consoles',
    brand: 'Agres',
    model: 'IsoView 700',
    mainImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Console intuitivo touchscreen de 7 polegadas para controle de barras, piloto e aplicação à taxa variável.',
    description: 'O Monitor IsoView 7" integra navegação e controle de taxa variável com uma interface em português extremamente simples e amigável. Ideal para controle de pulverização e fertilização.',
    specifications: [
      { label: 'Display', value: '7" Touchscreen Antirreflexo' },
      { label: 'Alimentação', value: '12V DC Veicular' },
      { label: 'Conectividade', value: 'USB, CAN-Bus, Serial RS232' },
      { label: 'Armazenamento', value: 'Exportação de mapas via Pen Drive (KML/SHP)' }
    ],
    applications: [
      'Controle de Pulverização',
      'Desligamento de Seções',
      'Guiamento Virtual'
    ],
    price: null,
    promoPrice: null,
    availability: 'Disponível',
    featured: false,
    status: 'ativo'
  },
  {
    id: 'prod-04',
    name: 'Sistema de Sensores Greco Agro Tech',
    category: 'sensores',
    categoryLabel: 'Sensores & Telemetria',
    brand: 'Greco Agro Tech',
    model: 'Greco Sensing Pod',
    mainImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Módulo de telemetria e diagnóstico eletrônico para monitoramento em tempo real de implementos agrícolas.',
    description: 'Solução da Greco Agro Tech para leitura contínua de sensores no maquinário, identificação prévia de falhas elétricas/hidráulicas e envio de diagnósticos em campo.',
    specifications: [
      { label: 'Sensores Suportados', value: 'Pressão, Vazão, Rotação e Temperatura' },
      { label: 'Protocolo de Comunicação', value: 'ISOBUS / CAN-Bus Agrícola' },
      { label: 'Tensão de Operação', value: '9V a 32V DC' }
    ],
    applications: [
      'Diagnóstico Eletrônico em Campo',
      'Monitoramento de Plantadeiras',
      'Telemetria de Máquinas'
    ],
    price: null,
    promoPrice: null,
    availability: 'Sob Consulta',
    featured: true,
    status: 'ativo'
  },
  {
    id: 'prod-05',
    name: 'Kit Chicotes & Conectores de Precisão',
    category: 'pecas',
    categoryLabel: 'Peças & Acessórios',
    brand: 'AgroVision',
    model: 'Chicote Master Agres/Greco',
    mainImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Chicotes blindados e adaptadores reforçados para instalações de GPS, Antenas e Pilotos Automáticos.',
    description: 'Conjunto de cabos de grau automotivo com proteção IP68 contra umidade e trepidação, garantindo sinal sem ruídos para monitores e receptores agrícolas.',
    specifications: [
      { label: 'Proteção', value: 'Malha trançada reforçada e vedação de silicone' },
      { label: 'Comprimento', value: 'Sob medida / Padrão 5m e 8m' },
      { label: 'Conectores', value: 'Deutsch / Amphenol IP68' }
    ],
    applications: [
      'Instalação de Monitores',
      'Reparo de Chicotes Danificados',
      'Conexão de Antenas GNSS'
    ],
    price: null,
    promoPrice: null,
    availability: 'Disponível',
    featured: false,
    status: 'ativo'
  },
  {
    id: 'prod-06',
    name: 'Módulo de Correção de Sinal RTK AgroVision',
    category: 'antenas',
    categoryLabel: 'Antenas & Receptores',
    brand: 'AgroVision MS',
    model: 'RTK Link Radio/4G',
    mainImage: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80'
    ],
    shortDescription: 'Módulo de transmissão de correção centimétrica para máximo rendimento no plantio e sulcamento.',
    description: 'Equipamento para recepção de sinais de alta precisão RTK/NTRIP via rádio UHF ou telefonia celular 4G, permitindo precisão de 2,5 cm de passada a passada.',
    specifications: [
      { label: 'Precisão Relativa', value: '< 2,5 cm' },
      { label: 'Modos', value: 'Radio UHF 450MHz e Modulo Modem 4G Multi-Operadora' },
      { label: 'Latência', value: '< 1 segundo' }
    ],
    applications: [
      'Plantio de Milho e Soja',
      'Sulcamento de Cana',
      'Pulverização com Seção por Seção'
    ],
    price: null,
    promoPrice: null,
    availability: 'Sob Encomenda',
    featured: false,
    status: 'ativo'
  }
];
