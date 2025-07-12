'use client';
import React from 'react';
import { QRCode } from 'react-qrcode-logo';

export default function MyQRCode() {
  return (
    <div>
      <QRCode
        value="https://master.d1y9m90r3fgfb4.amplifyapp.com"
        logoImage="../favicon.ico" // Can be public/logo.png
        size={200}
      />
    </div>
  );
}