
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi';
import { mainnet, sepolia } from 'wagmi/chains';

// Get projectId from environment variable
const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || '04e7a5a0c0b5bd6c2ddf4676323177a8';

// Configure supported chains
const chains = [mainnet, sepolia];

// Create wagmi config
export const config = defaultWagmiConfig({
  projectId,
  chains,
  metadata: {
    name: 'ChainMatch.AI',
    description: 'AI-Powered Blockchain Partnership Platform',
    url: 'https://chainmatch.ai',
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
  },
});

// Create web3modal instance
export const web3Modal = createWeb3Modal({
  wagmiConfig: config,
  projectId,
  chains,
  themeMode: 'light',
  themeVariables: {
    '--w3m-accent': 'rgb(var(--blockchain-500))',
    '--w3m-border-radius-master': '0.5rem',
  },
});
