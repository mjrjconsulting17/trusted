"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, Grid, List, SlidersHorizontal } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import ProductCard from "@/components/product-card";
import { products, Product } from "@/lib/products";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by subcategory
    if (selectedSubcategory !== "all") {
      filtered = filtered.filter(product => product.subcategory === selectedSubcategory);
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        return filtered.sort((a, b) => a.price - b.price);
      case "price-high":
        return filtered.sort((a, b) => b.price - a.price);
      case "name":
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      case "newest":
        return filtered.filter(p => p.badge === "NEW").concat(
          filtered.filter(p => p.badge !== "NEW")
        );
      case "featured":
      default:
        return filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
  }, [searchQuery, selectedCategory, selectedSubcategory, sortBy]);

  // Get unique subcategories for current category
  const availableSubcategories = useMemo(() => {
    const categoryProducts = selectedCategory === "all"
      ? products
      : products.filter(p => p.category === selectedCategory);

    return Array.from(new Set(categoryProducts.map(p => p.subcategory)));
  }, [selectedCategory]);

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "mens", label: "Men's" },
    { value: "womens", label: "Women's" },
    { value: "kids", label: "Kids" },
  ];

  const subcategories = [
    { value: "all", label: "All Items" },
    ...availableSubcategories.map(sub => ({
      value: sub,
      label: sub.charAt(0).toUpperCase() + sub.slice(1)
    }))
  ];

  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "newest", label: "Newest" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "name", label: "Name A-Z" },
  ];

  return (
    <div className="min-h-screen bg-concrete-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-urban-900 overflow-hidden">
        <div className="absolute inset-0 bg-graffiti-texture opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-xl text-white mb-6">
              SHOP THE CULTURE
            </h1>
            <p className="text-xl text-concrete-200 mb-8">
              Authentic streetwear that speaks the language of the streets.
              Every piece tells a story of NYC culture and urban luxury.
            </p>
            <div className="flex items-center justify-center space-x-4 text-concrete-300">
              <Badge className="bg-graffiti-orange text-white px-4 py-2">
                {filteredProducts.length} Products
              </Badge>
              <Badge className="bg-graffiti-blue text-white px-4 py-2">
                Free Shipping $200+
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters Header */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-6">
            {/* Search Bar */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-urban-500 h-5 w-5" />
                <Input
                  placeholder="Search for hoodies, tees, culture..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 border-urban-200 focus:border-graffiti-orange"
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="h-12 px-6 border-urban-200"
              >
                <SlidersHorizontal className="mr-2 h-5 w-5" />
                Filters
              </Button>
            </div>

            {/* Filter Controls */}
            {showFilters && (
              <>
                <Separator className="mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {subcategories.map(subcategory => (
                        <SelectItem key={subcategory.value} value={subcategory.value}>
                          {subcategory.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      {sortOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant={viewMode === "grid" ? "default" : "outline"}
                      size="icon"
                      onClick={() => setViewMode("grid")}
                      className="h-10 w-10"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "outline"}
                      size="icon"
                      onClick={() => setViewMode("list")}
                      className="h-10 w-10"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}

            {/* Active Filters */}
            <div className="flex flex-wrap gap-2">
              {selectedCategory !== "all" && (
                <Badge
                  variant="secondary"
                  className="bg-graffiti-orange text-white cursor-pointer hover:bg-graffiti-orange/80"
                  onClick={() => setSelectedCategory("all")}
                >
                  {categories.find(c => c.value === selectedCategory)?.label} ×
                </Badge>
              )}
              {selectedSubcategory !== "all" && (
                <Badge
                  variant="secondary"
                  className="bg-graffiti-blue text-white cursor-pointer hover:bg-graffiti-blue/80"
                  onClick={() => setSelectedSubcategory("all")}
                >
                  {subcategories.find(s => s.value === selectedSubcategory)?.label} ×
                </Badge>
              )}
              {searchQuery && (
                <Badge
                  variant="secondary"
                  className="bg-graffiti-yellow text-urban-900 cursor-pointer hover:bg-graffiti-yellow/80"
                  onClick={() => setSearchQuery("")}
                >
                  "{searchQuery}" ×
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="heading-md text-urban-950 mb-2">
              {searchQuery
                ? `Search Results for "${searchQuery}"`
                : selectedCategory === "all"
                  ? "All Products"
                  : `${categories.find(c => c.value === selectedCategory)?.label} Collection`
              }
            </h2>
            <p className="text-urban-600">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
            </p>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className={`grid gap-8 ${
            viewMode === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1"
          }`}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <Card className="text-center py-20">
            <CardContent>
              <div className="max-w-md mx-auto">
                <h3 className="heading-sm text-urban-800 mb-4">
                  No Products Found
                </h3>
                <p className="text-urban-600 mb-6">
                  We couldn't find any products matching your criteria.
                  Try adjusting your filters or search terms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                      setSelectedSubcategory("all");
                    }}
                    className="btn-graffiti"
                  >
                    Clear All Filters
                  </Button>
                  <Button variant="outline" className="btn-outline-graffiti">
                    Browse All Products
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
