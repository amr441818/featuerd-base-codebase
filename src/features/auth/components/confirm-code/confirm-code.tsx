'use client';

import { useEffect, useState } from 'react';

import { Container } from '@/features/shared';
import CustomCardAuth from '@/features/shared/components/CustomCardAuth';
import CustomButton from '@/features/shared/components/formInputs/CustomButton';

import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

import OtpIcon from '../../../../../public/assets/icons/OtpIcon';

export const FormConfirmCode = () => {
  const [otp, setOtp] = useState('');
  const [time, setTime] = useState(60);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [time]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleResendCode = () => {
    if (time === 0) {
      setTime(60);
      setOtp('');
      setError(null);
      console.log('resend');
    }
  };

  const handleSubmit = () => {
    // TODO: Add your actual verification logic here
    // This is a simulation of an error if the code is incorrect
    if (otp !== '123456') {
      setError('الكود الذي ادخلته غير صحيح');
    } else {
      setError(null);
      console.log('Success');
    }
  };

  return (
    <>
      <Container>
        <CustomCardAuth
          title='كود التحقق'
          desc='قم بإدخال كود التحقق الذى تم إرسالة إليك'
          icon={<OtpIcon className='h-[45px] w-[45px] lg:h-[60px] lg:w-[60px]' />}
        >
          <div
            dir='ltr'
            className='lg:animate-duration-[2000ms] lg:animate-delay-400 flex w-full flex-col items-center justify-center lg:animate-fade-left'
          >
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={(val) => {
                setOtp(val);
                if (error) setError(null);
              }}
              autoFocus
              pattern='^[0-9]+$'
              className='!mx-auto'
            >
              <InputOTPGroup className='gap-1'>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            {error && <p className='mt-2 text-sm text-red-500'>{error}</p>}
          </div>
          <CustomButton
            className='lg:animate-duration-[1000ms] lg:animate-delay-500 mt-[21px] w-full lg:animate-fade-right'
            disabled={otp.length < 6}
            onClick={handleSubmit}
          >
            تحقق
          </CustomButton>
          <div className='mt-5 flex flex-col items-center justify-center gap-2'>
            <p className='text-sm font-normal text-secondary'>{formatTime(time)}</p>
            <div className='flex items-center justify-center gap-2'>
              <p className='text-xs font-normal text-muted'>لم تستلم الكود بعد ؟</p>
              <button
                onClick={handleResendCode}
                disabled={time > 0}
                className={`text-sm font-normal ${time > 0 ? 'cursor-not-allowed text-gray-400' : 'cursor-pointer text-primary'}`}
              >
                إعادة ارسال
              </button>
            </div>
          </div>
        </CustomCardAuth>
      </Container>
    </>
  );
};
