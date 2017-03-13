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
  idade: "jovem_adulto",
  vantagem: {},
  desvantagem: {},
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
    phf: 0,
    pha: 0,
    phc: 0,
    phi: 0,
    phl: 0,
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

function cria_raca(pp, f, a, c, i, l, folego, saude, sanidade, riqueza){
  return {
    pp: pp,
    f: f,
    a: a,
    c: c,
    i: i,
    l: l,
    folego: folego,
    saude: saude,
    sanidade: sanidade,
    riqueza: riqueza
  }
}

RACAS = {
  humanos: cria_raca(0, 0, 0, 0, 0, 0, 10, 10, 10, 0),
    elanos: cria_raca(15, 0, 2, 0, 0, 0, 10, 10, 10, 0),
    orquinos: cria_raca(25, 5, 0, -1, 0, 0, 10, 10, 10, -1),
    elfos: cria_raca(30, -1, 4, 0, 1, 0, 10, 10, 10, 0),
    anoes: cria_raca(20, 2, -1, 0, 0, 1, 10, 10, 10, 0),
    halfling: cria_raca(0, -4, 5, 3, 0, 0, 10, 10, 10, -1),
    poes: cria_raca(35, 6, 2, -2, -2, -2, 10, 10, 10, -1),
    thrii: cria_raca(75, 5, 2, -2, 0, 1, 20, 10, 10, -2),
    krin: cria_raca(55, 0, 2, 0, 4, 4, 15, 10, 10, -2),
    thruk: cria_raca(75, +3, 2, 0, 0, 0, 20, 10, 10, -2),
    arachas: cria_raca(0, 0, 5, -2, 0, 0, 10, 10, 10, -2),
    dyn: cria_raca(45, 0, 0, 0, 0, 0, 10, 10, 10, 0),
    dragoes: cria_raca(115, 6, 3, 0, 3, 2, 10, 10, 10, -2)
}

function cria_aparencia(pp, facil, habilidade){
  return {
    pp: pp,
    facil: facil,
    habilidade: habilidade
  }
}

APARENCIA = {
  magrelo: cria_aparencia(-5, {}, {}),
  gordo: cria_aparencia(-5, {}, {}),
  obeso_morbido: cria_aparencia(-10, {}, {}),
  gigante: cria_aparencia(10, {forca: 2}, {}),
  nanismo: cria_aparencia(-10, {forca: -4}, {}),
  horrendo: cria_aparencia(-20, {carisma: -2}, {diplomacia: -2,intimidar: 2}),
  feio: cria_aparencia(-10, {carisma: -1}, {}),
  pouco_atraente: cria_aparencia(-5, {carisma: -1}, {}),
  mediano: cria_aparencia(0, {}, {}),
  atraente: cria_aparencia(5, {carisma: 1}, {}),
  bonito: cria_aparencia(10, {carisma: 1}, {adestrar: 1,blefar: 1,diplomacia: 1,disfarce: 1,lideranca: 1,performance: 1,sentir_motivacao: 1}),
  esbelto: cria_aparencia(15, {carisma: 2}, {adestrar: 2,adestrar: 2,blefar: 2,diplomacia: 2,disfarce: 2,lideranca: 2,performance: 2,sentir_motivacao: 2})
}

function cria_idade(pp, forca, agilidade, saude, folego, velocidade, ph, hab_1_mais, hab_2_mais) {
  return  {
    pp: pp,
    forca: forca, 
    agilidade: agilidade,
    saude: saude,
    folego: folego,
    velocidade: velocidade,
    ph: ph,
    hab_1_mais: hab_1_mais,
    hab_2_mais: hab_2_mais
  };
}

IDADE = {
  adolescente: cria_idade(-50, -2, 0, 0, 0, 0, 1, 1, 0),
  jovem_adulto: cria_idade(0, 0, 0, 0, 0, 0, 3, 1, 0),
  adulto: cria_idade(25, 0, 0, 0, 0, 0, 5, 1, 0),
  meia_idade: cria_idade(25, -1, -1, -2, -2, 0, 7, 1, 0),
  idoso: cria_idade(10, -3, -3, -3, -6, -0.2, 9, 2, 0),
  anciao: cria_idade(-15, -6, -6, -6, -8, -0.4, 11, 3, 0),
  primeiro_seculo: cria_idade(25, 0, 0, 0, 0, 0, 5, 1, 0),
  segundo_seculo: cria_idade(60, 0, 0, 0, 0, 0, 7, 2, 0),
  terceiro_seculo: cria_idade(85, 0, 0, 0, 0, 0, 9, 2, 0),
  quarto_seculo: cria_idade(110, 0, 0, 0, 0, 0, 11, 2, 0),
  quinto_seculo: cria_idade(120, -1, -1, -2, -2, 0, 13, 3, 0),
  sexto_seculo: cria_idade(145, -1, -1, -2, -2, 0, 15, 3, 0),
  setimo_seculo: cria_idade(160, -3, -3, -3, -6, -0.2, 17, 4, 1),
  oitavo_seculo: cria_idade(185, -3, -3, -3, -6, -0.2, 19, 4, 1),
  ultimos_seculos: cria_idade(180, -6, -6, -6, -8, -0.4, 21, 4, 2),
  seculos_incontaveis: cria_idade(145, 0, 0, 0, 0, 0, 13, 1, 0)
}

