import { Mail, Phone, MapPin } from "lucide-react";

export default function FooterContact() {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-foreground">Contact</h4>
      <ul className="space-y-3 text-sm text-muted-foreground">
        <li className="flex items-start gap-2">
          <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <span>
            Mulhouse, Colmar, Saint-Louis<br />Alsace, France
          </span>
        </li>
        <li className="flex items-center gap-2">
          <Phone className="h-5 w-5 flex-shrink-0" />
          <a href="tel:+33621471922" className="hover:text-primary transition-colors">
            06 21 47 19 22
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Mail className="h-5 w-5 flex-shrink-0" />
          <a href="mailto:lesclefsdalsace@gmail.com" className="hover:text-primary transition-colors">
            lesclefsdalsace@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
}
