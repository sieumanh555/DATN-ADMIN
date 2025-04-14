"use client";
import { useState, useCallback } from "react";

export const useModal = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const openModal = useCallback((id?: string) => {
    setSelectedId(id || null);
    setIsOpen(true);
    if (id) {
      console.log("ID được truyền vào:", id);
    } else {
      console.log("Modal opened without an ID.");
    }
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setSelectedId(null);
  }, []);

  const toggleModal = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, openModal, closeModal, toggleModal, selectedId };
};
