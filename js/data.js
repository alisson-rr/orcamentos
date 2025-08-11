const mentorCredentials = [
    { icon: 'award', text: '<strong>Formação Sólida:</strong> Professor Licenciado, Pós-graduado em Neuropsicopedagogia, TDAH e PNL.' },
    { icon: 'shield-check', text: '<strong>Experiência Comprovada:</strong> +15 anos de vivência e estudo, ajudando milhares de alunos.' },
    { icon: 'users', text: '<strong>Prova Social Inquestionável:</strong> +760 mil seguidores no TikTok e +450 mil no Instagram.' },
    { icon: 'verified', text: '<strong>Reconhecido por especialistas:</strong> Médicos, psicólogos e milhares de "Indistraíveis" validam seu método.' }
];

const howItWorks = [
    {
        icon: 'calendar-days',
        title: 'Jornada de 6 Meses',
        description: 'Acesso total à plataforma e ao método completo para uma transformação profunda e duradoura.'
    },
    {
        icon: 'clapperboard',
        title: 'INDISTRAFLIX',
        description: 'Biblioteca de conteúdo multiformato (aulas, workshops) para assistir quando e onde quiser.'
    },
    {
        icon: 'video',
        title: 'Sessões de Mentoria',
        description: 'Encontros semanais ao vivo para tirar dúvidas, receber direcionamento e se manter no caminho certo.'
    },
    {
        icon: 'message-circle',
        title: 'Comunidade Exclusiva',
        description: 'Esteja cercado de pessoas que entendem seus desafios e celebram suas vitórias. Chega de se sentir sozinho.'
    }
];

const benefits = [
    {
        icon: 'heart',
        title: 'Melhor qualidade de vida',
        description: 'Transforme sua rotina diária em uma experiência mais equilibrada e satisfatória.'
    },
    {
        icon: 'calendar-check',
        title: 'Dia-a-dia mais organizado',
        description: 'Desenvolva sistemas eficazes para gerenciar suas tarefas e compromissos diários.'
    },
    {
        icon: 'users',
        title: 'Relacionamentos mais harmoniosos e estáveis',
        description: 'Melhore sua comunicação e conexão com as pessoas ao seu redor.'
    },
    {
        icon: 'trending-up',
        title: 'Mais produtividade para o trabalho, estudos e outros projetos',
        description: 'Aumente sua eficiência e capacidade de execução em todas as áreas da vida.'
    },
    {
        icon: 'baby',
        title: 'Se tornar uma mãe e/ou pai melhor',
        description: 'Desenvolva habilidades para ajudar ainda mais os filhos TDAHs.'
    },
    {
        icon: 'check-circle',
        title: 'Finalizar projetos, cursos, trabalhos e estudos',
        description: 'Conquiste a habilidade de concluir aquilo que você começa.'
    },
    {
        icon: 'zap',
        title: 'Mais praticidade e execução de tarefas',
        description: 'Desenvolva métodos práticos para colocar suas ideias em ação.'
    },
    {
        icon: 'target',
        title: 'Mais foco nos objetivos de vida',
        description: 'Mantenha-se direcionado para aquilo que realmente importa para você.'
    },
    {
        icon: 'brain',
        title: 'Profundo autoconhecimento',
        description: 'Entenda o funcionamento do seu próprio cérebro e como otimizá-lo.'
    },
    {
        icon: 'user-check',
        title: 'Contato de profissionais capacitados',
        description: 'Acesso a especialistas para diagnóstico e tratamento do TDAH.'
    },
    {
        icon: 'unlock',
        title: 'Destravar o potencial interno',
        description: 'Libere sua capacidade para realização de projetos estagnados.'
    },
    {
        icon: 'settings',
        title: '"Domar" o cérebro acelerado e hiperativo',
        description: 'Aprenda técnicas para controlar e direcionar sua energia mental.'
    }
];

