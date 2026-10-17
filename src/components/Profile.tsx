
"use client";

import { useSession, signOut, authClient } from "@/lib/auth-client";
import Image from "next/image";


const Profile = () => {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    await authClient.signOut();
    window.location.href='/sign-in'
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4">
        <div className="min-h-20 min-w-20 rounded-2xl bg-gray-300 flex justify-center items-center">
          {session?.user.image ? (
            <Image
              src={session.user.image}
              alt={session.user.name}
              width={80}
              height={80}
              className="rounded-2xl"
            />
          ) : (
            <p>{session?.user.name?.[0]}</p>
          )}
        </div>

        <div>
          <h1 className="text-[17px] font-bold">
            {session?.user.name}
          </h1>
          <p>{session?.user.email}</p>
        </div>
      </div>

      <button
        className="btn text-red-700 border border-red-700"
        onClick={handleSignOut}
      >
        ↩ সাইন আউট
      </button>
    </div>
  );
};

export default Profile;