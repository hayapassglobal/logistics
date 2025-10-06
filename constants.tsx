import React from 'react';
import { MenuItem, Service, Feature, Testimonial, TrackingData, FaqItemData, ClientShipment, DetailedClientShipment, ClientPreAlert, ClientInvoice, WalletTransaction, Address, ClientNotification, User, AnalyticsDataPoint, ApiToken, Webhook, Referral, LoyaltyTier, HeroSlide, WalletRequest } from './types';
import { Link } from 'react-router-dom';

// --- ICONS (Moved from components.tsx to break circular dependency) ---
// Wrapper for icons to apply common styling
export const IconWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={className}>{children}</div>
);

// Individual Icon Components
// FIX: Update IconTruck component to accept a className prop to fix a type error in pages.tsx.
export const IconTruck: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className ?? "w-full h-full"}><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
);
export const IconGlobe: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
);
export const IconHeadset: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
);
export const IconShieldCheck: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
);
export const IconPackage: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
);
export const IconWarehouse: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M22 12H2M22 6H2M15 12v6M9 12v6M2 12l6.5-4.5L15 12L22 12"></path><path d="M2 12v6h20v-6"></path><path d="M12 22V12"></path></svg>
);
export const IconCustoms: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M2 9.5l4 4 4-4"></path><path d="M2 14.5l4 4 4-4"></path><path d="M14 12V2l6 4-3 10-4-3-1.5-3Z"></path><path d="M6 21v-2.5L2 15"></path></svg>
);
export const IconClock: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/></svg>
);
export const IconMarker: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/></svg>
);
export const IconPhone: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z"/></svg>
);
export const IconEnvelope: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/></svg>
);
export const IconFacebook: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-full h-full" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg>
);
export const IconTwitterX: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-full h-full" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg>
);
export const IconInstagram: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-full h-full" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm0 1.442c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.598-.919c-.11-.282-.24-.705-.276-1.486-.038-.843-.046-1.095-.046-3.231s.008-2.389.046-3.232c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546.453.92-.598.282-.11.705-.24 1.485-.276.843-.038 1.095-.047 3.232-.047zM8 3.882a4.102 4.102 0 1 0 0 8.204 4.102 4.102 0 0 0 0-8.204m0 6.762a2.667 2.667 0 1 1 0-5.334 2.667 2.667 0 0 1 0 5.334m4.658-6.819a.999.999 0 1 0 0 1.998.999.999 0 0 0 0-1.998"/></svg>
);
export const IconLinkedIn: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-full h-full" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.016-.326.028-.594.028-.822c0-.7-.444-1.213-1.248-1.213c-.796 0-1.247.505-1.247 1.213c0 .23.01.497.028.823h.001c.02.725.47 1.212 1.248 1.212c.795 0 1.247-.488 1.247-1.212m6.011 8.212V6.169h-2.39v1.001h.033c.278-.458.986-.94 1.94-.94c2.083 0 2.466 1.37 2.466 3.152v3.566h-2.409V9.32c0-.738-.025-1.683-.982-1.683c-.983 0-1.138.793-1.138 1.631v3.989z"/></svg>
);
export const IconWhatsapp: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-full h-full" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg>
);
// --- NEW ICONS FOR CLIENT/ADMIN DASHBOARD ---
export const IconDashboard: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"> <path d="M4 4h4v4H4V4zm0 5h4v4H4V9zm5-5h4v4h-4V4zm0 5h4v4h-4V9z"/> <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v13A1.5 1.5 0 0 0 1.5 16h13a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 14.5 0h-13zM1 1.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-13z"/> </svg> );
export const IconBell: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"> <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4.25 6H4a4 4 0 0 0-4 4v1c0 .278.09.54.248.763l.002.002l.003.004l.004.005a.5.5 0 0 0 .707 0l.003-.003A1.5 1.5 0 0 1 3 10.5V8.5A2.5 2.5 0 0 1 5.5 6c.001-.21.038-.417.108-.625zM11.742 4.825a3.99 3.99 0 0 0-1.98-.997A2.5 2.5 0 0 1 12 6.5v3.855a1.5 1.5 0 0 1 .273 1.24l.004.006a.5.5 0 0 0 .707 0l.003-.003A.995.995 0 0 0 13.5 11v-1a4 4 0 0 0-2.724-3.85ZM4.886 3.873A2.5 2.5 0 0 1 7.5 2H8a1 1 0 0 1 0 2H7.5A2.5 2.5 0 0 1 4.886 3.873z"/> </svg> );
export const IconReceipt: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"><path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0L11 1.293l.646-.647a.5.5 0 0 1 .708 0L13 1.293l.646-.647a.5.5 0 0 1 .434-.14L15 1.5V16H1V.5zM1 1.5v13h14v-13L13.354 2.35a.5.5 0 0 1-.708 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0z"/><path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m3 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"/></svg> );
export const IconPerson: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"> <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/> </svg> );
export const IconGeoAlt: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"> <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/> <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/> </svg> );
export const IconSearch: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/></svg> );
export const IconWallet2: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"> <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5v-7A1.5 1.5 0 0 1 1.5 3H2V1.78a1.5 1.5 0 0 1 1.404-1.454L12.137.326zM5.562 3H10.5V1.78a.5.5 0 0 0-.404-.49L6.038 1H5.562z"/> <path d="M1.5 4a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5z"/> </svg> );
export const IconArrowDownCircle: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"><path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/></svg> );
export const IconArrowUpCircle: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"><path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/></svg> );
export const IconBoxSeam: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"><path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L8.841 2.07zM15 3.5l-2.404-.961L8.841 2.07l3.564 1.424zM7.777 12.16l-2.404-.962L.846 10.5l7.331-2.931zm.447 0l7.331 2.931l-4.47-1.788l-2.404.962zM1.153 4.961L6.657 7.l-2.404-.961zm13.694 0l-5.504 2.04l-2.404.961L14.847 4.96z"/></svg> );
export const IconUpload: React.FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/><path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/></svg> );
export const IconSettings: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"><path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311a1.464 1.464 0 0 1-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413-1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/></svg>;
export const IconUserPlus: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"><path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m-2 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m2 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-2-1a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5"/></svg>;
export const IconFileEarmarkSpreadsheet: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V9h-3V6h1v1h1V6h1v2h-1v1h-1v1H9V9H8V8H7V7h1V6H7V5h2zM3 12v-2h2v2zm0 1h2v2H4a1 1 0 0 1-1-1zm3 2v-2h3v2zm4 0v-2h3v1a1 1 0 0 1-1 1zm3-3h-3v-2h3z"/></svg>;
export const IconShieldLock: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"><path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.953-.43-1.748-.73-2.837-.855C9.538 1.07 8.56 1.5 8 1.5s-.538-.43-1.662-.91zM9.005 7.818a.5.5 0 0 1 .99 0L9 12.5l-1-4.682a.5.5 0 0 1 .99-.001zM7.5 5.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"/></svg>;
export const IconLayoutTextWindowReverse: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"><path d="M13 6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5m0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5m-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"/><path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM2 1a1 1 0 0 0-1 1v1h14V2a1 1 0 0 0-1-1zM1 13v1.5a1.5 1.5 0 0 0 1.5 1.5h13V5H1z"/></svg>;
export const IconPencilSquare: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.812z"/><path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/></svg>;
export const IconListTask: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"><path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"/><path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/><path fillRule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1zm-1 3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zm1 .5H2v1h1z"/></svg>;
export const IconCardImage: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"><path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/><path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3.5a.5.5 0 0 1 .5-.5z"/></svg>;
export const IconShare: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"><path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>;
export const IconGraphUpArrow: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"><path fillRule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/></svg>;
export const IconCodeSlash: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"><path d="M10.478 1.647a.5.5 0 1 0-.956.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/></svg>;
export const IconPersonCircle: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/><path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/></svg>;
export const IconFileText: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"><path d="M5 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"/><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2-2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1z"/></svg>;
export const IconHelpCircle: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/></svg>;
export const IconSend: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-full h-full"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/></svg>;

