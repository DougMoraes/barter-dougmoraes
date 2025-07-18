'use client'

import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'

import { Mail, Lock, User, Eye, EyeClosed } from 'lucide-react'
import PhoneInput from 'react-phone-input-2'

import '@/styles/phone-input-overrides.css'

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.email('Invalid email'),
  password: z.string().min(6, 'Min 6 characters'),
  phone: z.string().min(4, 'Phone is required'),
})

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      phone: '',
    },
  })

  const togglePassword = () => setShowPassword(!showPassword)

  const inputWrapper = 'flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 bg-white text-sm placeholder:text-gray-500'

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className={inputWrapper}>
                  <User className="h-4 w-4" />
                  <input
                    {...field}
                    type="text"
                    placeholder="Michel Kerkmeester"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className={inputWrapper}>
                  <Mail className="h-4 w-4" />
                  <input
                    {...field}
                    type="email"
                    placeholder="michel@gebarter.com"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className={inputWrapper}>
                  <Lock className="h-4 w-4" />
                  <input
                    {...field}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="bg-transparent w-full outline-none"
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                  >
                   {showPassword ? <EyeClosed className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <PhoneInput
                  {...field}
                  country={'nl'}
                  inputClass="!w-full !bg-white !text-sm !border-gray-300 !rounded-md pl-12 !py-2"
                  buttonClass="!border-none !bg-transparent"
                  enableSearch
                  placeholder="+31 06 0000 0000"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-[#b72E77] hover:bg-[#a5266b] text-white">
          Get started
        </Button>
      </form>
    </Form>
  )
}