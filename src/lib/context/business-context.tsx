"use client";

import * as React from "react";
import { createContext, useContext, useState, ReactNode } from "react";

export interface Business {
  id: number;
  created_at: string;
  businessName: string;
  logo: string;
  worker_ids: number[];
  updated_at: string;
  businessType: string;
  auth_id: string;
  stripe_account_id: string;
  email: string;
  businessDescription: string;
  primaryColor: string;
  inventorySize: string;
  rentalPeriod: string;
  contactPhone: string;
  additionalFeatures: string[];
  country: string;
  ip: string;
  unpaid_token: string;
  product_ids: number[];
  address: string;
  custom_domain: string | null;
  welcome_message: string;
  site_id: string;
}

// Define the context type with just a boolean value
interface BusinessContextType {
  businessInfo: Business | undefined;
  setBusinessInfo: (businessInfo: Business) => void;
}

// Create the context with default values
const BusinessContext = createContext<BusinessContextType | undefined>(
  undefined
);

// Provider component
export function BusinessProvider({ children }: { children: ReactNode }) {
  const [businessInfo, setBusinessInfo] = useState<Business>();

  return (
    <BusinessContext.Provider value={{ businessInfo, setBusinessInfo }}>
      {children}
    </BusinessContext.Provider>
  );
}

// Custom hook to use the context
export function useBusinessInfo(): BusinessContextType {
  const context = useContext(BusinessContext);

  if (context === undefined) {
    throw new Error("useBusinessInfo must be used within a BusinessProvider");
  }

  return context;
}
