type NameInputProps = {
  id?: string;
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function NameInput({
  id,
  label,
  placeholder,
  value,
  onChange,
}: NameInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-gray-600">
        {label}
      </label>
      <div className="border border-gray-200 rounded-md">
        <input
          id={id}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="border-none outline-none bg-white w-full px-4 py-2 md:py-3 rounded-md text-gray-500"
        />
      </div>
    </div>
  );
}
