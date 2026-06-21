const PRODUCTS = [
  {
    id: 1,
    title: "Nutriclear Zinca",
    subtitle: "Zinc Oxide Suspension 39.5%",
    category: "Nutriclear",
    image: "assets/NUTRICLEAR_MOCKUP_BOTTOLE_M0CKUP-1-bcb53942-6ba7-4856-8f27-d75f161c87d7.png",
    descriptionEn: "A micronutrient fertilizer suspension containing 39.5% Zinc Oxide derived from natural sources. It corrects zinc deficiency, promotes root development, enhances disease resistance, stimulates Auxin biosynthesis for better growth/quality, and activates essential plant enzymes.",
    descriptionMr: "३९.५% झिंक ऑक्साईड असलेले एक सूक्ष्मअन्नद्रव्य खत सस्पेन्शन जे नैसर्गिक स्रोतांपासून तयार केले आहे. हे झिंकची कमतरता पूर्ण करते, मुळांची वाढ करते, रोगप्रतिकारक शक्ती वाढवते, आणि वनस्पती वाढ नियंत्रक 'ऑक्सिन'च्या निर्मितीस चालना देऊन पिकांची गुणवत्ता व उत्पादन वाढवते."
  },
  {
    id: 2,
    title: "Nutriclear Boro",
    subtitle: "Boron Ethanolamine 10%",
    category: "Nutriclear",
    image: "assets/NUTRICLEAR_MOCKUP_BOTTOLE_M0CKUP-6-13867d30-d190-415e-821a-5416eca50695.png",
    descriptionEn: "A liquid fertilizer used to prevent and cure boron deficiency via foliar or drip application. Essential for carbohydrate synthesis, flower fertility, cell division, and protein/lipid synthesis. Its sodium-free formulation makes it safe for sensitive crops.",
    descriptionMr: "बोरोनच्या कमतरतेपासून बचाव आणि उपचार करण्यासाठी वापरले जाणारे द्रवरूप खत. हे कार्बोहायड्रेटचे संश्लेषण व वहन, फुलांची सुपीकता, पेशींचे विभाजन आणि प्रथिनांच्या संश्लेषणासाठी अनिवार्य आहे. सोडियममुक्त रचना असल्यामुळे संवेदनशील पिकांसाठी सुरक्षित आहे."
  },
  {
    id: 3,
    title: "Nutriclear Cal 11",
    subtitle: "Calcium Liquid 11%",
    category: "Nutriclear",
    image: "assets/NUTRICLEAR_MOCKUP_BOTTOLE_M0CKUP-3-4e547e59-0242-4663-8a28-e7d7b43fdd8b.png",
    descriptionEn: "A concentrated liquid calcium fertilizer milled to ultra-fine particles (< 1 micron) for instant soil absorption and root contact. Features Transxylen Technology for deep leaf penetration and efficient plant translocation during foliar sprays.",
    descriptionMr: "उच्च एकाग्रतेचे द्रव स्वरूपातील कॅल्शियम खत, ज्याचे कण १ मायक्रॉनपेक्षा लहान असल्याने मुळे त्वरित व प्रभावीपणे शोषण करतात. यातील Transxylen तंत्रज्ञानामुळे कॅल्शियम पानातून पिकाच्या सर्व भागांत वेगाने पोहोचतो."
  },
  {
    id: 4,
    title: "Nutriclear Phos",
    subtitle: "Calcium Dihydrogen Phosphate",
    category: "Nutriclear",
    image: "assets/NUTRICLEAR_MOCKUP_BOTTOLE_M0CKUP-5-10efba2a-494c-4bae-8f7a-ca7c12463519.png",
    descriptionEn: "A liquid formulation that needs thorough mixing and continuous agitation during application to properly supply calcium and phosphate nutrients.",
    descriptionMr: "वापरण्यापूर्वी व्यवस्थित हलवून व सतत ढवळत राहून फवारणी किंवा ड्रीप सिंचनाद्वारे पिकांना फॉस्फरस आणि कॅल्शियम पुरवणारे उत्पादन."
  },
  {
    id: 5,
    title: "Nutriclear C-26",
    subtitle: "Calcium 26%",
    category: "Nutriclear",
    image: "assets/NUTRICLEAR_MOCKUP_BOTTOLE_M0CKUP-4-862a054e-c5ca-4743-8e7c-f4e6033caf64.png",
    descriptionEn: "Develops strong cell walls, promotes robust root growth, enhances nutrient absorption, supports photosynthesis, regulates hormones, and improves stress tolerance and soil structure.",
    descriptionMr: "मजबूत पेशीभित्तिकांचा विकास करते, मुळांची ठोस वाढ करते, पोषक तत्वांचे शोषण वाढवते आणि प्रकाशसंश्लेषणात मदत करते. पिकाची तणाव सहन करण्याची क्षमता व मातीची रचना सुधारते."
  },
  {
    id: 6,
    title: "Nutriclear Protect",
    subtitle: "Orthosilicic Acid 2%",
    category: "Nutriclear",
    image: "assets/NUTRICLEAR_MOCKUP_BOTTOLE_M0CKUP-2-ffd0f4c1-1bcd-4697-b2fb-e4bed2fb4e8b.png",
    descriptionEn: "A natural botanical extract that forms a protective shield on plant surfaces to build resistance against sucking pests. Eco-friendly, non-toxic to humans, and safe for beneficial insects.",
    descriptionMr: "नैसर्गिक वनस्पती स्रोतांपासून तयार केलेले उत्पादन, जे पिकांवर संरक्षणात्मक आवरण तयार करून शोषक कीटकांविरुद्ध नैसर्गिक प्रतिकारशक्ती विकसित करते. हे पर्यावरणपूरक व मानवासाठी सुरक्षित आहे."
  },
  {
    id: 7,
    title: "Nemato Cure",
    subtitle: "Biological Nematocide / Nematode Stress Reliever",
    category: "Nutriclear",
    image: "assets/NUTRICLEAR_MOCKUP_BOTTOLE_M0CKUP-7-3d0a348b-74db-4215-a449-43d1c97d5381.png",
    descriptionEn: "An aqueous herbal extract that regulates host metabolism and targets the eggs, juveniles, and adults of phytophagous nematodes. It paralyses their reproductive and assimilation systems without leaving residual toxicity.",
    descriptionMr: "औषधी वनस्पतींपासून तयार केलेले द्रावण जे वनस्पती-आधारित नेमाटोड्सच्या अंडी आणि बालावस्थेवर मारा करते. त्यांच्या प्रजनन व पोषण प्रणालीवर परिणाम करून त्यांना पक्षाघातग्रस्त करते व नष्ट करते. यात कोणताही विषारी उर्वरित अंश नसतो."
  },
  {
    id: 8,
    title: "Nutriclear Bud Plus",
    subtitle: "Magnesium Hydroxide & Zinc Phosphate",
    category: "Nutriclear",
    image: "assets/NUTRICLEAR_-_BUD_PLUS-29dae0e5-6549-49ae-989f-2e9877bfa4d4.png",
    descriptionEn: "Agri-compounds formulated to support metabolic processes, maximize flower induction, enhance fruit set, activate enzymes, and improve overall fruit quality and yield.",
    descriptionMr: "मॅग्नेशियम हायड्रॉक्साइड आणि झिंक फॉस्फेटचे हे संयोजन कळ्यांची योग्य वाढ, फुलांची संख्या, फळधारणा आणि फळांची गुणवत्ता व उत्पादन सुधारण्यास मदत करते."
  },
  {
    id: 9,
    title: "Growbloom — Stick",
    subtitle: "Silicon Spreader",
    category: "Growbloom",
    image: "assets/GROWBLOOM_MOCKUP_FILE-3-7a4da368-aeb5-4f46-bdba-e2420e8b96c5.png",
    descriptionEn: "A non-ionic bio-based adhesive that lowers the surface tension of water to provide fast, uniform coverage. Prevents agrochemicals from washing away due to rain or dew, even at low dosages.",
    descriptionMr: "एक नॉन-आयोनिक, जैव-आधारित चिकटवणारा पदार्थ (स्टिकर) जो पाण्याचा पृष्ठभाग तणाव कमी करतो. हा कीटकनाशकांना पाऊस किंवा ओस मुळे धुवून जाण्यापासून वाचवतो व औषधांची कार्यक्षमता वाढवतो."
  },
  {
    id: 10,
    title: "Growbloom Magigrow",
    subtitle: "11:11:08 + PGP + TE",
    category: "Growbloom",
    image: "assets/GROWBLOOM_MOCKUP_FILE-1-f4da766a-2cc1-41cf-bcfc-51a721dabd1d.png",
    descriptionEn: "A concentrated emulsion formulation containing at least 10% boron alongside balanced NPK and micronutrients. Prevents premature growth stoppage, fruit cracking, and poor flowering.",
    descriptionMr: "किमान १०% बोरॉन असलेले सांद्रित इमल्शन खत. हे पिकांमधील बोरॉनची कमतरता दूर करून फळे तडकणे (cracking) आणि कमी फुलोरा येणे यांसारख्या समस्या थांबवते."
  },
  {
    id: 11,
    title: "Growbloom — Boost",
    subtitle: "10:34:00",
    category: "Growbloom",
    image: "assets/GROWBLOOM_MOCKUP_FILE-2-b5047aa4-3576-4435-b12d-6545eb22fef0.png",
    descriptionEn: "Accelerates vegetative and root growth even in extremely hot conditions. Minimizes flower and fruit drop while adding shine and juiciness to the harvest. Nitrogen remains stable and highly bio-available.",
    descriptionMr: "पिकांचा वाढीचा वेग वाढवून मुळांना गती देते. फुल व फळ गळ कमी करते आणि फळे चमकदार व रसाळ बनवते. अतिउष्ण हवामानातही मुळांची वाढ सुनिश्चित होते."
  },
  {
    id: 12,
    title: "Growcure — Zn",
    subtitle: "EDTA Chelated Zinc 12%",
    category: "Growcure",
    image: "assets/GROWCURE_ZINC-6fb293be-b479-4ad9-8d96-88f696b4b90f.png",
    descriptionEn: "Prevents micronutrient deficiencies, enhances plant vigor, improves chlorophyll and photosynthesis, and boosts flowering/pod-setting for enhanced output.",
    descriptionMr: "पिकांमधील सूक्ष्म पोषक तत्वांची कमतरता दूर करून पानांमधील क्लोरोफिल (हरितद्रव्य) वाढवते. जलद मुळांचा विकास आणि उत्तम कंद व शेंगा तयार होण्यास मदत करते."
  },
  {
    id: 13,
    title: "Growcure — Nutri Combo",
    subtitle: "EDTA Chelated Mix Micronutrient",
    category: "Growcure",
    image: "assets/GROWCURE_NUTRI_COMBI-14df0c4c-39ef-4c50-add2-983d6595d6b7.png",
    descriptionEn: "Supplies six essential chelated micronutrients together in optimum doses. Boosts chlorophyll and photosynthesis while remaining completely free from harmful sodium and chloride.",
    descriptionMr: "६ अत्यावश्यक सूक्ष्मअन्नद्रव्ये योग्य प्रमाणात एकत्र पुरवणारे मिश्र खत. हे प्रकाशसंश्लेषण प्रक्रियेला गती देते व मिश्र पोषणतुटी टाळते. यात कोणतेही हानिकारक घटक नसतात."
  },
  {
    id: 14,
    title: "Growcure — Ferric",
    subtitle: "Ferrous HEDP 17%",
    category: "Growcure",
    image: "assets/GROWCURE_FERRIC-eb6bcf14-cb0c-410f-8d4a-611ae22e7297.png",
    descriptionEn: "Highly soluble chelated iron fertilizer mixed with P and K. Formulated with HEDP to ensure iron remains completely bio-available to crops even in highly alkaline and high-pH soils.",
    descriptionMr: "फेरस HEDP १७% युक्त केलेटेड लोह खत. HEDP मुळे उच्च pH आणि क्षारीय (चुनखडीयुक्त) जमिनीतही लोह पिकांना सहज उपलब्ध होते, ज्यामुळे क्लोरोफिल निर्मिती वाढते व फळांवर डाग पडत नाहीत."
  },
  {
    id: 15,
    title: "Growcure — Fe",
    subtitle: "EDTA Chelated Ferrous 12%",
    category: "Growcure",
    image: "assets/GROWCURE_FERROUS-9e9c3b1a-d1f0-4b92-9d55-2db76bd7bcb3.png",
    descriptionEn: "Essential throughout the crop cycle, this chelated iron acts as a primary precursor for chlorophyll formation, restoring deep green color and driving holistic growth.",
    descriptionMr: "पिकांच्या वाढीच्या काळात सतत आवश्यक असणारे खत. हे मुख्यत्वे हरितद्रव्य (chlorophyll) निर्मितीसाठी काम करते, ज्यामुळे पानांना गर्द हिरवा रंग मिळतो व संतुलित वाढ होते."
  },
  {
    id: 16,
    title: "Growcure — Mg",
    subtitle: "EDTA Chelated Magnesium 6%",
    category: "Growcure",
    image: "assets/ALFA_PRODUCT_CATALGUE-2-1bf5cdf2-16ce-4eb1-8326-56a8ca1fcf56.png",
    descriptionEn: "Eliminates magnesium deficiencies to improve root development, plant core strength, chlorophyll density, and general output.",
    descriptionMr: "पिकांमधील मॅग्नेशियमची कमतरता दूर करून मुळांचा विकास करते. मॅग्नेशियम हरितद्रव्याचा मुख्य घटक असल्याने पानांचा हिरवेपणा व पिकांची ताकद सुधारते."
  },
  {
    id: 17,
    title: "Alfa Fert — 30:10:10",
    subtitle: "Water Soluble NPK",
    category: "Alfa Fert",
    image: "assets/ALFA_NPK_30_10_10-dde86307-dc02-41a1-8ad7-8cc2c75c58bb.png",
    descriptionEn: "Promotes healthy white root growth, supports flower bud initiation, synchronizes flowering, and reduces fruit/flower drop.",
    descriptionMr: "मजबूत पांढऱ्या मुळांचा विकास करते, फुलांच्या कळ्या एकसारख्या प्रमाणात तयार होण्यास मदत करते आणि फुले-फळे गळणे कमी करते."
  },
  {
    id: 18,
    title: "Alfa Fert — 00:48:47 + TE",
    subtitle: "Water Soluble NPK",
    category: "Alfa Fert",
    image: "assets/ALFA_NPK_00_48_47-4c284aaf-1612-4ebc-9015-078918fbcc76.png",
    descriptionEn: "Highly concentrated water-soluble fertilizer that drives massive white root proliferation, triggers rich flower buds, and stabilizes fruit setting.",
    descriptionMr: "पांढऱ्या मुळांची जोमदार वाढ करणारे, कळ्यांची निर्मिती वाढवणारे आणि फुल व फळ गळतीवर नियंत्रण मिळवणारे पूर्णपणे पाण्यात विरघळणारे खत."
  },
  {
    id: 19,
    title: "Alfa Fert — 00:37:37",
    subtitle: "Water Soluble NPK",
    category: "Alfa Fert",
    image: "assets/ALFA_NPK_00_37_37-e4a73cdc-7332-4471-8210-340076e23b35.png",
    descriptionEn: "Designed for balanced crop development, pushing flower initiation, reinforcing white root architecture, and lowering fruit abortion rates.",
    descriptionMr: "पांढऱ्या मुळांची वाढ सुधारण्यासाठी, मुबलक फुलधारणा होण्यासाठी आणि फुले व फळे गळण्याचा प्रश्न कमी करण्यासाठी शिफारस केलेले विद्रव्य खत."
  },
  {
    id: 20,
    title: "Alfa Fert — 00:42:47 + TE",
    subtitle: "Water Soluble NPK",
    category: "Alfa Fert",
    image: "assets/ALFA_NPK_00_42_47-5da3c92f-1e39-45a9-a7ba-1ef4bbd931e0.png",
    descriptionEn: "Fully water-soluble nutrient mix that triggers quick flowering, enhances crop weight, and upgrades size/quality without causing tissue damage.",
    descriptionMr: "त्वरित फुले आणण्यास मदत करणारे आणि ऊतींना (tissue) इजा न पोहोचवता फळांचा आकार व वजन वाढवून पिकांची गुणवत्ता सुधारणारे खत."
  },
  {
    id: 21,
    title: "Alfa Fert — 10:54:10",
    subtitle: "Water Soluble NPK",
    category: "Alfa Fert",
    image: "assets/ALFA_NPK_105410-c4de2645-bebd-48b4-812f-b18426f8984b.png",
    descriptionEn: "Promotes fast and uniform crop growth, maximizes harvest sizing/weight, and dramatically improves overall fruit quality safely.",
    descriptionMr: "पिकांची समान आणि वेगवान वाढ सुनिश्चित करून फळांचा आकार, वजन आणि पिकाची एकूण प्रत (quality) वाढवणारे पूर्ण विद्रव्य खत."
  }
];

