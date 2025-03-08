"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";

const ActiveFilter: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Extract filter values from search params
  const sort = searchParams.get("sort");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");

  // Memoize availability and categories to prevent unnecessary re-renders
  const availability = useMemo(
    () => searchParams.get("availability")?.split(",") || [],
    [searchParams]
  );

  const categories = useMemo(
    () => searchParams.get("categories")?.split(",") || [],
    [searchParams]
  );

  // Store active filter items
  const [filterItems, setFilterItems] = useState<
    { label: string; key: string }[]
  >([]);

  useEffect(() => {
    setFilterItems((prevItems) => {
      const filters: { label: string; key: string }[] = [];

      if (sort) filters.push({ label: `Sort: ${sort}`, key: "sort" });
      if (minPrice && maxPrice)
        filters.push({
          label: `Price: $${minPrice} - $${maxPrice}`,
          key: "price",
        });

      availability.forEach((item) =>
        filters.push({
          label: `${item}`,
          key: `availability-${item}`,
        })
      );

      categories.forEach((item) =>
        filters.push({
          label: `${item}`,
          key: `categories-${item}`,
        })
      );

      // Prevent unnecessary re-renders by checking if the state actually changed
      if (JSON.stringify(prevItems) === JSON.stringify(filters)) {
        return prevItems;
      }

      return filters;
    });
  }, [sort, minPrice, maxPrice, availability, categories]);

  // Remove a single filter
  const handleRemoveFilter = (key: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (key === "sort") params.delete("sort");
    if (key === "price") {
      params.delete("minPrice");
      params.delete("maxPrice");
    }
    if (key.startsWith("availability-")) {
      const value = key.replace("availability-", "");
      const updatedAvailability = availability.filter((item) => item !== value);

      if (updatedAvailability.length > 0) {
        params.set("availability", updatedAvailability.join(","));
      } else {
        params.delete("availability");
      }
    }
    if (key.startsWith("categories-")) {
      const value = key.replace("categories-", "");
      const updatedCategories = categories.filter((item) => item !== value);

      if (updatedCategories.length > 0) {
        params.set("categories", updatedCategories.join(","));
      } else {
        params.delete("categories");
      }
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  // Clear all filters
  const handleClearAll = () => {
    router.push("?", { scroll: false });
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium">Active Filters</h2>
        {filterItems.length > 0 && (
          <button
            onClick={handleClearAll}
            className="hover:text-primary transition-all cursor-pointer"
          >
            Clear all
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-1">
        {filterItems.map(({ label, key }) => (
          <div
            key={key}
            className="flex items-center gap-2 max-w-max rounded-md px-2 py-1 bg-primary text-white"
          >
            <span>{label}</span>
            <button
              onClick={() => handleRemoveFilter(key)}
              className="cursor-pointer"
            >
              <HiMiniXMark />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveFilter;
