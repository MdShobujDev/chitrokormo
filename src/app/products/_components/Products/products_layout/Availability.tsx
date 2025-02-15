"use client";

import { Checkbox } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const OPTIONS = [
  { label: "In Stock", value: "in-stock" },
  { label: "Upcoming", value: "upcoming" },
  { label: "Out of Stock", value: "out-of-stock" },
];

const Availability: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get selected values from URL query (split by comma)
  const selectedValues = searchParams.get("availability")?.split(",") || [];

  const [checkedValues, setCheckedValues] = useState<string[]>(selectedValues);

  // Update state when URL query changes
  useEffect(() => {
    setCheckedValues(searchParams.get("availability")?.split(",") || []);
  }, [searchParams]);

  const handleChange = (values: string[]) => {
    setCheckedValues(values);

    // Update search query
    const params = new URLSearchParams(searchParams.toString());

    if (values.length > 0) {
      params.set("availability", values.join(",")); // Store as comma-separated string
    } else {
      params.delete("availability");
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div>
      <h2 className="text-xl font-medium">Availability</h2>
      <Checkbox.Group value={checkedValues} onChange={handleChange}>
        <div className="flex flex-col">
          {OPTIONS.map((option) => (
            <Checkbox key={option.value} value={option.value}>
              {option.label}
            </Checkbox>
          ))}
        </div>
      </Checkbox.Group>
    </div>
  );
};

export default Availability;