export const ICON_MAP: { [key: string]: React.ReactNode } = {
    'truck': <IconTruck />,
    'globe': <IconGlobe />,
    'headset': <IconHeadset />,
    'shield': <IconShieldCheck />,
    'package': <IconPackage />,
    'warehouse': <IconWarehouse />,
    'customs': <IconCustoms />,
    'clock': <IconClock />,
    'person': <IconPersonCircle />,
};

export const SITE_CONFIG = {
  brandName: "HAYAPASS GLOBAL LOGISTICS",
  tagline: "Bridging Distances, Delivering Futures.",
  logoUrl: "https://via.placeholder.com/190x50/00529B/FFFFFF?text=HAYAPASS",
  contact: {
    email: "info@hayapass.com",
    phoneUK: "+44 20 7123 4567",
    phoneNG: "+234 801 234 5678",
    addressUK: "Unit 15, Park Royal Industrial Estate, London, NW10 7WP, UK",
    addressNG: "Plot 7B, Acme Road, Ogba Industrial Estate, Ikeja, Lagos, Nigeria",
    whatsapp: "+447724061019",
  },
  social: {
    facebook: "https://facebook.com/hayapasslogistics",
    twitter: "https://x.com/hayapassglobal",
    instagram: "https://instagram.com/hayapasslogistics",
    linkedin: "https://linkedin.com/company/hayapass-global-logistics",
  },
  copyright: `© ${new Date().getFullYear()} HAYAPASS GLOBAL LOGISTICS. All Rights Reserved.`
};

export const HEADER_MENU_ITEMS: (MenuItem & { id: number })[] = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About Us", href: "/about" },
  { id: 3, label: "Services", href: "/services" },
  { id: 4, label: "FAQ", href: "/faq" },
  { id: 5, label: "Contact", href: "/contact" },
];

// --- NEW: FOOTER LINK CONSTANTS ---
export const FOOTER_QUICK_LINKS: MenuItem[] = [
    { label: "Track Shipment", href: "/tracking" },
    { label: "Calculate Rates", href: "/rates" },
    { label: "Get a Quote", href: "/quote" },
    { label: "Contact Support", href: "/contact" },
];

export const FOOTER_LEGAL_LINKS: MenuItem[] = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Admin Login", href: "/admin-login" },
];


