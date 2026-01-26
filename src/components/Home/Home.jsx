import { useState, useEffect } from "react"; 
import "./Home.css";
import { ArrowRight } from 'lucide-react';
import { getServices } from "../../services/Services";
import { ServiceCard } from "../Cards/ServiceCard/ServiceCard";
import { ProductCard } from "../Cards/ProductCard/ProductCard";

export function Home() {
  const [services, setServices] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Parts 1',
      description: 'dev build',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=280&fit=crop',
      price: 4900,
      originalPrice: 79,
      discount: 38,
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: 'Parts 2',
      description: 'dev build',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=280&fit=crop',
      price: 79,
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: 'Parts 3',
      description: 'dev build',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=280&fit=crop',
      price: 29,
      originalPrice: 49,
      discount: 41,
      rating: 4.7,
      reviews: 203
    },
    {
      id: 4,
      name: 'Parts 4',
      description: 'dev build',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=280&fit=crop',
      price: 59,
      rating: 4.6,
      reviews: 156
    }
  ];

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="home-container">
      <div className="home-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop)' }}>
        <div className="hero-overlay">
          <h1 className="home-title">Hi, I'm a Software Developer</h1>
          <p className="home-subtitle">
            I build web applications and e-commerce solutions.
          </p>
          <button className="home-cta">
            Get in Touch <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="home-section products-section">
        <div className="section-header">
          <h2 className="section-heading">Products</h2>
          <p className="section-description">Products and tools to help you build better</p>
        </div>
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="home-section">
        <div className="section-header">
          <h2 className="section-heading">Services</h2>
          <p className="section-description">Professional development services tailored to your needs</p>
        </div>
        <div className="services-grid">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}