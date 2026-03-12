const CustomTextAria = (props: any) => {
  return (
    <div className={`col-span-12 ${props?.className ? props?.className : ''}`}>
      {props.label && (
        <label
          htmlFor='name'
          className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
        >
          {props?.label}{' '}
          <span className='bg-custom-gradient bg-clip-text text-[16px] font-medium text-transparent'>
            {props.labelLang}
          </span>
        </label>
      )}

      <textarea
        rows={4}
        name={props?.name}
        id='name'
        {...props.register(props.name)}
        placeholder={props?.placeholder}
        required={props.required ? props.required : false}
        className='focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-[25px] border border-gray-300 bg-white p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400'
      />
    </div>
  );
};

export default CustomTextAria;
