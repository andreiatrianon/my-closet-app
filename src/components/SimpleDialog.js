import Checkbox from "@material-ui/core/Checkbox";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddIcon from "@material-ui/icons/Add";
import PropTypes from "prop-types";
import React, { useState } from "react";

const categories = [
  "T-SHIRTS",
  "PANTS",
  "SHORTS",
  "JACKETS",
  "BLAZERS",
  "DRESSES",
  "SHOES",
  "BAGS",
];

const SimpleDialog = (props) => {
  const { onClose, selectedValue, open, photoImage } = props;
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <img
        src={photoImage}
        alt="increase priority"
        style={{ height: "20rem" }}
      />
      <DialogTitle id="simple-dialog-title">Select its categories</DialogTitle>
      <List>
        {categories.map((category) => {
          const labelId = `checkbox-list-label-${category}`;
          return (
            <ListItem
              key={category}
              dense
              button
              onClick={handleToggle(category)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(category) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={category.toLowerCase()} />
            </ListItem>
          );
        })}
        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick("addAnotherCategory")}
        >
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="add another category" />
        </ListItem>
      </List>
    </Dialog>
  );
};

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default SimpleDialog;
