'use client'

import { useFormRegister } from '@new/forms/src/register'

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useFormRegister()

  const formData = watch()

  console.log(formData, errors)

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data)
        })}
      >
        <input className="border border-gray-300" {...register('name')} />
        <div>{errors.name?.message && <span>{errors.name?.message}</span>}</div>
        <input className="border border-gray-300" {...register('image')} />
        <div>
          {errors.image?.message && <span>{errors.image?.message}</span>}
        </div>
        <input className="border border-gray-300" {...register('email')} />
        <div>
          {errors.email?.message && <span>{errors.email?.message}</span>}
        </div>
        <input
          className="border border-gray-300"
          type="password"
          {...register('password')}
        />
        <div>
          {errors.password?.message && <span>{errors.password?.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
