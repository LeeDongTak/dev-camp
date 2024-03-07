import { Button } from '@/components/ui/button';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { FaArrowRight } from 'react-icons/fa';
import { fromType } from '@/types/types';

const LastForm = ({ form }: fromType) => {
  return (
    <>
      {/* 비밀번호 */}
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>비밀번호</FormLabel>
            <FormControl>
              <Input type={'password'} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* 비밀번호 확인 */}
      <FormField
        control={form.control}
        name="passwordConfirm"
        render={({ field }) => (
          <FormItem>
            <FormLabel>비밀번호 확인</FormLabel>
            <FormControl>
              <Input type={'password'} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default LastForm;
