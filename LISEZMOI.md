# Stock Événements (PWA)

App gratuite, sans compte ni serveur payant. Les données restent sur ton téléphone.

## Mettre l'app en ligne gratuitement (GitHub Pages, ~3 min)
1. Sur github.com : **New repository** → nom `checkout-stock` → Public → Create.
2. **Add file → Upload files** : glisse tout le contenu de ce dossier (index.html, manifest.json, sw.js, lib/, icons/) → Commit.
3. **Settings → Pages** → Source : *Deploy from a branch* → branche `main`, dossier `/ (root)` → Save.
4. Après 1 à 2 minutes, l'app est sur `https://<ton-pseudo>.github.io/checkout-stock/`.

Autre option gratuite : app.netlify.com/drop, puis glisser le dossier.

## L'installer sur le téléphone
- **iPhone** : ouvrir le lien dans **Safari** → bouton Partager (carré avec flèche) → *Sur l'écran d'accueil* → Ajouter. Ouvrir ensuite l'app depuis son icône.
- **Android (Chrome)** : ouvrir le lien → menu ⋮ → *Installer l'application*.

Sur iPhone : pour charger l'Excel reçu sur WhatsApp, enregistre-le d'abord dans *Fichiers* (Partager → Enregistrer dans Fichiers). À l'export, la feuille de partage s'ouvre : *Enregistrer dans Fichiers* ou envoi direct sur WhatsApp.

Une fois ouverte une première fois, elle marche aussi sans réseau (pratique dans le stock).

## U## Le déroulé d'un événement
**+ Nouvel événement** : nom, date, et ton Excel USNE (ou directement le PDF du stock).

1. **Demande** : la liste envoyée au stock. Chaque article a un type, à changer d'un tap :
   *À rendre* (marmites, louches, IT…), *Consommable* (raviers, fourchettes, alu… ne revient pas), *Hors stock* (courses).
   L'app devine le type et retient ta correction pour les prochains événements.
2. **Réponse** : *Importer* le PDF (ou l'Excel) du stock → Dispo, Manque, Indisponible, À confirmer (tbc), Pas de réponse.
   *Copier la liste* = manques + courses, prêt pour WhatsApp et les bons de commande.
3. **Retrait** (au stock) : coche ce que tu prends ; *+ Ajouter* pour la dernière minute. PDF *Bon de sortie* à signer.
4. **Pré-check** (seul, sur le lieu, avant de ranger) : compte le matériel à rendre ; un manque s'affiche tout de suite pour le chercher avant de partir. Pour les consommables, note juste le reste à rendre.
5. **Retour** (au stock, avec le responsable) : la quantité du pré-check est proposée, tu confirmes. Les manques sortent en rouge. PDF *Bon de retour* à signer.

## Courses (bouton « Courses » en haut de l'événement)
Les articles de type *Hors stock* de la demande (chips, menthe, poulet…), plus ceux que tu ajoutes.

1. **Au stock** : pour chaque article, compte ce que tu trouves et mets de côté (− / +), puis coche. 0 = rien trouvé.
   Les consommables pas (assez) présents au stock (indisponible, manque, absent de la réponse, tbc) y sont ajoutés automatiquement,
   avec la quantité manquante. S'ils sortent finalement du stock au retrait, ils disparaissent de la liste. *Retirer* pour en enlever un.
2. **Achats** (en magasin) : liste par magasin (Colruyt / Aldi, Épicerie, Boucherie, Albert Heijn, Sofabel, Desserts).
   Le compteur propose ce qui reste à acheter ; coche ce que tu achètes. Touche le magasin pour le changer.
3. **Bilan** : pour chaque article, demandé / pris au stock / acheté / reste. Ex. chips : 2 demandées → 1 du stock, 1 achetée.
   Export **PDF compte rendu**, **Excel « Courses »**, et **Copier** la liste de ce qui reste (WhatsApp).

## Photos (icône appareil photo en haut de l'événement)
1. Prends une photo avec plusieurs articles : l'app encadre les objets qu'elle reconnaît (couteau, cuillère, bol, verre, bouteille, ciseaux, chaise, table…).
   Vert = lié à un article de ta liste. Jaune = pas sûr : touche le cadre, choisis parmi les suggestions ou cherche l'article.
2. Glisse le doigt sur la photo pour encadrer toi-même un article (ex. un couteau à dents), puis choisis-le.
3. Pas dans ta liste ? L'app propose les articles qui y ressemblent (à valider) ou « + Ajouter à la liste ».
4. *Enregistrer* : chaque cadre devient la photo de son article. L'icône œil à côté du nom l'affiche, à toutes les étapes.

La reconnaissance tourne sur le téléphone (gratuit). La 1re fois, il faut du réseau pour télécharger le modèle (~6 Mo), ensuite ça marche hors ligne.
Les photos restent sur le téléphone (elles ne sont pas dans l'Excel).

## Supprimer un événement
Sur l'accueil, *Supprimer* sur la carte de l'événement, puis *Confirmer*.

## Fichiers (bouton en haut à droite, à toutes les étapes)
- **Exporter l'Excel** au format USNE d'origine : Quantité, Disponible, check out, check in remplis, ajouts en bas de leur onglet, plus un onglet « Suivi événement ».
- **PDF** de l'étape : demande, manques, bon de sortie ou bon de retour.
- **Importer** : réponse du stock (PDF/Excel) ou un Excel exporté par l'app. Tout se fusionne dans l'événement, sur n'importe quel téléphone.

Tout est enregistré sur le téléphone. L'Excel exporté sert aussi de sauvegarde et de passage de relais.
