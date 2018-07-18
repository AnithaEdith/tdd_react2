import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTodo from '.';

describe('AddTodo component', () => {
    let component;
    const submitMock = jest.fn();

    beforeEach(() =>{
      component = shallow(<AddTodo submitTodo={submitMock}/>);
    });

    it('Should render successfully', () => {
      expect(component.exists()).toEqual(true);
    });

    it('Should have an input', () => {
      expect(component.find('.todo_input').length).toEqual(1);
    });
  
  describe('Add todo button', () => {  

    it('Should have a button', () => {
      expect(component.find('.todo_submit').length).toEqual(1);
    });

    it('Should call the submitTodo function when clicked', () => {
      const component = mount(<AddTodo submitTodo={submitMock} />);

      expect(submitMock.mock.calls.length).toEqual(0);
      component.find('form').simulate('submit');
      expect(submitMock.mock.calls.length).toEqual(1);
    });
  });
});