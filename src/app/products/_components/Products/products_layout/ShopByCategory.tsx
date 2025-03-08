"use client";

import { GET_CATEGORIES } from "@/lib/queries";
import { useQuery } from "@apollo/client";
import { Checkbox } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
interface CategoryProps {
  name: string;
  documentId: string;
  slug: string;
  image: {
    url: string;
    name: string;
  };
}
const ShopByCategory: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get selected categories from URL
  const selectedValues = useMemo(
    () => searchParams.get("categories")?.split(",") || [],
    [searchParams]
  );

  const [checkedValues, setCheckedValues] = useState<string[]>(selectedValues);

  // Sync state with URL changes (when manually updated)
  useEffect(() => {
    setCheckedValues(selectedValues);
  }, [selectedValues]);

  const handleChange = (values: string[]) => {
    setCheckedValues(values);

    // Avoid updating URL if values are unchanged
    if (values.join(",") === selectedValues.join(",")) return;

    const params = new URLSearchParams(searchParams.toString());

    if (values.length > 0) {
      params.set("categories", values.join(","));
    } else {
      params.delete("categories");
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.categories) return <p>No categories found.</p>;

  return (
    <div>
      <h2 className="text-xl font-medium">Shop By Category</h2>
      <Checkbox.Group value={checkedValues} onChange={handleChange}>
        <div className="flex flex-col">
          {data.categories.map((category: CategoryProps) => (
            <Checkbox key={category.slug} value={category.name}>
              {category.name}
            </Checkbox>
          ))}
        </div>
      </Checkbox.Group>
    </div>
  );
};

export default ShopByCategory;
