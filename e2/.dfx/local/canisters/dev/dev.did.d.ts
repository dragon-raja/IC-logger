import type { Principal } from '@dfinity/principal';
export type Error = { 'PermissionDenied' : null };
export type Result = { 'ok' : string } |
  { 'err' : Error };
export type Result_1 = { 'ok' : canister_id } |
  { 'err' : Error };
export type canister_id = Principal;
export interface dev {
  'create_canister' : () => Promise<Result_1>,
  'delete_canister' : (arg_0: canister_id) => Promise<Result>,
  'install_code' : (arg_0: Array<number>, arg_1: canister_id) => Promise<
      Result
    >,
  'start_canister' : (arg_0: canister_id) => Promise<Result>,
  'stop_canister' : (arg_0: canister_id) => Promise<Result>,
}
export interface _SERVICE extends dev {}
