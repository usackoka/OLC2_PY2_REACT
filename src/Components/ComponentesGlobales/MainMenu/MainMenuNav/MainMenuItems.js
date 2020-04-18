import React from "react";
import MainMenuNav from "./MainMenuNav";
//import { useLocation } from "react-router-dom";
import { connect } from "react-redux";

const MainMenuItems = props => {
  //const location = useLocation();

 
  if (props.menu !== undefined) {
    var menu = props.menu[0];
  } else {
    menu = JSON.parse(localStorage.getItem("menu"));
  }
  //console.log(menu);
  //if (location.state !== undefined) {
  //  var menu = location.state.data[0];

  //}

  //console.log(props.menu);
  /* the name item cannot only be the element id of the array
  --- I need to use the name prop to access switching styles */
  var items = [];
  for (let element in menu) {
    let name = menu[element].name
    let label = menu[element].label;
    let href = menu[element].href;
    let icon = menu[element].icon;
    items.push({
      name: String(name),
      label: String(label),
      href: String(href),
      icon: String(icon)
    });
  }
  return <MainMenuNav items={items} />;
};

//export default MainMenuItems;
const mapStateToProps = state => {
  return {
    menu: state.menu
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainMenuItems);
