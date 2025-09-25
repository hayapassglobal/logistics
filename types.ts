// FIX: Add missing import for React to resolve 'Cannot find namespace React' errors.
import React from 'react';

export interface MenuItem {
  label: string;
  href: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  text: string;
  author: string;
  company: string;
}

export interface Milestone {
  date: number;
  status: string;
  location: string;
}

export interface TrackingData {
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
  status: 'In Transit' | 'Customs Hold' | 'Delivered';
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

export interface TeamMember {
    id: string;
    name: string;
    email: string;
    role: 'Admin' | 'Member';
    status: 'Active' | 'Pending';
}
