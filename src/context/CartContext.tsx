"use client";

import Product from "@/app/products/[id]/page";
import { ApolloQueryResult, gql, useQuery } from "@apollo/client";
import axios from "axios";
import { createContext, ReactNode, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "./AuthContext";

// GraphQL Query to fetch cart data
const GET_CART = gql`
  query Carts($filters: CartFiltersInput) {
    carts(filters: $filters) {
      documentId
      slug
      cart_products {
        id
        price
        size
        product_quantity
        slug
        product {
          documentId
          title
          images {
            name
            url
          }
        }
      }
    }
  }
`;

// GraphQL Mutation to delete a cart item
// const DELETE_CART_ITEM = gql`
//   mutation Mutation($documentId: ID!) {
//     deleteCart(documentId: $documentId) {
//       documentId
//     }
//   }
// `;

// Define TypeScript interfaces
interface Image {
  name: string;
  url: string;
}

interface Product {
  documentId: string;
  title: string;
  images: Image[];
}

interface CartProduct {
  id: string;
  price: number;
  size: string;
  product_quantity: number;
  slug: string;
  product: Product;
}

interface Cart {
  documentId: string;
  slug: string;
  cart_products: CartProduct[];
}

interface CartContextType {
  cart: Cart | null;
  loading: boolean;
  refetch: () => Promise<ApolloQueryResult<{ carts: Cart[] }>>;
  updateCartItem: (
    documentId: string,
    slug: string,
    quantity: number
  ) => Promise<void>;
  deleteCartItem: (documentId: string, slug: string) => Promise<void>;
  addCartItem: (
    documentId: string,
    price: number,
    productId: string,
    product_quantity: number,
    size: string
  ) => Promise<void>;
  deleteCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Context Provider Component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { userSession } = useAuth();

  const { data, loading, refetch } = useQuery<{ carts: Cart[] }>(GET_CART, {
    variables: {
      filters: {
        users_permissions_user: {
          email: {
            eq: userSession?.user?.email,
          },
        },
      },
    },
  });
  // const [deleteCart] = useMutation(DELETE_CART_ITEM);

  const cart = data?.carts?.[0] || null;

  // Function to update cart item quantity
  const updateCartItem = async (
    documentId: string,
    slug: string,
    quantity: number
  ): Promise<void> => {
    try {
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
            price: item.price,
            product: item.product.documentId,
            product_quantity: item.product_quantity,
            size: item.size,
            slug: item.slug,
          })),
        },
      };

      // Send API request with Axios
      await axios.put(
        `http://localhost:1337/api/carts/${documentId}`, // Adjust the endpoint based on your API
        payload,
        {
          headers: {
            // Authorization: `Bearer ${userSession?.jwt}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Refetch to update UI
      await refetch();
    } catch (error) {
      console.error("Error updating cart item:", error);
    }
  };

  // Function to remove a cart item
  const deleteCartItem = async (
    documentId: string,
    slug: string
  ): Promise<void> => {
    try {
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
      const updatedCartProducts = currentCart.cart_products.filter(
        (item) => !(item.slug === slug)
      );

      // Ensure correct product relation structure
      const payload = {
        data: {
          cart_products: updatedCartProducts.map((item) => ({
            price: item.price,
            product: item.product.documentId,
            product_quantity: item.product_quantity,
            size: item.size,
            slug: item.slug,
          })),
        },
      };

      // // Send API request with Axios
      await axios.put(
        `http://localhost:1337/api/carts/${documentId}`, // Adjust the endpoint based on your API
        payload,
        {
          headers: {
            // Authorization: `Bearer ${userSession?.jwt}`,
            "Content-Type": "application/json",
          },
        }
      );
      await refetch();
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  // function to add cart item
  const addCartItem = async (
    documentId: string,
    price: number,
    productId: string,
    product_quantity: number,
    size: string
  ): Promise<void> => {
    try {
      const refetchResponse = await refetch();
      const latestData = refetchResponse?.data;
      const currentCart = latestData?.carts?.[0];

      const newdata = {
        price,
        product: productId,
        product_quantity,
        size,
        slug: uuidv4(),
      };
      if (documentId === "") {
        await axios.post(
          "http://localhost:1337/api/carts",
          {
            data: {
              slug: uuidv4(),
              cart_products: [
                {
                  ...newdata,
                },
              ],
              users_permissions_user: "e9v0wks7z3wytf8vcvs07ltf",
            },
          },
          {
            headers: {
              // Authorization: `Bearer ${userSession?.jwt}`,
              "Content-Type": "application/json",
            },
          }
        );
        await refetch();
        return;
      }
      if (!currentCart) {
        console.error("Cart not found.");
        return;
      }
      // // Modify only the target product
      const oldData = currentCart.cart_products.map((item) => {
        const oldData = {
          price: item.price,
          product: item.product.documentId,
          product_quantity: item.product_quantity,
          size: item.size,
          slug: item.slug,
        };
        return oldData;
      });

      // Ensure correct product relation structure
      const payload = {
        data: {
          cart_products: [...oldData, newdata],
        },
      };

      await axios.put(
        `http://localhost:1337/api/carts/${documentId}`, // Adjust the endpoint based on your API
        payload,
        {
          headers: {
            // Authorization: `Bearer ${userSession?.jwt}`,
            "Content-Type": "application/json",
          },
        }
      );

      await refetch();
    } catch (error) {
      console.error("Error updating cart item:", error);
    }
  };

  // function to delete cart
  const deleteCart = async () => {
    try {
    } catch (error) {
      console.error("Error deleting cart:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        refetch,
        updateCartItem,
        deleteCartItem,
        addCartItem,
        deleteCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook for using Cart Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