export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1587671391393-39789696380a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    headline: "Bridging Distances, Delivering Futures.",
    tagline: "Your trusted partner for seamless UK-Nigeria logistics and global connections.",
    buttons: [
      { text: "Get a Free Quote", href: "/quote", primary: true },
      { text: "Explore Services", href: "/services", primary: false }
    ]
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1578575437130-5278ce68056c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    headline: "Expert Air Freight Solutions",
    tagline: "Fast, reliable air cargo services connecting continents with speed and precision.",
    buttons: [
      { text: "Air Freight Details", href: "/services/international", primary: true },
      { text: "Track Shipment", href: "/tracking", primary: false }
    ]
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1605711214154-509F49d97182?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    headline: "Reliable Sea Freight Services",
    tagline: "Cost-effective and dependable sea shipping for your global trade needs.",
    buttons: [
        { text: "Sea Freight Options", href: "/services/international", primary: true }
    ]
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    headline: "Secure Warehousing & Fulfilment",
    tagline: "Modern facilities and smart solutions for your inventory and distribution.",
    buttons: [
        { text: "Warehousing Info", href: "/services/warehousing", primary: true }
    ]
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    headline: "Your Logistics, Simplified",
    tagline: "Partner with us for end-to-end supply chain management and expert support.",
    buttons: [
        { text: "Contact Us Today", href: "/contact", primary: true }
    ]
  }
];

export const CORE_SERVICES: Service[] = [
  { icon: 'truck', title: "UK & Nigeria Domestic", description: "Swift, secure parcel and freight delivery across the United Kingdom and throughout Nigeria's major cities and regions.", link: "/services/domestic" },
  { icon: 'globe', title: "International Freight", description: "Expert air and sea freight solutions connecting the UK, Nigeria, and global markets with efficiency and competitive rates.", link: "/services/international" },
  { icon: 'warehouse', title: "Warehousing & Fulfilment", description: "Secure storage, inventory management, and order fulfilment services in our modern facilities in the UK and Nigeria.", link: "/services/warehousing" },
  { icon: 'customs', title: "Customs Clearance", description: "Hassle-free customs brokerage for imports and exports, ensuring compliance and timely release of your goods.", link: "/services/customs" },
];

export const ALL_SERVICES: Service[] = [
    { icon: 'truck', title: "UK Domestic Logistics", description: "Dedicated and comprehensive shipping services within the United Kingdom, from single parcels to full truckloads.", link: "/services/uk-domestic" },
    ...CORE_SERVICES,
    { icon: 'person', title: "Personal Shopper", description: "Your personal concierge for sourcing authentic Nigerian food items and goods, delivered directly to your doorstep worldwide.", link: "/personal-shopper" },
    { icon: 'package', title: "Specialized Cargo Handling", description: "From perishable goods to oversized project cargo and hazardous materials, we have the expertise to handle your specialized shipping requirements safely and efficiently.", link: "/services/specialized" },
    { icon: 'headset', title: "Logistics Consultancy", description: "Optimize your supply chain with our expert consultancy services. We analyze your current processes and provide strategic recommendations for improved efficiency and cost savings.", link: "/services/consultancy" },
];

export const WHY_CHOOSE_US_FEATURES: Feature[] = [
  { icon: 'shield', title: "Unwavering Reliability", description: "Count on us for secure, on-time delivery, backed by robust tracking and transparent communication." },
  { icon: 'clock', title: "Speed & Precision", description: "Optimized routes, efficient processes, and cutting-edge technology ensure your shipments move swiftly." },
  { icon: 'globe', title: "Global Network, Local Expertise", description: "Extensive international partnerships combined with deep local knowledge in the UK and Nigeria." },
  { icon: 'headset', title: "Client-Centric Approach", description: "Your needs are our priority. Dedicated support and tailored solutions for a personalized experience." },
];

export const TESTIMONIALS: Testimonial[] = [
  { text: "Hayapass has transformed our UK-Nigeria supply chain. Their reliability and client service are second to none. Highly recommended!", author: "Bola Adeyemi", company: "CEO, NijaBiz Connect" },
  { text: "Switching to Hayapass for our international freight was the best decision. They handle everything seamlessly, from pickup to customs.", author: "John Smith", company: "Operations Manager, UK Exporters Ltd." },
  { text: "As an individual shipper, I was impressed by their professionalism and the ease of tracking my package. It arrived safely and on time.", author: "Chioma Okoro", company: "Lagos, Nigeria" },
];

export const MOCK_TRACKING_DATA: { [key: string]: Omit<TrackingData, 'id'> } = {
  "HGLUK123": { status: "In Transit", badge: "bg-[#17a2b8] text-white", origin: "London, UK", destination: "Lagos, NG", estDelivery: Date.now() + 3 * 86400000,
      milestones: [
          { date: Date.now() - 1 * 86400000, status: "Departed Origin Facility", location: "London Heathrow" },
          { date: Date.now() - 2 * 86400000, status: "Shipment Information Received", location: "London Hub" } ]},
  "HGLNG456": { status: "Delivered", badge: "bg-[#28a745] text-white", origin: "Manchester, UK", destination: "Abuja, NG", estDelivery: Date.now() - 1 * 86400000,
      milestones: [
          { date: Date.now() - 1 * 86400000, status: "Delivered", location: "Abuja Recipient Address" },
          { date: Date.now() - 2 * 86400000, status: "Out for Delivery", location: "Abuja Delivery Hub" },
          { date: Date.now() - 3 * 86400000, status: "Arrived at Destination Hub", location: "Abuja" }] }
};

