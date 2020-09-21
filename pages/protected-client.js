import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';

function ProtectedClient() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => setUser(user))
      // if there is no authenticated user, redirect to profile page
      .catch(() => router.push('/profile'))
  }, []);
  if (!user) return null
  return <h1>Hello {user.username} from client route!</h1>
}

export default ProtectedClient