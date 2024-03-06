import { Inter } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import FirstForm from '@/components/FirstForm';
import LastForm from '@/components/LastForm';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export default function Home() {
  const [isForm, setIsForm] = useState(true);
  const form = useForm();

  const onSubmit = () => {
    console.log('asdf');
  };

  return (
    <Card className={cn('fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px]')}>
      <CardHeader>
        <CardTitle className={cn('text-2xl')}>계정을 생성합니다</CardTitle>
        <CardDescription>필수 정보를 입력헤볼게요.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {isForm ? <FirstForm /> : <LastForm />}
            {isForm ? (
              <Button
                type="button"
                className={cn('gap-2')}
                onClick={() => {
                  setIsForm(!isForm);
                }}
              >
                <span>다음단계로</span>
                <FaArrowRight />
              </Button>
            ) : (
              <>
                <Button type="button">
                  <span>계정 등록하기</span>
                </Button>
                <Button
                  type="button"
                  className={cn('gap-2 ml-5 bg-[none] text-[#000] shadow-none hover:bg-[none]')}
                  onClick={() => {
                    setIsForm(!isForm);
                  }}
                >
                  <FaArrowLeft />
                  <span>이전단계로</span>
                </Button>
              </>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
