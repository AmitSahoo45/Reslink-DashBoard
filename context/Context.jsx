import { createContext, useState } from 'react';

export const ContextStore = createContext();

export const ContextProvider = ({ children }) => {
    const ACTIVEPROJECTS = 7, PROPOSALS = 4, ACTIVEJOBS = 3, APPLICATION = 240;

    const postedProjects = [
        {
            id: 1,
            title: "Write a blog post about the history of the internet",
            status: "closed",
            color: '#CD7849'
        },
        {
            id: 2,
            title: "Design a new logo for our company",
            status: "payment",
            color: '#D9D9D9'
        },
        {
            id: 3,
            title: "Develop a mobile app for our product",
            status: "interview",
            color: '#FDD26E'
        },
        {
            id: 4,
            title: "Write a press release for our new product launch",
            status: "task",
            color: '#73C2B4'
        },
        {
            id: 5,
            title: "Create a social media campaign for our new product",
            status: "closed",
            color: '#CD7849'
        },
        {
            id: 6,
            title: "Translate our website into Spanish",
            status: "payment",
            color: '#D9D9D9'
        },
    ];

    return (
        <ContextStore.Provider value={{
            ACTIVEPROJECTS, PROPOSALS, ACTIVEJOBS, APPLICATION,
            postedProjects
        }}>
            {children}
        </ContextStore.Provider>
    )
}