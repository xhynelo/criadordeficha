CHAR ={
  pp: {
    pp: 0,
    pp_t: 0,
    pp_r: 0,
    pp_d: 0,
  },
  raca: "humanos",
  riqueza: 3,
  renda: 0,
  divida: 0,
  pc_aumentdo: 0,
  aparencia: "mediano",
  idade: "medio",
  derivados: {
    forca: 0,
    agilidade: 0,
    carisma: 0,
    intuicao: 0,
    logica: 0,
    folego: 10,
    saude: 10,
    sanidade: 10,
    riqueza: 0,
  }
}

BASE ={
  pp: 100,
  f: 0,
  a: 0,
  c: 0,
  i: 0,
  l: 0,
  folego: 10,
  saude: 10,
  sanidade: 10,
  riqueza: 3,
  pc: 10000
};

RACAS = {
  humanos: {
    pp: 0,
    f: 0,
    a: 0,
    c: 0,
    i: 0,
    l: 0,
    folego: 10,
    saude: 10,
    sanidade: 10,
    riqueza: 0
  },
    elanos: {
    pp: 15,
    f: 0,
    a: 2,
    c: 0,
    i: 0,
    l: 0,
    folego: 10,
    saude: 10,
    sanidade: 10,
    riqueza: 0
  },
    orquinos: {
    pp: 25,
    f: 5,
    a: 0,
    c: -1,
    i: 0,
    l: 0,
    folego: 10,
    saude: 10,
    sanidade: 10,
    riqueza: -1
  },
    elfos: {
    pp: 30,
    f: -1,
    a: 4,
    c: 0,
    i: 1,
    l: 0,
    folego: 10,
    saude: 10,
    sanidade: 10,
    riqueza: 0
  },
    anoes: {
    pp: 20,
    f: 2,
    a: -1,
    c: 0,
    i: 0,
    l: 1,
    folego: 10,
    saude: 10,
    sanidade: 10,
    riqueza: 0
  },
    halfling: {
    pp: 0,
    f: -4,
    a: 5,
    c: 3,
    i: 0,
    l: 0,
    folego: 10,
    saude: 10,
    sanidade: 10,
    riqueza: -1
  },
    poes: {
    pp: 35,
    f: 6,
    a: 2,
    c: -2,
    i: -2,
    l: -2,
    folego: 10,
    saude: 10,
    sanidade: 10,
    riqueza: -1
  },
    thrii: {
    pp: 75,
    f: 5,
    a: 2,
    c: -2,
    i: 0,
    l: 1,
    folego: 20,
    saude: 10,
    sanidade: 10,
    riqueza: -2
  },
    krin: {
    pp: 55,
    f: 0,
    a: 2,
    c: 0,
    i: 4,
    l: 4,
    folego: 15,
    saude: 10,
    sanidade: 10,
    riqueza: -2
  },
    thruk: {
    pp: 75,
    f: +3,
    a: 2,
    c: 0,
    i: 0,
    l: 0,
    folego: 20,
    saude: 10,
    sanidade: 10,
    riqueza: -2
  },
    arachas: {
    pp: 0,
    f: 0,
    a: 5,
    c: -2,
    i: 0,
    l: 0,
    folego: 10,
    saude: 10,
    sanidade: 10,
    riqueza: -2
  },
    dyn: {
    pp: 45,
    f: 0,
    a: 0,
    c: 0,
    i: 0,
    l: 0,
    folego: 10,
    saude: 10,
    sanidade: 10,
    riqueza: 0
  },
    dragoes: {
    pp: 115,
    f: 6,
    a: 3,
    c: 0,
    i: 3,
    l: 2,
    folego: 10,
    saude: 10,
    sanidade: 10,
    riqueza: -2
  }
}

