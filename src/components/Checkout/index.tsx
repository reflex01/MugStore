"use client";
import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { selectCartItems, selectTotalPrice, updateCartItemQuantity } from "@/redux/features/cart-slice";
import Breadcrumb from "../Common/Breadcrumb";
import PaymentMethod from "./PaymentMethod";

const Checkout = () => {
  const cartItems = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectTotalPrice);
  const dispatch = useAppDispatch();
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const [email, setEmail] = useState("");

  const handleIncreaseQuantity = (itemId: number, currentQuantity: number) => {
    dispatch(updateCartItemQuantity({ id: itemId, quantity: currentQuantity + 1 }));
  };

  const handleDecreaseQuantity = (itemId: number, currentQuantity: number) => {
    if (currentQuantity > 1) {
      dispatch(updateCartItemQuantity({ id: itemId, quantity: currentQuantity - 1 }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      alert("Please enter your email address");
      return;
    }

    if (paymentMethod === "stripe") {
      await handleStripeCheckout();
    } else {
      // Handle other payment methods (PayPal, etc.)
      console.log("Processing checkout with:", paymentMethod);
      // Here you would typically:
      // 1. Process the payment
      // 2. Send digital product to email
      // 3. Clear the cart
      // 4. Redirect to success page
    }
  };

  const handleStripeCheckout = async () => {
    try {
      const checkoutData = {
        product: "product",
        price: totalPrice, // Send price in dollars, server will convert to cents
        order_id: `order_${Date.now()}`,
        currency: "USD"
      };

      console.log('Sending checkout data:', checkoutData);

      const response = await fetch('/api/stripe-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(checkoutData),
      });

      if (!response.ok) {
        throw new Error(`Failed to create checkout session: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.url) {
        window.location.href = result.url;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to process payment. Please try again.');
    }
  };

  return (
    <>
      <Breadcrumb title={"Checkout"} pages={["checkout"]} />
      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-11">
              {/* <!-- checkout left --> */}
              <div className="lg:max-w-[670px] w-full">
                {/* <!-- email input --> */}
                <div className="bg-white shadow-1 rounded-[10px] p-4 sm:p-8.5">
                  <h2 className="font-medium text-dark text-xl sm:text-2xl mb-5.5">
                    Delivery Email
                  </h2>
                  <div className="mb-5">
                    <label htmlFor="email" className="block mb-2.5">
                      Email Address <span className="text-red">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    />
                  </div>
                </div>
              </div>

              {/* // <!-- checkout right --> */}
              <div className="max-w-[455px] w-full">
                {/* <!-- order list box --> */}
                <div className="bg-white shadow-1 rounded-[10px]">
                  <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
                    <h3 className="font-medium text-xl text-dark">
                      Your Order
                    </h3>
                  </div>

                  <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
                    {/* <!-- title --> */}
                    <div className="flex items-center justify-between py-5 border-b border-gray-3">
                      <div>
                        <h4 className="font-medium text-dark">Product</h4>
                      </div>
                      <div>
                        <h4 className="font-medium text-dark text-right">
                          Subtotal
                        </h4>
                      </div>
                    </div>

                    {/* <!-- product items --> */}
                    {cartItems.map((item) => (
                      <div key={item.id} className="py-5 border-b border-gray-3">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <p className="text-dark font-medium">{item.title}</p>
                            <p className="text-sm text-gray-500">${item.discountedPrice} each</p>
                          </div>
                          <div>
                            <p className="text-dark text-right font-medium">${(item.discountedPrice * item.quantity).toFixed(2)}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center rounded-md border border-gray-3 w-max">
                            <button
                              type="button"
                              onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
                              aria-label="decrease quantity"
                              className="flex items-center justify-center w-8 h-8 ease-out duration-200 hover:text-blue"
                            >
                              <svg
                                className="fill-current"
                                width="16"
                                height="16"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M3.33301 10.0001C3.33301 9.53984 3.7061 9.16675 4.16634 9.16675H15.833C16.2932 9.16675 16.6663 9.53984 16.6663 10.0001C16.6663 10.4603 16.2932 10.8334 15.833 10.8334H4.16634C3.7061 10.8334 3.33301 10.4603 3.33301 10.0001Z"
                                  fill=""
                                />
                              </svg>
                            </button>
                            <span className="flex items-center justify-center w-12 h-8 border-x border-gray-4 text-sm">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleIncreaseQuantity(item.id, item.quantity)}
                              aria-label="increase quantity"
                              className="flex items-center justify-center w-8 h-8 ease-out duration-200 hover:text-blue"
                            >
                              <svg
                                className="fill-current"
                                width="16"
                                height="16"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M3.33301 10C3.33301 9.5398 3.7061 9.16671 4.16634 9.16671H15.833C16.2932 9.16671 16.6663 9.5398 16.6663 10C16.6663 10.4603 16.2932 10.8334 15.833 10.8334H4.16634C3.7061 10.8334 3.33301 10.4603 3.33301 10Z"
                                  fill=""
                                />
                                <path
                                  d="M9.99967 16.6667C9.53944 16.6667 9.16634 16.2936 9.16634 15.8334L9.16634 4.16671C9.16634 3.70647 9.53944 3.33337 9.99967 3.33337C10.4599 3.33337 10.833 3.70647 10.833 4.16671L10.833 15.8334C10.833 16.2936 10.4599 16.6667 9.99967 16.6667Z"
                                  fill=""
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* <!-- total --> */}
                    <div className="flex items-center justify-between pt-5">
                      <div>
                        <p className="font-medium text-lg text-dark">Total</p>
                      </div>
                      <div>
                        <p className="font-medium text-lg text-dark text-right">
                          ${totalPrice.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- payment box --> */}
                <PaymentMethod onMethodChange={setPaymentMethod} />

                {/* <!-- checkout button --> */}
                <div className="mt-7.5">
                  <button
                    type="submit"
                    className="w-full rounded-md py-3 px-6 text-white font-medium bg-blue hover:bg-blue-dark transition-colors duration-200"
                  >
                    Complete Order
                  </button>
                </div>

              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Checkout;
