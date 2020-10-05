import React, { useState } from "react";
import { Menu, Segment } from "semantic-ui-react";
import Portfolio from "./Portfolio"

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("portfolio", "about");
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    
  };
  return (
    <Segment inverted>
      <Menu  inverted pointing secondary>
        <Menu.Item
          name="portfolio"
          active={activeItem === "portfolio"}
          onClick={handleItemClick}
          data-cy="portfolio"
        />
       
          <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={handleItemClick}
          data-cy="about"
        />
      </Menu>
    </Segment>
  );
};

export default Navbar;
