import { ThirdwebProvider, ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { createThirdwebClient } from "thirdweb";

const client = createThirdwebClient({
  clientId: "0567ad836257d1c4f7277f78dca31c13",
});

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
];

export function ConnectionButton() {
  return (
    <div className="border-black outline rounded-xl overflow-hidden">
      <ThirdwebProvider>
        <ConnectButton
          client={client}
          wallets={wallets}
          theme={"dark"}
          connectButton={{
            label: "Connect Wallet",
          }}
          connectModal={{ size: "wide" }}
        />
      </ThirdwebProvider>
    </div>
  );
}
