import { createConfig, http } from 'wagmi';
import { mainnet, optimism, polygon, arbitrum, bsc } from 'wagmi/chains';

const config = createConfig({
  chains: [mainnet, optimism, polygon, arbitrum, bsc],
  transports: {
    [mainnet.id]: http(),
    [optimism.id]: http(),
    [polygon.id]: http(),
    [arbitrum.id]: http(),
    [bsc.id]: http(),
  },
});

export { config };
