'use server'

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY

export const tokenProvider = async() => {
    const user = await currentUser()

    if(!user) throw new Error("User not logged In")
    if(!apiKey) throw new Error("No API Key")
    if(!apiSecret) throw new Error("No Api Secret Enabled")
    
    const client = new StreamClient(apiKey, apiSecret, {timeout: 5000})

    //creating user and userToken
    const expiration = Math.round(new Date().getTime() / 1000) + (60*60)
    const tokenissued = Math.floor(Date.now() / 1000) - 60;
    const token = client.generateUserToken({user_id: user.id, expiration, tokenissued})

    return token;
}