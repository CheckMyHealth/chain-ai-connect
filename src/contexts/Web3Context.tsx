
import React, { createContext, useContext, useState } from 'react';
import { useAccount, useConnect, useDisconnect, useSignMessage } from 'wagmi';
import { toast } from '@/hooks/use-toast';
import { type SignableMessage } from 'viem';

type Web3ContextType = {
  isConnected: boolean;
  address: string | undefined;
  connecting: boolean;
  connectWallet: () => void;
  disconnectWallet: () => void;
  signMessage: (message: string) => Promise<`0x${string}` | undefined>;
  chainId: number | undefined;
};

const Web3Context = createContext<Web3ContextType | undefined>(undefined);

export const Web3Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { address, isConnected, chainId } = useAccount();
  const { connectAsync, isPending } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { signMessageAsync } = useSignMessage();
  const [connecting, setConnecting] = useState(false);

  const connectWallet = async () => {
    try {
      setConnecting(true);
      await connectAsync({ connector: { id: 'injected' } });
      toast({
        title: "Wallet connected",
        description: "Your wallet has been connected successfully."
      });
    } catch (error: any) {
      toast({
        title: "Connection failed",
        description: error.message || "Failed to connect wallet",
        variant: "destructive",
      });
    } finally {
      setConnecting(false);
    }
  };

  const disconnectWallet = async () => {
    try {
      await disconnectAsync();
      toast({
        title: "Wallet disconnected",
        description: "Your wallet has been disconnected."
      });
    } catch (error: any) {
      toast({
        title: "Disconnect failed",
        description: error.message || "Failed to disconnect wallet",
        variant: "destructive",
      });
    }
  };

  const signMessage = async (message: string) => {
    if (!address) return undefined;
    
    try {
      const signableMessage: SignableMessage = message;
      const signature = await signMessageAsync({ 
        account: address,
        message: signableMessage 
      });
      return signature;
    } catch (error: any) {
      toast({
        title: "Signing failed",
        description: error.message || "Failed to sign message",
        variant: "destructive",
      });
      return undefined;
    }
  };

  const value = {
    isConnected,
    address,
    connecting: connecting || isPending,
    connectWallet,
    disconnectWallet,
    signMessage,
    chainId,
  };

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
};

export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (context === undefined) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  return context;
};
