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
  /* CHECK THIS CODE: Unknown !important use */
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="fsmall-normal use-transition w-full border-0 !border-b border-b-gray/20 px-0 py-sm focus:border-b-black/70 focus:ring-0 focus:ring-transparent"
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
      className="fsmall-normal use-transition h-auto min-h-5.5xl w-full border-0 !border-b border-b-gray/20 px-0 py-sm focus:border-b-black/70 focus:ring-0 focus:ring-transparent"
      readOnly={readonly}
      rows={1}
      cols={1}
    />
  );
};

const CartDetails: FC<CartDetailsProps> = (props) => {
  return (
    <form className="form flex-tstart flex-dcol w-full space-y-7xl pt-2xl">
      <div className="title w-full">
        <h3 className="f2xl-semibold">Placing an order</h3>
      </div>
      <div className="item-row flex-tspace flex-drow w-full space-x-sm">
        <div className="flex-tstart flex-dcol w-1/2 space-y-xl">
          <div className="title wp-border-b w-full">
            <h5 className="fnormal-medium w-full">Buyer data</h5>
          </div>
          <div className="form-inputs flex-dcol flex-tstart w-full space-y-xs">
            <CartDetailsInputs placeholder="Enter your full name" type="text" />
            <CartDetailsInputs
              placeholder="Enter your phone number"
              type="number"
            />
          </div>
        </div>
        <div className="flex-tstart flex-dcol w-1/2 space-y-xl">
          <div className="title wp-border-b w-full">
            <h5 className="fnormal-medium w-full">Delivery</h5>
          </div>
          <div className="form-inputs flex-dcol flex-tstart w-full space-y-xs">
            <CartDetailsInputs placeholder="Method of delivery" type="text" />
            <CartDetailsInputs placeholder="Region" type="text" />
            <CartDetailsInputs placeholder="City" type="text" />
            <CartDetailsInputs placeholder="Department" type="text" />
          </div>
        </div>
      </div>
      <div className="item-row flex-tspace flex-drow w-full space-x-sm">
        <div className="flex-dcol flex-tstart w-full space-y-xl">
          <div className="title wp-border-b w-full">
            <h5 className="fnormal-medium w-full">
              Do you want something special to you order ?
            </h5>
          </div>
          <div className="form-inputs flex-dcol flex-tstart w-full space-y-xs">
            <CartDetailsTextarea placeholder="Comment on the order" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default CartDetails;
