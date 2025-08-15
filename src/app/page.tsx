"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import {
  GraffitiBackground,
  GraffitiTag,
  SprayPaintSplash,
  DripText,
  StencilText,
  NeonText,
  GraffitiArrow,
  TapeSticker,
  PaintDrip
} from "@/components/graffiti-elements";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const featuredCategories = [
    {
      title: "MEN'S",
      subtitle: "Street Collection",
      description: "Bold designs for urban warriors",
      image: "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?q=80&w=1000&auto=format&fit=crop",
      href: "/products/mens",
      tag: "FRESH",
      tagColor: "text-cyan-500"
    },
    {
      title: "WOMEN'S",
      subtitle: "Urban Queen",
      description: "Street style meets high fashion",
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1000&auto=format&fit=crop",
      href: "/products/womens",
      tag: "FIRE",
      tagColor: "text-pink-500"
    },
    {
      title: "KIDS",
      subtitle: "Mini Street",
      description: "Next gen street culture",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1000&auto=format&fit=crop",
      href: "/products/kids",
      tag: "COOL",
      tagColor: "text-green-500"
    },
  ];

  const featuredProducts = [
    {
      name: "GRAFFITI HOODIE",
      price: "$120",
      originalPrice: "$150",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop",
      category: "LIMITED",
    },
    {
      name: "STREET TEE",
      price: "$45",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
      category: "NEW DROP",
    },
    {
      name: "URBAN CARGO",
      price: "$85",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000&auto=format&fit=crop",
      category: "HOT",
    },
    {
      name: "TAG BOMBER",
      price: "$200",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=1000&auto=format&fit=crop",
      category: "EXCLUSIVE",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 wall-texture relative overflow-hidden">
      <GraffitiBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Graffiti wall background */}
        <div className="absolute inset-0 opacity-90">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1560967563-aaae4f5539f4?q=80&w=2000&auto=format&fit=crop')`,
              filter: 'brightness(0.3) contrast(1.2)',
            }}
          />
        </div>

        {/* Paint splashes */}
        <SprayPaintSplash position={{ top: "10%", left: "5%" }} size={400} color="rgba(251, 191, 36, 0.3)" />
        <SprayPaintSplash position={{ bottom: "10%", right: "10%" }} size={350} color="rgba(236, 72, 153, 0.3)" />
        <SprayPaintSplash position={{ top: "50%", left: "70%" }} size={300} color="rgba(59, 130, 246, 0.3)" />

        {/* Corner graffiti tags */}
        <div className="absolute top-10 left-10 opacity-40">
          <GraffitiTag text="AUTHENTIC" color="text-yellow-400" rotation={-12} />
        </div>
        <div className="absolute bottom-20 right-10 opacity-40">
          <GraffitiTag text="REAL" color="text-pink-400" rotation={8} />
        </div>
        <div className="absolute top-32 right-20 opacity-30">
          <GraffitiTag text="RAW" color="text-cyan-400" rotation={-8} />
        </div>

        {/* Paint drips */}
        <PaintDrip className="top-0 left-[20%]" color="#dc2675" />
        <PaintDrip className="top-0 left-[40%]" color="#3b82f6" height={80} />
        <PaintDrip className="top-0 right-[30%]" color="#fbbf24" height={100} />
        <PaintDrip className="top-0 right-[15%]" color="#22c55e" height={70} />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Animated badge */}
            <div
              className="inline-block mb-8 animate-fade-in"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <TapeSticker rotation={-3}>
                <span className="hand-text text-black text-lg font-bold">
                  NEW COLLECTION DROPPED
                </span>
              </TapeSticker>
            </div>

            {/* Main headline with graffiti style */}
            <div className="mb-6">
              <h1 className="relative inline-block">
                <span
                  className="block text-8xl md:text-9xl font-black opacity-0 animate-slide-up"
                  style={{
                    animationDelay: "0.2s",
                    animationFillMode: "forwards",
                    fontFamily: 'Black Ops One',
                    color: '#fbbf24',
                    textShadow: `
                      3px 3px 0 #000,
                      6px 6px 0 #dc2675,
                      9px 9px 0 #3b82f6,
                      12px 12px 20px rgba(0,0,0,0.5)
                    `,
                    transform: 'rotate(-2deg)',
                    letterSpacing: '0.05em'
                  }}
                >
                  TRUSTED
                </span>
                <span
                  className="block text-3xl md:text-5xl mt-2 opacity-0 animate-slide-up"
                  style={{
                    animationDelay: "0.4s",
                    animationFillMode: "forwards",
                    fontFamily: 'Permanent Marker',
                    color: '#fff',
                    textShadow: '2px 2px 0 #000, 4px 4px 10px rgba(0,0,0,0.5)',
                    transform: 'rotate(1deg)'
                  }}
                >
                  GRAFFITI STREETWEAR
                </span>
              </h1>
            </div>

            <p
              className="text-xl text-white mb-12 font-medium max-w-2xl mx-auto leading-relaxed opacity-0 animate-slide-up backdrop-blur-sm bg-black/30 p-4 rounded-lg"
              style={{
                animationDelay: "0.6s",
                animationFillMode: "forwards",
                fontFamily: 'Russo One'
              }}
            >
              Where street art meets fashion. Authentic urban wear designed for those who paint the city with their style.
            </p>

            {/* CTA Buttons with graffiti style */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-slide-up" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
              <Button
                asChild
                className="bg-yellow-400 text-black hover:bg-yellow-300 px-8 py-6 text-lg font-bold border-4 border-black transition-all duration-300 hover:scale-105 hover:rotate-1 shadow-[4px_4px_0_rgba(0,0,0,1)]"
                style={{ fontFamily: 'Bebas Neue', letterSpacing: '0.1em' }}
              >
                <Link href="/products">
                  SHOP THE STREETS
                  <GraffitiArrow className="ml-2 inline-block w-8 h-8" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-4 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-bold backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:-rotate-1 shadow-[4px_4px_0_rgba(255,255,255,0.3)]"
                style={{ fontFamily: 'Bebas Neue', letterSpacing: '0.1em' }}
              >
                <Link href="/about">
                  OUR STORY
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator with graffiti style */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-yellow-400 animate-bounce">
          <div className="graffiti-text text-2xl">
            <ChevronDown className="w-10 h-10" strokeWidth={3} />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section
        id="collections"
        ref={(el) => { sectionsRef.current[0] = el; }}
        className={`py-24 relative transition-all duration-1000 ${
          visibleSections.has("collections") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Background paint effects */}
        <SprayPaintSplash position={{ top: "0%", left: "0%" }} size={500} color="rgba(147, 51, 234, 0.1)" />
        <SprayPaintSplash position={{ bottom: "0%", right: "0%" }} size={450} color="rgba(34, 197, 94, 0.1)" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="inline-block">
              <StencilText className="text-5xl text-black drop-shadow-[3px_3px_0_rgba(251,146,60,1)]">
                SHOP COLLECTIONS
              </StencilText>
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed mt-6 hand-text">
              Fresh drops from the underground. Each piece tells a story from the streets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCategories.map((category, index) => (
              <Link
                key={category.title}
                href={category.href}
                className={`group transition-all duration-700 ${
                  visibleSections.has("collections")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: visibleSections.has("collections") ? `${index * 150}ms` : "0ms"
                }}
              >
                <Card className="h-96 overflow-hidden border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,1)] hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-all duration-700 group-hover:-translate-y-2 group-hover:rotate-1 relative">
                  <div className="relative h-full">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                    {/* Graffiti tag overlay */}
                    <div className="absolute top-4 right-4">
                      <div className="sticker-effect bg-white">
                        <span className={`tag-text text-2xl ${category.tagColor} font-black`}>
                          {category.tag}
                        </span>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <Badge className="mb-4 bg-yellow-400 text-black border-2 border-black font-bold text-sm">
                        {category.subtitle}
                      </Badge>
                      <h3 className="street-text text-3xl mb-2 text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
                        {category.title}
                      </h3>
                      <p className="text-white/90 mb-4 hand-text text-lg">
                        {category.description}
                      </p>
                      <div className="flex items-center text-sm font-bold group-hover:translate-x-2 transition-transform tag-text text-yellow-400">
                        EXPLORE
                        <ArrowRight className="ml-2 h-4 w-4" strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section
        id="products"
        ref={(el) => { sectionsRef.current[1] = el; }}
        className={`py-24 relative transition-all duration-1000 ${
          visibleSections.has("products") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Paint splatter background */}
        <SprayPaintSplash position={{ top: "20%", right: "5%" }} size={400} color="rgba(251, 191, 36, 0.15)" />
        <SprayPaintSplash position={{ bottom: "10%", left: "10%" }} size={350} color="rgba(59, 130, 246, 0.15)" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="inline-block">
                <NeonText className="text-5xl" color="text-pink-500">
                  HOT DROPS
                </NeonText>
              </h2>
              <p className="text-xl text-gray-800 mt-4 hand-text">
                Fresh from the spray can to your wardrobe
              </p>
            </div>
            <Button
              asChild
              className="border-4 border-black bg-white text-black hover:bg-yellow-400 font-bold px-6 py-3 shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_rgba(0,0,0,1)] transition-all"
              style={{ fontFamily: 'Bebas Neue', letterSpacing: '0.1em' }}
            >
              <Link href="/products">
                VIEW ALL
                <ArrowRight className="ml-2 h-4 w-4" strokeWidth={3} />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <Card
                key={product.name}
                className={`group border-4 border-black shadow-[6px_6px_0_rgba(0,0,0,1)] hover:shadow-[10px_10px_0_rgba(0,0,0,1)] transition-all duration-500 hover:-translate-y-1 hover:rotate-1 ${
                  visibleSections.has("products")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: visibleSections.has("products") ? `${index * 100}ms` : "0ms"
                }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-pink-500 text-white px-3 py-1 font-black transform -rotate-3 shadow-[2px_2px_0_rgba(0,0,0,1)]">
                      <span className="tag-text">{product.category}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      size="sm"
                      className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold border-2 border-black shadow-[3px_3px_0_rgba(0,0,0,1)]"
                      style={{ fontFamily: 'Bebas Neue', letterSpacing: '0.05em' }}
                    >
                      QUICK VIEW
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6 bg-white">
                  <h3 className="street-text text-xl mb-3 text-black">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl font-black text-black graffiti-text">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        id="newsletter"
        ref={(el) => { sectionsRef.current[2] = el; }}
        className={`py-24 bg-black relative overflow-hidden transition-all duration-1000 ${
          visibleSections.has("newsletter") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Graffiti background texture */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1494442348137-1b15a93d6a6f?q=80&w=2000&auto=format&fit=crop')`,
              backgroundSize: 'cover',
              filter: 'contrast(1.5)',
            }}
          />
        </div>

        {/* Paint effects */}
        <SprayPaintSplash position={{ top: "0%", left: "10%" }} size={400} color="rgba(251, 191, 36, 0.2)" />
        <SprayPaintSplash position={{ bottom: "0%", right: "10%" }} size={400} color="rgba(236, 72, 153, 0.2)" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-6">
              <DripText color="text-yellow-400">
                STAY FRESH
              </DripText>
            </h2>
            <p className="text-xl text-white mb-12 leading-relaxed hand-text">
              Get exclusive drops, underground releases, and street culture news straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Drop your email"
                className="flex-1 px-6 py-4 bg-white text-black border-4 border-black focus:outline-none focus:ring-4 focus:ring-yellow-400 font-bold placeholder:text-gray-500"
                style={{ fontFamily: 'Russo One' }}
              />
              <Button
                className="bg-pink-500 text-white hover:bg-pink-400 px-8 py-4 font-black border-4 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_rgba(0,0,0,1)] transition-all"
                style={{ fontFamily: 'Bebas Neue', letterSpacing: '0.1em' }}
              >
                JOIN THE CREW
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-6 hand-text">
              10,000+ street artists already in. No spam, just pure street culture.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