export const ALL_SHIPMENTS_MOCK_DATA: TrackingData[] = Object.entries(MOCK_TRACKING_DATA).map(([id, data]) => ({ id, ...data }));


export const FAQ_DATA: FaqItemData[] = [
    {
        question: "What services does Hayapass Global Logistics offer?",
        answer: <p>We offer a comprehensive range of logistics services including UK and Nigeria domestic shipping, international air and sea freight (with a strong focus on the UK-Nigeria route), warehousing and fulfilment, customs clearance, specialized cargo handling, and logistics consultancy. Visit our <Link to="/services" className="text-[#00529b] hover:text-[#b58e31] underline">Services page</Link> for more details.</p>
    },
    {
        question: "How can I track my shipment?",
        answer: <p>You can easily track your shipment using our online tracking tool. Simply enter your Hayapass tracking number (e.g., HGLUK123) on our <Link to="/tracking" className="text-[#00529b] hover:text-[#b58e31] underline">Tracking page</Link> or the tracking form on our homepage to get real-time updates on its status and location.</p>
    },
    {
        question: "How do I get a quote for my shipment?",
        answer: <p>To get a personalized quote, please fill out our <Link to="/quote" className="text-[#00529b] hover:text-[#b58e31] underline">Request a Quote form</Link> with details about your shipment (origin, destination, weight, dimensions, service type, etc.). Our team will review your request and provide you with a competitive, no-obligation quote as soon as possible.</p>
    },
    {
        question: "What are your transit times for UK to Nigeria shipping?",
        answer: (
            <>
                <p>Transit times vary depending on the service selected (air freight vs. sea freight) and specific origin/destination points. Typically:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Air Freight (Express):</strong> 3-5 working days (subject to customs clearance).</li>
                    <li><strong>Air Freight (Standard/Economy):</strong> 5-8 working days (subject to customs clearance).</li>
                    <li><strong>Sea Freight:</strong> 3-5 weeks (port-to-port, subject to shipping line schedules and customs).</li>
                </ul>
                <p className="mt-2">Please note these are estimates. For a more accurate transit time for your specific shipment, please <Link to="/quote" className="text-[#00529b] hover:text-[#b58e31] underline">request a quote</Link> or <Link to="/contact" className="text-[#00529b] hover:text-[#b58e31] underline">contact us</Link>.</p>
            </>
        )
    },
    {
        question: "Do you handle customs clearance?",
        answer: <p>Yes, absolutely! We have an experienced in-house customs brokerage team that handles all aspects of customs clearance for both imports and exports in the UK, Nigeria, and other countries. We ensure compliance with all regulations to minimize delays. See our <Link to="/services/customs" className="text-[#00529b] hover:text-[#b58e31] underline">Customs Clearance</Link> page for details.</p>
    },
    {
        question: "What items are prohibited for shipping?",
        answer: <p>A general list of prohibited items includes (but is not limited to): illegal substances, firearms and ammunition, explosives, flammable materials, counterfeit goods, live animals (without special arrangement), pornography, and items restricted by IATA, IMO, or specific country regulations. For a detailed list or if you are unsure about an item, please <Link to="/contact" className="text-[#00529b] hover:text-[#b58e31] underline">contact our support team</Link> before shipping.</p>
    },
    {
        question: "Do you offer cargo insurance?",
        answer: <p>Yes, we offer comprehensive cargo insurance options to protect your goods against loss or damage during transit. We highly recommend insuring valuable shipments. You can request information on cargo insurance when you <Link to="/quote" className="text-[#00529b] hover:text-[#b58e31] underline">request a quote</Link> or discuss it with our team.</p>
    },
    {
        question: "Where are your offices located?",
        answer: <p>We have primary operational hubs in the United Kingdom and Nigeria. You can find our detailed office addresses and contact information on our <Link to="/contact" className="text-[#00529b] hover:text-[#b58e31] underline">Contact Us page</Link>.</p>
    },
];

