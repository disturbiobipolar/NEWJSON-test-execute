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
        "periodo": "Idade Antiga"
    },
    {
        "nome": "Júlio César",
        "ocupacao": [
             "General",
              "Político",
               "Ditador"
            ],
        "principaisRealizacoes": [
            "Conquista da Gália",
            "Reformas no Império Romano",
            "Assunção de poder como ditador"
        ],
        "descricao": "Júlio César foi um líder militar e político romano, cujas ações levaram à queda da República Romana e ao surgimento do Império Romano.",
        "periodo": "Idade Antiga"
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
        "periodo": "Idade Contemporânea"
    },
    {
        "nome": "Cristóvão Colombo",
        "ocupacao": "Explorador, Navegador",
        "principaisRealizacoes": [
            "Descobrimento das Américas em 1492",
            "Estabelecimento de novas rotas comerciais",
            "Expedições ao Novo Mundo"
        ],
        "descricao": "Colombo foi um navegador genovês que fez a travessia do Oceano Atlântico em 1492, abrindo o caminho para a exploração e colonização europeia das Américas.",
        "periodo": "Idade Moderna"
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
        "periodo": "Idade Moderna"
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
        "periodo": "Idade Média"
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
        "periodo": "Idade Antiga"
    },
    {
        "nome": "Harald Bluetooth",
        "ocupacao": "Rei da Dinamarca e Noruega",
        "principaisRealizacoes": [
            "Unificação da Dinamarca e Noruega",
            "Conversão ao cristianismo"
        ],
        "descricao": "Harald Bluetooth foi um rei viking, conhecido por sua unificação das tribos dinamarquesas e norueguesas, além de sua conversão ao cristianismo.",
        "periodo": "Idade Média"
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
        "periodo": "Idade Moderna"
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
        "periodo": "Idade Contemporânea"
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
        "periodo": "Idade Antiga"
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
        "periodo": "Idade Antiga"
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
        "periodo": "Idade Antiga"
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
        "periodo": "Idade Antiga"
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
        "periodo": "Idade Antiga"
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
        "periodo": "Idade Moderna"
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
        "periodo": "Idade Contemporânea"
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
        "periodo": "Idade Contemporânea"
    }
];



//agora os reino e bagulho

