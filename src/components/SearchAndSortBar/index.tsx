import { SearchOutlined } from "@ant-design/icons";
import { Button, Flex, Input, Select } from "antd";
import { sortOptions } from "../../utils/sortOptions";

type ToolBarProps = {
  onSort?: (value: string) => void;
  onSearch?: (event:React.ChangeEvent<HTMLInputElement>) => void;
  onCreate?: () => void;
};
const ToolBar: React.FC<ToolBarProps> = ({ onCreate, onSort, onSearch }) => {
  return (
    <div className="tool-bar">
      <Flex gap="small">
        <Button type={"primary"} onClick={onCreate}>
          Add
        </Button>
        <Input
          addonBefore={<SearchOutlined />}
          placeholder="Search products"
          onChange={onSearch}
        />
        <Select
          placeholder={"Sort By"}
          style={{ width: 220 }}
          onChange={onSort}
          options={sortOptions}
        />
      </Flex>
    </div>
  );
};

export default ToolBar;
