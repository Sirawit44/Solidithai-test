
interface SelectProps {
  id: string;
  options: { value: string; label: string }[];
  register: any;
  validation?: object;
  label?: string;
}

export default function Select({ id, options, register, validation, label }:SelectProps) {
  return (
    <div>
      <select id={id} className="custom-select" {...register(id, validation)}>
        <option value="">Select your option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

