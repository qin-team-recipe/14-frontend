import React from "react";

export default function RecipeCard({ title, summary, createdAt }) {
  return (
    <div className="p-1">
      <div>
        <img className="rounded-xl"
          src="https://images.unsplash.com/photo-1625485617425-4eb8ed7d82d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2835&q=80"
          alt=""
        />
      </div>
      <div className="line-clamp-2 text-sm font-bold">{title}</div>
      <div className="text-mauve-11 truncate text-xs">{summary}</div>
      <span className="text-mauve-11 truncate text-xs">{createdAt}</span>
    </div>
  );
}
