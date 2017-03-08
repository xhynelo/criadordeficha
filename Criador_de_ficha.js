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
  aparencia: mediano,
  idade: medio,
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
  }
}

RIQUEZA_PP = [-40, -20, -10, 0, 10, 30, 60, 120, 180]

RIQUEZA = [100, 2000, 5000, 10000, 20000, 50000, 200000, 1000000, 10000000]


function calcula_pp(){
  var pp = (RACAS[CHAR.raca].pp + RIQUEZA_PP[CHAR.riqueza] + (CHAR.renda + CHAR.divida + CHAR.pc_aumentdo) * 5)
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

})

