export interface ProjectsType {
    title: string;
    technologies: string;
    liveLink: string;
    githubLink: string;
    img: string;
    description: string;
}

export const projects: ProjectsType[] = [
    {
        title: 'Storybooks',
        technologies: 'HTML, CSS, JavaScript, Node, Express, MongoDB, Mongoose, Google OAuth, Handlebars, Materialize',
        liveLink: 'https://storybooks-api.cyclic.app',
        githubLink: 'https://github.com/Sathosk/Storybooks',
        img: 'https://user-images.githubusercontent.com/63148481/209016844-4a990fd0-b240-4585-ad5c-fd9f92365baa.jpg',
        description: "StoryBooks is a platform that lets you share your stories and experiences with others. With a simple login using your Google account, you can create stories and choose to make them public or private, depending on your preferences. Public stories can be viewed by other users on the site, allowing you to connect with like-minded individuals and explore different perspectives. Private stories can be saved for your personal reference or shared with other individuals for a more public audience. You can easily manage your stories and change their status at any time. Additionally, StoryBooks provides a public story board where you can browse other users' stories and gain inspiration for your own writing.",
    },
    {
        title: 'Social Media Feed',
        technologies: 'HTML, Sass, JavaScript, Vue, Node, Express, MongoDB, Mongoose, Multer, Cloudinary, Jest',
        liveLink: 'https://social-media-feed.netlify.app',
        githubLink: 'https://github.com/Sathosk/SocialMediaFeed',
        img: 'https://user-images.githubusercontent.com/63148481/213070971-b4545fd6-9757-4c05-aaa8-18b174eb8f0e.png',
        description: "This project simulates a social media feed similar to popular platforms, using MongoDB, Express, Vue and Node as main frameworks. For simulation purposes I have not integrated an authentication system.",
    },
    {
        title: 'Portfolio Website',
        technologies: 'HTML, CSS, JavaScript, TypeScript, React, Node, Express, MongoDB, Mongoose, Styled-components',
        liveLink: 'https://social-media-feed.netlify.app',
        githubLink: 'https://github.com/Sathosk/Porfolio.v1',
        img: 'https://github.com/Sathosk/Porfolio.v1/assets/63148481/4bd37e26-7535-4d0b-b34d-04f48388b99b',
        description: "This is the first version of my Portfolio Website.",
    },
    {
        title: 'Pomodoro Timer',
        technologies: 'HTML, CSS, JavaScript, TypeScript, React, Figma, Styled-components',
        liveLink: 'https://pomodoro-timer-sath.netlify.app/',
        githubLink: 'https://github.com/Sathosk/Pomodoro-Timer',
        img: 'https://github.com/Sathosk/Pomodoro-Timer/assets/63148481/a5306ea3-86bf-43f9-aa28-71e4f7193250',
        description: "This is a simple pomodoro timer app that helps you stay focused and productive by breaking your work into timed intervals. You can create sessions from 5 to 60 minutes, if you are studying on other tabs on your browser you can still see the timer on the title. The app also allows you to track all your previous pomodoro sessions, including those that were interrupted, completed, or still in progress. You can view your session history, see how long you worked, and analyze your productivity over time.",
    },
    {
        title: 'Simple To-Do React',
        technologies: 'HTML, CSS, JavaScript, TypeScript, React, Figma',
        liveLink: 'https://todoapp-saths.netlify.app/',
        githubLink: 'https://github.com/Sathosk/To-do-React',
        img: 'https://user-images.githubusercontent.com/63148481/234432230-586822b7-41aa-4924-9c86-1e0d07a676b2.png',
        description: "This is a fully functional ToDo web application built with React, based on a Figma design provided as a challenge from RocketSeat. With this app, you can create new tasks, delete them, and mark them as completed. The app features an intuitive and easy-to-use interface that makes managing your to-do list a breeze. It's designed to help you stay organized and focused, whether you're a student, professional, or anyone who wants to stay on top of their tasks.",
    },
]