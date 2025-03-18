import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface productMasterProps {
  tableContainerRef: any;
  paginatedData: any;
  handleViewDetails: (item: any) => void;
}

const ProductTable = ({
  tableContainerRef,
  paginatedData,
  handleViewDetails,
}: productMasterProps) => {
  return (
    <>
      <div className="border rounded-md overflow-hidden">
        <div ref={tableContainerRef} className="overflow-y-auto">
          <Table>
            <TableHeader className="sticky top-0 bg-gray-300 z-10">
              <TableRow className="rounded-md">
                <TableHead className="font-bold">Sl. No</TableHead>
                <TableHead className="font-bold">Item Name</TableHead>
                <TableHead className="font-bold">Item Code</TableHead>
                <TableHead className="font-bold">Brand</TableHead>
                <TableHead className="font-bold">GST</TableHead>
                <TableHead className="font-bold">HSN Code</TableHead>
                <TableHead className="font-bold">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.map((item: any) => (
                <TableRow
                  key={item.id}
                  className="odd:bg-gray-50 even:bg-gray-100"
                >
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.itemName}</TableCell>
                  <TableCell>{item.itemCode}</TableCell>
                  <TableCell>{item.brand}</TableCell>
                  <TableCell>{item.gst}</TableCell>
                  <TableCell>{item.hsnCode}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      className="cursor-pointer text-xs"
                      size="sm"
                      onClick={() => handleViewDetails(item)}
                    >
                      <Eye size={12} /> View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default ProductTable;
