'use client'

import { SignupForm } from './SignUpForm'

export default function SignUp() {
  return (
    <div className="flex flex-grow items-center justify-center">
      <div className="w-full max-w-lg">
        <div className="mb-6 px-12 border-b border-gray-300">
          <h1 className="text-3xl font-medium text-center mb-2 tracking-wide">
            Start your free trial today
          </h1>
          <p className="text-center text-sm text-[var(--text-light)]">
            Collaborate with unlimited content creators and influencers in just a few easy steps.
          </p>
          <hr className="mt-6" />
        </div>

        <SignupForm />

        <div className="flex items-start gap-2 py-4 border-b border-gray-300">
          <input
            id="terms"
            type="checkbox"
            className="mt-[2px] h-4 w-4 accent-[var(--dark)] border border-gray-300 rounded-sm"
          />
          <label htmlFor="terms" className="text-xs leading-snug">
            By continuing, you agree to Barter’s{' '}
            <a href="#" className="underline">
              Terms and Conditions
            </a>{' '}
            and{' '}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            .
          </label>
        </div>

        <p className="text-sm mt-8 text-center mt-4">
          Already have an account?{' '}
          <a href="#" className="font-bold">
            Sign-in here
          </a>
        </p>
      </div>
    </div>
  )
}