const bonuses = [
    {
        title: 'Sessões de Resgate - Semanal',
        description: 'A pauta são os desafios de vocês. Acontecem toda semana e nós tomamos café da manhã juntos em conferência ao vivo, onde você pode pedir ajuda com algum desafio específico.',
        icon: 'coffee'
    },
    {
        title: 'Sessões Pomodoro Indistraíveis - Diariamente',
        description: 'Faça sair do papel aquelas tarefas junto com a gente. Compartilhamos uns com os outros a nossa lista de tarefas e um cronômetro compartilhado conta os blocos de foco e de intervalo.',
        icon: 'timer'
    },
    {
        title: 'Sessões Nosso Indistraível',
        description: 'Gravações de LIVES dos meus Rituais INDISTRAÍVEIS desenvolvidos para nossos cérebros hiperativos, explicados detalhe por detalhe.',
        icon: 'sparkles'
    },
    {
        title: 'Big Brother Bruno',
        description: 'Nutricionistas, Psiquiatras, Neurologistas especialistas em TDAH e que possuem TDAH. Acesso imediato às gravações já realizadas, e acesso às próximas Lives.',
        icon: 'eye'
    },
    {
        title: 'Curso de Estilo de Vida Indistraível',
        description: 'Sessão de Mentoria com especialistas nas áreas de Nutrição, Medicação, Estilo de vida, Criação de Hábitos, Dislexia e Sexualidade.',
        icon: 'heart-pulse'
    }
];

const bonusExtras = [
    {
        title: 'Mentoria Dislexia e TDAH - c/ Pippo',
        description: 'Especialista em dislexia e TDAH para ajudar com desafios específicos de aprendizagem.',
        icon: 'book-open'
    },
    {
        title: 'Mentoria SAÚDE MENTAL DA MULHER e TDAH - c/ DrA. CHRISTIANE RIBEIRO',
        description: 'Abordagem especializada para mulheres com TDAH e questões de saúde mental.',
        icon: 'heart'
    },
    {
        title: 'Mentoria Além da Medicação - c/ Dr David Sender',
        description: 'Estratégias complementares ao tratamento medicamentoso do TDAH.',
        icon: 'pill'
    },
    {
        title: 'Mentoria Nutrição pro TDAH - c/ Adriana Bueno',
        description: 'Alimentação estratégica para otimizar o funcionamento cerebral no TDAH.',
        icon: 'apple'
    },
    {
        title: 'Mentoria TDAH e Hábitos - c/ Dr Guilherme Kling',
        description: 'Como criar e manter hábitos saudáveis com TDAH.',
        icon: 'repeat'
    },
    {
        title: 'Mentoria Atividades físicas - Diego, Saúde Rotina',
        description: 'Exercícios e atividades físicas adaptadas para pessoas com TDAH.',
        icon: 'activity'
    },
    {
        title: 'Mentoria Direitos do TDAH - c/ Dra Erika Viana',
        description: 'Conheça seus direitos legais e como exercê-los.',
        icon: 'scale'
    },
    {
        title: 'Mentoria Cérebro e TDAH - c/ Dra Raquel Araújo',
        description: 'Entenda a neurociência por trás do TDAH.',
        icon: 'brain'
    },
    {
        title: 'Mentoria Medicação e TDAH - c/ Dr Bruno Terra',
        description: 'Tudo sobre medicamentos para TDAH com especialista.',
        icon: 'stethoscope'
    },
    {
        title: 'Bônus: Gravação da Temporada TDAH Indistraível',
        description: 'Acesso completo às gravações de temporadas anteriores.',
        icon: 'video'
    }
];

const testimonials = [
    {
        videoId: 'hdSdnEsyaac',
        name: 'Mariana S.',
        role: 'Advogada',
        quote: 'Finalmente terminei minha pós-graduação! Depois de dois anos travada, usei as técnicas da mentoria e consegui entregar meu TCC. Foi a melhor sensação do mundo.'
    },
    {
        videoId: 'q6DAONbQ49U',
        name: 'Rafael P.',
        role: 'Empreendedor',
        quote: 'Minha casa e minha mente nunca estiveram tão organizadas. O método não mudou só minha produtividade no trabalho, mudou minha qualidade de vida.'
    },
    {
        videoId: 'ZWHGym_Daac',
        name: 'Júlia C.',
        role: 'Designer',
        quote: 'Pela primeira vez, eu sinto que tenho o controle. Antes eu era refém da minha ansiedade e procrastinação. Hoje, eu sei o que fazer para ter um dia produtivo.'
    },
    {
        videoId: '2DzOD-6ioy4',
        name: 'Lucas M.',
        role: 'Estudante',
        quote: 'Eu achava que nunca ia conseguir passar no concurso. A mentoria me deu a organização e a disciplina que faltavam. A aprovação veio!'
    }
];

