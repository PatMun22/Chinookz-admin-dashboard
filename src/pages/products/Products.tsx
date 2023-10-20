import "./products.scss";
import { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";
import GridTable from "../../components/gridTable/GridTable";
import Adding from "../../components/Adding/Adding";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 80,
    renderCell: (params) => {
      return <img src={params.row.img} alt="" />;
    },
  },
  {
    field: "title",
    headerName: "Title",
    width: 150,
    type: "string",
  },
  {
    field: "color",
    headerName: "color",
    width: 100,
    type: "string",
  },
  {
    field: "price",
    headerName: "Price",
    width: 120,
    type: "string",
  },
  {
    field: "producer",
    headerName: "Producer",
    width: 120,
    type: "string",
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    editable: true,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 80,
    editable: true,
    type: "boolean",
  },
];

function Products() {
  const [open, setOpen] = useState(false);

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Product</button>
      </div>
      <GridTable slug="products" columns={columns} rows={products} />
      {open && <Adding slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
}

export default Products;
