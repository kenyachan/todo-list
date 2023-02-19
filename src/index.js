import './css/style.css';
import './css/logo.css';
import './css/list-item.css';
import './css/app.css';
import { todoApp } from './app.js';
import { screenController } from './screenController';
import { createTestData } from './testData';

let app = todoApp();
//createTestData(app);

let sc = screenController(app);

