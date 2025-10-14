import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'the-grid',
    title: 'The Grid',
    subtitle: 'Centralized Intranet for Land Development',
    description:
      'A custom-built platform for managing projects, permits, documents, and GIS data across the entire company. Designed for scalability and role-based access, The Grid connects every aspect of daily operations.',
    details:
      "The Grid is a centralized intranet and operations platform built for Florida Land Design & Permitting (FLD&P). It connects every aspect of the firm’s workflow — from project management and permitting to GIS data, document storage, and client collaboration — in one unified system.\n\nWhat started as a simple internal tool evolved into a modern, modular web platform that serves as the digital backbone of the company, streamlining communication, automating notifications, and integrating spatial data directly into daily operations.",
    goals: [
      'Replace fragmented spreadsheets and local file systems with a single cloud-based solution.',
      'Create a modular system that could scale with the firm’s needs — projects, permitting, GIS, client portal, and beyond.',
      'Empower staff to manage their own data, deadlines, and documents through intuitive interfaces.',
      'Integrate GIS data and mapping directly into business workflows for better visibility and decision-making.',
    ],
    features: [
      '🧩 Modular Architecture – Individual modules for Projects, Permits, GIS Data, Documents, and Client Access.',
      '📬 Automated Email Notifications – Built with Resend; alerts for user creation and permit deadlines.',
      '🗓️ Client Dates Tracker – Visual timeline of milestones and expiration dates per client.',
      '🗺️ GridMap Integration – Interactive project mapping powered by React-Leaflet and PostGIS.',
      '🧾 Auditing & Logging System – Tracks client document downloads and approvals for transparency.',
      '🧠 Role-Based Access Control – Ensures the right data reaches the right people.',
    ],
    techDetails: {
      'Frontend': 'React 18 + TypeScript, Tailwind CSS, Vite',
      'Backend': 'Supabase (PostgreSQL + Auth + Storage + Edge Functions)',
      'GIS Integration': 'PostGIS + React-Leaflet',
      'Automation / Email': 'Resend API',
      'Hosting': 'Netlify',
    },
    impact:
      'The Grid has become the daily operating system for FLD&P — eliminating redundant workflows, centralizing data, and providing a shared platform for both staff and clients. It’s the most complete expression of my combined experience in IT, GIS, and web development — a living example of what “Spatial Intelligence, Powered by Code” means in practice.',
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
      'An automated spatial scoring engine that ranks parcels 1–10 based on environmental and physical criteria to surface high-potential development sites.',
    details:
      'SiteIQ is a geospatial analysis tool designed to identify and score parcels of land based on their development potential. Built from the ground up in Python and GIS, it combines multiple spatial datasets — wetlands, flood zones, slopes, soils, and zoning — into a unified, automated scoring model.\n\nThe system evaluates each parcel across several weighted criteria, producing a quantitative “Site Suitability Score” from 1–10. The output helps planners and developers quickly target parcels with favorable characteristics, turning raw GIS data into strategic insight.',
    goals: [
      'Automate complex GIS evaluations that previously required manual analysis.',
      'Build a data-driven scoring model that quantifies land suitability for development.',
      'Streamline workflows using open-source tools (GeoPandas, QGIS, Python).',
      'Provide visual outputs (GeoJSON, web maps) that can be easily integrated into other apps or client presentations.',
    ],
    features: [
      '⚙️ Automated Scoring Engine – Evaluates parcels based on environmental and physical criteria.',
      '🌎 County Detection Logic – Automatically selects the correct datasets (Pasco or Hernando) for processing.',
      '🧮 Weighted Analysis – Combines multiple spatial layers (floodplain, wetlands, slope, soils, zoning) into a composite score.',
      '📤 GeoJSON Output – Delivers clean, portable results with parcel IDs, ownership, acreage, and scores.',
      '🖥️ PySimpleGUI Interface – Simple desktop interface for selecting input files and running analysis.',
      '🧠 Future Expansion – Planned machine learning integration for predictive modeling in SiteIQ 2.0.',
    ],
    techDetails: {
      Languages: 'Python',
      Libraries: 'GeoPandas, Shapely, Rasterio, Fiona, PySimpleGUI, NumPy',
      'GIS Tools': 'ArcGIS Pro, QGIS',
      Output: 'GeoJSON, CSV',
      'Future Version': 'Integrated with React-Leaflet for web-based visualization',
    },
    impact:
      'SiteIQ bridges the gap between GIS data and decision-making. What once took hours of manual spatial review can now be performed in minutes with repeatable, transparent results. The project reflects my strength in combining GIS expertise with coding discipline — creating automated solutions that make spatial analysis more intelligent, consistent, and accessible.',
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
      'The Walton Global Site is a custom, password-protected web application developed for one of FLD&P’s key clients. It serves as an interactive mapping and data platform where Walton Global can explore and evaluate pre-screened land parcels across multiple counties.\n\nBuilt on insights from SiteIQ, the platform highlights parcels that meet specific suitability thresholds for development potential. Clients can browse detailed parcel data, visualize spatial attributes, and mark preferred parcels for further review — all within a secure, auditable environment.',
    goals: [
      'Deliver a client-facing GIS platform tailored to land acquisition and development strategy.',
      'Integrate SiteIQ’s automated scoring results into an interactive, user-friendly web interface.',
      'Enable clients to save and manage “Favorite” parcels for in-depth analysis and collaboration.',
      'Maintain full security and accountability through user authentication and auditing.',
    ],
    features: [
      '🔒 Secure Client Access – Password-protected login with role-based permissions.',
      '🗺️ Interactive Parcel Map – Displays pre-screened parcels using SiteIQ scoring data.',
      '⭐ Favorites System – Clients can select parcels of interest for additional engineering review.',
      '📊 Detailed Parcel Profiles – Each parcel includes ownership, acreage, zoning, slope, and environmental context.',
      '🧾 Auditing & Logging – Tracks client interactions and parcel selections for transparency.',
      '⚙️ Dynamic Filtering – Real-time filtering by county, score, or key attributes.',
      '📱 Responsive Design – Built for desktop-first engagement with mobile-friendly functionality.',
    ],
    techDetails: {
      Frontend: 'React + TypeScript, Tailwind CSS, Framer Motion',
      'GIS Framework': 'React-Leaflet, GeoJSON, PostGIS',
      Backend: 'Supabase (PostgreSQL, Auth, Storage)',
      'Automation & Audit': 'Supabase Functions + Logging',
      Hosting: 'Netlify',
    },
    impact:
      'The Walton Global Site represents the evolution of GIS from analysis to actionable decision support. It gives the client a clear, interactive view of land opportunities — connecting advanced spatial analytics with intuitive web technology.\n\nFor FLD&P, it’s a blueprint for how GIS intelligence can be securely extended to clients through modern, purpose-built web tools.',
  screenshots: ['/Walton.png'],
  techStack: ['React', 'TypeScript', 'Leaflet', 'Supabase'],
  image: '/Walton.png',
    featured: false,
  },
  {
    id: 'parcel-detailed-floral-city',
    title: 'Detailed Parcel Site (Floral City Example)',
    subtitle: 'High-Resolution Parcel Visualization',
    description:
      'A high-resolution interactive GIS web map for a single parcel that unifies environmental, topographic, and regulatory data for planning and design decisions.',
    details:
      'The Floral City Detailed Parcel Site is a high-resolution, interactive GIS web map developed to visualize and analyze a single property in Citrus County, Florida. Designed for land evaluation and planning, the site brings together environmental, topographic, and regulatory data into a cohesive, intuitive interface.\n\nBuilt using modern web mapping technologies, it allows users to explore the parcel in detail, toggle data layers, and perform real-time slope and area assessments — effectively turning static GIS data into an interactive decision-support tool.',
    goals: [
      'Provide a parcel-specific GIS visualization tool for engineering and planning analysis.',
      'Combine environmental, planning, and topographic data in a single interactive interface.',
      'Enable on-demand measurements for slope, elevation, and area directly within the browser.',
      'Create a clear, map-driven communication tool for both internal teams and clients.',
    ],
    features: [
      '🗺️ Interactive Web Map – Focused view of a single parcel with detailed spatial context.',
      '🌿 Environmental Layers – Wetlands, flood zones, and conservation overlays.',
      '🧭 Planning & Zoning Layers – FLU, zoning, and jurisdictional boundaries.',
      '🏔️ Topography & Elevation – 1-ft contours, DEM-based slope shading, and elevation queries.',
      '📏 Measurement Tools – Area, distance, and slope measurement utilities.',
      '🛰️ Aerial & Hybrid Basemaps – High-resolution imagery with optional overlays.',
      '⚙️ Dynamic Layer Control – Users can toggle datasets for a clean or detailed view.',
      '💾 GeoJSON / Raster Integration – Pre-processed GIS data optimized for web delivery.',
    ],
    techDetails: {
      Frontend: 'React + TypeScript, Tailwind CSS, Vite',
      'Mapping Framework': 'React-Leaflet, Turf.js, GeoJSON',
      'Data Sources': 'ArcGIS Online, County GIS, SiteIQ data exports',
      'GIS Tools': 'QGIS, ArcGIS Pro, Python (preprocessing)',
      Hosting: 'Netlify',
    },
    impact:
      'The Floral City site demonstrates the power of detailed, parcel-level GIS visualization. It allows planners, engineers, and stakeholders to explore the physical and environmental characteristics of a site interactively — without needing desktop GIS software.\n\nThis project highlights my ability to bridge traditional GIS analysis with modern web mapping, creating tools that are both technical and intuitive.',
    screenshots: ['/Floral_City.png'],
    techStack: ['React', 'Leaflet', 'Mapbox'],
    image: '/Floral_City.png',
    featured: false,
  },
]
