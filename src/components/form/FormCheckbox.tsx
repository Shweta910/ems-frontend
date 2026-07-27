import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface FormCheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label: string;
}

export default function FormCheckbox({
  checked,
  onCheckedChange,
  label,
}: FormCheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        checked={checked}
        onCheckedChange={(value) =>
          onCheckedChange(Boolean(value))
        }
      />

      <Label>{label}</Label>
    </div>
  );
}