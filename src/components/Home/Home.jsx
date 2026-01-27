import { useState, useEffect } from "react"; 
import "./Home.css";
import { ArrowRight } from 'lucide-react';
import { getServices,getFeaturedProducts } from "../../services/Services";
import { ServiceCard } from "../Cards/ServiceCard/ServiceCard";
import { ProductCard } from "../Cards/ProductCard/ProductCard";

export function Home() {
  const [services, setServices] = useState([]);
  const [products , setProducts] = useState([])
  const [productsLoading ,setProductsLoading] = useState(true)
  const [servicesLoading,setServicesLoading ] = useState(true)

  useEffect(() => {
    const fetchServices = async () => {
      setServicesLoading(true);

      try {
        const data = await getServices();
        setServices(data);
        setServicesLoading(false)
      } catch (err) {
        console.error(err);
      }
    };

    const fetchProducts = async () => {
      setProductsLoading(true)
      try{
        const data = await getFeaturedProducts();
        setProducts(data);
        setProductsLoading(false)
      }catch (err)
      {
        console.log(err);
      }
    }

    fetchProducts();
    fetchServices();
  }, []);

  return (
    <div className="home-container">
      <div className="home-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop)' }}>
        <div className="hero-overlay">
          <h1 className="home-title">Welcome to mycommerce</h1>
          <p className="home-subtitle">
            A simple e-commerce page.
          </p>
          <button className="home-cta">
            Get in Touch to get this product <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="home-section products-section">
        <div className="section-header">
          <h2 className="section-heading">Products</h2>
          <p className="section-description">Products and tools to help you build better</p>
        </div>
        <div className="products-grid">
          {products?.map(product => (
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
          {services?.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}