const grid = document.getElementById("products-grid");
const modal = document.getElementById("product-modal");
const modalImage = document.getElementById("modal-image");
const modalCategory = document.getElementById("modal-category");
const modalTitle = document.getElementById("modal-title");
const modalSubtitle = document.getElementById("modal-subtitle");
const modalDescription = document.getElementById("modal-description");
const modalInquire = document.getElementById("modal-inquire");
const langButtons = document.querySelectorAll(".modal__lang-btn");

let activeProduct = null;
let activeLang = "en";

function renderProducts() {
  grid.innerHTML = PRODUCTS.map((product) => `
    <article class="product-card" role="listitem" data-id="${product.id}" tabindex="0" aria-label="${product.title}">
      <div class="product-card__image-wrap">
        <img
          class="product-card__image"
          src="${product.image}"
          alt="${product.title} — ${product.subtitle}"
          loading="lazy"
          width="400"
          height="400"
        >
      </div>
      <div class="product-card__body">
        <p class="product-card__category">${product.category}</p>
        <h3 class="product-card__title">${product.title}</h3>
        <p class="product-card__subtitle">${product.subtitle}</p>
        <div class="product-card__actions">
          <button class="btn btn--primary btn--sm" data-action="learn" data-id="${product.id}">Learn More</button>
          <button class="btn btn--accent-warm btn--sm" data-action="enquire">Enquire Product</button>
        </div>
      </div>
    </article>
  `).join("");
}

