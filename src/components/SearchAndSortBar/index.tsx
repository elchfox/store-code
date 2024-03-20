import { SearchOutlined } from "@ant-design/icons";
import { Button, Flex, Input, Select } from "antd";
import { sortingOptions } from "../../utils/sortingOptions";

type ToolBarProps = {
  onSort?: (value: string) => void;
  onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCreate?: () => void;
};
const ToolBar: React.FC<ToolBarProps> = ({ onCreate, onSort, onSearch }) => {
  return (
    <Flex gap={"middle"} className="tool-bar1" align="start">
      <Button type={"primary"} onClick={onCreate}>
        Add
      </Button>
      <Input
        style={{ maxWidth: "16rem" }}
        addonBefore={<SearchOutlined />}
        placeholder="Search products"
        onChange={onSearch}
      />
      <Select
        allowClear
        placeholder={"Sort By"}
        style={{ minWidth: "8rem" }}
        onChange={onSort}
        options={sortingOptions}
      />
    </Flex>
  );
};

export default ToolBar;
