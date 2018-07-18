npm install -g create-react-app
create-react-app my-react-todolist
cd my-react-todolist
delete all default node modules

npm install
npm run test
npm i jest
npm i jest-cli
npm uninstall jest jest-cli
yarn remove jest jest-cli

yarn install
yarn test
yarn start
npm install --save-dev enzyme react-test-renderer


Part 2
create a file src/setupTests.js
	
	import { configure } from 'enzyme';
	import Adapter from 'enzyme-adapter-react-16';
	configure({ adapter: new Adapter() });
	
create components/addTodo inside src
create test.js






