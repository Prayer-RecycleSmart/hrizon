import { redirect } from 'next/navigation';

export default function Signup() {
  redirect('/login?view=sign_up');
  return null;
}
