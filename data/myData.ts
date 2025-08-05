interface Data {
    email: string,
    linkedin: string,
    resume: string
    github: string,
    leetcode: string,
    CGPA: number
}

export interface Projects {
    image?: string,
    caption?: string,
    name?: string,
    link?: string,
    github?: string,
    description?: string,
    features?: string[],
    technologies?: string[]
}

export const myData: Data = {
    email: 'riyadesai1777@gmail.com',
    linkedin: 'riya-desai-adpr7',
    resume: 'https://drive.google.com/file/d/1BRYNbVXJwT6t-ChNHcMo1jnKJDN0yHec/view?usp=sharing',
    github: 'riyadesai11',
    leetcode: '_riya_d',
    CGPA: 8.04
}

export const projects: Projects[] = [
    {
        image: 'Muzer.png',
        caption: 'Full-stack music streaming platform with playlist creation and Google OAuth.',
        name: 'Muzer',
        link: 'https://github.com/riyadesai11/Muzer',
        github: 'https://github.com/riyadesai11/Muzer',
        description: 'Muzer is a responsive, full-stack music streaming web application that lets users stream music, create playlists, and log in securely via Google. The app delivers a seamless experience with modern design and dynamic routing.',
        features: [
            'User authentication using Google OAuth via NextAuth.js',
            'Playlist creation and music playback across devices',
            'Backend integration with Prisma ORM and PostgreSQL',
            'Responsive design styled with Tailwind CSS and ShadCN',
            'Smooth user interactions and routing with Next.js'
        ],
        technologies: ['Next.js', 'NextAuth.js','Prisma', 'Tailwind CSS', 'ShadCN']
    },
    {
        image: 'Aadhar.png',
        caption: 'Offline-friendly disaster aid verification tool powered by Python and NLP',
        name: 'Aadhar-Based Disaster Relief Management System',
        link: 'https://github.com/riyadesai11/Aadhar-Based-Disaster-Relief-Management-System',
        github: 'https://github.com/riyadesai11/Aadhar-Based-Disaster-Relief-Management-System',
        description: 'A lightweight application designed to track and confirm the distribution of disaster relief using Aadhaar-based identification. It simplifies verification and updates using Excel files as a simulated database, making it ideal for low-resource or emergency environments.',
        features: [
            'Built using Python for data handling and verification',
            'Natural language input handling through basic NLP techniques',
            'Excel sheet used as a lightweight, file-based database via Pandas',
            'Allows accurate tracking and confirmation of resource delivery',
            'Designed for offline use and quick setup in disaster-prone areas'
            ],
        technologies: ['Python', 'Pandas','Excel','NLP']
    },
    {
        image: 'Uber.png',
        caption: 'Cross-platform ride-booking app inspired by Uber with real-time distance calculation.',
        name: 'Uber Clone',
        link: 'https://github.com/riyadesai11/Uber-clone',
        github: 'https://github.com/riyadesai11/Uber-clone',
        description: 'A mobile application that replicates Uber’s core features, allowing users to calculate ride distances, view fare estimates, and navigate between screens on both Android and iOS platforms.',
        features: [
            'Cross-platform development using React Native',
            'Real-time ride distance and fare estimates via Google Distance Matrix API',
            'Centralized state management using Redux',
            'Smooth navigation using React Native Navigation',
            'Modern UI styled with Tailwind CSS'
        ],
        technologies: ['React Native', 'Redux', 'Tailwind CSS', 'Google Distance Matrix API', 'React Native Navigation']
    },
    {
        image: 'portfolio.png',
        caption: 'A sleek full stack developer portfolio to showcase skills, projects, and coding profiles.',
        name: 'Personal Portfolio',
        link: '',
        github: '',
        description: 'A fully responsive web developer portfolio designed to highlight personal projects, technical stack, and online presence across coding platforms. It features project cards with visuals, direct links to GitHub, LinkedIn, and LeetCode, and a downloadable resume—built for professional presentation and easy sharing.',
        features: [
            'Built with Next.js and TypeScript for fast performance.'
            , 
            'Styled using Tailwind CSS for full responsiveness across devices.'
            ,
            'Enhanced with smooth animations using Framer Motion.'
        ],
        technologies: ['Next.js', 'React.js','Tailwind CSS']
    },
    {
        image: 'PetCircle.png',
        caption: 'A pet adoption and care platform built with core web technologies to connect adopters with pets and nearby services.',
        name: 'Pet Circle',
        link: 'https://github.com/riyadesai11/Petcircle',
        github: 'https://github.com/riyadesai11/Petcircle',
        description: 'A user-friendly web application designed to simplify pet adoption and promote responsible pet care. The platform enables users to browse available pets, post adoption listings, and find nearby pet services, all through a responsive and accessible interface built with fundamental web technologies.',
        features: [
            'Dynamic listing of pets available for adoption with images and details',
            'Form-based submission for users to list pets for adoption or fostering',
            'Backend logic in PHP for handling user input, data processing, and form validation',
            'Responsive frontend layout styled with custom CSS for mobile and desktop'
        ],
        technologies: ['HTML5','Javascript','PHP']
    }
]

