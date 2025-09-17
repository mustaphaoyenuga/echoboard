import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import AuthTest from '@/components/AuthTest'

export default async function PrivatePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Protected Page</h1>
      <p>Hello, {data.user.email}!</p>
      <p>User ID: {data.user.id}</p>
      
      <AuthTest />
    </div>
  )
}