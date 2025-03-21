import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileSpreadsheet } from "lucide-react";
import { useState, useRef } from "react";
import AddProduct from "./add-product";
import { useProduct } from "@/hooks/use-product";

const ProductSearch = () => {
  const { uploadExcelFile } = useProduct();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Allowed file types
  const allowedFileTypes = [
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "text/csv",
  ];

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!allowedFileTypes.includes(file.type)) {
        alert("Only CSV or Excel files are allowed!");
        event.target.value = "";
        return;
      }
      uploadExcelFile(file);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Input type="text" placeholder="Search product.." className="w-1/3" />
        <div className="flex items-center gap-2">
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept=".csv, .xls, .xlsx"
            onChange={handleFileChange}
          />
          <Button
            variant="default"
            className="bg-[#0e3473] text-xs font-normal flex cursor-pointer text-white"
            onClick={handleFileUpload}
          >
            <FileSpreadsheet /> Upload
          </Button>
          <Button
            variant="default"
            className="bg-[#0e3473] text-xs font-normal px-6 cursor-pointer text-white"
            onClick={() => setIsOpen(true)}
          >
            Add
          </Button>
        </div>
      </div>
      <AddProduct isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default ProductSearch;
