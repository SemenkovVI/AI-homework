// This file exports TypeScript types and interfaces used in the application.

// Example of a type for a user
export interface User {
    id: number;
    name: string;
    email: string;
}

// Example of a type for a post
export interface Post {
    id: number;
    title: string;
    content: string;
    authorId: number;
}

// Add more types and interfaces as needed