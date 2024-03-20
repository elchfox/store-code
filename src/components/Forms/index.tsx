import React, { useEffect, useState } from "react";
import { Button, Form, FormInstance } from "antd";

interface SubmitButtonProps {
  form: FormInstance;
}
export const SubmitButton: React.FC<
  React.PropsWithChildren<SubmitButtonProps>
> = ({ form, children }) => {
  const [submittable, setSubmittable] = useState<boolean>(false);

  // Watch all values
  const values = Form.useWatch([], form);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable} >
      {children}
    </Button>
  );
};
