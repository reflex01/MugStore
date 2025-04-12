import React from "react";
import Image from "next/image";

interface PaymentMethodProps {
  onMethodChange: (method: string) => void;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ onMethodChange }) => {
  const [payment, setPayment] = React.useState("paypal");

  const handlePaymentChange = (method: string) => {
    setPayment(method);
    onMethodChange(method);
  };

  return (
    <div className="bg-white shadow-1 rounded-[10px] mt-7.5">
      <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
        <h3 className="font-medium text-xl text-dark">Payment Method</h3>
      </div>

      <div className="p-4 sm:p-8.5">
        <div className="flex flex-col gap-3">
          <label
            htmlFor="paypal"
            className="flex cursor-pointer select-none items-center gap-4"
          >
            <div className="relative">
              <input
                type="checkbox"
                name="paypal"
                id="paypal"
                className="sr-only"
                onChange={() => handlePaymentChange("paypal")}
                checked={payment === "paypal"}
              />
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-full ${
                  payment === "paypal"
                    ? "border-4 border-blue"
                    : "border border-gray-4"
                }`}
              ></div>
            </div>
            <div
              className={`rounded-md border-[0.5px] py-3.5 px-5 ease-out duration-200 hover:bg-gray-2 hover:border-transparent hover:shadow-none min-w-[240px] ${
                payment === "paypal"
                  ? "border-transparent bg-gray-2"
                  : " border-gray-4 shadow-1"
              }`}
            >
              <div className="flex items-center">
                <div className="pr-2.5">
                  <Image src="/images/checkout/paypal.svg" alt="paypal" width={75} height={20}/>
                </div>

                <div className="border-l border-gray-4 pl-2.5">
                  <p>PayPal</p>
                </div>
              </div>
            </div>
          </label>

          <label
            htmlFor="stripe"
            className="flex cursor-pointer select-none items-center gap-4"
          >
            <div className="relative">
              <input
                type="checkbox"
                name="stripe"
                id="stripe"
                className="sr-only"
                onChange={() => handlePaymentChange("stripe")}
                checked={payment === "stripe"}
              />
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-full ${
                  payment === "stripe"
                    ? "border-4 border-blue"
                    : "border border-gray-4"
                }`}
              ></div>
            </div>

            <div
              className={`rounded-md border-[0.5px] py-3.5 px-5 ease-out duration-200 hover:bg-gray-2 hover:border-transparent hover:shadow-none min-w-[240px] ${
                payment === "stripe"
                  ? "border-transparent bg-gray-2"
                  : " border-gray-4 shadow-1"
              }`}
            >
              <div className="flex items-center">
                <div className="pr-2.5">
                  <Image src="/images/checkout/stripe.svg" alt="stripe" width={75} height={20}/>
                </div>

                <div className="border-l border-gray-4 pl-2.5">
                  <p>Credit/Debit Card</p>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
