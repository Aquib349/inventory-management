interface ProductMasterProps {
  tableContainerRef: any;
  paginatedData: any;
}

const InventoryTable = ({
  tableContainerRef,
  paginatedData,
}: ProductMasterProps) => {
  return (
    <div className="grid grid-cols-[auto_1fr]">
      <div className="overflow-hidden">
        <div className="w-full overflow-x-auto">
          <div
            ref={tableContainerRef}
            className="max-h-[calc(100vh-150px)] overflow-y-auto rounded-md text-sm"
          >
            <table className="w-full border-collapse">
              <thead className="sticky top-0 bg-[#0e3473] text-white shadow-md z-10">
                <tr>
                  <th className="py-2 border-r text-start font-medium px-4 min-w-[100px]">
                    Sl. No
                  </th>
                  <th className="py-2 border-r text-start font-medium px-4 min-w-[200px]">
                    Inventory Name
                  </th>
                  <th className="py-2 border-r text-start font-medium px-4 min-w-[150px]">
                    Inventory Code
                  </th>
                  <th className="py-2 border-r text-start font-medium px-4 min-w-[150px]">
                    Brand Name
                  </th>
                  <th className="py-2 border-r text-start font-medium px-4 min-w-[200px]">
                    Product Name
                  </th>
                  <th className="py-2 border-r text-start font-medium px-4 min-w-[250px]">
                    Item Name
                  </th>
                  <th className="py-2 border-r text-start font-medium px-4 min-w-[250px]">
                    Item Code
                  </th>
                  <th className="py-2 border-r text-start font-medium px-4 min-w-[120px]">
                    Good Qty
                  </th>
                  <th className="py-2 border-r text-start font-medium px-4 min-w-[150px]">
                    Expiry Qty
                  </th>
                  <th className="py-2 border-r text-start font-medium px-4 min-w-[150px]">
                    Damage Qty
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {paginatedData.map((item: any, index: any) => (
                  <tr key={index} className="border-b">
                    <td className="py-1.5 px-4 text-sm border-r">
                      {index + 1}
                    </td>
                    <td className="py-1.5 px-4 text-sm border-r">
                      {item.inventoryName}
                    </td>
                    <td className="py-1.5 px-4 text-sm border-r">
                      {item.inventoryCode}
                    </td>
                    <td className="py-1.5 px-4 text-sm border-r">
                      {item.brandName}
                    </td>
                    <td className="py-1.5 px-4 text-sm border-r">
                      {item.productName}
                    </td>
                    <td className="py-1.5 px-4 text-sm border-r">
                      {item.itemName}
                    </td>
                    <td className="py-1.5 px-4 text-sm border-r">
                      {item.itemCode}
                    </td>
                    <td className="py-1.5 px-4 text-sm border-r">
                      {item.goodQty}
                    </td>
                    <td className="py-1.5 px-4 text-sm border-r">
                      {item.expiryQty}
                    </td>
                    <td className="py-1.5 px-4 text-sm border-r">
                      {item.damageQty}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryTable;
