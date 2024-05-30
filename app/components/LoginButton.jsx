import { useUser } from '@supabase/auth-helpers-react'

function LoginButton() {
  const { user, login } = useUser()

  return (
    <button onClick={() => login({ email: 'your@email.com' })}>
      Login
    </button> 
  )
}