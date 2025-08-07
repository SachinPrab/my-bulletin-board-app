# 📰 Redux Bulletin Board

A simple, clean bulletin board web application built using React and Redux Toolkit (RTK). Users can create posts,edit or delete posts, view authors, see post timestamps, and react with emojis.

---

## 🚀 Live Demo

👉 [View on Vercel](https://my-bulletin-board-app.vercel.app/)

---

## 🔧 Features

- 📝 Create posts with title, content, and author
- 🧠 State management using Redux Toolkit
- ⏰ Human-readable timestamps (e.g., "5 minutes ago")
- 💬 Emoji-based reactions (👍 😮 ❤️ 😂 😠 🤢 😢)
- ✅ Edit or delete a post
- 🔍 Post list with reusable components like `PostAuthor`, `TimeAgo`, and `ReactionButtons`

---

---

##🧪 Sample Usage

Fill the "Add Post" form with a title, content, and select an author.

Click a reaction to add one — click again to remove it.

Edit/Delete buttons are available under each post.

---

## 🛠️ Tech Stack

- ⚛️ React (with Create React App or Next.js)
- 🔁 Redux Toolkit + React Redux
- ⏳ `date-fns` for timestamp formatting
- 💅 CSS (or Chakra UI / Tailwind if used)
- ☁️ Deployed on Vercel

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/redux-bulletin-board.git
cd redux-bulletin-board
npm install
npm start