// --- NEW: CONTENT FOR MANAGEABLE PAGES (CMS) ---
export const MANAGEABLE_PAGES_CONTENT: { [key: string]: { title: string; subtitle: string; content: React.ReactNode; rawContent?: string; } } = {
    about: {
        title: "About Us",
        subtitle: "Connecting continents with care, commitment, and cutting-edge logistics.",
        rawContent: `
<h2 class="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
<p class="text-lg text-gray-600 mb-6">To provide seamless, reliable, and innovative logistics solutions that bridge the distance between the UK, Nigeria, and the world. We are dedicated to simplifying complex supply chains, fostering global trade, and ensuring our clients' success through exceptional service and unwavering commitment.</p>
<h2 class="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
<p class="text-lg text-gray-600">To be the leading logistics partner for UK-Nigeria trade, recognized for our operational excellence, client-centric approach, and technological innovation. We aim to build a future where geographical barriers are no longer an obstacle to business growth and personal connections.</p>
`,
        content: (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-600 mb-6">To provide seamless, reliable, and innovative logistics solutions that bridge the distance between the UK, Nigeria, and the world. We are dedicated to simplifying complex supply chains, fostering global trade, and ensuring our clients' success through exceptional service and unwavering commitment.</p>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
                    <p className="text-lg text-gray-600">To be the leading logistics partner for UK-Nigeria trade, recognized for our operational excellence, client-centric approach, and technological innovation. We aim to build a future where geographical barriers are no longer an obstacle to business growth and personal connections.</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=2067&auto=format&fit=crop" alt="Diverse team collaborating in an office" className="rounded-lg shadow-lg" />
                </div>
            </div>
        )
    },
    privacy: {
        title: "Privacy Policy",
        subtitle: "Your privacy is important to us. This policy explains how we collect, use, and protect your information.",
        rawContent: `
<p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
<h4>1. Introduction</h4>
<p>Welcome to Hayapass Global Logistics ("we," "our," "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at ${SITE_CONFIG.contact.email}.</p>
<h4>2. Information We Collect</h4>
<p>We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.</p>
<ul>
    <li><strong>Personal Information Provided by You:</strong> We collect names; phone numbers; email addresses; mailing addresses; job titles; contact preferences; billing addresses; and other similar information.</li>
    <li><strong>Shipment Data:</strong> We collect data related to your shipments, including consignee and shipper information, package descriptions, and tracking data.</li>
</ul>
<h4>3. How We Use Your Information</h4>
<p>We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
<h4>4. Will Your Information Be Shared With Anyone?</h4>
<p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may need to share your information with third-party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery, hosting services, customer service and marketing efforts.</p>
`,
        content: (
            <div className="prose max-w-none">
                <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
                
                <h4>1. Introduction</h4>
                <p>Welcome to Hayapass Global Logistics ("we," "our," "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at {SITE_CONFIG.contact.email}.</p>

                <h4>2. Information We Collect</h4>
                <p>We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.</p>
                <p>The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use. The personal information we collect may include the following:</p>
                <ul>
                    <li><strong>Personal Information Provided by You:</strong> We collect names; phone numbers; email addresses; mailing addresses; job titles; contact preferences; billing addresses; and other similar information.</li>
                    <li><strong>Shipment Data:</strong> We collect data related to your shipments, including consignee and shipper information, package descriptions, and tracking data.</li>
                </ul>

                <h4>3. How We Use Your Information</h4>
                <p>We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
                <ul>
                    <li>To facilitate account creation and logon process.</li>
                    <li>To post testimonials on our website with your consent.</li>
                    <li>To manage user accounts and keep them in working order.</li>
                    <li>To send administrative information to you for business purposes, legal reasons and/or contractual reasons.</li>
                    <li>To fulfill and manage your orders, payments, returns, and exchanges.</li>
                    <li>To respond to your inquiries and solve any potential issues you might have with the use of our Services.</li>
                </ul>

                <h4>4. Will Your Information Be Shared With Anyone?</h4>
                <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may need to share your information with third-party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery, hosting services, customer service and marketing efforts.</p>
                
                <h4>5. How Long Do We Keep Your Information?</h4>
                <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).</p>
            </div>
        )
    },
    terms: {
        title: "Terms & Conditions",
        subtitle: "Please read these terms and conditions carefully before using our services.",
        rawContent: `
<p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
<h4>1. Agreement to Terms</h4>
<p>By using the services, websites, and applications offered by Hayapass Global Logistics, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
<h4>2. Services</h4>
<p>Hayapass Global Logistics provides logistics, shipping, freight, and customs services. All services are subject to the terms of the specific service agreement, waybill, or bill of lading applicable to the shipment. Our liability is limited as set forth in such agreements.</p>
<h4>3. User Responsibilities</h4>
<p>You agree to provide accurate, current, and complete information for all shipments and transactions. You are responsible for ensuring that your shipment complies with all applicable laws and regulations, including customs, import, and export laws of all countries involved. You warrant that you are the owner or authorized agent of the owner of the goods being shipped.</p>
<h4>4. Prohibited Items</h4>
<p>You agree not to ship any items that are prohibited by law or regulation in any origin, destination, or transit country. This includes, but is not limited to, hazardous materials not declared in accordance with transportation regulations, illegal substances, currency, and other restricted items. We reserve the right to inspect any shipment and to refuse or return any shipment that violates these terms.</p>
`,
        content: (
            <div className="prose max-w-none">
                <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
                
                <h4>1. Agreement to Terms</h4>
                <p>By using the services, websites, and applications offered by Hayapass Global Logistics, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>

                <h4>2. Services</h4>
                <p>Hayapass Global Logistics provides logistics, shipping, freight, and customs services. All services are subject to the terms of the specific service agreement, waybill, or bill of lading applicable to the shipment. Our liability is limited as set forth in such agreements.</p>
                
                <h4>3. User Responsibilities</h4>
                <p>You agree to provide accurate, current, and complete information for all shipments and transactions. You are responsible for ensuring that your shipment complies with all applicable laws and regulations, including customs, import, and export laws of all countries involved. You warrant that you are the owner or authorized agent of the owner of the goods being shipped.</p>

                <h4>4. Prohibited Items</h4>
                <p>You agree not to ship any items that are prohibited by law or regulation in any origin, destination, or transit country. This includes, but is not limited to, hazardous materials not declared in accordance with transportation regulations, illegal substances, currency, and other restricted items. We reserve the right to inspect any shipment and to refuse or return any shipment that violates these terms.</p>

                <h4>5. Rates and Payment</h4>
                <p>Rates and service quotations are estimates based on the information provided by you and are subject to change. Final charges will be based on the actual characteristics of the shipment and the services performed. All charges are due and payable as specified in the invoice. We reserve the right to hold shipments for unpaid charges.</p>

                <h4>6. Limitation of Liability</h4>
                <p>Our liability for loss or damage to any shipment is limited. For full details on liability, please refer to the specific service agreement. We are not liable for any loss, damage, delay, or non-delivery caused by events we cannot control, including but not limited to acts of God, war, civil disturbances, or actions of governmental authorities.</p>

                <h4>7. Changes to Terms</h4>
                <p>We reserve the right to modify these Terms and Conditions at any time. We will notify you of any changes by posting the new Terms and Conditions on this page. You are advised to review this page periodically for any changes.</p>
            </div>
        )
    }
};

