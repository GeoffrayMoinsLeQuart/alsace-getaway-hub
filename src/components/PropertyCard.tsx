import { Link } from "react-router-dom";
import { MapPin, Users, Home, Bed } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  id: string;
  title: string;
  city: string;
  image: string;
  price: number;
  capacity: number;
  bedrooms: number;
  surface: number;
  propertyKey?: string;
}

export default function PropertyCard({
  id,
  title,
  city,
  image,
  price,
  capacity,
  bedrooms,
  surface,
  propertyKey,
}: PropertyCardProps) {
  // Always use propertyKey if available for the link
  const linkTo = `/logements/${propertyKey || id}`;
  
  return (
    <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300 bg-card">
      <Link to={linkTo}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {price}€/nuit
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {city}
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              {capacity} pers.
            </div>
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              {bedrooms} ch.
            </div>
            <div className="flex items-center gap-1">
              <Home className="h-4 w-4" />
              {surface}m²
            </div>
          </div>

          <Button className="w-full bg-gradient-primary" size="lg">
            Voir les détails
          </Button>
        </div>
      </Link>
    </Card>
  );
}
