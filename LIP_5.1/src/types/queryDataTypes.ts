export interface QueryDataTypes {
  kexBalance: number | undefined
  krystalBalance: number | undefined
  stakedBalance: number | undefined
  allowance: number | undefined
  loadAllowance: () => any
  updateInfo: () => any
}