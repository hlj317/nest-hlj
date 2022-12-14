export interface EnvConfig {
    isGlobal?: boolean;  // 启用这个会作用于整个大系统(全局module),而非仅你当前注入的module!
    ignoreEnvFile?: boolean; // 若是开启这个就会忽略.env文件的读取!!
    ignoreEnvVars?: boolean; // 忽略系统级变量注入,默认是关闭(会读取系统变量)
    envFilePath?: string | string[];// .env文件的去,基于运行时根路径找(process.cwd)
    encoding?: string; // 文件编码,推荐utf-8,容错率高!
    validationSchema?: any; // 可以校验所有传入自定义环境变量(没关闭系统变量也会追加进来)
    validationOptions?: Record<string, any>;
    expandVariables?: boolean; // 支持环境变量嵌套变量,
}