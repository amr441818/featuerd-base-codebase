"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { Controller } from "react-hook-form"
type Props = {
    text:string
    textColor?:string
    textSize?:string,
    control:any
    name:string
}
function CustomCheckBox({text,textColor,textSize,control,name}:Props) {
    return (
      <Controller  name={name} control={control}  render={({ field }) => (

        <div className="flex items-center space-x-2 gap-2">
        <Checkbox
        // name="agree"
        onCheckedChange={field.onChange} value={field.value}
          id="terms"
          className="border-gray-400 rounded-md h-4 w-4 data-[state=checked]:bg-[#5BB98D] data-[state=checked]:border-[#5BB98D]"
        />
        <label
          htmlFor="terms"
          className={ ` leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${textColor?textColor:""}  ${textSize?textSize:" text-sm font-medium"}`}
        >
          {text}
        </label>
      </div>
      )}/>
      )
}

export default CustomCheckBox