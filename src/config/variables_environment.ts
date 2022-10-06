export const routeEnvironment = (isProduction: boolean): string => {
  return isProduction ? "/" : "/sys4200/eventos"; 
};