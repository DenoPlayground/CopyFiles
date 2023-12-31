import { walkSync } from "https://deno.land/std@0.204.0/fs/walk.ts";
import { relative, join } from "https://deno.land/std@0.204.0/path/mod.ts";
import { copySync, ensureFileSync } from "https://deno.land/std@0.204.0/fs/mod.ts";
import { Options } from "./options.d.ts"

export function copy(
    srcPath = './',
    distPath = './dist/',
    options : Options
) : void {
    
    for (const entry of walkSync(
        srcPath,
        {
            includeDirs: options.includeDirectories,
            exts: options.extensions
        }
    )) {
        const fromFilePath = entry.path;
        const to = join(
            distPath,
            relative(
                srcPath, 
                entry.path
            )
        );
        
        ensureFileSync(to)
        copySync(
            fromFilePath,
            to,
            {overwrite: options.overwrite}
        );
    }
}
