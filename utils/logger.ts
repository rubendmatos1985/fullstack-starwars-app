function logger(p: NodeJS.Process, logFn: (s: string) => void) {
 
  return (message: string) => p.env.NODE_ENV === 'development' && logFn(message);
}


export default logger(process, console.log);