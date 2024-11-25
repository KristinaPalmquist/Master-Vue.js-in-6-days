import { createApp } from 'vue';
import App from './App.vue';
import directives from './directives';

const app = createApp(App);
for (let name in directives) {
  app.directive(name, directives[name]);
}
app.mount('#app');
