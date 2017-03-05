
BASE ={
  pp: 100,
  f: 0,
  a: 0,
  c: 0,
  i: 0,
  l: 0,
  folego: 0,
  riqueza: 3
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

RIQUEZA = [100, 2000, 5000, 10000, 20000, 50000, 200000, 1000000, 10000000]

RACA = ""

$(function () {
  var descrcoes = $(".descricao-popover");
  descrcoes.each(function(index){
	  var descrcao = $(this);
	  var delpop = descrcao.children(".del-pop");
	  var title = descrcao.children('[data-toggle="popover"]');
	  title.data("content", delpop.html());
  	
  });
  $('[data-toggle="popover"]').popover({trigger: "hover click", html: true});
  $(".descricao-popover .del-pop").remove();
  $(".escolha-raca").click(function(){
    RACA = ($(this).data("raca"));
    var atributos = RACAS[RACA];
    $("#pp").text(BASE.pp - atributos.pp);
    var riqueza = BASE.riqueza + atributos.riqueza
    $("#pc").text(RIQUEZA[riqueza]);
  })
})

