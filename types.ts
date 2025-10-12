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

// --- NEW TYPE FOR SITE CONFIG ---
export interface SiteConfig {
  brandName: string;
  tagline: string;
  logoUrl: string;
  contact: {
    email: string;
    phoneUK: string;
    phoneNG: string;
    addressUK: string;
    addressNG: string;
    whatsapp: string;
  };
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
  copyright: string;
}


// --- NEW TYPE FOR HERO SLIDER ---
export interface HeroSlide {
  id: number; // Added for unique keying in CMS
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
  notes?: string; // Added for admin edits
}

export interface TrackingData {
  id: string; // Add ID to tracking data for better keying
  clientId?: string;
  status: string;
  badge: string;
  origin: string;
  destination: string;
  estDelivery: number;
  milestones: Milestone[];
}

export interface FaqItemData {
  id: number; // Added for unique keying in CMS
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
  clientId?: string;
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
    role: 'Admin' | 'Member' | 'Finance' | 'Warehouse' | 'Super Admin' | 'Support';
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

export interface SupportTicket {
    id: string;
    clientId?: string;
    clientName: string; // Added client name for admin view
    subject: string;
    department: 'General' | 'Billing' | 'Technical';
    status: 'Open' | 'Pending' | 'Resolved';
    lastUpdated: string;
    messages: {
        sender: 'Client' | 'Support';
        text: string;
        timestamp: string;
    }[];
}

// --- NEW TYPES FOR ADMIN DASHBOARD ENHANCEMENTS ---
export interface AdminRole {
    id: string;
    name: 'Super Admin' | 'Admin' | 'Support' | 'Finance';
    description: string;
    permissions: string[];
}

export interface ShippingRate {
    id: string;
    serviceName: string;
    origin: string;
    destination: string;
    basePrice: number;
    pricePerKg: number;
    estimatedTime: string;
}

export interface PaymentGatewaySettings {
    stripe: {
        publicKey: string;
        secretKey: string;
    };
    paystack: {
        publicKey: string;
        secretKey: string;
    };
    paypal: {
        clientId: string;
    };
}

// --- NEW TYPES FOR ADMIN NOTIFICATIONS ---
export interface AdminNotification {
    id: string;
    type: 'Customs Delay' | 'Ticket Escalation' | 'Low Wallet Balance';
    message: string;
    targetId: string; // ID of the shipment, ticket, user, etc.
    timestamp: number;
    isRead: boolean;
}

export interface AlertConfiguration {
    customsHold: {
        enabled: boolean;
        thresholdHours: number;
    };
    ticketEscalation: {
        enabled: boolean;
        thresholdHours: number;
    };
    lowWallet: {
        enabled: boolean;
        thresholdGbp: number;
    };
}

// --- NEW TYPES FOR AUTOMATED WORKFLOWS ---
export interface WorkflowRule {
    id: string;
    name: string;
    description: string;
    trigger: {
        type: 'Shipment Status Change' | 'Pre-Alert Arrived';
        details: {
            status?: 'Delivered' | 'Customs Hold';
        };
    };
    action: {
        type: 'Send Email To Client';
        details: {
            template: 'Shipment Delivered - Rate Experience' | 'Pre-Alert Received Notification';
        };
    };
    enabled: boolean;
}

export interface ActivityLog {
    id: string;
    timestamp: number;
    icon: 'email' | 'notification' | 'workflow';
    message: string;
}

// --- NEW TYPE FOR PREDICTIVE ANALYTICS ---
export interface ShipmentDelayForecast {
  shipmentId: string;
  clientName: string;
  riskLevel: 'Medium' | 'High';
  riskReason: string;
  suggestedAction: string;
}