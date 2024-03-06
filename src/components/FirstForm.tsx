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

const FirstForm = () => {
  const form = useForm();

  return (
    <>
      {/* 이름 */}
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>이름</FormLabel>
            <FormControl>
              <Input placeholder="홍길동" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* 이메일 */}
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>이메일</FormLabel>
            <FormControl>
              <Input placeholder="abcd1234@gmail.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* 연락처 */}
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>연락처</FormLabel>
            <FormControl>
              <Input placeholder="01012345678" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* 역할 */}
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>역할</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="역할을 선택해 주세요" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="admin ">관리자</SelectItem>
                <SelectItem value="user">일반사용자</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default FirstForm;
