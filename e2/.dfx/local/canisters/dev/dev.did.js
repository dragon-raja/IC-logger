export const idlFactory = ({ IDL }) => {
  const canister_id = IDL.Principal;
  const Error = IDL.Variant({ 'PermissionDenied' : IDL.Null });
  const Result_1 = IDL.Variant({ 'ok' : canister_id, 'err' : Error });
  const Result = IDL.Variant({ 'ok' : IDL.Text, 'err' : Error });
  const dev = IDL.Service({
    'create_canister' : IDL.Func([], [Result_1], []),
    'delete_canister' : IDL.Func([canister_id], [Result], []),
    'install_code' : IDL.Func([IDL.Vec(IDL.Nat8), canister_id], [Result], []),
    'start_canister' : IDL.Func([canister_id], [Result], []),
    'stop_canister' : IDL.Func([canister_id], [Result], []),
  });
  return dev;
};
export const init = ({ IDL }) => { return []; };
