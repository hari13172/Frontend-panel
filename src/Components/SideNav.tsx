import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const SideNav = () => {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  const onSelect = (e) => {
    console.log(e);
  };
  return (
    <>
      <Dropdown
        options={options}
        onChange={onSelect}
        value={defaultOption}
        placeholder="Select an option"
      />
      <Dropdown
        options={options}
        onChange={onSelect}
        value={defaultOption}
        placeholder="Select an option"
      />
    </>
  );
};

export default SideNav;
