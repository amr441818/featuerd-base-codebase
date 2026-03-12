'use client';

import { Controller, useFormContext } from 'react-hook-form';

import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import React from 'react';

type Option = {
    label: string;
    value: string;
    description?: string;
    icon?: React.ReactNode;
};

type FormRadioGroupProps = {
    name: string;
    label: string;
    options: Option[];
    renderOption?: (option: Option, checked?: boolean, onChange?: (val: string) => void) => React.ReactNode;
    renderTrigger?: (value: string | undefined, onChange?: (val: string) => void) => React.ReactNode;
    className?: string;
};

export function FormRadioGroup({
    name,
    label,
    options,
    renderOption,
    renderTrigger,
    className,
}: FormRadioGroupProps) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    {label && <FieldLabel>{label}</FieldLabel>}

                    {renderTrigger ? (
                        renderTrigger(field.value, field.onChange)
                    ) : (
                        <RadioGroup
                            value={field.value}
                            onValueChange={field.onChange}
                            className={cn("gap-2 flex flex-col", className)}
                        >
                            {options.map((opt) => {
                                const checked = field.value === opt.value;

                                return (
                                    <React.Fragment key={opt.value}>
                                        {renderOption ? (
                                            renderOption(opt, checked, field.onChange)
                                        ) : (
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value={opt.value} id={`radio-${name}-${opt.value}`} />
                                                <label
                                                    htmlFor={`radio-${name}-${opt.value}`}
                                                    className="font-medium cursor-pointer"
                                                >
                                                    {opt.label}
                                                </label>
                                            </div>
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </RadioGroup>
                    )}

                    {fieldState.error && <FieldError errors={[fieldState.error]} />}
                </Field>
            )}
        />
    );
}