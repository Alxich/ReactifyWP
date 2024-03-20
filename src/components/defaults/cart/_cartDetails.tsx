import { FC } from "react";

interface CartDetailsProps {}

interface CartDetailsInputsProps {
  placeholder: string;
  type:
    | "text"
    | "number"
    | "email"
    | "password"
    | "checkbox"
    | "radio"
    | "date"
    | "time"
    | "file"
    | "color"
    | "range"
    | "search"
    | "tel"
    | "url";
  readonly?: boolean;
}

const CartDetailsInputs: FC<CartDetailsInputsProps> = ({
  placeholder,
  type,
  readonly,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="font-regular use-transition w-full border-0 !border-b border-b-gray/20 px-0 py-sm text-sm text-black focus:border-b-black/70 focus:ring-0 focus:ring-transparent"
      readOnly={readonly}
    />
  );
};

interface CartDetailsTextareaProps {
  placeholder: string;
  readonly?: boolean;
}

const CartDetailsTextarea: FC<CartDetailsTextareaProps> = ({
  placeholder,
  readonly,
}) => {
  return (
    <textarea
      placeholder={placeholder}
      className="font-regular use-transition h-auto min-h-5.5xl w-full border-0 !border-b border-b-gray/20 px-0 py-sm text-sm text-black focus:border-b-black/70 focus:ring-0 focus:ring-transparent"
      readOnly={readonly}
      rows={1}
      cols={1}
    />
  );
};

const CartDetails: FC<CartDetailsProps> = (props) => {
  return (
    <form className="form w-full flex-col items-start justify-start space-y-7xl pt-2xl">
      <div className="title w-full">
        <h3 className="text-2xl font-semibold text-black">Placing an order</h3>
      </div>
      <div className="item-row flex w-full flex-row items-start justify-between space-x-sm">
        <div className="flex w-1/2 flex-col items-start justify-start space-y-xl">
          <div className="title w-full border-b border-b-black">
            <h5 className="w-full text-normal font-medium text-black">
              Buyer data
            </h5>
          </div>
          <div className="form-inputs flex w-full flex-col items-start justify-start space-y-xs">
            <CartDetailsInputs placeholder="Enter your full name" type="text" />
            <CartDetailsInputs
              placeholder="Enter your phone number"
              type="number"
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-col items-start justify-start space-y-xl">
          <div className="title w-full border-b border-b-black">
            <h5 className="w-full text-normal font-medium text-black">
              Delivery
            </h5>
          </div>
          <div className="form-inputs flex w-full flex-col items-start justify-start space-y-xs">
            <CartDetailsInputs placeholder="Method of delivery" type="text" />
            <CartDetailsInputs placeholder="Region" type="text" />
            <CartDetailsInputs placeholder="City" type="text" />
            <CartDetailsInputs placeholder="Department" type="text" />
          </div>
        </div>
      </div>
      <div className="item-row flex w-full flex-row items-start justify-between space-x-sm">
        <div className="flex w-full flex-col items-start justify-start space-y-xl">
          <div className="title w-full border-b border-b-black">
            <h5 className="w-full text-normal font-medium text-black">
              Do you want something special to you order ?
            </h5>
          </div>
          <div className="form-inputs flex w-full flex-col items-start justify-start space-y-xs">
            <CartDetailsTextarea placeholder="Comment on the order" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default CartDetails;
