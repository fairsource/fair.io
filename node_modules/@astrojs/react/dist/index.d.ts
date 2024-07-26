import { type Options as ViteReactPluginOptions } from '@vitejs/plugin-react';
import type { AstroIntegration, ContainerRenderer } from 'astro';
export type ReactIntegrationOptions = Pick<ViteReactPluginOptions, 'include' | 'exclude' | 'babel'> & {
    experimentalReactChildren?: boolean;
};
export default function ({ include, exclude, babel, experimentalReactChildren, }?: ReactIntegrationOptions): AstroIntegration;
export declare function getContainerRenderer(): ContainerRenderer;
