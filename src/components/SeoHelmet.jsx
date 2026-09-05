import { useEffect } from 'react';

export default function SeoHelmet({
  title = "Prime Logistics | Complete Logistics Solution",
  description = "Prime Logistics delivers dependable, efficient, and scalable road transportation solutions for businesses across India. Headquartered in Chennai, Tamil Nadu."
}) {
  useEffect(() => {
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update og:title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    // Update og:description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
}
