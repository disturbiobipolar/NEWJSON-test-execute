// JSON com info sobre figuras históricas
const figurasHistoricas = [
    {
        "nome": "Cleópatra",
        "ocupação": "Rainha do Egito",
        "principaisRealizações": [
            "Aliança com Júlio César",
            "Relação com Marco Antônio",
            "Restauração do poder egípcio"
        ],
        "descrição": "Cleópatra VII foi a última rainha do Egito Ptolemaico, famosa por suas alianças políticas e sua inteligência.",
        "período": "Idade Antiga"
    },
    {
        "nome": "Júlio César",
        "ocupação": "General, Político, Ditador",
        "principaisRealizações": [
            "Conquista da Gália",
            "Reformas no Império Romano",
            "Assunção de poder como ditador"
        ],
        "descrição": "Júlio César foi um líder militar e político romano, cujas ações levaram à queda da República Romana e ao surgimento do Império Romano.",
        "período": "Idade Antiga"
    },
    {
        "nome": "Josef Stalin",
        "ocupação": "Líder soviético",
        "principaisRealizações": [
            "Transformação da União Soviética em uma potência industrial",
            "Grande Expurgo",
            "Vitória na Segunda Guerra Mundial"
        ],
        "descrição": "Stalin foi o líder da União Soviética de 1924 até sua morte. Ele implementou políticas totalitárias, resultando em grandes transformações, mas também em grande sofrimento para o povo soviético.",
        "período": "Idade Contemporânea"
    },
    {
        "nome": "Cristóvão Colombo",
        "ocupação": "Explorador, Navegador",
        "principaisRealizações": [
            "Descobrimento das Américas em 1492",
            "Estabelecimento de novas rotas comerciais",
            "Expedições ao Novo Mundo"
        ],
        "descrição": "Colombo foi um navegador genovês que fez a travessia do Oceano Atlântico em 1492, abrindo o caminho para a exploração e colonização europeia das Américas.",
        "período": "Idade Moderna"
    },
    {
        "nome": "Leonardo da Vinci",
        "ocupação": "Artista, Inventor, Cientista",
        "principaisRealizações": [
            "Pintura de 'Mona Lisa' e 'A Última Ceia'",
            "Desenhos e invenções de máquinas",
            "Avanços em anatomia e engenharia"
        ],
        "descrição": "Da Vinci foi um dos maiores gênios do Renascimento, cuja criatividade e invenções transcenderam as artes e ciências.",
        "período": "Idade Moderna"
    },
    {
        "nome": "Joana d'Arc",
        "ocupação": "Militar, Santa",
        "principaisRealizações": [
            "Liderança nas batalhas durante a Guerra dos Cem Anos",
            "Restauração da moral francesa",
            "Canônica como santa pela Igreja Católica"
        ],
        "descrição": "Joana d'Arc foi uma jovem camponesa que se tornou líder militar e santa. Sua coragem e fé desempenharam um papel crucial na vitória francesa na Guerra dos Cem Anos.",
        "período": "Idade Média"
    },
    {
        "nome": "Alexandre, o Grande",
        "ocupação": "Rei da Macedônia, Imperador",
        "principaisRealizações": [
            "Conquista do Império Persa",
            "Expansão do Império Macedônico",
            "Difusão da cultura grega"
        ],
        "descrição": "Alexandre foi um dos maiores conquistadores da história, e sua morte prematura resultou em um império vasto que se estendia de Grécia até o noroeste da Índia.",
        "período": "Idade Antiga"
    },
    {
        "nome": "Harald Bluetooth",
        "ocupação": "Rei da Dinamarca e Noruega",
        "principaisRealizações": [
            "Unificação da Dinamarca e Noruega",
            "Conversão ao cristianismo"
        ],
        "descrição": "Harald Bluetooth foi um rei viking, conhecido por sua unificação das tribos dinamarquesas e norueguesas, além de sua conversão ao cristianismo.",
        "período": "Idade Média"
    },
    {
        "nome": "Ivan, o Terrível",
        "ocupação": "Czar da Rússia",
        "principaisRealizações": [
            "Conquista de novos territórios",
            "Centralização do poder na Rússia",
            "Criação da Oprichnina"
        ],
        "descrição": "Ivan IV foi o primeiro czar da Rússia e ficou conhecido tanto por suas reformas quanto por sua crueldade e paranoia.",
        "período": "Idade Moderna"
    },
    {
        "nome": "Albert Einstein",
        "ocupação": "Físico",
        "principaisRealizações": [
            "Teoria da Relatividade",
            "Prêmio Nobel de Física de 1921",
            "Desenvolvimento da equação E=mc²"
        ],
        "descrição": "Einstein foi um dos maiores cientistas do século XX, desenvolvendo teorias revolucionárias que mudaram o entendimento da física.",
        "período": "Idade Contemporânea"
    },
    {
        "nome": "Huang Di",
        "ocupação": "Imperador Chinês",
        "principaisRealizações": [
            "Fundação da civilização chinesa",
            "Inovações na agricultura e medicina",
            "Desenvolvimento do sistema político chinês"
        ],
        "descrição": "Huang Di é considerado o Imperador Amarelo e é uma figura central na mitologia chinesa, associada ao início da civilização chinesa.",
        "período": "Idade Antiga"
    },
    {
        "nome": "Aristóteles",
        "ocupação": "Filósofo",
        "principaisRealizações": [
            "Fundação da lógica formal",
            "Desenvolvimento de várias áreas do conhecimento",
            "Teorias sobre política e ética"
        ],
        "descrição": "Aristóteles foi um filósofo grego cujas ideias influenciaram profundamente a filosofia ocidental, a ciência e a lógica.",
        "período": "Idade Antiga"
    },
    {
        "nome": "Alcibíades",
        "ocupação": "Político, General",
        "principaisRealizações": [
            "Liderança durante a Guerra do Peloponeso",
            "Alianças com Esparta e Atenas",
            "Influência política em Atenas"
        ],
        "descrição": "Alcibíades foi um político e general ateniense famoso por suas mudanças de lealdade durante a Guerra do Peloponeso.",
        "período": "Idade Antiga"
    },
    {
        "nome": "Rei Agamenon",
        "ocupação": "Rei de Micenas",
        "principaisRealizações": [
            "Liderança na Guerra de Troia",
            "Expansão de Micenas",
            "Aliança com outros reinos gregos"
        ],
        "descrição": "Agamenon foi o rei de Micenas e um dos principais líderes gregos durante a Guerra de Troia, conforme narrado na Ilíada.",
        "período": "Idade Antiga"
    },
    {
        "nome": "Imperador Augusto",
        "ocupação": "Primeiro Imperador Romano",
        "principaisRealizações": [
            "Estabelecimento do Império Romano",
            "Reformas políticas e administrativas",
            "Pax Romana"
        ],
        "descrição": "Augusto foi o primeiro imperador romano, conhecido por suas reformas e por estabelecer um longo período de paz e estabilidade no Império Romano.",
        "período": "Idade Antiga"
    },
    {
        "nome": "Zumbi dos Palmares",
        "ocupação": "Líder quilombola",
        "principaisRealizações": [
            "Liderança no Quilombo dos Palmares",
            "Resistência contra a escravidão",
            "Símbolo de luta pela liberdade"
        ],
        "descrição": "Zumbi foi o líder do Quilombo dos Palmares, uma das maiores resistências à escravidão no Brasil colonial.",
        "período": "Idade Moderna"
    },
    {
        "nome": "Rei Luís XVI",
        "ocupação": "Rei da França",
        "principaisRealizações": [
            "Reinado durante a Revolução Francesa",
            "Tentativa de fuga para Varennes",
            "Execução durante a Revolução Francesa"
        ],
        "descrição": "Luís XVI foi o último monarca da França antes da Revolução Francesa, e sua tentativa de fuga e subsequente execução marcaram o fim da monarquia.",
        "período": "Idade Contemporânea"
    },
    {
        "nome": "Maria Antonieta",
        "ocupação": "Rainha da França",
        "principaisRealizações": [
            "Esposa de Luís XVI",
            "Símbolo de excessos da monarquia",
            "Execução durante a Revolução Francesa"
        ],
        "descrição": "Maria Antonieta foi a esposa de Luís XVI, famosa por sua vida luxuosa e pelo infame comentário 'se não têm pão, que comam brioche'.",
        "período": "Idade Contemporânea"
    }
];

// acessar as informações
console.log(figurasHistoricas);
