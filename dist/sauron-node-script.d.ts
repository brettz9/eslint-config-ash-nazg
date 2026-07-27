/**
* @type {(
  *   pkg: {
  *     type?: "module"|"commonjs"
  *   }
  * ) => import('eslint').Linter.Config[]
  * }
  */
export default function sauronNodeScript(pkg: {
    type?: "module" | "commonjs";
}): import("eslint").Linter.Config<import("@eslint/core").RulesConfig>[];
//# sourceMappingURL=sauron-node-script.d.ts.map