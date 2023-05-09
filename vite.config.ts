/*
 * @Description:
 * @Date: 2023-05-09 10:11:03
 * @LastEditTime: 2023-05-09 11:07:52
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), eslintPlugin()],
});
