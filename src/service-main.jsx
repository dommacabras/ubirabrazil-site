import React from 'react';
import { createRoot } from 'react-dom/client';
import { services } from './data/services.js';
import ServicePage from './ServicePage.jsx';
import './index.css';

const pathname = window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
const slug = pathname && pathname !== 'service'
  ? pathname
  : new URLSearchParams(window.location.search).get('slug') ?? '';
const service = services.find((s) => s.id === slug);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {service ? (
      <ServicePage service={service} />
    ) : (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-sand-50 text-forest-950">
        <p className="text-lg font-semibold">Experience not found.</p>
        <a href="/" className="btn-primary">← Back to home</a>
      </div>
    )}
  </React.StrictMode>
);
