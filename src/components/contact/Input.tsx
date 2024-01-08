import React from "react";

type InputProps = {
  label: string;
  type: string;
  placeholder: string;
  id: string;
};

function Input({ label, type, id, placeholder }: InputProps) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="text-xs">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        className="!bg-primary p-2 border border-[rgba(255,255,255,0.20)] w-full outline-none focus-visible:bg-primary-dark2"
      />
    </div>
  );
}

export default Input;
