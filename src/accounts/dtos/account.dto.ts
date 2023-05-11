import { ICheckingAccountDTO } from './checkingaccount.dto';
import { ISavingAccountDTO } from './savingsaccount.dto';

export type Account = ICheckingAccountDTO | ISavingAccountDTO;