function cria_riqueza(pp, pc, nome){
  return {
    pp: pp,
    pc: pc,
    nome: nome
  }
}
/*
RIQUEZA_PP = [-40, -20, -10, 0, 10, 30, 60, 120, 180]

RIQUEZA = [100, 2000, 5000, 10000, 20000, 50000, 200000, 1000000, 10000000]
*/
RIQUEZA = {
  0: cria_riqueza(-40, 100, "pobre_de_doer"),
  1: cria_riqueza(-20, 2000, "pobre"),
  2: cria_riqueza(-10, 5000, "em_dificuldades"),
  3: cria_riqueza(0, 10000, "medio"),
  4: cria_riqueza(10, 20000, "confortavel"),
  5: cria_riqueza(30, 50000, "rico"),
  6: cria_riqueza(60, 200000, "muito_rico"),
  7: cria_riqueza(120, 1000000, "milionario"),
  8: cria_riqueza(180, 10000000, "multimilionario")
}

function cria_vantagem(pp, p_nv){
  return{
    pp: pp,
    p_nv: p_nv
  }
}

VANTAGEM = {
  alma_magica: cria_vantagem([5], false),
  ambidestria: cria_vantagem([5], false),
  bencao_divina: cria_vantagem([40], false),
  charme: cria_vantagem([15], false),
  coragem: cria_vantagem([5], false),
  dessensibilizado: cria_vantagem([5], false),
  destreza_manual: cria_vantagem([10], false),
  fiel: cria_vantagem([0, 5, 10], true),
  foco: cria_vantagem([15], false),
  fortaleza_mental: cria_vantagem([20], false),
  flexivel: cria_vantagem([5], false),
  genialidade: cria_vantagem([15], false),
  heranca: cria_vantagem([5, 10, 20], true),
  licantropia: cria_vantagem([75], false),
  mutante: cria_vantagem([10], false),
  prodigio: cria_vantagem([10], false),
  prodigio_militar: cria_vantagem([20], false),
  prodigio_arcano: cria_vantagem([60], false),
  reflexos_de_guerreiro: cria_vantagem([15], false),
  sono_rapido: cria_vantagem([5], false),
  talento: cria_vantagem([15, 25, 30], true),
  talento_linguistico: cria_vantagem([5], false),
  tolerancia_a_dor: cria_vantagem([10], false),
  treinamento_em_armadura: cria_vantagem([15], false),
  treino: cria_vantagem([5], false),
  vampirismo: cria_vantagem([50], false),
  voz_magnifica: cria_vantagem([10], false),
  visao_periferica: cria_vantagem([5], false),

  altruista: cria_vantagem([-5], false),
  baixa_autoestima: cria_vantagem([-10, -15], true),
  babaca: cria_vantagem([-5], false),
  barulhento: cria_vantagem([-5, -10], true),
  codigo_de_honra: cria_vantagem([-5, -10], true),
  condutor_arcano: cria_vantagem([-5], false),
  covarde: cria_vantagem([-5], false),
  dislexia: cria_vantagem([-5, -10], true),
  egoista: cria_vantagem([-5], false),
  estigma_social: cria_vantagem([-5, -10, -20], true),
  exagerado: cria_vantagem([-5], false),
  fanatismo: cria_vantagem([-5], false),
  fobia: cria_vantagem([-5, -15], true),
  frescura: cria_vantagem([-15], false),
  lingua_presa: cria_vantagem([-5], false),
  ganancia: cria_vantagem([-5], false),
  honrado: cria_vantagem([-5], false),
  incapaz_de_mentir: cria_vantagem([-10], false),
  orgulho: cria_vantagem([-5], false),
  piromania: cria_vantagem([-5], false),
  psicopatia: cria_vantagem([-15, -30], true),
  pouca_tolerancia_a_dor: cria_vantagem([-5], false),
  sadico: cria_vantagem([-10], false),
  sede_de_sangue: cria_vantagem([-5], false),
  sem_senso_de_humor: cria_vantagem([-5], false),
  senso_de_dever: cria_vantagem([-5, -10], true),
  teimoso: cria_vantagem([-5], false),
  tolo: cria_vantagem([-10], false),
  trauma: cria_vantagem([-5, -10], true),
  voto: cria_vantagem([-5, -10], true)
}

