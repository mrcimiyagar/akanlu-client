import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select } from "@material-ui/core";

export default function DropDown(props) {
  const [selectedItem, setSelectedItem] = React.useState(
    props.defaultSelection
  );

  const handleChange = (event) => {
    setSelectedItem(event.target.value);
    if (props.onItemSelected !== undefined) {
      props.onItemSelected(event.target.value);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        zIndex: 99999,
        width: props.width,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
        marginTop: props.marginTop,
      }}
    >
      <FormControl
        variant="filled"
        style={{ width: "100%" }}
        disabled={props.disabled}
      >
        <InputLabel id={"demo-simple-select-filled-label" + props.compId}>
          {props.label}
        </InputLabel>
        <Select
          disabled={props.disabled}
          variant={"filled"}
          labelId={"demo-simple-select-filled-label" + props.compId}
          id={"demo-simple-select-filled" + props.compId}
          value={selectedItem}
          onChange={handleChange}
          style={{ zIndex: 99999 }}
        >
          <MenuItem value={0} style={{ zIndex: 99999 }}>
            <em>ٔNothing</em>
          </MenuItem>
          {props.items.map((item) => {
            return (
              <MenuItem style={{ zIndex: 99999 }} value={item.id}>
                {item.title}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
