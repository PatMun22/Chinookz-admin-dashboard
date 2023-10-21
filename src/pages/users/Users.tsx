import { GridColDef } from "@mui/x-data-grid";
import GridTable from "../../components/gridTable/GridTable";
import "./users.scss";
import { rows } from "../../data";
import Adding from "../../components/Adding/Adding";
import { useState } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 80,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    headerName: "First Name",
    width: 100,
    type: "string",
  },
  {
    field: "lastName",
    headerName: "Last Name",
    width: 100,
    type: "string",
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
    type: "string",
  },
  {
    field: "phone",
    headerName: "Phone",
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
    field: "verified",
    headerName: "Verified",
    width: 80,
    editable: true,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User </button>
      </div>
      <GridTable slug="users" columns={columns} rows={rows} />
      {open && <Adding slug="User" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
