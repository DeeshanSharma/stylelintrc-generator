interface Stylelintrc {
    extends: string[];
    plugins: string[];
    rules: {};
}
declare function createConfig(): Promise<{
    stylelintrcConfig: Stylelintrc;
    packages: string[];
    packageManager: string;
}>;
export default createConfig;
//# sourceMappingURL=createConfig.d.ts.map