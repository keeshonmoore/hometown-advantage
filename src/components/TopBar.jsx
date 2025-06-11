import { Mail, Phone, Facebook, Instagram } from 'lucide-react';

function TopBar() {
  return (
    <div className="hidden lg:flex bg-primary text-white py-2">
      <div className="px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>michellesellsyuma@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>(928) 329-7275</span>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/michellesells928/" aria-label="Facebook">
            <Facebook className="h-5 w-5 hover:text-secondary transition-colors" />
          </a>
          <a href="https://www.instagram.com/hometown_advantage_real_estate/" aria-label="Instagram">
            <Instagram className="h-5 w-5 hover:text-secondary transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;