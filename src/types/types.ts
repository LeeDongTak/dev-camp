import { authRegisterSchema } from '@/validation/isValidAuth';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

// zod로 지정한 타입을 type형식으로 뽑아낸것
export type RegisterInput = z.infer<typeof authRegisterSchema>;

export interface fromType {
  form: UseFormReturn<RegisterInput, any, undefined>;
}
