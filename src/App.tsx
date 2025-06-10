import React, { useState, useEffect } from "react";
import axios from "axios";
import { Repo } from "./types";
import "./index.css";
import SearchBar from "./components/SearchBar";
import RepoList from "./components/RepoList";
import Pagination from "./components/Pagination";
import RepoDetail from "./components/RepoDetail";
import useDebounce from "./hooks/useDebounce"; // Custom hook to delay execution

function App() {
  // ---------- STATE ----------
  const [query, setQuery] = useState("");                        // User input for search
  const debouncedQuery = useDebounce(query, 500);                // Debounced version of input
  const [repos, setRepos] = useState<Repo[]>([]);                // Fetched repositories
  const [loading, setLoading] = useState(false);                 // Controls loading UI
  const [page, setPage] = useState(1);                           // Current pagination page
  const [sortByStars, setSortByStars] = useState<"asc" | "desc">("desc"); // Sort order
  const [selectedRepo, setSelectedRepo] = useState<Repo | null>(null);   // Repo in detail modal
  const [darkMode, setDarkMode] = useState(false);               // Light/dark mode toggle

  // ---------- EFFECTS ----------

  // Apply or remove dark mode class to the document body
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  // Fetch repositories based on debounced query and current page
  useEffect(() => {
    if (!debouncedQuery) {
      setRepos([]);
      return;
    }

    setLoading(true);

    axios
      .get("https://api.github.com/search/repositories", {
        params: { q: debouncedQuery, per_page: 10, page },
      })
      .then((res) => {
        // Extract required fields from GitHub API
        const items = res.data.items.map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          stars: repo.stargazers_count,
          url: repo.html_url,
        }));

        setRepos(items);
      })
      .finally(() => setLoading(false));
  }, [debouncedQuery, page]);

  // ---------- DERIVED DATA ----------

  // Locally sort repos by stars, without mutating state
  const sorted = [...repos].sort((a, b) =>
    sortByStars === "desc" ? b.stars - a.stars : a.stars - b.stars
  );

  // ---------- RENDER ----------

  return (
    <div className="app-container">
      <div className="app-box">
        {/* 🌙 Dark/Light mode toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            marginBottom: "1rem",
            backgroundColor: "transparent",
            border: "1px solid var(--text-color)",
            color: "var(--text-color)",
            padding: "0.4rem 0.8rem",
            borderRadius: "5px",
            cursor: "pointer",
            float: "right",
          }}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <h1 className="title">GitHub Repo Search</h1>

        {/* 🔍 Search input field */}
        <SearchBar
          onSearch={(q) => {
            setQuery(q);
            setPage(1); // Reset to page 1 on new search
          }}
        />

        {/* ⭐ Sort button */}
        <div className="sort-container">
          <button
            className="sort-button"
            onClick={() =>
              setSortByStars(sortByStars === "desc" ? "asc" : "desc")
            }
          >
            Sort by stars: {sortByStars === "desc" ? "▼" : "▲"}
          </button>
        </div>

        {/* ⏳ Top loading animation */}
        {loading && (
          <div className="loading-bar-container">
            <div className="loading-bar"></div>
          </div>
        )}

        {/* 💀 Skeleton loader during fetch */}
        {loading ? (
          <div>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="skeleton-block">
                <div className="skeleton-shimmer"></div>
              </div>
            ))}
          </div>
        ) : !debouncedQuery ? (
          // 👇 Prompt when search is empty
          <p className="hint-text">
            🔍 Start by typing a repository name above to search GitHub.
          </p>
        ) : (
          // 📋 List of repositories
          <RepoList repos={sorted} onSelect={setSelectedRepo} />
        )}

        {/* 📄 Pagination controls */}
        <Pagination
          page={page}
          onPrev={() => setPage((p) => Math.max(1, p - 1))}
          onNext={() => setPage((p) => p + 1)}
        />

        {/* 🔍 Repo detail modal */}
        {selectedRepo && (
          <RepoDetail
            repo={selectedRepo}
            onClose={() => setSelectedRepo(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
