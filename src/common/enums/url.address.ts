enum urlAddress {
  Protocol = 'http://',
  Domain = 'localhost',
  Port = '80'
}

export function getURL() {
  return `${urlAddress.Protocol}${urlAddress.Domain}:${urlAddress.Port}`
}

export default getURL;