export const featuredProjects: Projects[] = [
    {
        image: 'Muzer.png',
        caption: 'Full-stack music streaming platform with playlist creation and Google OAuth.',
        name: 'Muzer',
        link: 'https://github.com/riyadesai11/Muzer',
        github: 'https://github.com/riyadesai11/Muzer',
        description: 'Muzer is a responsive, full-stack music streaming web application that lets users stream music, create playlists, and log in securely via Google. The app delivers a seamless experience with modern design and dynamic routing.',
        features: [
            'User authentication using Google OAuth via NextAuth.js',
            'Playlist creation and music playback across devices',
            'Backend integration with Prisma ORM and PostgreSQL',
            'Responsive design styled with Tailwind CSS and ShadCN',
            'Smooth user interactions and routing with Next.js'
        ],
        technologies: ['Next.js', 'NextAuth.js','Prisma', 'Tailwind CSS', 'ShadCN']
    },
    {
        image: 'Aadhar.png',
        caption: 'Offline-friendly disaster aid verification tool powered by Python and NLP',
        name: 'Aadhar-Based Disaster Relief Management System',
        link: 'https://github.com/riyadesai11/Aadhar-Based-Disaster-Relief-Management-System',
        github: 'https://github.com/riyadesai11/Aadhar-Based-Disaster-Relief-Management-System',
        description: 'A lightweight application designed to track and confirm the distribution of disaster relief using Aadhaar-based identification. It simplifies verification and updates using Excel files as a simulated database, making it ideal for low-resource or emergency environments.',
        features: [
            'Built using Python for data handling and verification',
            'Natural language input handling through basic NLP techniques',
            'Excel sheet used as a lightweight, file-based database via Pandas',
            'Allows accurate tracking and confirmation of resource delivery',
            'Designed for offline use and quick setup in disaster-prone areas'
            ],
        technologies: ['Python' , 'Pandas','Excel','NLP']
    },
    {
        image: 'Uber.png',
        caption: 'Cross-platform ride-booking app inspired by Uber with real-time distance calculation.',
        name: 'Uber Clone',
        link: 'https://github.com/riyadesai11/Uber-clone',
        github: 'https://github.com/riyadesai11/Uber-clone',
        description: 'A mobile application that replicates Uber’s core features, allowing users to calculate ride distances, view fare estimates, and navigate between screens on both Android and iOS platforms.',
        features: [
            'Cross-platform development using React Native',
            'Real-time ride distance and fare estimates via Google Distance Matrix API',
            'Centralized state management using Redux',
            'Smooth navigation using React Native Navigation',
            'Modern UI styled with Tailwind CSS'
        ],
        technologies: ['React Native', 'Redux', 'Tailwind CSS', 'Google Distance Matrix API', 'React Native Navigation']
    }
];