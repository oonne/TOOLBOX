interface Page {
  path: string;
  pageName: string;
}

/* 路由页面 */
const pages: Page[] = [
  {
    path: '/',
    pageName: 'Index',
  },
  {
    path: '/base64',
    pageName: 'Base64',
  },
  {
    path: '/qrcode',
    pageName: 'QRcode',
  },
  {
    path: '/md5',
    pageName: 'MD5',
  },
  {
    path: '/sha',
    pageName: 'SHA',
  },
  {
    path: '/aes',
    pageName: 'AES',
  },
  {
    path: '/rsa',
    pageName: 'RSA',
  },
];

export default pages;
