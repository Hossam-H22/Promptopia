
import React from 'react'
import PromptCardList from './PromptCardList.jsx'

export default function Profile({ name, desc, data, handleEdit, handleDelete, handleUserClick, handleTagClick }) {
    
    return (
        <section className="w-full">
            <h1 className="head_text text-left">
                <span className="blue_gradient">{name} Profile</span>
            </h1>
            <p className="desc text-left">{desc}</p>
            <PromptCardList 
                posts={data}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleUserClick={handleUserClick}
                handleTagClick={handleTagClick}
            />
        </section>
    )
}
