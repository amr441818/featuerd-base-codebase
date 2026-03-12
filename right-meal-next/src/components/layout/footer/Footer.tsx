'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Container } from '@/features/shared';
import Logo from './Logo';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    const locale = useLocale();

    // Mock links based on the screenshot
    const navLinks = [
        { label: 'الخطط', href: '#' },
        { label: 'وجباتنا', href: '#' },
        { label: 'الوظائف', href: '#' },
        { label: 'الخطط والباقات', href: '#' },
    ];

    return (
        <footer className='bg-white pt-16 pb-6 border-t border-gray-100 overflow-hidden relative'>
            <Container>
                <div className='flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8'>
                    
                    {/* Right Side (in RTL) / Logo & Nav & Selectors */}
                    <div className='flex flex-col items-end w-full lg:w-auto rtl:items-start ltr:items-end'>
                        
                        {/* Logo */}
                        <div className="mb-8 w-32 h-20 relative">
                            {/* Assuming Logo component or Image */}
                            <Image 
                                src="/images/Rectangle 4601.svg" 
                                alt="The Right Meal" 
                                fill
                                className="object-contain object-right"
                            />
                        </div>

                        {/* Navigation Links */}
                        <div className='flex flex-wrap gap-6 mb-8 rtl:flex-row-reverse justify-end'>
                            {navLinks.map((link, idx) => (
                                <Link 
                                    key={idx} 
                                    href={link.href}
                                    className='text-[#8D99A5] text-[16px] font-bold hover:text-primary transition-colors'
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Selectors */}
                        <div className='flex gap-4 rtl:flex-row-reverse w-full sm:w-auto justify-end'>
                            <Select defaultValue="sa">
                                <SelectTrigger className="w-[140px] h-[48px] rounded-[12px] border-[#EBEBEB] text-[#2A2A2A] font-bold rtl:flex-row-reverse">
                                    <SelectValue placeholder="Country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="sa">
                                        <div className="flex items-center gap-2 rtl:flex-row-reverse justify-between w-full">
                                            <span>العربية</span>
                                            <span className="text-xl">🇸🇦</span>
                                        </div>
                                    </SelectItem>
                                    <SelectItem value="ae">
                                        <div className="flex items-center gap-2 rtl:flex-row-reverse justify-between w-full">
                                            <span>العربية</span>
                                            <span className="text-xl">🇦🇪</span>
                                        </div>
                                    </SelectItem>
                                </SelectContent>
                            </Select>

                            <Select defaultValue="world">
                                <SelectTrigger className="w-[140px] h-[48px] rounded-[12px] border-[#EBEBEB] text-[#2A2A2A] font-bold rtl:flex-row-reverse text-right">
                                    <SelectValue placeholder="Region" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="world">العالم</SelectItem>
                                    <SelectItem value="mena">الشرق الأوسط</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                    </div>

                    {/* Left Side (in RTL) / QR & Socials */}
                    <div className='flex flex-col items-start rtl:items-end w-full lg:w-auto'>
                        
                        {/* QR Code Box */}
                        <div className='border border-[#EBEBEB] rounded-[24px] p-4 flex items-center gap-4 bg-white mb-8 min-w-[280px] justify-between rtl:flex-row-reverse'>
                            <p className='text-[#343B42] text-[16px] font-bold max-w-[120px] leading-tight text-right'>
                                امسح رمز QR لتنزيل التطبيق
                            </p>
                            <div className='w-[80px] h-[80px] relative bg-white shrink-0'>
                                <Image 
                                    src="/images/home/qr 1.svg"
                                    alt="QR Code"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className='flex items-center gap-5 justify-start rtl:justify-end w-full rtl:flex-row-reverse'>
                            <Link href="#" className='text-[#8D99A5] hover:text-primary transition-colors'>
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className='text-[#8D99A5] hover:text-primary transition-colors'>
                                {/* Replace with X icon if available, using Twitter for now */}
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className='text-[#8D99A5] hover:text-primary transition-colors'>
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className='text-[#8D99A5] hover:text-primary transition-colors'>
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className='text-[#8D99A5] hover:text-primary transition-colors'>
                                {/* Snapchat Placeholder */}
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.11 0c-2.3 0-4.32 1.48-5.07 3.59-.28.8-.46 1.7-.58 2.65-.12.87-.22 1.81-.31 2.8-.2.24-.44.47-.72.67-.77.56-1.78.85-2.8.85-1.14 0-2.2-.39-2.63-1.07-.15-.22-.17-.48-.04-.75.14-.3.45-.52.87-.64.44-.12.87-.14 1.15-.14.24 0 .42.02.5.04.22-.16.35-.4.36-.67.01-.26-.1-.52-.31-.69-.26-.2-.68-.26-1.07-.2-1.06.15-2.07.67-2.73 1.45-.63.74-.75 1.7-.31 2.56.44.86 1.34 1.48 2.58 1.71 1.25.24 2.8.14 4.09-.34 0 .04 0 .09-.01.13-.09.91-.01 1.83.21 2.76t.62 1.84c.38.83.87 1.63 1.48 2.37.52.62 1.1 1.19 1.73 1.69-.18.15-.39.29-.62.42-.81.44-1.8.68-2.88.68-2.25 0-3.95-1.01-4.74-2.8-.21-.49-.24-1.02-.13-1.55.12-.55.43-1.04.85-1.42.54-.48 1.23-.74 1.95-.74.66 0 1.28.2 1.82.55.22.14.5.15.74.03.23-.12.39-.34.42-.59.04-.26-.06-.52-.27-.68-.69-.53-1.58-.82-2.52-.82-1.12 0-2.18.39-2.99 1.11-.8.71-1.3 1.66-1.44 2.7-.15 1.05.07 2.11.64 3.01.62.97 1.55 1.72 2.68 2.15 1.12.43 2.36.46 3.53.11 1.05-.32 2.01-.9 2.79-1.68.75.52 1.62.83 2.53.83.84 0 1.66-.27 2.39-.75.76.75 1.68 1.3 2.7 1.6 1.13.33 2.33.3 3.42-.1.97-.36 1.82-1.03 2.44-1.9.62-.87.97-1.92.93-3 0-1.13-.4-2.19-1.13-3.03-.7-.8-1.78-1.51-3.04-1.51-.77 0-1.5.21-2.11.62.44.29.81.65 1.1 1.07.13.19.16.43.08.64-.09.22-.27.38-.49.44-.21.05-.44 0-.6-.15-.41-.41-.9-.72-1.46-.87-.6-.16-1.24-.13-1.83.08-1.11.37-2 .99-2.67 1.74-.24-.13-.46-.27-.65-.43.62-.51 1.19-1.08 1.7-1.71.6-.74 1.08-1.55 1.45-2.38.41-.92.65-1.85.74-2.77 0-.04.01-.09.01-.13 1.28.48 2.82.59 4.07.34 1.24-.24 2.14-.86 2.58-1.72.44-.86.32-1.83-.31-2.56-.66-.78-1.67-1.3-2.73-1.45-.4-.05-.82.01-1.07.2-.21.17-.32.44-.31.69.01.27.14.5.36.67.08-.02.26-.04.5-.04.28 0 .7.02 1.15.14.42.12.73.34.87.64.13.27.11.53-.04.75-.42.67-1.48 1.06-2.61 1.06-1.03 0-2.04-.29-2.82-.86-.28-.2-.52-.43-.72-.67-.09-.99-.18-1.93-.31-2.8-.13-.96-.31-1.86-.59-2.66-.75-2.1-2.77-3.58-5.07-3.58z" />
                                </svg>
                            </Link>
                            <Link href="#" className='text-[#8D99A5] hover:text-primary transition-colors'>
                                {/* Tiktok Placeholder */}
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.58-.67 3.11-1.68 4.31-1.04 1.25-2.52 2.06-4.13 2.32-1.6.25-3.26.04-4.71-.62-1.48-.68-2.69-1.86-3.35-3.33-.67-1.48-.82-3.17-.43-4.73.37-1.48 1.25-2.79 2.5-3.66 1.25-.86 2.82-1.22 4.32-1.04.14.02.29.04.43.08v3.91c-.24-.04-.49-.06-.73-.06-1.27-.05-2.52.5-3.37 1.4-.85.9-1.19 2.18-.88 3.4.3 1.24 1.21 2.24 2.42 2.64 1.2.4 2.54.21 3.59-.49 1.05-.7 1.71-1.85 1.75-3.1.04-3.52.02-7.05.02-10.58C12.5 5.56 12.53 2.79 12.53.02z" />
                                </svg>
                            </Link>
                        </div>

                    </div>
                    
                </div>
                
                {/* Copyright Line */}
                <div className='w-full border-t border-[#EBEBEB] mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center  gap-4 pb-4'>
                    <p className='text-[#8D99A5] text-[15px] font-medium'>
                        حقوق الملكية لدى @2025 RightMeal
                    </p>
                    <div className='flex gap-6 rtl:flex-row-reverse'>
                        <Link href="#" className='text-[#8D99A5] text-[15px] hover:text-primary transition-colors font-medium'>
                            سياسة الخصوصية
                        </Link>
                        <Link href="#" className='text-[#8D99A5] text-[15px] hover:text-primary transition-colors font-medium'>
                            الشروط والأحكام
                        </Link>
                    </div>
                </div>

            </Container>
        </footer>
    );
};

export default Footer;
