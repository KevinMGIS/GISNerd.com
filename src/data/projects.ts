import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'permitiq',
    title: 'PermitIQ',
    subtitle: 'Environmental Permit Intelligence Platform',
    description:
      'A full-stack competitive intelligence platform that transforms public Environmental Resource Permit data into actionable business insights, tracking over 50,000 permits across 16 counties.',
    details:
      'PermitIQ is a full-stack competitive intelligence platform that transforms public Environmental Resource Permit data from the Southwest Florida Water Management District into actionable business insights. The system automatically tracks and analyzes over 50,000 permits across 16 counties, providing real-time visibility into competitor activity and market trends in the environmental permitting landscape.',
    goals: [
      'Automate the tracking and analysis of environmental permits across 16 counties.',
      'Provide real-time competitive intelligence on market activity and competitor permits.',
      'Identify high-activity geographic clusters and emerging development trends.',
      'Deliver enterprise-level analytics through an intuitive dashboard and interactive map interface.',
    ],
    features: [
      'Professional Analytics Dashboard with critical metrics and visualizations',
      'Interactive Map Interface with marker clustering and time-lapse animation',
      'Automated Daily Synchronization via GitHub Actions',
      'Hotspot Detection Algorithm for high-activity areas',
      'Temporal Trend Analysis across six interactive chart types',
      'Advanced Filtering across seven dimensions',
      'Enterprise Security with role-based access control',
      'Spatial Analysis with PostGIS integration',
    ],
    techDetails: {
      'Frontend': 'Next.js 16, React 18, TypeScript, Tailwind CSS',
      'Backend': 'Supabase (PostgreSQL + PostGIS + Auth + Storage)',
      'GIS Integration': 'PostGIS, react-leaflet, marker clustering',
      'Automation': 'GitHub Actions, automated ETL pipelines',
      'Hosting': 'Netlify',
    },
    impact:
      'PermitIQ delivers enterprise-level competitive intelligence capabilities, enabling users to identify market opportunities, track competitor activity, and analyze environmental permitting trends. The platform demonstrates advanced full-stack GIS development with sophisticated spatial analysis, automated data workflows, and professional-grade visualization capabilities.',
    screenshots: ['/PermitIQ.png'],
    techStack: ['Next.js', 'React', 'TypeScript', 'PostGIS', 'Supabase', 'GitHub Actions'],
    image: '/PermitIQ.png',
    featured: true,
  },
  {
    id: 'the-grid',
    title: 'The Grid',
    subtitle: 'Centralized Intranet for Land Development',
    description:
      'A custom-built platform for managing projects, permits, documents, and GIS data across the entire company. Designed for scalability and role-based access, The Grid connects every aspect of daily operations.',
    details:
      "The Grid is a centralized intranet and operations platform built for Florida Land Design & Permitting. It connects every aspect of the firm's workflow, from project management and permitting to GIS data, document storage, and client collaboration, in one unified system. What started as a simple internal tool evolved into a modern, modular web platform that serves as the digital backbone of the company.",
    goals: [
      'Replace fragmented spreadsheets and local file systems with a single cloud-based solution.',
      'Create a modular system that could scale with the firm needs across projects, permitting, GIS, and client portals.',
      'Empower staff to manage their own data, deadlines, and documents through intuitive interfaces.',
      'Integrate GIS data and mapping directly into business workflows.',
    ],
    features: [
      'Modular Architecture with individual modules for Projects, Permits, GIS Data, Documents, and Client Access',
      'Automated Email Notifications built with Resend for user creation and permit deadlines',
      'Client Dates Tracker with visual timeline of milestones and expiration dates',
      'GridMap Integration with interactive project mapping powered by React-Leaflet and PostGIS',
      'Auditing and Logging System that tracks client document downloads and approvals',
      'Role-Based Access Control ensuring the right data reaches the right people',
    ],
    techDetails: {
      'Frontend': 'React 18 + TypeScript, Tailwind CSS, Vite',
      'Backend': 'Supabase (PostgreSQL + Auth + Storage + Edge Functions)',
      'GIS Integration': 'PostGIS + React-Leaflet',
      'Automation / Email': 'Resend API',
      'Hosting': 'Netlify',
    },
    impact:
      'The Grid has become the daily operating system for FLD&P, eliminating redundant workflows, centralizing data, and providing a shared platform for both staff and clients. It represents the complete expression of combined experience in IT, GIS, and web development.',
    screenshots: ['/The_Grid.png'],
    techStack: ['React', 'TypeScript', 'Supabase', 'PostGIS', 'Resend', 'Netlify'],
    image: '/The_Grid.png',
    featured: true,
  },
  {
    id: 'siteiq',
    title: 'SiteIQ',
    subtitle: 'GIS-Driven Site Selection Analysis',
    description:
      'An automated spatial scoring engine that ranks parcels 1-10 based on environmental and physical criteria to surface high-potential development sites.',
    details:
      'SiteIQ is a geospatial analysis tool designed to identify and score parcels of land based on their development potential. Built from the ground up in Python and GIS, it combines multiple spatial datasets including wetlands, flood zones, slopes, soils, and zoning into a unified, automated scoring model. The system evaluates each parcel across several weighted criteria, producing a quantitative Site Suitability Score from 1-10.',
    goals: [
      'Automate complex GIS evaluations that previously required manual analysis.',
      'Build a data-driven scoring model that quantifies land suitability for development.',
      'Streamline workflows using open-source tools like GeoPandas, QGIS, and Python.',
      'Provide visual outputs that can be easily integrated into other apps or client presentations.',
    ],
    features: [
      'Automated Scoring Engine that evaluates parcels based on environmental and physical criteria',
      'County Detection Logic that automatically selects correct datasets for processing',
      'Weighted Analysis combining multiple spatial layers into a composite score',
      'GeoJSON Output delivering clean, portable results with parcel IDs and scores',
      'PySimpleGUI Interface for selecting input files and running analysis',
      'Future Expansion planned with machine learning integration for SiteIQ 2.0',
    ],
    techDetails: {
      Languages: 'Python',
      Libraries: 'GeoPandas, Shapely, Rasterio, Fiona, PySimpleGUI, NumPy',
      'GIS Tools': 'ArcGIS Pro, QGIS',
      Output: 'GeoJSON, CSV',
      'Future Version': 'Integrated with React-Leaflet for web-based visualization',
    },
    impact:
      'SiteIQ bridges the gap between GIS data and decision-making. What once took hours of manual spatial review can now be performed in minutes with repeatable, transparent results. The project demonstrates the strength in combining GIS expertise with coding discipline to create automated solutions.',
    screenshots: [],
    techStack: ['Python', 'GeoPandas', 'Shapely', 'Rasterio', 'QGIS'],
    image: '',
    featured: false,
  },
  {
    id: 'client-portals-walton',
    title: 'Custom Client Sites (Walton Global Example)',
    subtitle: 'Interactive GIS Portals for Clients',
    description:
      'Tailored web applications that deliver live maps, document access, and key development milestones to clients. The Walton Global site showcases seamless data integration and a polished client-facing experience.',
    details:
      'The Walton Global Site is a custom, password-protected web application developed for key clients. It serves as an interactive mapping and data platform where clients can explore and evaluate pre-screened land parcels across multiple counties. Built on insights from SiteIQ, the platform highlights parcels that meet specific suitability thresholds for development potential.',
    goals: [
      'Deliver a client-facing GIS platform tailored to land acquisition and development strategy.',
      'Integrate SiteIQ automated scoring results into an interactive, user-friendly web interface.',
      'Enable clients to save and manage Favorite parcels for in-depth analysis and collaboration.',
      'Maintain full security and accountability through user authentication and auditing.',
    ],
    features: [
      'Secure Client Access with password-protected login and role-based permissions',
      'Interactive Parcel Map displaying pre-screened parcels using SiteIQ scoring data',
      'Favorites System allowing clients to select parcels of interest for engineering review',
      'Detailed Parcel Profiles with ownership, acreage, zoning, slope, and environmental context',
      'Auditing and Logging tracking client interactions and parcel selections',
      'Dynamic Filtering with real-time filtering by county, score, or key attributes',
      'Responsive Design built for desktop-first engagement with mobile-friendly functionality',
    ],
    techDetails: {
      Frontend: 'React + TypeScript, Tailwind CSS, Framer Motion',
      'GIS Framework': 'React-Leaflet, GeoJSON, PostGIS',
      Backend: 'Supabase (PostgreSQL, Auth, Storage)',
      'Automation & Audit': 'Supabase Functions + Logging',
      Hosting: 'Netlify',
    },
    impact:
      'The Walton Global Site represents the evolution of GIS from analysis to actionable decision support. It gives clients a clear, interactive view of land opportunities, connecting advanced spatial analytics with intuitive web technology. It serves as a blueprint for how GIS intelligence can be securely extended to clients through modern, purpose-built web tools.',
    screenshots: ['/Walton.png'],
    techStack: ['React', 'TypeScript', 'Leaflet', 'Supabase'],
    image: '/Walton.png',
    featured: false,
  },
]
