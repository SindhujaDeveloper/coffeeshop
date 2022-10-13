

interface IEnvironmentStore {
    [key: string]: string | string[] | number[] | undefined;
    REACT_APP_API_BASE_URL?: string;
}

interface IENVConfig {
    apiBaseURL: string | undefined;
}

export let compileTimeEnv: IEnvironmentStore;
try {
    compileTimeEnv = process.env as IEnvironmentStore;
} catch (error) {
    compileTimeEnv = {};
}

export let config: IENVConfig = {
    apiBaseURL: compileTimeEnv.REACT_APP_API_BASE_URL,
};
