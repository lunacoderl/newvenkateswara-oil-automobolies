# newvenkateswara-oil-automobolies

> **New Venkateswara Oil & Automobiles** — Official website for the automotive retail enterprise in Auto Nagar, Nellore, Andhra Pradesh.

---

## 🏢 Business Overview

- **Business Name**: New Venkateswara Oil & Automobiles
- **Location**: Plot No. 167, Near Ayyappa Temple, Auto Nagar, Nellore, Andhra Pradesh, India
- **Phone**: +91 94405 29777 (`tel:9440529777`)
- **WhatsApp**: [+91 94405 29777](https://wa.me/919440529777)
- **Primary Product Divisions**:
  1. **Commercial Vehicle Spare Parts**: Ashok Leyland Retail Parts Store, supplying genuine LEYPARTS boxed components and VALUEPARTS maintenance range for heavy commercial trucks, tippers, and haulers.
  2. **Automotive Oils, Lubricants & Greases**: Official ENI Lubricants Distributors for Nellore, alongside heavy diesel engine oils, passenger car oils, 4T/2T motorcycle lubricants, differential gear oils, anti-wear hydraulic fluids, and wheel bearing greases from all major oil companies (Castrol, Gulf, Shell, Mobil, Servo, MAK, Veedol, HPCL, and more).

---

## 🚀 Technology Stack

- **Frontend Framework**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/) (SPA with dynamic `/services/:slug` pages and 404 routing)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Modern, responsive Vanilla CSS with custom token architecture ([`src/styles/tokens.css`](src/styles/tokens.css))
- **Linting & Code Quality**: [Oxlint](https://oxc.rs/)
- **Deployment Platform**: [Vercel](https://vercel.com/) (configured via [`vercel.json`](vercel.json))

---

## 📁 Repository Structure

```
newvenkateswara-oil-automobolies/
├── public/
│   ├── favicon.svg             # Brand favicon (gear cog + oil droplet)
│   ├── robots.txt              # Search engine crawler instructions
│   ├── sitemap.xml             # XML sitemap covering all routes
│   └── images/                 # Authentic client photographs of store, shelving & stock
├── src/
│   ├── components/             # Reusable UI sections & widgets
│   │   ├── AboutSection.jsx
│   │   ├── BrandShowcase.jsx
│   │   ├── ContactSection.jsx
│   │   ├── FAQSection.jsx
│   │   ├── FloatingContactActions.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── PartEnquirySection.jsx
│   │   ├── ProductList.jsx
│   │   ├── ShopByProduct.jsx
│   │   └── ShopByVehicle.jsx
│   ├── data/                   # Structured data models
│   │   ├── assets.js           # Semantic image mapping & alt descriptions
│   │   ├── business.js         # Verified business info & WhatsApp URL builder
│   │   └── services.js         # 5 verified product category definitions & FAQs
│   ├── pages/                  # Top-level view routes
│   │   ├── Home.jsx            # Main storefront homepage
│   │   ├── NotFound.jsx        # Custom 404 page
│   │   ├── PrivacyPolicy.jsx   # Privacy policy
│   │   ├── ServiceDetails.jsx  # Dynamic category details page (/services/:slug)
│   │   └── TermsConditions.jsx # Terms and conditions
│   ├── styles/                 # CSS design token system & section stylesheets
│   ├── App.jsx                 # Route definitions and layout wrapper
│   └── main.jsx                # Application root entry point
├── .gitignore                  # Git ignore rules
├── .oxlintrc.json              # Linter configuration
├── index.html                  # HTML entry with SEO metadata and Open Graph tags
├── package.json                # Project dependencies and npm scripts
├── PROJECT_RECORD.md           # Engineering journal and audit trail
├── vercel.json                 # Vercel SPA rewrites and asset caching headers
└── vite.config.js              # Vite configuration
```

---

## 🛠️ Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or newer)
- `npm` (bundled with Node.js)

### Installation & Setup
```bash
# Clone the repository
git clone https://github.com/lunacoderl/newvenkateswara-oil-automobolies.git

# Navigate into project directory
cd newvenkateswara-oil-automobolies

# Install dependencies
npm install

# Run the local development server
npm run dev
```

The application will be accessible at `http://localhost:5173/`.

### Linting & Production Build
```bash
# Run oxlint
npm run lint

# Build optimized production bundle
npm run build
```

---

## 🌐 Deployment on Vercel

This repository is pre-configured for one-click deployment on Vercel:
1. Import this repository into Vercel.
2. Vercel automatically detects the Vite framework settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
3. [`vercel.json`](vercel.json) handles SPA routing rewrites to ensure direct URLs like `/services/commercial-vehicle-spare-parts` resolve correctly without 404 errors.

---

## 📄 License & Disclaimers

All trademarks, brand names, and logos (Ashok Leyland, LEYPARTS, VALUEPARTS, ENI, Castrol, Gulf, Shell, Mobil, Servo, MAK, Veedol, and other oil companies) belong to their respective manufacturers. New Venkateswara Oil & Automobiles operates as an official ENI Lubricants distributor and independent automotive parts enterprise in Auto Nagar, Nellore.
