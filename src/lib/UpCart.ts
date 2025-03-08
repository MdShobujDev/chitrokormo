import { useCart } from "@/context/CartContext";
import axios from "axios";

export const Upcart = async (
  documentId: string,
  slug: string,
  quantity: number
) => {
  try {
    const { refetch } = useCart();
    console.log("loading", documentId, slug, quantity);
    const refetchResponse = await refetch();
    const latestData = refetchResponse?.data;
    const currentCart = latestData?.carts?.[0];

    if (!currentCart) {
      console.error("Cart not found.");
      return;
    }

    if (!documentId) {
      console.error("documentId is missing.");
      return;
    }

    // Modify only the target product
    const updatedCartProducts = currentCart.cart_products.map((item) =>
      item.slug === slug ? { ...item, product_quantity: quantity } : item
    );

    // Ensure correct product relation structure
    const payload = {
      data: {
        cart_products: updatedCartProducts.map((item) => ({
          ...item,
          product: item.product.documentId,
        })),
      },
    };

    console.log("Sending request to update cart:", payload);

    // Send API request with Axios
    await axios.put(
      `${process.env.STRAPI_URL}/api/carts/${documentId}`, // Adjust the endpoint based on your API
      payload,
      {
        headers: {
          // Authorization: `Bearer ${userSession?.jwt}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Refetch to update UI
    //   await refetch();
  } catch (error) {
    console.log("error:", error);
  }
};
