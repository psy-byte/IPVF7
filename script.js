document.addEventListener("DOMContentLoaded", function () {
  // Données de tarification
  const pricing = {
    massages: {
      title: "Mes Massages",
      items: [
        {
          name: "Massage Dos et Nuque",
          options: [{ duration: "30mn", price: 45 }]
        },
        {
          name: "Massage Californien",
          options: [
            { duration: "1h", price: 90 },
            { duration: "1h30", price: 120 }
          ]
        },
        {
          name: "Massage Suédois",
          options: [
            { duration: "1h", price: 90 },
            { duration: "1h30", price: 120 }
          ]
        },
        { name: "Massage Lomi-Lomi", options: [{ duration: "1h", price: 95 }] }
      ]
    },
    visage: {
      title: "Le Visage",
      items: [
        {
          name: "Soin visage « belle peau »",
          options: [{ duration: "1h", price: 90 }]
        },
        {
          name: "Soin liftant anti-âge techniques naturelles",
          options: [{ duration: "1h", price: 90 }]
        }
      ]
    },
    mains: {
      title: "Les Mains",
      items: [
        {
          name: "Soin + semi-permanent",
          options: [{ duration: "45mn", price: 50 }]
        },
        {
          name: "Soin + Vernis Classique",
          options: [{ duration: "45mn", price: 40 }]
        },
        {
          name: "Soin Detox Japonais sans vernis",
          options: [{ duration: "45mn", price: 45 }]
        },
        {
          name: "Supplément massage des mains et avant bras",
          options: [{ duration: "10mn", price: 18 }]
        }
      ]
    },
    pieds: {
      title: "Les Pieds",
      items: [
        {
          name: "Soin + vernis semi permanent",
          options: [{ duration: "60mn", price: 60 }]
        },
        {
          name: "Soin + vernis classique",
          options: [{ duration: "45mn", price: 50 }]
        },
        {
          name: "Soin Detox Japonais sans vernis",
          options: [{ duration: "60mn", price: 55 }]
        },
        {
          name: "Dépose semi permanent*",
          options: [{ duration: "-", price: 10 }]
        },
        { name: "Supplément French", options: [{ duration: "-", price: 10 }] }
      ],
      note: "* Offert si la pose de Semi a été réalisée par mes soins"
    },
    forfaits: {
      title: "Les Forfaits Mains & Pieds",
      items: [
        {
          name: "Soin + vernis classique",
          options: [{ duration: "90mn", price: 80 }]
        },
        {
          name: "Soin + semi Permanent",
          options: [{ duration: "90mn", price: 96 }]
        },
        {
          name: "Soin + Mix vernis classique et vernis semi P",
          options: [{ duration: "90mn", price: 90 }]
        },
        {
          name: "Soin express + vernis",
          options: [{ duration: "60mn", price: 70 }]
        },
        {
          name: "Detox soin Japonais sans vernis",
          options: [{ duration: "90mn", price: 95 }]
        }
      ]
    }
  };

  // Données des services
  const services = {
    californien: {
      title:
        "Massage Californien : Une Expérience de Relaxation Profonde à Domicile",
      content: `
        <hr>
        <p>Dans le rythme effréné de la vie parisienne, trouver un moment pour se ressourcer devient essentiel. Le massage californien à domicile vous offre cette parenthèse de bien-être, transformant votre espace personnel en un véritable havre de paix.</p>
        <hr>
        <h3>Qu'est-ce que le Massage Californien ?</h3>
        <hr>
        <p>Le massage californien est bien plus qu'un simple soin corporel. C'est une invitation à un voyage sensoriel, une expérience holistique qui nourrit à la fois le corps et l'esprit. Caractérisé par des mouvements longs, fluides et enveloppants, ce massage se distingue par :</p>
        <ul>
            <li>Sa douceur exceptionnelle</li>
            <li>Son effet profondément relaxant</li>
            <li>Sa capacité à évacuer le stress accumulé</li>
            <li>Son pouvoir de ressourcement</li>
        </ul>
      `,
      duration: "Durée : 1h (90€) / 1h30 (120€)"
    },
    suedois: {
      title: "Massage Suédois : Revitalisation et Relaxation à Domicile",
      content: `
        <hr>
        <p>Dans notre quotidien souvent frénétique, trouver l'équilibre entre détente et dynamisme peut sembler un défi. Le massage suédois à domicile apporte une solution sur mesure, alliant revitalisation et relaxation profonde.</p>
        <hr>
        <h3>Les Bienfaits du Massage Suédois</h3>
        <p>Cette technique de massage offre de nombreux avantages pour le corps et l'esprit :</p>
        <ul>
            <li>Relâchement des tensions musculaires : Idéal pour dénouer les nœuds et soulager les douleurs</li>
            <li>Amélioration de la circulation sanguine : Favorise l'oxygénation des tissus et l'élimination des toxines</li>
            <li>Réduction du stress : Procure une sensation de bien-être durable</li>
            <li>Boost d'énergie : Revitalise le corps et l'esprit</li>
            <li>Amélioration de la flexibilité : Aide à retrouver souplesse et mobilité</li>
        </ul>
      `,
      duration: "Durée : 1h (90€) / 1h30 (120€)"
    },
    lomiLomi: {
      title: "Massage Lomi-Lomi : Une Vague de Bien-être à Domicile",
      content: `
        <hr>
        <p>Imaginez-vous transporté sur les plages paradisiaques d'Hawaï, bercé par le doux murmure des vagues, sans même quitter le confort de votre foyer. Le massage Lomi-Lomi à domicile vous offre cette parenthèse exotique, alliant relaxation profonde et voyage sensoriel.</p>
        <hr>
        <h3>Qu'est-ce que le Massage Lomi-Lomi ?</h3>
        <p>Le Lomi-Lomi, également connu sous le nom de massage hawaïen, est bien plus qu'un simple massage :</p>
        <ul>
            <li>Une pratique ancestrale issue de la tradition des guérisseurs hawaïens</li>
            <li>Une approche holistique visant l'harmonie du corps, de l'esprit et de l'âme</li>
            <li>Une technique caractérisée par des mouvements fluides et enveloppants</li>
        </ul>
      `,
      duration: "Durée : 1h (95€)"
    },
    detox: {
      title: "Soin Ongles Détox Japonais",
      content: `
        <hr>
        <p>Dans l'univers en constante évolution des soins de beauté, une technique ancestrale japonaise fait son grand retour : le soin détox pour les ongles. Ce traitement innovant promet de redonner vie et éclat à vos ongles, tout en les renforçant durablement.</p>
        <hr>
        <h3>Qu'est-ce que le Soin Détox Japonais ?</h3>
        <p>Le soin détox japonais est bien plus qu'un simple soin des ongles. C'est un véritable rituel de beauté qui puise ses origines dans les traditions cosmétiques japonaises. Ce traitement holistique vise à restaurer la santé naturelle de vos ongles, en combinant des ingrédients naturels puissants et des techniques de soin sophistiquées.</p>
      `,
      duration: "Durée : 45mn (45€)"
    },
    dosNuque: {
      title: "Massage Dos et Nuque : Soulagement Ciblé à Domicile",
      content: `
        <hr>
        <p>Dans notre quotidien souvent effréné, les tensions s'accumulent insidieusement, particulièrement dans le dos et la nuque. Le massage ciblé de ces zones, réalisé dans le confort de votre domicile, offre une solution rapide et efficace pour retrouver souplesse et sérénité.</p>
        <hr>
        <h3>Les Bienfaits du Massage Dos et Nuque</h3>
        <p>Ce massage ciblé offre de nombreux avantages, incluant :</p>
        <ul>
            <li>Le soulagement rapide des tensions</li>
            <li>L'amélioration de la posture</li>
            <li>La réduction du stress</li>
            <li>L'augmentation de la mobilité</li>
        </ul>
      `,
      duration: "Durée : 30mn (45€)"
    },
    visageBellePeau: {
      title: "Soin Visage « Belle Peau » : Éclat et Fraîcheur à Domicile",
      content: `
        <hr>
        <p>Dans le théâtre quotidien de nos vies, où les masques se succèdent au rythme effréné des heures, il existe un moment suspendu, une parenthèse enchantée où le rideau tombe et laisse place à la vérité de votre peau. Le soin visage « Belle Peau » à domicile n'est pas qu'un simple rituel de beauté ; c'est une renaissance, un voyage sensoriel au cœur de votre être le plus intime : votre visage.</p>
        <hr>
        <h3>La Symphonie des Sens : Un Ballet en Cinq Actes</h3>
        <ol>
            <li>Acte I : Le Démaquillage, ou l'Art de Se Dévoiler</li>
            <li>Acte II : L'Exfoliation, une Valse de Renouveau</li>
            <li>Acte III : Le Massage, une Chorégraphie de Bien-être</li>
            <li>Acte IV : Le Masque, un Voile de Soins</li>
            <li>Acte V : L'Hydratation, le Final Éclatant</li>
        </ol>
      `,
      duration: "Durée : 1h (90€)"
    },
    liftantAntiAge: {
      title: "Soin Liftant Anti-Âge : Jeunesse et Fermeté à Domicile",
      content: `
        <hr>
        <p>Dans le grand livre du temps, chaque jour tourne une page, laissant sur notre visage l'empreinte subtile de son passage. Mais imaginez un instant pouvoir remonter le cours de cette rivière impétueuse, effacer les sillons creusés par les rires et les soucis, et retrouver la fraîcheur d'un matin de printemps sur votre peau.</p>
        <hr>
        <h3>L'Alchimie de la Jeunesse : Une Symphonie en Trois Mouvements</h3>
        <ol>
            <li>Prélude : La Préparation du Teint</li>
            <li>Allegro : Le Massage Liftant, une Danse avec le Temps</li>
            <li>Adagio : L'Application des Élixirs Précieux</li>
        </ol>
      `,
      duration: "Durée : 1h (90€)"
    },
    semiPermanent: {
      title: "Soin + Semi-Permanent : Beauté Durable à Domicile",
      content: `
        <hr>
        <p>Dans le grand théâtre de la beauté, vos mains et vos pieds sont les acteurs silencieux de votre quotidien. Ils content l'histoire de vos jours, de vos nuits, et effleures vos rêves. Mais que diriez-vous de leur offrir non seulement un instant de grâce, mais une beauté qui défie le temps ?</p>
        <hr>
        <h3>Le Rituel en Trois Actes</h3>
        <ol>
            <li>Le Lever de Rideau : La Préparation</li>
            <li>L'Acte Premier : L'application du Semi-Permanent</li>
            <li>L'Acte Second : Le Soin Nourrissant</li>
        </ol>
      `,
      duration: "Durée : 45mn (50€)"
    }
  };

  // Sélecteurs DOM centralisés
  const elements = {
    serviceGrid: document.querySelector(".service-grid"),
    pricingGrid: document.querySelector(".pricing-grid"),
    modal: document.getElementById("modal"),
    modalTitle: document.getElementById("modal-title"),
    modalContent: document.getElementById("modal-description"),
    modalDuration: document.getElementById("modal-duration"),
    closeBtn: document.querySelector(".close"),
    dateInput: document.getElementById("date"),
    timeSlotsContainer: document.getElementById("timeSlots"),
    categorySelect: document.getElementById("category"),
    serviceSelect: document.getElementById("service"),
    optionSelect: document.getElementById("option"),
    reservationForm: document.getElementById("reservation-form"),
    nameInput: document.getElementById("name"),
    phoneInput: document.getElementById("phone"),
    addressInput: document.getElementById("address"),
    infoRequestInput: document.getElementById("infoRequest"),
    loader: document.getElementById("loader")
  };

  function init() {
    loadServices();
    loadPricing();
    setupModal();
    initReservationSystem();
    setupEventListeners();
    handleLoader();
    lazyLoadImages();
    handleNetworkError();
    setupImageCache();
    setupSmoothAnimations();
  }

  function setupEventListeners() {
    // Navigation fluide
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Gestion des événements d'orientation
    window.addEventListener("orientationchange", () => {
      setTimeout(() => {
        window.scrollTo(0, window.scrollY);
      }, 100);
    });

    // Configuration du lien témoignages
    setupTestimonialsLink();

    // Configuration du tracking téléphone
    setupPhoneTracking();
  }

  // Gestion du loader
  function handleLoader() {
    if (elements.loader) {
      window.addEventListener("load", () => {
        elements.loader.classList.add("hidden");
        setTimeout(() => {
          elements.loader.style.display = "none";
        }, 300);
      });
    }
  }

  // Chargement des services
  function loadServices() {
    if (elements.serviceGrid) {
      Object.entries(services).forEach(([key, service]) => {
        const serviceElement = document.createElement("div");
        serviceElement.className = "service";
        serviceElement.innerHTML = `
          <h3>${service.title.split(":")[0]}</h3>
          <p>${service.content.split(".")[0]}.</p>
          <button class="read-more" data-service="${key}">En savoir plus</button>
        `;
        elements.serviceGrid.appendChild(serviceElement);
      });
    }
  }

  // Chargement des tarifs
  function loadPricing() {
    if (elements.pricingGrid) {
      let pricingHTML = "";
      for (const category in pricing) {
        pricingHTML += `
          <div class="pricing-category">
            <h3>${pricing[category].title}</h3>
            <table class="pricing-table">
              <thead>
                <tr>
                  <th class="service-column">Service</th>
                  <th class="duration-column">Durée</th>
                  <th class="price-column">Tarif</th>
                </tr>
              </thead>
              <tbody>
                ${pricing[category].items
                  .flatMap((item) =>
                    item.options.map(
                      (option) => `
                        <tr>
                          <td class="service-column">${item.name}</td>
                          <td class="duration-column">${option.duration}</td>
                          <td class="price-column">${option.price}€</td>
                        </tr>
                      `
                    )
                  )
                  .join("")}
              </tbody>
            </table>
            ${
              pricing[category].note
                ? `<p class="pricing-note">${pricing[category].note}</p>`
                : ""
            }
          </div>
        `;
      }
      elements.pricingGrid.innerHTML = pricingHTML;
    }
  }

  // Configuration de la modal
  function setupModal() {
    const {
      modal,
      modalTitle,
      modalContent,
      modalDuration,
      closeBtn
    } = elements;

    if (modal && modalTitle && modalContent && modalDuration && closeBtn) {
      document.addEventListener("click", function (e) {
        if (e.target.classList.contains("read-more")) {
          const serviceKey = e.target.getAttribute("data-service");
          const service = services[serviceKey];
          modalTitle.textContent = service.title;
          modalContent.innerHTML = service.content.replace(
            "<p>",
            '<p class="introduction">'
          );
          modalDuration.textContent = service.duration;
          modal.style.display = "block";
          modalContent.scrollTop = 0;
        }
      });

      closeBtn.onclick = () => (modal.style.display = "none");
      window.onclick = (event) => {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      };
    }
  }

  // Système de réservation
  function initReservationSystem() {
    populateCategories();
    if (elements.dateInput) {
      elements.dateInput.addEventListener("change", fetchTimeSlots);
    }
    if (elements.categorySelect) {
      elements.categorySelect.addEventListener("change", populateServices);
    }
    if (elements.serviceSelect) {
      elements.serviceSelect.addEventListener("change", populateOptions);
    }
    if (elements.reservationForm) {
      elements.reservationForm.addEventListener(
        "submit",
        handleReservationSubmit
      );
    }
  }

  // Remplissage des catégories
  function populateCategories() {
    if (elements.categorySelect) {
      elements.categorySelect.innerHTML =
        '<option value="">Choisissez une catégorie</option>';
      for (const [key, category] of Object.entries(pricing)) {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = category.title;
        elements.categorySelect.appendChild(option);
      }
    }
  }

  // Récupération des créneaux horaires
  async function fetchTimeSlots() {
    const availableSlots = [
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00"
    ];
    const slots = availableSlots.filter(() => Math.random() > 0.5);
    displayTimeSlots(slots);
  }

  // Affichage des créneaux horaires
  function displayTimeSlots(slots) {
    if (elements.timeSlotsContainer) {
      elements.timeSlotsContainer.innerHTML = "";
      slots.forEach((slot) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = slot;
        button.addEventListener("click", () => selectTimeSlot(button));
        elements.timeSlotsContainer.appendChild(button);
      });
    }
  }

  // Sélection d'un créneau horaire
  function selectTimeSlot(selectedButton) {
    const buttons = elements.timeSlotsContainer.querySelectorAll("button");
    buttons.forEach((button) => button.classList.remove("selected"));
    selectedButton.classList.add("selected");
  }

  // Population des services
  function populateServices() {
    if (elements.serviceSelect && elements.optionSelect) {
      const category = elements.categorySelect.value;
      elements.serviceSelect.innerHTML =
        '<option value="">Choisissez un service</option>';
      elements.optionSelect.innerHTML =
        '<option value="">Choisissez une option</option>';

      if (category && pricing[category]) {
        pricing[category].items.forEach((item) => {
          const option = document.createElement("option");
          option.value = item.name;
          option.textContent = item.name;
          elements.serviceSelect.appendChild(option);
        });
      }
    }
  }

  // Population des options
  function populateOptions() {
    if (elements.optionSelect) {
      const category = elements.categorySelect.value;
      const serviceName = elements.serviceSelect.value;
      elements.optionSelect.innerHTML =
        '<option value="">Choisissez une option</option>';

      if (category && serviceName && pricing[category]) {
        const service = pricing[category].items.find(
          (item) => item.name === serviceName
        );
        if (service) {
          service.options.forEach((option) => {
            const optionElement = document.createElement("option");
            optionElement.value = `${option.duration}-${option.price}`;
            optionElement.textContent = `${option.duration} - ${option.price}€`;
            elements.optionSelect.appendChild(optionElement);
          });
        }
      }
    }
  }

  // Gestion de la soumission du formulaire
  function handleReservationSubmit(event) {
    event.preventDefault();

    const formData = {
      date: elements.dateInput.value,
      time: elements.timeSlotsContainer.querySelector(".selected")?.textContent,
      category:
        elements.categorySelect.options[elements.categorySelect.selectedIndex]
          .text,
      service: elements.serviceSelect.value,
      option: elements.optionSelect.value,
      name: elements.nameInput.value,
      phone: elements.phoneInput.value,
      address: elements.addressInput.value,
      infoRequest: elements.infoRequestInput.value
    };

    if (validateFormData(formData)) {
      const [duration, price] = formData.option.split("-");
      showConfirmation(formData, duration, price);
      sendReservationToBackend(formData, duration, price);
    } else {
      alert(
        "Veuillez remplir tous les champs obligatoires pour finaliser la réservation."
      );
    }
  }

  // Validation des données du formulaire
  function validateFormData(formData) {
    return (
      formData.date &&
      formData.time &&
      formData.category &&
      formData.service &&
      formData.option &&
      formData.name &&
      formData.phone &&
      formData.address
    );
  }

  // Affichage de la confirmation
  function showConfirmation(formData, duration, price) {
    let message = `Réservation confirmée pour ${formData.name}\n`;
    message += `Service: ${formData.service} (${duration})\n`;
    message += `Date: ${formData.date} à ${formData.time}\n`;
    message += `Prix: ${price}€\n`;
    message += `Téléphone: ${formData.phone}\n`;
    message += `Adresse: ${formData.address}\n`;
    if (formData.infoRequest) {
      message += `Informations supplémentaires: ${formData.infoRequest}\n`;
    }
    alert(message);
  }

  // Envoi des données au backend
  function sendReservationToBackend(formData, duration, price) {
    const reservationData = {
      ...formData,
      duration,
      price: parseInt(price)
    };
    console.log("Données de réservation à envoyer:", reservationData);
  }

  // Fonctions utilitaires
  function setupTestimonialsLink() {
    const testimonialsLink = document.getElementById("temoignages-link");
    if (testimonialsLink) {
      testimonialsLink.addEventListener("click", function (e) {
        e.preventDefault();
        window.open("https://codepen.io/psy-byte/pen/VwozoqV", "_blank");
      });
    }
  }

  function setupPhoneTracking() {
    const phoneLink = document.querySelector(".contact-info a");
    if (phoneLink) {
      phoneLink.addEventListener("click", () => {
        console.log("Numéro de téléphone cliqué");
      });
    }
  }

  function lazyLoadImages() {
    const images = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }

  // Initialisation
  init();
});

