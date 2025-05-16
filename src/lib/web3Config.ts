
import { createConfig } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';

// Get projectId from environment variable
const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || '04e7a5a0c0b5bd6c2ddf4676323177a8';

// Configure supported chains
const chains = [mainnet, sepolia];

// Create wagmi config
export const config = createConfig({
  chains,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

import { http } from 'wagmi/transports';
