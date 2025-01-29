"use client";
import { Modal } from "antd";
import React, { useState } from "react";

const ReviewModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={showModal}
        className=" max-w-max border border-primary hover:bg-primary hover:text-white text-sm transition-all duration-200 ease-linear px-2.5 py-1.5 rounded-full"
      >
        Write a review
      </button>
      <Modal
        title="Write a product review"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
        <div>bdjf</div>
      </Modal>
    </>
  );
};

export default ReviewModal;
