"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { useBusinessInfo } from "@/lib/context/business-context";

export function Reservation() {
  const { businessInfo } = useBusinessInfo();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>("");
  const [stylist, setStylist] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const stylists = [
    "Emma Johnson - Hair Stylist",
    "Sophia Martinez - Makeup Artist",
    "Olivia Wilson - Nail Technician",
    "Isabella Brown - Esthetician",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !time || !stylist || !name || !email || !phone) {
      toast.error("Error", {
        description: "Please fill in all fields",
      });
      return;
    }

    // In a real application, you would send this data to your backend
    toast("Reservation Submitted", {
      description: `Your appointment with ${stylist} on ${date.toLocaleDateString()} at ${time} has been scheduled.`,
    });

    // Reset form
    setDate(undefined);
    setTime("");
    setStylist("");
    setName("");
    setEmail("");
    setPhone("");
  };

  useEffect(() => {
    supabase
      .from("rezervation")
      .select("*")
      .then(({ data }) => {
        console.log(data);
      });
  }, []);

  if (!businessInfo) return null;

  return (
    <section id="reservation" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Book Your Appointment
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Schedule your visit to Elegance Beauty Salon and treat yourself to
            our premium services.
          </p>
        </div>

        <Card className="mx-auto max-w-4xl p-0 overflow-hidden border-none shadow-lg">
          <CardContent className="p-0">
            <div className="flex flex-col justify-center md:flex-row">
              {/* Calendar Section - Always Visible */}
              <div
                style={{ backgroundColor: `${businessInfo.primaryColor}50` }}
                className="w-full flex flex-col justify-between p-6 md:w-1/2 md:p-8"
              >
                <h3 className="mb-6 text-xl font-semibold text-slate-900">
                  Select a Date
                </h3>
                <div className="flex w-full h-full justify-center items-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border bg-white p-3 flex"
                    disabled={(date) => {
                      // Disable past dates and Sundays
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      return date < today || date.getDay() === 0;
                    }}
                  />
                </div>
              </div>

              {/* Form Section */}
              <div className="w-full p-6 md:w-1/2 md:p-8">
                <h3 className="mb-6 text-xl font-semibold text-slate-900">
                  Appointment Details
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {businessInfo.worker_ids.length > 1 && (
                    <div className="space-y-2">
                      <Label htmlFor="stylist">Select Stylist</Label>
                      <Select value={stylist} onValueChange={setStylist}>
                        <SelectTrigger className="w-full" id="stylist">
                          <SelectValue placeholder="Select stylist" />
                        </SelectTrigger>
                        <SelectContent>
                          {stylists.map((person) => (
                            <SelectItem key={person} value={person}>
                              {person}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="time">Select Time</Label>
                    <Select value={time} onValueChange={setTime}>
                      <SelectTrigger className="w-full" id="time">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Your phone number"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="mt-4 w-full hover:opacity-80"
                    style={{
                      backgroundColor: `${businessInfo.primaryColor}`,
                    }}
                  >
                    Book Appointment
                  </Button>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
