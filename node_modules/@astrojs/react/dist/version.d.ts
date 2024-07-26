export type SupportedReactVersion = keyof typeof versionsConfig;
export type ReactVersionConfig = (typeof versionsConfig)[SupportedReactVersion];
export declare function getReactMajorVersion(): number;
export declare function isUnsupportedVersion(majorVersion: number): boolean;
export declare const versionsConfig: {
    17: {
        server: string;
        client: string;
        externals: string[];
    };
    18: {
        server: string;
        client: string;
        externals: string[];
    };
    19: {
        server: string;
        client: string;
        externals: string[];
    };
};
