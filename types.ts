// FIX: Add missing import for React to resolve 'Cannot find namespace React' errors.
import React from 'react';

export interface MenuItem {
  label: string;
  href: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  text: string;
  author: string;
  company: string;
}

// --- NEW TYPE FOR HERO SLIDER ---
export interface HeroSlide {
  image: string;
  headline: string;
  tagline: string;
  buttons: {
    text: string;
    href: string;
    primary: boolean;
  }[];
}


export interface Milestone {
  date: number;
  status: string;
  location: string;
}

export interface TrackingData {
  id: string; // Add ID to tracking data for better keying
  status: string;
  badge: string;
  origin: string;
  destination: string;
  estDelivery: number;
  milestones: Milestone[];
}

export interface FaqItemData {
  question: string;
  answer: React.ReactNode;
}

// --- NEW TYPE FOR RATES CALCULATOR ---
export interface RateResult {
    serviceName: string;
    estimatedCost: string;
    estimatedTime: string;
}

// --- NEW TYPE FOR QUOTE REQUEST FORM ---
export interface QuoteFormData {
    origin: string;
    destination: string;
    serviceType: string;
    weight: string;
    length: string;
    width: string;
    height: string;
    deliveryDate?: string;
    specialRequirements: string;
    name: string;
    email: string;
    phone: string;
}

// --- NEW TYPES FOR CLIENT DASHBOARD ---

export interface ShipmentMilestone {
    date: string;
    time: string;
    status: string;
    location: string;
    notes?: string;
}

export interface ClientShipment {
  id: string;
  date: string;
  origin: string;
  destination: string;
  status: 'In Transit' | 'Customs Hold' | 'Delivered' | 'Cancelled';
  estDelivery: string;
}

export interface DetailedClientShipment extends ClientShipment {
    milestones: ShipmentMilestone[];
    associatedInvoiceIds: string[];
    notes: string;
    weight: string;
    dimensions: string;
    service: string;
}

export interface ClientPreAlert {
    id: string;
    facility: 'UK' | 'NG';
    carrier: string;
    tracking: string;
    description: string;
    estArrival: string;
    status: 'Pending Arrival' | 'Arrived at HGL';
}

export interface ClientInvoice {
    id: string;
    issueDate: string;
    dueDate: string;
    amount: string;
    currency: 'GBP' | 'NGN';
    status: 'Unpaid' | 'Paid';
}

export interface WalletTransaction {
    date: string;
    description: string;
    gbp?: string;
    ngn?: string;
    type: 'Credit' | 'Debit';
}

export interface Address {
    id: string;
    label: string;
    isDefaultShipping: boolean;
    isDefaultBilling: boolean;
    name: string;
    street: string;
    city: string;
    country: string;
    phone: string;
}

export interface ClientNotification {
    date: string;
    subject: string;
    snippet: string;
    status: 'Unread' | 'Read';
}

// Replaced TeamMember with a more generic User type for both dashboards
export interface User {
    id: string;
    name: string;
    email: string;
    role: 'Admin' | 'Member' | 'Finance' | 'Warehouse' | 'Super Admin';
    status: 'Active' | 'Pending' | 'Deactivated';
    accountType: 'Client' | 'Admin';
    company?: string;
    lastLogin: string;
}


// --- NEW TYPES FOR 100% COMPLETE DASHBOARD ---
export interface AnalyticsDataPoint {
    name: string;
    value: number;
}

export interface ApiToken {
    id: string;
    name: string;
    token: string;
    created: string;
    lastUsed: string;
}

export interface Webhook {
    id: string;
    url: string;
    events: string[];
    status: 'Active' | 'Inactive';
}

export interface Referral {
    date: string;
    email: string;
    status: 'Pending' | 'Completed';
    reward: string;
}

export interface LoyaltyTier {
    name: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
    currentSpend: number;
    nextTierSpend: number;
    benefits: string[];
}

export interface WalletRequest {
    id: string;
    clientId: string;
    clientName: string;
    date: string;
    type: 'Top-up' | 'Withdrawal';
    amount: number;
    currency: 'GBP' | 'NGN';
    status: 'Pending' | 'Approved' | 'Declined';
    method: string;
}