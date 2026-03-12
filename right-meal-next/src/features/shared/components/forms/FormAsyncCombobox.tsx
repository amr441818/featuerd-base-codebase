// "use client"

// import { Controller, useFormContext } from "react-hook-form"
// import {
//   Field,
//   FieldError,
//   FieldLabel,
// } from "@/components/ui/field"
// import { Combobox } from "@/components/ui/combobox"

// type Props = {
//   name: string
//   label: string
//   fetcher: (query: string) => Promise<any[]>
//   getLabel: (item: any) => string
//   getValue: (item: any) => string
// }

// export function FormAsyncCombobox({
//   name,
//   label,
//   fetcher,
//   getLabel,
//   getValue,
// }: Props) {
//   const { control } = useFormContext()

//   return (
//     <Controller
//       name={name}
//       control={control}
//       render={({ field, fieldState }) => (
//         <Field data-invalid={fieldState.invalid}>
//           <FieldLabel>{label}</FieldLabel>

//           <Combobox
//             value={field.value}
//             onChange={field.onChange}
//             fetcher={fetcher}
//             getLabel={getLabel}
//             getValue={getValue}
//           />

//           {fieldState.error && (
//             <FieldError errors={[fieldState.error]} />
//           )}
//         </Field>
//       )}
//     />
//   )
// }
