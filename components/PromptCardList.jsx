import React from 'react'
import PromptCard from './PromptCard';

export default function PromptCardList({ posts, handleTagClick, handleDelete, handleEdit }) {
    return (
        <div className="mt-10 prompt_layout">
            {posts.map((post) => (
                <PromptCard
                    key={post._id}
                    post={post}
                    handleTagClick={handleTagClick}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
            ))}
        </div>
    );
}
