export const idlFactory = ({ IDL }) => {
  const Stats = IDL.Record({
    'bucket_sizes' : IDL.Vec(IDL.Nat),
    'start_index' : IDL.Nat,
  });
  const View = IDL.Record({
    'messages' : IDL.Vec(IDL.Text),
    'start_index' : IDL.Nat,
  });
  const TextLogger = IDL.Service({
    'allow' : IDL.Func([IDL.Vec(IDL.Principal)], [], ['oneway']),
    'append' : IDL.Func([IDL.Vec(IDL.Text)], [], ['oneway']),
    'stats' : IDL.Func([], [Stats], ['query']),
    'view' : IDL.Func([IDL.Nat, IDL.Nat], [View], ['query']),
  });
  return TextLogger;
};
export const init = ({ IDL }) => { return []; };
