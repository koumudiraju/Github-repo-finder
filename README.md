# 🚀 GitHub Repo Explorer

## 🔗 Live Demo & Repository

- 🌍 **Live App**: ([https://github-repo-finder-koumudiraju.vercel.app/](https://github-repo-finder-9irv.vercel.app/))
- 💻 **GitHub Repository**: ([https://github.com/koumudiraju/Github-repo-finder](https://github.com/koumudiraju/Github-repo-finder))

---

## ✨ Features

### 🔍 Search Repositories
- Search GitHub repositories by keyword using the GitHub REST API.
- Uses a **custom `useDebounce()` hook** to prevent excess API calls on every keystroke.

### 🔃 Pagination
- Navigate through results 10 at a time using **Previous** and **Next** buttons.
- API query uses `?per_page=10&page=n`.

### ⭐ Sort by Stars
- Toggle sorting order (ascending/descending) based on star count.
- Sorting is **client-side** and instant.

### 🌓 Dark Mode Support
- Switch between light and dark themes.
- Implemented using CSS variables and `document.body.classList`.

### 📄 Modal View for Repo Details
- Click any repository row to see:
  - Name
  - Description
  - Stars
  - GitHub link

### ⏳ Loading Feedback
- A **top progress bar** animates when fetching.
- **Shimmering skeletons** maintain layout integrity while data loads.

### 🧠 User-Friendly UX Messages
- **Before Search**:  
  _“🔍 Start by typing a repository name above to search GitHub.”_

- **While Loading**:  
  Animated loading bar and skeletons are shown.

- **No Results Found**:  
  _“No repositories found.”_

- **When Results Load**:  
  _“Click on a row to see more details.”_

---

## 🛠️ Tech Stack

| Tool        | Usage                         |
|-------------|-------------------------------|
| React       | Component-based UI            |
| TypeScript  | Static typing, maintainability|
| Axios       | HTTP requests to GitHub API   |
| CSS Modules | Custom theming & dark mode    |

> ⚠️ Tailwind was originally intended, but not compiling properly on the system — so this project uses **vanilla CSS with dark mode variables**.

---

## How to Run Locally

### 1. Clone the Repo

```bash
git clone https://github.com/koumudiraju/Github-repo-finder.git
```bash
cd Github-repo-finder
```bash
npm install
```bash
npm start

### How to Deploy
Go to vercel.com

Import GitHub repo

Set build command as: npm run build

Output directory: build

Deploy!

