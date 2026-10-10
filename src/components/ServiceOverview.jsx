import React from 'react';
import { CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function ServiceOverview({ service }) {
  const { overview } = service;
  if (!overview) return null;

  return (
    <section className="service-overview-section" aria-labelledby="overview-heading">
      <div className="container">
        <div className="overview-layout">
          <div className="overview-main-col">
            <span className="eyebrow-badge blue">CATEGORY OVERVIEW</span>
            <h2 id="overview-heading" className="heading-section">
              PURPOSE &amp; APPLICATION SCOPE
            </h2>

            <div className="overview-card">
              <h3 className="heading-card overview-subtitle">What This Category Includes</h3>
              <p className="overview-text">{overview.whatItIncludes}</p>
            </div>

            <div className="overview-card">
              <h3 className="heading-card overview-subtitle">Operational Purpose</h3>
              <p className="overview-text">{overview.generalPurpose}</p>
            </div>

            {overview.vehicleApplications && overview.vehicleApplications.length > 0 && (
              <div className="overview-applications-box">
                <h3 className="heading-card overview-subtitle">Relevant Applications</h3>
                <ul className="applications-list">
                  {overview.vehicleApplications.map((app, idx) => (
                    <li key={idx} className="app-item">
                      <CheckCircle2 size={18} className="app-icon" aria-hidden="true" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="overview-sidebar-col">
            <div className="selection-considerations-card">
              <div className="considerations-header">
                <AlertTriangle size={22} className="warning-icon" aria-hidden="true" />
                <h3 className="heading-card considerations-title">Selection Guidance</h3>
              </div>
              <p className="considerations-body">
                {overview.selectionConsiderations}
              </p>
              <div className="verification-reminder">
                <ShieldCheck size={18} aria-hidden="true" />
                <span>Always verify with equipment OEM specifications or contact our counter.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