// Validation des dates
function validateDate(date) {
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Vérifier si la date est dans le futur
  if (selectedDate < today) {
    alert("Veuillez sélectionner une date future");
    return false;
  }

  // Vérifier si la date n'est pas trop éloignée (ex: max 3 mois)
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  if (selectedDate > maxDate) {
    alert("Les réservations sont limitées à 3 mois à l'avance");
    return false;
  }

  return true;
}

// Gestion des erreurs réseau
function handleNetworkError() {
  window.addEventListener("offline", () => {
    showNotification(
      "Vous êtes hors ligne. Certaines fonctionnalités peuvent être limitées.",
      "error"
    );
  });

  window.addEventListener("online", () => {
    showNotification("Connexion rétablie !", "success");
  });
}

// Système de notification
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("fade-out");
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// Gestion améliorée du cache des images
function setupImageCache() {
  // Préchargement des images critiques
  const criticalImages = [
    "https://github.com/psy-byte/IC-V3/blob/main/dark.jpg?raw=true"
  ];

  if ("caches" in window) {
    caches.open("image-cache").then((cache) => {
      cache.addAll(criticalImages);
    });
  }
}

// Animations fluides
function setupSmoothAnimations() {
  const animatedElements = document.querySelectorAll(
    ".service, .pricing-category"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  animatedElements.forEach((el) => observer.observe(el));
}

// Validation améliorée du formulaire
function validateForm(formData) {
  const errors = [];

  // Validation du nom
  if (formData.name.length < 2) {
    errors.push("Le nom doit contenir au moins 2 caractères");
  }

  // Validation du téléphone
  const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
  if (!phoneRegex.test(formData.phone)) {
    errors.push("Numéro de téléphone invalide");
  }

  // Validation de l'adresse
  if (formData.address.length < 10) {
    errors.push("Veuillez entrer une adresse complète");
  }

  if (errors.length > 0) {
    errors.forEach((error) => showNotification(error, "error"));
    return false;
  }
  return true;
}