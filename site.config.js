// ============================================================
//  site.config.js — LE SEUL FICHIER À MODIFIER POUR TON SITE
// ============================================================
//  - Le titre, les couleurs et le menu viennent tous d'ici.
//  - Pour ajouter une page : crée un fichier dans pages/
//    puis ajoute une ligne { id, titre, fichier } dans le menu.
//  - Un fichier .md est une page de texte (Markdown).
//    Un fichier .html est une page interactive (simulation, outil).
// ============================================================

window.SITE = {
  titre: "Simulations MDC",
  sousTitre: "BTS Métiers de la chimie",
  auteur: "Marco Reula",

  // Couleur principale
  couleur: "#4f46e5",

  // Page affichée à l'ouverture du site : directement Simulations (Adhésifs)
  accueil: "simulations",

  // Le menu principal
  menu: [
    {
      rubrique: "Navigation",
      pages: [
        { id: "accueil", titre: "🏠 Accueil", fichier: "pages/intro.html" },
        { id: "simulations", titre: "📚 Simulations", fichier: "pages/adhesifs.html" },
        { id: "outils", titre: "🛠️ Outils", fichier: "pages/outils.html" },
        { id: "liens-ext", titre: "🔗 Liens ext", fichier: "pages/liens.html" },
      ],
    },
    {
      rubrique: "SimulationsModules",
      pages: [
        { id: "masse-volumique", titre: "Masse volumique", fichier: "pages/masse-volumique.html" },
        { id: "extrait-sec", titre: "Extrait sec", fichier: "pages/extrait-sec.html" },
        { id: "bille-anneau", titre: "Point de ramollissement bille-anneau", fichier: "pages/bille-anneau.html" },
        { id: "dpu", titre: "Durée pratique d'utilisation (DPU)", fichier: "pages/dpu.html" },
      ],
    },
  ],
};
