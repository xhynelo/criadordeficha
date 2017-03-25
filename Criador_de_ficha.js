itera = function(objeto, func){
  for (var index in objeto){
    if(objeto.hasOwnProperty(index)){
      func(index, objeto[index])
    }
  }
}



CHAR ={
  pp: {
    pp: 0,
    pp_t: 0,
    pp_r: 0,
    pp_d: 0,
  },
  forca: 0,
  agilidade: 0,
  carisma: 0,
  intuicao: 0,
  logica: 0,
  folego: 0,
  saude: 0,
  sanidade: 0,
  raca: "humanos",
  riqueza: 3,
  renda: 0,
  divida: 0,
  pc_aumentdo: 0,
  aparencia: "mediano",
  idade: "jovem_adulto",
  vantagem: {},
  desvantagem: {},
  habilidade: {},
  escola: [],
  propaga: [],
  posicao_ordem: 0,
  ordem_hab: [],
  penalidade_hab: {},
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
    habilidade: {}
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

function cria_habilidade(generalizacao){
  return {
    generalizacao: generalizacao
  }
}


HABILIDADE = {
  "investigar": {"visao": -2},
  "visao": {"rastrear": -1, "investigar": -2},
  "ciencia_da_natureza": {"engenharia": -2, "medicina": -2, "matematica_e_logica": -2},
  "alquimia": {"apotecaria": -1},
  "armearia": {"armaria": -2,"armoraria": -3,"metalurgia": -1},
  "armaria": {"armearia": -2, "armoraria": -3, "metalurgia": -1},
  "armoraria": {"armearia": -2, "armaria": -3, "metalurgia": -1},
  "arquearia": {"carpintaria": -3},
  "carpintaria": {"arquearia": -4},
  "maquinario": {"mecanico": -1},
  "metalurgia": {"armearia": -3, "armoraria": -3, "armaria": -3},
  "tecelagem": {"armoraria": -4},
  "armas_de_haste": {"machados_e_macas": -1, "lancas_e_cajados": 0, "golpear": -2, "esquivar": -2, "esgrima": -2, "laminas_curtas": -2, "laminas_longas": -2, "manguais": -2},
  "esgrima": {"laminas_curtas": -1, "laminas_longas": -1, "golpear": -2, "esquivar": -2, "armas_de_haste": -2, "lancas_e_cajados": -2, "machados_e_macas": -2, "manguais": -2},
  "laminas_curtas": {"laminas_longas": -1, "esgrima": -1, "arremessar_armas": -1, "golpear": -2, "esquivar": -2, "armas_de_haste": -2, "lancas_e_cajados": -2, "machados_e_macas": -2, "manguais": -2},
  "laminas_longas": {"laminas_curtas": -1, "esgrima": -1, "golpear": -2, "esquivar": -2, "armas_de_haste": -2, "lancas_e_cajados": -2, "machados_e_macas": -2, "manguais": -2},
  "lancas_e_cajados": {"armas_de_haste": 0, "golpear": -2, "esquivar": -2, "esgrima": -2, "laminas_curtas": -2, "laminas_longas": -2, "machados_e_macas": -2, "manguais": -2},
  "machados_e_macas": {"armas_de_haste": -1, "arremessar_armas": -2, "golpear": -2, "esquivar": -2, "esgrima": -2, "laminas_curtas": -2, "laminas_longas": -2, "lancas_e_cajados": -2, "machados_e_macas": -2, "manguais": -2},
  "manguais": {"golpear": -2, "esquivar": -2, "armas_de_haste": -2,"esgrima": -2, "laminas_curtas": -2, "laminas_longas": -2, "lancas_e_cajados": -2, "machados_e_macas": -2},
  "arquearia": {"esquivar": -2},
  "armas_automaticas": {"esquivar": -2},
  "armas_longas": {"bestas": -1, "pistolas": -1, "armas_automaticas": -1, "esquivar": -2},
  "arremessar_armas": {"esquivar": -2},
  "ataque_magico_ou_sopro": {"esquivar": -2},
  "bestas": {"armas_longas": -1, "esquivar": -2},
  "pistolas": {"bestas": -1,"armas_longas": -1,"armas_automaticas": -1, "esquivar": -2},
  "cauda": {"mordida": 0, "esquivar": -1},
  "garras": {"mordida": 0, "cauda": 0, "golpear": 0, "luta": -1, "ataque_magico_ou_sopro": -1, "esquivar": -1},
  "golpear": {"luta": -1, "esquivar": -1, "ataque_magico_ou_sopro": -1, "garras": 0, "mordida": 0, "cauda": 0},
  "luta": {"golpear": -1, "garras": -1, "mordida": -1, "cauda": -1, "esquivar": -1},
  "mordida": {"cauda": 0},
  "invocacao": {"exorcismo": 0},
  "milagre": {"exorcismo": -1},
  "potentia": {"elementalismo": 0, "protegomancia": 0, "telecinese": 0},
  "misticismo": {"cronomancia": 0, "teleportacao": 0, "transmutacao": 0},
  "mentalismo": {"hipnose": 0, "ilusionismo": 0, "psiomancia": 0},
  "maleficorum": {"biomancia": 0, "necromancia": 0, "sanguinomancia": 0}
}

function pontos_da_habilidade(habilidade) {
  p = 0;
  for (var ponto in CHAR.habilidade[habilidade]){
    if (CHAR.habilidade[habilidade].hasOwnProperty(ponto)) {
      p = p + CHAR.habilidade[habilidade][ponto];
    }
  }
  return p;
}

function nivel_habiliade(p, i) {
  var up = 0;
  while (p > 0){
    i++;
    p -= i;
    up += i;
  }
  if (p < 0){
    up -= i
    i--;
  }
  return [i, up];
}

function padrao(dict, chave, outro) {
  if (chave in dict) {
    return dict[chave];
  }
  return outro;
}

function muda_habilidade(habilidade, i) {
  var atual = padrao(CHAR.derivados.habilidade, habilidade, i - 1);
  if (i == atual) {
    return false;
  }
  CHAR.derivados.habilidade[habilidade] = i;
  return true;
}

function propaga_generalizacao(habilidade, n){
  if(! habilidade in HABILIDADE){
    return
  }
  itera(HABILIDADE[habilidade], function(generalizacao, soma){
      var pen = 0;
      itera(padrao(padrao(CHAR.penalidade_hab, habilidade, {}), generalizacao, {}), function(pont, valor_ponto){
          pen += valor_ponto;
      })
      var nv_g = n + soma + pen;
      var atual = padrao(CHAR.derivados.habilidade, generalizacao, 0)
      if (nv_g > atual && muda_habilidade(generalizacao, nv_g)){
        propaga_generalizacao(generalizacao, nv_g)
      }
  })
}

function calcula_nv_hab(){
  for (var habilidade in CHAR.derivados.habilidade){
    if (CHAR.derivados.habilidade.hasOwnProperty(habilidade)){
      delete CHAR.derivados.habilidade[habilidade];
    }
  }
  CHAR.derivados.habilidade.usados = {};
  lista_habilidades = CHAR.escola.concat(CHAR.ordem_hab)
  for (var index in lista_habilidades){
    var habilidade = lista_habilidades[index]
    if (CHAR.habilidade.hasOwnProperty(habilidade)){
      var p = pontos_da_habilidade(habilidade);
      var np = nivel_habiliade(p - padrao(CHAR.derivados.habilidade.usados, habilidade, 0), padrao(CHAR.derivados.habilidade, habilidade, 0));
      var n = np[0], up = np[1];
      CHAR.derivados.habilidade.usados[habilidade] += up;
      if(muda_habilidade(habilidade, n)){
        propaga_generalizacao(habilidade, n);
      }
    }
  }
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

function calcula_pp_facil(){
  var pp = 0;
  pp += (CHAR.forca + CHAR.agilidade + CHAR.carisma + CHAR.intuicao + CHAR.logica) * 10;
  pp += (CHAR.saude + CHAR.folego + CHAR.sanidade) * 5;
  return pp;
}

function calcula_pp(){
  /*
  var pp = RACAS[CHAR.raca].pp + RIQUEZA_PP[CHAR.riqueza] + (CHAR.renda + CHAR.divida + CHAR.pc_aumentdo) * 5 + APARENCIA[CHAR.aparencia].pp + IDADE[CHAR.idade].pp
  */
  var pp = RACAS[CHAR.raca].pp + RIQUEZA[CHAR.riqueza].pp + 
  (CHAR.renda + CHAR.divida + CHAR.pc_aumentdo) * 5 + APARENCIA[CHAR.aparencia].pp + 
  IDADE[CHAR.idade].pp + calcula_pp_vantagens() + calcula_pp_desvantagens() +
  calcula_pp_facil();
  return BASE.pp - pp;
}



function calcula_derivados (){
  itera(["forca","agilidade","carisma","intuicao","logica"], function(index, atributo){
    var ph = IDADE[CHAR.idade].ph + CHAR[atributo];
    itera(CHAR.habilidade, function(hab, pontos){
      var index = CHAR.escola.indexOf(hab)
      if(index != -1){
        ph -= padrao(pontos, atributo, 0) * 2;
      }else{
        ph -= padrao(pontos, atributo, 0)
      }
    })
    itera(CHAR.penalidade_hab, function(hab, generalizacoes){
      itera(generalizacoes, function(gen, pontos){
        ph -= 2 * padrao(pontos, atributo, 0)
      })
    })
    CHAR.derivados['ph'+atributo[0]] = ph
  })
  CHAR.derivados.forca = RACAS[CHAR.raca].f + CHAR.forca;
  CHAR.derivados.agilidade = RACAS[CHAR.raca].a + CHAR.agilidade;
  CHAR.derivados.carisma = RACAS[CHAR.raca].c + CHAR.carisma;
  CHAR.derivados.intuicao = RACAS[CHAR.raca].i + CHAR.intuicao;
  CHAR.derivados.logica = RACAS[CHAR.raca].l + CHAR.logica;
  CHAR.derivados.folego = RACAS[CHAR.raca].folego + CHAR.folego;
  CHAR.derivados.saude = RACAS[CHAR.raca].saude + CHAR.saude;
  CHAR.derivados.sanidade = RACAS[CHAR.raca].sanidade + CHAR.sanidade;
  CHAR.derivados.riqueza = RACAS[CHAR.raca].riqueza;
}

function calcula_pc(){
  /* 
  var pc = RIQUEZA[CHAR.riqueza + CHAR.derivados.riqueza];
  */
  var pc = RIQUEZA[CHAR.riqueza + CHAR.derivados.riqueza].pc; 
  return pc + pc * 0.25 * CHAR.pc_aumentdo;
}


function cria_cookie(){
  Cookies.set("char", CHAR)
}

function le_cookie(){
  var cookie = Cookies.get("char")
  if (cookie != undefined) {
    CHAR = cookie
  }
  return cookie
}


function mundanca(){
  for (var i in CHAR.derivados.habilidade){
    if (CHAR.derivados.habilidade.hasOwnProperty(i)){
      $("#"+i).text(0);
    }
  }
  calcula_nv_hab();
  calcula_derivados();
  $("#pp").text(calcula_pp());
  $("#pc").text(calcula_pc());
  $("#phf").text(CHAR.derivados.phf);
  $("#pha").text(CHAR.derivados.pha);
  $("#phc").text(CHAR.derivados.phc);
  $("#phi").text(CHAR.derivados.phi);
  $("#phl").text(CHAR.derivados.phl);
  for (var i in CHAR.derivados.habilidade){
    if (CHAR.derivados.habilidade.hasOwnProperty(i)){
      $("#"+i).text(CHAR.derivados.habilidade[i]);
    }
  }
  cria_cookie();
}

function ordem_habilidades(){
  $('#sortable').html('')
  for(var nome=0; nome < CHAR.posicao_ordem; nome++){
    var nome_hab = $($($('#'+CHAR.ordem_hab[nome]).parent()).children('h4')).text().trim();
    $('#sortable').append('<li class="ui-state-default">'+nome_hab+'<span class="some_span">'+CHAR.ordem_hab[nome]+'</span></li>');
  }
}

function atualiza_ordem(){
  CHAR.ordem_hab = [];
  $('#sortable li').each( function(index){
    var elemento = $($(this)).children('span');
    CHAR.ordem_hab.push(elemento.text().trim());
  })
  mundanca()
}

ID_POPOVER = "";

$(function () {
  $(".apaga_texto").html("");

  var descrcoes = $(".descricao-popover");
  descrcoes.each(function(index){
    var descrcao = $(this);
    var delpop = descrcao.children(".del-pop");
    var title = descrcao.children('[data-toggle="popover"]');
    title.data("content", delpop.html()); 
  });

  $( function() {
    $( "#sortable" ).sortable({
      placeholder: "ui-state-highlight",
      update:  atualiza_ordem
    });
    $( "#sortable" ).disableSelection();
  });

  //$('[data-toggle="popover"]').popover({trigger: "hover click", html: true});
  $('.tem_hover_click').popover({trigger: "hover click", html: true}).on('shown.bs.popover', function() {
    $(".penalidade").each(function(index) {
      var split = $(this).attr("id").split('-')
      var hab = split[1]
      var gen = split[2]
      var pen = 0;
      itera(padrao(padrao(CHAR.penalidade_hab, hab, {}), gen, {}), function(pont, valor_ponto){
          pen += valor_ponto;
      })
      $('#gen-'+hab+'-'+gen).text(pen + HABILIDADE[hab][gen]);
      ID_POPOVER = hab;
    })
  });
  /*
  $('body').on('click', function (e) {
        //did not click a popover toggle, or icon in popover toggle, or popover
        if ($(e.target).data('toggle') !== 'popover'
            && $(e.target).parents('[data-toggle="popover"]').length === 0
            && $(e.target).parents('.popover.in').length === 0) {

            $('[data-toggle="popover"]').popover('hide');
        }
    });
  */
  $('.tem_hover').popover({trigger: "hover", html: true})
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
  $(".escolha_habilidade").on('click', function(){
    var hab = $(this).data('habilidade');
    var pot = $(this).data('ponto');
    var ph = $(this).data('ph');
    var op = $(this).data('operacao');
    var ph_val = parseInt($('#'+ph).text());
    if (CHAR.habilidade[hab] === undefined) {
      CHAR.habilidade[hab] = {}
    }
    if( op == "soma"){
      CHAR.habilidade[hab][pot] = ph_val + 1;
      $('#'+ph).text(ph_val + 1)
    }else if( op == "subtracao" && CHAR.habilidade[hab][pot] > 0){
      CHAR.habilidade[hab][pot] = ph_val - 1;
      $('#'+ph).text(ph_val - 1)
    }
    var qtd = 0;
    for(var ponto in CHAR.habilidade[hab]){
      qtd += CHAR.habilidade[hab][ponto];
    }
    var index = CHAR.ordem_hab.indexOf(hab);
    if(!(index > -1)){
      CHAR.ordem_hab.push(hab);
      CHAR.posicao_ordem++;
    }
    if(qtd <= 0){
      CHAR.ordem_hab.splice(index, 1);
      CHAR.posicao_ordem--;
    }
    ordem_habilidades()
    mundanca();
  })

  $('.escolha_facil').on('click', function(){
    var facil = $(this).data('facil');
    var val_facil = parseInt($('#'+facil).text().trim());
    var op = $(this).data('operacao');
    if(op == 'soma'){
      val_facil++;
      CHAR[facil] = val_facil;
      $("#"+facil).text(val_facil);
    }else if(op == 'subtracao'){
      val_facil--;
      CHAR[facil] = val_facil;
      $("#"+facil).text(val_facil);
    }
    mundanca();
  })

  $('.escolha-escola').on('click', function(){
    var escola = $(this).data('escola');
    var ph = $(this).data('ph');
    var val = parseInt($('#'+ph).text().trim());
    var op = $(this).data('operacao');
    var pot = $(this).data('ponto');
    if (CHAR.habilidade[escola] === undefined) {
      CHAR.habilidade[escola] = {};
    }
    var valor = val
    if(op == 'soma'){
      valor += 2;
      $('#'+ph).text(val + 2);
    }else if(op == 'subtracao' && CHAR.habilidade[escola][pot] > 0){
      valor -= 2;
      $('#'+ph).text(val - 2);
    }
    CHAR.habilidade[escola][pot] = valor/2;
    var qtd = 0;
    for(var ponto in CHAR.habilidade[escola]){
      qtd += CHAR.habilidade[escola][ponto];
    }
    var index = CHAR.escola.indexOf(escola);
    if(!(index > -1)){
      CHAR.escola.push(escola);
    }
    if(qtd <= 0){
      CHAR.escola.splice(index, 1);
    }
    mundanca();
  })

  $(document).on('click', '.escolha-generalizacao' ,function(){
    var hab = $(this).data('habilidade');
    var gen = $(this).data('generalizacao');
    var ponto = $(this).data('ponto')
    if (CHAR.penalidade_hab[hab] == undefined) {
      CHAR.penalidade_hab[hab] = {}
    }
    if (CHAR.penalidade_hab[hab][gen] == undefined) {
      CHAR.penalidade_hab[hab][gen] = {}
    }
    var pen = 0
    var pen_ponto = padrao(CHAR.penalidade_hab[hab][gen], ponto, 0)
    //parseInt($('#gen_'+hab+'_'+gen).text().trim())
    var valor;
    var op = $(this).data('operacao')
    
    if(op == "soma"){
      valor = pen_ponto + 1;
    }else if(op == "subtracao"){
      valor = pen_ponto - 1;
    }
    itera(CHAR.penalidade_hab[hab][gen], function(pont, valor_ponto){
      if(pont != ponto){
        pen += valor_ponto;
      }
    }) 
    valor = Math.max(valor, 0)
    valor = Math.min(valor, -HABILIDADE[hab][gen] - pen)

    CHAR.penalidade_hab[hab][gen][ponto] = valor
    $('#gen-'+hab+'-'+gen).text(valor + pen + HABILIDADE[hab][gen]);
    mundanca();

  })
  


  $("a[href='#habilidades']").click();
  $("a[href='#habilidades_de_combate']").click();
  le_cookie();
  mundanca();
})

