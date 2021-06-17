export function example_cf(custom: Partial<IncomingRequestCfProperties> | undefined): IncomingRequestCfProperties {
  return {
    asn: 9009,
    city: 'New York',
    clientAcceptEncoding: 'gzip, deflate',
    clientTcpRtt: 83,
    colo: 'EWR',
    continent: 'NA',
    country: 'US',
    edgeRequestKeepAliveStatus: 1,
    httpProtocol: 'HTTP/1.1',
    latitude: '40.71570',
    longitude: '-74.00000',
    metroCode: '501',
    postalCode: '10013',
    region: 'New York',
    regionCode: 'NY',
    requestPriority: '',
    timezone: 'America/New_York',
    tlsCipher: 'AEAD-AES256-GCM-SHA384',
    tlsClientAuth: {
      certFingerprintSHA1: '',
      certFingerprintSHA256: '',
      certIssuerDN: '',
      certIssuerDNLegacy: '',
      certIssuerDNRFC2253: '',
      certIssuerSKI: '',
      certIssuerSerial: '',
      certNotAfter: '',
      certNotBefore: '',
      certPresented: '0',
      certRevoked: '0',
      certSKI: '',
      certSerial: '',
      certSubjectDN: '',
      certSubjectDNLegacy: '',
      certSubjectDNRFC2253: '',
      certVerified: 'NONE',
    },
    tlsExportedAuthenticator: {
      clientFinished: 'b7561d5d8703a',
      clientHandshake: 'fa552e3ce2636',
      serverFinished: 'e81f70f5b8de4c',
      serverHandshake: '0f186e19f0a82',
    },
    tlsVersion: 'TLSv1.3',
    ...custom,
  } as IncomingRequestCfProperties
}
