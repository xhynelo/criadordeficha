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

})

