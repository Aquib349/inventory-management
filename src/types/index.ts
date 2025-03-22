export type Products = {
  brand: string;
  categoryName: string;
  categoryType: string;
  subItemName: string;
  code: string;
  product: string;
  netWeight: string;
  hsn: string;
  purchasePrice: string;
  sellingPrice: string;
  mrp: string;
  gst: string;
};

export type Inventory = {
  inventoryName: string;
  inventoryCode: string;
  brandName: string;
  productName: string;
  itemName: string;
  itemCode: string;
  goodQty: string;
  expiryQty: string;
  damageQty: string;
};
