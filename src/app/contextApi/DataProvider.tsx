
"use client";

import { useSession } from "@/lib/auth-client";
import React, {
  createContext,
  useEffect,
  useState,
} from "react";

type datas = {
  name: string | undefined;
  setName: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
};

export const Datas = createContext<datas | undefined>(undefined);

const DataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: session } = useSession();

  const [name, setName] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (session?.user.name) {
      setName(session.user.name);
    }
  }, [session?.user.name]);

  const value: datas = {
    name,
    setName,
  };

  return (
    <Datas.Provider value={value}>
      {children}
    </Datas.Provider>
  );
};

export default DataProvider;
