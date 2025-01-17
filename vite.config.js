import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/focus/api': {                // ✅ API 경로를 프록시로 지정
                target: 'http://localhost:8088',  // ✅ Spring Boot 서버로 요청 전달
                changeOrigin: true,               // ✅ 도메인 오리진 변경
                secure: false                     // ✅ HTTPS 인증서 무시 (테스트용)
            }
        }
    }
});