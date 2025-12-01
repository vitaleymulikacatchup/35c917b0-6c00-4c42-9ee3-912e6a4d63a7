"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, Coffee, Heart, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="large"
      sizing="small"
      background="animatedGrid"
      cardStyle="glass-flat"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764606981833-518uozo9.jpg"
          logoAlt="Sebastian Coffeeshop"
          brandName="Sebastian"
          button={{
            text: "Reserve a Table",
            href: "contact"
          }}
          className="bg-background/80 backdrop-blur-md"
          buttonClassName="bg-primary-cta hover:bg-primary-cta/90 text-white"
          buttonTextClassName="font-semibold"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Welcome to Sebastian"
          description="Exceptional coffee, warm atmosphere, and moments that matter. Experience the art of specialty coffee crafted with passion."
          tag="Premium Coffeeshop"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764606983141-4egjft66.jpg"
          imageAlt="Fresh coffee being brewed"
          textPosition="bottom-left"
          showDimOverlay={true}
          showBlur={true}
          buttons={[
            {
              text: "Reserve Now",
              href: "contact"
            },
            {
              text: "View Menu",
              href: "products"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="Our Story"
          title="Crafted with Passion"
          description="Sebastian started with a simple vision: to create a space where coffee excellence meets genuine human connection. Every cup tells a story of quality sourcing, expert roasting, and dedicated baristas who love what they do."
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764606984753-yudpx8lk.jpg"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764606984753-yudpx8lk.jpg"
          }}
          buttons={[
            {
              text: "Learn More",
              href: "#"
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Our Menu"
          description="Discover our carefully curated selection of specialty coffees and fresh pastries"
          tag="Featured Items"
          products={[
            {
              id: "1",
              name: "Single Origin Espresso",
              price: "$4.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764606985827-5gvec214.jpg"
            },
            {
              id: "2",
              name: "Velvety Cappuccino",
              price: "$5.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764606987052-5759qz29.jpg"
            },
            {
              id: "3",
              name: "Buttery Croissant",
              price: "$3.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764606987965-7mrggw91.jpg"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Why Choose Sebastian"
          description="Numbers that reflect our commitment to excellence"
          metrics={[
            {
              id: "1",
              icon: Coffee,
              title: "Coffee Varieties",
              value: "30+"
            },
            {
              id: "2",
              icon: Users,
              title: "Happy Customers",
              value: "5K+"
            },
            {
              id: "3",
              icon: Award,
              title: "Years Experience",
              value: "8"
            },
            {
              id: "4",
              icon: Heart,
              title: "Daily Visits",
              value: "500+"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="scale-rotate"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real stories from people who love Sebastian"
          tag="Testimonials"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Regular Customer",
              company: "Creative Professional",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764606988833-9tmwdz55.jpg"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Coffee Enthusiast",
              company: "Tech Startup Founder",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764606989763-aoznefjj.jpg"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Daily Visitor",
              company: "Remote Writer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764606990658-rfftxdo0.jpg"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Coffee Connoisseur",
              company: "Business Owner",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764606991688-l6vbq8uc.jpg"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="opacity"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          title="Ready for the Perfect Cup?"
          description="Join us for an unforgettable coffeeshop experience. Reserve your table or just drop by."
          inputPlaceholder="Enter your email"
          buttonText="Join Our Newsletter"
          termsText="We respect your privacy and only send occasional updates about special events and new menu items."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Sebastian",
              items: [
                {
                  label: "About",
                  href: "about"
                },
                {
                  label: "Menu",
                  href: "products"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Visit Us",
              items: [
                {
                  label: "123 Coffee Street, Downtown"
                },
                {
                  label: "Mon-Fri: 7am - 8pm"
                },
                {
                  label: "Sat-Sun: 8am - 9pm"
                }
              ]
            },
            {
              title: "Connect",
              items: [
                {
                  label: "Instagram",
                  href: "https://instagram.com"
                },
                {
                  label: "Phone: (555) 123-4567"
                },
                {
                  label: "hello@sebastincoffee.com"
                }
              ]
            }
          ]}
          copyrightText="© 2025 Sebastian Coffeeshop. All rights reserved."
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vmIsFKiMtTSUSBP7nWGRgR0We/uploaded-1764606981833-518uozo9.jpg"
        />
      </div>
    </ThemeProvider>
  );
}