// --- MOCK DATA FOR CLIENT DASHBOARD ---
export const CLIENT_SHIPMENTS_DATA: ClientShipment[] = [
    { id: 'HGLUK12301', date: '28 Oct 2025', origin: 'London, UK', destination: 'Lagos, NG', status: 'In Transit', estDelivery: '05 Nov 2025' },
    { id: 'HGLNG45602', date: '25 Oct 2025', origin: 'Abuja, NG', destination: 'Manchester, UK', status: 'Customs Hold', estDelivery: '08 Nov 2025' },
    { id: 'HGLUK78903', date: '15 Oct 2025', origin: 'Self (UK Locker)', destination: 'Ibadan, NG', status: 'Delivered', estDelivery: '22 Oct 2025' },
];

export const CLIENT_SHIPMENT_DETAILS_DATA: { [key: string]: DetailedClientShipment } = {
    'HGLUK12301': {
        id: 'HGLUK12301', date: '28 Oct 2025', origin: 'London, UK', destination: 'Lagos, NG', status: 'In Transit', estDelivery: '05 Nov 2025',
        weight: '5.2 kg', dimensions: '30x20x15 cm', service: 'Air Freight (Express)',
        notes: 'Fragile item. Handle with care.', associatedInvoiceIds: ['INV-CLIENT1-015'],
        milestones: [
            { date: '01 Nov 2025', time: '10:30', status: 'Departed from Origin Country', location: 'London Heathrow (LHR), UK' },
            { date: '30 Oct 2025', time: '14:00', status: 'Processed at HGL Facility', location: 'London Hub, UK' },
            { date: '28 Oct 2025', time: '18:00', status: 'Shipment Information Received', location: 'London, UK' },
        ]
    },
    'HGLNG45602': {
        id: 'HGLNG45602', date: '25 Oct 2025', origin: 'Abuja, NG', destination: 'Manchester, UK', status: 'Customs Hold', estDelivery: '08 Nov 2025',
        weight: '12.0 kg', dimensions: '50x40x30 cm', service: 'Air Freight (Standard)',
        notes: 'Contains lithium batteries. Requires special handling sticker.', associatedInvoiceIds: [],
        milestones: [
            { date: '02 Nov 2025', time: '09:00', status: 'Held by UK Customs', location: 'Manchester Airport (MAN), UK', notes: 'Awaiting duty payment.' },
            { date: '01 Nov 2025', time: '17:45', status: 'Arrived at Destination Country', location: 'Manchester Airport (MAN), UK' },
            { date: '27 Oct 2025', time: '11:00', status: 'Departed from Origin Country', location: 'Nnamdi Azikiwe Intl (ABV), NG' },
            { date: '25 Oct 2025', time: '12:00', status: 'Shipment Information Received', location: 'Abuja, NG' },
        ]
    },
     'HGLUK78903': {
        id: 'HGLUK78903', date: '15 Oct 2025', origin: 'Self (UK Locker)', destination: 'Ibadan, NG', status: 'Delivered', estDelivery: '22 Oct 2025',
        weight: '2.5 kg', dimensions: '20x15x10 cm', service: 'Sea Freight (LCL)',
        notes: '', associatedInvoiceIds: ['INV-CLIENT1-012'],
        milestones: [
            { date: '22 Oct 2025', time: '13:15', status: 'Delivered', location: 'Ibadan, NG', notes: 'Signed for by consignee.' },
            { date: '21 Oct 2025', time: '08:00', status: 'Out for Delivery', location: 'Ibadan Hub, NG' },
            { date: '20 Oct 2025', time: '16:00', status: 'Cleared Customs', location: 'Lagos Port, NG' },
            { date: '15 Oct 2025', time: '09:00', status: 'Shipment Information Received', location: 'London, UK' },
        ]
    }
};

