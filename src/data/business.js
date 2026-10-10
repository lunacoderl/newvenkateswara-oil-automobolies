// Business configuration for New Venkateswara Oil & Automobiles
// All information is verified against storefront signage and provided business details.

export const BUSINESS = {
  name: "New Venkateswara Oil & Automobiles",
  legalName: "New Venkateswara Oil & Automobiles",
  tagline: "Commercial Vehicle Spare Parts & Automotive Lubricants",
  phone: "9440529777",
  phoneFormatted: "+91 94405 29777",
  phoneHref: "tel:9440529777",
  whatsappNumber: "919440529777",
  whatsappBaseUrl: "https://wa.me/919440529777",
  address: {
    plot: "Plot No. 167",
    area: "Auto Nagar",
    city: "Nellore",
    state: "Andhra Pradesh",
    country: "India",
    full: "Plot No. 167, Auto Nagar, Nellore, Andhra Pradesh, India",
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Plot+No.+167,+Auto+Nagar,+Nellore,+Andhra+Pradesh,+India",
  signageBrands: [
    {
      name: "Ashok Leyland Retail Parts Store",
      label: "Commercial Vehicle Parts",
      category: "parts",
    },
    {
      name: "LEYPARTS",
      label: "Genuine Ashok Leyland Parts",
      category: "parts",
    },
    {
      name: "VALUEPARTS",
      label: "Commercial Vehicle Value Line",
      category: "parts",
    },
    {
      name: "Gulf",
      label: "Automotive Lubricants",
      category: "lubricants",
    },
    {
      name: "Veedol",
      label: "Lubricating Oils & Grease",
      category: "lubricants",
    },
    {
      name: "MAK",
      label: "Automotive & Industrial Oils",
      category: "lubricants",
    },
    {
      name: "Eni",
      label: "High-Performance Lubricants",
      category: "lubricants",
    },
  ],
  divisions: [
    {
      id: "spare-parts",
      title: "Commercial Vehicle Spare Parts",
      shortTitle: "Spare Parts",
      description: "Looking for a specific part? Share the part number, vehicle details or a reference photo to help us understand your requirement.",
      ctaText: "ENQUIRE ABOUT PARTS",
      anchor: "#spare-parts",
      route: "/services/commercial-vehicle-spare-parts",
    },
    {
      id: "lubricants",
      title: "Automotive Oils & Lubricants",
      shortTitle: "Oils & Lubricants",
      description: "Explore lubricant categories and enquire about the product specifications and pack sizes you need.",
      ctaText: "EXPLORE LUBRICANTS",
      anchor: "#lubricants",
      route: "/services/engine-oil",
    },
  ],
};

/**
 * Generate a WhatsApp enquiry URL with encoded pre-filled message
 * @param {Object} details
 * @param {string} details.category - Product division or category name
 * @param {string} [details.item] - Specific part number or product name
 * @param {string} [details.vehicle] - Vehicle make/model
 * @param {string} [details.specification] - Viscosity/spec/grade
 * @param {string} [details.notes] - Additional details
 * @returns {string} Fully encoded WhatsApp URL
 */
export function buildWhatsAppEnquiryUrl({
  category = "General Enquiry",
  item = "",
  vehicle = "",
  specification = "",
  notes = "",
} = {}) {
  const lines = [
    `*Enquiry for New Venkateswara Oil & Automobiles*`,
    `📍 Location: Auto Nagar, Nellore`,
    `----------------------------------------`,
    `*Category:* ${category}`,
  ];

  if (item && item.trim()) {
    lines.push(`*Part / Product:* ${item.trim()}`);
  }
  if (vehicle && vehicle.trim()) {
    lines.push(`*Vehicle / Equipment:* ${vehicle.trim()}`);
  }
  if (specification && specification.trim()) {
    lines.push(`*Specification / Grade:* ${specification.trim()}`);
  }
  if (notes && notes.trim()) {
    lines.push(`*Details / Notes:* ${notes.trim()}`);
  }

  lines.push(`----------------------------------------`);
  lines.push(`Please let me know availability and details.`);

  const message = lines.join("\n");
  return `${BUSINESS.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}
