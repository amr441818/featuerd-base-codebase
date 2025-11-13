import { useTranslations } from 'next-intl';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type Props<TFieldValues extends FieldValues = FieldValues> = {
  setIsclicked?: (value: boolean) => void;
  isClicked?: boolean;
  className?: string;
  lang?: 'ar' | 'en';
  collabs?: boolean;
  placeholder?: string;
  register: UseFormRegister<TFieldValues>;
  name?: Path<TFieldValues>;
};

const Customsearch = <TFieldValues extends FieldValues = FieldValues>({
  setIsclicked,
  register,
  name = 'keyword' as Path<TFieldValues>,
  isClicked,
  lang,
  collabs,
  placeholder,
  className,
}: Props<TFieldValues>) => {
  const t = useTranslations('home.hero');

  return (
    <div className='relative z-[10] w-full'>
      <label htmlFor='Search' className='sr-only'>
        Search
      </label>

      <input
        {...register(name)}
        type='search'
        id='Search'
        placeholder={placeholder ? placeholder : t('search')}
        className={`h-full w-full rounded-[10px] border-[1px] border-solid border-[#EBEBEB] px-[12px] py-[12px] focus:outline-none sm:text-sm md:bg-white md:px-[2px] md:ps-[30px] ${
          className || ''
        }`}
      />

      <span className='absolute inset-y-0 start-0 grid w-10 place-content-center'>
        <button type='button' className='text-gray-600 hover:text-gray-700'>
          <span className='sr-only'>Search</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='hidden h-6 w-6 text-[#EBEBEB] md:block'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        </button>
      </span>

      {collabs && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20px'
          height='20px'
          viewBox='0 0 24 24'
          className={`absolute top-[50%] hidden translate-y-[-50%] transform cursor-pointer md:block ${
            lang == 'ar' ? 'left-4' : 'right-4'
          }`}
          onClick={() => setIsclicked?.(!isClicked)}
        >
          <path
            fill='#335F8C'
            d='M9.043 5.793L2.836 12l6.207 6.207l1.414-1.414L5.664 12l4.793-4.793zm5.914 12.414L21.164 12l-6.207-6.207l-1.414 1.414L18.336 12l-4.793 4.793z'
          />
        </svg>
      )}
    </div>
  );
};

export default Customsearch;
