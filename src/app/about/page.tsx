import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Zap, Heart, ArrowRight, Instagram, Music } from "lucide-react";

export default function AboutPage() {
  const stats = [
    {
      icon: Users,
      number: "10K+",
      label: "Culture Leaders",
      description: "Customers who trust our authentic street style"
    },
    {
      icon: MapPin,
      number: "NYC",
      label: "Born & Raised",
      description: "Authentic New York street culture since day one"
    },
    {
      icon: Zap,
      number: "500+",
      label: "Limited Drops",
      description: "Exclusive releases celebrating urban culture"
    },
    {
      icon: Heart,
      number: "100%",
      label: "Authentic",
      description: "Every piece tells a story of street credibility"
    }
  ];

  const values = [
    {
      title: "AUTHENTICITY",
      description: "We don't follow trends – we create culture. Every piece in our collection is designed with the authentic spirit of NYC street art and Black excellence.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "COMMUNITY",
      description: "TRUSTED is more than clothing – we're a movement. We celebrate and uplift the voices that built street culture from the ground up.",
      image: "https://images.unsplash.com/photo-1529258283598-8d6fe60b27f4?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "QUALITY",
      description: "Premium materials meet street-smart design. We don't compromise on quality because the culture deserves nothing less than excellence.",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  const timeline = [
    {
      year: "2018",
      title: "The Vision",
      description: "Founded in Brooklyn with a simple mission: create authentic streetwear that honors Black culture and NYC street art tradition."
    },
    {
      year: "2019",
      title: "First Collection",
      description: "Launched our signature line featuring original graffiti artwork from local NYC artists, establishing our commitment to authentic street culture."
    },
    {
      year: "2021",
      title: "Community Growth",
      description: "Expanded beyond clothing to become a platform celebrating street artists, with exclusive collaborations and community events."
    },
    {
      year: "2023",
      title: "Cultural Impact",
      description: "Recognized as a leading voice in streetwear, with features in major publications and partnerships with cultural institutions."
    },
    {
      year: "2024",
      title: "The Future",
      description: "Continuing to push boundaries while staying true to our roots – authentic, bold, and unapologetically urban."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1520637836862-4d197d17c90a?q=80&w=2000&auto=format&fit=crop')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-urban-900/90 via-urban-800/70 to-transparent"></div>
          <div className="absolute inset-0 bg-graffiti-texture opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <Badge className="bg-graffiti-orange text-white font-bold px-4 py-2 mb-6 uppercase tracking-wider">
              Our Story
            </Badge>

            <h1 className="heading-xl text-white mb-8">
              BORN FROM THE
              <span className="block text-graffiti-orange">STREETS OF NYC</span>
            </h1>

            <div className="max-w-3xl">
              <p className="text-xl md:text-2xl text-concrete-200 mb-8 leading-relaxed">
                TRUSTED emerged from the vibrant street culture of New York City, where Black creativity
                and urban artistry converge to create something truly authentic. We're not just another
                streetwear brand – we're a celebration of the culture that built the foundation of modern
                street fashion.
              </p>

              <p className="text-lg text-concrete-300 mb-8 leading-relaxed">
                Every hoodie, every tee, every piece in our collection tells the story of NYC's
                underground culture. From the spray-painted walls of Brooklyn to the fashion-forward
                streets of Harlem, TRUSTED captures the essence of Black excellence and street art
                tradition. We partner with local graffiti artists, support community initiatives,
                and ensure that our success uplifts the very culture that inspired us. This isn't
                just clothing – it's wearable culture, authentic stories, and a commitment to keeping
                the streets' voice alive in every thread.
              </p>

              <Button asChild className="btn-graffiti text-lg px-8 py-4">
                <Link href="/products">
                  SHOP THE CULTURE
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-concrete-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-graffiti-orange rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-urban-950 mb-2">
                    {stat.number}
                  </h3>
                  <h4 className="font-display font-bold text-urban-800 uppercase tracking-wider mb-2">
                    {stat.label}
                  </h4>
                  <p className="text-urban-600 text-sm">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-urban-950 mb-4">
              WHAT WE STAND FOR
            </h2>
            <p className="text-xl text-urban-600 max-w-3xl mx-auto">
              Our values aren't just words on a wall – they're the foundation
              of everything we create and every decision we make.
            </p>
          </div>

          <div className="space-y-16">
            {values.map((value, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="relative overflow-hidden rounded-lg shadow-xl">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-urban-900/40 to-transparent"></div>
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <h3 className="heading-md text-urban-950">
                    {value.title}
                  </h3>
                  <p className="text-lg text-urban-700 leading-relaxed">
                    {value.description}
                  </p>
                  <div className="w-16 h-1 bg-gradient-to-r from-graffiti-orange to-graffiti-blue"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-urban-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-white mb-4">
              OUR JOURNEY
            </h2>
            <p className="text-xl text-concrete-200 max-w-3xl mx-auto">
              From a vision in Brooklyn to a movement that celebrates
              authentic street culture across the globe.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-graffiti-orange via-graffiti-blue to-graffiti-yellow transform md:-translate-x-1/2"></div>

              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-graffiti-orange rounded-full border-4 border-urban-900 transform md:-translate-x-1/2 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="border-urban-700 bg-urban-800">
                      <CardContent className="p-6">
                        <Badge className="bg-graffiti-yellow text-urban-900 font-bold mb-3">
                          {item.year}
                        </Badge>
                        <h3 className="heading-sm text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-concrete-300 leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-concrete-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-lg text-urban-950 mb-8">
            JOIN THE CULTURE
          </h2>
          <p className="text-xl text-urban-600 mb-12 max-w-3xl mx-auto">
            TRUSTED is more than a brand – we're a community of culture creators,
            street artists, and individuals who refuse to compromise on authenticity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <Instagram className="h-12 w-12 text-graffiti-orange mx-auto mb-4" />
                <h3 className="font-display font-bold text-urban-900 mb-2">
                  FOLLOW US
                </h3>
                <p className="text-urban-600 mb-4">
                  Stay connected with daily drops and culture updates
                </p>
                <div className="space-y-2">
                  <p className="font-medium text-urban-800">@trustedca</p>
                  <p className="text-sm text-urban-600">Instagram & TikTok</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <Music className="h-12 w-12 text-graffiti-blue mx-auto mb-4" />
                <h3 className="font-display font-bold text-urban-900 mb-2">
                  SNAPCHAT
                </h3>
                <p className="text-urban-600 mb-4">
                  Exclusive behind-the-scenes and early access
                </p>
                <div className="space-y-2">
                  <p className="font-medium text-urban-800">@TrustedToronto</p>
                  <p className="text-sm text-urban-600">Snapchat</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Button asChild className="btn-graffiti text-lg px-8 py-4">
              <Link href="/products">
                START YOUR CULTURE JOURNEY
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-urban-600">
              Questions? <Link href="/contact" className="text-graffiti-orange hover:underline">Get in touch</Link> – we're always here for the culture.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
