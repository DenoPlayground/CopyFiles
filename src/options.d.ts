export interface Options {
    /** 
     * List of file extensions used to filter entries. If specified, entries without the file
     * extension specified by this option are excluded.
     */
    extensions : string[],
    /** Indicates whether directory entries should be included or not. */
    includeDirectories : boolean,
    /** Overwrite existing file or directory. */
    overwrite : boolean
}
