import { Mail } from "lucide-react";

type EmailInputProps = {
  id?: string;
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function EmailInput({
  id,
  label,
  placeholder,
  value,
  onChange,
}: EmailInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-gray-600">
        {label}
      </label>
      <div className="bg-white border border-gray-200 rounded-md flex">
        <input
          id={id}
          type="email"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="border-none outline-none bg-transparent w-full px-4 py-2 sm:py-3 rounded-md text-gray-500"
        />
        <button type="button" className="px-2 bg-white border-none rounded-md">
          <Mail className="text-gray-400" />
        </button>
      </div>
    </div>
  );
}
