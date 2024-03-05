export const projects =[
    {
        imageUrl: 'public/Images/Projects/movie-app.png',
        id: 'incredible-movies',
        name: 'Incredible Movies: Movie-search App',
        techStack: [
            'JavaScript - React',
            'HTML',
            'CSS',
        ],
        code: 'https://github.com/snmyk/MovieApp',
        demo: 'https://incredibe-movies.netlify.app/'
    },
    {
        imageUrl: 'public/Images/Projects/smart-tech.png',
        id: 'smart-tech',
        name: 'Smart Tech: Landing page',
        techStack: [
            'JavaScript',
            'HTML',
            'CSS',
        ],
        code: 'https://github.com/snmyk/CODSOFT/tree/main/Task1',
        demo: 'https://smarttech6.netlify.app/'
    },
    {
        imageUrl: 'public/Images/Projects/mytutor.png',
        id: 'mytutor',
        name: 'MyTutorApp: Tutor Management System',
        techStack: [
            'Java - Springboot',
            'JavaScript',
            'MySQL',
            'Thymeleaf',
            'HTML',
            'CSS',
        ],
        
        code: 'https://github.com/snmyk/MyTutor',
        demo: 'N/A'
    },
    {
        imageUrl: 'public/Images/Projects/Alphabet Book.jpg',
        id: 'alphabet-book',
        name: 'Android App: Alphabet Book',
        techStack: [
            'Kotlin',
        ],
        code: 'https://github.com/snmyk/AlphabetApp',
        demo: 'N/A'
    },
    {
        imageUrl: 'public/Images/Projects/client-server.png',
        id: 'client-server',
        name: 'Client-Server: File server application',
        techStack: [
            'Python',
        ],
        code: 'https://github.com/snmyk/Client-server',
        demo: 'N/A'
    }
]
projects.map((project)=>{
    console.log(typeof techStack)
})