export const urlParamReplace = (url: string, props: { [k: string]: string }) => {
    const keys = Object.keys(props);
    return keys.reduce((acc: string, crr: string) => acc.replace(`$${crr}`, props[crr])
        , url)
}
