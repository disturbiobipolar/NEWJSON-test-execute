// JSON com info sobre figuras históricas
const figurasHistoricas = [
    {
        "nome": "Cleópatra",
        "ocupacao": "Rainha do Egito",
        "principaisRealizacoes": [
            "Aliança com Júlio César",
            "Relação com Marco Antônio",
            "Restauração do poder egípcio"
        ],
        "descricao": "Cleópatra VII foi a última rainha do Egito Ptolemaico, famosa por suas alianças políticas e sua inteligência.",
        "periodo": "Idade Antiga",
        "fatospersonalidade": [
         "descrita como bela e sedutora",
         "uma grande estrategista",
         "a primeira de sua dinastia a aprender a língua egípcia",
         "a rainha egípcia mais memorável",
        ],
        "genero": "feminino"
    },
    {
        "nome": "Júlio César",
        "ocupacao": [
             "General",
              "Político",
               "Ditador",
            ],
        "principaisRealizacoes": [
            "Conquista da Gália",
            "Reformas no Império Romano",
            "Assunção de poder como ditador"
        ],
        "descricao": "Júlio César foi um líder militar e político romano, cujas ações levaram à queda da República Romana e ao surgimento do Império Romano.",
        "periodo": "Idade Antiga",
        "fatospersonalidade": [
        "um grande estrategista",
        "um ditador romano",
        "o primeiro a desafiar a democracia romana",
        "quem conquistou a Gália",
        "amante de Cleópatra",
        "uma inspiração para muitos líderes de sucesso",
        ],
        "genero": "masculino"
    },
    {
        "nome": "Josef Stalin",
        "ocupacao": "Líder soviético",
        "principaisRealizacoes": [
            "Transformação da União Soviética em uma potência industrial",
            "Grande Expurgo",
            "Vitória na Segunda Guerra Mundial"
        ],
        "descricao": "Stalin foi o líder da União Soviética de 1924 até sua morte. Ele implementou políticas totalitárias, resultando em grandes transformações, mas também em grande sofrimento para o povo soviético.",
        "periodo": "Idade Contemporânea",
        "fatospersonalidade": [
            "um revolucionário",
            "um comunista",
            "um ditador",
            "o líder dos soviéticos de 1922 até o ano de sua morte",
        ],
        "genero": "masculino"
    },
    {
        "nome": "Cristóvão Colombo",
        "ocupacao": "Explorador, Navegador",
        "principaisRealizacoes": [
            "Descobrimento das Américas em 1492",
            "Estabelecimento de novas rotas comerciais",
            "Expedições ao Novo Mundo",
        ],
        "descricao": "Colombo foi um navegador genovês que fez a travessia do Oceano Atlântico em 1492, abrindo o caminho para a exploração e colonização europeia das Américas.",
        "periodo": "Idade Moderna",
        "fatospersonalidade": [
        "um explorador do novo mundo",
        "um grande navegador",
        "o primeiro homem a comprovar que o mundo é redondo",
        "quem inspirou o nome do país Colômbia",
        ],
        "genero": "masculino"
    },
    {
        "nome": "Leonardo da Vinci",
        "ocupacao": "Artista, Inventor, Cientista",
        "principaisRealizacoes": [
            "Pintura de 'Mona Lisa' e 'A Última Ceia'",
            "Desenhos e invenções de máquinas",
            "Avanços em anatomia e engenharia"
        ],
        "descricao": "Da Vinci foi um dos maiores gênios do Renascimento, cuja criatividade e invenções transcenderam as artes e ciências.",
        "periodo": "Idade Moderna",
        "fatospersonalidade": [
        "um dos maiores artistas já vistos",
        "quem pintou a Monalisa",
        "além de um pintor famoso, também foi inventor",
        ],
        "genero": "masculino"
    },
    {
        "nome": "Joana d'Arc",
        "ocupacao": "Militar, Santa",
        "principaisRealizacoes": [
            "Liderança nas batalhas durante a Guerra dos Cem Anos",
            "Restauração da moral francesa",
            "Canônica como santa pela Igreja Católica"
        ],
        "descricao": "Joana d'Arc foi uma jovem camponesa que se tornou líder militar e santa. Sua coragem e fé desempenharam um papel crucial na vitória francesa na Guerra dos Cem Anos.",
        "periodo": "Idade Média",
        "fatospersonalidade": [
        "uma santa",
        "canonizada como santa pela Igreja Católica",
        "morta queimada",
        "executada por bruxaria",
        "uma figura importante na Guerra dos 100 anos",
        ],
        "genero": "feminino"
    },
    {
        "nome": "Alexandre, o Grande",
        "ocupacao": "Rei da Macedônia, Imperador",
        "principaisRealizacoes": [
            "Conquista do Império Persa",
            "Expansão do Império Macedônico",
            "Difusão da cultura grega"
        ],
        "descricao": "Alexandre foi um dos maiores conquistadores da história, e sua morte prematura resultou em um império vasto que se estendia de Grécia até o noroeste da Índia.",
        "periodo": "Idade Antiga",
        "fatospersonalidade":[
        "um grande estrategista",
        "loiro com olhos verdes",
        "um dos líderes mais influentes na história",
        "macedônio",
        "o primeiro grego a conquistar o Egito",
        ],
        "genero": "masculino"
    },
    {
        "nome": "Harald Bluetooth",
        "ocupacao": "Rei da Dinamarca e Noruega",
        "principaisRealizacoes": [
            "Unificação da Dinamarca e Noruega",
            "Conversão ao cristianismo"
        ],
        "descricao": "Harald Bluetooth foi um rei viking, conhecido por sua unificação das tribos dinamarquesas e norueguesas, além de sua conversão ao cristianismo.",
        "periodo": "Idade Média",
        "fatospersonalidade": [
        "rei da Noruega",
        "quem uniu a Noruega e a Dinamarca",
        "o primeiro rei cristão da Noruega",
        "inspiração para a tecnologia BlueTooth",
        ],
        "genero": "masculino"
    },
    {
        "nome": "Ivan, o Terrível",
        "ocupacao": "Czar da Rússia",
        "principaisRealizacoes": [
            "Conquista de novos territórios",
            "Centralização do poder na Rússia",
            "Criação da Oprichnina"
        ],
        "descricao": "Ivan IV foi o primeiro czar da Rússia e ficou conhecido tanto por suas reformas quanto por sua crueldade e paranoia.",
        "periodo": "Idade Moderna",
        "fatospersonalidade": [
         "czar russo",
         "um líder cruel",
        ],
        "genero": "masculino"
    },
    {
        "nome": "Albert Einstein",
        "ocupacao": "Físico",
        "principaisRealizacoes": [
            "Teoria da Relatividade",
            "Prêmio Nobel de Física de 1921",
            "Desenvolvimento da equação E=mc²"
        ],
        "descricao": "Einstein foi um dos maiores cientistas do século XX, desenvolvendo teorias revolucionárias que mudaram o entendimento da física.",
        "periodo": "Idade Contemporânea",
        "fatospersonalidade": [
       "um dos maiores gênios da idade contemporânea",
       "físico ilustre",
       "um ganhador do Prêmio Nobel de Física",
       "um dos maiores cientistas do século XX",
       "o maior pensador científico do século XX",
        ],
        "genero": "masculino"
    },
    {
        "nome": "Huang Di",
        "ocupacao": "Imperador Chinês",
        "principaisRealizacoes": [
            "Fundação da civilização chinesa",
            "Inovações na agricultura e medicina",
            "Desenvolvimento do sistema político chinês"
        ],
        "descricao": "Huang Di é considerado o Imperador Amarelo e é uma figura central na mitologia chinesa, associada ao início da civilização chinesa.",
        "periodo": "Idade Antiga",
        "fatospersonalidade": [
         "um lendário imperador chinês",
         "um dos três reis lendários da China",
         "o ancestral de todos os chineses da etnia Han",
         "quem introduziu o calendário chinês",
        ],
        "genero": "masculino"
    },
    {
        "nome": "Aristóteles",
        "ocupacao": "Filósofo",
        "principaisRealizacoes": [
            "Fundação da lógica formal",
            "Desenvolvimento de várias áreas do conhecimento",
            "Teorias sobre política e ética"
        ],
        "descricao": "Aristóteles foi um filósofo grego cujas ideias influenciaram profundamente a filosofia ocidental, a ciência e a lógica.",
        "periodo": "Idade Antiga",
        "fatospersonalidade": [
            "filósofo",
            "discípulo de Platão",
            "um dos pensadores mais importantes e influentes da civilização ocidental",
            "o inventor da lógica",
            "o professor de Alexandre, o Grande",
        
        ],
        "genero": "masculino"
    },
    {
        "nome": "Alcibíades",
        "ocupacao": "Político, General",
        "principaisRealizacoes": [
            "Liderança durante a Guerra do Peloponeso",
            "Alianças com Esparta e Atenas",
            "Influência política em Atenas"
        ],
        "descricao": "Alcibíades foi um político e general ateniense famoso por suas mudanças de lealdade durante a Guerra do Peloponeso.",
        "periodo": "Idade Antiga",
        "fatospersonalidade": [
            "um grande estrategista",
            "um político ateniense",
            "amante de Platão",
        ],
        "genero": "masculino"
    },
    {
        "nome": "Rei Agamenon",
        "ocupacao": "Rei de Micenas",
        "principaisRealizacoes": [
            "Liderança na Guerra de Troia",
            "Expansão de Micenas",
            "Aliança com outros reinos gregos"
        ],
        "descricao": "Agamenon foi o rei de Micenas e um dos principais líderes gregos durante a Guerra de Troia, conforme narrado na Ilíada.",
        "periodo": "Idade Antiga",
        "fatospersonalidade": [
            "o rei lendário de Micenas",
            "um herói grego",
            "um personagem na íliada, na Guerra de Troia",
        ],
        "genero": "masculino"
    },
    {
        "nome": "Imperador Augusto",
        "ocupacao": "Primeiro Imperador Romano",
        "principaisRealizacoes": [
            "Estabelecimento do Império Romano",
            "Reformas políticas e administrativas",
            "Pax Romana"
        ],
        "descricao": "Augusto foi o primeiro imperador romano, conhecido por suas reformas e por estabelecer um longo periodo de paz e estabilidade no Império Romano.",
        "periodo": "Idade Antiga",
        "fatospersonalidade": [
            "o fundador do Império Romano",
            "o primeiro imperador romano",
            "o sobrinho de Júlio Cesar",
            "o criador da Pax Romana",
        ],
        "genero": "masculino"
    },
    {
        "nome": "Zumbi dos Palmares",
        "ocupacao": "Líder quilombola",
        "principaisRealizacoes": [
            "Liderança no Quilombo dos Palmares",
            "Resistência contra a escravidão",
            "Símbolo de luta pela liberdade"
        ],
        "descricao": "Zumbi foi o líder do Quilombo dos Palmares, uma das maiores resistências à escravidão no Brasil colonial.",
        "periodo": "Idade Moderna",
        "fatospersonalidade": [
            "um líder quilombola",
            "um herói brasileiro",
            "um símbolo de luta pela liberdade",
        ],
        "genero": "masculino"
    },
    {
        "nome": "Rei Luís XVI",
        "ocupacao": "Rei da França",
        "principaisRealizacoes": [
            "Reinado durante a Revolução Francesa",
            "Tentativa de fuga para Varennes",
            "Execução durante a Revolução Francesa"
        ],
        "descricao": "Luís XVI foi o último monarca da França antes da Revolução Francesa, e sua tentativa de fuga e subsequente execução marcaram o fim da monarquia.",
        "periodo": [ 
            "Idade Contemporânea",
            "Idade Moderna",
    ],
        "fatospersonalidade": [
            "rei da França",
            "o último rei da França",
            "executado pela guilhotina",
        ],
        "genero": "masculino"
    },
    {
        "nome": "Maria Antonieta",
        "ocupacao": "Rainha da França",
        "principaisRealizacoes": [
            "Esposa de Luís XVI",
            "Símbolo de excessos da monarquia",
            "Execução durante a Revolução Francesa"
        ],
        "descricao": "Maria Antonieta foi a esposa de Luís XVI, famosa por sua vida luxuosa e pelo infame comentário 'se não têm pão, que comam brioche'.",
        "periodo": [
            "Idade Contemporânea",
            "Idade Moderna",
    ],
    "fatospersonalidade": [
     "rainha da França",
     "executada pela guilhotina",
    ],
    "genero": "feminino"
    }
];



