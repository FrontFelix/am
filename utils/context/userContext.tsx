import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Web3 from "web3";
declare var window: any;

interface userContextValue {
  signedInUser: any;
  signIn: () => void;
}

export const UserContext = createContext<userContextValue>({
  signedInUser: "",
  signIn: () => {},
});

export function UserWrapper({ children }: any) {
  const [signedInUser, setSignedInUser] = useState<any>();

  async function signIn() {
    if (!window.ethereum)
      return toast.error(
        "You need to have a crypto wallet connected to your browser"
      );
    let web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    if (!web3) return;
    const accounts = await web3.eth.getAccounts();
    const userAddress = await accounts[0];
    setSignedInUser(userAddress);
  }

  useEffect(() => {
    async function check() {
      if (!window.ethereum) return console.log("fuck u");
      try {
        let web3 = new Web3(window.ethereum);
        if (!web3) return;
        let accounts: any;
        try {
          accounts = await web3.eth.getAccounts();
        } catch {
          console.log("error");
        }
        if (accounts.length === 0) {
          setSignedInUser(undefined);
        } else {
          setSignedInUser(accounts[0]);
        }
        const userAddress = await accounts[0];
        setSignedInUser(userAddress);
      } catch {
        console.log("error");
      }
    }
    check();
    console.log(signedInUser);
  }, [signedInUser]);

  return (
    <UserContext.Provider value={{ signedInUser, signIn }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
