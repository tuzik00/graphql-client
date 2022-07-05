import nextConfig from 'next/config';

interface NextConfigType {
    publicRuntimeConfig: Record<string, string>;
}

const {
    publicRuntimeConfig,
} = nextConfig() as NextConfigType;

export const PORT = publicRuntimeConfig?.PORT;
export const APOLLO_GATEWAY = publicRuntimeConfig?.APOLLO_GATEWAY;
