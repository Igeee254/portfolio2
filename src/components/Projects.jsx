import React, { useEffect, useState } from 'react';
import './Projects.css';

const staticProjects = [
    {
        id: 'kwelistore-kenya',
        title: 'KweliStore Premium',
        description: 'Modern Android e-commerce ecosystem built with React Native and Expo, featuring M-Pesa integration and high-performance native bundling.',
        image_url: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop',
        link_url: 'https://kwelistore-kenya.vercel.app/' // Assuming this is the link based on context
    },
    {
        id: 'kwelistore-admin',
        title: 'KweliStore Admin Hub',
        description: 'Secure native administrative control panel for real-time inventory management, order tracking, and store metrics.',
        image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        link_url: 'https://github.com/Igeee254/el_uncle_admin'
    },
    {
        id: 'greenview-app',
        title: 'Greenview Real Estate',
        description: 'Luxury property management and listing platform featuring immersive galleries and automated lead generation.',
        image_url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop',
        link_url: 'https://greenview-app.vercel.app/'
    },
    {
        id: 'car-marketplace-pwa',
        title: 'AUTOMARKET Premium',
        description: 'High-end automotive marketplace PWA with 360-view visualization and realistic Kenyan (KES) pricing.',
        image_url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop',
        link_url: 'https://car-markeplace.vercel.app/'
    },
    {
        id: 'alpha-boutique',
        title: 'Alpha Boutique',
        description: 'Premium e-commerce platform with a focus on high-end fashion and luxury experience.',
        image_url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
        link_url: 'https://alpha-boutique-app.vercel.app/'
    }
];

const Projects = () => {
    const [fetchedProjects, setFetchedProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/projects')
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch projects");
                return res.json();
            })
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    // OVERRIDE: Ensure the Car Marketplace always points to the standalone Vercel app
                    const sanitized = data.map(project => {
                        if (project.title === 'AUTOMARKET Premium') {
                            return { ...project, link_url: 'https://car-markeplace.vercel.app/' };
                        }
                        return project;
                    });
                    setFetchedProjects(sanitized);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching projects:", err);
                setLoading(false); // Fallback to static
            });
    }, []);

    const existingTitles = new Set(fetchedProjects.map(p => p.title));
    const uniqueStatic = staticProjects.filter(p => !existingTitles.has(p.title));
    const displayProjects = [...uniqueStatic, ...fetchedProjects];

    if (loading) return <div className="container" style={{ padding: '5rem', textAlign: 'center' }}>Loading projects...</div>;

    return (
        <section id="projects" className="projects container">
            <div className="section-header">
                <div className="badge">Our Projects</div>
                <h2>Showcasing Our <span className="highlight">Dedication</span></h2>
                <p>Explore the diverse range of digital products we've brought to life.</p>
            </div>

            <div className="projects-grid">
                {displayProjects.map((project) => (
                    <div key={project.id} className="project-card glass">
                        <div className="project-image">
                            <img src={project.image_url} alt={project.title} />
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a
                                href={project.link_url || "#"}
                                className="explore-btn"
                                target={project.link_url !== "#" ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                            >
                                Explore More →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

