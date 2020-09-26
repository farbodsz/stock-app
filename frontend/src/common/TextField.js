import React from "react";
import { default as MuiTextField } from "@material-ui/core/TextField";

/**
 * A styled TextField component.
 *
 * For convenience, this component can be used to keep styling across the
 * website consistent.
 *
 * It takes the following props:
 *  - `label`, string
 *  - `onChange`, function
 *  - `type`
 */
export default function TextField(props) {
  return (
    <MuiTextField
      className={props.className}
      variant="outlined"
      label={props.label}
      onChange={props.onChange}
      required
      type={props.type}
      margin="dense"
    />
  );
}
