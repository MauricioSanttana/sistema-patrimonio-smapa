// Dados iniciais do patrimônio (apenas para primeira carga)
// Após o primeiro acesso, os dados serão gerenciados pelo localStorage

const dadosPatrimonioInicial = [
    {
        tombamento: "SMAPA-2024-001",
        descricao: "Notebook Dell Inspiron 15",
        categoria: "Equipamento TI",
        dataAquisicao: "2024-01-15",
        setor: "Administração",
        responsavel: "Maria Silva",
        localizacaoEspecifica: "Sala 101 - Mesa 1",
        situacao: "Ativo",
        observacoes: "Equipamento novo, garantia até janeiro/2027"
    },
    {
        tombamento: "SMAPA-2024-002",
        descricao: "Veículo Fiat Strada Working 1.4",
        categoria: "Veículos",
        dataAquisicao: "2024-02-20",
        setor: "Fiscalização",
        responsavel: "João Santos",
        localizacaoEspecifica: "Garagem - Vaga 3",
        situacao: "Ativo",
        observacoes: "Placa: ABC-1234, revisão em dia"
    },
    {
        tombamento: "SMAPA-2024-003",
        descricao: "Mesa de Escritório L 150x60cm",
        categoria: "Mobiliário",
        dataAquisicao: "2024-01-10",
        setor: "Administração",
        responsavel: "Maria Silva",
        localizacaoEspecifica: "Sala 101",
        situacao: "Ativo",
        observacoes: ""
    },
    {
        tombamento: "SMAPA-2023-045",
        descricao: "Impressora HP LaserJet Pro",
        categoria: "Equipamento TI",
        dataAquisicao: "2023-06-15",
        setor: "Administração",
        responsavel: "Pedro Costa",
        localizacaoEspecifica: "Sala 102 - Bancada",
        situacao: "Manutenção",
        observacoes: "Em manutenção desde 15/09/2024 - Troca de toner"
    },
    {
        tombamento: "SMAPA-2023-078",
        descricao: "Ar Condicionado Split 12000 BTUs",
        categoria: "Eletrodomésticos",
        dataAquisicao: "2023-11-20",
        setor: "Recepção",
        responsavel: "Ana Rodrigues",
        localizacaoEspecifica: "Recepção - Parede Norte",
        situacao: "Ativo",
        observacoes: "Manutenção preventiva realizada em agosto/2024"
    }
];

// IMPORTANTE: Este arquivo serve apenas como dados iniciais de exemplo
// Os dados reais serão armazenados no localStorage do navegador
// Você pode deletar este arquivo após a primeira carga, se desejar