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
        className='block w-full resize-none rounded-[12px] border border-[#000000]/[15%] bg-white p-3 ps-[15px] text-xs text-gray-900 outline-none placeholder:text-[10px] placeholder:font-light placeholder:text-muted focus:border-primary focus:ring-primary dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary dark:focus:ring-primary md:rounded-[15px] md:p-4 md:ps-[25px] md:text-sm md:placeholder:text-xs'
      />
    </div>
  );
};

export default CustomTextAria;
