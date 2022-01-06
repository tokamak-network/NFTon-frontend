export const isMetaMask = () => {
  return window.ethereum?.isMetaMask;
}

export const requireMetaMask = () => {
  if (!isMetaMask()) {
    throw 'Metamask not found!';
  }
};

export const requestAccounts = async () => {
  requireMetaMask();

  return await window.ethereum.request({method: 'eth_requestAccounts'});
}

export const getAddress = () => {
  return window.ethereum && window.ethereum.selectedAddress;
}

export const personalSign = async (message) => {
  requireMetaMask();

  const address = getAddress();

  if (!address) {
    throw 'No selected address';
  }

  return await window.ethereum.request({method: 'personal_sign', params: [message, address]});
}
