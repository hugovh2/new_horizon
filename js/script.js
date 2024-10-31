 // Seleciona todos os botões de filtro e as imagens da galeria
 const filterButtons = document.querySelectorAll('.portfolio-button');
 const portfolioImages = document.querySelectorAll('.portfolio-gallery img');

 // Função para filtrar imagens com base na categoria selecionada
 function filterPortfolio(category) {
     portfolioImages.forEach(image => {
         const imageCategory = image.getAttribute('data-category');
         if (category === 'all' || imageCategory === category) {
             image.style.display = 'block'; // Exibe a imagem
         } else {
             image.style.display = 'none'; // Oculta a imagem
         }
     });
 }

 // Adiciona evento de clique a cada botão de filtro
 filterButtons.forEach(button => {
     button.addEventListener('click', () => {
         // Remove a classe 'active' de todos os botões
         filterButtons.forEach(btn => btn.classList.remove('active'));
         // Adiciona a classe 'active' ao botão clicado
         button.classList.add('active');
         // Obtém a categoria do filtro do botão clicado
         const category = button.getAttribute('data-filter');
         // Filtra as imagens com base na categoria selecionada
         filterPortfolio(category);
     });
 });

 // Inicializa exibindo todas as imagens ao carregar a página
 filterPortfolio('all');

 // script.js
 document.querySelectorAll('.interactive-card').forEach(card => {
     card.addEventListener('mouseenter', () => {
         card.classList.add('hover-effect');
     });

     card.addEventListener('mouseleave', () => {
         card.classList.remove('hover-effect');
     });
 });
 const testimonials = [
     {
         text: "A equipe foi incrível! A landing page que criaram aumentou nossa taxa de conversão em 50%. Altamente recomendados para qualquer negócio que deseja crescer online!",
         name: "Christine Aguilar",
         photo: "https://picsum.photos/201/300"
     },
     {
         text: "Eles superaram todas as expectativas! O design é moderno, funcional e atende perfeitamente ao público-alvo.",
         name: "Michael Smith",
         photo: "https://picsum.photos/202/300"
     },
     {
         text: "Desde o primeiro contato até a entrega final, o processo foi impecável. Recomendo de olhos fechados.",
         name: "Sarah Jones",
         photo: "https://picsum.photos/203/300"
     }
 ];

 let currentIndex = 0;
 let testimonialInterval;

 function updateTestimonial(index) {
     const testimonialText = document.getElementById('testimonialText');
     const authorName = document.getElementById('authorName');
     const authorPhoto = document.getElementById('authorPhoto');

     testimonialText.textContent = testimonials[index].text;
     authorName.textContent = testimonials[index].name;
     authorPhoto.src = testimonials[index].photo;

     // Atualiza os pontos ativos
     document.querySelectorAll('.dot').forEach((dot, idx) => {
         dot.classList.toggle('active', idx === index);
     });
 }

 function changeTestimonial(index) {
     currentIndex = index;
     updateTestimonial(currentIndex);
     clearInterval(testimonialInterval);  // Parar a troca automática ao clicar manualmente
     startAutoSlide();  // Reiniciar a troca automática
 }

 function startAutoSlide() {
     testimonialInterval = setInterval(() => {
         currentIndex = (currentIndex + 1) % testimonials.length;
         updateTestimonial(currentIndex);
     }, 5000);  // Muda automaticamente a cada 5 segundos
 }

 // Iniciar o carrossel de depoimentos automaticamente
 startAutoSlide();