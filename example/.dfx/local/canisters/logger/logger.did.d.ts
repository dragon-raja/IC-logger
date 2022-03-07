import type { Principal } from '@dfinity/principal';
export interface Stats {
  'bucket_sizes' : Array<bigint>,
  'start_index' : bigint,
}
export interface TextLogger {
  'allow' : (arg_0: Array<Principal>) => Promise<undefined>,
  'append' : (arg_0: Array<string>) => Promise<undefined>,
  'stats' : () => Promise<Stats>,
  'view' : (arg_0: bigint, arg_1: bigint) => Promise<View>,
}
export interface View { 'messages' : Array<string>, 'start_index' : bigint }
export interface _SERVICE extends TextLogger {}
