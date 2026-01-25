import { useState,useEffect } from "react"; 
import "./Home.css"
import { ShoppingBag, Code, Palette, Zap, Star, ArrowRight } from 'lucide-react';
import { getServices } from "../../services/Services";

export function Home() {
  const [services, setServices] = useState([]);

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
    <>
      <div className="home-container">
        <div className="home-hero">
          <h1 className="home-hero-title">Welcome to My Services</h1>
          <p className="home-hero-subtitle">
            Professional Software Developement and design solutions tailored to your needs. 
            Let's bring your vision to life with cutting-edge technology.
          </p>
          <button className="home-cta-btn">
            Get Started <ArrowRight size={20} />
          </button>
        </div>

        <div className="home-services">
          <h2 className="home-section-title">What I Offer</h2>
          <div className="home-services-grid">
            {services.map(service => (
              <div key={service.id} className="home-service-card">
                {service.featured && (
                  <div className="home-service-featured">
                    <Star size={12} fill="white" />
                    Featured
                  </div>
                )}
                <div className="home-service-icon">
                   <Code size={32} />
                </div>
                <h3 className="home-service-title">{service.title}</h3>
                <p className="home-service-description">{service.description}</p>
                <div className="home-service-price">{service.price}</div>
                <button className="home-service-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
