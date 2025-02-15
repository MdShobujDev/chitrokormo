"use client";

import { Checkbox } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CATEGORIES = [
  { label: "Wallboards", value: "wallboards" },
  { label: "Canvas Prints", value: "canvas-prints" },
  { label: "Doya Cards", value: "doya-cards" },
  { label: "Dawa Canvas", value: "dawa-canvas" },
  { label: "Wall Hangings", value: "wall-hangings" },
  { label: "Event Boards", value: "event-boards" },
  { label: "Promotional Items", value: "promotional-items" },
  { label: "Gift Items", value: "gift-items" },
  { label: "Accessories", value: "accessories" },
  { label: "Custom Products", value: "custom-products" },
];

const ShopByCategory: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get selected categories from URL (split by comma)
  const selectedValues = searchParams.get("categories")?.split(",") || [];
  const [checkedValues, setCheckedValues] = useState<string[]>(selectedValues);

  // Sync state when URL query changes
  useEffect(() => {
    setCheckedValues(searchParams.get("categories")?.split(",") || []);
  }, [searchParams]);

  const handleChange = (values: string[]) => {
    setCheckedValues(values);

    // Update search query
    const params = new URLSearchParams(searchParams.toString());

    if (values.length > 0) {
      params.set("categories", values.join(",")); // Store as comma-separated string
    } else {
      params.delete("categories"); // Remove if empty
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div>
      <h2 className="text-xl font-medium">Shop By Category</h2>
      <Checkbox.Group value={checkedValues} onChange={handleChange}>
        <div className="flex flex-col">
          {CATEGORIES.map((category) => (
            <Checkbox key={category.value} value={category.value}>
              {category.label}
            </Checkbox>
          ))}
        </div>
      </Checkbox.Group>
    </div>
  );
};

export default ShopByCategory;
