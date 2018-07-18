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



https://hackernoon.com/a-guide-to-tdd-a-react-redux-todolist-app-part-1-b8a200bb7091
https://hackernoon.com/a-guide-to-tdd-a-react-redux-todolist-app-part-2-8d4cb2dc154c
https://hackernoon.com/a-guide-to-tdd-a-react-redux-todolist-app-part-3-f25c2289c54
https://hackernoon.com/a-guide-to-tdd-a-react-redux-todolist-app-part-4-edb62e113c9b

https://semaphoreci.com/community/tutorials/getting-started-with-tdd-in-react





