"use client";

import { Salon } from "@/components/salon";
import { useBusinessInfo } from "@/lib/context/business-context";
import { supabase } from "@/lib/supabase";
import { useEffect } from "react";

export default function Home() {
  const { setBusinessInfo } = useBusinessInfo();

  useEffect(() => {
    supabase
      .from("client")
      .select("*")
      .eq("id", process.env.NEXT_PUBLIC_CLIENT_ID)
      .single()
      .then(({ data }) => {
        console.log(data);
        setBusinessInfo(data);
      });
  }, []);

  return <Salon />;
}