function openModal(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  activeProduct = product;
  activeLang = "en";

  modalImage.src = product.image;
  modalImage.alt = `${product.title} — ${product.subtitle}`;
  modalCategory.textContent = product.category;
  modalTitle.textContent = product.title;
  modalSubtitle.textContent = product.subtitle;
  updateModalDescription();


  langButtons.forEach((btn) => {
    const isActive = btn.dataset.lang === "en";
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", isActive);
  });

  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal__close").focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
  activeProduct = null;
}

function updateModalDescription() {
  if (!activeProduct) return;
  modalDescription.textContent = activeLang === "en"
    ? activeProduct.descriptionEn
    : activeProduct.descriptionMr;
  modalDescription.lang = activeLang === "mr" ? "mr" : "en";
}

function setLanguage(lang) {
  activeLang = lang;
  langButtons.forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", isActive);
  });
  updateModalDescription();
}

grid.addEventListener("click", (e) => {
  const enquireBtn = e.target.closest("[data-action='enquire']");
  if (enquireBtn) {
    e.stopPropagation();
    openEnquirePopup();
    return;
  }

  const learnBtn = e.target.closest("[data-action='learn']");
  if (learnBtn) {
    e.stopPropagation();
    openModal(Number(learnBtn.dataset.id));
    return;
  }

  const card = e.target.closest(".product-card");
  if (card && !e.target.closest("[data-action]")) {
    openModal(Number(card.dataset.id));
  }
});

grid.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    const card = e.target.closest(".product-card");
    if (card) {
      e.preventDefault();
      openModal(Number(card.dataset.id));
    }
  }
});

modal.addEventListener("click", (e) => {
  if (e.target.closest("[data-close-modal]")) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) {
    closeModal();
  }
});

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

// Enquire popup
const enquirePopup = document.getElementById("enquire-popup");
const enquireClose = document.getElementById("enquire-close");
const enquireBackdrop = document.getElementById("enquire-backdrop");

function openEnquirePopup() {
  enquirePopup.hidden = false;
  document.body.style.overflow = "hidden";
  enquireClose.focus();
}

function closeEnquirePopup() {
  enquirePopup.hidden = true;
  document.body.style.overflow = "";
}

modalInquire.addEventListener("click", openEnquirePopup);
enquireClose.addEventListener("click", closeEnquirePopup);
enquireBackdrop.addEventListener("click", closeEnquirePopup);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !enquirePopup.hidden) {
    closeEnquirePopup();
  }
});

const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

renderProducts();