export const CLIENT_PREALERTS_DATA: ClientPreAlert[] = [
    { id: 'PA-CLIENT1-005', facility: 'UK', carrier: 'Amazon', tracking: 'TBA123...', description: 'Shoes', estArrival: '03 Nov 2025', status: 'Pending Arrival' },
    { id: 'PA-CLIENT1-004', facility: 'UK', carrier: 'FedEx', tracking: '1Z999XYZ', description: 'Laptop', estArrival: '01 Nov 2025', status: 'Arrived at HGL' },
    { id: 'PA-CLIENT1-003', facility: 'NG', carrier: 'Local Courier', tracking: 'WAYBILL001', description: 'Fabrics', estArrival: '30 Oct 2025', status: 'Arrived at HGL' },
];

export const CLIENT_INVOICES_DATA: ClientInvoice[] = [
    { id: 'INV-CLIENT1-015', issueDate: '01 Nov 2025', dueDate: '15 Nov 2025', amount: '75.00', currency: 'GBP', status: 'Unpaid' },
    { id: 'INV-CLIENT1-014', issueDate: '20 Oct 2025', dueDate: '03 Nov 2025', amount: '15000.00', currency: 'NGN', status: 'Paid' },
    { id: 'INV-CLIENT1-012', issueDate: '05 Oct 2025', dueDate: '19 Oct 2025', amount: '120.50', currency: 'GBP', status: 'Paid' },
];

export const WALLET_TRANSACTIONS_DATA: WalletTransaction[] = [
    { date: '03 Nov 2025', description: 'Top Up via Stripe', gbp: '+ 50.00', type: 'Credit' },
    { date: '02 Nov 2025', description: 'Invoice Payment INV-CLIENT1-015', gbp: '- 24.50', type: 'Debit' },
    { date: '28 Oct 2025', description: 'Top Up via Paystack', ngn: '+ 25,000.00', type: 'Credit' },
    { date: '25 Oct 2025', description: 'Shipping Fee HGLNG45602', ngn: '- 10,000.00', type: 'Debit' },
    { date: '20 Oct 2025', description: 'Welcome Bonus', gbp: '+ 10.00', type: 'Credit' },
];

export const CLIENT_ADDRESSES_DATA: Address[] = [
    { id: '1', label: 'UK Home', isDefaultShipping: true, isDefaultBilling: false, name: 'Client Example Name', street: '1 Example Road, London, E1 1AA', city: '', country: 'United Kingdom', phone: '+44 7012345678' },
    { id: '2', label: 'NG Office', isDefaultShipping: false, isDefaultBilling: true, name: 'Client Example Name (Work)', street: '123 Business Avenue, Ikeja, Lagos', city: '', country: 'Nigeria', phone: '+234 8012345678' },
    { id: '3', label: 'Parents (UK)', isDefaultShipping: false, isDefaultBilling: false, name: 'Relative Name', street: '5 Another Street, Manchester, M1 1BB', city: '', country: 'United Kingdom', phone: '' },
];

export const CLIENT_NOTIFICATIONS_DATA: ClientNotification[] = [
    { date: '03 Nov 2025', subject: 'Shipment HGLUK12301 Update', snippet: 'Your package has arrived at Lagos customs...', status: 'Unread' },
    { date: '02 Nov 2025', subject: 'Wallet Top-up Successful', snippet: 'Your GBP wallet has been credited with £50.00...', status: 'Unread' },
    { date: '28 Oct 2025', subject: 'Invoice INV-CLIENT1-015 Issued', snippet: 'A new invoice for your recent shipment...', status: 'Read' },
];

export const CLIENT_TEAM_MEMBERS_DATA: User[] = [
    { id: '1', name: 'Client Example Name', email: 'client@example.com', role: 'Admin', status: 'Active', accountType: 'Client', lastLogin: '04 Nov 2025' },
    { id: '2', name: 'Finance Manager', email: 'finance@example.com', role: 'Finance', status: 'Active', accountType: 'Client', lastLogin: '03 Nov 2025' },
    { id: '3', name: 'Warehouse Staff', email: 'warehouse.staff@example.com', role: 'Warehouse', status: 'Active', accountType: 'Client', lastLogin: '04 Nov 2025' },
    { id: '4', name: 'New Hire Invite', email: 'new.hire@example.com', role: 'Member', status: 'Pending', accountType: 'Client', lastLogin: 'Never' },
];


// --- MOCK DATA FOR ADMIN DASHBOARD ---
export const ALL_USERS_DATA: User[] = [
    { id: '1', name: 'Bola Adeyemi', email: 'bola@nijabiz.com', role: 'Admin', status: 'Active', accountType: 'Client', company: 'NijaBiz Connect', lastLogin: '04 Nov 2025' },
    { id: '2', name: 'John Smith', email: 'john@ukexporters.co.uk', role: 'Admin', status: 'Active', accountType: 'Client', company: 'UK Exporters Ltd.', lastLogin: '03 Nov 2025' },
    { id: '3', name: 'Chioma Okoro', email: 'chioma.o@email.com', role: 'Admin', status: 'Active', accountType: 'Client', company: 'Individual', lastLogin: '01 Nov 2025' },
    { id: '4', name: 'Admin User', email: 'admin@hayapass.com', role: 'Super Admin', status: 'Active', accountType: 'Admin', company: 'Hayapass', lastLogin: '04 Nov 2025' },
    { id: '5', name: 'Deactivated Client', email: 'old@client.com', role: 'Admin', status: 'Deactivated', accountType: 'Client', company: 'Old Company', lastLogin: '15 Jun 2025' },
];

