import { createModel } from "xstate/lib/model";

const walletModel = createModel(
  {
    address: "",
  },
  {
    events: {
      connect: (value: string) => ({ value }),
      disconnect: () => ({}),
    },
  },
);

const clearWallet = walletModel.assign(
  {
    address: walletModel.initialContext.address,
  },
  "disconnect",
);

const setWallet = walletModel.assign(
  {
    address: (_, event) => event.value,
  },
  "connect",
);

const walletMachine = walletModel.createMachine({
  id: "onboardMachine",
  context: walletModel.initialContext,
  initial: "disconnected",
  states: {
    disconnected: {
      on: {
        connect: {
          actions: setWallet,
          target: "connected",
        },
      },
    },
    connected: {
      on: {
        disconnect: {
          actions: clearWallet,
          target: "disconnected",
        },
      },
    },
  },
});

export default walletMachine;
