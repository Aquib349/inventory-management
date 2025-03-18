import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";

interface productDailogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItem: any;
}

const ProductDailog = ({
  isOpen,
  setIsOpen,
  selectedItem,
}: productDailogProps) => {
  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Product Details</DialogTitle>
          </DialogHeader>
          {selectedItem && (
            <div className="space-y-2 text-sm">
              <p>
                <strong>Item Name:</strong> {selectedItem.itemName}
              </p>
              <p>
                <strong>Item Code:</strong> {selectedItem.itemCode}
              </p>
              <p>
                <strong>Brand:</strong> {selectedItem.brand}
              </p>
              <p>
                <strong>Product:</strong> {selectedItem.product}
              </p>
              <p>
                <strong>GST:</strong> {selectedItem.gst}
              </p>
              <p>
                <strong>HSN Code:</strong> {selectedItem.hsnCode}
              </p>
              <p>
                <strong>Barcode:</strong> {selectedItem.barcode}
              </p>
              <p>
                <strong>Purchase UOM:</strong> {selectedItem.purchaseUOM}
              </p>
              <p>
                <strong>Shelf Life:</strong> {selectedItem.shelfLife}
              </p>
              <p>
                <strong>Units per Box:</strong> {selectedItem.unitsPerBox}
              </p>
              <p>
                <strong>Purchase Price:</strong> {selectedItem.purchasePrice}
              </p>
              <p>
                <strong>Selling Price:</strong> {selectedItem.sellingPrice}
              </p>
              <p>
                <strong>MRP:</strong> {selectedItem.mrp}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`font-semibold ${
                    selectedItem.status === "Active"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {selectedItem.status}
                </span>
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductDailog;
