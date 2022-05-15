# Keeping tests in src folder

 * For each file in `src/**/\*.ts` we have a test in `src/**/test/\*.test.ts`
 * `tsconfig.json`, section `exclude` removes `test/\*.test.ts` files from transpiling
 * uvu glob `.*\\.test\\.ts` takes only test files as tests
