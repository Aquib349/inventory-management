import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";

interface AddProductProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddProduct = ({ isOpen, setIsOpen }: AddProductProps) => {
  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hey There !!</DialogTitle>
          </DialogHeader>
          Our Team working on it.
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddProduct;
