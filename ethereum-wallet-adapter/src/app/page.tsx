"use client"

import { useState } from "react";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

const client = createPublicClient({
  chain: mainnet,
  transport: http()
})

export default function Home() {
  const [balance, setBalance] = useState<string>("");

  async function getBalance() {
    const res = await client.getBalance({ address: '0x08EC37e2eB451AB6Fb29fC14d215b0AeeF170040' });
    setBalance(res.toString());
  }
  return (
    <div className="w-full min-h-screen items-center justify-center">
      <button
        type="button"
        className="bg-zinc-200 text-black mx-auto rounded-xl px-4 py-2"
        onClick={getBalance}
      >
        Get balance
      </button>
      <div>{balance}</div>
    </div>
  );
}
