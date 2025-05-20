"use client";

import { Salon } from "@/components/salon";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

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
export default function Home() {
  const [salonInfo, setSalonInfo] = useState<Business>();

  useEffect(() => {
    supabase
      .from("client")
      .select("*")
      .eq("id", process.env.NEXT_PUBLIC_CLIENT_ID)
      .single()
      .then(({ data }) => {
        console.log(data);
        setSalonInfo(data);
      });
  }, []);

  return <Salon />;
}
