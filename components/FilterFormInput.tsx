import { cn, filterFormSchema } from "@/lib/utils";
import React from "react";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { FormField, FormControl, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@/components/ui/calendar";

interface FilterFormInputProps {
  name: FieldPath<z.infer<typeof filterFormSchema>>;
  placeholder: string;
  label: string;
  control: Control<z.infer<typeof filterFormSchema>>;
  type?: "text" | "select" | "date";
  select?: string[];
}

const FilterFormInput = ({
  control,
  label,
  name,
  placeholder,
  type = "text",
  select = [],
}: FilterFormInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-Item pb-5">
          <FormLabel className="text-primary-100 capitalize mb-1">
            {label}
          </FormLabel>
          <div className="flex flex-col w-full">
            {type === "text" ? (
              <FormControl>
                <Input
                  placeholder={placeholder}
                  className="input-class placeholder:pl-2 placeholder:text-12"
                  type={"text"}
                  {...field}
                />
              </FormControl>
            ) : type === "select" ? (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="text-12 pl-5">
                  <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  {select.map((el) => (
                    <SelectItem value={el} key={el}>
                      {el}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : type === "date" ? (
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-5 text-12 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>{placeholder}</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value as any}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    />
  );
};

export default FilterFormInput;
