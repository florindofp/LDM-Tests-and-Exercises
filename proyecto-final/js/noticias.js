var noticias = {
    "totalArticles": 769,
    "articles": [
      {
        "title": "Una mujer pide a ChatGPT que le lea la mano y la IA detecta un posible cáncer de piel",
        "description": "ChatGPT le detectó un tipo de melanoma que aparece en zonas como las palmas o las plantas de los pies, donde puede pasar desapercibido.",
        "content": "ChatGPT es capaz de hacer mucho más que responder preguntas: puede generar imágenes con un gran realismo, analizar vídeos, decirte el lugar donde se ha hecho una foto… Y tantas otras funciones y utilidades. Algunas personas lo usan con fines creativo... [1988 chars]",
        "url": "https://www.20minutos.es/tecnologia/inteligencia-artificial/mujer-pide-chatgpt-le-lea-mano-ia-detecta-posible-cancer-piel-5706592/",
        "image": "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2025/05/05/chatgpt-cancer-tiktok.png",
        "publishedAt": "2025-05-08T05:00:00Z",
        "source": {
          "name": "20 Minutos",
          "url": "https://www.20minutos.es"
        }
      },
      {
        "title": "Le preguntamos a ChatGPT por el mejor director para la película perfecta sobre el cónclave... y hay fumata blanca",
        "description": "Nos asomamos al siempre dispuesto oráculo digital y le planteamos cómo imaginaría una adaptación cinematográfica de este ritual sagrado. La respuesta es digna d",
        "content": "El tema candente de la semana lo inunda todo, y las plataformas tratan de saciar la enorme demanda de ficción papal de los espectadores. Las opciones son abundantes y cada una de ellas aborda el infranqueable universo del Vaticano desde una óptica bi... [4958 chars]",
        "url": "https://www.20minutos.es/cinemania/noticias/chatgpt-director-actor-pelicula-perfecta-conclave-fumata-blanca-5707346/",
        "image": "https://imagenes.20minutos.es/files/image_1920_1080/files/redes_cinemania/uploads/imagenes/2025/05/06/inizia-il-conclave-per-elezione-nuovo-papa-2.jpeg",
        "publishedAt": "2025-05-08T02:47:34Z",
        "source": {
          "name": "20 Minutos",
          "url": "https://www.20minutos.es"
        }
      },
      {
        "title": "Google se adelanta a ChatGPT con su asistente de voz: Gemini Live ya puede usar tus apps por ti",
        "description": "Gemini Live, el chatbot de voz de Gemini, podría recibir una actualización que le permitiría interactuar con las apps instaladas en nuestro móvil.",
        "content": "Gemini, la IA de Google, se está acercando cada vez más en algunos aspectos a ChatGPT. Hace unos días, hablamos de que habían descubierto un código dentro de Gemini que permite analizar videos, tal y como ocurre en el chatbot de OpenAI, con unos resu... [1317 chars]",
        "url": "https://www.20minutos.es/tecnologia/inteligencia-artificial/google-se-adelanta-chatgpt-asistente-voz-gemini-live-ya-puede-usar-tus-apps-por-ti-5707280/",
        "image": "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2025/05/07/open-ai-google.png",
        "publishedAt": "2025-05-07T12:10:26Z",
        "source": {
          "name": "20 Minutos",
          "url": "https://www.20minutos.es"
        }
      }
    ]
  }


var newsContainer = document.getElementById("news_container");
var newsTemplate = document.getElementById("news_template");
var articles        = noticias.articles;

articles.forEach(function(item) {
    var newsElement = newsTemplate.cloneNode(true);
    // Delete id
    newsElement.removeAttribute("id");
    // Set display to block
    newsElement.style.display = "block";

    //Fill the info from the json content
    newsElement.querySelector(".news-title").textContent = item.title
    //newsElement.querySelector(".news-desc").textContent = item.description
    newsElement.querySelector(".news-img").src = item.image
    newsElement.querySelector(".news-link").href = item.url

    newsContainer.appendChild(newsElement);

})
