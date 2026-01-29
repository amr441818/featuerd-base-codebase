import { useFormContext } from 'react-hook-form';

type Props = {
  children: (loading: boolean) => React.ReactNode;
};

export function FormSubmit({ children }: Props) {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return <>{children(isSubmitting)}</>;
}
