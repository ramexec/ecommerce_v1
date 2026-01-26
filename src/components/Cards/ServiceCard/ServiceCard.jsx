import { Code } from 'lucide-react';
import './ServiceCard.css';

export const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-card-header">
        <div className="service-icon">
          <Code size={24} />
        </div>
        {service.featured && (
          <span className="service-badge">Featured</span>
        )}
      </div>
      
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
      
      <div className="service-footer">
        <span className="service-price">{service.price}</span>
        <button className="service-btn">View Details</button>
      </div>
    </div>
  );
};