const reinosepaises = [ {

"nome": "Rússia de Kiev",
"periodo": [
 "idade média",
 "alta idade média"
],
"continente": "Europa",
"atuaispaises": [
    "Rússia", 
    "Ucrânia",
    "Bielorússia",
],
"principaisReis": [
    "Rurik",
    "Yaroslav, o Sábio",
    "Askold",
], 
"descricao": "Rússia de Kiev foi o estado que deu origem aos paises modernos eslavos. A Rússia de Kiev foi fundada por vikings.",
},
{ 

"nome":"Império Romano",
"periodo": [
    "idade antiga",
    "antiguidade clássica"
],
"continente": [
    "Europa",
    "África",
    "Ásia"
],
"atuaispaises": [
    "Itália",
    "Espanha",
    "França",
    "Portugal",
    "Grécia",
    "Alemanha",
    "Egito"
],
"principaisReis": [
    "Julio Cesar",
    "Augustus",
    "Nero",
    "Trajano",
],
"descricao": "O Império Romano foi simplesmente a maior potencia bélica e conquistadora em toda a idade antiga. Sua influência persiste até os dias de hoje.",
},
{

"nome":"União Soviética",
"periodo":"contemporâneo",
"continente": [
    "Europa",
    "Ásia"
],
"atuaispaises": [
    "Rússia",
    "Ucrânia",
    "Cazaquistão",
    "Lituânia",
    "Estônia",
    "Letônia",
    "Moldova",
],
"principaisReis": [
    "Vladimir Lenin",
    "Stalin",
    "Gorbachev",
],
"descricao": "A União Soviética foi a união de várias Repúblicas Soviéticas subnacionais, que se estabeleceu após a Revolução Russa liderada por Lenin."

},
{

"nome": "Inglaterra anglo-saxã",
"periodo": [
    "idade média",
    "antiguidade tardia",
    "alta idade média"
],
"continente": "Europa",
"atuaispaises": [
    "Inglaterra"
],
"principaisReis": [
    "Rei Alfredo, o Grande",
    "Canute, o Grande",
    "Etelstano",
    "Eduardo, o Confessor",
],
"descricao": "O reino anglo-saxão da Inglaterra foi um reino "

},
{
"nome": "Reino Ptolemaico",
"periodo": [
    "idade antiga",
    "antiguidade clássica"
],
"continente": [
"África",
"Ásia",
"Europa",
],
"atuaispaises": [
    "Egito",
    "Palestina",
    "Sudão",
],
"principaisReis": [
    "Cleópatra VII",
    "Ptolomeu I",
    "Berenice III",
],
"descricao": "O Reino Ptolomaico, criado após a morte de Alexandre, o Grande. Durante todo o reinado ptolomaico, todos os faraós eram de origem helenística. O reino teve seu fim em 30 a.C, com a conquista romana e a morte de Cleópatra."
},
{
"nome": "Império Babilônico",
"periodo": [
    "idade antiga",
    "idade do ferro",
    "idade do bronze",
],
"continente": [
    "Ásia",
    "África"
],
"atuaispaises": [
    "Iraque",
    "Palestina",
    "Líbano",
],
"principaisReis": [
    "Hamurabi",
    "Ciro, o Grande",
    "Marduk"
],
"descricao": "Localizado na Mesopotâmia, foi um dos berços da civilização, um dos principais impérios da antiguidade. Ciro, o Grande e outros líderes serviram de exemplo e inspiração para generais como Alexandre, o Grande. ",
},
{
 "nome": "Império Bizantino",
 "periodo": [
    "antiguidade tardia",
    "idade média",
    "alta idade média",
    "idade média plena",
    "idade média tardia"
 ],
 "continente": [
    "Europa",
    "África",
    "Ásia",
    "Eufrásia"
 ],
 "atuaispaises": [
    "Grécia",
    "Itália",
    "Turquia",
    "Palestina",
    "Bulgária",
    "Chipre",
    "Macedônia",
 ],
 "principaisReis": [
    "Constantino, o Grande",
    "Teodósio II",
    "Justiniano, o Grande",
    "Basílio II",
    "Zoé"
 ],
 "curiosidadesDicas": [
    "Um dos impérios que mais duraram na história",
    "Tem herança romana",
    "Sede da igreja ortodóxa"
],
 "descricao": "O herdeiro da cultura romana,império cristão que durou mais de 1000 anos, até sua queda ao império Otomano."
},
{
    "nome": "Esparta",
    "periodo": [
        "idade antiga",
        "idade do bronze",
        "antiguidade clássica",
    ],
    "continente": "Europa",
    "atuaispaises": "Grécia",
    "principaisReis": [
       "Menelau",
       "Leônidas I"
    ],
    "descricao": "Esparta foi uma das cidade-estado gregas mais memoráveis da antiguidade clássica, lembrada por sua cultura extxremamente militar e guerreira."
   },
   {
    "nome": "Império Mongol",
    "periodo": [
        "idade média",
        "idade média plena",
        "idade média tardia"
    ],
    "continente": [ 
        "Ásia",
        "Europa"
    ],
    "atuaispaises": [
       "Mongólia",
       "China",
       "Ucrânia",
       "Rússia",
       "Cazaquistão",
       "Turquia",
       "Paquistão",
       "Coreia do Sul",
       "Coreia do Norte",
       "Irã",
       "Afeganistão",
       "Uzbequistão",
       "Índia",
       "Turquemenistão",
       "Moldávia",
       "Bielorússia",
       "Armênia",
       "Azerbaijão",
       "Afeganistão"
    ],
    "principaisReis": [
       "Genghis Khan",
       "Kublai Khan"
    ],
   "curiosidadesDicas": [
    "Foi o maior império da história",
    "Devastou as estepes da eurásia",
    "Império que derrubou a China e a Rússia de Kiev"
   ],
    "descricao": "Maior império já visto na história, devastou as estepes da eurásia e deu um fim à Rússia de Kiev."
   },
   {
    "nome": "Império Aquemênida",
    "periodo": [
        "idade antiga",
        "antiguidade clássica",
        "antiguidade oriental",
    ],
    "continente": [
        "África",
        "Europa",
        "Ásia"
    ],
    "atuaispaises": [
       "Afeganistão",
       "Irã",
       "Armênia",
       "Azerbaijão",
       "Palestina",
       "Síria",
       "Índia",
       "Egito",
       "Bulgária",
       "Turquia",
       "Romênia"
    ],
    "principaisReis": [
       "Ciro, o Grande",
       "Dario III",
       "Alexandre, o Grande"
    ],
    "descricao": "O Império Aquemênida foi o primeiro império global da idade antiga; seu território alcançava mais de dois continentes e maior parte dos países asiáticos e até a Europa. Teve seu fim na invasão de Alexandre, o Grande."
   },
];