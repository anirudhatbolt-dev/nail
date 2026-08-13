import { useState, useEffect } from 'react';
import businessesData from '@/businesses.json';

export type Service = {
  name: string;
  price_from: string;
};

export type Business = {
  business_name: string;
  tagline: string;
  area: string;
  address: string;
  city: string;
  state: string;
  phone_number: string;
  whatsapp_number: string;
  email: string;
  instagram_handle: string;
  google_maps_url: string;
  google_rating: string;
  review_count: string;
  operating_hours: string;
  has_owner_info: boolean;
  owner_name: string;
  owner_initials: string;
  owner_bio: string;
  services: Service[];
  pricing_disclaimer: string;
  hero_image_url: string;
  gallery_images: string[];
};

const DEFAULT_SLUG = 'lacque';

const PLACEHOLDER_IMAGE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800"><rect width="800" height="800" fill="#f3e8f0"/><path d="M390 330c-30 0-55 25-55 55v80h110v-80c0-30-25-55-55-55z" fill="none" stroke="#d4a5c4" stroke-width="3"/><circle cx="390" cy="385" r="20" fill="none" stroke="#d4a5c4" stroke-width="3"/><text x="400" y="510" font-family="sans-serif" font-size="28" fill="#c08ab0" text-anchor="middle">Image coming soon</text></svg>'
  );

const isPlaceholder = (v: string) =>
  !v || v === 'DEMO_PLACEHOLDER' || v.trim() === '';

const businesses = businessesData as Record<string, Business>;

export function getBusinessFromUrl(): Business {
  if (typeof window === 'undefined') return businesses[DEFAULT_SLUG];
  const slug = new URLSearchParams(window.location.search).get('business');
  if (slug && businesses[slug]) return businesses[slug];
  return businesses[DEFAULT_SLUG];
}

export function useParams(): Business {
  const [business, setBusiness] = useState<Business>(getBusinessFromUrl);

  useEffect(() => {
    setBusiness(getBusinessFromUrl());
  }, []);

  return business;
}

export function getHeroImage(business: Business): string {
  return isPlaceholder(business.hero_image_url)
    ? PLACEHOLDER_IMAGE
    : business.hero_image_url;
}

export function getGalleryImages(business: Business): string[] {
  const imgs = (business.gallery_images || []).filter((u) => !isPlaceholder(u));
  return imgs.length > 0 ? imgs : [PLACEHOLDER_IMAGE];
}

export function getOwnerInitials(business: Business): string {
  if (business.owner_initials && business.owner_initials.trim()) {
    return business.owner_initials.trim();
  }
  return business.owner_name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export function telLink(business: Business): string {
  return `tel:${business.phone_number.replace(/\s+/g, '')}`;
}

export function whatsappLink(business: Business): string {
  return `https://wa.me/${business.whatsapp_number.replace(/[^\d]/g, '')}`;
}

export function instagramLink(business: Business): string {
  return `https://instagram.com/${business.instagram_handle.replace(
    /^@/,
    ''
  )}`;
}