APARENCIA = {
  magrelo: {
    pp: -5
  },
  gordo: {
    pp: -5
  },
  obeso_morbido: {
    pp: -10
  },
  gigante: {
    pp: 10,
    forca: 2
  },
  nanismo: {
    pp: -10,
    forca: -4
  },
  horrendo: {
    pp: -20,
    carisma: -2,
    diplomacia: -2,
    intimidar: 2
  },
  feio: {
    pp: -10,
    carisma: -1
  },
  pouco_atraente: {
    pp: -5,
    carisma: -1
  },
  mediano: {
    pp: 0
  },
  atraente: {
    pp: 5,
    carisma: 1
  },
  bonito: {
    pp: 10,
    carisma: 1,
    adestrar: 1,
    blefar: 1,
    diplomacia: 1,
    disfarce: 1,
    lideranca: 1,
    performance: 1,
    sentir_motivacao: 1
  },
  esbelto: {
    pp: 15,
    carisma: 2,
    adestrar: 2,
    adestrar: 2,
    blefar: 2,
    diplomacia: 2,
    disfarce: 2,
    lideranca: 2,
    performance: 2,
    sentir_motivacao: 2
  }
}

IDADE = {
  adolescente: {
    forca: -2,
    intuicao: -1,
    phf: 1,
    pha: 1,
    phc: 1,
    phi: 1,
    phl: 1,
    num_habilidade_max: 3,
    num_max_hab_max: 1
  },
  adulto: {
    phf: 5,
    pha: 5,
    phc: 5,
    phi: 5,
    phl: 5,
    num_habilidade_max: 4,
    num_max_hab_max: 1
  },
  anciao: {
    forca: -6,
    agilidade: -6,
    saude: -6,
    folego: -8,
    velocidade: -0.4,
    phf: 11,
    pha: 11,
    phc: 11,
    phi: 11,
    phl: 11,
    num_habilidade_max: 4,
    num_max_hab_max: 2
  },
  idoso: {
    forca: -3,
    agilidade: -3,
    carisma: 0,
    intuicao: 0,
    logica: 0,
    saude: -3,
    folego: -6,
    sanidade: 0,
    velocidade: -0.2,
    phf: 9,
    pha: 9,
    phc: 9,
    phi: 9,
    phl: 9,
    num_habilidade_max: 4,
    num_max_hab_max: 1
  },
  jovem_adulto: {
    forca: 0,
    agilidade: 0,
    carisma: 0,
    intuicao: 0,
    logica: 0,
    saude: 0,
    folego: 0,
    sanidade: 0,
    velocidade: 0,
    phf: 3,
    pha: 3,
    phc: 3,
    phi: 3,
    phl: 3,
    num_habilidade_max: 4,
    num_max_hab_max: 1
  },
  meia_idade: {
    forca: -1,
    agilidade:-1,
    carisma: 0,
    intuicao: 0,
    logica: 0,
    saude: -2,
    folego: -2,
    sanidade: 0,
    velocidade: 0,
    phf: 7,
    pha: 7,
    phc: 7,
    phi: 7,
    phl: 7,
    num_habilidade_max: 4,
    num_max_hab_max: 2
  },
  primeiro_seculo: {
    forca: 0,
    agilidade: 0,
    carisma: 0,
    intuicao: 0,
    logica: 0,
    saude: 0,
    folego: 0,
    sanidade: 0,
    velocidade: 0,
    phf: 5,
    pha: 5,
    phc: 5,
    phi: 5,
    phl: 5,
    num_habilidade_max: 4,
    num_max_hab_max: 1
  },
  quinto_e_sexto_seculo: {
    forca: 0,
    agilidade: 0,
    carisma: 0,
    intuicao: 0,
    logica: 0,
    saude: 0,
    folego: 0,
    sanidade: 0,
    velocidade: 0,
    phf: 3,
    pha: 3,
    phc: 3,
    phi: 3,
    phl: 3,
    num_habilidade_max: 4,
    num_max_hab_max: 1
  },
  seculos_incontaveis: {
    forca: 0,
    agilidade: 0,
    carisma: 0,
    intuicao: 0,
    logica: 0,
    saude: 0,
    folego: 0,
    sanidade: 0,
    velocidade: 0,
    phf: 3,
    pha: 3,
    phc: 3,
    phi: 3,
    phl: 3,
    num_habilidade_max: 4,
    num_max_hab_max: 1
  },
  segundo_a_quarto_seculo: {
    forca: 0,
    agilidade: 0,
    carisma: 0,
    intuicao: 0,
    logica: 0,
    saude: 0,
    folego: 0,
    sanidade: 0,
    velocidade: 0,
    phf: 3,
    pha: 3,
    phc: 3,
    phi: 3,
    phl: 3,
    num_habilidade_max: 4,
    num_max_hab_max: 1
  },
  setimo_e_oitavo_seculo: {
    forca: 0,
    agilidade: 0,
    carisma: 0,
    intuicao: 0,
    logica: 0,
    saude: 0,
    folego: 0,
    sanidade: 0,
    velocidade: 0,
    phf: 3,
    pha: 3,
    phc: 3,
    phi: 3,
    phl: 3,
    num_habilidade_max: 4,
    num_max_hab_max: 1
  },
  ultimos_seculos: {
    forca: 0,
    agilidade: 0,
    carisma: 0,
    intuicao: 0,
    logica: 0,
    saude: 0,
    folego: 0,
    sanidade: 0,
    velocidade: 0,
    phf: 3,
    pha: 3,
    phc: 3,
    phi: 3,
    phl: 3,
    num_habilidade_max: 4,
    num_max_hab_max: 1
  }
}