function cria_desvantagem(pp1, pp2, p_nv){
  return {
    pp1: pp1,
    pp2: pp2,
    p_nv: p_nv
  }
}

DESVANTAGEM = {
  vicio: cria_desvantagem([0, 0, -5, -10], [0, -5, -5], false),
  obrigacao: cria_desvantagem([0, -15, -10, -5], [0, -5, -5, 5], false)
}

function calcula_pp_desvantagens(){
  var pp = 0;
  for( desvantagem in CHAR.desvantagem){
    if(CHAR.desvantagem.hasOwnProperty(desvantagem)){
      pp = pp + DESVANTAGEM[desvantagem].pp1[CHAR.desvantagem[desvantagem][0]] + DESVANTAGEM[desvantagem].pp2[CHAR.desvantagem[desvantagem][1]];
    }
  }
  return pp;
}

function calcula_pp_vantagens(){
  var pp = 0;
  for (var vantagem in CHAR.vantagem){
    if (CHAR.vantagem.hasOwnProperty(vantagem)){
      if(!VANTAGEM[vantagem].p_nv){
        pp = pp + VANTAGEM[vantagem].pp[0] * CHAR.vantagem[vantagem];
      }else{
        pp = pp + VANTAGEM[vantagem].pp[CHAR.vantagem[vantagem]-1];
      }

    }
  }
  return pp;
}

function calcula_pp(){
  /*
  var pp = RACAS[CHAR.raca].pp + RIQUEZA_PP[CHAR.riqueza] + (CHAR.renda + CHAR.divida + CHAR.pc_aumentdo) * 5 + APARENCIA[CHAR.aparencia].pp + IDADE[CHAR.idade].pp
  */
  var pp = RACAS[CHAR.raca].pp + RIQUEZA[CHAR.riqueza].pp + 
  (CHAR.renda + CHAR.divida + CHAR.pc_aumentdo) * 5 + APARENCIA[CHAR.aparencia].pp + 
  IDADE[CHAR.idade].pp + calcula_pp_vantagens() + calcula_pp_desvantagens();
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
  CHAR.derivados.phf = IDADE[CHAR.idade].ph;
  CHAR.derivados.pha = IDADE[CHAR.idade].ph;
  CHAR.derivados.phc = IDADE[CHAR.idade].ph;
  CHAR.derivados.phi = IDADE[CHAR.idade].ph;
  CHAR.derivados.phl = IDADE[CHAR.idade].ph;
}

function calcula_pc(){
  /* 
  var pc = RIQUEZA[CHAR.riqueza + CHAR.derivados.riqueza];
  */
  var pc = RIQUEZA[CHAR.riqueza + CHAR.derivados.riqueza].pc; 
  return pc + pc * 0.25 * CHAR.pc_aumentdo;
}

function mundanca(){

  calcula_derivados();
  $("#pp").text(calcula_pp());
  $("#pc").text(calcula_pc());
  $("#phf").text(CHAR.derivados.phf);
  $("#pha").text(CHAR.derivados.pha);
  $("#phc").text(CHAR.derivados.phc);
  $("#phi").text(CHAR.derivados.phi);
  $("#phl").text(CHAR.derivados.phl);
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
  $(".escolha-idade").on("click", function(){
    CHAR.idade = ($(this).data("idade"));
    mundanca();
  })

  $(".nivel").on("click", function(){
    var input = $("#"+$(this).data("quantidade"));
    input.toggle(!$(this).hasClass("active"));
  })
  $(".escolha-vantagem").on("click", function(){
    var pai = $(this).parent();
    var num = parseInt(pai.find(".escondido").val());
    if (!num){
      num = 1;
    }
    CHAR.vantagem[$(this).data("vantagem")] = num;
    if($(this).hasClass("active")){
      delete CHAR.vantagem[$(this).data("vantagem")];
    }
    mundanca();
  })
  $(".escondido").on("change", function(){
    var num = parseInt($(this).val());
    CHAR.vantagem[$(this).attr('id')] = num;
    mundanca();
  })
  $(".escolha-desvantagem").on("click", function(){
    var pai = $(this).parent();
    var div = $(pai).children('div');
    var num0 = $($(div).children('input')[0]).val();
    var num1 = $($(div).children('input')[1]).val();
    CHAR.desvantagem[$(this).data('desvantagem')] =[num0, num1];
    if($(this).hasClass("active")){
      delete CHAR.desvantagem[$(this).data('desvantagem')];
    }
    mundanca();
  })

  $(".escondido_des").on("change", function(){
    var num0 = parseInt($($(this).children('input')[0]).val());
    var num1 = parseInt($($(this).children('input')[1]).val());
    CHAR.desvantagem[$(this).attr('id')] = [num0, num1];
    mundanca();
  })
})

