import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Mail, Phone, Globe, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Resume() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur border-b border-white/5 bg-background/60">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 font-semibold tracking-wide text-text">
            <img src="/GISNerd_LOGO.png" alt="GIS Nerd" className="h-8 w-8 object-contain" />
            <span>GIS Nerd</span>
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link to="/#skills" className="transition-colors hover:text-primary">Skills</Link>
            <Link to="/#blog" className="transition-colors hover:text-primary">Blog</Link>
            <Link to="/#portfolio" className="transition-colors hover:text-primary">Portfolio</Link>
            <Link to="/resume" className="transition-colors text-primary">Resume</Link>
            <Link to="/#contact" className="transition-colors hover:text-primary">Contact</Link>
          </nav>
        </div>
      </header>

      <div className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Kevin Mazur
            </h1>
            <p className="text-xl text-primary mb-6">
              GIS & Technology Manager | Web GIS Development | Land Development Analytics
            </p>
            <div className="flex flex-wrap gap-4 text-white/70 mb-6">
              <a href="mailto:kevin.m.mazur@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={18} />
                kevin.m.mazur@gmail.com
              </a>
              <a href="tel:727-271-6119" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={18} />
                727-271-6119
              </a>
              <a href="https://gisnerd.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Globe size={18} />
                GISNerd.com
              </a>
            </div>
            <div>
              <a 
                href="/Kevin_Mazur_GIS_Resume.pdf" 
                download="Kevin_Mazur_GIS_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Download size={20} />
                Download PDF Resume
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Award className="text-primary" size={24} />
              Professional Summary
            </h2>
            <p className="text-white/80 leading-relaxed">
              GIS and technology leader with 22+ years bridging spatial analysis, enterprise IT, and web development. 
              Currently specializing in land development GIS, with expertise in building custom web-based mapping solutions, 
              parcel analysis tools, and automated spatial workflows. Proven ability to rapidly design and deploy GIS systems 
              that transform data into actionable intelligence for development professionals. Former CIO brings unique 
              perspective on enterprise-scale GIS implementation and integration.
            </p>
          </section>

          {/* Core Competencies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Core Competencies</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-surface/50 p-6 rounded-lg border border-white/5">
                <h3 className="text-lg font-semibold text-primary mb-3">GIS & Spatial Analysis</h3>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>• Web GIS Development (Leaflet, MapBox)</li>
                  <li>• Desktop GIS (ArcGIS Pro, QGIS)</li>
                  <li>• PostGIS & Spatial Databases</li>
                  <li>• Parcel Analysis & Site Selection</li>
                  <li>• Land Development & Environmental Permitting</li>
                </ul>
              </div>
              <div className="bg-surface/50 p-6 rounded-lg border border-white/5">
                <h3 className="text-lg font-semibold text-primary mb-3">Technical Skills</h3>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>• Python Automation & ETL Pipelines</li>
                  <li>• AI-Assisted Development (GitHub Copilot)</li>
                  <li>• Cloud Infrastructure (Netlify, Supabase)</li>
                  <li>• Database Design & Management</li>
                  <li>• API Integration & Data Workflows</li>
                </ul>
              </div>
              <div className="bg-surface/50 p-6 rounded-lg border border-white/5">
                <h3 className="text-lg font-semibold text-primary mb-3">Leadership</h3>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>• Cross-Functional Team Leadership</li>
                  <li>• Technology Strategy & Implementation</li>
                  <li>• Process Automation & Optimization</li>
                  <li>• Vendor & Stakeholder Management</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Briefcase className="text-primary" size={24} />
              Professional Experience
            </h2>

            {/* Current Role */}
            <div className="mb-8 pb-8 border-b border-white/10">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white">GIS & IT Manager</h3>
                <p className="text-primary">Florida Land Design and Permitting, Tampa, FL</p>
                <p className="text-white/60 text-sm">2024 - Present</p>
              </div>
              <p className="text-white/80 mb-4">
                Led rapid modernization of GIS capabilities and technology infrastructure for regional land development 
                and environmental consulting firm. Built multiple custom solutions in first year, establishing GIS as 
                central to company operations.
              </p>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white mb-3">Key Accomplishments:</h4>
                <ul className="space-y-3 text-white/70">
                  <li>
                    <strong className="text-white">Developed "The Grid" Company Intranet:</strong> Built comprehensive 
                    web-based intranet platform serving entire company, featuring permit tracker, submittal tracker, 
                    and status board for work assignment management. Integrated project tracking and client deliverables 
                    in single unified platform.
                  </li>
                  <li>
                    <strong className="text-white">Created SiteIQ Parcel Analysis Tool:</strong> Designed custom parcel 
                    scoring system that analyzes development viability based on zoning, environmental constraints, and 
                    market factors. Tool processes multi-criteria analysis across county datasets.
                  </li>
                  <li>
                    <strong className="text-white">Built Client-Facing Web Mapping Portals:</strong> Developed interactive 
                    web maps for client project visualization, enabling real-time collaboration and decision-making.
                  </li>
                  <li>
                    <strong className="text-white">Established Automated GIS Workflows:</strong> Implemented Python-based 
                    automation for recurring spatial analysis tasks, reducing analysis time from hours to minutes.
                  </li>
                  <li>
                    <strong className="text-white">Managed IT Infrastructure:</strong> Maintained and optimized all 
                    technology systems with 99%+ uptime, enabling seamless operations across distributed team.
                  </li>
                </ul>
              </div>
              <p className="text-sm text-white/60">
                <strong>Technologies Used:</strong> ArcGIS Pro, QGIS, Python (GeoPandas, ArcPy), JavaScript, Leaflet, 
                PostgreSQL/PostGIS, Netlify, Supabase, Web Development Frameworks
              </p>
            </div>

            {/* VizionX */}
            <div className="mb-8 pb-8 border-b border-white/10">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white">President & Co-Founder</h3>
                <p className="text-primary">VizionX, Clearwater, FL</p>
                <p className="text-white/60 text-sm">2023 - 2024</p>
              </div>
              <p className="text-white/80">
                Co-founded technology startup focused on innovative solutions. Secured initial funding, built team of 25+ 
                employees, and established operational foundation. Led all aspects of business development, technology 
                strategy, and team leadership during growth phase.
              </p>
            </div>

            {/* Vantage Point Title */}
            <div className="mb-8 pb-8 border-b border-white/10">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white">Director of IT (CIO)</h3>
                <p className="text-primary">Vantage Point Title, Inc., Clearwater, FL</p>
                <p className="text-white/60 text-sm">2012 - 2024</p>
              </div>
              <p className="text-white/80 mb-4">
                Senior technology executive for rapidly growing title insurance company. Led IT strategy and operations 
                supporting expansion from 50 to 350+ employees across 7 locations. Played key role in company's strategic 
                direction and business growth initiatives.
              </p>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white mb-3">Notable Achievements:</h4>
                <ul className="space-y-2 text-white/70">
                  <li>
                    <strong className="text-white">Built Scalable Hybrid Cloud Infrastructure:</strong> Designed and 
                    implemented Azure-based architecture supporting 7x company growth while maintaining security compliance.
                  </li>
                  <li>
                    <strong className="text-white">Achieved Industry-First Certifications:</strong> Led organization to 
                    achieve SSAE16 and ALTA Best Practices certifications, establishing competitive advantage.
                  </li>
                  <li>
                    <strong className="text-white">Implemented Robotic Process Automation:</strong> Introduced RPA solutions 
                    that increased operational efficiency by 25%.
                  </li>
                  <li>
                    <strong className="text-white">Integrated Complex External Systems:</strong> Successfully connected 
                    multiple large national lender and Fortune 50 bank systems.
                  </li>
                  <li>
                    <strong className="text-white">Supported M&A Activities:</strong> Ensured smooth IT integration during 
                    company mergers and acquisitions.
                  </li>
                </ul>
              </div>
            </div>

            {/* National Title Network */}
            <div className="mb-8 pb-8 border-b border-white/10">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white">Chief Information Officer</h3>
                <p className="text-primary">National Title Network, Inc., Clearwater, FL</p>
                <p className="text-white/60 text-sm">2010 - 2012</p>
              </div>
              <p className="text-white/80 mb-4">
                Built IT infrastructure for title industry startup from ground up. Scaled systems to support rapid growth 
                from 5 to 300+ employees nationwide.
              </p>
              <ul className="space-y-2 text-white/70">
                <li>• Developed processes enabling 30% staff reduction while maintaining business volume</li>
                <li>• Implemented enterprise systems supporting distributed workforce across multiple states</li>
                <li>• Established security and compliance frameworks meeting industry standards</li>
              </ul>
            </div>

            {/* Isis Cosmetics */}
            <div className="mb-8 pb-8 border-b border-white/10">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white">Chief Information Officer / Chief Operating Officer</h3>
                <p className="text-primary">Isis Cosmetics, Clearwater, FL</p>
                <p className="text-white/60 text-sm">2008 - 2010</p>
              </div>
              <p className="text-white/80 mb-4">
                Provided strategic technology and operational leadership during critical business transition period.
              </p>
              <ul className="space-y-2 text-white/70">
                <li>• Built IT infrastructure connecting multiple franchise locations across Southeast US</li>
                <li>• Implemented HIPAA compliance controls for patient and payment data protection</li>
                <li>• Transitioned to COO role, reducing expenses by 45% and achieving break-even within five months</li>
              </ul>
            </div>

            {/* Capstone Tropical Holdings */}
            <div className="mb-8">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white">IT Director (Original GIS Role)</h3>
                <p className="text-primary">Capstone Tropical Holdings, Inc., New Port Richey, FL</p>
                <p className="text-white/60 text-sm">2002 - 2008</p>
              </div>
              <p className="text-white/80 mb-4">
                Originally hired to develop GIS mapping system for commercial real estate division. Expanded role to 
                full IT management while maintaining GIS focus.
              </p>
              <ul className="space-y-2 text-white/70">
                <li>
                  <strong className="text-white">Developed Custom GIS Mapping System:</strong> Built proprietary GIS 
                  solution for property analysis, market visualization, and site selection.
                </li>
                <li>• Supported company expansion from 4 to 16 offices across three counties in 16 months</li>
                <li>• Led IT integration for multiple acquisitions, successfully merging systems and processes</li>
                <li>• Mentored junior IT staff, developing direct report into future Director of IT</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <GraduationCap className="text-primary" size={24} />
              Education
            </h2>
            <div className="bg-surface/50 p-6 rounded-lg border border-white/5">
              <h3 className="text-xl font-semibold text-white">Bachelor of Arts</h3>
              <p className="text-primary">University of Miami</p>
            </div>
          </section>

          {/* Professional Approach */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Professional Approach</h2>
            <p className="text-white/80 leading-relaxed">
              Specialize in translating complex spatial data into practical tools that drive business decisions. Combine 
              enterprise IT experience with modern GIS development to build solutions that are both technically sophisticated 
              and user-friendly. Excel at rapid prototyping, AI-assisted development, and iterative improvement based on 
              user feedback.
            </p>
          </section>

          {/* Footer */}
          <div className="text-center text-white/60 pt-8 border-t border-white/10">
            <p>References and detailed project portfolios available upon request</p>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
}
