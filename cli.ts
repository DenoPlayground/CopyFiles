import { copy } from "./src/copy.ts"

const args = parse(Deno.args)

const srcPath = args._[0].toString() ?? './'
const distPath = args._[1].toString() ?? './dist/'
const exts = (args.exts as string).split(',')

copy(srcPath, distPath, {
  extensions: exts,
  includeDirectories: false,
  overwrite: true
})
