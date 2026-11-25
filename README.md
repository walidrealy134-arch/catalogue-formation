# Forma — Catalogue de formations (React + Vite)

Projet pédagogique prêt à lancer localement, publier sur GitHub et déployer sur Vercel.

## 1. Prérequis

- Node.js (version LTS recommandée) : https://nodejs.org/
- Un éditeur de code (VS Code, par exemple)
- Un compte GitHub : https://github.com/
- Un compte Vercel : https://vercel.com/

## 2. Installer et lancer le projet

Ouvrir le terminal dans le dossier `catalogue-formations`, puis exécuter :

```bash
npm install
npm run dev
```

Vite affiche une adresse locale, généralement `http://localhost:5173`. Ouvrir cette adresse dans le navigateur.

Pour vérifier la version de production :

```bash
npm run build
npm run preview
```

Le dossier `dist` est généré par `npm run build`.

## 3. Publier le code sur GitHub

Créer un nouveau dépôt GitHub, par exemple `catalogue-formations`. Ne pas ajouter de README, `.gitignore` ou licence depuis GitHub si le projet en contient déjà.

Dans le terminal, à la racine du projet :

```bash
git init
git add .
git commit -m "Initial commit - catalogue de formations"
git branch -M main
git remote add origin https://github.com/VOTRE-UTILISATEUR/catalogue-formations.git
git push -u origin main
```

Remplacer `VOTRE-UTILISATEUR` par votre identifiant GitHub et utiliser l'URL du dépôt réellement créé.

Si Git demande une identification, suivre la procédure de connexion proposée par GitHub.

## 4. Déployer sur Vercel

1. Se connecter sur https://vercel.com/ avec GitHub.
2. Cliquer sur **Add New…** puis **Project**.
3. Importer le dépôt `catalogue-formations`.
4. Vérifier les paramètres :
   - Framework Preset : **Vite**
   - Build Command : `npm run build`
   - Output Directory : `dist`
   - Install Command : `npm install`
5. Cliquer sur **Deploy**.
6. À la fin, ouvrir le domaine `*.vercel.app` fourni par Vercel.

À chaque `git push` sur la branche connectée, Vercel lance automatiquement un nouveau déploiement.

## 5. Mettre à jour le site

Après une modification du code :

```bash
git add .
git commit -m "Mise à jour du catalogue"
git push
```

Vercel détecte le nouveau commit et redéploie le site.

## 6. Structure du projet

```text
catalogue-formations/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css
    ├── data/
    │   └── formations.js
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── FormationCard.jsx
        ├── FormationModal.jsx
        └── Footer.jsx
```

## 7. Fonctionnalités à présenter

- Affichage des formations depuis un tableau JavaScript.
- Affichage dynamique avec `.map()` et une `key` basée sur `formation.id`.
- Passage des données aux composants avec les **props**.
- Filtrage par catégorie.
- Recherche en direct.
- Ouverture d'une fenêtre de détails.
- Mise en page responsive pour mobile et ordinateur.

---

# Guide de présentation — Français

### Introduction

« Bonjour. Aujourd'hui, je vais vous présenter une application React appelée Forma. C'est un catalogue de formations qui permet de consulter, rechercher et filtrer différentes formations. Ensuite, je vais vous montrer comment héberger le code sur GitHub et déployer le site avec Vercel. »

### Étape 1 — Présenter le projet

« Le projet est développé avec React et Vite. React permet de construire l'interface avec des composants réutilisables. Vite sert à créer le projet, lancer le serveur de développement et générer les fichiers de production. »

### Étape 2 — Lancer le projet localement

« J'ouvre le terminal dans le dossier du projet. Je lance `npm install` pour installer les dépendances, puis `npm run dev` pour démarrer le serveur local. Le site est maintenant accessible sur localhost. »

### Étape 3 — Expliquer GitHub

« GitHub est une plateforme qui permet de stocker et versionner le code source. Je crée un dépôt, puis j'envoie les fichiers avec Git : `git add`, `git commit` et `git push`. Le code est maintenant disponible sur GitHub. »

### Étape 4 — Expliquer Vercel

« Vercel est une plateforme d'hébergement et de déploiement. Je connecte mon compte GitHub, j'importe le dépôt et je vérifie les paramètres de build. Pour un projet Vite, la commande de build est `npm run build` et le dossier de sortie est `dist`. Je clique sur Deploy. »

### Étape 5 — Résultat

« Le déploiement est terminé. Vercel me donne une adresse publique en `vercel.app`. Je peux partager ce lien avec n'importe qui. Quand je modifie le code et que je fais un nouveau push sur GitHub, Vercel peut redéployer automatiquement le site. »

### Conclusion

« Pour résumer : React et Vite servent à développer l'application, GitHub sert à héberger le code source et suivre les versions, et Vercel sert à publier le site sur Internet. Merci pour votre attention. »

---

# الشرح بالدارجة المغربية

### 1. شنو هو المشروع؟

هاد المشروع سميتو Forma، وهو موقع فيه مجموعة ديال التكوينات. تقدر تقلب على formation، تصفي حسب catégorie، وتضغط على Details باش تشوف المعلومات كاملة.

### 2. كيفاش نشغلوه فالحاسوب؟

- كنحل VS Code وكنفتح dossier ديال المشروع.
- كنحل Terminal.
- كنكتب `npm install` باش يتسطبو les dépendances.
- من بعد `npm run dev` باش نشعلو الموقع.
- كنفتح الرابط اللي عطانا Vite، غالباً `localhost:5173`.

### 3. شنو هو GitHub؟

GitHub بحال espace en ligne كنحتافظو فيه بالكود ديال المشروع. كننشئو repository، ومن بعد كنرفعو ليه الملفات باستعمال Git.

الأوامر:
- `git init`: تهييء Git فالمشروع.
- `git add .`: إضافة الملفات.
- `git commit -m "Initial commit"`: تسجيل نسخة من التغييرات.
- `git push`: رفع الكود لـ GitHub.

### 4. شنو هو Vercel؟

Vercel منصة كتخلينا ننشرو الموقع ديالنا فالإنترنت. كنربطوها مع GitHub، كنختارو repository ديالنا، وكنضغطو Deploy.

Vercel كيقرا المشروع، كينفذ `npm run build`، وكيستعمل dossier `dist` باش ينشر الموقع.

### 5. شنو الفرق بين GitHub و Vercel؟

- GitHub: كنخزنو فيه الكود source code.
- Vercel: كنستعملوه باش الموقع يولي متاح فالإنترنت برابط public.

### 6. كيفاش نحدّث الموقع؟

إلا بدلنا شي حاجة فالكود، كنستعملو:

```bash
git add .
git commit -m "Update website"
git push
```

Vercel كيتوصل بالتغييرات من GitHub وكيعاود ينشر الموقع أوتوماتيكياً.

## نصيحة للعرض

دير العرض بهاد الترتيب:
1. ورّي الموقع خدام محلياً.
2. جرّب البحث والفلترة وDetails قدّام المجموعة.
3. ورّي repository ديالك فـ GitHub.
4. دير Import للمشروع فـ Vercel.
5. ضغط على Deploy.
6. حل الرابط النهائي فنافذة جديدة وورّي النتيجة.

**مهم:** خاصك تكون واجد بحساب GitHub وVercel، والإنترنت خدام. ما تعطي حتى واحد كلمة السر ديالك.