RIQUEZA_PP = [-40, -20, -10, 0, 10, 30, 60, 120, 180]

RIQUEZA = [100, 2000, 5000, 10000, 20000, 50000, 200000, 1000000, 10000000]


function calcula_pp(){
  var pp = (RACAS[CHAR.raca].pp + RIQUEZA_PP[CHAR.riqueza] + (CHAR.renda + CHAR.divida + CHAR.pc_aumentdo) * 5 + APARENCIA[CHAR.aparencia].pp)
  return BASE.pp - pp;
}

function calcula_derivados (){
  CHAR.derivados.forca = RACAS[CHAR.raca].f;
  CHAR.derivados.agilidade = RACAS[CHAR.raca].a;
  CHAR.derivados.carisma = RACAS[CHAR.raca].c;
  CHAR.derivados.intuicao = RACAS[CHAR.raca].i;
  CHAR.derivados.logica = RACAS[CHAR.raca].l;
  CHAR.derivados.folego = RACAS[CHAR.raca].folego;
  CHAR.derivados.saude = RACAS[CHAR.raca].saude;
  CHAR.derivados.sanidade = RACAS[CHAR.raca].sanidade;
  CHAR.derivados.riqueza = RACAS[CHAR.raca].riqueza;
}

function calcula_pc(){
  var pc = RIQUEZA[CHAR.riqueza + CHAR.derivados.riqueza];
  return pc + pc * 0.25 * CHAR.pc_aumentdo;
}

function mundanca(){
  calcula_derivados ();
  $("#pp").text(calcula_pp());
  $("#pc").text(calcula_pc());
}


$(function () {
  var descrcoes = $(".descricao-popover");
  descrcoes.each(function(index){
    var descrcao = $(this);
    var delpop = descrcao.children(".del-pop");
    var title = descrcao.children('[data-toggle="popover"]');
    title.data("content", delpop.html());
    
  });
  $('[data-toggle="popover"]').popover({trigger: "hover", html: true});
  $(".descricao-popover .del-pop").remove();

  $(".escolha-raca").click(function(){
    CHAR.raca = ($(this).data("raca"));
    mundanca();
  })
  $(".escolha-riqueza").on("click", function () {
    CHAR.riqueza = parseInt($(this).data("riqueza"));
    mundanca();
  })
  $("#trocar_pontos_por_dinheiro").on("change", function(){
    CHAR.pc_aumentdo = parseInt($(this).val());
    mundanca();
  })
  $("#renda-independente").on("change", function(){
    CHAR.renda = parseInt($(this).val());
    mundanca();
  })
  $("#divida").on("change", function(){
    CHAR.divida = parseInt($(this).val());
    mundanca();
  })
  $(".escolha-aparencia").on("click", function(){
    CHAR.aparencia = ($(this).data("aparencia"));
    mundanca();
  })

})

