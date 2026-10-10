import React from 'react';
import { ShieldCheck, PackageCheck, PhoneCall, Store, CheckCircle } from 'lucide-react';

export default function TrustSection() {
  const trustPoints = [
    {
      icon: Store,
      title: "Physical Store Location",
      desc: "Established physical premises at Plot No. 167 in Auto Nagar, Nellore, welcoming counter visits from commercial operators and local workshops.",
    },
    {
      icon: PackageCheck,
      title: "Actual On-Shelf Inventory",
      desc: "Authentic boxed LEYPARTS and VALUEPARTS components and sealed branded lubricant containers stored directly on our shop shelves.",
    },
    {
      icon: PhoneCall,
      title: "Direct Store Communication",
      desc: "Speak directly with counter personnel at 9440529777 without call centers, chatbots, or automated voice queues.",
    },
    {
      icon: ShieldCheck,
      title: "Honest Availability Guidance",
      desc: "We confirm real on-hand stock and specifications before you travel, saving vehicle operators valuable downtime.",
    },
  ];

  return (
    <section className="trust-section" aria-labelledby="trust-heading">
      <div className="container">
        <div className="section-header-centered">
          <span className="eyebrow-badge dark">FACTUAL TRUST &amp; TRANSPARENCY</span>
          <h2 id="trust-heading" className="heading-section">
            GROUNDED IN REAL PRODUCTS &amp; DIRECT SERVICE.
          </h2>
          <p className="section-subheading">
            We do not publish fabricated ratings or promotional slogans. Our reputation in Auto Nagar is built on real inventory, verified packaging, and direct, honest service.
          </p>
        </div>

        <div className="trust-grid">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="trust-card">
                <div className="trust-icon-box">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="heading-card trust-card-title">{point.title}</h3>
                <p className="trust-card-desc">{point.desc}</p>
                <div className="trust-card-badge">
                  <CheckCircle size={14} aria-hidden="true" />
                  <span>Verified Store Practice</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
