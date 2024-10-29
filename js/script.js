<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-cn7l7gDp0eyJgt35dX4bCLiD6j8uW7CjoCl1A8P7GXra5lRe3eA8wgFf5RGjvjG3"
  crossorigin="anonymous"
></script>;

// Configurações de transição automática
const intervalTime = 3000; // Tempo entre slides, em milissegundos

// Função para avançar para o próximo slide
function nextSlide() {
  const carousel = document.getElementById("carouselExampleCaptions");
  const activeSlide = carousel.querySelector(".carousel-item.active");
  let nextSlide = activeSlide.nextElementSibling;

  // Se não houver próximo slide, vá para o primeiro
  if (!nextSlide) {
    nextSlide = carousel.querySelector(".carousel-item:first-child");
  }

  // Remova a classe 'active' do slide atual e adicione ao próximo
  activeSlide.classList.remove("active");
  nextSlide.classList.add("active");
}

// Inicie a transição automática
setInterval(nextSlide, intervalTime);

//portifolio

// Seleciona todos os botões de filtro e as imagens da galeria
const filterButtons = document.querySelectorAll(".portfolio-button");
const portfolioImages = document.querySelectorAll(".portfolio-gallery img");

// Função para filtrar imagens com base na categoria selecionada
function filterPortfolio(category) {
  portfolioImages.forEach((image) => {
    const imageCategory = image.getAttribute("data-category");
    if (category === "all" || imageCategory === category) {
      image.style.display = "block"; // Exibe a imagem
    } else {
      image.style.display = "none"; // Oculta a imagem
    }
  });
}

// Adiciona evento de clique a cada botão de filtro
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove a classe 'active' de todos os botões
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Adiciona a classe 'active' ao botão clicado
    button.classList.add("active");
    // Obtém a categoria do filtro do botão clicado
    const category = button.getAttribute("data-filter");
    // Filtra as imagens com base na categoria selecionada
    filterPortfolio(category);
  });
});

// Inicializa exibindo todas as imagens ao carregar a página
filterPortfolio("all");





