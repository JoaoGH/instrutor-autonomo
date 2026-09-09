import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { SITE_CONFIG, CONTACT_INFO } from './src/data/content.js';

function htmlInjectPlugin() {
  return {
    name: 'html-inject-plugin',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        const replacements = {
          '%SITE_TITLE%': SITE_CONFIG.title,
          '%SITE_DESCRIPTION%': SITE_CONFIG.description,
          '%SITE_URL%': SITE_CONFIG.url,
          '%SITE_CANONICAL%': SITE_CONFIG.canonicalUrl,
          '%SITE_OG_IMAGE%': SITE_CONFIG.ogImage,
          '%CONTACT_NAME%': CONTACT_INFO.name,
          '%CONTACT_PHONE_TEL%': CONTACT_INFO.phoneTel,
          '%CONTACT_CITY%': CONTACT_INFO.city,
          '%CONTACT_STATE%': CONTACT_INFO.state,
          '%CONTACT_REGION%': CONTACT_INFO.region,
          '%CONTACT_INSTAGRAM_URL%': CONTACT_INFO.instagramUrl,
        };

        let transformedHtml = html;
        for (const [key, value] of Object.entries(replacements)) {
          transformedHtml = transformedHtml.replaceAll(key, value);
        }
        return transformedHtml;
      },
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), htmlInjectPlugin()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/setupTests.js',
  },
});
