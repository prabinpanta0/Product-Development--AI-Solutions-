import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Enable CORS
app.use(cors());

// Proxy endpoint
app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://integrate.api.nvidia.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '', // Remove '/api' from the proxied request
    },
    onProxyReq: (proxyReq) => {
      // Add Authorization header dynamically from .env file
      const apiKey = process.env.NVIDIA_API_KEY;
      if (apiKey) {
        proxyReq.setHeader('Authorization', `Bearer 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`);
      } else {
        console.error('NVIDIA_API_KEY is not defined in .env file');
      }
    },
    onProxyRes: (proxyRes) => {
      // Add CORS headers to the proxied response
      proxyRes.headers['Access-Control-Allow-Origin'] = '*';
      proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
      proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
    },
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
