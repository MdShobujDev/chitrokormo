import { Radio } from "antd";

const RadioBtn = ({ checke = false }: any) => {
  return (
    <div>
      <Radio checked={checke}></Radio>
    </div>
  );
};

export default RadioBtn;
