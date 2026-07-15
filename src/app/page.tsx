"use client";

import { useState } from "react";
import { getAllPhones, getBrands } from "@/lib/phones";
import PhoneCard from "@/components/PhoneCard";

export default function HomePage() {
  const phones = getAllPhones();
  const brands = getBrands();
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPhones = phones.filter((phone) => {
    const matchesBrand = selectedBrand === "all" || phone.brand === selectedBrand;
    const matchesSearch = phone.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      phone.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBrand && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-bg py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-fg mb-2">Phone Specs</h1>
          <p className="text-muted">Compare specifications, prices, and features</p>
        </header>

        <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search phones..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="neu-input"
            />
          </div>
          <div className="flex-1 max-w-xs">
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="neu-select"
            >
              <option value="all">All Brands</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
          <div className="text-sm text-muted">
            {filteredPhones.length} of {phones.length} phones
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhones.map((phone) => (
            <PhoneCard key={phone.id} phone={phone} />
          ))}
        </div>

        {filteredPhones.length === 0 && (
          <div className="text-center py-12 text-muted">
            No phones found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}