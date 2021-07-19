const ETHEREUM_ADDRESS_REGEX: RegExp = new RegExp("^0x[a-fA-F0-9]{40}$");

export function shortenAddress(address: string, digits: number = 4): string {
  if (!address.match(ETHEREUM_ADDRESS_REGEX)) {
    console.error(`Invalid "address" parameter "${address}".`);
    return "Unknown";
  }
  return `${address.substring(0, digits + 2)}...${address.substring(42 - digits)}`;
}
