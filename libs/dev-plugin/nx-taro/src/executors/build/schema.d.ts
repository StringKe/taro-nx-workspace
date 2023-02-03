export declare type TargetPlatform =
    | 'weapp'
    | 'swan'
    | 'alipay'
    | 'tt'
    | 'h5'
    | 'rn'
    | 'qq'
    | 'jd'
    | 'quickapp'
export interface BuildExecutorSchema {
    rootDir: string
    appDir: string
    type: TargetPlatform
    t?: TargetPlatform
    watch: boolean
    env: string
    mode: string
    port: number
    platform: string
    resetCache: boolean
    publicPath: string
    bundleOutput: string
    sourcemapOutput: string
    sourcemapUseAbsolutePath: boolean
    sourceMapUrl?: boolean
    sourcemapSourcesRoot: string
    assetsDest: string
    qr: boolean
    blended: boolean
    plugin: string
    envPrefix: string
}
