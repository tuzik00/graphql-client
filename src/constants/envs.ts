import nextConfig from 'next/config';

interface NextConfigType {
    publicRuntimeConfig: Record<string, string>;
}

const {
    publicRuntimeConfig,
} = nextConfig() as NextConfigType;

export const PORT = publicRuntimeConfig?.PORT;
export const APOLLO_GATEWAY = publicRuntimeConfig?.APOLLO_GATEWAY;
export const APOLLO_GATEWAY_WS = publicRuntimeConfig?.APOLLO_GATEWAY_WS;

