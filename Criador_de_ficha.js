
BASE ={
  pp: 100,
  f: 0,
  a: 0,
  c: 0,
  i: 0,
  l: 0,
  folego: 0,
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
    folego: 0,
    riqueza: 0
  },
    elanos: {
    pp: 15,
    f: 0,
    a: 2,
    c: 0,
    i: 0,
    l: 0,
    folego: 0,
    riqueza: 0
  },
    orquinos: {
    pp: 25,
    f: 5,
    a: 0,
    c: -1,
    i: 0,
    l: 0,
    folego: 0,
    riqueza: -1
  },
    elfos: {
    pp: 30,
    f: -1,
    a: 4,
    c: 0,
    i: 1,
    l: 0,
    folego: 0,
    riqueza: 0
  },
    anoes: {
    pp: 20,
    f: 2,
    a: -1,
    c: 0,
    i: 0,
    l: 1,
    folego: 0,
    riqueza: 0
  },
    halfling: {
    pp: 0,
    f: -4,
    a: 5,
    c: 3,
    i: 0,
    l: 0,
    folego: 0,
    riqueza: -1
  },
    poes: {
    pp: 35,
    f: 6,
    a: 2,
    c: -2,
    i: -2,
    l: -2,
    folego: 0,
    riqueza: -1
  },
    thrii: {
    pp: 75,
    f: 5,
    a: 2,
    c: -2,
    i: 0,
    l: 1,
    folego: 10,
    riqueza: -2
  },
    krin: {
    pp: 55,
    f: 0,
    a: 2,
    c: 0,
    i: 4,
    l: 4,
    folego: 5,
    riqueza: -2
  },
    thruk: {
    pp: 75,
    f: +3,
    a: 2,
    c: 0,
    i: 0,
    l: 0,
    folego: 10,
    riqueza: -2
  },
    arachas: {
    pp: 0,
    f: 0,
    a: 5,
    c: -2,
    i: 0,
    l: 0,
    folego: 0,
    riqueza: -2
  },
    dyn: {
    pp: 45,
    f: 0,
    a: 0,
    c: 0,
    i: 0,
    l: 0,
    folego: 0,
    riqueza: 0
  },
    dragoes: {
    pp: 115,
    f: 6,
    a: 3,
    c: 0,
    i: 3,
    l: 2,
    folego: 0,
    riqueza: -2
  }
}

RIQUEZA_PP = [-40, -20, -10, 0, 10, 30, 60, 120, 180]

RIQUEZA = [100, 2000, 5000, 10000, 20000, 50000, 200000, 1000000, 10000000]

RACA = "humanos"

PC_I = 3

PC_P_PP = 0

RENDA_I = 0

DIVIDA = 0

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
    RACA = ($(this).data("raca"));
    mundanca();
  })
  $(".escolha-riqueza").on("click", function () {
    PC_I = parseInt($(this).data("riqueza"));
    mundanca();
  })
  $("#trocar_pontos_por_dinheiro").on("change", function(){
    PC_P_PP = $(this).val();
    mundanca();
  })
  $("#renda-independente").on("change", function(){
    RENDA_I = $(this).val();
    mundanca();
  })
  $("#divida").on("change", function(){
    DIVIDA = $(this).val();
    mundanca();
  })

  function mundanca(){
    var atributos = RACAS[RACA];
    var riquezapp = RIQUEZA_PP[PC_I];
    var pcpp = PC_P_PP * 5;
    var rendapp = RENDA_I * 5;
    var dividapp = DIVIDA * 5;
    $("#pp").text(BASE.pp - atributos.pp - riquezapp - pcpp - rendapp - dividapp);
    var riqueza = atributos.riqueza + PC_I;
    var aumento = PC_P_PP * 0.25;
    $("#pc").text(RIQUEZA[riqueza] + RIQUEZA[riqueza] * aumento);
  }
})

