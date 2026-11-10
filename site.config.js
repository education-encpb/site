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
  titre: "Formu au labo",
  sousTitre: "Chimie — BTS Métiers de la chimie",
  auteur: "Marco Reula",

  // Couleur principale (boutons, liens, menu actif). Code couleur au format #RRGGBB.
  couleur: "#b45309",

  // Page affichée à l'ouverture du site.
  accueil: "accueil",

  // Le menu : seulement la rubrique Simulations
  menu: [
    {
      rubrique: "Simulations",
      pages: [
        { id: "accueil", titre: "Catalogue des simulations", fichier: "pages/accueil.html" },
        { id: "masse-volumique", titre: "Masse volumique (Hubbard)", fichier: "pages/masse-volumique.html" },
        { id: "extrait-sec", titre: "Extrait sec (étuve)", fichier: "pages/extrait-sec.html" },
      ],
    },
  ],
};
