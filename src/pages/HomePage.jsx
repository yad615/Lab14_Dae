import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from "../components/HeaderComponent";
import { getAllSerieService } from "../services/SerieService";
import axios from 'axios';
import "./home.css";

const HomePage = () => {
    const [series, setSeries] = useState([]);
    const [categories, setCategories] = useState([]);
    const [featuredCourse] = useState({
        name: "Desarrollo de Aplicaciones Empresariales",
        
    });

    useEffect(() => {
        const loadData = async () => {
            try {
                const [seriesResp, categoriesResp] = await Promise.all([
                    getAllSerieService(),
                    axios.get('http://localhost:8000/series/api/v1/categories/')
                ]);
                setSeries(seriesResp.data);
                setCategories(categoriesResp.data);
            } catch (error) {
                console.error('Error loading data:', error);
            }
        };
        loadData();
    }, []);

    return (
        <>
            <HeaderComponent />
            <main>
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="container h-full flex items-center">
                        <div className="hero-content">
                            <h1 className="hero-title">
                                <i className="bi bi-play-circle me-2"></i>
                                {featuredCourse.name}
                            </h1>
                            <p className="hero-description">{featuredCourse.description}</p>
                            
                        </div>
                    </div>
                </section>

                <div className="container">
                    {/* Categories Section */}
                    <section className="py-12">
                        <div className="flex justify-between items-center">
                            <h2 className="section-title">
                                <i className="bi bi-grid me-2"></i>
                                Categorías Populares
                            </h2>
                            <Link
                                to="/categories"
                                className="btn-secondary"
                            >
                                <span>Ver todas</span>
                                <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                        <div className="grid-container">
                            {categories.slice(0, 4).map((category) => (
                                <div key={category.id} className="category-card">
                                    <h3 className="series-title">
                                        <i className="bi bi-folder me-2"></i>
                                        {category.description}
                                    </h3>
                                    <p className="text-gradient">
                                        <i className="bi bi-hash me-1"></i>
                                        ID: {category.id}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Series Section */}
                    <section className="py-12">
                        <div className="flex justify-between items-center">
                            <h2 className="section-title">
                                <i className="bi bi-film me-2"></i>
                                Series Destacadas
                            </h2>
                            <Link
                                to="/series"
                                className="btn-secondary"
                            >
                                <span>Ver todas</span>
                                <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                        <div className="grid-container">
                            {series.slice(0, 6).map((serie) => (
                                <div key={serie.id} className="category-card">
                                    <h3 className="series-title">
                                        <i className="bi bi-tv me-2"></i>
                                        {serie.name}
                                    </h3>
                                    <p className="text-gradient">
                                        <i className="bi bi-star me-1"></i>
                                        Rating: {serie.rating}
                                    </p>
                                    <p className="text-gradient">
                                        <i className="bi bi-hash me-1"></i>
                                        Category: {serie.category ? serie.category.description : 'No category'}
                                    </p>
                                    <img
                                        src={`http://localhost:8000/static/series/${serie.image}`}
                                        alt={serie.name}
                                        className="series-image"
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default HomePage;