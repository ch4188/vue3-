/*
 * @Description:
 * @Date: 2023-05-09 10:11:03
 * @LastEditTime: 2023-05-09 16:55:30
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import stylelintPlugin from 'vite-plugin-stylelint';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), eslintPlugin(), stylelintPlugin({ fix: true })],
});
