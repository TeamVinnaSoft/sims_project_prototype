# SIMS Dashboard

A responsive HTML, CSS, and JavaScript dashboard inspired by the provided SIMS screenshot.

## Project structure

```text
SIMS_Dashboard/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
└── README.md
```

## Run locally

1. Download or extract the project folder.
2. Open `index.html` in a browser, or open the folder in VS Code and use Live Server.
3. Font Awesome icons load from a CDN, so an internet connection is needed for the icons.

## Current functionality

- Expand/collapse the sidebar.
- Expand and collapse sidebar submenus.
- Search form validation and demo feedback.
- Profile dropdown menu.
- Responsive layout for smaller screens.

The dashboard currently uses sample values from the reference screenshot. Student/staff search, financial records, and each module's real data operations are placeholders until the workflow and database requirements are defined.

## Push to GitHub

Create an empty repository on GitHub, then run these commands from this folder in the VS Code terminal:

```bash
git init
git add .
git commit -m "Create SIMS dashboard UI"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the URL with your actual GitHub repository URL. If the folder is already a Git repository, do not run `git init` again; check `git status` and `git remote -v` first.
