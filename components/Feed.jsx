'use client';

import { useState, useEffect } from "react";
import PromptCardList from './PromptCardList';
import { useRouter } from "next/navigation.js";
import { useSession } from 'next-auth/react';


export default function Feed() {
    const [searchText, setSearchText] = useState('');
    // const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchedResults, setSearchedResults] = useState([]);
    const [posts, setPosts] = useState([]);
    const router = useRouter();
    // const { data: session } = useSession();
    
    
    const filterPrompts = (searchtext) => {
        const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
        return posts.filter((item) =>
            regex.test(item.creator.username) ||
            regex.test(item.tag) ||
            regex.test(item.prompt));
        };
    
    const handleSearchChange = (e)=>{
        setSearchText(e.target.value);
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
    }

    const handleTagClick = (tagName)=>{
        setSearchText(tagName);
        const searchResult = filterPrompts(tagName);
        setSearchedResults(searchResult);
    }

    

    useEffect(()=>{
        const fetchPosts = async ()=>{
            const response = await fetch('/api/prompt', { cache: 'no-store' });
            const data = await response.json();
            setPosts(data);
        }
        fetchPosts();
    }, []);

    return (
        <section className="feed">
            <form 
                className="relative w-full flex-center max-w-xl"
                onSubmit={(e)=>{e.preventDefault()}}
            >
                <input 
                    type="text"
                    placeholder="Search for a tag or a username"
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className="search_input peer"
                />
            </form>
            <PromptCardList 
                posts={searchText? searchedResults : posts}
                handleTagClick={handleTagClick}
            />
        </section>
    )
}
