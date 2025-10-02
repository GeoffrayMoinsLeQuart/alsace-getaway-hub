import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const SUPERHOTE_WEB_KEY = Deno.env.get('SUPERHOTE_WEB_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const checkIn = url.searchParams.get('checkin');
    const checkOut = url.searchParams.get('checkout');
    const adults = url.searchParams.get('adults') || '2';
    const children = url.searchParams.get('children') || '0';

    let apiUrl = `https://app.superhote.com/api/v2/get-user-rentals/${SUPERHOTE_WEB_KEY}`;
    
    // If dates are provided, fetch available rentals
    if (checkIn && checkOut) {
      apiUrl = `https://app.superhote.com/api/v2/get-available-rentals/${SUPERHOTE_WEB_KEY}?startDate=${checkIn}&endDate=${checkOut}&adultsNumber=${adults}&childrenNumber=${children}`;
    }

    console.log('Fetching from SuperHote:', apiUrl);

    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log('SuperHote response:', data);

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in superhote-properties function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
