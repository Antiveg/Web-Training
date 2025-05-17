"use client"
import { BackgroundGradient } from '@/components/ui/background-gradient'
import React, { useState } from 'react'

export default function Project() {

    const projects = [
        {
            img: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
            project_name: "John Doe",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolorem corrupti aperiam esse sapiente culpa aut, iste, neque cum aspernatur itaque soluta quibusdam nam sint architecto inventore optio. Iste, id."
        },
        {
            img: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
            project_name: "John Doe",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolorem corrupti aperiam esse sapiente culpa aut, iste, neque cum aspernatur itaque soluta quibusdam nam sint architecto inventore optio. Iste, id."
        },
        {
            img: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
            project_name: "John Doe",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolorem corrupti aperiam esse sapiente culpa aut, iste, neque cum aspernatur itaque soluta quibusdam nam sint architecto inventore optio. Iste, id."
        },
        {
            img: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
            project_name: "John Doe",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolorem corrupti aperiam esse sapiente culpa aut, iste, neque cum aspernatur itaque soluta quibusdam nam sint architecto inventore optio. Iste, id."
        },
        {
            img: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
            project_name: "John Doe",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolorem corrupti aperiam esse sapiente culpa aut, iste, neque cum aspernatur itaque soluta quibusdam nam sint architecto inventore optio. Iste, id."
        },
        {
            img: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
            project_name: "John Doe",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolorem corrupti aperiam esse sapiente culpa aut, iste, neque cum aspernatur itaque soluta quibusdam nam sint architecto inventore optio. Iste, id."
        },
        {
            img: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
            project_name: "John Doe",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolorem corrupti aperiam esse sapiente culpa aut, iste, neque cum aspernatur itaque soluta quibusdam nam sint architecto inventore optio. Iste, id."
        },
        {
            img: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
            project_name: "John Doe",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolorem corrupti aperiam esse sapiente culpa aut, iste, neque cum aspernatur itaque soluta quibusdam nam sint architecto inventore optio. Iste, id."
        },
    ]

    return (
        <div className="flex flex-col items-start w-full pl-20 pr-20 gap-4">
            <img 
            className="fixed left-0 top-0 w-full h-full z-[-1] opacity-20"
            src="/assets/BG2.jpg" 
            alt="No Background"/>
            <h1 className="text-left text-[20px]"><b>My Projects</b></h1>
            <div className="grid grid-cols-4 gap-4 w-full">
                {projects.map((project, index) => (
                    <BackgroundGradient key={index} className="overflow-hidden">
                        <div className="rounded-xl overflow-hidden p-3 bg-white">
                            <img 
                            className="w-full rounded-md"
                            src={project.img}
                            alt="No Image" />
                            <div className="w-full h-auto p-2 text-justify">
                                <h1><b>{project.project_name}</b></h1>
                                <p className="text-[14px] line-clamp-5">{project.description}</p>
                            </div>
                        </div>
                    </BackgroundGradient>
                ))}
            </div>
        </div>
    )
}