export const ADMIN_SHIPMENTS_DATA: (DetailedClientShipment & { clientName: string })[] = [
    { ...CLIENT_SHIPMENT_DETAILS_DATA['HGLUK12301'], clientName: 'Bola Adeyemi' },
    { ...CLIENT_SHIPMENT_DETAILS_DATA['HGLNG45602'], clientName: 'John Smith' },
    { ...CLIENT_SHIPMENT_DETAILS_DATA['HGLUK78903'], clientName: 'Chioma Okoro' },
    { id: 'HGLUK99904', date: '02 Nov 2025', origin: 'Glasgow, UK', destination: 'Port Harcourt, NG', status: 'In Transit', estDelivery: '10 Nov 2025', weight: '25kg', dimensions: '50x50x50 cm', service: 'Sea Freight', notes: '', associatedInvoiceIds: ['INV-ADMIN-001'], milestones: [ { date: '03 Nov 2025', time: '11:00', status: 'Processed at HGL Facility', location: 'Glasgow Hub, UK' }, { date: '02 Nov 2025', time: '16:30', status: 'Shipment Information Received', location: 'Glasgow, UK' }], clientName: 'UK Exporters Ltd.' }
];

export const ADMIN_WALLET_REQUESTS_DATA: WalletRequest[] = [
    { id: 'WR-001', clientId: '1', clientName: 'Bola Adeyemi', date: '04 Nov 2025', type: 'Top-up', amount: 100, currency: 'GBP', status: 'Pending', method: 'Bank Transfer Ref: BA-TOPUP' },
    { id: 'WR-002', clientId: '2', clientName: 'John Smith', date: '03 Nov 2025', type: 'Withdrawal', amount: 50, currency: 'GBP', status: 'Pending', method: 'UK Bank: 01-02-03 12345678' },
    { id: 'WR-003', clientId: '3', clientName: 'Chioma Okoro', date: '02 Nov 2025', type: 'Top-up', amount: 25000, currency: 'NGN', status: 'Approved', method: 'Paystack' },
    { id: 'WR-004', clientId: '1', clientName: 'Bola Adeyemi', date: '01 Nov 2025', type: 'Withdrawal', amount: 20, currency: 'GBP', status: 'Declined', method: 'UK Bank: 04-05-06 87654321' },
];


export const ADMIN_ANALYTICS_DATA = {
    totalRevenue: 250600,
    totalShipments: 1240,
    newClients: 35,
    pendingIssues: 3,
    revenueByService: [
        { name: 'Air Freight', value: 120000 },
        { name: 'Sea Freight', value: 85000 },
        { name: 'Domestic', value: 35600 },
        { name: 'Customs', value: 10000 },
    ]
};



// --- MOCK DATA FOR 100% COMPLETE DASHBOARD ---

export const ANALYTICS_DATA: { monthlySpend: AnalyticsDataPoint[], topRoutes: (AnalyticsDataPoint & { shipments: number })[] } = {
    monthlySpend: [
        { name: 'May', value: 3400 },
        { name: 'Jun', value: 4500 },
        { name: 'Jul', value: 3900 },
        { name: 'Aug', value: 5200 },
        { name: 'Sep', value: 4800 },
        { name: 'Oct', value: 6100 },
    ],
    topRoutes: [
        { name: 'UK -> NG', value: 18500, shipments: 152 },
        { name: 'NG -> UK', value: 9200, shipments: 88 },
        { name: 'UK -> US', value: 4500, shipments: 45 },
    ]
};

export const API_TOKENS_DATA: ApiToken[] = [
    { id: '1', name: 'Shopify Integration Key', token: 'hp_live_sk_****...**_a1b2', created: '15 Aug 2025', lastUsed: '03 Nov 2025' },
    { id: '2', name: 'Warehouse System Key', token: 'hp_live_sk_****...**_c3d4', created: '01 Jul 2025', lastUsed: '02 Nov 2025' },
];

export const WEBHOOKS_DATA: Webhook[] = [
    { id: '1', url: 'https://api.example.com/webhooks/hayapass', events: ['shipment.created', 'shipment.updated'], status: 'Active' }
];

export const REFERRAL_DATA: Referral[] = [
    { date: '10 Oct 2025', email: 'friend1@example.com', status: 'Completed', reward: '£10.00' },
    { date: '25 Sep 2025', email: 'colleague@example.com', status: 'Completed', reward: '£10.00' },
    { date: '15 Sep 2025', email: 'contact@example.com', status: 'Pending', reward: '£10.00' },
];

export const LOYALTY_DATA: LoyaltyTier = {
    name: 'Silver',
    currentSpend: 4850,
    nextTierSpend: 10000,
    benefits: [
        '5% Discount on all Air Freight',
        'Priority Support',
        'Dedicated Account Manager',
    ]
};