export const languages = {
    es: "Español",
    en: "English"
};

export const defaultLanguage = "es";

export const uiTexts = {
 es: {
    hero: {
        title: "Desarrollador Frontend",
        description: "Me apasiona crear sitios web y aplicaciones que sean rápidas, accesibles y atractivas.",
        "projects-btn": "Ver proyectos",
        "contact-btn": "Contactar",
        "img-alt": "Foto de perfil de Juan Manuel Grajales en GitHub"
    },
    about: {
        title: "Sobre mí",
        description: [
            "Soy un desarrollador frontend apasionado por crear aplicaciones web intuitivas y de alto rendimiento. Con experiencia en frameworks modernos de JavaScript y un buen ojo para el diseño, me dedico a construir experiencias digitales que sean tanto atractivas como funcionales.",
            "Mi camino en el desarrollo web comenzó hace {{yearsOfExperience}} años, y desde entonces he trabajado con diversas tecnologías y equipos para entregar productos de alta calidad. Constantemente aprendo y me adapto a nuevas tecnologías para mantenerme a la vanguardia del desarrollo frontend.",
            "Cuando no estoy programando, me encuentro explorando nuevas tendencias de diseño, compartiendo conocimientos como ponente y tutor, y participando en eventos de la comunidad como charlas y talleres."
        ]
    },
    projects: {
        title: "Proyectos",
        description: "Estos son algunos de mis proyectos. Cada uno representa un desafío y una solución única.",
        projectList: [
            {
                title: "Plantpedia",
                alt: "Página de inicio de Plantpedia",
                description: "Enciclopedia de plantas desarrollada con Next.js y Contentful, utilizando arquitectura Jamstack y soporte para múltiples idiomas."
            },
            {
                title: "Generador de sitios web",
                alt: "Panel de administración del generador de sitios web",
                description: "Aplicación web que utiliza servicios en la nube para generar sitios web, permitiendo a los clientes mostrar sus productos y a los administradores gestionar los clientes en el sistema."
            },
            {
                title: "Old Wave E-commerce",
                alt: "Página de inicio de Old Wave E-commerce",
                description: "Plataforma de comercio electrónico construida con React y Node.js, implementando CI/CD para garantizar despliegues eficientes y automatizados."
            },
            {
                title: "Petgram",
                alt: "Carrusel de imágenes de Petgram",
                description: "Clon de Instagram integrado con GraphQL, donde puedes crear tu cuenta e interactuar con las publicaciones de otros amantes de las mascotas."
            }
        ],
        demo: "Ver demo",
    },
    skills: {
        title: "Habilidades",
        description: "Estas son las tecnologías y herramientas que utilizo."
    },
    contact: {
        title: "Contacto",
        description: "Si buscas un desarrollador, tienes alguna pregunta o simplemente quieres conectar, no dudes en escribirme.",
        form: {
            name: {
                label: "Nombre",
                placeholder: "Tu nombre"
            },
            email: {
                label: "Correo electrónico",
                placeholder: "Tu correo electrónico"
            },
            message: {
                label: "Mensaje",
                placeholder: "Escribe tu mensaje"
            },
            submit: "Enviar mensaje"
        },
        success: "Mensaje enviado con éxito",
        error: "Error al enviar el mensaje"
    },
    seo: {
        description: "Desarrollador frontend con experiencia en la creación de sitios web responsivos y optimizados para SEO. Especializado en React. Ubicado en Colombia, disponible para proyectos freelance y de tiempo completo. ¡Contáctame para trabajar juntos en tu próximo proyecto web!"
    }
 },
 en: {
    hero: {
        title: "Frontend Engineer",
        description: "I enjoy building websites and web applications that are fast, accessible, and beautiful.",
        "projects-btn": "View my work",
        "contact-btn": "Contact me",
        "img-alt": "Juan Manuel Grajales github profile"
    },
    about: {
        title: "About me",
        description:[ "I'm a passionate frontend developer with a strong focus on creating intuitive and performant web applications. With expertise in modern JavaScript frameworks and a keen eye for design, I strive to build digital experiences that are both beautiful and functional.", "My journey in web development began {{yearsOfExperience}} years ago, and I've since worked with various technologies and teams to deliver high-quality products. I'm constantly learning and adapting to new technologies to stay at the forefront of frontend development.", "When I'm not coding, you can find me exploring new design trends, sharing my knowledge as a speaker and tutor and attending community events such as talks and workshops."],
    },
    projects: {
        title: "Projects",
        description: "Here are some of my projects. Each one represents a unique challenge and solution.",
        projectList: [
            {
                title: "Plantpedia",
                alt: "Plantpedia home page",
                description: "A plant encyclopedia built with Next.js and Contentful, using a Jamstack architecture and featuring internationalization support."
            },
            {
                title: "Website generator",
                alt: "Website generator admin pannel",
                description: "A web application that uses cloud services to generate generic web pages, allowing clients to display their products and administrators to manage the clients in the system."
            },
            {
                title: "Old Wave E-commerce",
                alt: "Old Wave E-commerce home page",
                description: "An e-commerce platform built with React and Node.js, adding CI/CD to ensure efficient and automated deployments."
            },
            {
                title: "Petgram",
                alt: "Petgram carousel",
                description: "An Instagram clone connected with GraphQL, where you can create your account and interact with the posts of other pet lovers."
            }
        ],
        demo: "Live demo",
    },
    skills: {
        title: "Skills",
        description: "Here are the technologies and tools I work with."
    },
    contact: {
        title: "Contact me",
        description: "Feel free to reach out if you're looking for a developer, have a question, or just want to connect.",
        form: {
            name: {
                label: "Name",
                placeholder: "Your name"
            },
            email: {
                label: "Email",
                placeholder: "Your email"
            },
            message: {
                label: "Message",
                placeholder: "Your message"
            },
            submit: "Send message"
        },
        success: "Message sent successfully",
        error: "Error sending message"
    },
    seo: {
        description: "Frontend engineer with experience in creating responsive and optimized websites for SEO. Specialized in React. Located in Colombia, available for freelance and full-time projects. Contact me to work together on your next web project!"
    }
 } 
} as const;