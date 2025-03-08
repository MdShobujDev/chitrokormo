"use client";
import { useAuth } from "@/context/AuthContext";
import { Button, Modal, Rate } from "antd";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ReviewModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userSession } = useAuth();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const date = new Date().toLocaleDateString("fr-CA");

  const showModal = () => {
    if (userSession) {
      setIsModalOpen(true);
      console.log(userSession);
      return;
    }
    toast("Please login to write a review", { icon: "🔒" });
  };

  const handleSubmit = () => {
    if (!rating || !review.trim()) {
      toast.error("Please provide both a rating and a review.");
      return;
    }

    // Handle review submission logic (e.g., API call)
    console.log({ rating, review, date });

    toast.success("Review submitted successfully!");
    setIsModalOpen(false);
    setRating(0);
    setReview("");
  };

  return (
    <>
      <button
        onClick={showModal}
        className="max-w-max border border-primary hover:bg-primary hover:text-white transition-all duration-200 ease-linear px-2.5 py-1.5 rounded-full sm:text-sm text-xs"
      >
        Write a review
      </button>
      <Modal
        title="Write a product review"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button
            key="submit"
            type="primary"
            onClick={handleSubmit}
            disabled={!rating || !review.trim()}
          >
            Submit
          </Button>,
        ]}
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">Your Rating</h2>
            <Rate
              style={{ fontSize: "1.2rem" }}
              allowHalf
              value={rating}
              onChange={setRating}
            />
          </div>
          <div>
            <textarea
              className="border-[1.5px] outline-none border-gray-400 rounded w-full p-2"
              name="review"
              id="review"
              rows={5}
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write your review here..."
              autoFocus
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ReviewModal;
