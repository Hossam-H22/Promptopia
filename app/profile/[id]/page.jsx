'use client';
import {useEffect, useState} from 'react'
import { useSession } from 'next-auth/react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Profile from '@components/Profile';

export default function MyProfile() {

    const { data: session } = useSession();
    const { id: userId } = useParams();
    const router = useRouter();
    const [posts, setPosts] = useState([]);
    const searchParams = useSearchParams();
    const username = searchParams.get('name');

    useEffect(()=>{  
        console.log(session?.user.id);
        
        if(session?.user.id===userId){
            router.push('/profile');
        }
        
        
        const fetchPosts = async ()=>{
            const response = await fetch(`/api/users/${userId}/posts`);
            const data = await response.json();
            setPosts(data);            
        }

        if(userId) fetchPosts();
    }, []);




    return (
        <Profile 
            name={username}
            desc={`Welcome to ${username}'s personalized profile page Explore ${username}'s exceptional prompts and be inspired by the power of their imagination`}
            data={posts}
        />
    )
}
