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
      className="fmedium-normal use-transition wp-border-b-gray20 w-full border-0 px-0 py-sm focus:border-b-black/70 focus:ring-0 focus:ring-transparent tablet-portrait:text-medium"
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
      className="fmedium-normal use-transition wp-border-b-gray20 h-auto min-h-5.5xl w-full border-0 px-0 py-sm focus:border-b-black/70 focus:ring-0 focus:ring-transparent tablet-portrait:text-medium"
      readOnly={readonly}
      rows={1}
      cols={1}
    />
  );
};

const CartDetails: FC<CartDetailsProps> = (props) => {
  const inputDetails = ["Method of delivery", "Region", "City", "Department"];

  const renderInputDetails = () => {
    return inputDetails.map((placeholder, index) => (
      <CartDetailsInputs key={index} placeholder={placeholder} type="text" />
    ));
  };
  return (
    <form className="form flex-tstart flex-dcol w-full space-y-7xl pt-2xl">
      <div className="title w-full">
        <h3 className="f2xl-semibold">Placing an order</h3>
      </div>
      <div className="item-row flex-tspace flex-drow phone-portrait:flex-dcol w-full space-x-sm phone-portrait:space-x-0 phone-portrait:space-y-3xl">
        <div className="flex-tstart flex-dcol w-1/2 space-y-xl phone-portrait:w-full">
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
        <div className="flex-tstart flex-dcol w-1/2 space-y-xl phone-portrait:w-full">
          <div className="title wp-border-b w-full">
            <h5 className="fnormal-medium w-full">Delivery</h5>
          </div>
          <div className="form-inputs flex-dcol flex-tstart w-full space-y-xs">
            {renderInputDetails()}
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
