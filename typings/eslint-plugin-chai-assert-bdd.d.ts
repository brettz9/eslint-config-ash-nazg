declare module 'eslint-plugin-chai-assert-bdd' {
  interface EnvironmentObject {
    environments: {
      'mocha-chai': {
        globals: import('eslint').ESLint.Environment["globals"]
      }
    }
  }
  var chaiAssertBdd: EnvironmentObject
  export = chaiAssertBdd;
}
