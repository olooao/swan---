import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-background border-t border-secondary/10 pt-20 pb-10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tight text-secondary">
                SwanMattresses
              </span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-6">
              Premium sleep essentials designed for the modern restorative experience. Engineered for comfort, built to last.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholders */}
              <div className="w-10 h-10 rounded-full bg-secondary/5 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-secondary/5 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-secondary/5 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-secondary mb-6">Products</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">The CloudRest</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">The Hybrid Pro</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Pillows</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Bedding</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Bed Frames</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-secondary mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">100-Night Trial</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Warranty</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-secondary mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Our Story</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Reviews</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SwanMattresses. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
