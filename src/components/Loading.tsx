import { Spin } from "antd";

const Loading: React.FC = () => {
  return (
    <div className="loading-box centering">
      <Spin size={"large"}/>
    </div>
  );
};

export default Loading;
