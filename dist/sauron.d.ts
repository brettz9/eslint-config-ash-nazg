export default function sauron(pkg: {
    type?: "module" | "commonjs";
    engines?: {
        node?: string;
    };
    browserslist?: string[] | string;
}, types: string[]): import("eslint").Linter.Config[];
//# sourceMappingURL=sauron.d.ts.map