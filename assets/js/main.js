alert("Este site é um protótipo de um e-commerce fictício. A LogoMarca e o nome VipStyle utilizados não possuem nenhuma relação com quaisquer marcas registradas e foram utilizados apenas como inspiração. As imagens usadas como exemplo podem conter direitos autorais, o código, no entanto, é livre de royalties.");

const animation1 = "<div class='c-presentation__img1'><div class='c-presentation__animation row featurette text-center pt-5 pb-4' id='animation-initial'><div class='col-md-7'><h2 class='c-presentation__title featurette-heading fw-normal lh-1'>Uma Mega Barbearia. <span class='c-presentation__title c-presentation__title--silver'>Super Barbearia!</span></h2><p class='c-presentation__text lead'>Atendimentos especializados para todos os públicos!</p><span class='c-presentation__icon' id='barb_icon-1'></span><span class='c-presentation__icon' id='barb_icon-2'></span><span class='c-presentation__icon' id='barb_icon-3'></span><span class='c-presentation__icon' id='barb_icon-4'></span><span class='c-presentation__icon' id='barb_icon-5'></span><span class='c-presentation__icon' id='barb_icon-6'></span><span class='c-presentation__icon' id='barb_icon-7'></span><span class='c-presentation__icon' id='barb_icon-8'></span><span class='c-presentation__icon' id='barb_icon-9'></span></div><div class='col-md-5 order-md-2'><div class='c-presentation__circle' id='img-circle-A'></div></div></div></div>";

const animation2 = "<div class='c-presentation__img2'><div class='c-presentation__animation row featurette text-center pt-5 pb-4' id='animation-initial'><div class='col-md-7'><h2 class='c-presentation__title featurette-heading fw-normal lh-1'>Um Estúdio Gigante. <span class='c-presentation__title c-presentation__title--silver'>Tattoos Perfeitas!</span></h2><p class='c-presentation__text lead'>Os tatuadores mais reconhecidos do mercado!</p><span class='c-presentation__icon' id='tatt_icon-1'></span><span class='c-presentation__icon' id='tatt_icon-2'></span><span class='c-presentation__icon' id='tatt_icon-3'></span><span class='c-presentation__icon' id='tatt_icon-4'></span><span class='c-presentation__icon' id='tatt_icon-5'></span><span class='c-presentation__icon' id='tatt_icon-6'></span><span class='c-presentation__icon' id='tatt_icon-7'></span><span class='c-presentation__icon' id='tatt_icon-8'></span><span class='c-presentation__icon' id='tatt_icon-9'></span></div><div class='col-md-5 order-md-1'><div class='c-presentation__circle' id='img-circle-B'></div></div></div></div>";

const animation3 = "<div class='c-presentation__img3'><div class='c-presentation__animation row featurette text-center pt-5 pb-4' id='animation-initial'><div class='col-md-7'><h2 class='c-presentation__title featurette-heading fw-normal lh-1'>Loja Surpreendente. <span class='c-presentation__title c-presentation__title--silver'>O melhor para você!</span></h2><p class='c-presentation__text lead'>Preços mínimos e qualidade de multimarcas internacionais!</p><span class='c-presentation__icon' id='stor_icon-1'></span><span class='c-presentation__icon' id='stor_icon-2'></span><span class='c-presentation__icon' id='stor_icon-3'></span><span class='c-presentation__icon' id='stor_icon-4'></span><span class='c-presentation__icon' id='stor_icon-5'></span><span class='c-presentation__icon' id='stor_icon-6'></span><span class='c-presentation__icon' id='stor_icon-7'></span><span class='c-presentation__icon' id='stor_icon-8'></span><span class='c-presentation__icon' id='stor_icon-9'></span></div><div class='col-md-5 order-md-1'><div class='c-presentation__circle' id='img-circle-C'></div></div></div></div>";

const animations = [animation1, animation2, animation3];
let counter = 0;

setInterval(function() {
  counter = (counter + 1) % animations.length;
  document.getElementById("animation-initial").innerHTML = animations[counter];
}, 9100);
