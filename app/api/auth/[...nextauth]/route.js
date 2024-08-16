
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { connectedToDB } from '@utils/database.js';
import userModel from '@models/user.js';


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async session({ session }) {
            const sessionUser = await userModel.findOne({
                email: session.user.email
            });
            session.user.id = sessionUser._id.toString();
    
            return session;
        },
        async signIn({ profile }){
            try {
                await connectedToDB();
    
                // check if a user already exists
                const userExists = await userModel.findOne({
                    email: profile.email
                });
    
                // if not, create a new userSelect: 
                if(!userExists){
                    await userModel.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture,
                    });
                }
    
                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        }
    },
    
});

export { handler as GET, handler as POST }