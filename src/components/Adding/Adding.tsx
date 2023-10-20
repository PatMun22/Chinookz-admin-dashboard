import "./adding.scss";
import { AiOutlineClose } from "react-icons/ai";
import "../../styles/variabes.scss";
import { GridColDef } from "@mui/x-data-grid";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: any;
};

function Adding(props: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //add item
    //axios.post(`/api/${slug}s`);
  };

  return (
    <div className="adding">
      <div className="addingContainer">
        <AiOutlineClose
          className="closeIcon"
          onClick={() => props.setOpen(false)}
        />
        <h1>Add a new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "avatar")
            .map((column) => (
              <div className="item">
                <label htmlFor={column.field}>{column.headerName}:</label>
                <input
                  type={column.type}
                  id={column.field}
                  placeholder={column.headerName}
                />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Adding;
