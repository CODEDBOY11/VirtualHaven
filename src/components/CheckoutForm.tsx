import "./CheckoutForm.css";
import { useState } from "react";
import type { ChangeEvent } from "react";
import type { Program } from "../types/program";

interface CheckoutFormProps {
  program?: Program;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export default function CheckoutForm({ program }: CheckoutFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isEmailValid = (email: string) => /\S+@\S+\.\S+/.test(email);
  const isFormValid = () =>
    formData.name.trim().length > 1 && isEmailValid(formData.email);

  const handlePayment = () => {
    if (!isFormValid()) {
      // basic UX guard
      alert("Please enter your full name and a valid email address.");
      return;
    }

    const amount = program?.price ?? 0;
    // TODO: integrate real payment link using amount & metadata
    const paystackLink = `https://paystack.com/pay/YOUR_PAYMENT_LINK`;
    window.location.href = paystackLink;
  };

  return (
    <>
      <h2 className="h5 mb-3">Checkout</h2>

      {program && (
        <div className="mb-3 p-3 border rounded">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div className="fw-medium">{program.title}</div>
              <div className="text-muted small">{program.duration}</div>
            </div>
            <div className="fw-bold">₦{program.price.toLocaleString()}</div>
          </div>
        </div>
      )}

      <div className="mb-3">
        <label className="form-label small">Full name</label>
        <input
          name="name"
          placeholder="Full name"
          className="form-control"
          onChange={handleChange}
          value={formData.name}
          aria-label="Full name"
        />
      </div>

      <div className="mb-3">
        <label className="form-label small">Email</label>
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          className="form-control"
          onChange={handleChange}
          value={formData.email}
          aria-label="Email address"
        />
        {!isEmailValid(formData.email) && formData.email.length > 0 && (
          <div className="form-text">Please enter a valid email address.</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label small">Phone (optional)</label>
        <input
          name="phone"
          type="tel"
          placeholder="+2348012345678"
          className="form-control"
          onChange={handleChange}
          value={formData.phone}
          aria-label="Phone"
        />
      </div>

      <button
        onClick={handlePayment}
        className="btn btn-primary mb-2"
        disabled={!isFormValid()}
        aria-disabled={!isFormValid()}
      >
        Proceed to Secure Payment
      </button>

      <div className="form-text">
        Secure checkout powered by Paystack. Your information is safe.
      </div>
    </>
  );
}
