import React from 'react'
import { SignInView } from '@/modules/auth/ui/views/sign-in-view';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

async function page() {
  const session = await auth.api.getSession({
      headers : await headers(),
    })
    if (!!session) {
      redirect("/");
    }
  return <SignInView />
}

export default page