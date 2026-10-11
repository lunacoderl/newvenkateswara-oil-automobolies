import React from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import ShopByVehicle from '../components/ShopByVehicle';
import ShopByProduct from '../components/ShopByProduct';
import BrandShowcase from '../components/BrandShowcase';
import PartEnquirySection from '../components/PartEnquirySection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import { BUSINESS } from '../data/business';

export default function Home() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoPartsStore',
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description:
      'Commercial vehicle spare parts (Ashok Leyland Retail Parts Store / LEYPARTS / VALUEPARTS) and lubricants from all major oil companies (Castrol, Gulf, Shell, Mobil, Servo, MAK, Veedol) near Ayyappa Temple, Auto Nagar, Nellore, Andhra Pradesh.',
    telephone: '+91-9440529777',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${BUSINESS.address.plot}, ${BUSINESS.address.landmark}`,
      addressLocality: BUSINESS.address.area,
      addressRegion: BUSINESS.address.state,
      addressCountry: 'IN',
    },
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI',
    priceRange: '₹₹',
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'IN',
    },
  };

  return (
    <div className="home-page">
      <SEO
        title="New Venkateswara Oil & Automobiles | Automotive Spare Parts & Lubricants in Nellore"
        description="One trusted store near Ayyappa Temple, Auto Nagar, Nellore for Ashok Leyland commercial vehicle spare parts (LEYPARTS, VALUEPARTS) and lubricants from all major oil companies. Call 9440529777."
        canonicalPath="/"
        schemaData={localBusinessSchema}
      />

      <main id="main-content" tabIndex="-1">
        {/* 2. Simple Hero: Automotive Spare Parts & Lubricants in Nellore */}
        <HeroSection />

        {/* 3. Shop by Vehicle: Bikes & Scooters, Cars, Lorries & Trucks, Tractors/Equipment */}
        <ShopByVehicle />

        {/* 4. Shop by Product: Spares, Engine Oils, Gear Oils, Hydraulic Oils, Grease */}
        <ShopByProduct />

        {/* 5. Real Product and Brand Showcase */}
        <BrandShowcase />

        {/* 6. Part-Identification and WhatsApp Enquiry Feature */}
        <PartEnquirySection />

        {/* 7. About the Business */}
        <AboutSection />

        {/* 8. Store Photograph, Location and Contact Information */}
        <ContactSection />
      </main>
    </div>
  );
}
