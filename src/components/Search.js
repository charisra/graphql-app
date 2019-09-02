import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
  }

  handleChange = e => {
    this.setState({ id: e.target.value });
  };

  render() {
    return (
      <div className="search-bar">
        <TextField
          id="standard-name"
          label="Country Code"
          type="search"
          className="textField"
          onChange={this.handleChange}
          margin="normal"
        />
        <Link to={`/countries/${this.state.id}`}>
          <IconButton
            aria-label="search"
            style={{ marginTop: 35 }}
            size="small"
          >
            <SearchIcon />
          </IconButton>
        </Link>
      </div>
    );
  }
}

export default Search;
