import React from "react";
import image from "../wallpaper.jpg"

export default function Home(){
    return(
        <main>
            <img src={image} alt="image" className="absolute object-cover w-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name"> Hey, I'm Net Creature.</h1>
            </section>
        </main>
    )
}