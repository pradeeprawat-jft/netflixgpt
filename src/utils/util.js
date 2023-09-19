export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const LOGIN_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2U0YjBmZjUwODNiMjIwYWVkMDk3ZjY1NDcwYjdkZSIsInN1YiI6IjY0ZjZiZmJiZmZjOWRlMDBmZTNlNThjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.acnZk0ua2ZWHs7ZeZmvKkdLYCdxpz2hk-4ygFozI6ss",
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500/";

export const LANG_SUPPORT = [
  { name: "English", identifier: "en" },
  { name: "Hindi", identifier: "hindi" },
];

export const OPENAI_KEY = process.env.REACT_APP_GPT_KEY;
